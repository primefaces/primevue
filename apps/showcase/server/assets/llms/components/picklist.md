# Vue PickList Component

PickList is used to reorder items between different lists.

## Import

```javascript
import PickList from 'primevue/picklist';
```

## Accessibility

Screen Reader Value to describe the source listbox and target listbox can be provided with sourceListProps and targetListProps by passing aria-labelledby or aria-label props. The list elements has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected as their attributes. Controls buttons are button elements with an aria-label that refers to the aria.moveTop , aria.moveUp , aria.moveDown , aria.moveBottom , aria.moveToTarget , aria.moveAllToTarget , aria.moveToSource and aria.moveAllToSource properties of the locale API by default, alternatively you may use moveTopButtonProps , moveUpButtonProps , moveDownButtonProps , moveToButtonProps , moveAllToButtonProps , moveFromButtonProps , moveFromButtonProps moveAllFromButtonProps moveToTargetProps , moveAllToTargetProps , moveToSourceProps and moveAllToSourceProps to customize the buttons like overriding the default aria-label attributes. ListBox Keyboard Support Key Function tab Moves focus to the first selected option, if there is none then first option receives the focus. up arrow Moves focus to the previous option. down arrow Moves focus to the next option. enter Toggles the selected state of the focused option. space Toggles the selected state of the focused option. home Moves focus to the first option. end Moves focus to the last option. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the first one. control + a Selects all options. Buttons Keyboard Support Key Function enter Executes button action. space Executes button action.

```vue
<span id="lb">Options</span>
<PickList aria-labelledby="lb" />

<PickList aria-label="City" />
```

## Basic

PickList requires a multidimensional array as its value bound with the v-model directive and a template for its content that gets the option instance and the index via slotProps.

```vue
<PickList v-model="products" dataKey="id" breakpoint="1400px">
    <template #option="{ option  }">
        {{ option.name }}
    </template>
</PickList>
```

## Template

For custom content support define an option template that gets the item instance as a parameter. In addition sourceheader and targetheader slots are provided for further customization.

```vue
<PickList v-model="products" dataKey="id" breakpoint="1400px" scrollHeight="20rem">
    <template #option="{ option , selected }">
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
            </div>
            <span class="font-bold">\${{ option.price }}</span>
        </div>
    </template>
</PickList>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <PickList v-model="products" dataKey="id" breakpoint="1400px">
            <template #option="{ option , selected }">
                <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                    <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
                    <div class="flex-1 flex flex-col">
                        <span class="font-medium text-sm">{{ option.name }}</span>
                        <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
                    </div>
                    <span class="font-bold">\${{ option.price }}</span>
                </div>
            </template>
        </PickList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = [data, []]));
});
<\/script>
```

</details>

## Pick List

### Props

| Name                  | Type                                    | Default | Description                                                                                                                                                                                                                                                                        |
| --------------------- | --------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue            | any[][]                                 | -       | Value of the component as a multidimensional array.                                                                                                                                                                                                                                |
| selection             | any[][]                                 | -       | Selected items in the list as a multidimensional array.                                                                                                                                                                                                                            |
| dataKey               | string                                  | -       | Name of the field that uniquely identifies the a record in the data.                                                                                                                                                                                                               |
| metaKeySelection      | boolean                                 | false   | Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| autoOptionFocus       | boolean                                 | true    | Whether to focus on the first visible or selected element.                                                                                                                                                                                                                         |
| focusOnHover          | boolean                                 | true    | When enabled, the focus is placed on the hovered option.                                                                                                                                                                                                                           |
| listStyle             | any                                     | -       | Inline style of the the list element.                                                                                                                                                                                                                                              |
| responsive            | boolean                                 | true    | Whether the list optimizes layout based on screen size.                                                                                                                                                                                                                            |
| breakpoint            | string                                  | 960px   | The breakpoint to define the maximum width boundary when responsiveness is enabled.                                                                                                                                                                                                |
| scrollHeight          | string                                  | 14rem   | Height of the viewport, a scrollbar is defined if height of list exceeds this value.                                                                                                                                                                                               |
| striped               | boolean                                 | false   | Whether to displays rows with alternating colors.                                                                                                                                                                                                                                  |
| showSourceControls    | boolean                                 | true    | Whether to show buttons of source list.                                                                                                                                                                                                                                            |
| showTargetControls    | boolean                                 | true    | Whether to show buttons of target list.                                                                                                                                                                                                                                            |
| buttonProps           | object                                  | -       | Used to pass all properties of the ButtonProps to the move up button inside the component.                                                                                                                                                                                         |
| moveUpButtonProps     | object                                  | -       | Used to pass all properties of the ButtonProps to the move up button inside the component.                                                                                                                                                                                         |
| moveTopButtonProps    | object                                  | -       | Used to pass all properties of the ButtonProps to the move top button inside the component.                                                                                                                                                                                        |
| moveDownButtonProps   | object                                  | -       | Used to pass all properties of the ButtonProps to the move down button inside the component.                                                                                                                                                                                       |
| moveBottomButtonProps | object                                  | -       | Used to pass all properties of the ButtonProps to the move bottom button inside the component.                                                                                                                                                                                     |
| moveToTargetProps     | object                                  | -       | Used to pass all properties of the ButtonProps to the move to target button inside the component.                                                                                                                                                                                  |
| moveAllToTargetProps  | object                                  | -       | Used to pass all properties of the ButtonProps to the move all to target button inside the component.                                                                                                                                                                              |
| moveToSourceProps     | object                                  | -       | Used to pass all properties of the ButtonProps to the move to source button inside the component.                                                                                                                                                                                  |
| moveAllToSourceProps  | object                                  | -       | Used to pass all properties of the ButtonProps to the move all to source button inside the component.                                                                                                                                                                              |
| tabindex              | string \| number                        | -       | Index of the list element in tabbing order.                                                                                                                                                                                                                                        |
| dt                    | any                                     | -       | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                                           |
| pt                    | PassThrough<PickListPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                                      |
| ptOptions             | any                                     | -       | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                                        |
| unstyled              | boolean                                 | false   | When enabled, it removes component related styles in the core.                                                                                                                                                                                                                     |

## Pass Through Options

| Name                     | Type                              | Description                                                          |
| ------------------------ | --------------------------------- | -------------------------------------------------------------------- |
| root                     | PickListPassThroughOptionType     | Used to pass attributes to the root's DOM element.                   |
| sourceControls           | PickListPassThroughOptionType     | Used to pass attributes to the source controls' DOM element.         |
| pcSourceMoveUpButton     | any                               | Used to pass attributes to the Button component.                     |
| pcSourceMoveTopButton    | any                               | Used to pass attributes to the Button component.                     |
| pcSourceMoveDownButton   | any                               | Used to pass attributes to the Button component.                     |
| pcSourceMoveBottomButton | any                               | Used to pass attributes to the Button component.                     |
| pcListbox                | any                               | Used to pass attributes to the Listbox component.                    |
| sourceListContainer      | PickListPassThroughOptionType     | Used to pass attributes to the source list containerr's DOM element. |
| transferControls         | PickListPassThroughOptionType     | Used to pass attributes to the transfer controls' DOM element.       |
| pcMoveToTargetButton     | any                               | Used to pass attributes to the Button component.                     |
| pcMoveAllToTargetButton  | any                               | Used to pass attributes to the Button component.                     |
| pcMoveToSourceButton     | any                               | Used to pass attributes to the Button component.                     |
| pcMoveAllToSourceButton  | any                               | Used to pass attributes to the Button component.                     |
| targetListContainer      | PickListPassThroughOptionType     | Used to pass attributes to the target list container's DOM element.  |
| targetControls           | PickListPassThroughOptionType     | Used to pass attributes to the target controls' DOM element.         |
| pcTargetMoveUpButton     | any                               | Used to pass attributes to the Button component.                     |
| pcTargetMoveTopButton    | any                               | Used to pass attributes to the Button component.                     |
| pcTargetMoveDownButton   | any                               | Used to pass attributes to the Button component.                     |
| pcTargetMoveBottomButton | any                               | Used to pass attributes to the Button component.                     |
| hooks                    | any                               | Used to manage all lifecycle hooks.                                  |
| transition               | PickListPassThroughTransitionType | Used to control Vue Transition API.                                  |

## Theming

### CSS Classes

| Class                            | Description                                     |
| -------------------------------- | ----------------------------------------------- |
| p-picklist                       | Class name of the root element                  |
| p-picklist-source-controls       | Class name of the source controls element       |
| p-picklist-source-list-container | Class name of the source list container element |
| p-picklist-transfer-controls     | Class name of the transfer controls element     |
| p-picklist-target-list-container | Class name of the target list container element |
| p-picklist-target-controls       | Class name of the target controls element       |

### Design Tokens

| Token                 | CSS Variable              | Description     |
| --------------------- | ------------------------- | --------------- |
| picklist.gap          | --p-picklist-gap          | Gap of root     |
| picklist.controls.gap | --p-picklist-controls-gap | Gap of controls |
