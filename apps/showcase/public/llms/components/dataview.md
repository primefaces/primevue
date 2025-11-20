# Vue DataView Component

DataView displays data in grid or list layout with pagination and sorting features.

## Import

```javascript
import DataView from 'primevue/dataview';
```

## Accessibility

Screen Reader The container element that wraps the layout options buttons has a group role whereas each button element uses button role and aria-pressed is updated depending on selection state. Values to describe the buttons are derived from the aria.listView and aria.gridView properties of the locale API respectively. Refer to paginator accessibility documentation for the paginator of the component. Keyboard Support Key Function tab Moves focus to the buttons. space Toggles the checked state of a button.

## Basic

DataView requires a value to display along with a list slot for item content.

```vue
<DataView :value="products">
    <template #list="slotProps">
        <div class="flex flex-col">
            <div v-for="(item, index) in slotProps.items" :key="index">
                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                    <div class="md:w-40 relative">
                        <img class="block xl:block mx-auto rounded w-full" :src="\
```

## Layout

DataView supports list and grid display modes defined with the layout property. The grid mode is not built-in for flexibility purposes and requires a library with CSS grid features like Tailwind.

```vue
<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-end">
            <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                <template #option="{ option }">
                    <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                </template>
            </SelectButton>
        </div>
    </template>

    <template #list="slotProps">
        <div class="flex flex-col">
            <div v-for="(item, index) in slotProps.items" :key="index">
                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                    <div class="md:w-40 relative">
                        <img class="block xl:block mx-auto rounded w-full" :src="\
```

## Loading

While data is being loaded, Skeleton component may be used to indicate the busy state.

```vue
<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-end">
            <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                <template #option="{ option }">
                    <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                </template>
            </SelectButton>
        </div>
    </template>

    <template #list>
        <div class="flex flex-col">
            <div v-for="i in 6" :key="i">
                <div class="flex flex-col xl:flex-row xl:items-start p-6 gap-6" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                    <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                    <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6">
                        <div class="flex flex-col items-center sm:items-start gap-4">
                            <Skeleton width="8rem" height="2rem" />
                            <Skeleton width="6rem" height="1rem" />

                            <div class="flex items-center gap-4">
                                <Skeleton width="6rem" height="1rem" />
                                <Skeleton width="3rem" height="1rem" />
                            </div>
                        </div>
                        <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                            <Skeleton width="4rem" height="2rem" />
                            <Skeleton size="3rem" shape="circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid>
        <div class="grid grid-cols-12 gap-4">
            <div v-for="i in 6" :key="i" class="col-span-12 sm:col-span-6 xl:col-span-4 p-2">
                <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <Skeleton width="6rem" height="2rem" />
                        <Skeleton width="3rem" height="1rem" />
                    </div>
                    <div class="flex flex-col items-center gap-4 py-8">
                        <Skeleton width="75%" height="10rem" />
                        <Skeleton width="8rem" height="2rem" />
                        <Skeleton width="6rem" height="1rem" />
                    </div>
                    <div class="flex items-center justify-between">
                        <Skeleton width="4rem" height="2rem" />
                        <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
```

## Pagination

Pagination is enabled with the paginator and rows properties. Refer to the Paginator for more information about customizing the paginator.

```vue
<DataView :value="products" paginator :rows="5">
    <template #list="slotProps">
        <div class="flex flex-col">
            <div v-for="(item, index) in slotProps.items" :key="index">
                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                    <div class="md:w-40 relative">
                        <img class="block xl:block mx-auto rounded w-full" :src="\
```

## Sorting

Built-in sorting is controlled by bindings sortField and sortField properties from a custom UI.

```vue
<DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
    <template #header>
        <Select v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
    </template>
    <template #list="slotProps">
        <div class="flex flex-col">
            <div v-for="(item, index) in slotProps.items" :key="index">
                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                    <div class="md:w-40 relative">
                        <img class="block xl:block mx-auto rounded w-full" :src="\
```

## Data View

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | null \| T[] | - | An array of objects to display. |
| layout | HintedString<"list" \| "grid"> | list | Layout of the items, valid values are 'list' and 'grid'. |
| rows | number | 0 | Number of rows to display per page. |
| first | number | 0 | Index of the first record to render. |
| totalRecords | number | - | Number of total records, defaults to length of value when not defined. |
| paginator | boolean | false | When specified as true, enables the pagination. |
| paginatorPosition | HintedString<"top" \| "bottom" \| "both"> | bottom | Position of the paginator, options are 'top','bottom' or 'both'. |
| alwaysShowPaginator | boolean | true | Whether to show it even there is only one page. |
| paginatorTemplate | string | FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown | Template of the paginator. It can be customized using the template property using the predefined keys,  - FirstPageLink - PrevPageLink - PageLinks - NextPageLink - LastPageLink - RowsPerPageDropdown - JumpToPageDropdown - JumpToPageInput - CurrentPageReport |
| pageLinkSize | number | 5 | Number of page links to display. |
| rowsPerPageOptions | number[] | - | Array of integer values to display inside rows per page dropdown. |
| currentPageReportTemplate | string | '({currentPage} of {totalPages})' | Template of the current page report element. It displays information about the pagination state.  - {currentPage} - {totalPages} - {rows} - {first} - {last} - {totalRecords} |
| sortField | null \| string \| Function | - | Property name or a getter function of data to use in sorting by default. |
| sortOrder | null \| number | - | Order to sort the data by default. |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| dataKey | string | - | Name of the data that uniquely identifies the a record in the data. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<DataViewPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | DataViewPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| header | DataViewPassThroughOptionType | Used to pass attributes to the header's DOM element. |
| pcPaginator | any | Used to pass attributes to the Paginator component. |
| content | DataViewPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| emptyMessage | DataViewPassThroughOptionType | Used to pass attributes to the empty message's DOM element. |
| footer | DataViewPassThroughOptionType | Used to pass attributes to the footer's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-dataview | Class name of the root element |
| p-dataview-header | Class name of the header element |
| p-dataview-paginator-[position] | Class name of the paginator element |
| p-dataview-content | Class name of the content element |
| p-dataview-empty-message | Class name of the empty message element |
| p-dataview-footer | Class name of the footer element |

