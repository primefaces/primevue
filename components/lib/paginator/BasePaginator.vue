<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-paginator-default {
    display: flex;
}

.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.p-paginator-left-content {
    margin-right: auto;
}

.p-paginator-right-content {
    margin-left: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev,
.p-paginator-current {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
}

.p-paginator-element:focus {
    z-index: 1;
    position: relative;
}
`;

const classes = {
    paginator: ({ instance, key }) => [
        'p-paginator p-component',
        {
            'p-paginator-default': !instance.hasBreakpoints(),
            [`p-paginator-${key}`]: instance.hasBreakpoints()
        }
    ],
    start: 'p-paginator-left-content',
    end: 'p-paginator-right-content',
    firstPageButton: ({ instance }) => [
        'p-paginator-first p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    firstPageIcon: 'p-paginator-icon',
    prevPageButton: ({ instance }) => [
        'p-paginator-prev p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    prevPageIcon: 'p-paginator-icon',
    nextPageButton: ({ instance }) => [
        'p-paginator-next p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    nextPageIcon: 'p-paginator-icon',
    lastPageButton: ({ instance }) => [
        'p-paginator-last p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    lastPageIcon: 'p-paginator-icon',
    current: 'p-paginator-current',
    RPPDropdown: 'p-paginator-rpp-options',
    JTPDropdown: 'p-paginator-page-options',
    JTPInput: 'p-paginator-page-input'
};

const { load: loadStyle } = useStyle(styles, { id: 'primevue_paginator_style', manual: true });

export default {
    name: 'BasePaginator',
    extends: BaseComponent,
    props: {
        totalRecords: {
            type: Number,
            default: 0
        },
        rows: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        pageLinkSize: {
            type: Number,
            default: 5
        },
        rowsPerPageOptions: {
            type: Array,
            default: null
        },
        template: {
            type: [Object, String],
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        currentPageReportTemplate: {
            type: null,
            default: '({currentPage} of {totalPages})'
        },
        alwaysShow: {
            type: Boolean,
            default: true
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
