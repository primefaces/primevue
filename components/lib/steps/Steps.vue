<template>
    <nav :id="id" :class="cx('root')" v-bind="ptm('root')" data-pc-name="steps">
        <ol ref="list" :class="cx('menu')" v-bind="ptm('menu')">
            <template v-for="(item, index) of model" :key="item.to">
                <li v-if="visible(item)" :class="[cx('menuitem', { item }), item.class]" :style="item.style" v-bind="ptm('menuitem')" :data-p-highlight="isActive(item)" :data-p-disabled="isItemDisabled(item)">
                    <template v-if="!$slots.item">
                        <router-link v-if="!isItemDisabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                            <a
                                :href="href"
                                :class="cx('action', { isActive, isExactActive })"
                                :tabindex="-1"
                                :aria-current="isExactActive ? 'step' : undefined"
                                @click="onItemClick($event, item, navigate)"
                                @keydown="onItemKeydown($event, item, navigate)"
                                v-bind="ptm('action')"
                            >
                                <span :class="cx('step')" v-bind="ptm('step')">{{ index + 1 }}</span>
                                <span :class="cx('label')" v-bind="ptm('label')">{{ label(item) }}</span>
                            </a>
                        </router-link>
                        <span v-else :class="cx('action')" @keydown="onItemKeydown($event, item)" v-bind="ptm('action')">
                            <span :class="cx('step')" v-bind="ptm('step')">{{ index + 1 }}</span>
                            <span :class="cx('label')" v-bind="ptm('label')">{{ label(item) }}</span>
                        </span>
                    </template>
                    <component v-else :is="$slots.item" :item="item"></component>
                </li>
            </template>
        </ol>
    </nav>
</template>

<script>
import { DomHandler } from 'primevue/utils';
import BaseSteps from './BaseSteps.vue';

export default {
    name: 'Steps',
    extends: BaseSteps,
    mounted() {
        const firstItem = this.findFirstItem();

        firstItem.tabIndex = '0';
    },
    methods: {
        onItemClick(event, item, navigate) {
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

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onItemKeydown(event, item, navigate) {
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

                case 'Space': {
                    this.onItemClick(event, item, navigate);
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
        isActive(item) {
            return item.to ? this.$router.resolve(item.to).path === this.$route.path : false;
        },
        isItemDisabled(item) {
            return this.disabled(item) || (this.readonly && !this.isActive(item));
        },
        visible(item) {
            return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        },
        label(item) {
            return typeof item.label === 'function' ? item.label() : item.label;
        }
    }
};
</script>
