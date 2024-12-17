<template>
    <td v-if="loading" :style="containerStyle" :class="containerClass" role="cell" v-bind="{ ...getColumnPT('root'), ...getColumnPT('bodyCell') }">
        <component :is="column.children.loading" :data="rowData" :column="column" :field="field" :index="rowIndex" :frozenRow="frozenRow" :loadingOptions="loadingOptions" />
    </td>
    <td
        v-else
        :style="containerStyle"
        :class="containerClass"
        :colspan="columnProp('colspan')"
        :rowspan="columnProp('rowspan')"
        @click="onClick"
        @keydown="onKeyDown"
        role="cell"
        v-bind="{ ...getColumnPT('root'), ...getColumnPT('bodyCell') }"
        :data-p-selection-column="columnProp('selectionMode') != null"
        :data-p-editable-column="isEditable()"
        :data-p-cell-editing="d_editing"
        :data-p-frozen-column="columnProp('frozen')"
    >
        <component
            v-if="column.children && column.children.body && !d_editing"
            :is="column.children.body"
            :data="rowData"
            :column="column"
            :field="field"
            :index="rowIndex"
            :frozenRow="frozenRow"
            :editorInitCallback="editorInitCallback"
            :rowTogglerCallback="toggleRow"
        />
        <component
            v-else-if="column.children && column.children.editor && d_editing"
            :is="column.children.editor"
            :data="editingRowData"
            :column="column"
            :field="field"
            :index="rowIndex"
            :frozenRow="frozenRow"
            :editorSaveCallback="editorSaveCallback"
            :editorCancelCallback="editorCancelCallback"
        />
        <component v-else-if="column.children && column.children.body && !column.children.editor && d_editing" :is="column.children.body" :data="editingRowData" :column="column" :field="field" :index="rowIndex" :frozenRow="frozenRow" />
        <template v-else-if="columnProp('selectionMode')">
            <DTRadioButton v-if="columnProp('selectionMode') === 'single'" :value="rowData" :name="name" :checked="selected" @change="toggleRowWithRadio($event, rowIndex)" :column="column" :index="index" :unstyled="unstyled" :pt="pt" />
            <DTCheckbox
                v-else-if="columnProp('selectionMode') === 'multiple'"
                :value="rowData"
                :checked="selected"
                :rowCheckboxIconTemplate="column.children && column.children.rowcheckboxicon"
                :aria-selected="selected ? true : undefined"
                @change="toggleRowWithCheckbox($event, rowIndex)"
                :column="column"
                :index="index"
                :unstyled="unstyled"
                :pt="pt"
            />
        </template>
        <template v-else-if="columnProp('rowReorder')">
            <component v-if="column.children && column.children.rowreordericon" :is="column.children.rowreordericon" :class="cx('reorderableRowHandle')" />
            <i v-else-if="columnProp('rowReorderIcon')" :class="[cx('reorderableRowHandle'), columnProp('rowReorderIcon')]" v-bind="getColumnPT('reorderableRowHandle')" />
            <BarsIcon v-else :class="cx('reorderableRowHandle')" v-bind="getColumnPT('reorderableRowHandle')" />
        </template>
        <template v-else-if="columnProp('expander')">
            <button
                v-ripple
                :class="cx('rowToggleButton')"
                type="button"
                :aria-expanded="isRowExpanded"
                :aria-controls="ariaControls"
                :aria-label="expandButtonAriaLabel"
                @click="toggleRow"
                v-bind="getColumnPT('rowToggleButton')"
                data-pc-group-section="rowactionbutton"
            >
                <component v-if="column.children && column.children.rowtogglericon" :is="column.children.rowtogglericon" :class="cx('rowToggleIcon')" :rowExpanded="isRowExpanded" />
                <template v-else>
                    <span v-if="isRowExpanded && expandedRowIcon" :class="[cx('rowToggleIcon'), expandedRowIcon]" />
                    <ChevronDownIcon v-else-if="isRowExpanded && !expandedRowIcon" :class="cx('rowToggleIcon')" v-bind="getColumnPT('rowToggleIcon')" />
                    <span v-else-if="!isRowExpanded && collapsedRowIcon" :class="[cx('rowToggleIcon'), collapsedRowIcon]" />
                    <ChevronRightIcon v-else-if="!isRowExpanded && !collapsedRowIcon" :class="cx('rowToggleIcon')" v-bind="getColumnPT('rowToggleIcon')" />
                </template>
            </button>
        </template>
        <template v-else-if="editMode === 'row' && columnProp('rowEditor')">
            <Button
                v-if="!d_editing"
                :class="cx('pcRowEditorInit')"
                :aria-label="initButtonAriaLabel"
                :unstyled="unstyled"
                @click="onRowEditInit"
                v-bind="editButtonProps.init"
                :pt="getColumnPT('pcRowEditorInit')"
                data-pc-group-section="rowactionbutton"
            >
                <template #icon="slotProps">
                    <component :is="(column.children && column.children.roweditoriniticon) || 'PencilIcon'" :class="slotProps.class" v-bind="getColumnPT('pcRowEditorInit')['icon']" />
                </template>
            </Button>
            <Button
                v-if="d_editing"
                :class="cx('pcRowEditorSave')"
                :aria-label="saveButtonAriaLabel"
                :unstyled="unstyled"
                @click="onRowEditSave"
                v-bind="editButtonProps.save"
                :pt="getColumnPT('pcRowEditorSave')"
                data-pc-group-section="rowactionbutton"
            >
                <template #icon="slotProps">
                    <component :is="(column.children && column.children.roweditorsaveicon) || 'CheckIcon'" :class="slotProps.class" v-bind="getColumnPT('pcRowEditorSave')['icon']" />
                </template>
            </Button>
            <Button
                v-if="d_editing"
                :class="cx('pcRowEditorCancel')"
                :aria-label="cancelButtonAriaLabel"
                :unstyled="unstyled"
                @click="onRowEditCancel"
                v-bind="editButtonProps.cancel"
                :pt="getColumnPT('pcRowEditorCancel')"
                data-pc-group-section="rowactionbutton"
            >
                <template #icon="slotProps">
                    <component :is="(column.children && column.children.roweditorcancelicon) || 'TimesIcon'" :class="slotProps.class" v-bind="getColumnPT('pcRowEditorCancel')['icon']" />
                </template>
            </Button>
        </template>
        <template v-else>{{ resolveFieldData() }}</template>
    </td>
</template>

<script>
import { getAttribute, getFirstFocusableElement, getNextElementSibling, getOuterWidth, getPreviousElementSibling, invokeElementMethod } from '@primeuix/utils/dom';
import { resolveFieldData } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import { getVNodeProp } from '@primevue/core/utils';
import BarsIcon from '@primevue/icons/bars';
import CheckIcon from '@primevue/icons/check';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronRightIcon from '@primevue/icons/chevronright';
import PencilIcon from '@primevue/icons/pencil';
import TimesIcon from '@primevue/icons/times';
import Button from 'primevue/button';
import OverlayEventBus from 'primevue/overlayeventbus';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';
import RowCheckbox from './RowCheckbox.vue';
import RowRadioButton from './RowRadioButton.vue';

export default {
    name: 'BodyCell',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: ['cell-edit-init', 'cell-edit-complete', 'cell-edit-cancel', 'row-edit-init', 'row-edit-save', 'row-edit-cancel', 'row-toggle', 'radio-change', 'checkbox-change', 'editing-meta-change'],
    props: {
        rowData: {
            type: Object,
            default: null
        },
        column: {
            type: Object,
            default: null
        },
        frozenRow: {
            type: Boolean,
            default: false
        },
        rowIndex: {
            type: Number,
            default: null
        },
        index: {
            type: Number,
            default: null
        },
        isRowExpanded: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        editing: {
            type: Boolean,
            default: false
        },
        editingMeta: {
            type: Object,
            default: null
        },
        editMode: {
            type: String,
            default: null
        },
        virtualScrollerContentProps: {
            type: Object,
            default: null
        },
        ariaControls: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        expandedRowIcon: {
            type: String,
            default: null
        },
        collapsedRowIcon: {
            type: String,
            default: null
        },
        editButtonProps: {
            type: Object,
            default: null
        }
    },
    documentEditListener: null,
    selfClick: false,
    overlayEventListener: null,
    data() {
        return {
            d_editing: this.editing,
            styleObject: {}
        };
    },
    watch: {
        editing(newValue) {
            this.d_editing = newValue;
        },
        '$data.d_editing': function (newValue) {
            this.$emit('editing-meta-change', { data: this.rowData, field: this.field || `field_${this.index}`, index: this.rowIndex, editing: newValue });
        }
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }

        if (this.d_editing && (this.editMode === 'cell' || (this.editMode === 'row' && this.columnProp('rowEditor')))) {
            setTimeout(() => {
                const focusableEl = getFirstFocusableElement(this.$el);

                focusableEl && focusableEl.focus();
            }, 1);
        }
    },
    beforeUnmount() {
        if (this.overlayEventListener) {
            OverlayEventBus.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        }
    },
    methods: {
        columnProp(prop) {
            return getVNodeProp(this.column, prop);
        },
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index,
                    size: this.$parentInstance?.$parentInstance?.size,
                    showGridlines: this.$parentInstance?.$parentInstance?.showGridlines
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined;
        },
        resolveFieldData() {
            return resolveFieldData(this.rowData, this.field);
        },
        toggleRow(event) {
            this.$emit('row-toggle', {
                originalEvent: event,
                data: this.rowData
            });
        },
        toggleRowWithRadio(event, index) {
            this.$emit('radio-change', { originalEvent: event.originalEvent, index: index, data: event.data });
        },
        toggleRowWithCheckbox(event, index) {
            this.$emit('checkbox-change', { originalEvent: event.originalEvent, index: index, data: event.data });
        },
        isEditable() {
            return this.column.children && this.column.children.editor != null;
        },
        bindDocumentEditListener() {
            if (!this.documentEditListener) {
                this.documentEditListener = (event) => {
                    if (!this.selfClick) {
                        this.completeEdit(event, 'outside');
                    }

                    this.selfClick = false;
                };

                document.addEventListener('click', this.documentEditListener);
            }
        },
        unbindDocumentEditListener() {
            if (this.documentEditListener) {
                document.removeEventListener('click', this.documentEditListener);
                this.documentEditListener = null;
                this.selfClick = false;
            }
        },
        switchCellToViewMode() {
            this.d_editing = false;
            this.unbindDocumentEditListener();
            OverlayEventBus.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        },
        onClick(event) {
            if (this.editMode === 'cell' && this.isEditable()) {
                this.selfClick = true;

                if (!this.d_editing) {
                    this.d_editing = true;
                    this.bindDocumentEditListener();
                    this.$emit('cell-edit-init', { originalEvent: event, data: this.rowData, field: this.field, index: this.rowIndex });

                    this.overlayEventListener = (e) => {
                        if (this.$el && this.$el.contains(e.target)) {
                            this.selfClick = true;
                        }
                    };

                    OverlayEventBus.on('overlay-click', this.overlayEventListener);
                }
            }
        },
        completeEdit(event, type) {
            const completeEvent = {
                originalEvent: event,
                data: this.rowData,
                newData: this.editingRowData,
                value: this.rowData[this.field],
                newValue: this.editingRowData[this.field],
                field: this.field,
                index: this.rowIndex,
                type: type,
                defaultPrevented: false,
                preventDefault: function () {
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
                switch (event.code) {
                    case 'Enter':
                    case 'NumpadEnter':
                        this.completeEdit(event, 'enter');
                        break;

                    case 'Escape':
                        this.switchCellToViewMode();
                        this.$emit('cell-edit-cancel', { originalEvent: event, data: this.rowData, field: this.field, index: this.rowIndex });
                        break;

                    case 'Tab':
                        this.completeEdit(event, 'tab');

                        if (event.shiftKey) this.moveToPreviousCell(event);
                        else this.moveToNextCell(event);
                        break;

                    default:
                        break;
                }
            }
        },
        moveToPreviousCell(event) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findPreviousEditableColumn(currentCell);

            if (targetCell) {
                invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        },
        moveToNextCell(event) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findNextEditableColumn(currentCell);

            if (targetCell) {
                invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        },
        findCell(element) {
            if (element) {
                let cell = element;

                while (cell && !getAttribute(cell, 'data-p-cell-editing')) {
                    cell = cell.parentElement;
                }

                return cell;
            } else {
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
                if (getAttribute(prevCell, 'data-p-editable-column')) return prevCell;
                else return this.findPreviousEditableColumn(prevCell);
            } else {
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
                if (getAttribute(nextCell, 'data-p-editable-column')) return nextCell;
                else return this.findNextEditableColumn(nextCell);
            } else {
                return null;
            }
        },
        onRowEditInit(event) {
            this.$emit('row-edit-init', { originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
        },
        onRowEditSave(event) {
            this.$emit('row-edit-save', { originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
        },
        onRowEditCancel(event) {
            this.$emit('row-edit-cancel', { originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
        },
        editorInitCallback(event) {
            this.$emit('row-edit-init', { originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
        },
        editorSaveCallback(event) {
            if (this.editMode === 'row') {
                this.$emit('row-edit-save', { originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
            } else {
                this.completeEdit(event, 'enter');
            }
        },
        editorCancelCallback(event) {
            if (this.editMode === 'row') {
                this.$emit('row-edit-cancel', { originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
            } else {
                this.switchCellToViewMode();
                this.$emit('cell-edit-cancel', { originalEvent: event, data: this.rowData, field: this.field, index: this.rowIndex });
            }
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');

                if (align === 'right') {
                    let pos = 0;
                    let next = getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (next) {
                        pos = getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }

                    this.styleObject.insetInlineEnd = pos + 'px';
                } else {
                    let pos = 0;
                    let prev = getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (prev) {
                        pos = getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }

                    this.styleObject.insetInlineStart = pos + 'px';
                }
            }
        },
        getVirtualScrollerProp(option) {
            return this.virtualScrollerContentProps ? this.virtualScrollerContentProps[option] : null;
        }
    },
    computed: {
        editingRowData() {
            return this.editingMeta[this.rowIndex] ? this.editingMeta[this.rowIndex].data : this.rowData;
        },
        field() {
            return this.columnProp('field');
        },
        containerClass() {
            return [this.columnProp('bodyClass'), this.columnProp('class'), this.cx('bodyCell')];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('bodyStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
        },
        loading() {
            return this.getVirtualScrollerProp('loading');
        },
        loadingOptions() {
            const getLoaderOptions = this.getVirtualScrollerProp('getLoaderOptions');

            return (
                getLoaderOptions &&
                getLoaderOptions(this.rowIndex, {
                    cellIndex: this.index,
                    cellFirst: this.index === 0,
                    cellLast: this.index === this.getVirtualScrollerProp('columns').length - 1,
                    cellEven: this.index % 2 === 0,
                    cellOdd: this.index % 2 !== 0,
                    column: this.column,
                    field: this.field
                })
            );
        },
        expandButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? (this.isRowExpanded ? this.$primevue.config.locale.aria.expandRow : this.$primevue.config.locale.aria.collapseRow) : undefined;
        },
        initButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.editRow : undefined;
        },
        saveButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.saveEdit : undefined;
        },
        cancelButtonAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.cancelEdit : undefined;
        }
    },
    components: {
        DTRadioButton: RowRadioButton,
        DTCheckbox: RowCheckbox,
        Button,
        ChevronDownIcon,
        ChevronRightIcon,
        BarsIcon,
        PencilIcon,
        CheckIcon,
        TimesIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
