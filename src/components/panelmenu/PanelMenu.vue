<template>
    <div class="p-panelmenu p-component">
        <template v-for="(item, index) of model">
            <div v-if="visible(item)" :key="item.label + '_' + index" :class="getPanelClass(item)" :style="item.style">
                <div :class="getHeaderClass(item)" :style="item.style">
                    <a :href="item.url" class="p-panelmenu-header-link" @click="onItemClick($event, item)" :tabindex="item.disabled ? null : '0'"
                        :aria-expanded="isActive(item)" :id="ariaId +'_header'" :aria-controls="ariaId +'_content'">
                        <span v-if="item.items" :class="getPanelToggleIcon(item)"></span>
                        <span v-if="item.icon" :class="getPanelIcon(item)"></span>
                        <span class="p-menuitem-text">{{item.label}}</span>
                    </a>
                </div>
                <transition name="p-toggleable-content">
                    <div class="p-toggleable-content" v-show="item === activeItem"
                        role="region" :id="ariaId +'_content' " :aria-labelledby="ariaId +'_header'">
                        <div class="p-panelmenu-content" v-if="item.items">
                            <PanelMenuSub :model="item.items" class="p-panelmenu-root-submenu" />
                        </div>
                    </div>
                </transition>
            </div>
        </template>
    </div>
</template>

<script>
import PanelMenuSub from './PanelMenuSub';
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
    props: {
		model: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            activeItem: null
        }
    },
    methods: {
        onItemClick(event, item) {
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
        getPanelClass(item) {
            return ['p-panelmenu-panel', item.class];
        },
        getPanelToggleIcon(item) {
            const active = item === this.activeItem;
            return ['p-panelmenu-icon pi', {'pi-chevron-right': !active,' pi-chevron-down': active}];
        },
        getPanelIcon(item) {
            return ['p-menuitem-icon', item.icon];
        },
        isActive(item) {
            return item === this.activeItem;
        },
        getHeaderClass(item) {
            return ['p-component p-panelmenu-header', {'p-highlight': this.isActive(item), 'p-disabled': item.disabled}];
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        }
    },
    components: {
        'PanelMenuSub': PanelMenuSub
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        }
    }
}
</script>

<style>
.p-panelmenu .p-panelmenu-header-link {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}

.p-panelmenu .p-panelmenu-header-link:focus {
    z-index: 1;
}

.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-panelmenu .p-menuitem-link {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
}

.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
</style>
