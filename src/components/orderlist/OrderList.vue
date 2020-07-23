<template>
    <div class="p-orderlist p-component">
        <div class="p-orderlist-controls">
            <OLButton type="button" icon="pi pi-angle-up" @click="moveUp"></OLButton>
            <OLButton type="button" icon="pi pi-angle-double-up" @click="moveTop"></OLButton>
            <OLButton type="button" icon="pi pi-angle-down" @click="moveDown"></OLButton>
            <OLButton type="button" icon="pi pi-angle-double-down" @click="moveBottom"></OLButton>
        </div>
        <div class="p-orderlist-list-container">
            <div class="p-orderlist-header" v-if="$slots.header">
                <slot name="header"></slot>
            </div>
            <transition-group ref="list" name="p-orderlist-flip" tag="ul" class="p-orderlist-list" :style="listStyle" role="listbox" aria-multiselectable="multiple">
                <template v-for="(item, i) of value">
                    <li tabindex="0" :key="getItemKey(item, i)" :class="['p-orderlist-item', {'p-highlight': isSelected(item)}]" v-ripple
                        @click="onItemClick($event, item, i)" @keydown="onItemKeyDown($event, item, i)" @touchend="onItemTouchEnd"
                        role="option" :aria-selected="isSelected(item)">
                        <slot name="item" :item="item" :index="i"> </slot>
                    </li>
                </template>
            </transition-group>
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
            default: null
        },
        selection: {
            type: Array,
            default: null
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
            this.updateListScroll();
            this.reorderDirection = null;
        }
    },
    methods: {
        getItemKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey): index;
        },
        isSelected(item) {
            return ObjectUtils.findIndexInList(item, this.d_selection) != -1;
        },
        moveUp() {
            if (this.d_selection) {
                let value = [...this.value];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex - 1];
                        value[selectedItemIndex - 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'up';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveTop() {
            if(this.d_selection) {
                let value = [...this.value];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];
                        value.unshift(movedItem);
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'top';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveDown() {
            if(this.d_selection) {
                let value = [...this.value];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== (value.length - 1)) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex + 1];
                        value[selectedItemIndex + 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'down';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveBottom() {
            if (this.d_selection) {
                let value = [...this.value];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== (value.length - 1)) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];
                        value.push(movedItem);
                    }
                    else {
                        break;
                    }
                }

                this.reorderDirection = 'bottom';
                this.$emit('input', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        onItemClick(event, item, index) {
            this.itemTouched = false;
            let selectedIndex = ObjectUtils.findIndexInList(item, this.d_selection);
            let selected = (selectedIndex != -1);
            let metaSelection = this.itemTouched ? false : this.metaKeySelection;

            if (metaSelection) {
                let metaKey = (event.metaKey || event.ctrlKey);

                if (selected && metaKey) {
                    this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex);
                }
                else {
                    this.d_selection = (metaKey) ? this.d_selection ? [...this.d_selection] : [] : [];
                    ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.value);
                }
            }
            else {
                if (selected) {
                    this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex);
                }
                else {
                    this.d_selection = this.d_selection ? [...this.d_selection] : [];
                    ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.value);
                }
            }

            this.$emit('update:selection', this.d_selection);
            this.$emit('selection-change', {
                originalEvent:event,
                value: this.d_selection
            });
        },
        onItemTouchEnd() {
            this.itemTouched = true;
        },
        onItemKeyDown(event, item, index) {
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
                    this.onItemClick(event, item, index);
                    event.preventDefault();
                break;

                default:
                break;
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return !DomHandler.hasClass(nextItem, 'p-orderlist-item') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return !DomHandler.hasClass(prevItem, 'p-orderlist-item') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        updateListScroll() {
            const listItems = DomHandler.find(this.$refs.list.$el, '.p-orderlist-item.p-highlight');

            if (listItems && listItems.length) {
                switch(this.reorderDirection) {
                    case 'up':
                        DomHandler.scrollInView(this.$refs.list.$el, listItems[0]);
                    break;

                    case 'top':
                        this.$refs.list.$el.scrollTop = 0;
                    break;

                    case 'down':
                        DomHandler.scrollInView(this.$refs.list.$el, listItems[listItems.length - 1]);
                    break;

                    case 'bottom':
                        this.$refs.list.$el.scrollTop = this.$refs.list.$el.scrollHeight;
                    break;

                    default:
                    break;
                }
            }
        }
    },
    components: {
        'OLButton': Button
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-orderlist {
    display: flex;
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.p-orderlist-list-container {
    flex: 1 1 auto;
}

.p-orderlist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
}

.p-orderlist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.p-orderlist.p-state-disabled .p-orderlist-item,
.p-orderlist.p-state-disabled .p-button {
    cursor: default;
}

.p-orderlist.p-state-disabled .p-orderlist-list {
    overflow: hidden;
}
</style>
