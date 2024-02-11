<template>
    <nav :id="id" :class="cx('root')" v-bind="ptmi('root')">
        <ol ref="list" :class="cx('menu')" v-bind="ptm('menu')">
            <template v-for="(item, index) of model" :key="label(item) + '_' + index.toString()">
                <li
                    v-if="visible(item)"
                    :class="[cx('menuitem', { item, index }), item.class]"
                    :style="item.style"
                    :aria-current="isActive(index) ? 'step' : undefined"
                    @click="onItemClick($event, item, index)"
                    @keydown="onItemKeydown($event, item, index)"
                    v-bind="getPTOptions('menuitem', item, index)"
                    :data-p-highlight="isActive(index)"
                    :data-p-disabled="isItemDisabled(item, index)"
                >
                    <template v-if="!$slots.item">
                        <span :class="cx('action')" v-bind="getPTOptions('action', item, index)">
                            <span :class="cx('step')" v-bind="getPTOptions('step', item, index)">{{ index + 1 }}</span>
                            <span :class="cx('label')" v-bind="getPTOptions('label', item, index)">{{ label(item) }}</span>
                        </span>
                    </template>
                    <component v-else :is="$slots.item" :item="item" :index="index" :active="index === d_activeStep" :label="label(item)" :props="getMenuItemProps(item, index)"></component>
                </li>
            </template>
        </ol>
    </nav>
</template>

<script>
import { DomHandler } from 'primevue/utils';
import { mergeProps } from 'vue';
import BaseSteps from './BaseSteps.vue';

export default {
    name: 'Steps',
    extends: BaseSteps,
    inheritAttrs: false,
    emits: ['update:activeStep', 'step-change'],
    data() {
        return {
            d_activeStep: this.activeStep
        };
    },
    watch: {
        activeStep(newValue) {
            this.d_activeStep = newValue;
        }
    },
    mounted() {
        const firstItem = this.findFirstItem();

        firstItem && (firstItem.tabIndex = '0');
    },
    methods: {
        getPTOptions(key, item, index) {
            return this.ptm(key, {
                context: {
                    item,
                    index,
                    active: this.isActive(index),
                    disabled: this.isItemDisabled(item, index)
                }
            });
        },
        onItemClick(event, item, index) {
            if (this.disabled(item) || this.readonly) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (index !== this.d_activeStep) {
                this.d_activeStep = index;
                this.$emit('update:activeStep', this.d_activeStep);
            }

            this.$emit('step-change', {
                originalEvent: event,
                index: index
            });
        },
        onItemKeydown(event, item) {
            switch (event.code) {
                case 'ArrowRight': {
                    this.navigateToNextItem(event.target);
                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    this.navigateToPrevItem(event.target);
                    event.preventDefault();
                    break;
                }

                case 'Home': {
                    this.navigateToFirstItem(event.target);
                    event.preventDefault();
                    break;
                }

                case 'End': {
                    this.navigateToLastItem(event.target);
                    event.preventDefault();
                    break;
                }

                case 'Tab':
                    //no op
                    break;

                case 'Enter':
                case 'NumpadEnter':

                case 'Space': {
                    this.onItemClick(event, item);
                    event.preventDefault();
                    break;
                }

                default:
                    break;
            }
        },
        navigateToNextItem(target) {
            const nextItem = this.findNextItem(target);

            nextItem && this.setFocusToMenuitem(target, nextItem);
        },
        navigateToPrevItem(target) {
            const prevItem = this.findPrevItem(target);

            prevItem && this.setFocusToMenuitem(target, prevItem);
        },
        navigateToFirstItem(target) {
            const firstItem = this.findFirstItem(target);

            firstItem && this.setFocusToMenuitem(target, firstItem);
        },
        navigateToLastItem(target) {
            const lastItem = this.findLastItem(target);

            lastItem && this.setFocusToMenuitem(target, lastItem);
        },
        findNextItem(item) {
            const nextItem = item.parentElement.nextElementSibling;

            return nextItem ? nextItem.children[0] : null;
        },
        findPrevItem(item) {
            const prevItem = item.parentElement.previousElementSibling;

            return prevItem ? prevItem.children[0] : null;
        },
        findFirstItem() {
            const firstSibling = DomHandler.findSingle(this.$refs.list, '[data-pc-section="menuitem"]');

            return firstSibling ? firstSibling.children[0] : null;
        },
        findLastItem() {
            const siblings = DomHandler.find(this.$refs.list, '[data-pc-section="menuitem"]');

            return siblings ? siblings[siblings.length - 1].children[0] : null;
        },
        setFocusToMenuitem(target, focusableItem) {
            target.tabIndex = '-1';
            focusableItem.tabIndex = '0';
            focusableItem.focus();
        },
        isActive(index) {
            return index === this.d_activeStep;
        },
        isItemDisabled(item, index) {
            return this.disabled(item) || (this.readonly && !this.isActive(index));
        },
        visible(item) {
            return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        },
        label(item) {
            return typeof item.label === 'function' ? item.label() : item.label;
        },
        getMenuItemProps(item, index) {
            return {
                action: mergeProps(
                    {
                        class: this.cx('action'),
                        onClick: ($event) => this.onItemClick($event, item),
                        onKeyDown: ($event) => this.onItemKeydown($event, item)
                    },
                    this.getPTOptions('action', item, index)
                ),
                step: mergeProps(
                    {
                        class: this.cx('step')
                    },
                    this.getPTOptions('step', item, index)
                ),
                label: mergeProps(
                    {
                        class: this.cx('label')
                    },
                    this.getPTOptions('label', item, index)
                )
            };
        }
    }
};
</script>
