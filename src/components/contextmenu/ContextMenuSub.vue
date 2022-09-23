<template>
    <transition name="p-contextmenusub" @enter="onEnter">
        <ul v-if="root ? true : parentActive" ref="container" :class="containerClass" role="menubar" :tabindex="-1" aria-orientation="vertical">
            <template v-for="(item, i) of model" :key="label(item) + i.toString()">
                <li v-if="visible(item) && !item.separator" role="presentation" :class="getItemClass(item)" :style="item.style" @mouseenter="onItemMouseEnter($event, item)">
                    <template v-if="!template">
                        <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                            <a
                                v-ripple
                                role="menuitem"
                                :href="href"
                                :class="linkClass(item, { isActive, isExactActive })"
                                :aria-haspopup="item.items != null"
                                :aria-expanded="item.items && item === activeItem"
                                :aria-controls="getMenuAction(i)"
                                :aria-label="label(item)"
                                :aria-disabled="disabled(item)"
                                :tabindex="-1"
                                @click="onItemClick($event, item, navigate)"
                                @keydown="onItemKeydown($event, item)"
                            >
                                <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                                <span class="p-menuitem-text">{{ label(item) }}</span>
                            </a>
                        </router-link>
                        <a
                            v-else
                            v-ripple
                            role="menuitem"
                            :href="item.url"
                            :class="linkClass(item)"
                            :target="item.target"
                            :aria-label="label(item)"
                            :aria-haspopup="item.items != null"
                            :aria-expanded="item.items && item === activeItem"
                            :aria-controls="getMenuAction(i)"
                            :aria-disabled="disabled(item)"
                            :tabindex="-1"
                            @click="onItemClick($event, item)"
                            @keydown="onItemKeydown($event, item)"
                        >
                            <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                            <span class="p-menuitem-text">{{ label(item) }}</span>
                            <span v-if="item.items" class="p-submenu-icon pi pi-angle-right"></span>
                        </a>
                    </template>
                    <component v-else :is="template" :item="item"></component>
                    <ContextMenuSub
                        v-if="visible(item) && item.items"
                        :key="label(item) + '_sub_'"
                        :id="getMenuAction(i)"
                        :model="item.items"
                        :template="template"
                        :parentActive="item === activeItem"
                        :exact="exact"
                        role="menu"
                        @keydown-item="onChildItemKeyDown"
                        @leaf-click="onLeafClick"
                    />
                </li>
                <li v-if="visible(item) && item.separator" :key="'separator' + i.toString()" :class="['p-menu-separator', item.class]" :style="item.style" role="separator"></li>
            </template>
        </ul>
    </transition>
</template>

<script>
import Ripple from 'primevue/ripple';
import { DomHandler, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'ContextMenuSub',
    emits: ['leaf-click', 'keydown-item'],
    props: {
        model: {
            type: Array,
            default: null
        },
        root: {
            type: Boolean,
            default: false
        },
        parentActive: {
            type: Boolean,
            default: false
        },
        template: {
            type: Function,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            activeItem: null
        };
    },
    watch: {
        parentActive(newValue) {
            if (!newValue) {
                this.activeItem = null;
            }
        }
    },
    methods: {
        onItemMouseEnter(event, item) {
            if (this.disabled(item)) {
                event.preventDefault();

                return;
            }

            this.activeItem = item;
        },
        onItemClick(event, item, navigate) {
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

            if (item.items) {
                if (this.activeItem && item === this.activeItem) this.activeItem = null;
                else this.activeItem = item;
            }

            if (!item.items) {
                this.onLeafClick();
            }

            if (item.to && navigate) {
                navigate(event);
            }

            if (item.url && event.currentTarget) {
                event.currentTarget.click();
            }
        },
        onItemKeydown(event, item) {
            const listItem = event.target.parentElement;

            switch (event.code) {
                case 'ArrowDown': {
                    this.navigateToNextItem(listItem);
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                }

                case 'ArrowUp': {
                    this.navigateToPrevItem(listItem);
                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    this.expandSubmenu(event, item);
                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    //no op
                }

                case 'Home': {
                    this.navigateToFirstItem(listItem);
                    event.preventDefault();
                    break;
                }

                case 'End': {
                    this.navigateToLastItem(listItem);
                    event.preventDefault();
                    break;
                }

                case 'Enter':

                case 'Space': {
                    this.onItemClick(event, item);
                    event.preventDefault();
                    break;
                }

                case 'Tab': {
                    //no op
                }

                case 'Escape': {
                    this.onLeafClick();
                    event.preventDefault();
                    break;
                }

                default:
                    break;
            }

            this.$emit('keydown-item', {
                originalEvent: event,
                element: listItem
            });
        },
        onChildItemKeyDown(event) {
            if (event.originalEvent.code === 'ArrowLeft') {
                this.collapseSubmenu(event.element);
            } else if (event.originalEvent.code === 'Tab') {
                this.onLeafClick();
            }
        },
        expandSubmenu(event, item) {
            this.activeItem = item;
            this.onItemMouseEnter(event, item);

            setTimeout(() => {
                const nextLink = DomHandler.findSingle(event.target.nextElementSibling, 'a.p-menuitem-link:not(.p-disabled)');

                if (nextLink) {
                    nextLink.tabIndex = '0';
                    nextLink.focus();
                }
            }, 0);
        },
        collapseSubmenu(listItem) {
            this.activeItem = null;
            listItem.children[0].tabIndex = '-1';
            listItem.parentElement.previousElementSibling.focus();
        },
        onLeafClick() {
            this.activeItem = null;
            this.$emit('leaf-click');
        },
        navigateToNextItem(listItem) {
            const nextItem = this.findNextItem(listItem);

            nextItem && this.setFocusToMenuitem(listItem.children[0], nextItem.children[0]);

            if (nextItem) {
                listItem.children[0].tabIndex = '-1';
                nextItem.children[0].tabIndex = '0';
                nextItem.children[0].focus();
            }
        },
        navigateToPrevItem(listItem) {
            const prevItem = this.findPrevItem(listItem);

            prevItem && this.setFocusToMenuitem(listItem.children[0], prevItem.children[0]);
        },
        navigateToFirstItem(listItem) {
            const firstItem = this.findFirstItem(listItem);

            firstItem && this.setFocusToMenuitem(listItem.children[0], firstItem.children[0]);
        },
        navigateToLastItem(listItem) {
            const lastItem = this.findLastItem(listItem);

            lastItem && this.setFocusToMenuitem(listItem.children[0], lastItem.children[0]);
        },
        findNextItem(listItem) {
            const nextItem = listItem.nextElementSibling;

            return nextItem ? (DomHandler.hasClass(nextItem.children[0], 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem) : null;
        },
        findPrevItem(listItem) {
            const prevItem = listItem.previousElementSibling;

            return prevItem ? (DomHandler.hasClass(prevItem.children[0], 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem) : null;
        },
        findFirstItem(listItem) {
            const firstSibling = DomHandler.findSingle(listItem.parentElement, 'li.p-menuitem');

            return firstSibling ? (DomHandler.hasClass(firstSibling.children[0], 'p-disabled') || !DomHandler.hasClass(firstSibling, 'p-menuitem') ? this.findPrevItem(firstSibling) : firstSibling) : null;
        },
        findLastItem(listItem) {
            const lastSibling = DomHandler.find(listItem.parentElement, 'li.p-menuitem')[DomHandler.find(listItem.parentElement, 'li.p-menuitem').length - 1];

            return lastSibling ? (DomHandler.hasClass(lastSibling.children[0], 'p-disabled') || !DomHandler.hasClass(lastSibling, 'p-menuitem') ? this.findPrevItem(lastSibling) : lastSibling) : null;
        },
        setFocusToMenuitem(target, focusableItem) {
            target.tabIndex = '-1';
            focusableItem.tabIndex = '0';
            focusableItem.focus();
        },
        onEnter() {
            this.position();
        },
        position() {
            const parentItem = this.$refs.container.parentElement;
            const containerOffset = DomHandler.getOffset(this.$refs.container.parentElement);
            const viewport = DomHandler.getViewport();
            const sublistWidth = this.$refs.container.offsetParent ? this.$refs.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$refs.container);
            const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

            this.$refs.container.style.top = '0px';

            if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
                this.$refs.container.style.left = -1 * sublistWidth + 'px';
            } else {
                this.$refs.container.style.left = itemOuterWidth + 'px';
            }
        },
        getItemClass(item) {
            return [
                'p-menuitem',
                item.class,
                {
                    'p-menuitem-active': this.activeItem === item
                }
            ];
        },
        linkClass(item, routerProps) {
            return [
                'p-menuitem-link',
                {
                    'p-disabled': this.disabled(item),
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
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
        getMenuAction(index) {
            return `${this.id}_${index}_menu_action`;
        }
    },
    computed: {
        containerClass() {
            return { 'p-submenu-list': !this.root };
        },
        id() {
            return UniqueComponentId();
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
