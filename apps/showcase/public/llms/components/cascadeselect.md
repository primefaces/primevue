# Vue CascadeSelect Component

CascadeSelect is a form component to select a value from a nested structure of options.

## Import

```javascript
import CascadeSelect from 'primevue/cascadeselect';
```

## Accessibility

Screen Reader Value to describe the component can either be provided with aria-labelledby or aria-label props. The cascadeselect element has a combobox role in addition to aria-haspopup and aria-expanded attributes. The relation between the combobox and the popup is created with aria-controls that refers to the id of the popup. The popup list has an id that refers to the aria-controls attribute of the combobox element and uses tree as the role. Each list item has a treeitem role along with aria-label , aria-selected and aria-expanded attributes. The container element of a treenode has the group role. The aria-setsize , aria-posinset and aria-level attributes are calculated implicitly and added to each treeitem. Closed State Keyboard Support Key Function tab Moves focus to the cascadeselect element. space Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. enter Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. down arrow Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. up arrow Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus. any printable character Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none then first option receives the focus. Popup Keyboard Support Key Function tab Hides the popup and moves focus to the next tabbable element. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page. shift + tab Hides the popup and moves focus to the previous tabbable element. enter Selects the focused option and closes the popup. space Selects the focused option and closes the popup. escape Closes the popup, moves focus to the cascadeselect element. down arrow Moves focus to the next option. up arrow Moves focus to the previous option. alt + up arrow Selects the focused option and closes the popup, then moves focus to the cascadeselect element. right arrow If option is closed, opens the option otherwise moves focus to the first child option. left arrow If option is open, closes the option otherwise moves focus to the parent option. home Moves input cursor at the end, if not then moves focus to the first option. end Moves input cursor at the beginning, if not then moves focus to the last option. any printable character Moves focus to the option whose label starts with the characters being typed.

```vue
<span id="dd1"></span>Options</span>
<CascadeSelect aria-labelledby="dd1" />

<CascadeSelect aria-label="Options" />
```

## Basic

CascadeSelect is used with the v-model property for two-way value binding along with the options collection. To define the label of a group optionGroupLabel property is needed and also optionGroupChildren is required to define the property that refers to the children of a group. Note that order of the optionGroupChildren matters as it should correspond to the data hierarchy.

```vue
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the CascadeSelect.

```vue
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<CascadeSelect disabled placeholder="Disabled" class="w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <CascadeSelect disabled placeholder="Disabled" class="w-56" />
    </div>
</template>

<script setup>

<\/script>
```
</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<CascadeSelect v-model="selectedCity" variant="filled" :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel class="w-full md:w-56">
    <CascadeSelect v-model="value1" inputId="over_label" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-full" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-56">
    <CascadeSelect v-model="value2" inputId="in_label" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-56">
    <CascadeSelect v-model="value3" inputId="on_label" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-full" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<CascadeSelect v-model="selectedCity" fluid :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" placeholder="Select a City" />
```

## Forms

CascadeSelect integrates seamlessly with the PrimeVue Forms library.

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel class="w-full md:w-56">
    <CascadeSelect v-model="selectedCity" inputId="cs_city" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-full" variant="filled" />
    <label for="cs_city">City</label>
</IftaLabel>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<div class="card flex flex-wrap justify-center gap-4">
    <CascadeSelect v-model="selectedCity1" :invalid="!selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name" 
        :optionGroupChildren="['states', 'cities']" class="w-full sm:w-56" placeholder="Select a City" />
    <CascadeSelect v-model="selectedCity2" :invalid="!selectedCity2" :options="countries" optionLabel="cname" optionGroupLabel="name" 
        :optionGroupChildren="['states', 'cities']" class="w-full sm:w-56" placeholder="Select a City" variant="filled" />
</div>
```

## Loading State

Loading state can be used loading property.

```vue
<CascadeSelect loading placeholder="Loading..." class="w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <CascadeSelect loading placeholder="Loading..." class="w-56" />
    </div>
</template>

<script setup>

<\/script>
```
</details>

## Sizes

CascadeSelect provides small and large sizes as alternatives to the base.

```vue
<CascadeSelect v-model="value1" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" 
    class="w-56" size="small" placeholder="Small" />
<CascadeSelect v-model="value2" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" 
    class="w-56" placeholder="Normal" />
<CascadeSelect v-model="value3" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" 
    class="w-56" size="large" placeholder="Large" />
```

## Template

CascadeSelect offers multiple slots for customization through templating.

```vue
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City">
    <template #option="slotProps">
        <div class="flex items-center">
            <img v-if="slotProps.option.states" :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\
```

## Cascadeselect

## Cascadeselect

