<template>
    <Portal :appendTo="appendTo" :disabled="!popup">
        <transition name="p-connected-overlay" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave" v-bind="ptm('transition')">
            <div v-if="visible" :ref="containerRef" :id="$id" :class="cx('root')" @click="onOverlayClick" v-bind="ptmi('root')">
                <div v-if="$slots.start" :class="cx('start')" v-bind="ptm('start')">
                    <slot name="start"></slot>
                </div>
                <TieredMenuSub
                    :ref="menubarRef"
                    :id="$id + '_list'"
                    :class="cx('rootList')"
                    :tabindex="!disabled ? tabindex : -1"
                    role="menubar"
                    :aria-label="ariaLabel"
                    :aria-labelledby="ariaLabelledby"
                    :aria-disabled="disabled || undefined"
                    aria-orientation="vertical"
                    :aria-activedescendant="focused ? focusedItemId : undefined"
                    :menuId="$id"
                    :focusedItemId="focused ? focusedItemId : undefined"
                    :items="processedItems"
                    :templates="$slots"
                    :activeItemPath="activeItemPath"
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
                    v-bind="ptm('rootList')"
                />
                <div v-if="$slots.end" :class="cx('end')" v-bind="ptm('end')">
                    <slot name="end"></slot>
                </div>
            </div>
        </transition>
    </Portal>
</template>

<script>
import { absolutePosition, addStyle, findSingle, focus, getOuterWidth, isTouchDevice } from '@primeuix/utils/dom';
import { findLastIndex, isEmpty, isNotEmpty, isPrintableCharacter, resolve } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler } from '@primevue/core/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import BaseTieredMenu from './BaseTieredMenu.vue';
import TieredMenuSub from './TieredMenuSub.vue';

export default {
    name: 'TieredMenu',
    extends: BaseTieredMenu,
    inheritAttrs: false,
    emits: ['focus', 'blur', 'before-show', 'before-hide', 'hide', 'show'],
    outsideClickListener: null,
    matchMediaListener: null,
    scrollHandler: null,
    resizeListener: null,
    target: null,
    container: null,
    menubar: null,
    searchTimeout: null,
    searchValue: null,
    data() {
        return {
            focused: false,
            focusedItemInfo: { index: -1, level: 0, parentKey: '' },
            activeItemPath: [],
            visible: !this.popup,
            submenuVisible: false,
            dirty: false,
            query: null,
            queryMatches: false
        };
    },
    watch: {
        activeItemPath(newPath) {
            if (!this.popup) {
                if (isNotEmpty(newPath)) {
                    this.bindOutsideClickListener();
                    this.bindResizeListener();
                } else {
                    this.unbindOutsideClickListener();
                    this.unbindResizeListener();
                }
            }
        }
    },
    mounted() {
        this.bindMatchMediaListener();
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindMatchMediaListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

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
            this.visible ? this.hide(event, true) : this.show(event);
        },
        show(event, isFocus) {
            if (this.popup) {
                this.$emit('before-show');
                this.visible = true;
                this.target = this.target || event.currentTarget;
                this.relatedTarget = event.relatedTarget || null;
            }

            isFocus && focus(this.menubar);
        },
        hide(event, isFocus) {
            if (this.popup) {
                this.$emit('before-hide');
                this.visible = false;
            }

            this.activeItemPath = [];
            this.focusedItemInfo = { index: -1, level: 0, parentKey: '' };

            isFocus && focus(this.relatedTarget || this.target || this.menubar);
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
            if (this.disabled) {
                event.preventDefault();

                return;
            }

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

            grouped && (this.dirty = true);
            isFocus && focus(this.menubar);

            if (type === 'hover' && this.queryMatches) {
                return;
            }

            this.activeItemPath = activeItemPath;
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.target
            });
        },
        onItemClick(event) {
            const { originalEvent, processedItem } = event;
            const grouped = this.isProccessedItemGroup(processedItem);
            const root = isEmpty(processedItem.parent);
            const selected = this.isSelected(processedItem);

            if (selected) {
                const { index, key, level, parentKey } = processedItem;

                this.activeItemPath = this.activeItemPath.filter((p) => key !== p.key && key.startsWith(p.key));
                this.focusedItemInfo = { index, level, parentKey };

                this.dirty = !root;
                focus(this.menubar);
            } else {
                if (grouped) {
                    this.onItemChange(event);
                } else {
                    const rootProcessedItem = root ? processedItem : this.activeItemPath.find((p) => p.parentKey === '');

                    this.hide(originalEvent);
                    this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);

                    focus(this.menubar);
                }
            }
        },
        onItemMouseEnter(event) {
            if (this.dirty) {
                this.onItemChange(event, 'hover');
            }
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

                this.popup && this.hide(event, true);
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
                const element = findSingle(this.menubar, `li[id="${`${this.focusedItemId}`}"]`);
                const anchorElement = element && findSingle(element, '[data-pc-section="itemlink"]');

                anchorElement ? anchorElement.click() : element && element.click();

                if (!this.popup) {
                    const processedItem = this.visibleItems[this.focusedItemInfo.index];
                    const grouped = this.isProccessedItemGroup(processedItem);

                    !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
                }
            }

            event.preventDefault();
        },
        onSpaceKey(event) {
            this.onEnterKey(event);
        },
        onEscapeKey(event) {
            if (this.popup || this.focusedItemInfo.level !== 0) {
                const _focusedItemInfo = this.focusedItemInfo;

                this.hide(event, false);
                this.focusedItemInfo = { index: Number(_focusedItemInfo.parentKey.split('_')[0]), level: 0, parentKey: '' };
                this.popup && focus(this.target);
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
        onEnter(el) {
            if (this.autoZIndex) {
                ZIndex.set('menu', el, this.baseZIndex + this.$primevue.config.zIndex.menu);
            }

            addStyle(el, { position: 'absolute', top: '0' });
            this.alignOverlay();
            focus(this.menubar);
            this.scrollInView();
        },
        onAfterEnter() {
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            this.$emit('show');
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();

            this.$emit('hide');
            this.container = null;
            this.dirty = false;
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                ZIndex.clear(el);
            }
        },
        alignOverlay() {
            absolutePosition(this.container, this.target);
            const targetWidth = getOuterWidth(this.target);

            if (targetWidth > getOuterWidth(this.container)) {
                this.container.style.minWidth = getOuterWidth(this.target) + 'px';
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    const isOutsideContainer = this.container && !this.container.contains(event.target);
                    const isOutsideTarget = this.popup ? !(this.target && (this.target === event.target || this.target.contains(event.target))) : true;

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
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, (event) => {
                    this.hide(event, true);
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = (event) => {
                    if (!isTouchDevice()) {
                        this.hide(event, true);
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
            const id = index !== -1 ? `${this.$id}_${index}` : this.focusedItemId;
            const element = findSingle(this.menubar, `li[id="${id}"]`);

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
            return this.focusedItemInfo.index !== -1 ? `${this.$id}${isNotEmpty(this.focusedItemInfo.parentKey) ? '_' + this.focusedItemInfo.parentKey : ''}_${this.focusedItemInfo.index}` : null;
        }
    },
    components: {
        TieredMenuSub: TieredMenuSub,
        Portal: Portal
    }
};
</script>
