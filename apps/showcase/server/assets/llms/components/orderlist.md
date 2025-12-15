# Vue OrderList Component

OrderList is used to sort a collection.

## Import

```javascript
import OrderList from 'primevue/orderlist';
```

## Accessibility

Screen Reader Value to describe the listbox can be provided with listProps by passing aria-labelledby or aria-label props. The list element has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected and aria-disabled as their attributes. Controls buttons are button elements with an aria-label that refers to the aria.moveTop , aria.moveUp , aria.moveDown and aria.moveBottom properties of the locale API by default, alternatively you may use moveTopButtonProps , moveUpButtonProps , moveDownButtonProps and moveBottomButtonProps to customize the buttons like overriding the default aria-label attributes. ListBox Keyboard Support Key Function tab Moves focus to the first selected option, if there is none then first option receives the focus. up arrow Moves focus to the previous option. down arrow Moves focus to the next option. enter Toggles the selected state of the focused option. space Toggles the selected state of the focused option. home Moves focus to the first option. end Moves focus to the last option. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the first one. control + a Selects all options. Buttons Keyboard Support Key Function enter Executes button action. space Executes button action.

```vue
<span id="lb">Options</span>
<OrderList aria-labelledby="lb" />

<OrderList aria-label="City" />
```

## Basic

OrderList requires an array as its value bound with the v-model directive and option template for its content.

```vue
<OrderList v-model="products" dataKey="id" breakpoint="575px" pt:pcListbox:root="w-full sm:w-56">
    <template #option="{ option }">
        {{ option.name }}
    </template>
</OrderList>
```

## Template

For custom content support define an option template that gets the item instance as a parameter. In addition header slot is provided for further customization.

```vue
<OrderList v-model="products" dataKey="id" breakpoint="575px" scrollHeight="20rem">
    <template #option="{ option , selected }">
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
            </div>
            <span class="font-bold sm:ml-8">\${{ option.price }}</span>
        </div>
    </template>
</OrderList>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card sm:flex sm:justify-center">
        <OrderList v-model="products" dataKey="id" breakpoint="575px" scrollHeight="20rem">
            <template #option="{ option , selected }">
                <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                    <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
                    <div class="flex-1 flex flex-col">
                        <span class="font-medium text-sm">{{ option.name }}</span>
                        <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
                    </div>
                    <span class="font-bold sm:ml-8">\${{ option.price }}</span>
                </div>
            </template>
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});
<\/script>
```

</details>

## Order List

### Props

| Name                  | Type                                     | Default | Description                                                                                                                                                                                                                                                                         |
| --------------------- | ---------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue            | any[]                                    | -       | Value of the component.                                                                                                                                                                                                                                                             |
| dataKey               | string                                   | -       | Name of the field that uniquely identifies the a record in the data.                                                                                                                                                                                                                |
| selection             | any[]                                    | -       | Selected items in the list.                                                                                                                                                                                                                                                         |
| metaKeySelection      | boolean                                  | false   | Defines whether metaKey is required or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| autoOptionFocus       | boolean                                  | true    | Whether to focus on the first visible or selected element.                                                                                                                                                                                                                          |
| focusOnHover          | boolean                                  | true    | When enabled, the focus is placed on the hovered option.                                                                                                                                                                                                                            |
| listStyle             | any                                      | -       | Inline style of the the list element.                                                                                                                                                                                                                                               |
| responsive            | boolean                                  | true    | Whether the list optimizes layout based on screen size.                                                                                                                                                                                                                             |
| breakpoint            | string                                   | 960px   | The breakpoint to define the maximum width boundary when responsiveness is enabled.                                                                                                                                                                                                 |
| striped               | boolean                                  | false   | Whether to displays rows with alternating colors.                                                                                                                                                                                                                                   |
| tabindex              | string \| number                         | -       | Index of the element in tabbing order.                                                                                                                                                                                                                                              |
| scrollHeight          | string                                   | 14rem   | Height of the viewport, a scrollbar is defined if height of list exceeds this value.                                                                                                                                                                                                |
| buttonProps           | object                                   | -       | Used to pass all properties of the ButtonProps to the button inside the component.                                                                                                                                                                                                  |
| moveUpButtonProps     | object                                   | -       | Used to pass all properties of the ButtonProps to the move up button inside the component.                                                                                                                                                                                          |
| moveTopButtonProps    | object                                   | -       | Used to pass all properties of the ButtonProps to the move top button inside the component.                                                                                                                                                                                         |
| moveDownButtonProps   | object                                   | -       | Used to pass all properties of the ButtonProps to the move down button inside the component.                                                                                                                                                                                        |
| moveBottomButtonProps | object                                   | -       | Used to pass all properties of the ButtonProps to the move bottom button inside the component.                                                                                                                                                                                      |
| ariaLabel             | string                                   | -       | Defines a string value that labels an interactive list element.                                                                                                                                                                                                                     |
| ariaLabelledby        | string                                   | -       | Identifier of the underlying list element.                                                                                                                                                                                                                                          |
| dt                    | any                                      | -       | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                                            |
| pt                    | PassThrough<OrderListPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                                       |
| ptOptions             | any                                      | -       | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                                         |
| unstyled              | boolean                                  | false   | When enabled, it removes component related styles in the core.                                                                                                                                                                                                                      |

## Pass Through Options

| Name               | Type                               | Description                                           |
| ------------------ | ---------------------------------- | ----------------------------------------------------- |
| root               | OrderListPassThroughOptionType     | Used to pass attributes to the root's DOM element.    |
| controls           | OrderListPassThroughOptionType     | Used to pass attributes to the controls' DOM element. |
| pcMoveUpButton     | any                                | Used to pass attributes to the Button component.      |
| pcMoveTopButton    | any                                | Used to pass attributes to the Button component.      |
| pcMoveDownButton   | any                                | Used to pass attributes to the Button component.      |
| pcMoveBottomButton | any                                | Used to pass attributes to the Button component.      |
| pcListbox          | any                                | Used to pass attributes to the Listbox component.     |
| hooks              | any                                | Used to manage all lifecycle hooks.                   |
| transition         | OrderListPassThroughTransitionType | Used to control Vue Transition API.                   |

## Theming

### CSS Classes

| Class                | Description                        |
| -------------------- | ---------------------------------- |
| p-orderlist          | Class name of the root element     |
| p-orderlist-controls | Class name of the controls element |

### Design Tokens

| Token                  | CSS Variable               | Description     |
| ---------------------- | -------------------------- | --------------- |
| orderlist.gap          | --p-orderlist-gap          | Gap of root     |
| orderlist.controls.gap | --p-orderlist-controls-gap | Gap of controls |
