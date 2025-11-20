# Vue MultiSelect Component

MultiSelect is used to select multiple items from a collection.

## Import

```javascript
import MultiSelect from 'primevue/multiselect';
```

## Accessibility

Screen Reader Value to describe the component can either be provided with aria-labelledby or aria-label props. The multiselect component has a combobox role in addition to aria-haspopup and aria-expanded attributes. The relation between the combobox and the popup is created with aria-controls attribute that refers to the id of the popup listbox. The popup listbox uses listbox as the role with aria-multiselectable enabled. Each list item has an option role along with aria-label , aria-selected and aria-disabled attributes. Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the selectAll and unselectAll keys of the aria property from the locale API. If filtering is enabled, filterInputProps can be defined to give aria-* props to the input element. Close button uses close key of the aria property from the locale API as the aria-label by default, this can be overridden with the closeButtonProps . Closed State Keyboard Support Key Function tab Moves focus to the multiselect element. space Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. enter Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. down arrow Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. up arrow Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. any printable character Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none then first option receives the focus. Popup Keyboard Support Key Function tab Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus. shift + tab Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus. enter Toggles the selection state of the focused option, then moves focus to the multiselect element. space Toggles the selection state of the focused option, then moves focus to the multiselect element. escape Closes the popup, moves focus to the multiselect element. down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. alt + up arrow Selects the focused option and closes the popup, then moves focus to the multiselect element. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. home Moves focus to the first option. end Moves focus to the last option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the last one. control + a Selects all options. pageUp Jumps visual focus to first option. pageDown Jumps visual focus to last option. any printable character Moves focus to the option whose label starts with the characters being typed. Toggle All Checkbox Keyboard Support Key Function space Toggles the checked state. escape Closes the popup and moves focus to the multiselect element. Filter Input Keyboard Support Key Function down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. left arrow Removes the visual focus from the current option and moves input cursor to one character left. right arrow Removes the visual focus from the current option and moves input cursor to one character right. home Moves input cursor at the end, if not then moves focus to the first option. end Moves input cursor at the beginning, if not then moves focus to the last option. enter Closes the popup and moves focus to the multiselect element. escape Closes the popup and moves focus to the multiselect element. tab Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.

```vue
<span id="dd1"></span>Options</span>
<MultiSelect aria-labelledby="dd1" />

<MultiSelect aria-label="Options" />
```

## Basic

MultiSelect is used with the v-model property for two-way value binding along with the options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```vue
<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-80" />
```

## Chips

Selected values are displayed as a comma separated list by default, setting display as chip displays them as chips.

```vue
<MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" filter placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-80" />
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the MultiSelect.

```vue
<MultiSelect v-model="selectedCities" showClear :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<MultiSelect disabled placeholder="Select Cities" class="w-full md:w-80" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="flex justify-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-80" />
    </div>
</template>

<script setup>

<\/script>
```
</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<MultiSelect v-model="selectedCities" variant="filled" :options="cities" optionLabel="name" filter placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-80" />
```

## Filter

Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable filter property. By default, optionLabel is used when searching and filterFields can be used to customize the fields being utilized. Furthermore, filterMatchMode is available to define the search algorithm. Valid values are "contains" (default), "startsWith" and "endsWith".

```vue
<MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-80" />
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel class="w-full md:w-80">
    <MultiSelect id="over_label" v-model="value1" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-80" variant="in">
    <MultiSelect id="in_label" v-model="value2" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-80" variant="on">
    <MultiSelect id="on_label" v-model="value3" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Group

Options can be grouped when a nested data structures is provided. To define the label of a group optionGroupLabel property is needed and also optionGroupChildren is required to define the property that refers to the children of a group.

```vue
<MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" filter optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-80">
    <template #optiongroup="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <MultiSelect v-model="selectedCities" inputId="ms_cities" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" variant="filled" />
    <label for="ms_cities">Cities</label>
</IftaLabel>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
        :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
<MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
        :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
```

## Loading State

Loading state can be used loading property.

```vue
<MultiSelect placeholder="Loading..." loading class="w-full md:w-80"></MultiSelect>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect placeholder="Loading..." loading class="w-full md:w-80"></MultiSelect>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Sizes

MultiSelect provides small and large sizes as alternatives to the base.

```vue
<MultiSelect v-model="value1" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" size="small" placeholder="Small" />
<MultiSelect v-model="value2" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" placeholder="Normal" />
<MultiSelect v-model="value3" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" size="large" placeholder="Large" />
```

## Template

MultiSelect offers multiple slots for customization through templating.

```vue
<MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
    <template #option="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## VirtualScroll

VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with virtualScrollerOptions property, refer to the VirtualScroller for more information about the available options as it is used internally by MultiSelect.

```vue
<MultiSelect v-model="selectedItems" :options="items" :maxSelectedLabels="3" :selectAll="selectAll" optionLabel="label" optionValue="value"
    @selectall-change="onSelectAllChange($event)" @change="onChange($event)" :virtualScrollerOptions="{ itemSize: 44 }" filter placeholder="Select Item" class="w-full md:w-80" />
```

## Multiselect

## Multiselect

