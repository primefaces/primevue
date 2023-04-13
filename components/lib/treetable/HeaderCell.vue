<template>
    <th :style="[containerStyle]" :class="containerClass" @click="onClick" @keydown="onKeyDown" :tabindex="columnProp('sortable') ? '0' : null" :aria-sort="ariaSort" role="columnheader">
        <span v-if="resizableColumns && !columnProp('frozen')" class="p-column-resizer" @mousedown="onResizeStart"></span>
        <component v-if="column.children && column.children.header" :is="column.children.header" :column="column" />
        <span v-if="columnProp('header')" class="p-column-title">{{ columnProp('header') }}</span>
        <span v-if="columnProp('sortable')">
            <component :is="templates ? templates : findSortIcon" :sorted="sortableColumnIcon[1].sorted" :sortOrder="sortableColumnIcon[1].sortOrder" class="p-sortable-column-icon pi-fw" />
        </span>
        <span v-if="isMultiSorted()" class="p-sortable-column-badge">{{ getMultiSortMetaIndex() + 1 }}</span>
    </th>
</template>

<script>
import SortAltIcon from 'primevue/icon/sortalt';
import SortAmountDownIcon from 'primevue/icon/sortamountdown';
import SortAmountUpAltIcon from 'primevue/icon/sortamountupalt';
import { DomHandler, ObjectUtils } from 'primevue/utils';

export default {
    name: 'HeaderCell',
    emits: ['column-click', 'column-resizestart'],
    props: {
        column: {
            type: Object,
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        templates: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            styleObject: {}
        };
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
    },
    methods: {
        columnProp(prop) {
            return ObjectUtils.getVNodeProp(this.column, prop);
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');

                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;

                    if (next) {
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }

                    this.styleObject.right = right + 'px';
                } else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;

                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }

                    this.styleObject.left = left + 'px';
                }

                let filterRow = this.$el.parentElement.nextElementSibling;

                if (filterRow) {
                    let index = DomHandler.index(this.$el);

                    filterRow.children[index].style.left = this.styleObject.left;
                    filterRow.children[index].style.right = this.styleObject.right;
                }
            }
        },
        onClick(event) {
            this.$emit('column-click', { originalEvent: event, column: this.column });
        },
        onKeyDown(event) {
            if ((event.code === 'Enter' || event.code === 'Space') && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
                this.$emit('column-click', { originalEvent: event, column: this.column });

                event.preventDefault();
            }
        },
        onResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        getMultiSortMetaIndex() {
            let index = -1;

            for (let i = 0; i < this.multiSortMeta.length; i++) {
                let meta = this.multiSortMeta[i];

                if (meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField')) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        isMultiSorted() {
            return this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1;
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField')) : this.isMultiSorted();
        }
    },
    computed: {
        containerClass() {
            return [
                this.columnProp('headerClass'),
                this.columnProp('class'),
                {
                    'p-sortable-column': this.columnProp('sortable'),
                    'p-resizable-column': this.resizableColumns,
                    'p-highlight': this.isColumnSorted(),
                    'p-frozen-column': this.columnProp('frozen')
                }
            ];
        },
        containerStyle() {
            let headerStyle = this.columnProp('headerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, headerStyle, this.styleObject] : [columnStyle, headerStyle];
        },
        sortableColumnIcon() {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
                sortOrder = sorted ? this.sortOrder : 0;
            } else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex();

                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            return [
                {
                    SortAltIcon: !sorted,
                    SortAmountUpAltIcon: sorted && sortOrder > 0,
                    SortAmountDownIcon: sorted && sortOrder < 0
                },
                {
                    sorted,
                    sortOrder
                }
            ];
        },
        findSortIcon() {
            const sortIcon = this.sortableColumnIcon[0];

            return Object.keys(sortIcon).find((key) => sortIcon[key] === true);
        },
        ariaSort() {
            if (this.columnProp('sortable')) {
                const sortIcon = this.sortableColumnIcon[0];

                if (sortIcon['SortAmountDownIcon']) return 'descending';
                else if (sortIcon['SortAmountUpAltIcon']) return 'ascending';
                else return 'none';
            } else {
                return null;
            }
        }
    },
    components: {
        SortAltIcon: SortAltIcon,
        SortAmountUpAltIcon: SortAmountUpAltIcon,
        SortAmountDownIcon: SortAmountDownIcon
    }
};
</script>
