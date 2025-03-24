<template>
    <DataTable
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #paginatorcontainer="{ first, last, rows, page, pageCount, pageLinks, totalRecords, changePageCallback, firstPageCallback, lastPageCallback, prevPageCallback, nextPageCallback, rowChangeCallback }">
            <div class="flex flex-wrap gap-2 items-center justify-center">
                <SecondaryButton text rounded @click="firstPageCallback" :disabled="page === 0">
                    <template #icon>
                        <AngleDoubleLeftIcon />
                    </template>
                </SecondaryButton>
                <SecondaryButton text rounded @click="prevPageCallback" :disabled="page === 0">
                    <template #icon>
                        <AngleLeftIcon />
                    </template>
                </SecondaryButton>
                <div class="items-center justify-center gap-2 hidden sm:flex">
                    <SecondaryButton v-for="pageLink of pageLinks" :key="pageLink" :text="page !== pageLink" rounded @click="() => changePageCallback(pageLink - 1)" :class="['shrink-0 min-w-10 h-10', { 'bg-highlight!': page + 1 === pageLink }]"
                        >{{ pageLink }}
                    </SecondaryButton>
                </div>
                <SecondaryButton text rounded @click="nextPageCallback" :disabled="page === pageCount - 1">
                    <template #icon>
                        <AngleRightIcon />
                    </template>
                </SecondaryButton>
                <SecondaryButton text rounded @click="lastPageCallback" :disabled="page === pageCount - 1">
                    <template #icon>
                        <AngleDoubleRightIcon />
                    </template>
                </SecondaryButton>
            </div>
        </template>
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </DataTable>
</template>

<script setup>
import AngleDoubleLeftIcon from '@primevue/icons/angledoubleleft';
import AngleDoubleRightIcon from '@primevue/icons/angledoubleright';
import AngleLeftIcon from '@primevue/icons/angleleft';
import AngleRightIcon from '@primevue/icons/angleright';
import DataTable from 'primevue/datatable';
import { ref } from 'vue';
import SecondaryButton from '../button/secondary';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `relative`,
    tableContainer: ``,
    header: `py-3 px-4 border-b border-surface-200 dark:border-surface-700
        bg-surface-0 dark:bg-surface-900
        text-surface-700 dark:text-surface-0`,
    table: `border-spacing-0 w-full`,
    thead: ``,
    headerRow: ``,
    tbody: ``,
    bodyRow: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 transition-colors duration-200`,
    tfoot: ``,
    footerRow: ``,
    footer: `py-3 px-4 border-b border-surface-200 dark:border-surface-700
        bg-surface-0 dark:bg-surface-900
        text-surface-700 dark:text-surface-0`,
    columnGroup: ``,
    row: ``,
    rowExpansion: ``,
    rowExpansionCell: ``,
    mask: `bg-black/50 text-surface-200 absolute z-10 flex items-center justify-center`,
    column: {
        root: ``,
        headerCell: `py-3 px-4 font-normal text-start transition-colors duration-200
            border-b border-surface-200 dark:border-surface-700
            bg-surface-0 dark:bg-surface-900
            text-surface-700 dark:text-surface-0`,
        columnHeaderContent: `flex items-center gap-2`,
        columnTitle: `font-semibold`,
        bodyCell: `text-start py-3 px-4 border-b border-surface-200 dark:border-surface-800`,
        bodyCellContent: ``,
        footerCell: `text-start py-3 px-4 border-b border-surface-200 dark:border-surface-800
            bg-surface-0 dark:bg-surface-900
            text-surface-700 dark:text-surface-0`,
        columnFooter: `font-semibold`,
        columnResizer: `block absolute top-0 end-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent`,
        sort: ``,
        sortIcon: ``,
        pcSortBadge: ``,
        pcHeaderCheckbox: ``,
        pcRowRadiobutton: ``,
        pcRowCheckbox: ``,
        rowToggleButton: ``,
        rowToggleIcon: ``,
        reorderableRowHandle: ``
    },
    columnGroup: {
        root: ``
    },
    row: {
        root: ``
    },
    loadingIcon: ``,
    pcPaginator: {
        root: `flex items-center justify-center flex-wrap py-2 px-4 rounded-md gap-1
        bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0`
    },
    virtualScroller: ``,
    virtualScrollerSpacer: ``,
    rowGroupHeader: ``,
    rowGroupHeaderCell: ``,
    rowGroupFooter: ``,
    rowGroupFooterCell: ``,
    emptyMessage: ``,
    emptyMessageCell: ``,
    columnResizeIndicator: `w-px absolute z-10 hidden bg-primary`,
    rowReorderIndicatorUp: `absolute hidden`,
    rowReorderIndicatorDown: `absolute hidden`,
    transition: {}
});
</script>
