# Vue Select Component

Select is used to choose an item from a collection of options.

## Import

```javascript
import Select from 'primevue/select';
```

## Accessibility

Screen Reader Value to describe the component can either be provided with aria-labelledby or aria-label props. The select element has a combobox role in addition to aria-haspopup and aria-expanded attributes. If the editable option is enabled aria-autocomplete is also added. The relation between the combobox and the popup is created with aria-controls and aria-activedescendant attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. The popup list has an id that refers to the aria-controls attribute of the combobox element and uses listbox as the role. Each list item has an option role, an id to match the aria-activedescendant of the input element along with aria-label , aria-selected and aria-disabled attributes. If filtering is enabled, filterInputProps can be defined to give aria-* props to the filter input element. Closed State Keyboard Support Key Function tab Moves focus to the select element. space Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. enter Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. down arrow Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. up arrow Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus. any printable character Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none and select is not editable then first option receives the focus. Popup Keyboard Support Key Function tab Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page. shift + tab Moves focus to the previous focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page. enter Selects the focused option and closes the popup, then moves focus to the select element. space Selects the focused option and closes the popup, then moves focus to the select element. escape Closes the popup, then moves focus to the select element. down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. alt + up arrow Selects the focused option and closes the popup, then moves focus to the select element. left arrow If the select is editable, removes the visual focus from the current option and moves input cursor to one character left. right arrow If the select is editable, removes the visual focus from the current option and moves input cursor to one character right. home If the select is editable, moves input cursor at the end, if not then moves focus to the first option. end If the select is editable, moves input cursor at the beginning, if not then moves focus to the last option. pageUp Jumps visual focus to first option. pageDown Jumps visual focus to last option. any printable character Moves focus to the option whose label starts with the characters being typed if select is not editable. Filter Input Keyboard Support Key Function down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. left arrow Removes the visual focus from the current option and moves input cursor to one character left. right arrow Removes the visual focus from the current option and moves input cursor to one character right. home Moves input cursor at the end, if not then moves focus to the first option. end Moves input cursor at the beginning, if not then moves focus to the last option. enter Closes the popup and moves focus to the select element. escape Closes the popup and moves focus to the select element. tab Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.

```vue
<span id="dd1"></span>Options</span>
<select aria-labelledby="dd1" />

<select aria-label="Options" />
```

## Basic

Select is used with the v-model property for two-way value binding along with the options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```vue
<Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

## Checkmark

An alternative way to highlight the selected option is displaying a checkmark instead.

```vue
<Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" checkmark :highlightOnSelect="false" class="w-full md:w-56" />
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the Select.

```vue
<Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<Select disabled placeholder="Select a City" class="w-full md:w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Select disabled placeholder="Select a City" class="w-full md:w-56" />
    </div>
</template>

<script setup>

<\/script>
```
</details>

## Editable

When editable is present, the input can also be entered with typing.

```vue
<Select v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<Select v-model="selectedCity" variant="filled" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

## Filter

Select provides built-in filtering that is enabled by adding the filter property.

```vue
<Select v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-56">
    <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel class="w-full md:w-56">
    <Select v-model="value1" inputId="over_label" :options="cities" optionLabel="name" class="w-full" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-56" variant="in">
    <Select v-model="value2" inputId="in_label" :options="cities" optionLabel="name" class="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-56" variant="on">
    <Select v-model="value3" inputId="on_label" :options="cities" optionLabel="name" class="w-full" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" fluid />
```

## Group

Options can be grouped when a nested data structures is provided. To define the label of a group optionGroupLabel property is needed and also optionGroupChildren is required to define the property that refers to the children of a group.

```vue
<Select v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select a City" class="w-full md:w-56">
    <template #optiongroup="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" variant="filled" />
    <label for="dd-city">City</label>
</IftaLabel>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<Select v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity1" class="w-full md:w-56" />
<Select v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity2" class="w-full md:w-56" variant="filled" />
```

## Lazy Virtual Scroll

The virtual scrolling also supports dynamically loading items on demand.

```vue
<Select v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" class="w-full md:w-56"
    :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item" />
```

## Loading State

Loading state is enabled with the loading property.

```vue
<Select placeholder="Loading..." loading class="w-full md:w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Select placeholder="Loading..." loading class="w-full md:w-56" />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Sizes

Select provides small and large sizes as alternatives to the base.

```vue
<Select v-model="value1" :options="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
<Select v-model="value2" :options="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
<Select v-model="value3" :options="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
```

## Template

Select offers multiple slots for customization through templating.

```vue
<Select v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full md:w-56">
    <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Virtual Scroll

VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with virtualScrollerOptions property, refer to the VirtualScroller for more information about the available options as it is used internally by Select.

```vue
<Select v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
    :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-56" />
```

## Select

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | any | - | Value of the component. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| options | any[] | - | An array of select items to display as the available options. |
| optionLabel | string \| Function | - | Property name or getter function to use as the label of an option. |
| optionValue | string \| Function | - | Property name or getter function to use as the value of an option, defaults to the option itself when not defined. |
| optionDisabled | string \| Function | - | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. |
| optionGroupLabel | string \| Function | - | Property name or getter function to use as the label of an option group. |
| optionGroupChildren | string \| Function | - | Property name or getter function that refers to the children options of option group. |
| scrollHeight | string | 14rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| filter | boolean | false | When specified, displays a filter input at header. |
| filterPlaceholder | string | - | Placeholder text to show when filter input is empty. |
| filterLocale | string | - | Locale to use in filtering. The default locale is the host environment's current locale. |
| filterMatchMode | HintedString<"startsWith" \| "contains" \| "endsWith"> | contains | Defines the filtering algorithm to use when searching the options. |
| filterFields | string[] | - | Fields used when filtering the options, defaults to optionLabel. |
| editable | boolean | false | When present, custom value instead of predefined options can be entered using the editable input field. |
| placeholder | string | - | Default text to display when no option is selected. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| dataKey | string | - | A property to uniquely identify an option. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| inputId | string | - |  |
| inputStyle | object | - |  |
| inputClass | string \| object | - |  |
| labelId | string | - | Identifier of the underlying label element. |
| labelStyle | object | - | Inline style of the label field. |
| labelClass | string \| object | - | Style class of the label field. |
| panelStyle | object | - |  |
| panelClass | string \| object | - |  |
| overlayStyle | object | - | Inline style of the overlay. |
| overlayClass | string \| object | - | Style class of the overlay. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| loading | boolean | false | Whether the select is in loading state. |
| clearIcon | string | - | Icon to display in clear button. |
| dropdownIcon | string | - | Icon to display in the select. |
| filterIcon | string | - | Icon to display in filter input. |
| loadingIcon | string | - | Icon to display in loading state. |
| resetFilterOnHide | boolean | false | Clears the filter value when hiding the select. |
| resetFilterOnClear | boolean | false | Clears the filter value when clicking on the clear icon. |
| virtualScrollerOptions | any | - | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| autoFilterFocus | boolean | false | Whether to focus on the filter element when the overlay panel is shown. |
| selectOnFocus | boolean | false | When enabled, the focused option is selected. |
| focusOnHover | boolean | true | When enabled, the focus is placed on the hovered option. |
| highlightOnSelect | boolean | true | Whether the selected option will be add highlight class. |
| checkmark | boolean | false | Whether the selected option will be shown with a check mark. |
| filterMessage | string | '{0} results are available' | Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration. |
| selectionMessage | string | '{0} items selected' | Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration. |
| emptySelectionMessage | string | No selected item | Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration. |
| emptyFilterMessage | string | No results found | Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration. |
| emptyMessage | string | No available options | Text to display when there are no options available. Defaults to value from PrimeVue locale configuration. |
| tabindex | string \| number | - | Index of the element in tabbing order. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying input element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SelectPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Select

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | any | - | Value of the component. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| options | any[] | - | An array of select items to display as the available options. |
| optionLabel | string \| Function | - | Property name or getter function to use as the label of an option. |
| optionValue | string \| Function | - | Property name or getter function to use as the value of an option, defaults to the option itself when not defined. |
| optionDisabled | string \| Function | - | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. |
| optionGroupLabel | string \| Function | - | Property name or getter function to use as the label of an option group. |
| optionGroupChildren | string \| Function | - | Property name or getter function that refers to the children options of option group. |
| scrollHeight | string | 14rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| filter | boolean | false | When specified, displays a filter input at header. |
| filterPlaceholder | string | - | Placeholder text to show when filter input is empty. |
| filterLocale | string | - | Locale to use in filtering. The default locale is the host environment's current locale. |
| filterMatchMode | HintedString<"startsWith" \| "contains" \| "endsWith"> | contains | Defines the filtering algorithm to use when searching the options. |
| filterFields | string[] | - | Fields used when filtering the options, defaults to optionLabel. |
| editable | boolean | false | When present, custom value instead of predefined options can be entered using the editable input field. |
| placeholder | string | - | Default text to display when no option is selected. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| variant | null \| HintedString<"outlined" \| "filled"> | null | Specifies the input variant of the component. |
| dataKey | string | - | A property to uniquely identify an option. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| inputId | string | - |  |
| inputStyle | object | - |  |
| inputClass | string \| object | - |  |
| labelId | string | - | Identifier of the underlying label element. |
| labelStyle | object | - | Inline style of the label field. |
| labelClass | string \| object | - | Style class of the label field. |
| panelStyle | object | - |  |
| panelClass | string \| object | - |  |
| overlayStyle | object | - | Inline style of the overlay. |
| overlayClass | string \| object | - | Style class of the overlay. |
| appendTo | HTMLElement \| HintedString<"body" \| "self"> | body | A valid query selector or an HTMLElement to specify where the overlay gets attached. |
| loading | boolean | false | Whether the select is in loading state. |
| clearIcon | string | - | Icon to display in clear button. |
| dropdownIcon | string | - | Icon to display in the select. |
| filterIcon | string | - | Icon to display in filter input. |
| loadingIcon | string | - | Icon to display in loading state. |
| resetFilterOnHide | boolean | false | Clears the filter value when hiding the select. |
| resetFilterOnClear | boolean | false | Clears the filter value when clicking on the clear icon. |
| virtualScrollerOptions | any | - | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| autoFilterFocus | boolean | false | Whether to focus on the filter element when the overlay panel is shown. |
| selectOnFocus | boolean | false | When enabled, the focused option is selected. |
| focusOnHover | boolean | true | When enabled, the focus is placed on the hovered option. |
| highlightOnSelect | boolean | true | Whether the selected option will be add highlight class. |
| checkmark | boolean | false | Whether the selected option will be shown with a check mark. |
| filterMessage | string | '{0} results are available' | Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration. |
| selectionMessage | string | '{0} items selected' | Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration. |
| emptySelectionMessage | string | No selected item | Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration. |
| emptyFilterMessage | string | No results found | Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration. |
| emptyMessage | string | No available options | Text to display when there are no options available. Defaults to value from PrimeVue locale configuration. |
| tabindex | string \| number | - | Index of the element in tabbing order. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying input element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<SelectPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Selectbutton

## Selectbutton

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | SelectPassThroughOptionType<T> | Used to pass attributes to the root's DOM element. |
| label | SelectPassThroughOptionType<T> | Used to pass attributes to the label's DOM element. |
| clearIcon | SelectPassThroughOptionType<T> | Used to pass attributes to the clear icon's DOM element. |
| dropdown | SelectPassThroughOptionType<T> | Used to pass attributes to the dropdown's DOM element. |
| dropdownIcon | SelectPassThroughOptionType<T> | Used to pass attributes to the dropdown icon's DOM element. |
| loadingIcon | SelectPassThroughOptionType<T> | Used to pass attributes to the loading icon's DOM element. |
| overlay | SelectPassThroughOptionType<T> | Used to pass attributes to the overlay's DOM element. |
| header | SelectPassThroughOptionType<T> | Used to pass attributes to the header's DOM element. |
| pcFilterContainer | any | Used to pass attributes to the IconField component. |
| pcFilter | any | Used to pass attributes to the InputText component. |
| pcFilterIconContainer | any | Used to pass attributes to the InputIcon component. |
| filterIcon | SelectPassThroughOptionType<T> | Used to pass attributes to the filter icon's DOM element. |
| listContainer | SelectPassThroughOptionType<T> | Used to pass attributes to the list container's DOM element. |
| virtualScroller | any | Used to pass attributes to the VirtualScroller component. |
| list | SelectPassThroughOptionType<T> | Used to pass attributes to the list's DOM element. |
| optionGroup | SelectPassThroughOptionType<T> | Used to pass attributes to the option group's DOM element. |
| optionGroupLabel | SelectPassThroughOptionType<T> | Used to pass attributes to the option group label's DOM element. |
| option | SelectPassThroughOptionType<T> | Used to pass attributes to the option's DOM element. |
| optionLabel | SelectPassThroughOptionType<T> | Used to pass attributes to the option label's DOM element. |
| optionCheckIcon | SelectPassThroughOptionType<T> | Used to pass attributes to the option check icon's DOM element. |
| optionBlankIcon | SelectPassThroughOptionType<T> | Used to pass attributes to the option blank icon's DOM element. |
| emptyMessage | SelectPassThroughOptionType<T> | Used to pass attributes to the empty message's DOM element. |
| hiddenFirstFocusableEl | SelectPassThroughOptionType<T> | Used to pass attributes to the hidden first focusable element's DOM element. |
| hiddenFilterResult | SelectPassThroughOptionType<T> | Used to pass attributes to the hidden filter result's DOM element. |
| hiddenEmptyMessage | SelectPassThroughOptionType<T> | Used to pass attributes to the hidden empty message's DOM element. |
| hiddenSelectedMessage | SelectPassThroughOptionType<T> | Used to pass attributes to the hidden selected message's DOM element. |
| hiddenLastFocusableEl | SelectPassThroughOptionType<T> | Used to pass attributes to the hidden last focusable element's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | SelectPassThroughTransitionType<any> | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-select | Class name of the root element |
| p-select-label | Class name of the label element |
| p-select-clear-icon | Class name of the clear icon element |
| p-select-dropdown | Class name of the dropdown element |
| p-select-loading-icon | Class name of the loadingicon element |
| p-select-dropdown-icon | Class name of the dropdown icon element |
| p-select-overlay | Class name of the overlay element |
| p-select-header | Class name of the header element |
| p-select-filter | Class name of the filter element |
| p-select-list-container | Class name of the list container element |
| p-select-list | Class name of the list element |
| p-select-option-group | Class name of the option group element |
| p-select-option-group-label | Class name of the option group label element |
| p-select-option | Class name of the option element |
| p-select-option-label | Class name of the option label element |
| p-select-option-check-icon | Class name of the option check icon element |
| p-select-option-blank-icon | Class name of the option blank icon element |
| p-select-empty-message | Class name of the empty message element |

