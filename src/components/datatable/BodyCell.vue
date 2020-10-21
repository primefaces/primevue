<template>
    <td :style="column.props?.bodyStyle" :class="containerClass" @click="onClick" @keydown="onKeyDown">
        <component :is="column.children.body" :data="rowData" :column="column" :index="index" v-if="column.children && column.children.body && !d_editing" />
        <component :is="column.children.editor" :data="rowData" :column="column" :index="index" v-else-if="column.children && column.children.editor && d_editing" />
        <template v-else-if="column.props?.selectionMode">
            <DTRadioButton :value="rowData" :checked="selected" @change="toggleRowWithRadio" v-if="column.props?.selectionMode === 'single'" />
            <DTCheckbox :value="rowData" :checked="selected" @change="toggleRowWithCheckbox" v-else-if="column.props?.selectionMode ==='multiple'" />
        </template>
        <template v-else-if="column.props?.rowReorder">
            <i :class="['p-datatable-reorderablerow-handle', (column.props?.rowReorderIcon || 'pi pi-bars')]"></i>
        </template>
        <template v-else-if="column.props?.expander">
            <button class="p-row-toggler p-link" @click="toggleRow" type="button" v-ripple>
                <span :class="rowTogglerIcon"></span>
            </button>
        </template>
        <template v-else-if="editMode === 'row' && column.props?.rowEditor">
            <button class="p-row-editor-init p-link" v-if="!d_editing" @click="onRowEditInit" type="button" v-ripple>
                <span class="p-row-editor-init-icon pi pi-fw pi-pencil"></span>
            </button>
            <button class="p-row-editor-save p-link" v-if="d_editing" @click="onRowEditSave" type="button" v-ripple>
                <span class="p-row-editor-save-icon pi pi-fw pi-check"></span>
            </button>
            <button class="p-row-editor-cancel p-link" v-if="d_editing" @click="onRowEditCancel" type="button" v-ripple>
                <span class="p-row-editor-cancel-icon pi pi-fw pi-times"></span>
            </button>
        </template>
        <template v-else>{{resolveFieldData()}}</template>
    </td>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import RowRadioButton from './RowRadioButton';
import RowCheckbox from './RowCheckbox.vue';
import Ripple from '../ripple/Ripple';

export default {
    emits: ['cell-edit-init', 'cell-edit-complete', 'cell-edit-cancel', 'row-edit-init', 'row-edit-complete', 'row-edit-cancel',
            'row-toggle', 'radio-change', 'checkbox-change'],
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
        editing: {
            type: Boolean,
            default: false
        },
        editMode: {
            type: String,
            default: null
        }
    },
    documentEditListener: null,
    data() {
        return {
            d_editing: this.editing
        }
    },
    watch: {
        editing(newValue) {
            this.d_editing = newValue;
        }
    },
    mounted() {
        this.children = this.$children;
    },
    updated() {
        let query = this.editMode === 'row' ? '[autofocus]' : 'input';
        let focusable = DomHandler.findSingle(this.$el, query);
        if (focusable && document.activeElement != focusable) {
            focusable.focus();
        }
    },
    methods: {
        resolveFieldData() {
            return ObjectUtils.resolveFieldData(this.rowData, this.column.props?.field);
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
            return this.column.children && this.column.children.editor != null;
        },
        bindDocumentEditListener() {
            if (!this.documentEditListener) {
                this.documentEditListener = (event) => {
                    if (this.isOutsideClicked(event)) {
                        this.completeEdit(event, 'outside');
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
            this.d_editing = false;
            this.unbindDocumentEditListener();
        },
        isOutsideClicked(event) {
            return !this.$el.contains(event.target) && !this.$el.isSameNode(event.target);
        },
        onClick(event) {
            if (this.editMode === 'cell' && this.isEditable() && !this.d_editing) {
                this.d_editing = true;
                this.bindDocumentEditListener();
                this.$emit('cell-edit-init', {originalEvent: event, data: this.rowData, field: this.column.props?.field, index: this.index});
            }
        },
        completeEdit(event, type) {
            let completeEvent = {
                originalEvent: event,
                data: this.rowData,
                field: this.column.props?.field,
                index: this.index,
                type: type,
                defaultPrevented: false,
                preventDefault: function() {
                    this.defaultPrevented = true;
                }
            };

            this.$emit('cell-edit-complete', completeEvent);

            if (!completeEvent.defaultPrevented) {
                this.switchCellToViewMode();
            }
        },
        onKeyDown(event) {
            if (this.editMode === 'cell') {
                switch (event.which) {
                    case 13:
                        this.completeEdit(event, 'enter');
                    break;

                    case 27:
                        this.switchCellToViewMode();
                        this.$emit('cell-edit-cancel', {originalEvent: event, data: this.rowData, field: this.column.props?.field, index: this.index});
                    break;

                    case 9:
                        this.completeEdit(event, 'tab');

                        if (event.shiftKey)
                            this.moveToPreviousCell(event);
                        else
                            this.moveToNextCell(event);
                    break;
                }
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
        },
        isEditingCellValid() {
            return (DomHandler.find(this.$el, '.p-invalid').length === 0);
        },
        onRowEditInit(event) {
            this.$emit('row-edit-init', {originalEvent: event, data: this.rowData, field: this.column.props?.field, index: this.index});
        },
        onRowEditSave(event) {
            this.$emit('row-edit-save', {originalEvent: event, data: this.rowData, field: this.column.props?.field, index: this.index});
        },
        onRowEditCancel(event) {
            this.$emit('row-edit-cancel', {originalEvent: event, data: this.rowData, field: this.column.props?.field, index: this.index});
        }
    },
    computed: {
        containerClass() {
            return [this.column.props?.bodyClass, {
                'p-selection-column': this.column.props?.selectionMode != null,
                'p-editable-column': this.isEditable(),
                'p-cell-editing': this.d_editing
            }];
        }
    },
    components: {
        'DTRadioButton': RowRadioButton,
        'DTCheckbox': RowCheckbox
    },
    directives: {
        'ripple': Ripple
    }
}
</script>