<template>
    <transition name="p-contextmenusub" @enter="onEnter">
        <ul v-if="root ? true : visible" ref="container" v-bind="ptm('menu')">
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
                    v-bind="getPTOptions(processedItem, 'menuitem')"
                >
                    <div class="p-menuitem-content" @click="onItemClick($event, processedItem)" @mouseenter="onItemMouseEnter($event, processedItem)" v-bind="getPTOptions(processedItem, 'content')">
                        <template v-if="!templates.item">
                            <router-link v-if="getItemProp(processedItem, 'to') && !isItemDisabled(processedItem)" v-slot="{ navigate, href, isActive, isExactActive }" :to="getItemProp(processedItem, 'to')" custom>
                                <a
                                    v-ripple
                                    :href="href"
                                    :class="getItemActionClass(processedItem, { isActive, isExactActive })"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    @click="onItemActionClick($event, navigate)"
                                    v-bind="getPTOptions(processedItem, 'action')"
                                >
                                    <component v-if="templates.itemicon" :is="templates.itemicon" :item="processedItem.item" :class="getItemIconClass(processedItem)" />
                                    <span v-else-if="getItemProp(processedItem, 'icon')" :class="getItemIconClass(processedItem)" v-bind="getPTOptions(processedItem, 'icon')" />
                                    <span class="p-menuitem-text" v-bind="getPTOptions(processedItem, 'label')">{{ getItemLabel(processedItem) }}</span>
                                </a>
                            </router-link>
                            <a
                                v-else
                                v-ripple
                                :href="getItemProp(processedItem, 'url')"
                                :class="getItemActionClass(processedItem)"
                                :target="getItemProp(processedItem, 'target')"
                                tabindex="-1"
                                aria-hidden="true"
                                v-bind="getPTOptions(processedItem, 'action')"
                            >
                                <component v-if="templates.itemicon" :is="templates.itemicon" :item="processedItem.item" :class="getItemIconClass(processedItem)" />
                                <span v-else-if="getItemProp(processedItem, 'icon')" :class="getItemIconClass(processedItem)" v-bind="getPTOptions(processedItem, 'icon')" />
                                <span class="p-menuitem-text" v-bind="getPTOptions(processedItem, 'label')">{{ getItemLabel(processedItem) }}</span>
                                <template v-if="getItemProp(processedItem, 'items')">
                                    <component v-if="templates.submenuicon" :is="templates.submenuicon" :active="isItemActive(processedItem)" class="p-submenu-icon" />
                                    <AngleRightIcon v-else class="p-submenu-icon" v-bind="getPTOptions(processedItem, 'submenuicon')" />
                                </template>
                            </a>
                        </template>
                        <component v-else :is="templates.item" :item="processedItem.item"></component>
                    </div>
                    <ContextMenuSub
                        v-if="isItemVisible(processedItem) && isItemGroup(processedItem)"
                        :id="getItemId(processedItem) + '_list'"
                        role="menu"
                        class="p-submenu-list"
                        :menuId="menuId"
                        :focusedItemId="focusedItemId"
                        :items="processedItem.items"
                        :templates="templates"
                        :activeItemPath="activeItemPath"
                        :exact="exact"
                        :level="level + 1"
                        :pt="pt"
                        :visible="isItemActive(processedItem) && isItemGroup(processedItem)"
                        @item-click="$emit('item-click', $event)"
                        @item-mouseenter="$emit('item-mouseenter', $event)"
                    />
                </li>
                <li
                    v-if="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    :id="getItemId(processedItem)"
                    :style="getItemProp(processedItem, 'style')"
                    :class="getSeparatorItemClass(processedItem)"
                    role="separator"
                    v-bind="ptm('separator')"
                ></li>
            </template>
        </ul>
    </transition>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleRightIcon from 'primevue/icons/angleright';
import Ripple from 'primevue/ripple';
import { DomHandler, ObjectUtils } from 'primevue/utils';

export default {
    name: 'ContextMenuSub',
    extends: BaseComponent,
    emits: ['item-click', 'item-mouseenter'],
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
        exact: {
            type: Boolean,
            default: true
        },
        activeItemPath: {
            type: Object,
            default: null
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
