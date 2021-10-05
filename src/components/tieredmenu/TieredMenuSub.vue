<template>
    <ul ref="element" :class="containerClass" role="'menubar' : 'menu'" aria-orientation="horizontal">
        <template v-for="(item, i) of model" :key="item.label + i.toString()">
            <li :class="getItemClass(item)" :style="item.style" v-if="visible(item) && !item.separator"
                @mouseenter="onItemMouseEnter($event, item)" role="none">
                <template v-if="!template">
                    <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
                        <a :href="href" @click="onItemClick($event, item, navigate)" :class="linkClass(item, {isActive, isExactActive})" v-ripple @keydown="onItemKeyDown($event, item)" role="menuitem">
                            <span :class="['p-menuitem-icon', item.icon]"></span>
                            <span class="p-menuitem-text">{{item.label}}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :class="linkClass(item)" :target="item.target" :aria-haspopup="item.items != null" :aria-expanded="item === activeItem"
                        @click="onItemClick($event, item)" @keydown="onItemKeyDown($event, item)" role="menuitem" :tabindex="disabled(item) ? null : '0'" v-ripple>
                        <span :class="['p-menuitem-icon', item.icon]"></span>
                        <span class="p-menuitem-text">{{item.label}}</span>
                        <span class="p-submenu-icon pi pi-angle-right" v-if="item.items"></span>
                    </a>
                </template>
                <component v-else :is="template" :item="item"></component>
                <TieredMenuSub :model="item.items" v-if="visible(item) && item.items" :key="item.label + '_sub_'" :template="template"
                    @leaf-click="onLeafClick" @keydown-item="onChildItemKeyDown" :parentActive="item === activeItem" :exact="exact" />
            </li>
            <li :class="['p-menu-separator', item.class]" :style="item.style" v-if="visible(item) && item.separator" :key="'separator' + i.toString()" role="separator"></li>
        </template>
    </ul>
</template>

<script>
import {DomHandler} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'TieredMenuSub',
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
        popup: {
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
    documentClickListener: null,
    watch: {
        parentActive(newValue) {
            if (!newValue) {
                this.activeItem = null;
            }
        }
    },
    data() {
        return {
            activeItem: null
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
            if (this.disabled(item)) {
                event.preventDefault();
                return;
            }

            if (this.root) {
                if (this.activeItem || this.popup) {
                    this.activeItem = item;
                }
            }
            else {
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
                if (this.activeItem && item === this.activeItem)
                    this.activeItem = null;
                else
                   this.activeItem = item;
            }

            if (!item.items) {
                this.onLeafClick();
            }

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onLeafClick() {
            this.activeItem = null;
            this.$emit('leaf-click');
        },
        onItemKeyDown(event, item) {
            let listItem = event.currentTarget.parentElement;

            switch (event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(listItem);
                    if (nextItem) {
                        nextItem.children[0].focus();
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    var prevItem = this.findPrevItem(listItem);
                    if (prevItem) {
                        prevItem.children[0].focus();
                    }

                    event.preventDefault();
                break;

                //right
                case 39:
                    if (item.items) {
                        this.activeItem = item;

                        setTimeout(() => {
                            listItem.children[1].children[0].children[0].focus();
                        }, 50);
                    }

                    event.preventDefault();
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
            //left
            if (event.originalEvent.which === 37) {
                this.activeItem = null;
                event.element.parentElement.previousElementSibling.focus();
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        getItemClass(item) {
            return [
                'p-menuitem', item.class, {
                    'p-menuitem-active': this.activeItem === item
                }
            ]
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
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
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        }
    },
    computed: {
        containerClass() {
            return {'p-submenu-list': !this.root};
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
