<template>
    <ul class="p-submenu-list" role="tree">
        <template v-for="(item, i) of model">
            <li role="none" :class="getItemClass(item)" :style="item.style" v-if="visible(item) && !item.separator" :key="item.label + i">
                <router-link v-if="item.to && !item.disabled" :to="item.to" :class="getLinkClass(item)" @click.native="onItemClick($event, item)"
                    role="treeitem" :aria-expanded="isActive(item)">
                    <span :class="['p-menuitem-icon', item.icon]"></span>
                    <span class="p-menuitem-text">{{item.label}}</span>
                </router-link>
                <a v-else :href="item.url" :class="getLinkClass(item)" :target="item.target" @click="onItemClick($event, item)"
                    role="treeitem" :aria-expanded="isActive(item)" :tabindex="item.disabled ? null : '0'">
                    <span :class="getSubmenuIcon(item)" v-if="item.items"></span>
                    <span :class="['p-menuitem-icon', item.icon]"></span>
                    <span class="p-menuitem-text">{{item.label}}</span>
                </a>
                <transition name="p-toggleable-content">
                    <div class="p-toggleable-content" v-show="item === activeItem">
                        <sub-panelmenu :model="item.items" v-if="visible(item) && item.items" :key="item.label + '_sub_'" />
                    </div>
                </transition>
            </li>
            <li class="p-menu-separator" :style="item.style" v-if="visible(item) && item.separator" :key="'separator' + i"></li>
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
        }
    },
    data() {
        return {
            activeItem: null
        }
    },
    methods: {
        onItemClick($event, item) {
            if (item.disabled) {
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
        },
        getItemClass(item) {
            return ['p-menuitem', item.class];
        },
        getLinkClass(item) {
            return ['p-menuitem-link', {'p-disabled': item.disabled}];
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
        }
    }
}
</script>
