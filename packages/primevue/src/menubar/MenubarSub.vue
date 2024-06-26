<template>
    <ul :class="level === 0 ? cx('rootList') : cx('submenu')" v-bind="level === 0 ? ptm('rootList') : ptm('submenu')">
        <template v-for="(processedItem, index) of items" :key="getItemKey(processedItem)">
            <li
                v-if="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                :id="getItemId(processedItem)"
                :style="getItemProp(processedItem, 'style')"
                :class="[cx('item', { processedItem }), getItemProp(processedItem, 'class')]"
                role="menuitem"
                :aria-label="getItemLabel(processedItem)"
                :aria-disabled="isItemDisabled(processedItem) || undefined"
                :aria-expanded="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                :aria-haspopup="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                :aria-level="level + 1"
                :aria-setsize="getAriaSetSize()"
                :aria-posinset="getAriaPosInset(index)"
                v-bind="getPTOptions(processedItem, index, 'item')"
                :data-p-active="isItemActive(processedItem)"
                :data-p-focused="isItemFocused(processedItem)"
                :data-p-disabled="isItemDisabled(processedItem)"
            >
                <div
                    :class="cx('itemContent')"
                    @click="onItemClick($event, processedItem)"
                    @mouseenter="onItemMouseEnter($event, processedItem)"
                    @mousemove="onItemMouseMove($event, processedItem)"
                    v-bind="getPTOptions(processedItem, index, 'itemContent')"
                >
                    <template v-if="!templates.item">
                        <a v-ripple :href="getItemProp(processedItem, 'url')" :class="cx('itemLink')" :target="getItemProp(processedItem, 'target')" tabindex="-1" aria-hidden="true" v-bind="getPTOptions(processedItem, index, 'itemLink')">
                            <component v-if="templates.itemicon" :is="templates.itemicon" :item="processedItem.item" :class="cx('itemIcon')" />
                            <span v-else-if="getItemProp(processedItem, 'icon')" :class="[cx('itemIcon'), getItemProp(processedItem, 'icon')]" v-bind="getPTOptions(processedItem, index, 'itemIcon')" />
                            <span :id="getItemLabelId(processedItem)" :class="cx('itemLabel')" v-bind="getPTOptions(processedItem, index, 'itemLabel')">{{ getItemLabel(processedItem) }}</span>
                            <template v-if="getItemProp(processedItem, 'items')">
                                <component v-if="templates.submenuicon" :is="templates.submenuicon" :root="root" :active="isItemActive(processedItem)" :class="cx('submenuIcon')" />
                                <component v-else :is="root ? 'AngleDownIcon' : 'AngleRightIcon'" :class="cx('submenuIcon')" v-bind="getPTOptions(processedItem, index, 'submenuIcon')" />
                            </template>
                        </a>
                    </template>
                    <component v-else :is="templates.item" :item="processedItem.item" :root="root" :hasSubmenu="getItemProp(processedItem, 'items')" :label="getItemLabel(processedItem)" :props="getMenuItemProps(processedItem, index)"></component>
                </div>
                <MenubarSub
                    v-if="isItemVisible(processedItem) && isItemGroup(processedItem)"
                    :id="getItemId(processedItem) + '_list'"
                    :menuId="menuId"
                    role="menu"
                    :style="sx('submenu', true, { processedItem })"
                    :focusedItemId="focusedItemId"
                    :items="processedItem.items"
                    :mobileActive="mobileActive"
                    :activeItemPath="activeItemPath"
                    :templates="templates"
                    :level="level + 1"
                    :aria-labelledby="getItemLabelId(processedItem)"
                    :pt="pt"
                    :unstyled="unstyled"
                    @item-click="$emit('item-click', $event)"
                    @item-mouseenter="$emit('item-mouseenter', $event)"
                    @item-mousemove="$emit('item-mousemove', $event)"
                />
            </li>
            <li
                v-if="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                :id="getItemId(processedItem)"
                :class="[cx('separator'), getItemProp(processedItem, 'class')]"
                :style="getItemProp(processedItem, 'style')"
                role="separator"
                v-bind="ptm('separator')"
            ></li>
        </template>
    </ul>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import { resolve, isNotEmpty } from '@primeuix/utils/object';
import AngleDownIcon from '@primevue/icons/angledown';
import AngleRightIcon from '@primevue/icons/angleright';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';

export default {
    name: 'MenubarSub',
    hostName: 'Menubar',
    extends: BaseComponent,
    emits: ['item-mouseenter', 'item-click', 'item-mousemove'],
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
        templates: {
            type: Object,
            default: null
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
            return processedItem && processedItem.item ? resolve(processedItem.item[name], params) : undefined;
        },
        getItemLabel(processedItem) {
            return this.getItemProp(processedItem, 'label');
        },
        getItemLabelId(processedItem) {
            return `${this.menuId}_${processedItem.key}_label`;
        },
        getPTOptions(processedItem, index, key) {
            return this.ptm(key, {
                context: {
                    item: processedItem,
                    index,
                    active: this.isItemActive(processedItem),
                    focused: this.isItemFocused(processedItem),
                    disabled: this.isItemDisabled(processedItem),
                    level: this.level
                }
            });
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
            return isNotEmpty(processedItem.items);
        },
        onItemClick(event, processedItem) {
            this.getItemProp(processedItem, 'command', { originalEvent: event, item: processedItem.item });
            this.$emit('item-click', { originalEvent: event, processedItem, isFocus: true });
        },
        onItemMouseEnter(event, processedItem) {
            this.$emit('item-mouseenter', { originalEvent: event, processedItem });
        },
        onItemMouseMove(event, processedItem) {
            this.$emit('item-mousemove', { originalEvent: event, processedItem });
        },
        getAriaSetSize() {
            return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
        },
        getAriaPosInset(index) {
            return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
        },
        getMenuItemProps(processedItem, index) {
            return {
                action: mergeProps(
                    {
                        class: this.cx('itemLink'),
                        tabindex: -1,
                        'aria-hidden': true
                    },
                    this.getPTOptions(processedItem, index, 'itemLink')
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('itemIcon'), this.getItemProp(processedItem, 'icon')]
                    },
                    this.getPTOptions(processedItem, index, 'itemIcon')
                ),
                label: mergeProps(
                    {
                        class: this.cx('itemLabel')
                    },
                    this.getPTOptions(processedItem, index, 'itemLabel')
                ),
                submenuicon: mergeProps(
                    {
                        class: this.cx('submenuIcon')
                    },
                    this.getPTOptions(processedItem, index, 'submenuIcon')
                )
            };
        }
    },
    components: {
        AngleRightIcon: AngleRightIcon,
        AngleDownIcon: AngleDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
