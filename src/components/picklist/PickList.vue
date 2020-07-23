<template>
    <div class="p-picklist p-component">
        <div class="p-picklist-buttons p-picklist-source-controls">
            <PLButton type="button" icon="pi pi-angle-up" @click="moveUp($event, 0)"></PLButton>
            <PLButton type="button" icon="pi pi-angle-double-up" @click="moveTop($event, 0)"></PLButton>
            <PLButton type="button" icon="pi pi-angle-down" @click="moveDown($event, 0)"></PLButton>
            <PLButton type="button" icon="pi pi-angle-double-down" @click="moveBottom($event, 0)"></PLButton>
        </div>
        <div class="p-picklist-list-wrapper p-picklist-source-wrapper">
            <div class="p-picklist-header" v-if="$slots.sourceHeader">
                <slot name="sourceHeader"></slot>
            </div>
            <transition-group ref="sourceList" name="p-picklist-flip" tag="ul" class="p-picklist-list p-picklist-source" :style="listStyle" role="listbox" aria-multiselectable="multiple">
                <template v-for="(item, i) of sourceList">
                    <li tabindex="0" :key="getItemKey(item, i)" :class="['p-picklist-item', {'p-highlight': isSelected(item, 0)}]" v-ripple
                        @click="onItemClick($event, item, i, 0)" @keydown="onItemKeyDown($event, item, i, 0)" @touchend="onItemTouchEnd" role="option" :aria-selected="isSelected(item, 0)">
                        <slot name="item" :item="item" :index="i"> </slot>
                    </li>
                </template>
            </transition-group>
        </div>
        <div class="p-picklist-buttons p-picklist-transfer-buttons">
            <PLButton type="button" icon="pi pi-angle-right" @click="moveToTarget"></PLButton>
            <PLButton type="button" icon="pi pi-angle-double-right" @click="moveAllToTarget"></PLButton>
            <PLButton type="button" icon="pi pi-angle-left" @click="moveToSource"></PLButton>
            <PLButton type="button" icon="pi pi-angle-double-left" @click="moveAllToSource"></PLButton>
        </div>
        <div class="p-picklist-list-wrapper p-picklist-target-wrapper">
            <div class="p-picklist-header" v-if="$slots.targetHeader">
                <slot name="targetHeader"></slot>
            </div>
            <transition-group ref="targetList" name="p-picklist-flip" tag="ul" class="p-picklist-list p-picklist-target" :style="listStyle" role="listbox" aria-multiselectable="multiple">
                <template v-for="(item, i) of targetList">
                    <li tabindex="0" :key="getItemKey(item, i)" :class="['p-picklist-item', {'p-highlight': isSelected(item, 1)}]" v-ripple
                        @click="onItemClick($event, item, i, 1)" @keydown="onItemKeyDown($event, item, i, 1)" @touchend="onItemTouchEnd" role="option" :aria-selected="isSelected(item, 1)">
                        <slot name="item" :item="item" :index="i"> </slot>
                    </li>
                </template>
            </transition-group>
        </div>
        <div class="p-picklist-buttons p-picklist-target-controls">
            <PLButton type="button" icon="pi pi-angle-up" @click="moveUp($event, 1)"></PLButton>
            <PLButton type="button" icon="pi pi-angle-double-up" @click="moveTop($event, 1)"></PLButton>
            <PLButton type="button" icon="pi pi-angle-down" @click="moveDown($event, 1)"></PLButton>
            <PLButton type="button" icon="pi pi-angle-double-down" @click="moveBottom($event, 1)"></PLButton>
        </div>
    </div>
</template>

<script>
import Button from '../button/Button';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
    props: {
        value: {
            type: Array,
            default: () => [[],[]]
        },
        selection: {
            type: Array,
            default: () => [[],[]]
        },
        dataKey: {
            type: String,
            default: null
        },
        listStyle: {
            type: null,
            default: null
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        }
    },
    itemTouched: false,
    reorderDirection: null,
    data() {
        return {
            d_selection: this.selection
        }
    },
    updated() {
        if (this.reorderDirection) {
            this.updateListScroll(this.$refs.sourceList.$el);
            this.updateListScroll(this.$refs.targetList.$el);
            this.reorderDirection = null;
        }
    },
    watch: {
        selection(newValue) {
            this.d_selection = newValue;
        }
    },
    methods: {
        getItemKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey): index;
        },
        isSelected(item, listIndex) {
            return ObjectUtils.findIndexInList(item, this.d_selection[listIndex]) != -1;
        },
        moveUp(event, listIndex) {
            if (this.d_selection && this.d_selection[listIndex]) {
                let valueList = [...this.value[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = 0; i < selectionList.length; i++) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== 0) {
                        let movedItem = valueList[selectedItemIndex];
                        let temp = valueList[selectedItemIndex - 1];
                        valueList[selectedItemIndex - 1] = movedItem;
                        valueList[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }

                let value = [...this.value];
                value[listIndex] = valueList;

                this.reorderDirection = 'up';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection,
                    listIndex: listIndex
                });
            }
        },
        moveTop(event, listIndex) {
            if(this.d_selection) {
                let valueList = [...this.value[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = 0; i < selectionList.length; i++) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== 0) {
                        let movedItem = valueList.splice(selectedItemIndex, 1)[0];
                        valueList.unshift(movedItem);
                    }
                    else {
                        break;
                    }
                }

                let value = [...this.value];
                value[listIndex] = valueList;

                this.reorderDirection = 'top';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveDown(event, listIndex) {
            if(this.d_selection) {
                let valueList = [...this.value[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = selectionList.length - 1; i >= 0; i--) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== (valueList.length - 1)) {
                        let movedItem = valueList[selectedItemIndex];
                        let temp = valueList[selectedItemIndex + 1];
                        valueList[selectedItemIndex + 1] = movedItem;
                        valueList[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }

                let value = [...this.value];
                value[listIndex] = valueList;

                this.reorderDirection = 'down';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveBottom(event, listIndex) {
            if (this.d_selection) {
                let valueList = [...this.value[listIndex]];
                let selectionList = this.d_selection[listIndex];

                for (let i = selectionList.length - 1; i >= 0; i--) {
                    let selectedItem = selectionList[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, valueList);

                    if (selectedItemIndex !== (valueList.length - 1)) {
                        let movedItem = valueList.splice(selectedItemIndex, 1)[0];
                        valueList.push(movedItem);
                    }
                    else {
                        break;
                    }
                }

                let value = [...this.value];
                value[listIndex] = valueList;

                this.reorderDirection = 'bottom';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveToTarget(event) {
            let selection = this.d_selection && this.d_selection[0] ? this.d_selection[0] : null;
            let sourceList = [...this.value[0]];
            let targetList = [...this.value[1]];

            if (selection) {
                for (let i = 0; i < selection.length; i++) {
                    let selectedItem = selection[i];

                    if (ObjectUtils.findIndexInList(selectedItem, targetList) == -1) {
                        targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList),1)[0]);
                    }
                }

                let value = [...this.value];
                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('input', value);

                this.$emit('move-to-target', {
                    originalEvent: event,
                    items: selection
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
            if (this.value[0]) {
                let sourceList = [...this.value[0]];
                let targetList = [...this.value[1]];

                this.$emit('move-all-to-target', {
                    originalEvent: event,
                    items: sourceList
                });

                targetList = [...targetList, ...sourceList];
                sourceList = [];

                let value = [...this.value];
                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('input', value);

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
            let sourceList = [...this.value[0]];
            let targetList = [...this.value[1]];

            if (selection) {
                for (let i = 0; i < selection.length; i++) {
                    let selectedItem = selection[i];

                    if (ObjectUtils.findIndexInList(selectedItem, sourceList) == -1) {
                        sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList),1)[0]);
                    }
                }

                let value = [...this.value];
                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('input', value);

                this.$emit('move-to-source', {
                    originalEvent: event,
                    items: selection
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
            if (this.value[1]) {
                let sourceList = [...this.value[0]];
                let targetList = [...this.value[1]];

                this.$emit('move-all-to-source', {
                    originalEvent: event,
                    items: targetList
                });

                sourceList = [...sourceList, ...targetList];
                targetList = [];

                let value = [...this.value];
                value[0] = sourceList;
                value[1] = targetList;
                this.$emit('input', value);

                this.d_selection[1] = [];
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            }
        },
        onItemClick(event, item, index, listIndex) {
            this.itemTouched = false;
            const selectionList = this.d_selection[listIndex];
            const selectedIndex = ObjectUtils.findIndexInList(item, selectionList);
            const selected = (selectedIndex != -1);
            const metaSelection = this.itemTouched ? false : this.metaKeySelection;
            let _selection;

            if (metaSelection) {
                let metaKey = (event.metaKey || event.ctrlKey);

                if (selected && metaKey) {
                    _selection = selectionList.filter((val, index) => index !== selectedIndex);
                }
                else {
                    _selection = (metaKey) ? selectionList ? [...selectionList] : [] : [];
                    _selection.push(item);
                }
            }
            else {
                if (selected) {
                    _selection = selectionList.filter((val, index) => index !== selectedIndex);
                }
                else {
                    _selection = selectionList ? [...selectionList] : [];
                    _selection.push(item);
                }
            }

            let newSelection = [...this.d_selection];
            newSelection[listIndex] = _selection;
            this.d_selection = newSelection;

            this.$emit('update:selection', this.d_selection);
            this.$emit('selection-change', {
                originalEvent:event,
                value: this.d_selection
            });
        },
        onItemTouchEnd() {
            this.itemTouched = true;
        },
        onItemKeyDown(event, item, index, listIndex) {
            let listItem = event.currentTarget;

            switch(event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(listItem);
                    if (nextItem) {
                        nextItem.focus();
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    var prevItem = this.findPrevItem(listItem);
                    if (prevItem) {
                        prevItem.focus();
                    }

                    event.preventDefault();
                break;

                //enter
                case 13:
                    this.onItemClick(event, item, index, listIndex);
                    event.preventDefault();
                break;

                default:
                break;
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return !DomHandler.hasClass(nextItem, 'p-picklist-item') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return !DomHandler.hasClass(prevItem, 'p-picklist-item') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        updateListScroll(listElement) {
            const listItems = DomHandler.find(listElement, '.p-picklist-item.p-highlight');

            if (listItems && listItems.length) {
                switch(this.reorderDirection) {
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
        }
    },
    computed: {
        sourceList() {
            return this.value && this.value[0] ? this.value[0] : null;
        },
        targetList() {
            return this.value && this.value[1] ? this.value[1] : null;
        }
    },
    components: {
        'PLButton': Button
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-picklist {
    display: flex;
}

.p-picklist-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.p-picklist-list-wrapper {
    flex: 1 1 50%;
}

.p-picklist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
}

.p-picklist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.p-picklist-item.p-picklist-flip-enter-active.p-picklist-flip-enter-to,
.p-picklist-item.p-picklist-flip-leave-active.p-picklist-flip-leave-to {
    transition: none !important;
}
</style>
