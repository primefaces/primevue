<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div v-if="showSourceControls" :class="cx('sourceControls')" v-bind="ptm('sourceControls')" data-pc-group-section="controls">
            <slot name="sourcecontrolsstart"></slot>
            <PLButton :aria-label="moveUpAriaLabel" :disabled="moveDisabled(0)" type="button" @click="moveUp($event, 0)" v-bind="moveUpButtonProps" :pt="ptm('sourceMoveUpButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="moveupicon">
                        <AngleUpIcon v-bind="ptm('sourceMoveUpButton')['icon']" data-pc-section="moveupicon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveTopAriaLabel" :disabled="moveDisabled(0)" type="button" @click="moveTop($event, 0)" v-bind="moveTopButtonProps" :pt="ptm('sourceMoveTopButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetopicon">
                        <AngleDoubleUpIcon v-bind="ptm('sourceMoveTopButton')['icon']" data-pc-section="movetopicon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveDownAriaLabel" :disabled="moveDisabled(0)" type="button" @click="moveDown($event, 0)" v-bind="moveDownButtonProps" :pt="ptm('sourceMoveDownButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movedownicon">
                        <AngleDownIcon v-bind="ptm('sourceMoveDownButton')['icon']" data-pc-section="movedownicon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveBottomAriaLabel" :disabled="moveDisabled(0)" type="button" @click="moveBottom($event, 0)" v-bind="moveBottomButtonProps" :pt="ptm('sourceMoveBottomButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movebottomicon">
                        <AngleDoubleDownIcon v-bind="ptm('sourceMoveBottomButton')['icon']" data-pc-section="movebottomicon" />
                    </slot>
                </template>
            </PLButton>
            <slot name="sourcecontrolsend"></slot>
        </div>
        <div :class="cx('sourceWrapper')" v-bind="ptm('sourceWrapper')" data-pc-group-section="listwrapper">
            <div v-if="$slots.sourceheader" :class="cx('sourceHeader')" v-bind="ptm('sourceHeader')" data-pc-group-section="header">
                <slot name="sourceheader"></slot>
            </div>
            <transition-group
                ref="sourceList"
                :id="idSource + '_list'"
                name="p-picklist-flip"
                tag="ul"
                :class="cx('sourceList')"
                :style="listStyle"
                role="listbox"
                aria-multiselectable="true"
                :aria-activedescendant="focused['sourceList'] ? focusedOptionId : undefined"
                :tabindex="sourceList && sourceList.length > 0 ? tabindex : -1"
                @focus="onListFocus($event, 'sourceList')"
                @blur="onListBlur($event, 'sourceList')"
                @keydown="onItemKeyDown($event, 'sourceList')"
                v-bind="{ ...sourceListProps, ...ptm('sourceList'), ...ptm('transition') }"
                data-pc-group-section="list"
            >
                <template v-for="(item, i) of sourceList" :key="getItemKey(item, i)">
                    <li
                        :id="idSource + '_' + i"
                        v-ripple
                        :class="cx('item', { item, id: `${idSource}_${i}`, listIndex: 0 })"
                        @click="onItemClick($event, item, i, 0)"
                        @dblclick="onItemDblClick($event, item, 0)"
                        @touchend="onItemTouchEnd"
                        @mousedown="onOptionMouseDown($event, i, 'sourceList')"
                        @mousemove="onOptionMouseMove(i, 'sourceList')"
                        role="option"
                        :aria-selected="isSelected(item, 0)"
                        v-bind="getPTOptions(item, 'item', `${idSource}_${i}`, 0)"
                        :data-p-highlight="isSelected(item, 0)"
                        :data-p-focused="`${idSource}_${i}` === focusedOptionId"
                    >
                        <slot name="item" :item="item" :index="i"> </slot>
                    </li>
                </template>
            </transition-group>
        </div>
        <div :class="cx('buttons')" v-bind="ptm('buttons')" data-pc-group-section="controls">
            <slot name="movecontrolsstart"></slot>
            <PLButton :aria-label="moveToTargetAriaLabel" type="button" @click="moveToTarget" :disabled="moveDisabled(0)" v-bind="moveToTargetProps" :pt="ptm('moveToTargetButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetotargeticon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleDownIcon' : 'AngleRightIcon'" v-bind="ptm('moveToTargetButton')['icon']" data-pc-section="movetotargeticon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveAllToTargetAriaLabel" type="button" @click="moveAllToTarget" :disabled="moveAllDisabled('sourceList')" v-bind="moveAllToTargetProps" :pt="ptm('moveAllToTargetButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movealltotargeticon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleDoubleDownIcon' : 'AngleDoubleRightIcon'" v-bind="ptm('moveAllToTargetButton')['icon']" data-pc-section="movealltotargeticon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveToSourceAriaLabel" type="button" @click="moveToSource" :disabled="moveDisabled(1)" v-bind="moveToSourceProps" :pt="ptm('moveToSourceButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetosourceicon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleUpIcon' : 'AngleLeftIcon'" v-bind="ptm('moveToSourceButton')['icon']" data-pc-section="movetosourceicon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveAllToSourceAriaLabel" type="button" @click="moveAllToSource" :disabled="moveAllDisabled('targetList')" v-bind="moveAllToSourceProps" :pt="ptm('moveAllToSourceButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movealltosourceicon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleDoubleUpIcon' : 'AngleDoubleLeftIcon'" v-bind="ptm('moveAllToSourceButton')['icon']" data-pc-section="movealltosourceicon" />
                    </slot>
                </template>
            </PLButton>
            <slot name="movecontrolsend"></slot>
        </div>
        <div :class="cx('targetWrapper')" v-bind="ptm('targetWrapper')" data-pc-group-section="listwrapper">
            <div v-if="$slots.targetheader" :class="cx('targetHeader')" v-bind="ptm('targetHeader')" data-pc-group-section="header">
                <slot name="targetheader"></slot>
            </div>
            <transition-group
                ref="targetList"
                :id="idTarget + '_list'"
                name="p-picklist-flip"
                tag="ul"
                :class="cx('targetList')"
                :style="listStyle"
                role="listbox"
                aria-multiselectable="true"
                :aria-activedescendant="focused['targetList'] ? focusedOptionId : undefined"
                :tabindex="targetList && targetList.length > 0 ? tabindex : -1"
                @focus="onListFocus($event, 'targetList')"
                @blur="onListBlur($event, 'targetList')"
                @keydown="onItemKeyDown($event, 'targetList')"
                v-bind="{ ...targetListProps, ...ptm('targetList'), ...ptm('transition') }"
                data-pc-group-section="list"
            >
                <template v-for="(item, i) of targetList" :key="getItemKey(item, i)">
                    <li
                        :id="idTarget + '_' + i"
                        v-ripple
                        :class="cx('item', { item, id: `${idTarget}_${i}`, listIndex: 1 })"
                        @click="onItemClick($event, item, i, 1)"
                        @dblclick="onItemDblClick($event, item, 1)"
                        @keydown="onItemKeyDown($event, 'targetList')"
                        @mousedown="onOptionMouseDown($event, i, 'targetList')"
                        @mousemove="onOptionMouseMove(i, 'targetList')"
                        @touchend="onItemTouchEnd"
                        role="option"
                        :aria-selected="isSelected(item, 1)"
                        v-bind="getPTOptions(item, 'item', `${idTarget}_${i}`, 1)"
                        :data-p-highlight="isSelected(item, 1)"
                        :data-p-focused="`${idTarget}_${i}` === focusedOptionId"
                    >
                        <slot name="item" :item="item" :index="i"> </slot>
                    </li>
                </template>
            </transition-group>
        </div>
        <div v-if="showTargetControls" :class="cx('targetControls')" v-bind="ptm('targetControls')" data-pc-group-section="controls">
            <slot name="targetcontrolsstart"></slot>
            <PLButton :aria-label="moveUpAriaLabel" :disabled="moveDisabled(1)" type="button" @click="moveUp($event, 1)" v-bind="moveUpButtonProps" :pt="ptm('targetMoveUpButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="moveupicon">
                        <AngleUpIcon v-bind="ptm('targetMoveUpButton')['icon']" data-pc-section="moveupicon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveTopAriaLabel" :disabled="moveDisabled(1)" type="button" @click="moveTop($event, 1)" v-bind="moveTopButtonProps" :pt="ptm('targetMoveTopButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetopicon">
                        <AngleDoubleUpIcon v-bind="ptm('targetMoveTopButton')['icon']" data-pc-section="movetopicon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveDownAriaLabel" :disabled="moveDisabled(1)" type="button" @click="moveDown($event, 1)" v-bind="moveDownButtonProps" :pt="ptm('targetMoveDownButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movedownicon">
                        <AngleDownIcon v-bind="ptm('targetMoveDownButton')['icon']" data-pc-section="movedownicon" />
                    </slot>
                </template>
            </PLButton>
            <PLButton :aria-label="moveBottomAriaLabel" :disabled="moveDisabled(1)" type="button" @click="moveBottom($event, 1)" v-bind="moveBottomButtonProps" :pt="ptm('targetMoveBottomButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movebottomicon">
                        <AngleDoubleDownIcon v-bind="ptm('targetMoveBottomButton')['icon']" data-pc-section="movebottomicon" />
                    </slot>
                </template>
            </PLButton>
            <slot name="targetcontrolsend"></slot>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import AngleDoubleDownIcon from 'primevue/icons/angledoubledown';
import AngleDoubleLeftIcon from 'primevue/icons/angledoubleleft';
import AngleDoubleRightIcon from 'primevue/icons/angledoubleright';
import AngleDoubleUpIcon from 'primevue/icons/angledoubleup';
import AngleDownIcon from 'primevue/icons/angledown';
import AngleLeftIcon from 'primevue/icons/angleleft';
import AngleRightIcon from 'primevue/icons/angleright';
import AngleUpIcon from 'primevue/icons/angleup';
import Ripple from 'primevue/ripple';
import { DomHandler, ObjectUtils, UniqueComponentId } from 'primevue/utils';
import BasePickList from './BasePickList.vue';

export default {
    name: 'PickList',
    extends: BasePickList,
    inheritAttrs: false,
    emits: ['update:modelValue', 'reorder', 'update:selection', 'selection-change', 'move-to-target', 'move-to-source', 'move-all-to-target', 'move-all-to-source', 'focus', 'blur'],
    itemTouched: false,
    reorderDirection: null,
    styleElement: null,
    media: null,
    mediaChangeListener: null,
    data() {
        return {
            id: this.$attrs.id,
            d_selection: this.selection,
            focused: {
                sourceList: false,
                targetList: false
            },
            focusedOptionIndex: -1,
            viewChanged: false
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        selection(newValue) {
            this.d_selection = newValue;
        },
        breakpoint() {
            this.destroyMedia();
            this.initMedia();
        }
    },
    updated() {
        if (this.reorderDirection) {
            this.updateListScroll(this.$refs.sourceList.$el);
            this.updateListScroll(this.$refs.targetList.$el);
            this.reorderDirection = null;
        }
    },
    beforeUnmount() {
        this.destroyStyle();
        this.destroyMedia();
    },
    mounted() {
        this.id = this.id || UniqueComponentId();

        if (this.responsive) {
            this.createStyle();
            this.initMedia();
        }
    },
    methods: {
        getItemKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
        },
        getPTOptions(item, key, id, listIndex) {
            return this.ptm(key, {
                context: {
                    active: this.isSelected(item, listIndex),
                    focused: id === this.focusedOptionId
                }
            });
        },
        isSelected(item, listIndex) {
            return ObjectUtils.findIndexInList(item, this.d_selection[listIndex]) != -1;
        },
        onListFocus(event, listType) {
            this.focused[listType] = true;
            this.findCurrentFocusedIndex(listType);
            this.scrollInView(this.focusedOptionIndex, listType);
            this.$emit('focus', event);
        },
        onListBlur(event, listType) {
            this.focused[listType] = false;
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onOptionMouseDown(event, index, listType) {
            this.focused[listType] = true;
            this.focusedOptionIndex = index;
        },
        onOptionMouseMove(index, listType) {
            if (this.focusOnHover && this.focused[listType]) {
                this.changeFocusedOptionIndex(index, listType);
            }
        },
        moveUp(event, listIndex) {
            if (this.d_selection && this.d_selection[listIndex]) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = 0; i < selectionList.length; i++) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== 0) {
                        let movedItem = valueList[selectedItemIndex];
                        let temp = valueList[selectedItemIndex - 1];

                        valueList[selectedItemIndex - 1] = movedItem;
                        valueList[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                let value = [...this.modelValue];

                value[listIndex] = valueList;

                this.reorderDirection = 'up';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection,
                    listIndex: listIndex
                });
            }
        },
        moveTop(event, listIndex) {
            if (this.d_selection) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = 0; i < selectionList.length; i++) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== 0) {
                        let movedItem = valueList.splice(selectedItemIndex, 1)[0];

                        valueList.unshift(movedItem);
                    } else {
                        break;
                    }
                }

                let value = [...this.modelValue];

                value[listIndex] = valueList;

                this.reorderDirection = 'top';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection,
                    listIndex: listIndex
                });
            }
        },
        moveDown(event, listIndex) {
            if (this.d_selection) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = selectionList.length - 1; i >= 0; i--) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== valueList.length - 1) {
                        let movedItem = valueList[selectedItemIndex];
                        let temp = valueList[selectedItemIndex + 1];

                        valueList[selectedItemIndex + 1] = movedItem;
                        valueList[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                let value = [...this.modelValue];

                value[listIndex] = valueList;

                this.reorderDirection = 'down';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection,
                    listIndex: listIndex
                });
            }
        },
        moveBottom(event, listIndex) {
            if (this.d_selection) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = selectionList.length - 1; i >= 0; i--) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== valueList.length - 1) {
                        let movedItem = valueList.splice(selectedItemIndex, 1)[0];

                        valueList.push(movedItem);
                    } else {
                        break;
                    }
                }

                let value = [...this.modelValue];

                value[listIndex] = valueList;

                this.reorderDirection = 'bottom';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection,
                    listIndex: listIndex
                });
            }
        },
        moveToTarget(event) {
            let selection = this.d_selection && this.d_selection[0] ? this.d_selection[0] : null;
            let sourceList = [...this.modelValue[0]];
            let targetList = [...this.modelValue[1]];

            if (selection) {
                for (let i = 0; i < selection.length; i++) {
                    let selectedItem = selection[i];

                    if (ObjectUtils.findIndexInList(selectedItem, targetList) == -1) {
                        targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList), 1)[0]);
                    }
                }

                let value = [...this.modelValue];

                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('update:modelValue', value);

                this.$emit('move-to-target', {
                    originalEvent: event,
                    items: [...new Set(selection)]
                });

                this.d_selection[0] = [];
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            }
        },
        moveAllToTarget(event) {
            if (this.modelValue[0]) {
                let sourceList = [...this.modelValue[0]];
                let targetList = [...this.modelValue[1]];

                this.$emit('move-all-to-target', {
                    originalEvent: event,
                    items: sourceList
                });

                targetList = [...targetList, ...sourceList];
                sourceList = [];

                let value = [...this.modelValue];

                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('update:modelValue', value);

                this.d_selection[0] = [];
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            }
        },
        moveToSource(event) {
            let selection = this.d_selection && this.d_selection[1] ? this.d_selection[1] : null;
            let sourceList = [...this.modelValue[0]];
            let targetList = [...this.modelValue[1]];

            if (selection) {
                for (let i = 0; i < selection.length; i++) {
                    let selectedItem = selection[i];

                    if (ObjectUtils.findIndexInList(selectedItem, sourceList) == -1) {
                        sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList), 1)[0]);
                    }
                }

                let value = [...this.modelValue];

                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('update:modelValue', value);

                this.$emit('move-to-source', {
                    originalEvent: event,
                    items: [...new Set(selection)]
                });

                this.d_selection[1] = [];
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            }
        },
        moveAllToSource(event) {
            if (this.modelValue[1]) {
                let sourceList = [...this.modelValue[0]];
                let targetList = [...this.modelValue[1]];

                this.$emit('move-all-to-source', {
                    originalEvent: event,
                    items: targetList
                });

                sourceList = [...sourceList, ...targetList];
                targetList = [];

                let value = [...this.modelValue];

                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('update:modelValue', value);

                this.d_selection[1] = [];
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            }
        },
        onItemClick(event, item, index, listIndex) {
            const listType = listIndex === 0 ? 'sourceList' : 'targetList';

            this.itemTouched = false;
            const selectionList = this.d_selection[listIndex];
            const selectedIndex = ObjectUtils.findIndexInList(item, selectionList);
            const selected = selectedIndex != -1;
            const metaSelection = this.itemTouched ? false : this.metaKeySelection;
            const selectedId = DomHandler.find(this.$refs[listType].$el, '[data-pc-section="item"]')[index].getAttribute('id');

            this.focusedOptionIndex = selectedId;
            let _selection;

            if (metaSelection) {
                let metaKey = event.metaKey || event.ctrlKey;

                if (selected && metaKey) {
                    _selection = selectionList.filter((val, index) => index !== selectedIndex);
                } else {
                    _selection = metaKey ? (selectionList ? [...selectionList] : []) : [];
                    _selection.push(item);
                }
            } else {
                if (selected) {
                    _selection = selectionList.filter((val, index) => index !== selectedIndex);
                } else {
                    _selection = selectionList ? [...selectionList] : [];
                    _selection.push(item);
                }
            }

            let newSelection = [...this.d_selection];

            newSelection[listIndex] = _selection;
            this.d_selection = newSelection;

            this.$emit('update:selection', this.d_selection);
            this.$emit('selection-change', {
                originalEvent: event,
                value: this.d_selection
            });
        },
        onItemDblClick(event, item, listIndex) {
            if (listIndex === 0) this.moveToTarget(event);
            else if (listIndex === 1) this.moveToSource(event);
        },
        onItemTouchEnd() {
            this.itemTouched = true;
        },
        onItemKeyDown(event, listType) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event, listType);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event, listType);
                    break;

                case 'Home':
                    this.onHomeKey(event, listType);
                    break;

                case 'End':
                    this.onEndKey(event, listType);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    this.onEnterKey(event, listType);
                    break;

                case 'Space':
                    this.onSpaceKey(event, listType);
                    break;

                case 'KeyA':
                    if (event.ctrlKey) {
                        this.d_selection = [...this.modelValue];
                        this.$emit('update:selection', this.d_selection);

                        event.preventDefault();
                    }

                default:
                    break;
            }
        },
        onArrowDownKey(event, listType) {
            const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(listType) : this.findFirstSelectedOptionIndex(listType);

            this.changeFocusedOptionIndex(optionIndex, listType);

            if (event.shiftKey) {
                this.onEnterKey(event, listType);
            }

            event.preventDefault();
        },
        onArrowUpKey(event, listType) {
            const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(listType) : this.findLastSelectedOptionIndex(listType);

            this.changeFocusedOptionIndex(optionIndex, listType);

            if (event.shiftKey) {
                this.onEnterKey(event, listType);
            }

            event.preventDefault();
        },
        onEnterKey(event, listType) {
            const listId = listType === 'sourceList' ? 0 : 1;
            const matchedOptionIndex = this.findMatchedOptionIndex(listType);

            this.onItemClick(event, this.modelValue[listId][matchedOptionIndex], matchedOptionIndex, listId);

            event.preventDefault();
        },
        onSpaceKey(event, listType) {
            event.preventDefault();

            if (event.shiftKey && this.d_selection && this.d_selection.length > 0) {
                const listId = listType === 'sourceList' ? 0 : 1;
                const selectedItemIndex = ObjectUtils.findIndexInList(this.d_selection[listId][0], [...this.modelValue[listId]]);
                const matchedOptionIndex = this.findMatchedOptionIndex(listType);

                this.d_selection[listId] = [...this.modelValue[listId]].slice(Math.min(selectedItemIndex, matchedOptionIndex), Math.max(selectedItemIndex, matchedOptionIndex) + 1);
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            } else {
                this.onEnterKey(event, listType);
            }
        },
        onHomeKey(event, listType) {
            if (event.ctrlKey && event.shiftKey) {
                const listId = listType === 'sourceList' ? 0 : 1;
                const matchedOptionIndex = this.findMatchedOptionIndex(listType);

                this.d_selection[listId] = [...this.modelValue[listId]].slice(0, matchedOptionIndex + 1);
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            } else {
                this.changeFocusedOptionIndex(0, listType);
            }

            event.preventDefault();
        },
        onEndKey(event, listType) {
            const items = this.findAllItems(listType);

            if (event.ctrlKey && event.shiftKey) {
                const listId = listType === 'sourceList' ? 0 : 1;
                const matchedOptionIndex = this.findMatchedOptionIndex(listType);

                this.d_selection[listId] = [...this.modelValue[listId]].slice(matchedOptionIndex, items.length);
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            } else {
                this.changeFocusedOptionIndex(items.length - 1, listType);
            }

            event.preventDefault();
        },
        findAllItems(listType) {
            return DomHandler.find(this.$refs[listType].$el, '[data-pc-section="item"]');
        },
        findFocusedItem(listType) {
            return DomHandler.findSingle(this.$refs[listType].$el, `[data-pc-section="item"][id=${this.focusedOptionIndex}]`);
        },
        findCurrentFocusedIndex(listType) {
            if (this.focusedOptionIndex === -1) {
                this.focusedOptionIndex = this.findFirstSelectedOptionIndex(listType);

                if (this.autoOptionFocus && this.focusedOptionIndex === -1) {
                    this.focusedOptionIndex = this.findFirstFocusedOptionIndex(listType);
                }
            }
        },
        findFirstFocusedOptionIndex(listType) {
            const firstFocusableItem = DomHandler.findSingle(this.$refs[listType].$el, '[data-pc-section="item"]');

            return DomHandler.getAttribute(firstFocusableItem, 'id');
        },
        findFirstSelectedOptionIndex(listType) {
            if (this.hasSelectedOption(listType)) {
                const selectedFirstItem = DomHandler.findSingle(this.$refs[listType].$el, '[data-p-highlight="true"]');

                return DomHandler.getAttribute(selectedFirstItem, 'id');
            }

            return -1;
        },
        findLastSelectedOptionIndex(listType) {
            if (this.hasSelectedOption(listType)) {
                const selectedItems = DomHandler.find(this.$refs[listType].$el, '[data-p-highlight="true"]');

                return ObjectUtils.findIndexInList(selectedItems[selectedItems.length - 1], this.list.children);
            }

            return -1;
        },
        findMatchedOptionIndex(listType, id = this.focusedOptionIndex) {
            const items = this.findAllItems(listType);

            return [...items].findIndex((link) => link.id === id);
        },
        findNextOptionIndex(listType) {
            const matchedOptionIndex = this.findMatchedOptionIndex(listType);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        },
        findPrevOptionIndex(listType) {
            const matchedOptionIndex = this.findMatchedOptionIndex(listType);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        },
        changeFocusedOptionIndex(index, listType) {
            const items = this.findAllItems(listType);

            let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;

            this.focusedOptionIndex = items[order].getAttribute('id');
            this.scrollInView(items[order].getAttribute('id'), listType);
        },
        scrollInView(id, listType) {
            const element = DomHandler.findSingle(this.$refs[listType].$el, `[data-pc-section="item"][id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' });
            }
        },
        updateListScroll(listElement) {
            const listItems = DomHandler.find(listElement, '[data-pc-section="item"][data-p-highlight="true"]');

            if (listItems && listItems.length) {
                switch (this.reorderDirection) {
                    case 'up':
                        DomHandler.scrollInView(listElement, listItems[0]);
                        break;

                    case 'top':
                        listElement.scrollTop = 0;
                        break;

                    case 'down':
                        DomHandler.scrollInView(listElement, listItems[listItems.length - 1]);
                        break;

                    case 'bottom':
                        listElement.scrollTop = listElement.scrollHeight;
                        break;

                    default:
                        break;
                }
            }
        },
        initMedia() {
            this.media = window.matchMedia(`(max-width: ${this.breakpoint})`);
            this.viewChanged = this.media.matches;
            this.bindMediaChangeListener();
        },
        destroyMedia() {
            this.unbindMediaChangeListener();
        },
        bindMediaChangeListener() {
            if (this.media && !this.mediaChangeListener) {
                this.mediaChangeListener = (event) => {
                    this.viewChanged = event.matches;
                };

                this.media.addEventListener('change', this.mediaChangeListener);
            }
        },
        unbindMediaChangeListener() {
            if (this.media && this.mediaChangeListener) {
                this.media.removeEventListener('change', this.mediaChangeListener);
                this.mediaChangeListener = null;
            }
        },
        createStyle() {
            if (!this.styleElement && !this.isUnstyled) {
                this.$el.setAttribute(this.attributeSelector, '');
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                DomHandler.setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.head.appendChild(this.styleElement);

                let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-picklist[${this.attributeSelector}] {
        flex-direction: column;
    }

    .p-picklist[${this.attributeSelector}] .p-picklist-buttons {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-picklist[${this.attributeSelector}] .p-picklist-buttons .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-picklist[${this.attributeSelector}] .p-picklist-buttons .p-button:last-child {
        margin-right: 0;
    }
}
`;

                this.styleElement.innerHTML = innerHTML;
            }
        },
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        },
        moveDisabled(index) {
            if (!this.d_selection[index] || !this.d_selection[index].length) {
                return true;
            }
        },
        moveAllDisabled(list) {
            return ObjectUtils.isEmpty(this[list]);
        },
        hasSelectedOption(listType) {
            return listType === 'sourceList' ? ObjectUtils.isNotEmpty(this.d_selection[0]) : ObjectUtils.isNotEmpty(this.d_selection[1]);
        }
    },
    computed: {
        idSource() {
            return `${this.id}_source`;
        },
        idTarget() {
            return `${this.id}_target`;
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
        },
        sourceList() {
            return this.modelValue && this.modelValue[0] ? this.modelValue[0] : null;
        },
        targetList() {
            return this.modelValue && this.modelValue[1] ? this.modelValue[1] : null;
        },
        attributeSelector() {
            return UniqueComponentId();
        },
        moveUpAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveUp : undefined;
        },
        moveTopAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveTop : undefined;
        },
        moveDownAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveDown : undefined;
        },
        moveBottomAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveBottom : undefined;
        },
        moveToTargetAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveToTarget : undefined;
        },
        moveAllToTargetAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveAllToTarget : undefined;
        },
        moveToSourceAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveToSource : undefined;
        },
        moveAllToSourceAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveAllToSource : undefined;
        }
    },
    components: {
        PLButton: Button,
        AngleRightIcon: AngleRightIcon,
        AngleLeftIcon: AngleLeftIcon,
        AngleDownIcon: AngleDownIcon,
        AngleUpIcon: AngleUpIcon,
        AngleDoubleRightIcon: AngleDoubleRightIcon,
        AngleDoubleLeftIcon: AngleDoubleLeftIcon,
        AngleDoubleDownIcon: AngleDoubleDownIcon,
        AngleDoubleUpIcon: AngleDoubleUpIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
