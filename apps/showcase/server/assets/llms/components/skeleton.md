# Vue Skeleton Component

Skeleton is a placeholder to display instead of the actual content.

## Import

```javascript
import Skeleton from 'primevue/skeleton';
```

## Accessibility

Screen Reader Skeleton uses aria-hidden as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a container, you may use aria-busy on the container element as well to indicate the loading process. Keyboard Support Component does not include any interactive elements.

## Card

Sample card implementation using different Skeleton components and Tailwind CSS utilities.

```vue
<div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
    <div class="flex mb-4">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
        </div>
    </div>
    <Skeleton width="100%" height="150px"></Skeleton>
    <div class="flex justify-between mt-4">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
    </div>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
            <div class="flex mb-4">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div>
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton height=".5rem"></Skeleton>
                </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div class="flex justify-between mt-4">
                <Skeleton width="4rem" height="2rem"></Skeleton>
                <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## DataTable

Sample DataTable implementation using different Skeleton components and Tailwind CSS utilities.

```vue
<DataTable :value="products">
    <Column field="code" header="Code">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="name" header="Name">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="category" header="Category">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="quantity" header="Quantity">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
</DataTable>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable :value="products">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref(new Array(4));
<\/script>
```

</details>

## List

Sample list implementation using different Skeleton components and Tailwind CSS utilities.

```vue
<div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
    <ul class="m-0 p-0 list-none">
        <li class="mb-4">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li>
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
    </ul>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
        <ul class="m-0 p-0 list-none">
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Shapes

Various shapes and sizes can be created using styling properties like shape , width , height , borderRadius and class .

```vue
<h5>Rectangle</h5>
<Skeleton class="mb-2"></Skeleton>
<Skeleton width="10rem" class="mb-2"></Skeleton>
<Skeleton width="5rem" class="mb-2"></Skeleton>
<Skeleton height="2rem" class="mb-2"></Skeleton>
<Skeleton width="10rem" height="4rem"></Skeleton>

<h5>Rounded</h5>
<Skeleton class="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
<Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>

<h5 class="mt-4">Square</h5>
<Skeleton size="2rem" class="mr-2"></Skeleton>
<Skeleton size="3rem" class="mr-2"></Skeleton>
<Skeleton size="4rem" class="mr-2"></Skeleton>
<Skeleton size="5rem"></Skeleton>

<h5 class="mt-4">Circle</h5>
<Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
<Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
<Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
<Skeleton shape="circle" size="5rem"></Skeleton>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rectangle</h5>
                <Skeleton class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rounded</h5>
                <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Square</h5>
                <div class="flex items-end">
                    <Skeleton size="2rem" class="mr-2"></Skeleton>
                    <Skeleton size="3rem" class="mr-2"></Skeleton>
                    <Skeleton size="4rem" class="mr-2"></Skeleton>
                    <Skeleton size="5rem"></Skeleton>
                </div>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Circle</h5>
                <div class="flex items-end">
                    <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="5rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Skeleton

### Props

| Name         | Type                                    | Default   | Description                                                              |
| ------------ | --------------------------------------- | --------- | ------------------------------------------------------------------------ |
| shape        | HintedString<"circle" \| "rectangle">   | rectangle | Shape of the element.                                                    |
| size         | string                                  | -         | Size of the Circle or Square.                                            |
| width        | string                                  | 100%      | Width of the element.                                                    |
| height       | string                                  | 1rem      | Height of the element.                                                   |
| borderRadius | string                                  | -         | Border radius of the element, defaults to value from theme.              |
| animation    | HintedString<"none" \| "wave">          | wave      | Type of the animation.                                                   |
| dt           | any                                     | -         | It generates scoped CSS variables using design tokens for the component. |
| pt           | PassThrough<SkeletonPassThroughOptions> | -         | Used to pass attributes to DOM elements inside the component.            |
| ptOptions    | any                                     | -         | Used to configure passthrough(pt) options of the component.              |
| unstyled     | boolean                                 | false     | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name  | Type                          | Description                                        |
| ----- | ----------------------------- | -------------------------------------------------- |
| root  | SkeletonPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                           | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class      | Description                    |
| ---------- | ------------------------------ |
| p-skeleton | Class name of the root element |

### Design Tokens

| Token                         | CSS Variable                      | Description                  |
| ----------------------------- | --------------------------------- | ---------------------------- |
| skeleton.border.radius        | --p-skeleton-border-radius        | Border radius of root        |
| skeleton.background           | --p-skeleton-background           | Background of root           |
| skeleton.animation.background | --p-skeleton-animation-background | Animation background of root |
