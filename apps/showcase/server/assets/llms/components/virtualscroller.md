# Vue Virtual Scroller Component

VirtualScroller is a performant approach to render large amounts of data efficiently.

## Import

```javascript
import VirtualScroller from 'primevue/virtualscroller';
```

## Accessibility

Screen Reader VirtualScroller has no specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. Keyboard Support Component does not include any built-in interactive elements.

## Basic

VirtualScroller requires items as the data to display, itemSize for the dimensions of an item and item template are required on component. In addition, an initial array is required based on the total number of items to display. Size of the viewport is configured using scrollWidth , scrollHeight properties directly or with CSS width and height styles.

```vue
<VirtualScroller :items="items" :itemSize="50" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>
```

## Delay

The delay property adds a threshold to wait in milliseconds during scrolling for render optimization.

```vue
<VirtualScroller :items="items" :itemSize="50" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" :delay="150" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" :delay="500" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-8">
        <div>
            <span class="font-bold block mb-2">No Delay</span>
            <VirtualScroller :items="items" :itemSize="50" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">150ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="150" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">500ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="500" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>
```

</details>

## Grid

Scrolling can be enabled vertically and horizontally when orientation is set as both . In this mode, itemSize should be an array where first value is the height of an item and second is the width.

```vue
<VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
            <template v-for="(el, index) of item" :key="index">
                <div style="width: 100px">{{ el }}</div>
            </template>
        </div>
    </template>
</VirtualScroller>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                    <template v-for="(el, index) of item" :key="index">
                        <div style="width: 100px">{{ el }}</div>
                    </template>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));
<\/script>
```

</details>

## Horizontal

Setting orientation to horizontal enables scrolling horizontally. In this case, the itemSize should refer to the width of an item.

```vue
<VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px" :pt="{ content: 'flex flex-row' }">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
    </template>
</VirtualScroller>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px" :pt="{ content: 'flex flex-row' }">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>
```

</details>

## Lazy

Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded on demand. To implement lazy loading, enable the lazy property and implement onLazyLoad callback to return data.

```vue
<VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const lazyItems = ref(Array.from({ length: 10000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref();
const onLazyLoad = (event) => {
    lazyLoading.value = true;

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //imitate delay of a backend call
    loadLazyTimeout.value = setTimeout(() => {
        const { first, last } = event;
        const _lazyItems = [...lazyItems.value];

        for (let i = first; i < last; i++) {
            _lazyItems[i] = \`Item #\${i}\`;
        }

        lazyItems.value = _lazyItems;
        lazyLoading.value = false;

    }, Math.random() * 1000 + 250);
};
<\/script>
```

</details>

## Loading

Busy state is enabled by adding showLoader property which blocks the UI with a modal by default. Alternatively, loader template can be used to customize items e.g. with Skeleton .

```vue
<VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
    <template v-slot:loader="{ options }">
        <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
            <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
        </div>
    </template>
</VirtualScroller>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-8">
        <div>
            <span class="font-bold block mb-2">Modal</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">Skeleton</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
                <template v-slot:loader="{ options }">
                    <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                        <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                    </div>
                </template>
            </VirtualScroller>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>
```

</details>

## Virtual Scroller

### Props

| Name              | Type                                               | Default                                     | Description                                                                                                                                                                                                     |
| ----------------- | -------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                | string                                             | -                                           | Unique identifier of the element.                                                                                                                                                                               |
| style             | any                                                | -                                           | Inline style of the component.                                                                                                                                                                                  |
| class             | any                                                | -                                           | Style class of the component.                                                                                                                                                                                   |
| items             | null \| any[] \| any[][]                           | -                                           | An array of objects to display.                                                                                                                                                                                 |
| itemSize          | number \| number[]                                 | -                                           | The height/width of item according to orientation.                                                                                                                                                              |
| scrollHeight      | string                                             | -                                           | Height of the scroll viewport.                                                                                                                                                                                  |
| scrollWidth       | string                                             | -                                           | Width of the scroll viewport.                                                                                                                                                                                   |
| orientation       | HintedString<"both" \| "horizontal" \| "vertical"> | vertical                                    | The orientation of scrollbar.                                                                                                                                                                                   |
| numToleratedItems | number                                             | half the number of items shown in the view. | Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. |
| delay             | number                                             | 0                                           | Delay in scroll before new data is loaded.                                                                                                                                                                      |
| resizeDelay       | number                                             | 10                                          | Delay after window's resize finishes.                                                                                                                                                                           |
| lazy              | boolean                                            | false                                       | Defines if data is loaded and interacted with in lazy manner.                                                                                                                                                   |
| disabled          | boolean                                            | false                                       | If disabled, the VirtualScroller feature is eliminated and the content is displayed directly.                                                                                                                   |
| loaderDisabled    | boolean                                            | false                                       | Used to implement a custom loader instead of using the loader feature in the VirtualScroller.                                                                                                                   |
| showLoader        | boolean                                            | false                                       | Whether to show loader.                                                                                                                                                                                         |
| showSpacer        | boolean                                            | true                                        | Used to implement a custom spacer instead of using the spacer feature in the VirtualScroller.                                                                                                                   |
| loading           | boolean                                            | false                                       | Whether to load items.                                                                                                                                                                                          |
| tabindex          | string \| number                                   | 0                                           | Index of the element in tabbing order.                                                                                                                                                                          |
| inline            | boolean                                            | false                                       | When enabled, positions the content as inline.                                                                                                                                                                  |
| step              | number                                             | 0                                           | Used to specify how many items to load in each load method in lazy mode.                                                                                                                                        |
| appendOnly        | boolean                                            | false                                       | Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.                                                                           |
| autoSize          | boolean                                            | false                                       | Whether to dynamically change the height or width of scrollable container.                                                                                                                                      |
| dt                | any                                                | -                                           | It generates scoped CSS variables using design tokens for the component.                                                                                                                                        |
| pt                | PassThrough<VirtualScrollerPassThroughOptions>     | -                                           | Used to pass attributes to DOM elements inside the component.                                                                                                                                                   |
| ptOptions         | any                                                | -                                           | Used to configure passthrough(pt) options of the component.                                                                                                                                                     |
| unstyled          | boolean                                            | false                                       | When enabled, it removes component related styles in the core.                                                                                                                                                  |

## Pass Through Options

| Name        | Type                                 | Description                                                |
| ----------- | ------------------------------------ | ---------------------------------------------------------- |
| root        | VirtualScrollerPassThroughOptionType | Used to pass attributes to the root's DOM element.         |
| content     | VirtualScrollerPassThroughOptionType | Used to pass attributes to the content's DOM element.      |
| loader      | VirtualScrollerPassThroughOptionType | Used to pass attributes to the loader's DOM element.       |
| loadingIcon | VirtualScrollerPassThroughOptionType | Used to pass attributes to the loading icon's DOM element. |
| spacer      | VirtualScrollerPassThroughOptionType | Used to pass attributes to the spacer's DOM element.       |
| hooks       | any                                  | Used to manage all lifecycle hooks.                        |

## Theming

### CSS Classes

| Class                          | Description                            |
| ------------------------------ | -------------------------------------- |
| p-virtualscroller              | Class name of the root element         |
| p-virtualscroller-content      | Class name of the content element      |
| p-virtualscroller-spacer       | Class name of the spacer element       |
| p-virtualscroller-loader       | Class name of the loader element       |
| p-virtualscroller-loading-icon | Class name of the loading icon element |

### Design Tokens

| Token                                  | CSS Variable                               | Description               |
| -------------------------------------- | ------------------------------------------ | ------------------------- |
| virtualscroller.loader.mask.background | --p-virtualscroller-loader-mask-background | Background of loader mask |
| virtualscroller.loader.mask.color      | --p-virtualscroller-loader-mask-color      | Color of loader mask      |
| virtualscroller.loader.icon.size       | --p-virtualscroller-loader-icon-size       | Size of the loader icon   |
