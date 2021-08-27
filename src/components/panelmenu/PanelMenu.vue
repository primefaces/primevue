<template>
    <div class="p-panelmenu p-component">
        <template v-for="(item, index) of model" :key="item.label + '_' + index">
            <div v-if="visible(item)"  :class="getPanelClass(item)" :style="item.style">
                <div :class="getHeaderClass(item)" :style="item.style">
                    <template v-if="!$slots.item">
                        <router-link v-if="item.to && !disabled(item)" :to="item.to" custom v-slot="{navigate, href, isActive, isExactActive}">
                            <a :href="href" :class="getHeaderLinkClass(item, {isActive, isExactActive})" @click="onItemClick($event, item, navigate)" role="treeitem">
                                <span v-if="item.icon" :class="getPanelIcon(item)"></span>
                                <span class="p-menuitem-text">{{item.label}}</span>
                            </a>
                        </router-link>
                        <a v-else :href="item.url" :class="getHeaderLinkClass(item)" @click="onItemClick($event, item)" :tabindex="disabled(item) ? null : '0'"
                            :aria-expanded="isActive(item)" :id="ariaId +'_header'" :aria-controls="ariaId +'_content'">
                            <span v-if="item.items" :class="getPanelToggleIcon(item)"></span>
                            <span v-if="item.icon" :class="getPanelIcon(item)"></span>
                            <span class="p-menuitem-text">{{item.label}}</span>
                        </a>
                    </template>
                    <component v-else :is="$slots.item" :item="item"></component>
                </div>
                <transition name="p-toggleable-content">
                    <div class="p-toggleable-content" v-show="isActive(item)"
                        role="region" :id="ariaId +'_content' " :aria-labelledby="ariaId +'_header'">
                        <div class="p-panelmenu-content" v-if="item.items">
                            <PanelMenuSub :model="item.items" class="p-panelmenu-root-submenu" :template="$slots.item" 
                                :expandedKeys="expandedKeys" @item-toggle="updateExpandedKeys" :exact="exact" />
                        </div>
                    </div>
                </transition>
            </div>
        </template>
    </div>
</template>

<script>
import PanelMenuSub from './PanelMenuSub.vue';
import {UniqueComponentId} from 'primevue/utils';

export default {
    name: 'PanelMenu',
    emits: ['update:expandedKeys'],
    props: {
		model: {
            type: Array,
            default: null
        },
        expandedKeys: {
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
            if (this.isActive(item) && this.activeItem === null) {
                this.activeItem = item;
            }
            
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

            if (this.activeItem && this.activeItem === item)
                this.activeItem = null;
            else
                this.activeItem = item;

            this.updateExpandedKeys({item: item, expanded: this.activeItem != null});
        
            if (item.to && navigate) {
                navigate(event);
            }
        },
        updateExpandedKeys(event) {
            if (this.expandedKeys) {
                let item = event.item;
                let _keys = {...this.expandedKeys};

                if (event.expanded)
                    _keys[item.key] = true;
                else
                    delete _keys[item.key];

                this.$emit('update:expandedKeys', _keys);
            }
        },
        getPanelClass(item) {
            return ['p-panelmenu-panel', item.class];
        },
        getPanelToggleIcon(item) {
            const active = this.isActive(item);
            return ['p-panelmenu-icon pi', {'pi-chevron-right': !active,' pi-chevron-down': active}];
        },
        getPanelIcon(item) {
            return ['p-menuitem-icon', item.icon];
        },
        getHeaderLinkClass(item, routerProps) {
            return ['p-panelmenu-header-link', {
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        isActive(item) {
            return this.expandedKeys ? this.expandedKeys[item.key] : item === this.activeItem;
        },
        getHeaderClass(item) {
            return ['p-component p-panelmenu-header', {'p-highlight': this.isActive(item), 'p-disabled': this.disabled(item)}];
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
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
