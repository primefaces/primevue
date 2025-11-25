<template>
    <div :id="$id" :class="cx('root')" v-bind="ptmi('root')">
        <template v-for="(item, index) of model" :key="getPanelKey(index)">
            <div v-if="isItemVisible(item)" :style="getItemProp(item, 'style')" :class="[cx('panel'), getItemProp(item, 'class')]" v-bind="ptm('panel')">
                <div
                    :id="getHeaderId(index)"
                    :class="[cx('header', { item }), getItemProp(item, 'headerClass')]"
                    :tabindex="isItemDisabled(item) ? -1 : tabindex"
                    role="button"
                    :aria-label="getItemLabel(item)"
                    :aria-expanded="isItemActive(item)"
                    :aria-controls="getContentId(index)"
                    :aria-disabled="isItemDisabled(item)"
                    @click="onHeaderClick($event, item)"
                    @keydown="onHeaderKeyDown($event, item)"
                    v-bind="getPTOptions('header', item, index)"
                    :data-p-active="isItemActive(item)"
                    :data-p-disabled="isItemDisabled(item)"
                >
                    <div :class="cx('headerContent')" v-bind="getPTOptions('headerContent', item, index)">
                        <template v-if="!$slots.item">
                            <a :href="getItemProp(item, 'url')" :class="cx('headerLink')" :tabindex="-1" v-bind="getPTOptions('headerLink', item, index)">
                                <slot v-if="getItemProp(item, 'items')" name="submenuicon" :active="isItemActive(item)">
                                    <component :is="isItemActive(item) ? 'ChevronDownIcon' : 'ChevronRightIcon'" :class="cx('submenuIcon')" v-bind="getPTOptions('submenuIcon', item, index)" />
                                </slot>
                                <component v-if="$slots.headericon" :is="$slots.headericon" :item="item" :class="[cx('headerIcon'), getItemProp(item, 'icon')]" />
                                <span v-else-if="getItemProp(item, 'icon')" :class="[cx('headerIcon'), getItemProp(item, 'icon')]" v-bind="getPTOptions('headerIcon', item, index)" />
                                <span :class="cx('headerLabel')" v-bind="getPTOptions('headerLabel', item, index)">{{ getItemLabel(item) }}</span>
                            </a>
                        </template>
                        <component v-else :is="$slots.item" :item="item" :root="true" :active="isItemActive(item)" :hasSubmenu="isItemGroup(item)" :label="getItemLabel(item)" :props="getMenuItemProps(item, index)"></component>
                    </div>
                </div>
                <transition name="p-collapsible" v-bind="ptm('transition')">
                    <div v-show="isItemActive(item)" :id="getContentId(index)" :class="cx('contentContainer')" role="region" :aria-labelledby="getHeaderId(index)" v-bind="ptm('contentContainer')">
                        <div :class="cx('contentWrapper')" v-bind="ptm('contentWrapper')">
                            <div v-if="getItemProp(item, 'items')" :class="cx('content')" v-bind="ptm('content')">
                                <PanelMenuList
                                    :panelId="getPanelId(index)"
                                    :items="getItemProp(item, 'items')"
                                    :templates="$slots"
                                    :expandedKeys="expandedKeys"
                                    @item-toggle="changeExpandedKeys"
                                    @header-focus="updateFocusedHeader"
                                    :pt="pt"
                                    :unstyled="unstyled"
                                />
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </template>
    </div>
</template>

<script>
import { findSingle, focus, getAttribute } from '@primeuix/utils/dom';
import { equals, isNotEmpty, resolve } from '@primeuix/utils/object';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronRightIcon from '@primevue/icons/chevronright';
import { mergeProps } from 'vue';
import BasePanelMenu from './BasePanelMenu.vue';
import PanelMenuList from './PanelMenuList.vue';

export default {
    name: 'PanelMenu',
    extends: BasePanelMenu,
    inheritAttrs: false,
    emits: ['update:expandedKeys', 'panel-open', 'panel-close'],
    data() {
        return {
            activeItem: null,
            activeItems: []
        };
    },
    methods: {
        getItemProp(item, name) {
            return item ? resolve(item[name]) : undefined;
        },
        getItemLabel(item) {
            return this.getItemProp(item, 'label');
        },
        getPTOptions(key, item, index) {
            return this.ptm(key, {
                context: {
                    index,
                    active: this.isItemActive(item),
                    focused: this.isItemFocused(item),
                    disabled: this.isItemDisabled(item)
                }
            });
        },
        isItemActive(item) {
            return this.expandedKeys ? this.expandedKeys[this.getItemProp(item, 'key')] : this.multiple ? this.activeItems.some((subItem) => equals(item, subItem)) : equals(item, this.activeItem);
        },
        isItemVisible(item) {
            return this.getItemProp(item, 'visible') !== false;
        },
        isItemDisabled(item) {
            return this.getItemProp(item, 'disabled');
        },
        isItemFocused(item) {
            return equals(item, this.activeItem);
        },
        isItemGroup(item) {
            return isNotEmpty(item.items);
        },
        getPanelId(index) {
            return `${this.$id}_${index}`;
        },
        getPanelKey(index) {
            return this.getPanelId(index);
        },
        getHeaderId(index) {
            return `${this.getPanelId(index)}_header`;
        },
        getContentId(index) {
            return `${this.getPanelId(index)}_content`;
        },
        onHeaderClick(event, item) {
            if (this.isItemDisabled(item)) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({ originalEvent: event, item });
            }

            this.changeActiveItem(event, item);
            focus(event.currentTarget);
        },
        onHeaderKeyDown(event, item) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onHeaderArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onHeaderArrowUpKey(event);
                    break;

                case 'Home':
                    this.onHeaderHomeKey(event);
                    break;

                case 'End':
                    this.onHeaderEndKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    this.onHeaderEnterKey(event, item);
                    break;

                default:
                    break;
            }
        },
        onHeaderArrowDownKey(event) {
            const rootList = getAttribute(event.currentTarget, 'data-p-active') === true ? findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="rootlist"]') : null;

            rootList ? focus(rootList) : this.updateFocusedHeader({ originalEvent: event, focusOnNext: true });
            event.preventDefault();
        },
        onHeaderArrowUpKey(event) {
            const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
            const rootList = getAttribute(prevHeader, 'data-p-active') === true ? findSingle(prevHeader.nextElementSibling, '[data-pc-section="rootlist"]') : null;

            rootList ? focus(rootList) : this.updateFocusedHeader({ originalEvent: event, focusOnNext: false });
            event.preventDefault();
        },
        onHeaderHomeKey(event) {
            this.changeFocusedHeader(event, this.findFirstHeader());
            event.preventDefault();
        },
        onHeaderEndKey(event) {
            this.changeFocusedHeader(event, this.findLastHeader());
            event.preventDefault();
        },
        onHeaderEnterKey(event, item) {
            const headerAction = findSingle(event.currentTarget, '[data-pc-section="headerlink"]');

            headerAction ? headerAction.click() : this.onHeaderClick(event, item);
            event.preventDefault();
        },
        findNextHeader(panelElement, selfCheck = false) {
            const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
            const headerElement = findSingle(nextPanelElement, '[data-pc-section="header"]');

            return headerElement ? (getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeader(headerElement.parentElement) : headerElement) : null;
        },
        findPrevHeader(panelElement, selfCheck = false) {
            const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
            const headerElement = findSingle(prevPanelElement, '[data-pc-section="header"]');

            return headerElement ? (getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeader(headerElement.parentElement) : headerElement) : null;
        },
        findFirstHeader() {
            return this.findNextHeader(this.$el.firstElementChild, true);
        },
        findLastHeader() {
            return this.findPrevHeader(this.$el.lastElementChild, true);
        },
        updateFocusedHeader(event) {
            const { originalEvent, focusOnNext, selfCheck } = event;
            const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
            const header = selfCheck ? findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);

            header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
        },
        changeActiveItem(event, item, selfActive = false) {
            if (!this.isItemDisabled(item)) {
                const active = this.isItemActive(item);
                const eventName = !active ? 'panel-open' : 'panel-close';

                this.activeItem = selfActive ? item : this.activeItem && equals(item, this.activeItem) ? null : item;

                if (this.multiple) {
                    // activeItem and activeItems should be separated because it should be only one focused root item
                    if (this.activeItems.some((subItem) => equals(item, subItem))) {
                        this.activeItems = this.activeItems.filter((subItem) => !equals(item, subItem));
                    } else {
                        this.activeItems.push(item);
                    }
                }

                this.changeExpandedKeys({ item, expanded: !active });
                this.$emit(eventName, { originalEvent: event, item });
            }
        },
        changeExpandedKeys({ item, expanded = false }) {
            if (this.expandedKeys) {
                let _keys = { ...this.expandedKeys };

                if (expanded) _keys[item.key] = true;
                else delete _keys[item.key];

                this.$emit('update:expandedKeys', _keys);
            }
        },
        changeFocusedHeader(event, element) {
            element && focus(element);
        },
        getMenuItemProps(item, index) {
            return {
                icon: mergeProps(
                    {
                        class: [this.cx('headerIcon'), this.getItemProp(item, 'icon')]
                    },
                    this.getPTOptions('headerIcon', item, index)
                ),
                label: mergeProps(
                    {
                        class: this.cx('headerLabel')
                    },
                    this.getPTOptions('headerLabel', item, index)
                )
            };
        }
    },
    components: {
        PanelMenuList: PanelMenuList,
        ChevronRightIcon: ChevronRightIcon,
        ChevronDownIcon: ChevronDownIcon
    }
};
</script>
