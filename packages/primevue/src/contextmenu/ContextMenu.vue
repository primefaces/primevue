<template>
    <Portal :appendTo="appendTo">
        <transition name="p-contextmenu" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave" v-bind="ptm('transition')">
            <div v-if="visible" :ref="containerRef" :class="cx('root')" v-bind="ptmi('root')">
                <ContextMenuSub
                    :ref="listRef"
                    :id="$id + '_list'"
                    :class="cx('rootList')"
                    role="menubar"
                    :root="true"
                    :tabindex="tabindex"
                    aria-orientation="vertical"
                    :aria-activedescendant="focused ? focusedItemIdx : undefined"
                    :menuId="$id"
                    :focusedItemId="focused ? focusedItemIdx : undefined"
                    :items="processedItems"
                    :templates="$slots"
                    :activeItemPath="activeItemPath"
                    :aria-labelledby="ariaLabelledby"
                    :aria-label="ariaLabel"
                    :level="0"
                    :visible="submenuVisible"
                    :pt="pt"
                    :unstyled="unstyled"
                    @focus="onFocus"
                    @blur="onBlur"
                    @keydown="onKeyDown"
                    @item-click="onItemClick"
                    @item-mouseenter="onItemMouseEnter"
                    @item-mousemove="onItemMouseMove"
                />
            </div>
        </transition>
    </Portal>
</template>

<script>
import { addStyle, findSingle, focus, getHiddenElementOuterHeight, getHiddenElementOuterWidth, getViewport, isTouchDevice } from '@primeuix/utils/dom';
import { findLastIndex, isEmpty, isNotEmpty, isPrintableCharacter, resolve } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import Portal from 'primevue/portal';
import BaseContextMenu from './BaseContextMenu.vue';
import ContextMenuSub from './ContextMenuSub.vue';

export default {
    name: 'ContextMenu',
    extends: BaseContextMenu,
    inheritAttrs: false,
    emits: ['focus', 'blur', 'show', 'hide', 'before-show', 'before-hide'],
    target: null,
    outsideClickListener: null,
    resizeListener: null,
    documentContextMenuListener: null,
    matchMediaListener: null,
    pageX: null,
    pageY: null,
    container: null,
    list: null,
    data() {
        return {
            focused: false,
            focusedItemInfo: { index: -1, level: 0, parentKey: '' },
            activeItemPath: [],
            visible: false,
            submenuVisible: false,
            query: null,
            queryMatches: false
        };
    },
    watch: {
        activeItemPath(newPath) {
            if (isNotEmpty(newPath)) {
                this.bindOutsideClickListener();
                this.bindResizeListener();
            } else if (!this.visible) {
                this.unbindOutsideClickListener();
                this.unbindResizeListener();
            }
        }
    },
    mounted() {
        this.bindMatchMediaListener();

        if (this.global) {
            this.bindDocumentContextMenuListener();
        }
    },
    beforeUnmount() {
        this.unbindResizeListener();
        this.unbindOutsideClickListener();
        this.unbindDocumentContextMenuListener();
        this.unbindMatchMediaListener();

        if (this.container && this.autoZIndex) {
            ZIndex.clear(this.container);
        }

        this.target = null;
        this.container = null;
    },
    methods: {
        getItemProp(item, name) {
            return item ? resolve(item[name]) : undefined;
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
            return isNotEmpty(this.getItemProp(item, 'items'));
        },
        isItemSeparator(item) {
            return this.getItemProp(item, 'separator');
        },
        getProccessedItemLabel(processedItem) {
            return processedItem ? this.getItemLabel(processedItem.item) : undefined;
        },
        isProccessedItemGroup(processedItem) {
            return processedItem && isNotEmpty(processedItem.items);
        },
        toggle(event) {
            this.visible ? this.hide() : this.show(event);
        },
        show(event) {
            this.$emit('before-show');
            this.activeItemPath = [];
            this.focusedItemInfo = { index: -1, level: 0, parentKey: '' };
            focus(this.list);

            this.pageX = event.pageX;
            this.pageY = event.pageY;
            this.visible ? this.position() : (this.visible = true);

            event.stopPropagation();
            event.preventDefault();
        },
        hide() {
            this.$emit('before-hide');
            this.visible = false;
            this.activeItemPath = [];
            this.focusedItemInfo = { index: -1, level: 0, parentKey: '' };
        },
        onFocus(event) {
            this.focused = true;
            this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : { index: -1, level: 0, parentKey: '' };
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedItemInfo = { index: -1, level: 0, parentKey: '' };
            this.searchValue = '';
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
                    if (!metaKey && isPrintableCharacter(event.key)) {
                        this.searchItems(event, event.key);
                    }

                    break;
            }
        },
        onItemChange(event, type) {
            const { processedItem, isFocus } = event;

            if (isEmpty(processedItem)) return;

            const { index, key, level, parentKey, items } = processedItem;
            const grouped = isNotEmpty(items);
            const activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== parentKey && p.parentKey !== key);

            if (grouped) {
                activeItemPath.push(processedItem);
                this.submenuVisible = true;
            }

            this.focusedItemInfo = { index, level, parentKey };

            isFocus && focus(this.list);

            if (type === 'hover' && this.queryMatches) {
                return;
            }

            this.activeItemPath = activeItemPath;
        },
        onItemClick(event) {
            const { processedItem } = event;
            const grouped = this.isProccessedItemGroup(processedItem);
            const selected = this.isSelected(processedItem);

            if (selected) {
                const { index, key, level, parentKey } = processedItem;

                this.activeItemPath = this.activeItemPath.filter((p) => key !== p.key && key.startsWith(p.key));
                this.focusedItemInfo = { index, level, parentKey };

                focus(this.list);
            } else {
                grouped ? this.onItemChange(event) : this.hide();
            }
        },
        onItemMouseEnter(event) {
            this.onItemChange(event, 'hover');
        },
        onItemMouseMove(event) {
            if (this.focused) {
                this.changeFocusedItemIndex(event, event.processedItem.index);
            }
        },
        onArrowDownKey(event) {
            const itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();

            this.changeFocusedItemIndex(event, itemIndex);
            event.preventDefault();
        },
        onArrowUpKey(event) {
            if (event.altKey) {
                if (this.focusedItemInfo.index !== -1) {
                    const processedItem = this.visibleItems[this.focusedItemInfo.index];
                    const grouped = this.isProccessedItemGroup(processedItem);

                    !grouped && this.onItemChange({ originalEvent: event, processedItem });
                }

                this.popup && this.hide();
                event.preventDefault();
            } else {
                const itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();

                this.changeFocusedItemIndex(event, itemIndex);
                event.preventDefault();
            }
        },
        onArrowLeftKey(event) {
            const processedItem = this.visibleItems[this.focusedItemInfo.index];
            const parentItem = this.activeItemPath.find((p) => p.key === processedItem.parentKey);
            const root = isEmpty(processedItem.parent);

            if (!root) {
                this.focusedItemInfo = { index: -1, parentKey: parentItem ? parentItem.parentKey : '' };
                this.searchValue = '';
                this.onArrowDownKey(event);
            }

            this.activeItemPath = this.activeItemPath.filter((p) => p.parentKey !== this.focusedItemInfo.parentKey);

            event.preventDefault();
        },
        onArrowRightKey(event) {
            const processedItem = this.visibleItems[this.focusedItemInfo.index];
            const grouped = this.isProccessedItemGroup(processedItem);

            if (grouped) {
                this.onItemChange({ originalEvent: event, processedItem });
                this.focusedItemInfo = { index: -1, parentKey: processedItem.key };
                this.searchValue = '';
                this.onArrowDownKey(event);
            }

            event.preventDefault();
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
                const element = findSingle(this.list, `li[id="${`${this.focusedItemIdx}`}"]`);
                const anchorElement = element && findSingle(element, '[data-pc-section="itemlink"]');

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
            this.hide();
            !this.popup && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());

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
        onEnter(el) {
            addStyle(el, { position: 'absolute' });
            this.position();

            if (this.autoZIndex) {
                ZIndex.set('menu', el, this.baseZIndex + this.$primevue.config.zIndex.menu);
            }
        },
        onAfterEnter() {
            this.bindOutsideClickListener();
            this.bindResizeListener();

            this.$emit('show');
            focus(this.list);
        },
        onLeave() {
            this.$emit('hide');
            this.container = null;
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                ZIndex.clear(el);
            }

            this.unbindOutsideClickListener();
            this.unbindResizeListener();
        },
        position() {
            let left = this.pageX + 1;
            let top = this.pageY + 1;
            let width = this.container.offsetParent ? this.container.offsetWidth : getHiddenElementOuterWidth(this.container);
            let height = this.container.offsetParent ? this.container.offsetHeight : getHiddenElementOuterHeight(this.container);
            let viewport = getViewport();
            let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            let scrollLeft = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

            //flip
            if (left + width - scrollLeft > viewport.width) {
                left -= width;
            }

            //flip
            if (top + height - scrollTop > viewport.height) {
                top -= height;
            }

            //fit
            if (left < scrollLeft) {
                left = scrollLeft;
            }

            //fit
            if (top < scrollTop) {
                top = scrollTop;
            }

            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    const isOutsideContainer = this.container && !this.container.contains(event.target);
                    const isOutsideTarget = this.visible ? !(this.target && (this.target === event.target || this.target.contains(event.target))) : true;

                    if (isOutsideContainer && isOutsideTarget) {
                        this.hide();
                    }
                };

                document.addEventListener('click', this.outsideClickListener, true);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener, true);
                this.outsideClickListener = null;
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.visible && !isTouchDevice()) {
                        this.hide();
                    }
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
        bindDocumentContextMenuListener() {
            if (!this.documentContextMenuListener) {
                this.documentContextMenuListener = (event) => {
                    event.button === 2 && this.show(event);
                };

                document.addEventListener('contextmenu', this.documentContextMenuListener);
            }
        },
        unbindDocumentContextMenuListener() {
            if (this.documentContextMenuListener) {
                document.removeEventListener('contextmenu', this.documentContextMenuListener);
                this.documentContextMenuListener = null;
            }
        },
        bindMatchMediaListener() {
            if (!this.matchMediaListener) {
                const query = matchMedia(`(max-width: ${this.breakpoint})`);

                this.query = query;
                this.queryMatches = query.matches;

                this.matchMediaListener = () => {
                    this.queryMatches = query.matches;
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
            return findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
        },
        findNextItemIndex(index) {
            const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;

            return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
        },
        findPrevItemIndex(index) {
            const matchedItemIndex = index > 0 ? findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;

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
            const id = index !== -1 ? `${this.$id}_${index}` : this.focusedItemIdx;
            const element = findSingle(this.list, `li[id="${id}"]`);

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
        listRef(el) {
            this.list = el ? el.$el : undefined;
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
        focusedItemIdx() {
            return this.focusedItemInfo.index !== -1 ? `${this.$id}${isNotEmpty(this.focusedItemInfo.parentKey) ? '_' + this.focusedItemInfo.parentKey : ''}_${this.focusedItemInfo.index}` : null;
        }
    },
    components: {
        ContextMenuSub,
        Portal
    }
};
</script>
