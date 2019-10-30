<template>
    <td :style="column.bodyStyle" :class="containerClass" @click="onClick" @keydown="onKeyDown">
        <ColumnSlot :data="rowData" :column="column" :index="index" type="body" v-if="column.$scopedSlots.body && !editing" />
        <ColumnSlot :data="rowData" :column="column" :index="index" type="editor" v-else-if="column.$scopedSlots.editor && editing" />
        <template v-else-if="column.selectionMode">
            <DTRadioButton :value="rowData" :checked="selected" @change="toggleRowWithRadio" v-if="column.selectionMode === 'single'" />
            <DTCheckbox :value="rowData" :checked="selected" @change="toggleRowWithCheckbox" v-else-if="column.selectionMode ==='multiple'" />
        </template>
        <template v-else-if="column.rowReorder">
            <i :class="['p-datatable-reorderablerow-handle', column.rowReorderIcon]"></i>
        </template>
        <template v-else-if="column.expander">
            <button class="p-row-toggler p-link" @click="toggleRow">
                <span :class="rowTogglerIcon"></span>
            </button>
        </template>
        <template v-else>{{resolveFieldData()}}</template>
    </td>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import ColumnSlot from './ColumnSlot.vue';
import RowRadioButton from './RowRadioButton';
import RowCheckbox from './RowCheckbox.vue';

export default {
    props: {
        rowData: {
            type: Object,
            default: null
        },
        column: {
            type: Object,
            default: null
        },
        index: {
            type: Number,
            default: null
        },
        rowTogglerIcon: {
            type: Array,
            default: null
        },
        selected: {
            type: Boolean,
            default: false
        },
    },
    documentEditListener: null,
    data() {
        return {
            editing: false
        }
    },
    mounted() {
        this.children = this.$children;
    },
    updated() {
        if (this.editing) {
            let focusable = DomHandler.findSingle(this.$el, 'input');
            if (focusable) {
                focusable.focus();
            }
        }
    },
    methods: {
        resolveFieldData() {
            return ObjectUtils.resolveFieldData(this.rowData, this.column.field);
        },
        toggleRow(event) {
            this.$emit('row-toggle', {
                originalEvent: event,
                data: this.rowData
            });
        },
        toggleRowWithRadio(event) {
            this.$emit('radio-change', event);
        },
        toggleRowWithCheckbox(event) {
            this.$emit('checkbox-change', event);
        },
        isEditable() {
            return this.column.$scopedSlots.editor != null;
        },
        bindDocumentEditListener() {
            if (!this.documentEditListener) {
                this.documentEditListener = (event) => {
                    if (this.isOutsideClicked(event)) {
                        this.switchCellToViewMode();
                    }
                };
                
                document.addEventListener('click', this.documentEditListener);
            }
        },
        unbindDocumentEditListener() {
            if (this.documentEditListener) {
                document.removeEventListener('click', this.documentEditListener);
                this.documentEditListener = null;
            }
        },
        switchCellToViewMode() {
            this.editing = false;
            this.unbindDocumentEditListener();
        },
        isOutsideClicked(event) {
            return !this.$el.contains(event.target) && !this.$el.isSameNode(event.target);
        },
        onClick() {
            if (this.isEditable() && !this.editing) {
                this.editing = true;

                this.bindDocumentEditListener();
            }
        },
        onKeyDown(event) {
            switch (event.which) {
                case 13:
                case 27:
                    this.switchCellToViewMode();
                break;

                case 9:
                    if (event.shiftKey)
                        this.moveToPreviousCell(event);
                    else
                        this.moveToNextCell(event);

                    this.switchCellToViewMode();
                break;
            }
        },
        moveToPreviousCell(event) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findPreviousEditableColumn(currentCell);

            if (targetCell) {
                DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        },
        moveToNextCell(event) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findNextEditableColumn(currentCell);

            if (targetCell) {
                DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        },
        findCell(element) {
            if (element) {
                let cell = element;
                while (cell && !DomHandler.hasClass(cell, 'p-cell-editing')) {
                    cell = cell.parentElement;
                }

                return cell;
            }
            else {
                return null;
            }
        },
        findPreviousEditableColumn(cell) {
            let prevCell = cell.previousElementSibling;

            if (!prevCell) {
                let previousRow = cell.parentElement.previousElementSibling;
                if (previousRow) {
                    prevCell = previousRow.lastElementChild;
                }
            }

            if (prevCell) {
                if (DomHandler.hasClass(prevCell, 'p-editable-column'))
                    return prevCell;
                else
                    return this.findPreviousEditableColumn(prevCell);
            }
            else {
                return null;
            }
        },
        findNextEditableColumn(cell) {
            let nextCell = cell.nextElementSibling;

            if (!nextCell) {
                let nextRow = cell.parentElement.nextElementSibling;
                if (nextRow) {
                    nextCell = nextRow.firstElementChild;
                }
            }

            if (nextCell) {
                if (DomHandler.hasClass(nextCell, 'p-editable-column'))
                    return nextCell;
                else
                    return this.findNextEditableColumn(nextCell);
            }
            else {
                return null;
            }
        }
    },
    computed: {
        containerClass() {
            return [this.column.bodyClass, {
                'p-selection-column': this.column.selectionMode != null,
                'p-editable-column': this.isEditable(),
                'p-cell-editing': this.editing
            }];
        }
    },
    components: {
        'ColumnSlot': ColumnSlot,
        'DTRadioButton': RowRadioButton,
        'DTCheckbox': RowCheckbox
    }
}
</script>