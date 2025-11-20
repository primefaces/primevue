# Vue Listbox Component

Listbox is used to select one or more values from a list of items.

## Import

```javascript
import Listbox from 'primevue/listbox';
```

## Accessibility

Screen Reader Value to describe the component can be provided aria-labelledby or aria-label props. The list element has a listbox role with the aria-multiselectable attribute that sets to true when multiple selection is enabled. Each list item has an option role with aria-selected and aria-disabled as their attributes. If filtering is enabled, filterInputProps can be defined to give aria-* props to the input element. Alternatively filterPlaceholder is usually utilized by the screen readers as well. Keyboard Support Key Function tab Moves focus to the first selected option, if there is none then first option receives the focus. up arrow Moves focus to the previous option. down arrow Moves focus to the next option. enter Toggles the selected state of the focused option. space Toggles the selected state of the focused option. home Moves focus to the first option. end Moves focus to the last option. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the last one. control + a Selects all options. pageUp Jumps visual focus to first option. pageDown Jumps visual focus to last option. any printable character Moves focus to the option whose label starts with the characters being typed. Filter Input Keyboard Support Key Function down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. left arrow Removes the visual focus from the current option and moves input cursor to one character left. right arrow Removes the visual focus from the current option and moves input cursor to one character right. home Moves input cursor at the end, if not then moves focus to the first option. end Moves input cursor at the beginning, if not then moves focus to the last option. enter Closes the popup and moves focus to the multiselect element. escape Closes the popup and moves focus to the multiselect element. tab Moves focus to the next focusable element in the component. If there is none, moves focus to next element in page.

```vue
<span id="lb"></span>Options</span>
<Listbox aria-labelledby="lb" />

<Listbox aria-label="City" />
```

## Basic

Listbox is used with the v-model property for two-way value binding along with the options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```vue
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56" />
```

## Checkmark

An alternative way to highlight the selected option is displaying a checkmark instead.

```vue
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" checkmark :highlightOnSelect="false" class="w-full md:w-56" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<Listbox v-model="selectedCity" disabled :options="cities" optionLabel="name" class="w-full md:w-56" />
```

## Filter

Listbox provides built-in filtering that is enabled by adding the filter property.

```vue
<Listbox v-model="selectedCity" :options="cities" filter optionLabel="name" class="w-full md:w-56" />
```

## Forms

Listbox integrates seamlessly with the PrimeVue Forms library.

## Group

Options can be grouped when a nested data structures is provided. To define the label of a group optionGroupLabel property is needed and also optionGroupChildren is required to define the property that refers to the children of a group.

```vue
<Listbox v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-56" listStyle="max-height:250px">
    <template #optiongroup="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" :invalid="selectedCity === null"  class="w-full md:w-56" />
```

## Multiple

Listbox allows choosing a single item by default, enable multiple property to choose more than one. When the optional metaKeySelection is present, behavior is changed in a way that selecting a new item requires meta key to be present.

```vue
<Listbox v-model="selectedCity" :options="cities" multiple optionLabel="name" class="w-full md:w-56" />
```

## Template

Custom content for an option is displayed with the option slot that takes an option as a parameter. Additional available templating sections are filter and optionGroup .

```vue
<Listbox v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full md:w-56" listStyle="max-height:250px">
    <template #option="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Virtual Scroll

VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with virtualScrollerOptions property, refer to the VirtualScroller for more information about the available options as it is used internally by Listbox.

```vue
<Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
    :virtualScrollerOptions="{ itemSize: 38 }" class="w-full md:w-56" listStyle="height:250px" striped />
```

## Listbox

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | any | - | Value of the component. |
| defaultValue | any | - | The default value for the input when not controlled by  `modelValue` . |
| name | string | - | The name attribute for the element, typically used in form submissions. |
| options | any[] | - | An array of selectitems to display as the available options. |
| optionLabel | string \| Function | - | Property name or getter function to use as the label of an option. |
| optionValue | string \| Function | - | Property name or getter function to use as the value of an option, defaults to the option itself when not defined. |
| optionDisabled | string \| Function | - | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. |
| optionGroupLabel | string \| Function | - | Property name or getter function to use as the label of an option group. |
| optionGroupChildren | string \| Function | - | Property name or getter function that refers to the children options of option group. |
| listStyle | string | - | Inline style of inner list element. |
| scrollHeight | string | 14rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| disabled | boolean | false | When specified, disables the component. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| dataKey | string | - | A property to uniquely identify an option. |
| multiple | boolean | false | When specified, allows selecting multiple values. |
| metaKeySelection | boolean | false | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| filter | boolean | false | When specified, displays a filter input at header. |
| filterPlaceholder | string | - | Placeholder text to show when filter input is empty. |
| filterLocale | string | - | Locale to use in filtering. The default locale is the host environment's current locale. |
| filterMatchMode | HintedString<"startsWith" \| "contains" \| "endsWith"> | contains | Defines the filtering algorithm to use when searching the options. |
| filterFields | string[] | - | Fields used when filtering the options, defaults to optionLabel. |
| virtualScrollerOptions | any | - | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element. |
| selectOnFocus | boolean | false | When enabled, the focused option is selected. |
| focusOnHover | boolean | true | When enabled, the focus is placed on the hovered option. |
| highlightOnSelect | boolean | true | Whether the selected option will be add highlight class. |
| checkmark | boolean | false | Whether the selected option will be shown with a check mark. |
| filterMessage | string | '{0} results are available' | Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration. |
| selectionMessage | string | '{0} items selected' | Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration. |
| emptySelectionMessage | string | No selected item | Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration. |
| emptyFilterMessage | string | No results found | Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration. |
| emptyMessage | string | No available options | Text to display when there are no options available. Defaults to value from PrimeVue locale configuration. |
| striped | boolean | false | Whether to displays rows with alternating colors. |
| tabindex | string \| number | - | Index of the element in tabbing order. |
| filterIcon | string | - | Icon to display in filter input. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaLabelledby | string | - | Identifier of the underlying input element. |
| formControl | Record<string, any> | - | Form control object, typically used for handling validation and form state. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ListboxPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | ListboxPassThroughOptionType<T> | Used to pass attributes to the root's DOM element. |
| header | ListboxPassThroughOptionType<T> | Used to pass attributes to the header's DOM element. |
| pcFilterContainer | any | Used to pass attributes to the IconField component. |
| pcFilter | any | Used to pass attributes to the InputText component. |
| pcFilterIconContainer | any | Used to pass attributes to the InputIcon component. |
| filterIcon | ListboxPassThroughOptionType<T> | Used to pass attributes to the filter icon's DOM element. |
| listContainer | ListboxPassThroughOptionType<T> | Used to pass attributes to the list container's DOM element. |
| virtualScroller | any | Used to pass attributes to the VirtualScroller component. |
| list | ListboxPassThroughOptionType<T> | Used to pass attributes to the list's DOM element. |
| optionGroup | ListboxPassThroughOptionType<T> | Used to pass attributes to the option group's DOM element. |
| option | ListboxPassThroughOptionType<T> | Used to pass attributes to the option's DOM element. |
| optionCheckIcon | ListboxPassThroughOptionType<T> | Used to pass attributes to the option check icon's DOM element. |
| optionBlankIcon | ListboxPassThroughOptionType<T> | Used to pass attributes to the option blank icon's DOM element. |
| emptyMessage | ListboxPassThroughOptionType<T> | Used to pass attributes to the emptyMessage's DOM element. |
| hiddenFirstFocusableEl | ListboxPassThroughOptionType<T> | Used to pass attributes to the hidden first focusable element's DOM element. |
| hiddenFilterResult | ListboxPassThroughOptionType<T> | Used to pass attributes to the hidden filter result's DOM element. |
| hiddenSelectedMessage | ListboxPassThroughOptionType<T> | Used to pass attributes to the hidden selected message's DOM element. |
| hiddenLastFocusableEl | ListboxPassThroughOptionType<T> | Used to pass attributes to the hidden last focusable element's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-listbox | Class name of the root element |
| p-listbox-header | Class name of the header element |
| p-listbox-filter | Class name of the filter element |
| p-listbox-list-container | Class name of the list container element |
| p-listbox-list | Class name of the list element |
| p-listbox-option-group | Class name of the option group element |
| p-listbox-option | Class name of the option element |
| p-listbox-option-check-icon | Class name of the option check icon element |
| p-listbox-option-blank-icon | Class name of the option blank icon element |
| p-listbox-empty-message | Class name of the empty message element |

