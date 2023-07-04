<template>
    <ul :class="cx('submenu')" :tabindex="tabindex">
        <template v-for="(processedItem, index) of items" :key="getItemKey(processedItem)">
            <li
                v-if="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                :id="getItemId(processedItem)"
                :class="[cx('menuitem', { processedItem }), getItemProp(processedItem, 'class')]"
                :style="getItemProp(processedItem, 'style')"
                role="treeitem"
                :aria-label="getItemLabel(processedItem)"
                :aria-expanded="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                :aria-level="level + 1"
                :aria-setsize="getAriaSetSize()"
                :aria-posinset="getAriaPosInset(index)"
                v-bind="getPTOptions(processedItem, 'menuitem')"
                :data-p-focused="isItemFocused(processedItem)"
                :data-p-disabled="isItemDisabled(processedItem)"
            >
                <div :class="cx('content')" @click="onItemClick($event, processedItem)" v-bind="getPTOptions(processedItem, 'content')">
                    <template v-if="!templates.item">
                        <router-link v-if="getItemProp(processedItem, 'to') && !isItemDisabled(processedItem)" v-slot="{ navigate, href, isActive, isExactActive }" :to="getItemProp(processedItem, 'to')" custom>
                            <a v-ripple :href="href" :class="cx('action', { isActive, isExactActive })" tabindex="-1" aria-hidden="true" @click="onItemActionClick($event, navigate)" v-bind="getPTOptions(processedItem, 'action')">
                                <component v-if="templates.itemicon" :is="templates.itemicon" :item="processedItem.item" :class="[cx('icon'), getItemProp(processedItem, 'icon')]" />
                                <span v-else-if="getItemProp(processedItem, 'icon')" :class="[cx('icon'), getItemProp(processedItem, 'icon')]" v-bind="getPTOptions(processedItem, 'icon')" />
                                <span :class="cx('label')" v-bind="getPTOptions(processedItem, 'label')">{{ getItemLabel(processedItem) }}</span>
                            </a>
                        </router-link>
                        <a v-else v-ripple :href="getItemProp(processedItem, 'url')" :class="cx('action')" :target="getItemProp(processedItem, 'target')" tabindex="-1" aria-hidden="true" v-bind="getPTOptions(processedItem, 'action')">
                            <template v-if="isItemGroup(processedItem)">
                                <component v-if="templates.submenuicon" :is="templates.submenuicon" :class="cx('submenuIcon')" :active="isItemActive(processedItem)" v-bind="getPTOptions(processedItem, 'submenuIcon')" />
                                <component v-else :is="isItemActive(processedItem) ? 'ChevronDownIcon' : 'ChevronRightIcon'" :class="cx('submenuIcon')" v-bind="getPTOptions(processedItem, 'submenuIcon')" />
                            </template>
                            <component v-if="templates.itemicon" :is="templates.itemicon" :item="processedItem.item" :class="[cx('icon'), getItemProp(processedItem, 'icon')]" />
                            <span v-else-if="getItemProp(processedItem, 'icon')" :class="[cx('icon'), getItemProp(processedItem, 'icon')]" v-bind="getPTOptions(processedItem, 'icon')" />
                            <span :class="cx('label')" v-bind="getPTOptions(processedItem, 'label')">{{ getItemLabel(processedItem) }}</span>
                        </a>
                    </template>
                    <component v-else :is="templates.item" :item="processedItem.item"></component>
                </div>
                <transition name="p-toggleable-content">
                    <div v-show="isItemActive(processedItem)" :class="cx('toggleableContent')" v-bind="ptm('toggleableContent')">
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
                            :exact="exact"
                            @item-toggle="onItemToggle"
                            :pt="pt"
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
import BaseComponent from 'primevue/basecomponent';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import Ripple from 'primevue/ripple';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'PanelMenuSub',
    hostName: 'PanelMenu',
    extends: BaseComponent,
    emits: ['item-toggle'],
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
        exact: {
            type: Boolean,
            default: true
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
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
        },
        getItemLabel(processedItem) {
            return this.getItemProp(processedItem, 'label');
        },
        getPTOptions(processedItem, key) {
            return this.ptm(key, {
                context: {
                    active: this.isItemActive(processedItem),
                    focused: this.isItemFocused(processedItem)
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
            return ObjectUtils.isNotEmpty(processedItem.items);
        },
        onItemClick(event, processedItem) {
            this.getItemProp(processedItem, 'command', { originalEvent: event, item: processedItem.item });
            this.$emit('item-toggle', { processedItem, expanded: !this.isItemActive(processedItem) });
        },
        onItemToggle(event) {
            this.$emit('item-toggle', event);
        },
        onItemActionClick(event, navigate) {
            navigate && navigate(event);
        },
        getAriaSetSize() {
            return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
        },
        getAriaPosInset(index) {
            return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
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
