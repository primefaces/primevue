<template>
    <ul>
        <template v-for="(processedItem, index) of items" :key="getItemKey(processedItem)">
            <li
                v-if="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                :id="getItemId(processedItem)"
                :style="getItemProp(processedItem, 'style')"
                :class="getItemClass(processedItem)"
                role="menuitem"
                :aria-label="getItemLabel(processedItem)"
                :aria-disabled="isItemDisabled(processedItem) || undefined"
                :aria-expanded="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                :aria-haspopup="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                :aria-level="level + 1"
                :aria-setsize="getAriaSetSize()"
                :aria-posinset="getAriaPosInset(index)"
            >
                <div class="p-menuitem-content" @click="onItemClick($event, processedItem)" @mouseenter="onItemMouseEnter($event, processedItem)">
                    <template v-if="!template">
                        <router-link v-if="getItemProp(processedItem, 'to') && !isItemDisabled(processedItem)" v-slot="{ navigate, href, isActive, isExactActive }" :to="getItemProp(processedItem, 'to')" custom>
                            <a v-ripple :href="href" :class="getItemActionClass(processedItem, { isActive, isExactActive })" tabindex="-1" aria-hidden="true" @click="onItemActionClick($event, navigate)">
                                <span v-if="getItemProp(processedItem, 'icon')" :class="getItemIconClass(processedItem)"></span>
                                <span class="p-menuitem-text">{{ getItemLabel(processedItem) }}</span>
                            </a>
                        </router-link>
                        <a v-else v-ripple :href="getItemProp(processedItem, 'url')" :class="getItemActionClass(processedItem)" :target="getItemProp(processedItem, 'target')" tabindex="-1" aria-hidden="true">
                            <span v-if="getItemProp(processedItem, 'icon')" :class="getItemIconClass(processedItem)"></span>
                            <span class="p-menuitem-text">{{ getItemLabel(processedItem) }}</span>
                            <span v-if="getItemProp(processedItem, 'items')" :class="getSubmenuIcon()"></span>
                        </a>
                    </template>
                    <component v-else :is="template" :item="processedItem.item"></component>
                </div>
                <MenubarSub
                    v-if="isItemVisible(processedItem) && isItemGroup(processedItem)"
                    :menuId="menuId"
                    role="menu"
                    class="p-submenu-list"
                    :focusedItemId="focusedItemId"
                    :items="processedItem.items"
                    :mobileActive="mobileActive"
                    :activeItemPath="activeItemPath"
                    :template="template"
                    :exact="exact"
                    :level="level + 1"
                    @item-click="$emit('item-click', $event)"
                    @item-mouseenter="$emit('item-mouseenter', $event)"
                />
            </li>
            <li v-if="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')" :id="getItemId(processedItem)" :style="getItemProp(processedItem, 'style')" :class="getSeparatorItemClass(processedItem)" role="separator"></li>
        </template>
    </ul>
</template>

<script>
import Ripple from 'primevue/ripple';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'MenubarSub',
    emits: ['item-mouseenter', 'item-click'],
    props: {
        items: {
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
        },
        level: {
            type: Number,
            default: 0
        },
        menuId: {
            type: String,
            default: null
        },
        focusedItemId: {
            type: String,
            default: null
        },
        activeItemPath: {
            type: Object,
            default: null
        }
    },
    list: null,
    methods: {
        getItemId(processedItem) {
            return `${this.menuId}_${processedItem.key}`;
        },
        getItemKey(processedItem) {
            return this.getItemId(processedItem);
        },
        getItemProp(processedItem, name, params) {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
        },
        getItemLabel(processedItem) {
            return this.getItemProp(processedItem, 'label');
        },
        isItemActive(processedItem) {
            return this.activeItemPath.some((path) => path.key === processedItem.key);
        },
        isItemVisible(processedItem) {
            return this.getItemProp(processedItem, 'visible') !== false;
        },
        isItemDisabled(processedItem) {
            return this.getItemProp(processedItem, 'disabled');
        },
        isItemFocused(processedItem) {
            return this.focusedItemId === this.getItemId(processedItem);
        },
        isItemGroup(processedItem) {
            return ObjectUtils.isNotEmpty(processedItem.items);
        },
        onItemClick(event, processedItem) {
            this.getItemProp(processedItem, 'command', { originalEvent: event, item: processedItem.item });
            this.$emit('item-click', { originalEvent: event, processedItem, isFocus: true });
        },
        onItemMouseEnter(event, processedItem) {
            this.$emit('item-mouseenter', { originalEvent: event, processedItem });
        },
        onItemActionClick(event, navigate) {
            navigate && navigate(event);
        },
        getAriaSetSize() {
            return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
        },
        getAriaPosInset(index) {
            return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
        },
        getItemClass(processedItem) {
            return [
                'p-menuitem',
                this.getItemProp(processedItem, 'class'),
                {
                    'p-menuitem-active p-highlight': this.isItemActive(processedItem),
                    'p-focus': this.isItemFocused(processedItem),
                    'p-disabled': this.isItemDisabled(processedItem)
                }
            ];
        },
        getItemActionClass(processedItem, routerProps) {
            return [
                'p-menuitem-link',
                {
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
        },
        getItemIconClass(processedItem) {
            return ['p-menuitem-icon', this.getItemProp(processedItem, 'icon')];
        },
        getSeparatorItemClass(processedItem) {
            return ['p-menuitem-separator', this.getItemProp(processedItem, 'class')];
        },
        getSubmenuIcon() {
            return ['p-submenu-icon pi', { 'pi-angle-right': !this.root, 'pi-angle-down': this.root }];
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
