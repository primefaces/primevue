<template>
    <ul :ref="listRef" :class="containerClass" role="menu">
        <template v-for="(item, i) of model" :key="label(item) + i.toString()">
            <li v-if="visible(item) && !item.separator" role="presentation" :class="getItemClass(item)" :style="item.style" @mouseenter="onItemMouseEnter($event, item)">
                <template v-if="!template">
                    <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                        <a v-ripple :href="href" :class="linkClass(item, { isActive, isExactActive })" role="menuitem" :tabindex="-1" @click="onItemClick($event, item, navigate)" @keydown="onItemKeyDown($event, item, navigate)">
                            <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                            <span class="p-menuitem-text">{{ label(item) }}</span>
                        </a>
                    </router-link>
                    <a
                        v-else
                        v-ripple
                        :href="item.url"
                        :class="linkClass(item)"
                        :target="item.target"
                        :aria-label="label(item)"
                        :aria-haspopup="item.items != null"
                        :aria-expanded="item === activeItem"
                        :aria-controls="label(item) + '_sub_'"
                        :aria-disabled="disabled(item)"
                        role="menuitem"
                        :tabindex="-1"
                        @click="onItemClick($event, item)"
                        @keydown="onItemKeyDown($event, item)"
                    >
                        <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                        <span class="p-menuitem-text">{{ label(item) }}</span>
                        <span v-if="item.items" :class="getSubmenuIcon()"></span>
                    </a>
                </template>
                <component v-else :is="template" :item="item"></component>
                <MenubarSub
                    v-if="visible(item) && item.items"
                    :key="label(item) + '_sub_'"
                    :id="label(item) + '_sub_'"
                    :model="item.items"
                    :mobileActive="mobileActive"
                    :parentActive="item === activeItem"
                    :template="template"
                    :exact="exact"
                    @leaf-click="onLeafClick"
                    @keydown-item="onChildItemKeyDown"
                />
            </li>
            <li v-if="visible(item) && item.separator" :key="'separator' + i.toString()" :class="['p-menu-separator', item.class]" :style="item.style" role="separator"></li>
        </template>
    </ul>
</template>

<script>
import Ripple from 'primevue/ripple';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'MenubarSub',
    emits: ['keydown-item', 'leaf-click'],
    props: {
        model: {
            type: Array,
            default: null
        },
        root: {
            type: Boolean,
            default: false
        },
        popup: {
            type: Boolean,
            default: false
        },
        parentActive: {
            type: Boolean,
            default: false
        },
        mobileActive: {
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
    list: null,
    documentClickListener: null,
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
    mounted() {
        if (this.list && this.model && this.model.length > 0) {
            const links = DomHandler.find(this.list, '.p-menuitem > .p-menuitem-link');

            links[[...links].findIndex((link) => !DomHandler.hasClass(link, 'p-disabled'))].tabIndex = '0';
        }
    },
    updated() {
        if (this.root && this.activeItem) {
            this.bindDocumentClickListener();
        }
    },
    beforeUnmount() {
        this.unbindDocumentClickListener();
    },
    methods: {
        onItemMouseEnter(event, item) {
            if (this.disabled(item) || this.mobileActive) {
                event.preventDefault();

                return;
            }

            if (this.root) {
                if (this.activeItem || this.popup) {
                    this.activeItem = item;
                }
            } else {
                this.activeItem = item;
            }
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
        onLeafClick() {
            this.activeItem = null;
            this.$emit('leaf-click');
        },
        onItemKeyDown(event, item, navigate) {
            const listItem = event.currentTarget.parentElement;

            switch (event.code) {
                case 'ArrowDown':
                    if (this.root) {
                        if (item.items) {
                            this.expandSubmenu(item, listItem);
                        }
                    } else {
                        this.navigateToNextItem(listItem);
                    }

                    event.preventDefault();
                    break;

                case 'ArrowUp':
                    if (this.root) {
                        if (item.items) {
                            this.expandSubmenu(item, listItem, true);
                        }
                    } else {
                        this.navigateToPrevItem(listItem);
                    }

                    event.preventDefault();
                    break;

                case 'ArrowRight':
                    if (this.root) {
                        const nextItem = this.findNextItem(listItem);

                        if (nextItem) {
                            this.navigateToNextItem(listItem);
                        }
                    } else {
                        if (item.items) {
                            this.expandSubmenu(item, listItem);
                        }
                    }

                    event.preventDefault();
                    break;

                case 'ArrowLeft':
                    if (this.root) {
                        this.navigateToPrevItem(listItem);
                    }

                    event.preventDefault();
                    break;

                case 'Home':
                    this.navigateToFirstItem(listItem);
                    event.preventDefault();
                    break;

                case 'End':
                    this.navigateToLastItem(listItem);
                    event.preventDefault();
                    break;

                case 'Space':

                case 'Enter': {
                    this.onItemClick(event, item, navigate);

                    if (!this.root) {
                        this.setFocusToMenuitem(listItem, listItem.parentElement.parentElement);
                    }

                    event.preventDefault();
                    break;
                }

                case 'Tab':
                    this.onTabKey(event);
                    break;

                default:
                    break;
            }

            this.$emit('keydown-item', {
                originalEvent: event,
                element: listItem
            });
        },
        onChildItemKeyDown(event) {
            if (this.root) {
                if (event.originalEvent.code === 'ArrowUp' && (event.element.previousElementSibling == null || DomHandler.hasClass(event.element.previousElementSibling.children[0], 'p-disabled'))) {
                    this.collapseMenu(event.element);
                }
            } else {
                if (event.originalEvent.code === 'ArrowLeft' || event.originalEvent.code === 'Escape') {
                    this.collapseMenu(event.element);
                }
            }

            if (event.originalEvent.code === 'Tab') {
                this.onLeafClick();
            }
        },
        findNextItem(item) {
            const nextItem = item.nextElementSibling;

            if (nextItem) return DomHandler.hasClass(nextItem.children[0], 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;
            else return null;
        },
        findPrevItem(item) {
            const prevItem = item.previousElementSibling;

            if (prevItem) return DomHandler.hasClass(prevItem.children[0], 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;
            else return null;
        },
        findFirstItem(listItem) {
            const firstSibling = DomHandler.findSingle(listItem.parentElement, 'li.p-menuitem');

            return firstSibling ? (DomHandler.hasClass(firstSibling.children[0], 'p-disabled') || !DomHandler.hasClass(firstSibling, 'p-menuitem') ? this.findPrevItem(firstSibling) : firstSibling) : null;
        },
        findLastItem(listItem) {
            const lastSibling = DomHandler.find(listItem.parentElement, 'li.p-menuitem')[DomHandler.find(listItem.parentElement, 'li.p-menuitem').length - 1];

            return lastSibling ? (DomHandler.hasClass(lastSibling.children[0], 'p-disabled') || !DomHandler.hasClass(lastSibling, 'p-menuitem') ? this.findPrevItem(lastSibling) : lastSibling) : null;
        },
        onTabKey(event) {
            DomHandler.find(this.list, '.p-menuitem-link').forEach((link) => {
                setTimeout(() => {
                    if (event.shiftKey && this.findFirstItem(event.target.parentElement)) {
                        link === this.findFirstItem(event.target.parentElement).children[0] ? (link.tabIndex = '0') : (link.tabIndex = '-1');
                    } else if (this.findLastItem(event.target.parentElement)) {
                        link === this.findLastItem(event.target.parentElement).children[0] ? (link.tabIndex = '0') : (link.tabIndex = '-1');
                    }
                }, 0);
            });
        },
        expandSubmenu(item, listItem, lastElementFocus) {
            let focusedElement,
                focusableElements = [];

            this.activeItem = item;

            [...listItem.children[1].children].forEach((el) => {
                if (!DomHandler.hasClass(el, 'p-menu-separator') && !DomHandler.hasClass(el.children[0], 'p-disabled')) focusableElements.push(el.children[0]);
            });
            focusedElement = lastElementFocus ? focusableElements[focusableElements.length - 1] : focusableElements[0];
            focusedElement.tabIndex = '0';

            setTimeout(() => {
                focusedElement.focus();
            }, 50);
        },
        collapseMenu(listItem) {
            this.activeItem = null;
            listItem.children[0].tabIndex = '-1';
            listItem.parentElement.previousElementSibling.focus();
        },
        navigateToNextItem(listItem) {
            const nextItem = this.findNextItem(listItem);

            nextItem && this.setFocusToMenuitem(listItem, nextItem);
        },
        navigateToPrevItem(listItem) {
            const prevItem = this.findPrevItem(listItem);

            prevItem && this.setFocusToMenuitem(listItem, prevItem);
        },
        navigateToFirstItem(listItem) {
            const firstItem = this.findFirstItem(listItem);

            firstItem && this.setFocusToMenuitem(listItem, firstItem);
        },
        navigateToLastItem(listItem) {
            const lastItem = this.findLastItem(listItem);

            lastItem && this.setFocusToMenuitem(listItem, lastItem);
        },
        setFocusToMenuitem(target, menuitem) {
            target.children[0].tabIndex = '-1';
            menuitem.children[0].tabIndex = '0';
            menuitem.children[0].focus();
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
        bindDocumentClickListener() {
            if (!this.documentClickListener) {
                this.documentClickListener = (event) => {
                    if (this.$el && !this.$el.contains(event.target)) {
                        this.activeItem = null;
                        this.unbindDocumentClickListener();
                    }
                };

                document.addEventListener('click', this.documentClickListener);
            }
        },
        unbindDocumentClickListener() {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        },
        getSubmenuIcon() {
            return ['p-submenu-icon pi', { 'pi-angle-right': !this.root, 'pi-angle-down': this.root }];
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
        listRef(el) {
            this.list = el;
        }
    },
    computed: {
        containerClass() {
            return { 'p-submenu-list': !this.root, 'p-menubar-root-list': this.root };
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
