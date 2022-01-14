<template>
    <ul class="p-submenu-list" role="tree">
        <template v-for="(item, i) of model">
            <li role="none" :class="getItemClass(item)" :style="item.style" v-if="visible(item) && !item.separator" :key="label(item) + i">
                <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{navigate, href, isActive:isRouterActive, isExactActive}">
                    <a :href="href" :class="linkClass(item, {isRouterActive, isExactActive})" @click="onItemClick($event, item, navigate)" role="treeitem" :aria-expanded="isActive(item)">
                        <span :class="['p-menuitem-icon', item.icon]"></span>
                        <span class="p-menuitem-text">{{label(item)}}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :class="linkClass(item)" :target="item.target" @click="onItemClick($event, item)"
                    role="treeitem" :aria-expanded="isActive(item)" :tabindex="disabled(item) ? null : '0'">
                    <span :class="getSubmenuIcon(item)" v-if="item.items"></span>
                    <span :class="['p-menuitem-icon', item.icon]"></span>
                    <span class="p-menuitem-text">{{label(item)}}</span>
                </a>
                <transition name="p-toggleable-content">
                    <div class="p-toggleable-content" v-show="item === activeItem">
                        <sub-panelmenu :model="item.items" v-if="visible(item) && item.items" :key="label(item) + '_sub_'" :exact="exact" />
                    </div>
                </transition>
            </li>
            <li :class="['p-menu-separator', item.class]" :style="item.style" v-if="visible(item) && item.separator" :key="'separator' + i"></li>
        </template>
    </ul>
</template>

<script>
export default {
    name: 'sub-panelmenu',
    props: {
		model: {
            type: null,
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
        }
    },
    methods: {
        onItemClick(event, item, navigate) {
            if (this.disabled(item)) {
                event.preventDefault();
                return;
            }

            if (!item.url && !item.to) {
                event.preventDefault();
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (this.activeItem && this.activeItem === item)
                this.activeItem = null;
            else
                this.activeItem = item;

            if (item.to && navigate) {
                navigate(event);
            }
        },
        getItemClass(item) {
            return ['p-menuitem', item.class];
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        isActive(item) {
            return item === this.activeItem;
        },
        getSubmenuIcon(item) {
            const active = this.isActive(item);
            return ['p-panelmenu-icon pi pi-fw', {'pi-angle-right': !active, 'pi-angle-down': active}];
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        },
        label(item) {
            return (typeof item.label === 'function' ? item.label() : item.label);
        }
    }
}
</script>
