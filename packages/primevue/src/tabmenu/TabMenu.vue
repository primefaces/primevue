<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <ul ref="nav" :class="cx('tablist')" role="menubar" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="ptm('tablist')">
            <template v-for="(item, i) of model" :key="label(item) + '_' + i.toString()">
                <li
                    v-if="visible(item)"
                    ref="tab"
                    :class="[cx('item', { item, index: i }), item.class]"
                    role="presentation"
                    @click="onItemClick($event, item, i)"
                    @keydown="onKeydownItem($event, item, i)"
                    v-bind="getPTOptions('item', item, i)"
                    :data-p-active="d_activeIndex === i"
                    :data-p-disabled="disabled(item)"
                >
                    <template v-if="!$slots.item">
                        <a ref="tabLink" v-ripple role="menuitem" :href="item.url" :class="cx('itemLink')" :target="item.target" :aria-label="label(item)" :aria-disabled="disabled(item)" :tabindex="-1" v-bind="getPTOptions('itemLink', item, i)">
                            <component v-if="$slots.itemicon" :is="$slots.itemicon" :item="item" :class="cx('itemIcon')" />
                            <span v-else-if="item.icon" :class="[cx('itemIcon'), item.icon]" v-bind="getPTOptions('itemIcon', item, i)" />
                            <span :class="cx('itemLabel')" v-bind="getPTOptions('itemLabel', item, i)">{{ label(item) }}</span>
                        </a>
                    </template>
                    <component v-else :is="$slots.item" :item="item" :index="i" :active="i === d_activeIndex" :label="label(item)" :props="getMenuItemProps(item, i)"></component>
                </li>
            </template>
            <li ref="inkbar" role="none" :class="cx('activeBar')" v-bind="ptm('activeBar')"></li>
        </ul>
    </div>
</template>

<script>
import { getAttribute, find, findSingle, getWidth, getOffset } from '@primeuix/utils/dom';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';
import BaseTabMenu from './BaseTabMenu.vue';

export default {
    name: 'TabMenu',
    extends: BaseTabMenu,
    inheritAttrs: false,
    emits: ['update:activeIndex', 'tab-change'],
    data() {
        return {
            d_activeIndex: this.activeIndex
        };
    },
    watch: {
        activeIndex: {
            flush: 'post',
            handler(newValue) {
                this.d_activeIndex = newValue;
                this.updateInkBar();
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.updateInkBar();
        });

        const activeItem = this.findActiveItem();

        activeItem && (activeItem.tabIndex = '0');
    },
    updated() {
        this.updateInkBar();
    },
    methods: {
        getPTOptions(key, item, index) {
            return this.ptm(key, {
                context: {
                    item,
                    index
                }
            });
        },
        onItemClick(event, item, index) {
            if (this.disabled(item)) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (index !== this.d_activeIndex) {
                this.d_activeIndex = index;
                this.$emit('update:activeIndex', this.d_activeIndex);
            }

            this.$emit('tab-change', {
                originalEvent: event,
                index: index
            });
        },
        onKeydownItem(event, item, index) {
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

                case 'Space':
                case 'NumpadEnter':

                case 'Enter': {
                    this.onItemClick(event, item, index);
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    this.onTabKey();
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

            return nextItem ? (getAttribute(nextItem, 'data-p-disabled') === true ? this.findNextItem(nextItem.children[0]) : nextItem.children[0]) : null;
        },
        findPrevItem(item) {
            const prevItem = item.parentElement.previousElementSibling;

            return prevItem ? (getAttribute(prevItem, 'data-p-disabled') === true ? this.findPrevItem(prevItem.children[0]) : prevItem.children[0]) : null;
        },
        findFirstItem() {
            const firstSibling = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"]');

            return firstSibling ? firstSibling.children[0] : null;
        },
        findLastItem() {
            const siblings = find(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"]');

            return siblings ? siblings[siblings.length - 1].children[0] : null;
        },
        findActiveItem() {
            const activeItem = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');

            return activeItem ? activeItem.children[0] : null;
        },
        setFocusToMenuitem(target, focusableItem) {
            target.tabIndex = '-1';
            focusableItem.tabIndex = '0';
            focusableItem.focus();
        },
        onTabKey() {
            const activeItem = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');
            const focusedItem = findSingle(this.$refs.nav, '[data-pc-section="itemlink"][tabindex="0"]');

            if (focusedItem !== activeItem.children[0]) {
                activeItem && (activeItem.children[0].tabIndex = '0');
                focusedItem.tabIndex = '-1';
            }
        },
        visible(item) {
            return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled === true;
        },
        label(item) {
            return typeof item.label === 'function' ? item.label() : item.label;
        },
        updateInkBar() {
            let tabs = this.$refs.nav.children;
            let inkHighlighted = false;

            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];

                if (getAttribute(tab, 'data-p-active')) {
                    this.$refs.inkbar.style.width = getWidth(tab) + 'px';
                    this.$refs.inkbar.style.left = getOffset(tab).left - getOffset(this.$refs.nav).left + 'px';
                    inkHighlighted = true;
                }
            }

            if (!inkHighlighted) {
                this.$refs.inkbar.style.width = '0px';
                this.$refs.inkbar.style.left = '0px';
            }
        },
        getMenuItemProps(item, index) {
            return {
                action: mergeProps(
                    {
                        class: this.cx('itemLink'),
                        tabindex: -1,
                        onClick: ($event) => this.onItemClick($event, item, index),
                        onKeyDown: ($event) => this.onKeydownItem($event, item, index)
                    },
                    this.getPTOptions('itemLink', item, index)
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('itemIcon'), item.icon]
                    },
                    this.getPTOptions('itemIcon', item, index)
                ),
                label: mergeProps(
                    {
                        class: this.cx('itemLabel')
                    },
                    this.getPTOptions('itemLabel', item, index)
                )
            };
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
