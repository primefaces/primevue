<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div v-if="showSourceControls" :class="cx('sourceControls')" v-bind="ptm('sourceControls')" data-pc-group-section="controls">
            <slot name="sourcecontrolsstart"></slot>
            <Button :aria-label="moveUpAriaLabel" :disabled="moveDisabled(0)" @click="moveUp($event, 0)" v-bind="{ ...buttonProps, ...moveUpButtonProps }" :pt="ptm('pcSourceMoveUpButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="moveupicon">
                        <AngleUpIcon v-bind="ptm('pcSourceMoveUpButton')['icon']" data-pc-section="moveupicon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveTopAriaLabel" :disabled="moveDisabled(0)" @click="moveTop($event, 0)" v-bind="{ ...buttonProps, ...moveTopButtonProps }" :pt="ptm('pcSourceMoveTopButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetopicon">
                        <AngleDoubleUpIcon v-bind="ptm('pcSourceMoveTopButton')['icon']" data-pc-section="movetopicon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveDownAriaLabel" :disabled="moveDisabled(0)" @click="moveDown($event, 0)" v-bind="{ ...buttonProps, ...moveDownButtonProps }" :pt="ptm('pcSourceMoveDownButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movedownicon">
                        <AngleDownIcon v-bind="ptm('pcSourceMoveDownButton')['icon']" data-pc-section="movedownicon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveBottomAriaLabel" :disabled="moveDisabled(0)" @click="moveBottom($event, 0)" v-bind="{ ...buttonProps, ...moveBottomButtonProps }" :pt="ptm('pcSourceMoveBottomButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movebottomicon">
                        <AngleDoubleDownIcon v-bind="ptm('pcSourceMoveBottomButton')['icon']" data-pc-section="movebottomicon" />
                    </slot>
                </template>
            </Button>
            <slot name="sourcecontrolsend"></slot>
        </div>
        <div :class="cx('sourceListContainer')" v-bind="ptm('sourceListContainer')" data-pc-group-section="listcontainer">
            <Listbox
                ref="sourceList"
                :id="idSource + '_list'"
                :modelValue="d_selection[0]"
                :options="sourceList"
                multiple
                :metaKeySelection="metaKeySelection"
                :listStyle="listStyle"
                :scrollHeight="scrollHeight"
                :tabindex="sourceList && sourceList.length > 0 ? tabindex : -1"
                :dataKey="dataKey"
                :autoOptionFocus="autoOptionFocus"
                :focusOnHover="focusOnHover"
                :striped="striped"
                :disabled="disabled"
                :pt="ptm('pcListbox')"
                :unstyled="unstyled"
                @focus="onListFocus($event, 'sourceList')"
                @blur="onListBlur($event, 'sourceList')"
                @change="onChangeSelection($event, 0)"
                @item-dblclick="onItemDblClick($event, 0)"
                data-pc-group-section="list"
            >
                <template v-if="$slots.sourceheader" #header>
                    <slot name="sourceheader"></slot>
                </template>
                <template #option="{ option, selected, index }">
                    <slot :name="$slots.option ? 'option' : 'item'" :item="option" :option="option" :selected="selected" :index="index" />
                </template>
                <!-- //TODO: item slot deprecated since v4.0. Use option slot. -->
            </Listbox>
        </div>
        <div :class="cx('transferControls')" v-bind="ptm('transferControls')" data-pc-group-section="controls">
            <slot name="movecontrolsstart"></slot>
            <Button :aria-label="moveToTargetAriaLabel" @click="moveToTarget" :disabled="moveDisabled(0)" v-bind="{ ...buttonProps, ...moveToTargetProps }" :pt="ptm('pcMoveToTargetButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetotargeticon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleDownIcon' : 'AngleRightIcon'" v-bind="ptm('pcMoveToTargetButton')['icon']" data-pc-section="movetotargeticon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveAllToTargetAriaLabel" @click="moveAllToTarget" :disabled="moveAllDisabled('sourceList')" v-bind="{ ...buttonProps, ...moveAllToTargetProps }" :pt="ptm('pcMoveAllToTargetButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movealltotargeticon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleDoubleDownIcon' : 'AngleDoubleRightIcon'" v-bind="ptm('pcMoveAllToTargetButton')['icon']" data-pc-section="movealltotargeticon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveToSourceAriaLabel" @click="moveToSource" :disabled="moveDisabled(1)" v-bind="{ ...buttonProps, ...moveToSourceProps }" :pt="ptm('pcMoveToSourceButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetosourceicon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleUpIcon' : 'AngleLeftIcon'" v-bind="ptm('pcMoveToSourceButton')['icon']" data-pc-section="movetosourceicon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveAllToSourceAriaLabel" @click="moveAllToSource" :disabled="moveAllDisabled('targetList')" v-bind="{ ...buttonProps, ...moveAllToSourceProps }" :pt="ptm('pcMoveAllToSourceButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movealltosourceicon" :viewChanged="viewChanged">
                        <component :is="viewChanged ? 'AngleDoubleUpIcon' : 'AngleDoubleLeftIcon'" v-bind="ptm('pcMoveAllToSourceButton')['icon']" data-pc-section="movealltosourceicon" />
                    </slot>
                </template>
            </Button>
            <slot name="movecontrolsend"></slot>
        </div>
        <div :class="cx('targetListContainer')" v-bind="ptm('targetListContainer')" data-pc-group-section="listcontainer">
            <Listbox
                ref="targetList"
                :id="idTarget + '_list'"
                :modelValue="d_selection[1]"
                :options="targetList"
                multiple
                :metaKeySelection="metaKeySelection"
                :listStyle="listStyle"
                :scrollHeight="scrollHeight"
                :tabindex="targetList && targetList.length > 0 ? tabindex : -1"
                :dataKey="dataKey"
                :autoOptionFocus="autoOptionFocus"
                :focusOnHover="focusOnHover"
                :striped="striped"
                :disabled="disabled"
                :pt="ptm('pcListbox')"
                :unstyled="unstyled"
                @focus="onListFocus($event, 'targetList')"
                @blur="onListBlur($event, 'targetList')"
                @change="onChangeSelection($event, 1)"
                @item-dblclick="onItemDblClick($event, 1)"
                data-pc-group-section="list"
            >
                <template v-if="$slots.targetheader" #header>
                    <slot name="targetheader"></slot>
                </template>
                <template #option="{ option, selected, index }">
                    <slot :name="$slots.option ? 'option' : 'item'" :item="option" :option="option" :selected="selected" :index="index" />
                </template>
                <!-- //TODO: item slot deprecated since v4.0. Use option slot. -->
            </Listbox>
        </div>
        <div v-if="showTargetControls" :class="cx('targetControls')" v-bind="ptm('targetControls')" data-pc-group-section="controls">
            <slot name="targetcontrolsstart"></slot>
            <Button :aria-label="moveUpAriaLabel" :disabled="moveDisabled(1)" @click="moveUp($event, 1)" v-bind="{ ...buttonProps, ...moveUpButtonProps }" :pt="ptm('pcTargetMoveUpButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="moveupicon">
                        <AngleUpIcon v-bind="ptm('pcTargetMoveUpButton')['icon']" data-pc-section="moveupicon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveTopAriaLabel" :disabled="moveDisabled(1)" @click="moveTop($event, 1)" v-bind="{ ...buttonProps, ...moveTopButtonProps }" :pt="ptm('pcTargetMoveTopButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetopicon">
                        <AngleDoubleUpIcon v-bind="ptm('pcTargetMoveTopButton')['icon']" data-pc-section="movetopicon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveDownAriaLabel" :disabled="moveDisabled(1)" @click="moveDown($event, 1)" v-bind="{ ...buttonProps, ...moveDownButtonProps }" :pt="ptm('pcTargetMoveDownButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movedownicon">
                        <AngleDownIcon v-bind="ptm('pcTargetMoveDownButton')['icon']" data-pc-section="movedownicon" />
                    </slot>
                </template>
            </Button>
            <Button :aria-label="moveBottomAriaLabel" :disabled="moveDisabled(1)" @click="moveBottom($event, 1)" v-bind="{ ...buttonProps, ...moveBottomButtonProps }" :pt="ptm('pcTargetMoveBottomButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movebottomicon">
                        <AngleDoubleDownIcon v-bind="ptm('pcTargetMoveBottomButton')['icon']" data-pc-section="movebottomicon" />
                    </slot>
                </template>
            </Button>
            <slot name="targetcontrolsend"></slot>
        </div>
    </div>
</template>

<script>
import { find, scrollInView, setAttribute } from '@primeuix/utils/dom';
import { findIndexInList, isEmpty } from '@primeuix/utils/object';
import { UniqueComponentId } from '@primevue/core/utils';
import AngleDoubleDownIcon from '@primevue/icons/angledoubledown';
import AngleDoubleLeftIcon from '@primevue/icons/angledoubleleft';
import AngleDoubleRightIcon from '@primevue/icons/angledoubleright';
import AngleDoubleUpIcon from '@primevue/icons/angledoubleup';
import AngleDownIcon from '@primevue/icons/angledown';
import AngleLeftIcon from '@primevue/icons/angleleft';
import AngleRightIcon from '@primevue/icons/angleright';
import AngleUpIcon from '@primevue/icons/angleup';
import Button from 'primevue/button';
import Listbox from 'primevue/listbox';
import Ripple from 'primevue/ripple';
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
        updateSelection(event) {
            this.$emit('update:selection', this.d_selection);
            this.$emit('selection-change', {
                originalEvent: event,
                value: this.d_selection
            });
        },
        onChangeSelection(params, listIndex) {
            this.d_selection[listIndex] = params.value;
            this.updateSelection(params.event);
        },
        onListFocus(event, listType) {
            this.$emit('focus', event, listType);
        },
        onListBlur(event, listType) {
            this.$emit('blur', event, listType);
        },
        onReorderUpdate(event, value, listIndex) {
            this.$emit('update:modelValue', value);
            this.$emit('reorder', {
                originalEvent: event,
                value: value,
                direction: this.reorderDirection,
                listIndex
            });
        },
        onItemDblClick(event, listIndex) {
            if (listIndex === 0) this.moveToTarget({ event: event.originalEvent });
            else if (listIndex === 1) this.moveToSource({ event: event.originalEvent });
        },
        moveUp(event, listIndex) {
            if (this.d_selection && this.d_selection[listIndex]) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = 0; i < selectionList.length; i++) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = findIndexInList(selectedItem, valueList);

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
                this.onReorderUpdate(event, value, listIndex);
            }
        },
        moveTop(event, listIndex) {
            if (this.d_selection) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = 0; i < selectionList.length; i++) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = findIndexInList(selectedItem, valueList);

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
                this.onReorderUpdate(event, value, listIndex);
            }
        },
        moveDown(event, listIndex) {
            if (this.d_selection) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = selectionList.length - 1; i >= 0; i--) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = findIndexInList(selectedItem, valueList);

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
                this.onReorderUpdate(event, value, listIndex);
            }
        },
        moveBottom(event, listIndex) {
            if (this.d_selection) {
                let valueList = [...this.modelValue[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = selectionList.length - 1; i >= 0; i--) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = findIndexInList(selectedItem, valueList);

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
                this.onReorderUpdate(event, value, listIndex);
            }
        },
        moveToTarget(event) {
            let selection = this.d_selection && this.d_selection[0] ? this.d_selection[0] : null;
            let sourceList = [...this.modelValue[0]];
            let targetList = [...this.modelValue[1]];

            if (selection) {
                for (let i = 0; i < selection.length; i++) {
                    let selectedItem = selection[i];

                    if (findIndexInList(selectedItem, targetList) == -1) {
                        targetList.push(sourceList.splice(findIndexInList(selectedItem, sourceList), 1)[0]);
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
                this.updateSelection(event);
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

                this.d_selection = [[], []];
                this.updateSelection(event);
            }
        },
        moveToSource(event) {
            let selection = this.d_selection && this.d_selection[1] ? this.d_selection[1] : null;
            let sourceList = [...this.modelValue[0]];
            let targetList = [...this.modelValue[1]];

            if (selection) {
                for (let i = 0; i < selection.length; i++) {
                    let selectedItem = selection[i];

                    if (findIndexInList(selectedItem, sourceList) == -1) {
                        sourceList.push(targetList.splice(findIndexInList(selectedItem, targetList), 1)[0]);
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
                this.updateSelection(event);
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

                this.d_selection = [[], []];
                this.updateSelection(event);
            }
        },
        onItemClick(event, item, index, listIndex) {
            const listType = listIndex === 0 ? 'sourceList' : 'targetList';

            this.itemTouched = false;
            const selectionList = this.d_selection[listIndex];
            const selectedIndex = findIndexInList(item, selectionList);
            const selected = selectedIndex != -1;
            const metaSelection = this.itemTouched ? false : this.metaKeySelection;
            const selectedId = find(this.$refs[listType].$el, '[data-pc-section="item"]')[index].getAttribute('id');

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

            this.updateSelection(event);
        },
        updateListScroll(listElement) {
            const listItems = find(listElement, '[data-pc-section="item"][data-p-selected="true"]');

            if (listItems && listItems.length) {
                switch (this.reorderDirection) {
                    case 'up':
                        scrollInView(listElement, listItems[0]);
                        break;

                    case 'top':
                        listElement.scrollTop = 0;
                        break;

                    case 'down':
                        scrollInView(listElement, listItems[listItems.length - 1]);
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
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.head.appendChild(this.styleElement);

                let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-picklist[${this.$attrSelector}] {
        flex-direction: column;
    }

    .p-picklist[${this.$attrSelector}] .p-picklist-controls {
        flex-direction: row;
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
            return this.disabled ? true : this.d_selection && (!this.d_selection[index] || !this.d_selection[index].length) ? true : false;
        },
        moveAllDisabled(list) {
            return this.disabled ? true : isEmpty(this[list]);
        }
    },
    computed: {
        idSource() {
            return `${this.id}_source`;
        },
        idTarget() {
            return `${this.id}_target`;
        },
        sourceList() {
            return this.modelValue && this.modelValue[0] ? this.modelValue[0] : null;
        },
        targetList() {
            return this.modelValue && this.modelValue[1] ? this.modelValue[1] : null;
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
        Listbox,
        Button,
        AngleRightIcon,
        AngleLeftIcon,
        AngleDownIcon,
        AngleUpIcon,
        AngleDoubleRightIcon,
        AngleDoubleLeftIcon,
        AngleDoubleDownIcon,
        AngleDoubleUpIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
