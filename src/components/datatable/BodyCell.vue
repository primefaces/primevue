<template>
    <td :style="column.bodyStyle" :class="column.bodyClass">
        <ColumnSlot :data="rowData" :column="column" type="body" v-if="column.$scopedSlots.body" />
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
        rowTogglerIcon: {
            type: Array,
            default: null
        },
        selected: {
            type: Boolean,
            default: false
        },
    },
    mounted() {
        this.children = this.$children;
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
        }
    },
    components: {
        'ColumnSlot': ColumnSlot,
        'DTRadioButton': RowRadioButton,
        'DTCheckbox': RowCheckbox
    }
}
</script>