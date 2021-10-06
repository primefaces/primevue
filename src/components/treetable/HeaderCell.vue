<template>
    <th :style="[containerStyle]" :class="containerClass" @click="onClick" @keydown="onKeyDown"
        :tabindex="columnProp('sortable') ? '0' : null"  :aria-sort="ariaSort">
        <span v-if="resizableColumns && !columnProp('frozen')" class="p-column-resizer" @mousedown="onResizeStart"></span>
        <component v-if="column.children && column.children.header" :is="column.children.header" :column="column" />
        <span v-if="columnProp('header')" class="p-column-title">{{columnProp('header')}}</span>
        <Icon v-if="columnProp('sortable')" class="p-sortable-column-icon" :icon="sortableColumnIcon" />
        <span v-if="isMultiSorted()" class="p-sortable-column-badge">{{getMultiSortMetaIndex() + 1}}</span>
    </th>
</template>

<script>
import {DomHandler,ObjectUtils} from 'primevue/utils';
import Icon from 'primevue/icon';

export default {
    name: 'HeaderCell',
    emits: ['column-click','column-resizestart'],
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
        }
    },
    data() {
        return {
            styleObject: {}
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
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right);
                    }
                    this.styleObject.right = right + 'px';
                }
                else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;
                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
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
            this.$emit('column-click', {originalEvent: event, column: this.column});
        },
        onKeyDown(event) {
            if (event.which === 13 && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
                this.$emit('column-click', {originalEvent: event, column: this.column});
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
            return this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? (this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'))) : this.isMultiSorted();
        }
    },
    computed: {
        containerClass() {
            return [this.columnProp('headerClass'), this.columnProp('class'), {
                'p-sortable-column': this.columnProp('sortable'),
                'p-resizable-column': this.resizableColumns,
                'p-highlight': this.isColumnSorted(),
                'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let headerStyle = this.columnProp('headerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, headerStyle, this.styleObject]: [columnStyle, headerStyle];
        },
        sortableColumnIcon() {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
                sortOrder = sorted ? this.sortOrder: 0;
            }
            else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex();
                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            let icon = 'sort-alt';
            if (sorted) {
                if (sortOrder > 0) {
                    icon = 'sort-amount-up-alt';
                } else {
                    icon = 'sort-amount-down';
                }
            }

            return {
                commonIcon: icon,
                context: 'HeaderCell',
            };
        },
        ariaSort() {
            if (this.columnProp('sortable')) {
                const sortIcon = this.sortableColumnIcon;
                if (sortIcon.commonIcon == "sort-amount-down")
                    return 'descending';
                else if (sortIcon.commonIcon == "sort-amount-up-alt")
                    return 'ascending';
                else
                    return 'none';
            }
            else {
                return null;
            }
        },
    },
    components: {
        'Icon': Icon
    }
}
</script>
