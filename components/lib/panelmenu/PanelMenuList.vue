<template>
    <PanelMenuSub
        :id="panelId + '_list'"
        :class="cx('menu')"
        role="tree"
        :tabindex="-1"
        :aria-activedescendant="focused ? focusedItemId : undefined"
        :panelId="panelId"
        :focusedItemId="focused ? focusedItemId : undefined"
        :items="processedItems"
        :templates="templates"
        :activeItemPath="activeItemPath"
        :exact="exact"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeyDown"
        @item-toggle="onItemToggle"
        :pt="pt"
        v-bind="ptm('menu')"
    />
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { DomHandler, ObjectUtils } from 'primevue/utils';
import PanelMenuSub from './PanelMenuSub.vue';

export default {
    name: 'PanelMenuList',
    hostName: 'PanelMenu',
    extends: BaseComponent,
    emits: ['item-toggle', 'header-focus'],
    props: {
        panelId: {
            type: String,
            default: null
        },
        items: {
            type: Array,
            default: null
        },
        templates: {
            type: Object,
            default: null
        },
        expandedKeys: {
            type: Object,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    searchTimeout: null,
    searchValue: null,
    data() {
        return {
            focused: false,
            focusedItem: null,
            activeItemPath: []
        };
    },
    watch: {
        expandedKeys(newValue) {
            this.autoUpdateActiveItemPath(newValue);
        }
    },
    mounted() {
        this.autoUpdateActiveItemPath(this.expandedKeys);
    },
    methods: {
        getItemProp(processedItem, name) {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
        },
        getItemLabel(processedItem) {
            return this.getItemProp(processedItem, 'label');
        },
        isItemVisible(processedItem) {
            return this.getItemProp(processedItem, 'visible') !== false;
        },
        isItemDisabled(processedItem) {
            return this.getItemProp(processedItem, 'disabled');
        },
        isItemActive(processedItem) {
            return this.activeItemPath.some((path) => path.key === processedItem.parentKey);
        },
        isItemGroup(processedItem) {
            return ObjectUtils.isNotEmpty(processedItem.items);
        },
        onFocus(event) {
            this.focused = true;
            this.focusedItem = this.focusedItem || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
        },
        onBlur() {
            this.focused = false;
            this.focusedItem = null;
            this.searchValue = '';
        },
        onKeyDown(event) {
            const metaKey = event.metaKey || event.ctrlKey;

            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event);
                    break;

                case 'ArrowLeft':
                    this.onArrowLeftKey(event);
                    break;

                case 'ArrowRight':
                    this.onArrowRightKey(event);
                    break;

                case 'Home':
                    this.onHomeKey(event);
                    break;

                case 'End':
                    this.onEndKey(event);
                    break;

                case 'Space':
                    this.onSpaceKey(event);
                    break;

                case 'Enter':
                    this.onEnterKey(event);
                    break;

                case 'Escape':
                case 'Tab':
                case 'PageDown':
                case 'PageUp':
                case 'Backspace':
                case 'ShiftLeft':
                case 'ShiftRight':
                    //NOOP
                    break;

                default:
                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        this.searchItems(event, event.key);
                    }

                    break;
            }
        },
        onArrowDownKey(event) {
            const processedItem = ObjectUtils.isNotEmpty(this.focusedItem) ? this.findNextItem(this.focusedItem) : this.findFirstItem();

            this.changeFocusedItem({ originalEvent: event, processedItem, focusOnNext: true });
            event.preventDefault();
        },
        onArrowUpKey(event) {
            const processedItem = ObjectUtils.isNotEmpty(this.focusedItem) ? this.findPrevItem(this.focusedItem) : this.findLastItem();

            this.changeFocusedItem({ originalEvent: event, processedItem, selfCheck: true });
            event.preventDefault();
        },
        onArrowLeftKey(event) {
            if (ObjectUtils.isNotEmpty(this.focusedItem)) {
                const matched = this.activeItemPath.some((p) => p.key === this.focusedItem.key);

                if (matched) {
                    this.activeItemPath = this.activeItemPath.filter((p) => p.key !== this.focusedItem.key);
                } else {
                    this.focusedItem = ObjectUtils.isNotEmpty(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem;
                }

                event.preventDefault();
            }
        },
        onArrowRightKey(event) {
            if (ObjectUtils.isNotEmpty(this.focusedItem)) {
                const grouped = this.isItemGroup(this.focusedItem);

                if (grouped) {
                    const matched = this.activeItemPath.some((p) => p.key === this.focusedItem.key);

                    if (matched) {
                        this.onArrowDownKey(event);
                    } else {
                        this.activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== this.focusedItem.parentKey);
                        this.activeItemPath.push(this.focusedItem);
                    }
                }

                event.preventDefault();
            }
        },
        onHomeKey(event) {
            this.changeFocusedItem({ originalEvent: event, processedItem: this.findFirstItem(), allowHeaderFocus: false });
            event.preventDefault();
        },
        onEndKey(event) {
            this.changeFocusedItem({ originalEvent: event, processedItem: this.findLastItem(), focusOnNext: true, allowHeaderFocus: false });
            event.preventDefault();
        },
        onEnterKey(event) {
            if (ObjectUtils.isNotEmpty(this.focusedItem)) {
                const element = DomHandler.findSingle(this.$el, `li[id="${`${this.focusedItemId}`}"]`);
                const anchorElement = element && (DomHandler.findSingle(element, '[data-pc-section="action"]') || DomHandler.findSingle(element, 'a,button'));

                anchorElement ? anchorElement.click() : element && element.click();
            }

            event.preventDefault();
        },
        onSpaceKey(event) {
            this.onEnterKey(event);
        },
        onItemToggle(event) {
            const { processedItem, expanded } = event;

            if (this.expandedKeys) {
                this.$emit('item-toggle', { item: processedItem.item, expanded });
            } else {
                this.activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== processedItem.parentKey);
                expanded && this.activeItemPath.push(processedItem);
            }

            this.focusedItem = processedItem;
            DomHandler.focus(this.$el);
        },
        isElementInPanel(event, element) {
            const panel = event.currentTarget.closest('[data-pc-section="panel"]');

            return panel && panel.contains(element);
        },
        isItemMatched(processedItem) {
            return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
        },
        isVisibleItem(processedItem) {
            return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
        },
        isValidItem(processedItem) {
            return !!processedItem && !this.isItemDisabled(processedItem);
        },
        findFirstItem() {
            return this.visibleItems.find((processedItem) => this.isValidItem(processedItem));
        },
        findLastItem() {
            return ObjectUtils.findLast(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
        },
        findNextItem(processedItem) {
            const index = this.visibleItems.findIndex((item) => item.key === processedItem.key);
            const matchedItem = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).find((pItem) => this.isValidItem(pItem)) : undefined;

            return matchedItem || processedItem;
        },
        findPrevItem(processedItem) {
            const index = this.visibleItems.findIndex((item) => item.key === processedItem.key);
            const matchedItem = index > 0 ? ObjectUtils.findLast(this.visibleItems.slice(0, index), (pItem) => this.isValidItem(pItem)) : undefined;

            return matchedItem || processedItem;
        },
        searchItems(event, char) {
            this.searchValue = (this.searchValue || '') + char;

            let matchedItem = null;
            let matched = false;

            if (ObjectUtils.isNotEmpty(this.focusedItem)) {
                const focusedItemIndex = this.visibleItems.findIndex((processedItem) => processedItem.key === this.focusedItem.key);

                matchedItem = this.visibleItems.slice(focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem));
                matchedItem = ObjectUtils.isEmpty(matchedItem) ? this.visibleItems.slice(0, focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem)) : matchedItem;
            } else {
                matchedItem = this.visibleItems.find((processedItem) => this.isItemMatched(processedItem));
            }

            if (ObjectUtils.isNotEmpty(matchedItem)) {
                matched = true;
            }

            if (ObjectUtils.isEmpty(matchedItem) && ObjectUtils.isEmpty(this.focusedItem)) {
                matchedItem = this.findFirstItem();
            }

            if (ObjectUtils.isNotEmpty(matchedItem)) {
                this.changeFocusedItem({
                    originalEvent: event,
                    processedItem: matchedItem,
                    allowHeaderFocus: false
                });
            }

            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = setTimeout(() => {
                this.searchValue = '';
                this.searchTimeout = null;
            }, 500);

            return matched;
        },
        changeFocusedItem(event) {
            const { originalEvent, processedItem, focusOnNext, selfCheck, allowHeaderFocus = true } = event;

            if (ObjectUtils.isNotEmpty(this.focusedItem) && this.focusedItem.key !== processedItem.key) {
                this.focusedItem = processedItem;
                this.scrollInView();
            } else if (allowHeaderFocus) {
                this.$emit('header-focus', { originalEvent, focusOnNext, selfCheck });
            }
        },
        scrollInView() {
            const element = DomHandler.findSingle(this.$el, `li[id="${`${this.focusedItemId}`}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        },
        autoUpdateActiveItemPath(expandedKeys) {
            this.activeItemPath = Object.entries(expandedKeys || {}).reduce((acc, [key, val]) => {
                if (val) {
                    const processedItem = this.findProcessedItemByItemKey(key);

                    processedItem && acc.push(processedItem);
                }

                return acc;
            }, []);
        },
        findProcessedItemByItemKey(key, processedItems, level = 0) {
            processedItems = processedItems || (level === 0 && this.processedItems);

            if (!processedItems) return null;

            for (let i = 0; i < processedItems.length; i++) {
                const processedItem = processedItems[i];

                if (this.getItemProp(processedItem, 'key') === key) return processedItem;

                const matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);

                if (matchedItem) return matchedItem;
            }
        },
        createProcessedItems(items, level = 0, parent = {}, parentKey = '') {
            const processedItems = [];

            items &&
                items.forEach((item, index) => {
                    const key = (parentKey !== '' ? parentKey + '_' : '') + index;
                    const newItem = {
                        item,
                        index,
                        level,
                        key,
                        parent,
                        parentKey
                    };

                    newItem['items'] = this.createProcessedItems(item.items, level + 1, newItem, key);
                    processedItems.push(newItem);
                });

            return processedItems;
        },
        flatItems(processedItems, processedFlattenItems = []) {
            processedItems &&
                processedItems.forEach((processedItem) => {
                    if (this.isVisibleItem(processedItem)) {
                        processedFlattenItems.push(processedItem);
                        this.flatItems(processedItem.items, processedFlattenItems);
                    }
                });

            return processedFlattenItems;
        }
    },
    computed: {
        processedItems() {
            return this.createProcessedItems(this.items || []);
        },
        visibleItems() {
            return this.flatItems(this.processedItems);
        },
        focusedItemId() {
            return ObjectUtils.isNotEmpty(this.focusedItem) ? `${this.panelId}_${this.focusedItem.key}` : null;
        }
    },
    components: {
        PanelMenuSub: PanelMenuSub
    }
};
</script>
