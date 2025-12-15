# Vue Inplace Component

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

## Import

```javascript
import Inplace from 'primevue/inplace';
```

## Accessibility

Screen Reader Inplace component defines aria-live as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily. View Mode Keyboard Support Key Function enter Switches to content.

## Basic

Inplace component requires display and content templates to define the content of each state.

```vue
<Inplace>
    <template #display> View Content </template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </template>
</Inplace>
```

## Image

Any content such as an image can be placed inside an Inplace.

```vue
<Inplace>
    <template #display>
        <span class="inline-flex items-center gap-2">
            <span class="pi pi-image"></span>
            <span>View Photo</span>
        </span>
    </template>
    <template #content>
        <img class="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
    </template>
</Inplace>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="inline-flex items-center gap-2">
                    <span class="pi pi-image"></span>
                    <span>View Photo</span>
                </span>
            </template>
            <template #content>
                <img class="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
            </template>
        </Inplace>
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Input

The closeCallback switches the state back to display mode when called from an event.

```vue
<Inplace>
    <template #display>
        {{ text || 'Click to Edit' }}
    </template>
    <template #content="{ closeCallback }">
        <span class="inline-flex items-center gap-2">
            <InputText v-model="text" autofocus />
            <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
        </span>
    </template>
</Inplace>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Inplace>
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
                <span class="inline-flex items-center gap-2">
                    <InputText v-model="text" autofocus />
                    <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref();
<\/script>
```

</details>

## Lazy

The open event is used to initialize the content such as loading data in a lazy manner.

```vue
<Inplace @open="loadData">
    <template #display> View Data </template>
    <template #content>
        <DataTable :value="products">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </template>
</Inplace>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataTable :value="products">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {ProductService} from "@/service/ProductService";


const products = ref();
const loadData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
}
<\/script>
```

</details>

## Inplace

### Props

| Name         | Type                                   | Default | Description                                                              |
| ------------ | -------------------------------------- | ------- | ------------------------------------------------------------------------ |
| active       | boolean                                | false   | Whether the content is displayed or not.                                 |
| disabled     | boolean                                | false   | When present, it specifies that the element should be disabled.          |
| displayProps | HTMLAttributes                         | -       | Used to pass all properties of the HTMLDivElement to display container.  |
| dt           | any                                    | -       | It generates scoped CSS variables using design tokens for the component. |
| pt           | PassThrough<InplacePassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions    | any                                    | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled     | boolean                                | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name    | Type                         | Description                                           |
| ------- | ---------------------------- | ----------------------------------------------------- |
| root    | InplacePassThroughOptionType | Used to pass attributes to the root's DOM element.    |
| display | InplacePassThroughOptionType | Used to pass attributes to the display's DOM element. |
| content | InplacePassThroughOptionType | Used to pass attributes to the content's DOM element. |
| hooks   | any                          | Used to manage all lifecycle hooks.                   |

## Theming

### CSS Classes

| Class             | Description                       |
| ----------------- | --------------------------------- |
| p-inplace         | Class name of the root element    |
| p-inplace-display | Class name of the display element |
| p-inplace-content | Class name of the content element |

### Design Tokens

| Token                            | CSS Variable                         | Description                 |
| -------------------------------- | ------------------------------------ | --------------------------- |
| inplace.padding                  | --p-inplace-padding                  | Padding of root             |
| inplace.border.radius            | --p-inplace-border-radius            | Border radius of root       |
| inplace.focus.ring.width         | --p-inplace-focus-ring-width         | Focus ring width of root    |
| inplace.focus.ring.style         | --p-inplace-focus-ring-style         | Focus ring style of root    |
| inplace.focus.ring.color         | --p-inplace-focus-ring-color         | Focus ring color of root    |
| inplace.focus.ring.offset        | --p-inplace-focus-ring-offset        | Focus ring offset of root   |
| inplace.focus.ring.shadow        | --p-inplace-focus-ring-shadow        | Focus ring shadow of root   |
| inplace.transition.duration      | --p-inplace-transition-duration      | Transition duration of root |
| inplace.display.hover.background | --p-inplace-display-hover-background | Hover background of display |
| inplace.display.hover.color      | --p-inplace-display-hover-color      | Hover color of display      |
