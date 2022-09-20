<template>
    <div class="p-tabmenu p-component">
        <ul ref="nav" class="p-tabmenu-nav p-reset" role="tablist">
            <template v-for="(item, i) of model" :key="label(item) + '_' + i.toString()">
                <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                    <li v-if="visible(item)" ref="tab" :class="getRouteItemClass(item, isActive, isExactActive)" :style="item.style" role="presentation">
                        <template v-if="!$slots.item">
                            <a
                                ref="tabLink"
                                v-ripple
                                :href="href"
                                class="p-menuitem-link"
                                @click="onItemClick($event, item, i, navigate)"
                                :aria-label="label"
                                role="menuItem"
                                :aria-disabled="disabled(item)"
                                :tabindex="isExactActive ? '0' : '-1'"
                                :aria-selected="isExactActive"
                                @keydown="onKeydownItem($event, item, i, navigate)"
                            >
                                <span v-if="item.icon" :class="getItemIcon(item)"></span>
                                <span class="p-menuitem-text">{{ label(item) }}</span>
                            </a>
                        </template>
                        <component v-else :is="$slots.item" :item="item"></component>
                    </li>
                </router-link>
                <li v-else-if="visible(item)" ref="tab" :class="getItemClass(item, i)" role="presentation">
                    <template v-if="!$slots.item">
                        <a
                            ref="tabLink"
                            v-ripple
                            :href="item.url"
                            class="p-menuitem-link"
                            :target="item.target"
                            @click="onItemClick($event, item, i)"
                            role="menuItem"
                            :aria-label="label"
                            :aria-disabled="disabled(item)"
                            :tabindex="setTabIndex(i)"
                            :aria-selected="isActive(i)"
                            @keydown="onKeydownItem($event, item, i)"
                        >
                            <span v-if="item.icon" :class="getItemIcon(item)"></span>
                            <span class="p-menuitem-text">{{ label(item) }}</span>
                        </a>
                    </template>
                    <component v-else :is="$slots.item" :item="item"></component>
                </li>
            </template>
            <li ref="inkbar" class="p-tabmenu-ink-bar"></li>
        </ul>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'TabMenu',
    emits: ['update:activeIndex', 'tab-change'],
    props: {
        model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
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
                navigate({ path: item.to });
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
        onKeydownItem(event, item, index, navigate) {
            let i = index;
            let navigateItem = item;
            let foundElement = {};

            switch (event.code) {
                case 'ArrowRight':
                    foundElement = this.findNextItem(this.$refs.tab, i);

                    navigateItem = foundElement.nextItem;
                    i = foundElement.i;

                    break;
                case 'ArrowLeft':
                    foundElement = this.findPrevItem(this.$refs.tab, i);

                    navigateItem = foundElement.prevItem;
                    i = foundElement.i;

                    break;
                case 'End':
                    event.preventDefault();

                    foundElement = this.findPrevItem(this.$refs.tab, this.model.length);

                    navigateItem = foundElement.prevItem;
                    i = foundElement.i;
                    break;
                case 'Home':
                    event.preventDefault();

                    foundElement = this.findNextItem(this.$refs.tab, -1);

                    navigateItem = foundElement.nextItem;
                    i = foundElement.i;
                    break;
                case 'Space':
                    event.preventDefault();

                    this.onItemClick(event, item, index, navigate);
            }

            if (!item.to && navigateItem) {
                this.onItemClick(event, navigateItem, i, navigate);
            }

            if (this.$refs.tabLink) {
                this.$refs.tabLink[i].focus();
            }
        },
        findNextItem(items, index) {
            let i = index + 1;

            if (i >= items.length) {
                i = 0;
            }

            let nextItem = items[i];

            if (nextItem) return DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextItem(items, i) : { nextItem, i };
            else return null;
        },
        findPrevItem(items, index) {
            let i = index - 1;

            if (i < 0) {
                i = items.length - 1;
            }

            let prevItem = items[i];

            if (prevItem) return DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(items, i) : { prevItem, i };
            else return null;
        },
        getItemClass(item, index) {
            return [
                'p-tabmenuitem',
                item.class,
                {
                    'p-highlight': this.isActive(index),
                    'p-disabled': this.disabled(item)
                }
            ];
        },
        getRouteItemClass(item, isActive, isExactActive) {
            return [
                'p-tabmenuitem',
                item.class,
                {
                    'p-highlight': this.exact ? isExactActive : isActive,
                    'p-disabled': this.disabled(item)
                }
            ];
        },
        getItemIcon(item) {
            return ['p-menuitem-icon', item.icon];
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
        setTabIndex(index) {
            return this.isActive(index) ? '0' : '-1';
        },
        isActive(index) {
            return this.d_activeIndex === index;
        },
        updateInkBar() {
            let tabs = this.$refs.nav.children;
            let inkHighlighted = false;

            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];

                if (DomHandler.hasClass(tab, 'p-highlight')) {
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
    directives: {
        ripple: Ripple
    }
};
</script>

<style>
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}

.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}

.p-tabmenu-nav a:focus {
    z-index: 1;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
</style>
