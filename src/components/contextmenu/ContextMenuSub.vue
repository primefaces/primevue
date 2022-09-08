<template>
    <transition name="p-contextmenusub" @enter="onEnter">
        <ul v-if="root ? true : parentActive" ref="container" :class="containerClass" role="menu">
            <template v-for="(item, i) of model" :key="label(item) + i.toString()">
                <li v-if="visible(item) && !item.separator" role="none" :class="getItemClass(item)" :style="item.style" @mouseenter="onItemMouseEnter($event, item)">
                    <template v-if="!template">
                        <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                            <a v-ripple :href="href" @click="onItemClick($event, item, navigate)" :class="linkClass(item, { isActive, isExactActive })" role="menuitem">
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
                            @click="onItemClick($event, item)"
                            :aria-haspopup="item.items != null"
                            :aria-expanded="item === activeItem"
                            role="menuitem"
                            :tabindex="disabled(item) ? null : '0'"
                        >
                            <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]"></span>
                            <span class="p-menuitem-text">{{ label(item) }}</span>
                            <span v-if="item.items" class="p-submenu-icon pi pi-angle-right"></span>
                        </a>
                    </template>
                    <component v-else :is="template" :item="item"></component>
                    <ContextMenuSub v-if="visible(item) && item.items" :key="label(item) + '_sub_'" :model="item.items" :template="template" @leaf-click="onLeafClick" :parentActive="item === activeItem" :exact="exact" />
                </li>
                <li v-if="visible(item) && item.separator" :key="'separator' + i.toString()" :class="['p-menu-separator', item.class]" :style="item.style" role="separator"></li>
            </template>
        </ul>
    </transition>
</template>

<script>
import { DomHandler } from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'ContextMenuSub',
    emits: ['leaf-click'],
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
        },
        onLeafClick() {
            this.activeItem = null;
            this.$emit('leaf-click');
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
        }
    },
    computed: {
        containerClass() {
            return { 'p-submenu-list': !this.root };
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
