# Vue Paginator Component

Paginator displays data in paged format and provides navigation between pages.

## Import

```javascript
import Paginator from 'primevue/paginator';
```

## Accessibility

Screen Reader Paginator is placed inside a nav element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below. First, previous, next and last page navigators elements with aria-label attributes referring to the aria.firstPageLabel , aria.prevPageLabel , aria.nextPageLabel and aria.lastPageLabel properties of the locale API respectively. Page links are also button elements with an aria-label attribute derived from the aria.pageLabel of the locale API. Current page is marked with aria-current set to "page" as well. Current page report uses aria-live="polite" to instruct screen reader about the changes to the pagination state. Rows per page dropdown internally uses a dropdown component, refer to the select documentation for accessibility details. Additionally, the dropdown uses an aria-label from the aria.rowsPerPageLabel property of the locale API. Jump to page input is an input element with an aria-label that refers to the aria.jumpToPageInputLabel property and jump to page dropdown internally uses a dropdown component, with an aria-label that refers to the aria.jumpToPageDropdownLabel property of the locale API. Keyboard Support Key Function tab Moves focus through the paginator elements. enter Executes the paginator element action. space Executes the paginator element action. Rows Per Page Dropdown Keyboard Support Refer to the select documentation for more details about keyboard support.

## Basic

Paginator is used as a controlled component with first and rows properties to manage the first index and number of records to display per page. Total number of records need to be with totalRecords property. Default template includes a dropdown to change the rows so rowsPerPageOptions is also necessary for the dropdown options.

```vue
<Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
```

## Current Page Report

Current page report item in the template displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following; {currentPage} {totalPages} {rows} {first} {last} {totalRecords}

```vue
<Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const first = ref(0);
<\/script>
```

</details>

## Custom Content

There are two templates available named start and end to add custom content to these locations. Both templates get a state object as a slot property to provide the current page, first index and the rows.

```vue
<Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
    <template #start="slotProps">
        Page: {{ slotProps.state.page }}
        First: {{ slotProps.state.first }}
        Rows: {{ slotProps.state.rows }}
    </template>
    <template #end>
        <Button type="button" icon="pi pi-search" />
    </template>
</Paginator>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
            <template #start="slotProps">
                Page: {{ slotProps.state.page }}
                First: {{ slotProps.state.first }}
                Rows: {{ slotProps.state.rows }}
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Headless

Headless mode is enabled by defining a container slot that lets you implement entire UI instead of the default elements. The template receives the following data; first last rows page pageCount totalRecords firstPageCallback lastPageCallback prevPageCallback nextPageCallback rowChangeCallback

```vue
<Paginator :rows="10" :totalRecords="120">
    <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
        <div class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
            <Button icon="pi pi-chevron-left" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
            <div class="text-color font-medium">
                <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
            </div>
            <Button icon="pi pi-chevron-right" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
        </div>
    </template>
</Paginator>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                <div class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
                    <Button icon="pi pi-chevron-left" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
                    <div class="text-color font-medium">
                        <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                        <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
                    </div>
                    <Button icon="pi pi-chevron-right" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
                </div>
            </template>
        </Paginator>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Responsive

Paginator elements can be customized per screen size by defining a template per breakpoint. Note that breakpoints are based on max-width setting, if default key is omitted then the default template would be used. Example below has 4 settings; up to 640px, between 641px-960px, between 961px-1300px and larger than 1301px which is the default.

```vue
<Paginator
    :template="{
        '640px': 'PrevPageLink CurrentPageReport NextPageLink',
        '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
        '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
    }"
    :rows="10"
    :totalRecords="120"
>
</Paginator>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Paginator
            :template="{
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
            }"
            :rows="10"
            :totalRecords="120">
        </Paginator>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Template

Paginator elements can be customized using the template property using the predefined keys, default value is "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that can be placed inside a paginator in any order. FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageDropdown JumpToPageInput CurrentPageReport

```vue
<Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

<div class="p-4 text-center">
    <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="rounded w-full sm:w-[30rem]" />
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

        <div class="p-4 text-center">
            <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="rounded w-full sm:w-[30rem]" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const first = ref(0);
<\/script>
```

</details>

## Paginator

### Props

| Name                      | Type                                          | Default                           | Description                                                                                                                                                                                                                                                                                                              |
| ------------------------- | --------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| totalRecords              | number                                        | 0                                 | Number of total records.                                                                                                                                                                                                                                                                                                 |
| rows                      | number                                        | 0                                 | Data count to display per page.                                                                                                                                                                                                                                                                                          |
| first                     | number                                        | 0                                 | Zero-relative number of the first row to be displayed.                                                                                                                                                                                                                                                                   |
| pageLinkSize              | number                                        | 5                                 | Number of page links to display.                                                                                                                                                                                                                                                                                         |
| rowsPerPageOptions        | number[]                                      | -                                 | Array of integer values to display inside rows per page dropdown.                                                                                                                                                                                                                                                        |
| template                  | any                                           | -                                 | Template of the paginator, can either be a string or an object with key-value pairs to define templates per breakpoint. Available templates are the following; - FirstPageLink - PrevPageLink - PageLinks - NextPageLink - LastPageLink - RowsPerPageDropdown - JumpToPageDropdown - JumpToPageInput - CurrentPageReport |
| currentPageReportTemplate | string                                        | '({currentPage} of {totalPages})' | Template of the current page report element. It displays information about the pagination state. Available placeholders are the following; - {currentPage} - {totalPages} - {rows} - {first} - {last} - {totalRecords}                                                                                                   |
| alwaysShow                | boolean                                       | true                              | Whether to show the paginator even there is only one page.                                                                                                                                                                                                                                                               |
| dt                        | any                                           | -                                 | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                                                                                 |
| pt                        | PassThrough<PaginatorPassThroughOptions<any>> | -                                 | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                                                                            |
| ptOptions                 | any                                           | -                                 | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                                                                              |

## Pass Through Options

| Name                  | Type                              | Description                                                       |
| --------------------- | --------------------------------- | ----------------------------------------------------------------- |
| paginatorContainer    | any                               | Used to pass attributes to the paginator container's DOM element. |
| root                  | PaginatorPassThroughOptionType<T> | Used to pass attributes to the root's DOM element.                |
| content               | PaginatorPassThroughOptionType<T> | Used to pass attributes to the content DOM element.               |
| contentStart          | PaginatorPassThroughOptionType<T> | Used to pass attributes to the content start's DOM element.       |
| first                 | PaginatorPassThroughOptionType<T> | Used to pass attributes to the first page button's DOM element.   |
| firstIcon             | PaginatorPassThroughOptionType<T> | Used to pass attributes to the first icon's DOM element.          |
| prev                  | PaginatorPassThroughOptionType<T> | Used to pass attributes to the prev page button's DOM element.    |
| prevIcon              | PaginatorPassThroughOptionType<T> | Used to pass attributes to the prev page icon's DOM element.      |
| next                  | PaginatorPassThroughOptionType<T> | Used to pass attributes to the next page button's DOM element.    |
| nextIcon              | PaginatorPassThroughOptionType<T> | Used to pass attributes to the next page icon's DOM element.      |
| last                  | PaginatorPassThroughOptionType<T> | Used to pass attributes to the last page button's DOM element.    |
| lastIcon              | PaginatorPassThroughOptionType<T> | Used to pass attributes to the last page icon's DOM element.      |
| pages                 | PaginatorPassThroughOptionType<T> | Used to pass attributes to the pages's DOM element.               |
| page                  | PaginatorPassThroughOptionType<T> | Used to pass attributes to the page button's DOM element.         |
| current               | PaginatorPassThroughOptionType<T> | Used to pass attributes to the current's DOM element.             |
| pcRowPerPageDropdown  | any                               | Used to pass attributes to the Dropdown component.                |
| pcJumpToPageDropdown  | any                               | Used to pass attributes to the Dropdown component.                |
| pcJumpToPageInputText | any                               | Used to pass attributes to the Dropdown component.                |
| contentEnd            | PaginatorPassThroughOptionType<T> | Used to pass attributes to the content end's DOM element.         |
| hooks                 | any                               | Used to manage all lifecycle hooks.                               |

## Theming

### CSS Classes

| Class                     | Description                                     |
| ------------------------- | ----------------------------------------------- |
| p-paginator               | Class name of the paginator element             |
| p-paginator-content-start | Class name of the content start element         |
| p-paginator-content-end   | Class name of the content end element           |
| p-paginator-first         | Class name of the first element                 |
| p-paginator-first-icon    | Class name of the first icon element            |
| p-paginator-prev          | Class name of the prev element                  |
| p-paginator-prev-icon     | Class name of the prev icon element             |
| p-paginator-next          | Class name of the next element                  |
| p-paginator-next-icon     | Class name of the next icon element             |
| p-paginator-last          | Class name of the last element                  |
| p-paginator-last-icon     | Class name of the last icon element             |
| p-paginator-pages         | Class name of the pages element                 |
| p-paginator-page          | Class name of the page element                  |
| p-paginator-current       | Class name of the current element               |
| p-paginator-rpp-dropdown  | Class name of the row per page dropdown element |
| p-paginator-jtp-dropdown  | Class name of the jump to page dropdown element |
| p-paginator-jtp-input     | Class name of the jump to page input element    |

### Design Tokens

| Token                                    | CSS Variable                                 | Description                       |
| ---------------------------------------- | -------------------------------------------- | --------------------------------- |
| paginator.padding                        | --p-paginator-padding                        | Padding of root                   |
| paginator.gap                            | --p-paginator-gap                            | Gap of root                       |
| paginator.border.radius                  | --p-paginator-border-radius                  | Border radius of root             |
| paginator.background                     | --p-paginator-background                     | Background of root                |
| paginator.color                          | --p-paginator-color                          | Color of root                     |
| paginator.transition.duration            | --p-paginator-transition-duration            | Transition duration of root       |
| paginator.nav.button.background          | --p-paginator-nav-button-background          | Background of nav button          |
| paginator.nav.button.hover.background    | --p-paginator-nav-button-hover-background    | Hover background of nav button    |
| paginator.nav.button.selected.background | --p-paginator-nav-button-selected-background | Selected background of nav button |
| paginator.nav.button.color               | --p-paginator-nav-button-color               | Color of nav button               |
| paginator.nav.button.hover.color         | --p-paginator-nav-button-hover-color         | Hover color of nav button         |
| paginator.nav.button.selected.color      | --p-paginator-nav-button-selected-color      | Selected color of nav button      |
| paginator.nav.button.width               | --p-paginator-nav-button-width               | Width of nav button               |
| paginator.nav.button.height              | --p-paginator-nav-button-height              | Height of nav button              |
| paginator.nav.button.border.radius       | --p-paginator-nav-button-border-radius       | Border radius of nav button       |
| paginator.nav.button.focus.ring.width    | --p-paginator-nav-button-focus-ring-width    | Focus ring width of nav button    |
| paginator.nav.button.focus.ring.style    | --p-paginator-nav-button-focus-ring-style    | Focus ring style of nav button    |
| paginator.nav.button.focus.ring.color    | --p-paginator-nav-button-focus-ring-color    | Focus ring color of nav button    |
| paginator.nav.button.focus.ring.offset   | --p-paginator-nav-button-focus-ring-offset   | Focus ring offset of nav button   |
| paginator.nav.button.focus.ring.shadow   | --p-paginator-nav-button-focus-ring-shadow   | Focus ring shadow of nav button   |
| paginator.current.page.report.color      | --p-paginator-current-page-report-color      | Color of current page report      |
| paginator.jump.to.page.input.max.width   | --p-paginator-jump-to-page-input-max-width   | Max width of jump to page input   |
