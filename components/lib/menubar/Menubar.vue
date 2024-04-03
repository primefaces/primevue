<template>
    <div :ref="containerRef" :class="cx('root')" v-bind="ptmi('root')">
        <div v-if="$slots.start" :class="cx('start')" v-bind="ptm('start')">
            <slot name="start"></slot>
        </div>
        <slot :id="id" name="menubutton" :class="cx('button')" :toggleCallback="(event) => menuButtonClick(event)">
            <a
                v-if="model && model.length > 0"
                ref="menubutton"
                role="button"
                tabindex="0"
                :class="cx('button')"
                :aria-haspopup="model.length && model.length > 0 ? true : false"
                :aria-expanded="mobileActive"
                :aria-controls="id"
                :aria-label="$primevue.config.locale.aria?.navigation"
                @click="menuButtonClick($event)"
                @keydown="menuButtonKeydown($event)"
                v-bind="{ ...buttonProps, ...ptm('button') }"
            >
                <slot name="menubuttonicon">
                    <BarsIcon v-bind="ptm('menubuttonicon')" />
                </slot>
            </a>
        </slot>
        <MenubarSub
            :ref="menubarRef"
            :id="id"
            role="menubar"
            :items="processedItems"
            :templates="$slots"
            :root="true"
            :mobileActive="mobileActive"
            tabindex="0"
            :aria-activedescendant="focused ? focusedItemId : undefined"
            :menuId="id"
            :focusedItemId="focused ? focusedItemId : undefined"
            :activeItemPath="activeItemPath"
            :level="0"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :pt="pt"
            :unstyled="unstyled"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            @item-click="onItemClick"
            @item-mouseenter="onItemMouseEnter"
            @item-mousemove="onItemMouseMove"
        />
        <div v-if="$slots.end" :class="cx('end')" v-bind="ptm('end')">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import BarsIcon from 'primevue/icons/bars';
import { DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils } from 'primevue/utils';
import BaseMenubar from './BaseMenubar.vue';
import MenubarSub from './MenubarSub.vue';

export default {
    name: 'Menubar',
    extends: BaseMenubar,
    inheritAttrs: false,
    emits: ['focus', 'blur'],
    matchMediaListener: null,
    data() {
        return {
            id: this.$attrs.id,
            mobileActive: false,
            focused: false,
            focusedItemInfo: { index: -1, level: 0, parentKey: '' },
            activeItemPath: [],
            dirty: false,
            query: null,
            queryMatches: false
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        activeItemPath(newPath) {
            if (ObjectUtils.isNotEmpty(newPath)) {
                this.bindOutsideClickListener();
                this.bindResizeListener();
            } else {
                this.unbindOutsideClickListener();
                this.unbindResizeListener();
            }
        }
    },
    outsideClickListener: null,
    container: null,
    menubar: null,
    mounted() {
        this.id = this.id || UniqueComponentId();
        this.bindMatchMediaListener();
    },
    beforeUnmount() {
        this.mobileActive = false;
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindMatchMediaListener();

        if (this.container) {
            ZIndexUtils.clear(this.container);
        }

        this.container = null;
    },
    methods: {
        getItemProp(item, name) {
            return item ? ObjectUtils.getItemValue(item[name]) : undefined;
        },
        getItemLabel(item) {
            return this.getItemProp(item, 'label');
        },
        isItemDisabled(item) {
            return this.getItemProp(item, 'disabled');
        },
        isItemVisible(item) {
            return this.getItemProp(item, 'visible') !== false;
        },
        isItemGroup(item) {
            return ObjectUtils.isNotEmpty(this.getItemProp(item, 'items'));
        },
        isItemSeparator(item) {
            return this.getItemProp(item, 'separator');
        },
        getProccessedItemLabel(processedItem) {
            return processedItem ? this.getItemLabel(processedItem.item) : undefined;
        },
        isProccessedItemGroup(processedItem) {
            return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
        },
        toggle(event) {
            if (this.mobileActive) {
                this.mobileActive = false;
                ZIndexUtils.clear(this.menubar);
                this.hide();
            } else {
                this.mobileActive = true;
                ZIndexUtils.set('menu', this.menubar, this.$primevue.config.zIndex.menu);
                setTimeout(() => {
                    this.show();
                }, 1);
            }

            this.bindOutsideClickListener();
            event.preventDefault();
        },
        show() {
            DomHandler.focus(this.menubar);
        },
        hide(event, isFocus) {
            if (this.mobileActive) {
                this.mobileActive = false;
                setTimeout(() => {
                    DomHandler.focus(this.$refs.menubutton);
                }, 0);
            }

            this.activeItemPath = [];
            this.focusedItemInfo = { index: -1, level: 0, parentKey: '' };

            isFocus && DomHandler.focus(this.menubar);
            this.dirty = false;
        },
        onFocus(event) {
            this.focused = true;

            if (!this.popup) {
                this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : { index: this.findFirstFocusedItemIndex(), level: 0, parentKey: '' };
            }

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedItemInfo = { index: -1, level: 0, parentKey: '' };
            this.searchValue = '';
            this.dirty = false;
            this.$emit('blur', event);
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
                case 'NumpadEnter':
                    this.onEnterKey(event);
                    break;

                case 'Escape':
                    this.onEscapeKey(event);
                    break;

                case 'Tab':
                    this.onTabKey(event);
                    break;

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
        onItemChange(event) {
            const { processedItem, isFocus } = event;

            if (ObjectUtils.isEmpty(processedItem)) return;

            const { index, key, level, parentKey, items } = processedItem;
            const grouped = ObjectUtils.isNotEmpty(items);
            const activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== parentKey && p.parentKey !== key);

            grouped && activeItemPath.push(processedItem);

            this.focusedItemInfo = { index, level, parentKey };
            this.activeItemPath = activeItemPath;

            grouped && (this.dirty = true);
            isFocus && DomHandler.focus(this.menubar);
        },
        onItemClick(event) {
            const { originalEvent, processedItem } = event;
            const grouped = this.isProccessedItemGroup(processedItem);
            const root = ObjectUtils.isEmpty(processedItem.parent);
            const selected = this.isSelected(processedItem);

            if (selected) {
                const { index, key, level, parentKey } = processedItem;

                this.activeItemPath = this.activeItemPath.filter((p) => key !== p.key && key.startsWith(p.key));
                this.focusedItemInfo = { index, level, parentKey };

                this.dirty = !root;
                DomHandler.focus(this.menubar);
            } else {
                if (grouped) {
                    this.onItemChange(event);
                } else {
                    const rootProcessedItem = root ? processedItem : this.activeItemPath.find((p) => p.parentKey === '');

                    this.hide(originalEvent);
                    this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);

                    this.mobileActive = false;
                    DomHandler.focus(this.menubar);
                }
            }
        },
        onItemMouseEnter(event) {
            if (!this.mobileActive && this.dirty) {
                this.onItemChange(event);
            }
        },
        onItemMouseMove(event) {
            if (this.focused) {
                this.changeFocusedItemIndex(event, event.processedItem.index);
            }
        },
        menuButtonClick(event) {
            this.toggle(event);
        },
        menuButtonKeydown(event) {
            (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') && this.menuButtonClick(event);
        },
        onArrowDownKey(event) {
            const processedItem = this.visibleItems[this.focusedItemInfo.index];
            const root = processedItem ? ObjectUtils.isEmpty(processedItem.parent) : null;

            if (root) {
                const grouped = this.isProccessedItemGroup(processedItem);

                if (grouped) {
                    this.onItemChange({ originalEvent: event, processedItem });
                    this.focusedItemInfo = { index: -1, parentKey: processedItem.key };
                    this.onArrowRightKey(event);
                }
            } else {
                const itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();

                this.changeFocusedItemIndex(event, itemIndex);
            }

            event.preventDefault();
        },
        onArrowUpKey(event) {
            const processedItem = this.visibleItems[this.focusedItemInfo.index];
            const root = ObjectUtils.isEmpty(processedItem.parent);

            if (root) {
                const grouped = this.isProccessedItemGroup(processedItem);

                if (grouped) {
                    this.onItemChange({ originalEvent: event, processedItem });
                    this.focusedItemInfo = { index: -1, parentKey: processedItem.key };
                    const itemIndex = this.findLastItemIndex();

                    this.changeFocusedItemIndex(event, itemIndex);
                }
            } else {
                const parentItem = this.activeItemPath.find((p) => p.key === processedItem.parentKey);

                if (this.focusedItemInfo.index === 0) {
                    this.focusedItemInfo = { index: -1, parentKey: parentItem ? parentItem.parentKey : '' };
                    this.searchValue = '';
                    this.onArrowLeftKey(event);
                    this.activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== this.focusedItemInfo.parentKey);
                } else {
                    const itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();

                    this.changeFocusedItemIndex(event, itemIndex);
                }
            }

            event.preventDefault();
        },
        onArrowLeftKey(event) {
            const processedItem = this.visibleItems[this.focusedItemInfo.index];
            const parentItem = processedItem ? this.activeItemPath.find((p) => p.key === processedItem.parentKey) : null;

            if (parentItem) {
                this.onItemChange({ originalEvent: event, processedItem: parentItem });
                this.activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== this.focusedItemInfo.parentKey);

                event.preventDefault();
            } else {
                const itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();

                this.changeFocusedItemIndex(event, itemIndex);
                event.preventDefault();
            }
        },
        onArrowRightKey(event) {
            const processedItem = this.visibleItems[this.focusedItemInfo.index];
            const parentItem = processedItem ? this.activeItemPath.find((p) => p.key === processedItem.parentKey) : null;

            if (parentItem) {
                const grouped = this.isProccessedItemGroup(processedItem);

                if (grouped) {
                    this.onItemChange({ originalEvent: event, processedItem });
                    this.focusedItemInfo = { index: -1, parentKey: processedItem.key };
                    this.onArrowDownKey(event);
                }
            } else {
                const itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();

                this.changeFocusedItemIndex(event, itemIndex);
                event.preventDefault();
            }
        },
        onHomeKey(event) {
            this.changeFocusedItemIndex(event, this.findFirstItemIndex());
            event.preventDefault();
        },
        onEndKey(event) {
            this.changeFocusedItemIndex(event, this.findLastItemIndex());
            event.preventDefault();
        },
        onEnterKey(event) {
            if (this.focusedItemInfo.index !== -1) {
                const element = DomHandler.findSingle(this.menubar, `li[id="${`${this.focusedItemId}`}"]`);
                const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');

                anchorElement ? anchorElement.click() : element && element.click();

                const processedItem = this.visibleItems[this.focusedItemInfo.index];
                const grouped = this.isProccessedItemGroup(processedItem);

                !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
            }

            event.preventDefault();
        },
        onSpaceKey(event) {
            this.onEnterKey(event);
        },
        onEscapeKey(event) {
            if (this.focusedItemInfo.level !== 0) {
                const _focusedItemInfo = this.focusedItemInfo;

                this.hide(event, false);
                this.focusedItemInfo = { index: Number(_focusedItemInfo.parentKey.split('_')[0]), level: 0, parentKey: '' };
            }

            event.preventDefault();
        },
        onTabKey(event) {
            if (this.focusedItemInfo.index !== -1) {
                const processedItem = this.visibleItems[this.focusedItemInfo.index];
                const grouped = this.isProccessedItemGroup(processedItem);

                !grouped && this.onItemChange({ originalEvent: event, processedItem });
            }

            this.hide();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    const isOutsideContainer = this.container && !this.container.contains(event.target);
                    const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));

                    if (isOutsideContainer && isOutsideTarget) {
                        this.hide();
                    }
                };

                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = (event) => {
                    if (!DomHandler.isTouchDevice()) {
                        this.hide(event, true);
                    }

                    this.mobileActive = false;
                };

                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        },
        bindMatchMediaListener() {
            if (!this.matchMediaListener) {
                const query = matchMedia(`(max-width: ${this.breakpoint})`);

                this.query = query;
                this.queryMatches = query.matches;

                this.matchMediaListener = () => {
                    this.queryMatches = query.matches;
                    this.mobileActive = false;
                };

                this.query.addEventListener('change', this.matchMediaListener);
            }
        },
        unbindMatchMediaListener() {
            if (this.matchMediaListener) {
                this.query.removeEventListener('change', this.matchMediaListener);
                this.matchMediaListener = null;
            }
        },
        isItemMatched(processedItem) {
            return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem)?.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
        },
        isValidItem(processedItem) {
            return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
        },
        isValidSelectedItem(processedItem) {
            return this.isValidItem(processedItem) && this.isSelected(processedItem);
        },
        isSelected(processedItem) {
            return this.activeItemPath.some((p) => p.key === processedItem.key);
        },
        findFirstItemIndex() {
            return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
        },
        findLastItemIndex() {
            return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
        },
        findNextItemIndex(index) {
            const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;

            return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
        },
        findPrevItemIndex(index) {
            const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;

            return matchedItemIndex > -1 ? matchedItemIndex : index;
        },
        findSelectedItemIndex() {
            return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
        },
        findFirstFocusedItemIndex() {
            const selectedIndex = this.findSelectedItemIndex();

            return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
        },
        findLastFocusedItemIndex() {
            const selectedIndex = this.findSelectedItemIndex();

            return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
        },
        searchItems(event, char) {
            this.searchValue = (this.searchValue || '') + char;

            let itemIndex = -1;
            let matched = false;

            if (this.focusedItemInfo.index !== -1) {
                itemIndex = this.visibleItems.slice(this.focusedItemInfo.index).findIndex((processedItem) => this.isItemMatched(processedItem));
                itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo.index;
            } else {
                itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
            }

            if (itemIndex !== -1) {
                matched = true;
            }

            if (itemIndex === -1 && this.focusedItemInfo.index === -1) {
                itemIndex = this.findFirstFocusedItemIndex();
            }

            if (itemIndex !== -1) {
                this.changeFocusedItemIndex(event, itemIndex);
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
        changeFocusedItemIndex(event, index) {
            if (this.focusedItemInfo.index !== index) {
                this.focusedItemInfo.index = index;
                this.scrollInView();
            }
        },
        scrollInView(index = -1) {
            const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
            const element = DomHandler.findSingle(this.menubar, `li[id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
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
        containerRef(el) {
            this.container = el;
        },
        menubarRef(el) {
            this.menubar = el ? el.$el : undefined;
        }
    },
    computed: {
        processedItems() {
            return this.createProcessedItems(this.model || []);
        },
        visibleItems() {
            const processedItem = this.activeItemPath.find((p) => p.key === this.focusedItemInfo.parentKey);

            return processedItem ? processedItem.items : this.processedItems;
        },
        focusedItemId() {
            return this.focusedItemInfo.index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(this.focusedItemInfo.parentKey) ? '_' + this.focusedItemInfo.parentKey : ''}_${this.focusedItemInfo.index}` : null;
        }
    },
    components: {
        MenubarSub: MenubarSub,
        BarsIcon: BarsIcon
    }
};
</script>
