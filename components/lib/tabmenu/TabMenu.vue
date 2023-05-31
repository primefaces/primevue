<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="tabmenu">
        <ul ref="nav" :class="cx('menu')" role="menubar" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" v-bind="ptm('menu')">
            <template v-for="(item, i) of focusableItems" :key="label(item) + '_' + i.toString()">
                <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                    <li
                        v-if="visible(item)"
                        ref="tab"
                        :class="[cx('menuitem', { item, isActive, isExactActive }), item.class]"
                        :style="item.style"
                        role="presentation"
                        v-bind="getPTOptions('menuitem', i)"
                        :data-p-highlight="exact ? isExactActive : isActive"
                        :data-p-disabled="disabled(item)"
                    >
                        <template v-if="!$slots.item">
                            <a
                                ref="tabLink"
                                v-ripple
                                role="menuitem"
                                :href="href"
                                :class="cx('action')"
                                :aria-label="label(item)"
                                :aria-disabled="disabled(item)"
                                :tabindex="isExactActive ? '0' : '-1'"
                                @click="onItemClick($event, item, i, navigate)"
                                @keydown="onKeydownItem($event, i, navigate)"
                                v-bind="getPTOptions('action', i)"
                            >
                                <component v-if="$slots.itemicon" :is="$slots.itemicon" :item="item" :class="[cx('icon'), item.icon]" />
                                <span v-else-if="item.icon" :class="[cx('icon'), item.icon]" v-bind="getPTOptions('icon', i)" />
                                <span :class="cx('label')" v-bind="getPTOptions('label', i)">{{ label(item) }}</span>
                            </a>
                        </template>
                        <component v-else :is="$slots.item" :item="item" :index="i"></component>
                    </li>
                </router-link>
                <li
                    v-else-if="visible(item)"
                    ref="tab"
                    :class="[cx('menuitem', { item, index: i }), item.class]"
                    role="presentation"
                    @click="onItemClick($event, item, i)"
                    @keydown="onKeydownItem($event, i)"
                    v-bind="getPTOptions('menuitem', i)"
                    :data-p-highlight="d_activeIndex === i"
                    :data-p-disabled="disabled(item)"
                >
                    <template v-if="!$slots.item">
                        <a ref="tabLink" v-ripple role="menuitem" :href="item.url" :class="cx('action')" :target="item.target" :aria-label="label(item)" :aria-disabled="disabled(item)" :tabindex="setTabIndex(i)" v-bind="getPTOptions('action', i)">
                            <component v-if="$slots.itemicon" :is="$slots.itemicon" :item="item" :class="[cx('icon'), item.icon]" />
                            <span v-else-if="item.icon" :class="[cx('icon'), item.icon]" v-bind="getPTOptions('icon', i)" />
                            <span :class="cx('label')" v-bind="getPTOptions('label', i)">{{ label(item) }}</span>
                        </a>
                    </template>
                    <component v-else :is="$slots.item" :item="item" :index="i"></component>
                </li>
            </template>
            <li ref="inkbar" role="none" :class="cx('inkbar')" v-bind="ptm('inkbar')"></li>
        </ul>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import { DomHandler } from 'primevue/utils';
import BaseTabMenu from './BaseTabMenu.vue';

export default {
    name: 'TabMenu',
    extends: BaseTabMenu,
    emits: ['update:activeIndex', 'tab-change'],
    timeout: null,
    data() {
        return {
            d_activeIndex: this.activeIndex
        };
    },
    watch: {
        $route() {
            this.timeout = setTimeout(() => this.updateInkBar(), 50);
        },
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    mounted() {
        this.updateInkBar();
    },
    updated() {
        this.updateInkBar();
    },
    beforeUnmount() {
        clearTimeout(this.timeout);
    },
    methods: {
        getPTOptions(key, index) {
            return this.ptm(key, {
                context: {
                    order: index
                }
            });
        },
        onItemClick(event, item, index, navigate) {
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

            if (item.to && navigate) {
                navigate(event);
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
        onKeydownItem(event, index) {
            let i = index;

            let foundElement = {};
            const tabLinkRef = this.$refs.tabLink;

            switch (event.code) {
                case 'ArrowRight': {
                    foundElement = this.findNextItem(this.$refs.tab, i);
                    i = foundElement.i;

                    break;
                }

                case 'ArrowLeft': {
                    foundElement = this.findPrevItem(this.$refs.tab, i);
                    i = foundElement.i;

                    break;
                }

                case 'End': {
                    foundElement = this.findPrevItem(this.$refs.tab, this.model.length);
                    i = foundElement.i;

                    event.preventDefault();
                    break;
                }

                case 'Home': {
                    foundElement = this.findNextItem(this.$refs.tab, -1);
                    i = foundElement.i;

                    event.preventDefault();
                    break;
                }

                case 'Space':

                case 'Enter': {
                    if (event.currentTarget) {
                        event.currentTarget.click();
                    }

                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    this.setDefaultTabIndexes(tabLinkRef);

                    break;
                }

                default:
                    break;
            }

            if (tabLinkRef[i] && tabLinkRef[index]) {
                tabLinkRef[index].tabIndex = '-1';
                tabLinkRef[i].tabIndex = '0';
                tabLinkRef[i].focus();
            }
        },
        findNextItem(items, index) {
            let i = index + 1;

            if (i >= items.length) {
                return { nextItem: items[items.length], i: items.length };
            }

            let nextItem = items[i];

            if (nextItem) return DomHandler.getAttribute(nextItem, 'data-p-disabled') ? this.findNextItem(items, i) : { nextItem, i };
            else return null;
        },
        findPrevItem(items, index) {
            let i = index - 1;

            if (i < 0) {
                return { nextItem: items[0], i: 0 };
            }

            let prevItem = items[i];

            if (prevItem) return DomHandler.getAttribute(prevItem, 'data-p-disabled') ? this.findPrevItem(items, i) : { prevItem, i };
            else return null;
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
        setDefaultTabIndexes(tabLinkRef) {
            setTimeout(() => {
                tabLinkRef.forEach((item) => {
                    item.tabIndex = DomHandler.getAttribute(item.parentElement, 'data-p-highlight') ? '0' : '-1';
                });
            }, 300);
        },
        setTabIndex(index) {
            return this.d_activeIndex === index ? '0' : '-1';
        },
        updateInkBar() {
            let tabs = this.$refs.nav.children;
            let inkHighlighted = false;

            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];

                if (DomHandler.getAttribute(tab, 'data-p-highlight')) {
                    this.$refs.inkbar.style.width = DomHandler.getWidth(tab) + 'px';
                    this.$refs.inkbar.style.left = DomHandler.getOffset(tab).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
                    inkHighlighted = true;
                }
            }

            if (!inkHighlighted) {
                this.$refs.inkbar.style.width = '0px';
                this.$refs.inkbar.style.left = '0px';
            }
        }
    },
    computed: {
        focusableItems() {
            return (this.model || []).reduce((result, item) => {
                this.visible(item) && !this.disabled(item) && result.push(item);

                return result;
            }, []);
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
