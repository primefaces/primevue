<template>
    <ul :class="cx('submenu')" :tabindex="tabindex">
        <template v-for="(processedItem, index) of items" :key="getItemKey(processedItem)">
            <li
                v-if="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                :id="getItemId(processedItem)"
                :class="[cx('item', { processedItem }), getItemProp(processedItem, 'class')]"
                :style="getItemProp(processedItem, 'style')"
                role="treeitem"
                :aria-label="getItemLabel(processedItem)"
                :aria-expanded="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                :aria-level="level + 1"
                :aria-setsize="getAriaSetSize()"
                :aria-posinset="getAriaPosInset(index)"
                v-bind="getPTOptions('item', processedItem, index)"
                :data-p-focused="isItemFocused(processedItem)"
                :data-p-disabled="isItemDisabled(processedItem)"
            >
                <div :class="cx('itemContent')" @click="onItemClick($event, processedItem)" @mousemove="onItemMouseMove($event, processedItem)" v-bind="getPTOptions('itemContent', processedItem, index)">
                    <template v-if="!templates.item">
                        <a v-ripple :href="getItemProp(processedItem, 'url')" :class="cx('itemLink')" :target="getItemProp(processedItem, 'target')" tabindex="-1" v-bind="getPTOptions('itemLink', processedItem, index)">
                            <template v-if="isItemGroup(processedItem)">
                                <component v-if="templates.submenuicon" :is="templates.submenuicon" :class="cx('submenuIcon')" :active="isItemActive(processedItem)" v-bind="getPTOptions('submenuIcon', processedItem, index)" />
                                <component v-else :is="isItemActive(processedItem) ? 'ChevronDownIcon' : 'ChevronRightIcon'" :class="cx('submenuIcon')" v-bind="getPTOptions('submenuIcon', processedItem, index)" />
                            </template>
                            <component v-if="templates.itemicon" :is="templates.itemicon" :item="processedItem.item" :class="cx('itemIcon')" />
                            <span v-else-if="getItemProp(processedItem, 'icon')" :class="[cx('itemIcon'), getItemProp(processedItem, 'icon')]" v-bind="getPTOptions('itemIcon', processedItem, index)" />
                            <span :class="cx('itemLabel')" v-bind="getPTOptions('itemLabel', processedItem, index)">{{ getItemLabel(processedItem) }}</span>
                        </a>
                    </template>
                    <component
                        v-else
                        :is="templates.item"
                        :item="processedItem.item"
                        :root="false"
                        :active="isItemActive(processedItem)"
                        :hasSubmenu="isItemGroup(processedItem)"
                        :label="getItemLabel(processedItem)"
                        :props="getMenuItemProps(processedItem, index)"
                    ></component>
                </div>
                <transition name="p-toggleable-content" v-bind="ptm('transition')">
                    <div v-show="isItemActive(processedItem)" :class="cx('contentContainer')" v-bind="ptm('contentContainer')">
                        <PanelMenuSub
                            v-if="isItemVisible(processedItem) && isItemGroup(processedItem)"
                            :id="getItemId(processedItem) + '_list'"
                            role="group"
                            :panelId="panelId"
                            :focusedItemId="focusedItemId"
                            :items="processedItem.items"
                            :level="level + 1"
                            :templates="templates"
                            :activeItemPath="activeItemPath"
                            @item-toggle="onItemToggle"
                            @item-mousemove="$emit('item-mousemove', $event)"
                            :pt="pt"
                            :unstyled="unstyled"
                            v-bind="ptm('submenu')"
                        />
                    </div>
                </transition>
            </li>
            <li
                v-if="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                :style="getItemProp(processedItem, 'style')"
                :class="[cx('separator'), getItemProp(processedItem, 'class')]"
                role="separator"
                v-bind="ptm('separator')"
            ></li>
        </template>
    </ul>
</template>

<script>
import { isNotEmpty, resolve } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronRightIcon from '@primevue/icons/chevronright';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';

export default {
    name: 'PanelMenuSub',
    hostName: 'PanelMenu',
    extends: BaseComponent,
    emits: ['item-toggle', 'item-mousemove'],
    props: {
        panelId: {
            type: String,
            default: null
        },
        focusedItemId: {
            type: String,
            default: null
        },
        items: {
            type: Array,
            default: null
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
            default: -1
        }
    },
    methods: {
        getItemId(processedItem) {
            return `${this.panelId}_${processedItem.key}`;
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
        getPTOptions(key, processedItem, index) {
            return this.ptm(key, {
                context: {
                    item: processedItem.item,
                    index,
                    active: this.isItemActive(processedItem),
                    focused: this.isItemFocused(processedItem),
                    disabled: this.isItemDisabled(processedItem)
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
            this.$emit('item-toggle', { processedItem, expanded: !this.isItemActive(processedItem) });
        },
        onItemToggle(event) {
            this.$emit('item-toggle', event);
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
        ChevronRightIcon: ChevronRightIcon,
        ChevronDownIcon: ChevronDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
