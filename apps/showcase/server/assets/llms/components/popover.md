# Vue Popover Component

Popover is a container component that can overlay other components on page.

## Import

```javascript
import Popover from 'primevue/popover';
```

## Accessibility

Screen Reader Popover component uses dialog role and since any attribute is passed to the root element you may define attributes like aria-label or aria-labelledby to describe the popup contents. In addition aria-modal is added since focus is kept within the popup. Popover adds aria-expanded state attribute and aria-controls to the trigger so that the relation between the trigger and the popup is defined. Popover Keyboard Support When the popup gets opened, the first focusable element receives the focus and this can be customized by adding autofocus to an element within the popup. Key Function tab Moves focus to the next the focusable element within the popup. shift + tab Moves focus to the previous the focusable element within the popup. escape Closes the popup and moves focus to the trigger.

## Basic

Popover is accessed via its ref and visibility is controlled using toggle , show and hide functions with an event of the target.

```vue
<Button type="button" icon="pi pi-share-alt" label="Share" @click="toggle" />

<Popover ref="op">
    <div class="flex flex-col gap-4 w-[25rem]">
        <div>
            <span class="font-medium block mb-2">Share this document</span>
            <InputGroup>
                <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                <InputGroupAddon>
                    <i class="pi pi-copy"></i>
                </InputGroupAddon>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium block mb-2">Invite Member</span>
            <InputGroup>
                <InputText disabled />
                <Button label="Invite" icon="pi pi-users"></Button>
            </InputGroup>
        </div>
        <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
                <li v-for="member in members" :key="member.name" class="flex items-center gap-2">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${member.image}\`" style="width: 32px" />
                    <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                    </div>
                    <div class="flex items-center gap-2 text-surface-500 dark:text-surface-400 ml-auto text-sm">
                        <span>{{ member.role }}</span>
                        <i class="pi pi-angle-down"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</Popover>
```

## DataTable

Place the Popover outside of the data iteration components to avoid rendering it multiple times.

```vue
<DataTable :value="products" :rows="5" paginator tableStyle="min-width: 50rem">
    <Column field="id" header="Id" class="w-1/6"></Column>
    <Column field="code" header="Code" class="w-1/6"></Column>
    <Column field="name" header="Name" class="w-1/6" bodyClass="whitespace-nowrap"></Column>
    <Column field="price" header="Price" sortable class="w-1/6">
        <template #body="slotProps"> $ {{ slotProps.data.price }} </template>
    </Column>
    <Column header="Image" class="w-1/6">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
        </template>
    </Column>
    <Column header="Details" class="w-1/6">
        <template #body="slotProps">
            <Button type="button" @click="displayProduct($event, slotProps.data)" icon="pi pi-search" severity="secondary" rounded></Button>
        </template>
    </Column>
</DataTable>

<Popover ref="op">
    <div v-if="selectedProduct" class="rounded flex flex-col">
        <div class="flex justify-center rounded">
            <div class="relative mx-auto">
                <img class="rounded w-44 sm:w-64" :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" />
                <Tag :value="selectedProduct.inventoryStatus" :severity="getSeverity(selectedProduct)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
            </div>
        </div>
        <div class="pt-4">
            <div class="flex flex-row justify-between items-start gap-2 mb-4">
                <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ selectedProduct.category }}</span>
                    <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                </div>
                <div class="bg-surface-100 p-1" style="border-radius: 30px">
                    <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                        <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                </div>
            </div>
            <div class="flex gap-2">
                <Button icon="pi pi-shopping-cart" :label="\`Buy Now | \\$\${selectedProduct.price}\`" :disabled="selectedProduct.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap" @click="hidePopover"></Button>
                <Button icon="pi pi-heart" variant="outlined" @click="hidePopover"></Button>
            </div>
        </div>
    </div>
</Popover>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataTable :value="products" :rows="5" paginator tableStyle="min-width: 50rem">
            <Column field="id" header="Id" class="w-1/6"></Column>
            <Column field="code" header="Code" class="w-1/6"></Column>
            <Column field="name" header="Name" class="w-1/6" bodyClass="whitespace-nowrap"></Column>
            <Column field="price" header="Price" sortable class="w-1/6">
                <template #body="slotProps"> $ {{ slotProps.data.price }} </template>
            </Column>
            <Column header="Image" class="w-1/6">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
                </template>
            </Column>
            <Column header="Details" class="w-1/6">
                <template #body="slotProps">
                    <Button type="button" @click="displayProduct($event, slotProps.data)" icon="pi pi-search" severity="secondary" rounded></Button>
                </template>
            </Column>
        </DataTable>

        <Popover ref="op">
            <div v-if="selectedProduct" class="rounded flex flex-col">
                <div class="flex justify-center rounded">
                    <div class="relative mx-auto">
                        <img class="rounded w-44 sm:w-64" :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" />
                        <Tag :value="selectedProduct.inventoryStatus" :severity="getSeverity(selectedProduct)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                    </div>
                </div>
                <div class="pt-4">
                    <div class="flex flex-row justify-between items-start gap-2 mb-4">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ selectedProduct.category }}</span>
                            <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                        </div>
                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                            <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <Button icon="pi pi-shopping-cart" :label="\`Buy Now | \\$\${selectedProduct.price}\`" :disabled="selectedProduct.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap" @click="hidePopover"></Button>
                        <Button icon="pi pi-heart" variant="outlined" @click="hidePopover"></Button>
                    </div>
                </div>
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useToast } from "primevue/usetoast";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});

const op = ref();
const products = ref();
const selectedProduct = ref();

const displayProduct = (event, product) => {
    op.value.hide();

    if (selectedProduct.value?.id === product.id) {
        selectedProduct.value = null;
    } else {
        selectedProduct.value = product;

        nextTick(() => {
            op.value.show(event);
        });
    }
}

const hidePopover = () => {
    op.value.hide();
}

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}
<\/script>
```

</details>

## Select Data

In this sample, data is retrieved from the content inside the popover.

```vue
<Button type="button" :label="selectedMember ? selectedMember.name : 'Select Member'" @click="toggle" class="min-w-48" />

<Popover ref="op">
    <div class="flex flex-col gap-4">
        <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col">
                <li v-for="member in members" :key="member.name" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" @click="selectMember(member)">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${member.image}\`" style="width: 32px" />
                    <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</Popover>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button type="button" :label="selectedMember ? selectedMember.name : 'Select Member'" @click="toggle" class="min-w-48" />

        <Popover ref="op">
            <div class="flex flex-col gap-4">
                <div>
                    <span class="font-medium block mb-2">Team Members</span>
                    <ul class="list-none p-0 m-0 flex flex-col">
                        <li v-for="member in members" :key="member.name" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" @click="selectMember(member)">
                            <img :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${member.image}\`" style="width: 32px" />
                            <div>
                                <span class="font-medium">{{ member.name }}</span>
                                <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();
const selectedMember = ref(null);
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event) => {
    op.value.toggle(event);
}

const selectMember = (member) => {
    selectedMember.value = member;
    op.value.hide();
}
<\/script>
```

</details>

## Popover

### Props

| Name          | Type                                          | Default | Description                                                                          |
| ------------- | --------------------------------------------- | ------- | ------------------------------------------------------------------------------------ |
| dismissable   | boolean                                       | true    | Enables to hide the overlay when outside is clicked.                                 |
| appendTo      | HTMLElement \| HintedString<"body" \| "self"> | body    | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| baseZIndex    | number                                        | 0       | Base zIndex value to use in layering.                                                |
| autoZIndex    | boolean                                       | true    | Whether to automatically manage layering.                                            |
| breakpoints   | PopoverBreakpoints                            | -       | Object literal to define widths per screen size.                                     |
| dt            | any                                           | -       | It generates scoped CSS variables using design tokens for the component.             |
| pt            | PassThrough<PopoverPassThroughOptions>        | -       | Used to pass attributes to DOM elements inside the component.                        |
| ptOptions     | any                                           | -       | Used to configure passthrough(pt) options of the component.                          |
| unstyled      | boolean                                       | false   | When enabled, it removes component related styles in the core.                       |
| closeOnEscape | boolean                                       | true    | Specifies if pressing escape key should hide the dialog.                             |

## Pass Through Options

| Name       | Type                             | Description                                           |
| ---------- | -------------------------------- | ----------------------------------------------------- |
| root       | PopoverPassThroughOptionType     | Used to pass attributes to the root's DOM element.    |
| content    | PopoverPassThroughOptionType     | Used to pass attributes to the content's DOM element. |
| hooks      | any                              | Used to manage all lifecycle hooks.                   |
| transition | PopoverPassThroughTransitionType | Used to control Vue Transition API.                   |

## Theming

### CSS Classes

| Class             | Description                       |
| ----------------- | --------------------------------- |
| p-popover         | Class name of the root element    |
| p-popover-content | Class name of the content element |

### Design Tokens

| Token                   | CSS Variable                | Description           |
| ----------------------- | --------------------------- | --------------------- |
| popover.background      | --p-popover-background      | Background of root    |
| popover.border.color    | --p-popover-border-color    | Border color of root  |
| popover.color           | --p-popover-color           | Color of root         |
| popover.border.radius   | --p-popover-border-radius   | Border radius of root |
| popover.shadow          | --p-popover-shadow          | Shadow of root        |
| popover.gutter          | --p-popover-gutter          | Gutter of root        |
| popover.arrow.offset    | --p-popover-arrow-offset    | Arrow offset of root  |
| popover.content.padding | --p-popover-content-padding | Padding of content    |
