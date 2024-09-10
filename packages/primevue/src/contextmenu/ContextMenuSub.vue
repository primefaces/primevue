<template>
    <transition name="p-contextmenusub" @enter="onEnter" v-bind="ptm('menu.transition')">
        <ul v-if="root ? true : visible" ref="container" :tabindex="tabindex" v-bind="ptm('rootList')">
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
                    v-bind="getPTOptions('item', processedItem, index)"
                    :data-p-active="isItemActive(processedItem)"
                    :data-p-focused="isItemFocused(processedItem)"
                    :data-p-disabled="isItemDisabled(processedItem)"
                >
                    <div
                        :class="cx('itemContent')"
                        @click="onItemClick($event, processedItem)"
                        @mouseenter="onItemMouseEnter($event, processedItem)"
                        @mousemove="onItemMouseMove($event, processedItem)"
                        v-bind="getPTOptions('itemContent', processedItem, index)"
                    >
                        <template v-if="!templates.item">
                            <a v-ripple :href="getItemProp(processedItem, 'url')" :class="cx('itemLink')" :target="getItemProp(processedItem, 'target')" tabindex="-1" v-bind="getPTOptions('itemLink', processedItem, index)">
                                <component v-if="templates.itemicon" :is="templates.itemicon" :item="processedItem.item" :class="cx('itemIcon')" />
                                <span v-else-if="getItemProp(processedItem, 'icon')" :class="[cx('itemIcon'), getItemProp(processedItem, 'icon')]" v-bind="getPTOptions('itemIcon', processedItem, index)" />
                                <span :id="getItemLabelId(processedItem)" :class="cx('itemLabel')" v-bind="getPTOptions('itemLabel', processedItem, index)">{{ getItemLabel(processedItem) }}</span>
                                <template v-if="getItemProp(processedItem, 'items')">
                                    <component v-if="templates.submenuicon" :is="templates.submenuicon" :active="isItemActive(processedItem)" :class="cx('submenuIcon')" />
                                    <AngleRightIcon v-else :class="cx('submenuIcon')" v-bind="getPTOptions('submenuicon', processedItem, index)" />
                                </template>
                            </a>
                        </template>
                        <component v-else :is="templates.item" :item="processedItem.item" :hasSubmenu="getItemProp(processedItem, 'items')" :label="getItemLabel(processedItem)" :props="getMenuItemProps(processedItem, index)"></component>
                    </div>
                    <ContextMenuSub
                        v-if="isItemVisible(processedItem) && isItemGroup(processedItem)"
                        :id="getItemId(processedItem) + '_list'"
                        role="menu"
                        :class="cx('submenu')"
                        :menuId="menuId"
                        :focusedItemId="focusedItemId"
                        :items="processedItem.items"
                        :templates="templates"
                        :activeItemPath="activeItemPath"
                        :level="level + 1"
                        :visible="isItemActive(processedItem) && isItemGroup(processedItem)"
                        :pt="pt"
                        :unstyled="unstyled"
                        @item-click="$emit('item-click', $event)"
                        @item-mouseenter="$emit('item-mouseenter', $event)"
                        @item-mousemove="$emit('item-mousemove', $event)"
                        :aria-labelledby="getItemLabelId(processedItem)"
                        v-bind="ptm('submenu')"
                    />
                </li>
                <li
                    v-if="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    :id="getItemId(processedItem)"
                    :style="getItemProp(processedItem, 'style')"
                    :class="[cx('separator'), getItemProp(processedItem, 'class')]"
                    role="separator"
                    v-bind="ptm('separator')"
                ></li>
            </template>
        </ul>
    </transition>
</template>

<script>
import { nestedPosition } from '@primeuix/utils/dom';
import { isNotEmpty, resolve } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import AngleRightIcon from '@primevue/icons/angleright';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';

export default {
    name: 'ContextMenuSub',
    hostName: 'ContextMenu',
    extends: BaseComponent,
    emits: ['item-click', 'item-mouseenter', 'item-mousemove'],
    props: {
        items: {
            type: Array,
            default: null
        },
        menuId: {
            type: String,
            default: null
        },
        focusedItemId: {
            type: String,
            default: null
        },
        root: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: false
        },
        level: {
            type: Number,
            default: 0
        },
        templates: {
            type: Object,
            default: null
        },
        activeItemPath: {
            type: Object,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        }
    },
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
        getPTOptions(key, processedItem, index) {
            return this.ptm(key, {
                context: {
                    item: processedItem.item,
                    active: this.isItemActive(processedItem),
                    focused: this.isItemFocused(processedItem),
                    disabled: this.isItemDisabled(processedItem),
                    index
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
            this.$emit('item-mousemove', { originalEvent: event, processedItem, isFocus: true });
        },
        getAriaSetSize() {
            return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
        },
        getAriaPosInset(index) {
            return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
        },
        onEnter() {
            nestedPosition(this.$refs.container, this.level);
        },
        getMenuItemProps(processedItem, index) {
            return {
                action: mergeProps(
                    {
                        class: this.cx('itemLink'),
                        tabindex: -1,
                        'aria-hidden': true
                    },
                    this.getPTOptions('itemLink', processedItem, index)
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('itemIcon'), this.getItemProp(processedItem, 'icon')]
                    },
                    this.getPTOptions('itemIcon', processedItem, index)
                ),
                label: mergeProps(
                    {
                        class: this.cx('itemLabel')
                    },
                    this.getPTOptions('itemLabel', processedItem, index)
                ),
                submenuicon: mergeProps(
                    {
                        class: this.cx('submenuIcon')
                    },
                    this.getPTOptions('submenuicon', processedItem, index)
                )
            };
        }
    },

    components: {
        AngleRightIcon: AngleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
