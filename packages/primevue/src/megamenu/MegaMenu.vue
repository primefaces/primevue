<template>
    <div :ref="containerRef" :id="$id" :class="cx('root')" v-bind="ptmi('root')">
        <div v-if="$slots.start" :class="cx('start')" v-bind="ptm('start')">
            <slot name="start"></slot>
        </div>
        <!--TODO: menubutton deprecated since v4.0. Use button-->
        <slot :id="$id" :name="$slots.button ? 'button' : 'menubutton'" :class="cx('button')" :toggleCallback="(event) => menuButtonClick(event)">
            <a
                v-if="model && model.length > 0"
                ref="menubutton"
                role="button"
                tabindex="0"
                :class="cx('button')"
                :aria-haspopup="model.length && model.length > 0 ? true : false"
                :aria-expanded="mobileActive"
                :aria-controls="$id"
                :aria-label="$primevue.config.locale.aria?.navigation"
                @click="menuButtonClick($event)"
                @keydown="menuButtonKeydown($event)"
                v-bind="ptm('button')"
            >
                <!--TODO: menubuttonicon deprecated since v4.0. Use buttonicon-->
                <slot :name="$slots.buttonicon ? 'buttonicon' : 'menubuttonicon'">
                    <BarsIcon v-bind="ptm('buttonIcon')" />
                </slot>
            </a>
        </slot>
        <MegaMenuSub
            :ref="menubarRef"
            :id="$id + '_list'"
            :tabindex="!disabled ? tabindex : -1"
            role="menubar"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            :aria-disabled="disabled || undefined"
            :aria-orientation="orientation"
            :aria-activedescendant="focused ? focusedItemId : undefined"
            :menuId="$id"
            :focusedItemId="focused ? focusedItemId : undefined"
            :items="processedItems"
            :horizontal="horizontal"
            :templates="$slots"
            :activeItem="activeItem"
            :mobileActive="mobileActive"
            :level="0"
            :style="sx('rootList')"
            :pt="pt"
            :unstyled="unstyled"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            @item-click="onItemClick"
            @item-mouseenter="onItemMouseEnter"
        />
        <div v-if="$slots.end" :class="cx('end')" v-bind="ptm('end')">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import { findSingle, focus, isTouchDevice } from '@primeuix/utils/dom';
import { findLastIndex, isEmpty, isNotEmpty, isPrintableCharacter, resolve } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import BarsIcon from '@primevue/icons/bars';
import BaseMegaMenu from './BaseMegaMenu.vue';
import MegaMenuSub from './MegaMenuSub.vue';

export default {
    name: 'MegaMenu',
    extends: BaseMegaMenu,
    inheritAttrs: false,
    emits: ['focus', 'blur'],
    outsideClickListener: null,
    resizeListener: null,
    matchMediaListener: null,
    container: null,
    menubar: null,
    searchTimeout: null,
    searchValue: null,
    data() {
        return {
            mobileActive: false,
            focused: false,
            focusedItemInfo: { index: -1, key: '', parentKey: '' },
            activeItem: null,
            dirty: false,
            query: null,
            queryMatches: false
        };
    },
    watch: {
        activeItem(newItem) {
            if (isNotEmpty(newItem)) {
                this.bindOutsideClickListener();
                this.bindResizeListener();
            } else {
                this.unbindOutsideClickListener();
                this.unbindResizeListener();
            }
        }
    },
    mounted() {
        this.bindMatchMediaListener();
    },
    beforeUnmount() {
        this.mobileActive = false;
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindMatchMediaListener();
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
            if (this.mobileActive) {
                this.mobileActive = false;
                ZIndex.clear(this.menubar);
                this.hide();
            } else {
                this.mobileActive = true;
                ZIndex.set('menu', this.menubar, this.$primevue.config.zIndex.menu);
                setTimeout(() => {
                    this.show();
                }, 1);
            }

            this.bindOutsideClickListener();
            event.preventDefault();
        },
        show() {
            this.focusedItemInfo = { index: this.findFirstFocusedItemIndex(), level: 0, parentKey: '' };

            focus(this.menubar);
        },
        hide(event, isFocus) {
            if (this.mobileActive) {
                this.mobileActive = false;
                setTimeout(() => {
                    focus(this.$refs.menubutton, { preventScroll: true });
                }, 1);
            }

            this.activeItem = null;
            this.focusedItemInfo = { index: -1, key: '', parentKey: '' };

            isFocus && focus(this.menubar);
            this.dirty = false;
        },
        onFocus(event) {
            this.focused = true;

            if (this.focusedItemInfo.index === -1) {
                const index = this.findFirstFocusedItemIndex();
                const processedItem = this.findVisibleItem(index);

                this.focusedItemInfo = { index, key: processedItem.key, parentKey: processedItem.parentKey };
            }

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedItemInfo = { index: -1, key: '', parentKey: '' };
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
        onItemChange(event) {
            const { processedItem, isFocus } = event;

            if (isEmpty(processedItem)) return;

            const { index, key, parentKey, items } = processedItem;
            const grouped = isNotEmpty(items);

            grouped && (this.activeItem = processedItem);
            this.focusedItemInfo = { index, key, parentKey };

            grouped && (this.dirty = true);
            isFocus && focus(this.menubar);
        },
        onItemClick(event) {
            const { originalEvent, processedItem } = event;
            const grouped = this.isProccessedItemGroup(processedItem);
            const root = isEmpty(processedItem.parent);
            const selected = this.isSelected(processedItem);

            if (selected) {
                const { index, key, parentKey } = processedItem;

                this.activeItem = null;
                this.focusedItemInfo = { index, key, parentKey };

                this.dirty = !root;

                if (!this.mobileActive) {
                    focus(this.menubar, { preventScroll: true });
                }
            } else {
                if (grouped) {
                    this.onItemChange(event);
                } else {
                    this.hide(originalEvent);
                }
            }
        },
        onItemMouseEnter(event) {
            if (!this.mobileActive && this.dirty) {
                this.onItemChange(event);
            }
        },
        menuButtonClick(event) {
            this.toggle(event);
        },
        menuButtonKeydown(event) {
            (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') && this.menuButtonClick(event);
        },
        onArrowDownKey(event) {
            if (this.horizontal) {
                if (isNotEmpty(this.activeItem) && this.activeItem.key === this.focusedItemInfo.key) {
                    this.focusedItemInfo = { index: -1, key: '', parentKey: this.activeItem.key };
                } else {
                    const processedItem = this.findVisibleItem(this.focusedItemInfo.index);
                    const grouped = this.isProccessedItemGroup(processedItem);

                    if (grouped) {
                        this.onItemChange({ originalEvent: event, processedItem });
                        this.focusedItemInfo = { index: -1, key: processedItem.key, parentKey: processedItem.parentKey };
                        this.searchValue = '';
                    }
                }
            }

            const itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();

            this.changeFocusedItemInfo(event, itemIndex);
            event.preventDefault();
        },
        onArrowUpKey(event) {
            if (event.altKey && this.horizontal) {
                if (this.focusedItemInfo.index !== -1) {
                    const processedItem = this.findVisibleItem(this.focusedItemInfo.index);
                    const grouped = this.isProccessedItemGroup(processedItem);

                    if (!grouped && isNotEmpty(this.activeItem)) {
                        if (this.focusedItemInfo.index === 0) {
                            this.focusedItemInfo = { index: this.activeItem.index, key: this.activeItem.key, parentKey: this.activeItem.parentKey };
                            this.activeItem = null;
                        } else {
                            this.changeFocusedItemInfo(event, this.findFirstItemIndex());
                        }
                    }
                }

                event.preventDefault();
            } else {
                const itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();

                this.changeFocusedItemInfo(event, itemIndex);
                event.preventDefault();
            }
        },
        onArrowLeftKey(event) {
            const processedItem = this.findVisibleItem(this.focusedItemInfo.index);
            const grouped = this.isProccessedItemGroup(processedItem);

            if (grouped) {
                if (this.horizontal) {
                    const itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();

                    this.changeFocusedItemInfo(event, itemIndex);
                }
            } else {
                if (this.vertical && isNotEmpty(this.activeItem)) {
                    if (processedItem.columnIndex === 0) {
                        this.focusedItemInfo = { index: this.activeItem.index, key: this.activeItem.key, parentKey: this.activeItem.parentKey };
                        this.activeItem = null;
                    }
                }

                const columnIndex = processedItem.columnIndex - 1;
                const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);

                itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
            }

            event.preventDefault();
        },
        onArrowRightKey(event) {
            const processedItem = this.findVisibleItem(this.focusedItemInfo.index);
            const grouped = this.isProccessedItemGroup(processedItem);

            if (grouped) {
                if (this.vertical) {
                    if (isNotEmpty(this.activeItem) && this.activeItem.key === processedItem.key) {
                        this.focusedItemInfo = { index: -1, key: '', parentKey: this.activeItem.key };
                    } else {
                        const processedItem = this.findVisibleItem(this.focusedItemInfo.index);
                        const grouped = this.isProccessedItemGroup(processedItem);

                        if (grouped) {
                            this.onItemChange({ originalEvent: event, processedItem });
                            this.focusedItemInfo = { index: -1, key: processedItem.key, parentKey: processedItem.parentKey };
                            this.searchValue = '';
                        }
                    }
                }

                const itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();

                this.changeFocusedItemInfo(event, itemIndex);
            } else {
                const columnIndex = processedItem.columnIndex + 1;
                const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);

                itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
            }

            event.preventDefault();
        },
        onHomeKey(event) {
            this.changeFocusedItemInfo(event, this.findFirstItemIndex());
            event.preventDefault();
        },
        onEndKey(event) {
            this.changeFocusedItemInfo(event, this.findLastItemIndex());
            event.preventDefault();
        },
        onEnterKey(event) {
            if (this.focusedItemInfo.index !== -1) {
                const element = findSingle(this.menubar, `li[id="${`${this.focusedItemId}`}"]`);
                const anchorElement = element && findSingle(element, 'a[data-pc-section="itemlink"]');

                anchorElement ? anchorElement.click() : element && element.click();

                const processedItem = this.visibleItems[this.focusedItemInfo.index];
                const grouped = this.isProccessedItemGroup(processedItem);

                !grouped && this.changeFocusedItemInfo(event, this.findFirstFocusedItemIndex());
            }

            event.preventDefault();
        },
        onSpaceKey(event) {
            this.onEnterKey(event);
        },
        onEscapeKey(event) {
            if (isNotEmpty(this.activeItem)) {
                this.focusedItemInfo = { index: this.activeItem.index, key: this.activeItem.key };
                this.activeItem = null;
            }

            event.preventDefault();
        },
        onTabKey(event) {
            if (this.focusedItemInfo.index !== -1) {
                const processedItem = this.findVisibleItem(this.focusedItemInfo.index);
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
                this.resizeListener = (event) => {
                    if (!isTouchDevice()) {
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
            return isNotEmpty(this.activeItem) ? this.activeItem.key === processedItem.key : false;
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
        findVisibleItem(index) {
            return isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
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
                this.changeFocusedItemInfo(event, itemIndex);
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
        changeFocusedItemInfo(event, index) {
            const processedItem = this.findVisibleItem(index);

            this.focusedItemInfo.index = index;
            this.focusedItemInfo.key = isNotEmpty(processedItem) ? processedItem.key : '';
            this.scrollInView();
        },
        scrollInView(index = -1) {
            const id = index !== -1 ? `${this.$id}_${index}` : this.focusedItemId;
            let element;

            if (id === null && this.queryMatches) {
                element = this.$refs.menubutton;
            } else {
                element = findSingle(this.menubar, `li[id="${id}"]`);
            }

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
            }
        },
        createProcessedItems(items, level = 0, parent = {}, parentKey = '', columnIndex) {
            const processedItems = [];

            items &&
                items.forEach((item, index) => {
                    const key = (parentKey !== '' ? parentKey + '_' : '') + (columnIndex !== undefined ? columnIndex + '_' : '') + index;
                    const newItem = {
                        item,
                        index,
                        level,
                        key,
                        parent,
                        parentKey,
                        columnIndex: columnIndex !== undefined ? columnIndex : parent.columnIndex !== undefined ? parent.columnIndex : index
                    };

                    newItem['items'] =
                        level === 0 && item.items && item.items.length > 0 ? item.items.map((_items, _index) => this.createProcessedItems(_items, level + 1, newItem, key, _index)) : this.createProcessedItems(item.items, level + 1, newItem, key);
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
            const processedItem = isNotEmpty(this.activeItem) ? this.activeItem : null;

            return processedItem && processedItem.key === this.focusedItemInfo.parentKey
                ? processedItem.items.reduce((items, col) => {
                      col.forEach((submenu) => {
                          submenu.items.forEach((a) => {
                              items.push(a);
                          });
                      });

                      return items;
                  }, [])
                : this.processedItems;
        },
        horizontal() {
            return this.orientation === 'horizontal';
        },
        vertical() {
            return this.orientation === 'vertical';
        },
        focusedItemId() {
            return isNotEmpty(this.focusedItemInfo.key) ? `${this.$id}_${this.focusedItemInfo.key}` : null;
        }
    },
    components: {
        MegaMenuSub: MegaMenuSub,
        BarsIcon: BarsIcon
    }
};
</script>
