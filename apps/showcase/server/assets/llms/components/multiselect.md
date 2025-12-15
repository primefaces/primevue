# Vue MultiSelect Component

MultiSelect is used to select multiple items from a collection.

## Import

```javascript
import MultiSelect from 'primevue/multiselect';
```

## Accessibility

Screen Reader Value to describe the component can either be provided with aria-labelledby or aria-label props. The multiselect component has a combobox role in addition to aria-haspopup and aria-expanded attributes. The relation between the combobox and the popup is created with aria-controls attribute that refers to the id of the popup listbox. The popup listbox uses listbox as the role with aria-multiselectable enabled. Each list item has an option role along with aria-label , aria-selected and aria-disabled attributes. Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the selectAll and unselectAll keys of the aria property from the locale API. If filtering is enabled, filterInputProps can be defined to give aria-\* props to the input element. Close button uses close key of the aria property from the locale API as the aria-label by default, this can be overridden with the closeButtonProps . Closed State Keyboard Support Key Function tab Moves focus to the multiselect element. space Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. enter Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. down arrow Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. up arrow Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus. any printable character Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none then first option receives the focus. Popup Keyboard Support Key Function tab Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus. shift + tab Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus. enter Toggles the selection state of the focused option, then moves focus to the multiselect element. space Toggles the selection state of the focused option, then moves focus to the multiselect element. escape Closes the popup, moves focus to the multiselect element. down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. alt + up arrow Selects the focused option and closes the popup, then moves focus to the multiselect element. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. home Moves focus to the first option. end Moves focus to the last option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the last one. control + a Selects all options. pageUp Jumps visual focus to first option. pageDown Jumps visual focus to last option. any printable character Moves focus to the option whose label starts with the characters being typed. Toggle All Checkbox Keyboard Support Key Function space Toggles the checked state. escape Closes the popup and moves focus to the multiselect element. Filter Input Keyboard Support Key Function down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. left arrow Removes the visual focus from the current option and moves input cursor to one character left. right arrow Removes the visual focus from the current option and moves input cursor to one character right. home Moves input cursor at the end, if not then moves focus to the first option. end Moves input cursor at the beginning, if not then moves focus to the last option. enter Closes the popup and moves focus to the multiselect element. escape Closes the popup and moves focus to the multiselect element. tab Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.

```vue
<span id="dd1"></span>Options</span>
<MultiSelect aria-labelledby="dd1" />

<MultiSelect aria-label="Options" />
```

## Basic

MultiSelect is used with the v-model property for two-way value binding along with the options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```vue
<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
```

## Chips

Selected values are displayed as a comma separated list by default, setting display as chip displays them as chips.

```vue
<MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" filter placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

## Clear Icon

When showClear is enabled, a clear icon is added to reset the MultiSelect.

```vue
<MultiSelect v-model="selectedCities" showClear :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCities" showClear :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

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
<MultiSelect v-model="selectedCities" variant="filled" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCities" variant="filled" :options="cities" optionLabel="name" filter placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

## Filter

Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable filter property. By default, optionLabel is used when searching and filterFields can be used to customize the fields being utilized. Furthermore, filterMatchMode is available to define the search algorithm. Valid values are "contains" (default), "startsWith" and "endsWith".

```vue
<MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
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
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

## Forms

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-1">
        <MultiSelect name="city" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
        <Message v-if="$form.city?.invalid" severity="error" size="small" variant="simple">{{ $form.city.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-1">
                <MultiSelect name="city" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
                <Message v-if="$form.city?.invalid" severity="error" size="small" variant="simple">{{ $form.city.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    city: []
});
const resolver = ref(zodResolver(
    z.object({
        city: z
            .array(
                z.object({
                    name: z.string().min(1, 'City is required.')
                })
            )
            .min(1, 'City is required.')
    })
));
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Group

Options can be grouped when a nested data structures is provided. To define the label of a group optionGroupLabel property is needed and also optionGroupChildren is required to define the property that refers to the children of a group.

```vue
<MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" filter optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-80">
    <template #optiongroup="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.label }}</div>
        </div>
    </template>
</MultiSelect>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" filter optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-80">
            <template #optiongroup="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const groupedCities = ref([
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
]);
<\/script>
```

</details>

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <MultiSelect v-model="selectedCities" inputId="ms_cities" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" variant="filled" />
    <label for="ms_cities">Cities</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel class="w-full md:w-80">
            <MultiSelect v-model="selectedCities" inputId="ms_cities" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full"variant="filled" />
            <label for="ms_cities">Cities</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
<MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities"
                :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
        <MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities"
                :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities1 = ref([]);
const selectedCities2 = ref([]);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <MultiSelect v-model="value1" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" size="small" placeholder="Small" />
        <MultiSelect v-model="value2" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" placeholder="Normal" />
        <MultiSelect v-model="value3" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" size="large" placeholder="Large" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
```

</details>

## Template

MultiSelect offers multiple slots for customization through templating.

```vue
<MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
    <template #option="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
    <template #dropdownicon>
        <i class="pi pi-map" />
    </template>
    <template #filtericon>
        <i class="pi pi-map-marker" />
    </template>
    <template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </template>
    <template #footer>
        <div class="p-3 flex justify-between">
            <Button label="Add New" severity="secondary" variant="text" size="small" icon="pi pi-plus" />
            <Button label="Remove All" severity="danger" variant="text" size="small" icon="pi pi-times" />
        </div>
    </template>
</MultiSelect>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #dropdownicon>
                <i class="pi pi-map" />
            </template>
            <template #filtericon>
                <i class="pi pi-map-marker" />
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="p-3 flex justify-between">
                    <Button label="Add New" severity="secondary" variant="text" size="small" icon="pi pi-plus" />
                    <Button label="Remove All" severity="danger" variant="text" size="small" icon="pi pi-times" />
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountries = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);
<\/script>
```

</details>

## VirtualScroll

VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with virtualScrollerOptions property, refer to the VirtualScroller for more information about the available options as it is used internally by MultiSelect.

```vue
<MultiSelect
    v-model="selectedItems"
    :options="items"
    :maxSelectedLabels="3"
    :selectAll="selectAll"
    optionLabel="label"
    optionValue="value"
    @selectall-change="onSelectAllChange($event)"
    @change="onChange($event)"
    :virtualScrollerOptions="{ itemSize: 44 }"
    filter
    placeholder="Select Item"
    class="w-full md:w-80"
/>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedItems" :options="items" :maxSelectedLabels="3" :selectAll="selectAll" optionLabel="label" optionValue="value"
            @selectall-change="onSelectAllChange($event)" @change="onChange($event)" :virtualScrollerOptions="{ itemSize: 44 }" filter placeholder="Select Item" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from 'vue';


const selectedItems = ref();
const selectAll = ref(false);
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));

const onSelectAllChange = (event) => {
    selectedItems.value = event.checked ? items.value.map((item) => item.value) : [];
    selectAll.value = event.checked;
};
const onChange = (event) => {
    selectAll.value = event.value.length === items.value.length;
}

<\/script>
```

</details>

## Multi Select

### Props

| Name                   | Type                                                   | Default                     | Description                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue             | any                                                    | -                           | Value of the component.                                                                                                                                               |
| defaultValue           | any                                                    | -                           | The default value for the input when not controlled by `modelValue` .                                                                                                 |
| name                   | string                                                 | -                           | The name attribute for the element, typically used in form submissions.                                                                                               |
| options                | any[]                                                  | -                           | An array of select items to display as the available options.                                                                                                         |
| optionLabel            | string \| Function                                     | -                           | Property name or getter function to use as the label of an option.                                                                                                    |
| optionValue            | string \| Function                                     | -                           | Property name or getter function to use as the value of an option, defaults to the option itself when not defined.                                                    |
| optionDisabled         | string \| Function                                     | -                           | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.                                                        |
| optionGroupLabel       | string \| Function                                     | -                           | Property name or getter function to use as the label of an option group.                                                                                              |
| optionGroupChildren    | string \| Function                                     | -                           | Property name or getter function that refers to the children options of option group.                                                                                 |
| scrollHeight           | string                                                 | 14rem                       | Height of the viewport, a scrollbar is defined if height of list exceeds this value.                                                                                  |
| placeholder            | string                                                 | -                           | Label to display when there are no selections.                                                                                                                        |
| size                   | HintedString<"small" \| "large">                       | -                           | Defines the size of the component.                                                                                                                                    |
| invalid                | boolean                                                | false                       | When present, it specifies that the component should have invalid state style.                                                                                        |
| disabled               | boolean                                                | false                       | When present, it specifies that the component should be disabled.                                                                                                     |
| variant                | null \| HintedString<"outlined" \| "filled">           | null                        | Specifies the input variant of the component.                                                                                                                         |
| fluid                  | boolean                                                | null                        | Spans 100% width of the container when enabled.                                                                                                                       |
| inputId                | string                                                 | -                           | Identifier of the underlying input element.                                                                                                                           |
| panelStyle             | any                                                    | -                           |                                                                                                                                                                       |
| panelClass             | any                                                    | -                           |                                                                                                                                                                       |
| overlayStyle           | any                                                    | -                           | Inline style of the overlay.                                                                                                                                          |
| overlayClass           | any                                                    | -                           | Style class of the overlay.                                                                                                                                           |
| dataKey                | string                                                 | -                           | A property to uniquely identify an option.                                                                                                                            |
| showClear              | boolean                                                | false                       | When enabled, a clear icon is displayed to clear the value.                                                                                                           |
| clearIcon              | string                                                 | -                           | Icon to display in clear button.                                                                                                                                      |
| resetFilterOnClear     | boolean                                                | false                       | Clears the filter value when clicking on the clear icon.                                                                                                              |
| filter                 | boolean                                                | false                       | When specified, displays a filter input at header.                                                                                                                    |
| filterPlaceholder      | string                                                 | -                           | Placeholder text to show when filter input is empty.                                                                                                                  |
| filterLocale           | string                                                 | -                           | Locale to use in filtering. The default locale is the host environment's current locale.                                                                              |
| filterMatchMode        | HintedString<"startsWith" \| "contains" \| "endsWith"> | contains                    | Defines the filtering algorithm to use when searching the options.                                                                                                    |
| filterFields           | string[]                                               | -                           | Fields used when filtering the options, defaults to optionLabel.                                                                                                      |
| appendTo               | HTMLElement \| HintedString<"body" \| "self">          | body                        | A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself. |
| display                | HintedString<"comma" \| "chip">                        | comma                       | Defines how the selected items are displayed.                                                                                                                         |
| selectedItemsLabel     | string                                                 | null                        | Label to display after exceeding max selected labels.                                                                                                                 |
| maxSelectedLabels      | number                                                 | -                           | Decides how many selected item labels to show at most.                                                                                                                |
| selectionLimit         | number                                                 | -                           | Maximum number of selectable items.                                                                                                                                   |
| showToggleAll          | boolean                                                | true                        | Whether to show the header checkbox to toggle the selection of all items at once.                                                                                     |
| loading                | boolean                                                | false                       | Whether the multiselect is in loading state.                                                                                                                          |
| checkboxIcon           | string                                                 | -                           | Icon to display in the checkboxes.                                                                                                                                    |
| dropdownIcon           | string                                                 | -                           | Icon to display in the dropdown.                                                                                                                                      |
| filterIcon             | string                                                 | -                           | Icon to display in filter input.                                                                                                                                      |
| loadingIcon            | string                                                 | -                           | Icon to display in loading state.                                                                                                                                     |
| removeTokenIcon        | string                                                 | -                           | Icon to display in chip remove action.                                                                                                                                |
| chipIcon               | string                                                 | -                           | Icon to display in chip remove action.                                                                                                                                |
| selectAll              | boolean                                                | false                       | Whether all data is selected.                                                                                                                                         |
| resetFilterOnHide      | boolean                                                | false                       | Clears the filter value when hiding the dropdown.                                                                                                                     |
| virtualScrollerOptions | any                                                    | -                           | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.                                             |
| autoOptionFocus        | boolean                                                | false                       | Whether to focus on the first visible or selected element when the overlay panel is shown.                                                                            |
| autoFilterFocus        | boolean                                                | false                       | Whether to focus on the filter element when the overlay panel is shown.                                                                                               |
| focusOnHover           | boolean                                                | true                        | When enabled, the focus is placed on the hovered option.                                                                                                              |
| highlightOnSelect      | boolean                                                | false                       | Highlights automatically the first item.                                                                                                                              |
| filterMessage          | string                                                 | '{0} results are available' | Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.                             |
| selectionMessage       | string                                                 | null                        | Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.                                      |
| emptySelectionMessage  | string                                                 | No selected item            | Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.                                |
| emptyFilterMessage     | string                                                 | No results found            | Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.                                                     |
| emptyMessage           | string                                                 | No available options'       | Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.                                                            |
| tabindex               | string \| number                                       | -                           | Index of the element in tabbing order.                                                                                                                                |
| ariaLabel              | string                                                 | -                           | Defines a string value that labels an interactive element.                                                                                                            |
| ariaLabelledby         | string                                                 | -                           | Identifier of the underlying input element.                                                                                                                           |
| formControl            | Record<string, any>                                    | -                           | Form control object, typically used for handling validation and form state.                                                                                           |
| dt                     | any                                                    | -                           | It generates scoped CSS variables using design tokens for the component.                                                                                              |
| pt                     | PassThrough<MultiSelectPassThroughOptions>             | -                           | Used to pass attributes to DOM elements inside the component.                                                                                                         |
| ptOptions              | any                                                    | -                           | Used to configure passthrough(pt) options of the component.                                                                                                           |
| unstyled               | boolean                                                | false                       | When enabled, it removes component related styles in the core.                                                                                                        |

## Pass Through Options

| Name                   | Type                                 | Description                                                                  |
| ---------------------- | ------------------------------------ | ---------------------------------------------------------------------------- |
| root                   | MultiSelectPassThroughOptionType     | Used to pass attributes to the root's DOM element.                           |
| labelContainer         | MultiSelectPassThroughOptionType     | Used to pass attributes to the label container's DOM element.                |
| label                  | MultiSelectPassThroughOptionType     | Used to pass attributes to the label's DOM element.                          |
| clearIcon              | MultiSelectPassThroughOptionType     | Used to pass attributes to the label's DOM element.                          |
| chipItem               | MultiSelectPassThroughOptionType     | Used to pass attributes to the chip's DOM element.                           |
| pcChip                 | any                                  | Used to pass attributes to the Chip.                                         |
| dropdown               | MultiSelectPassThroughOptionType     | Used to pass attributes to the dropdown's DOM element.                       |
| loadingIcon            | MultiSelectPassThroughOptionType     | Used to pass attributes to the loading icon's DOM element.                   |
| dropdownIcon           | MultiSelectPassThroughOptionType     | Used to pass attributes to the dropdown icon's DOM element.                  |
| overlay                | MultiSelectPassThroughOptionType     | Used to pass attributes to the overlay's DOM element.                        |
| header                 | MultiSelectPassThroughOptionType     | Used to pass attributes to the header's DOM element.                         |
| pcHeaderCheckbox       | MultiSelectPassThroughOptionType     | Used to pass attributes to the header checkbox's DOM element.                |
| pcFilterContainer      | any                                  | Used to pass attributes to the IconField component.                          |
| pcFilter               | any                                  | Used to pass attributes to the InputText component.                          |
| pcFilterIconContainer  | any                                  | Used to pass attributes to the InputIcon component.                          |
| filterIcon             | MultiSelectPassThroughOptionType     | Used to pass attributes to the filter icon's DOM element.                    |
| listContainer          | MultiSelectPassThroughOptionType     | Used to pass attributes to the list container's DOM element.                 |
| virtualScroller        | any                                  | Used to pass attributes to the VirtualScroller component.                    |
| list                   | MultiSelectPassThroughOptionType     | Used to pass attributes to the list's DOM element.                           |
| optionGroup            | MultiSelectPassThroughOptionType     | Used to pass attributes to the option group's DOM element.                   |
| option                 | MultiSelectPassThroughOptionType     | Used to pass attributes to the option's DOM element.                         |
| optionLabel            | MultiSelectPassThroughOptionType     | Used to pass attributes to the option label's DOM element.                   |
| pcOptionCheckbox       | MultiSelectPassThroughOptionType     | Used to pass attributes to the option checkbox's DOM element.                |
| emptyMessage           | MultiSelectPassThroughOptionType     | Used to pass attributes to the emptyMessage's DOM element.                   |
| hiddenInputContainer   | MultiSelectPassThroughOptionType     | Used to pass attributes to the hidden input container's DOM element.         |
| hiddenInput            | MultiSelectPassThroughOptionType     | Used to pass attributes to the hidden input's DOM element.                   |
| hiddenFirstFocusableEl | MultiSelectPassThroughOptionType     | Used to pass attributes to the hidden first focusable element's DOM element. |
| hiddenFilterResult     | MultiSelectPassThroughOptionType     | Used to pass attributes to the hidden filter result's DOM element.           |
| hiddenSelectedMessage  | MultiSelectPassThroughOptionType     | Used to pass attributes to the hidden selected message's DOM element.        |
| hiddenLastFocusableEl  | MultiSelectPassThroughOptionType     | Used to pass attributes to the hidden last focusable element's DOM element.  |
| hooks                  | any                                  | Used to manage all lifecycle hooks.                                          |
| transition             | MultiSelectPassThroughTransitionType | Used to control Vue Transition API.                                          |

## Theming

### CSS Classes

| Class                          | Description                                |
| ------------------------------ | ------------------------------------------ |
| p-multiselect                  | Class name of the root element             |
| p-multiselect-label-container  | Class name of the label container element  |
| p-multiselect-label            | Class name of the label element            |
| p-multiselect-clear-icon       | Class name of the clear icon element       |
| p-multiselect-chip-item        | Class name of the chip item element        |
| p-multiselect-chip             | Class name of the chip element             |
| p-multiselect-chip-icon        | Class name of the chip icon element        |
| p-multiselect-dropdown         | Class name of the dropdown element         |
| p-multiselect-loading-icon     | Class name of the loading icon element     |
| p-multiselect-dropdown-icon    | Class name of the dropdown icon element    |
| p-multiselect-overlay          | Class name of the overlay element          |
| p-multiselect-header           | Class name of the header element           |
| p-multiselect-filter-container | Class name of the filter container element |
| p-multiselect-filter           | Class name of the filter element           |
| p-multiselect-list-container   | Class name of the list container element   |
| p-multiselect-list             | Class name of the list element             |
| p-multiselect-option-group     | Class name of the option group element     |
| p-multiselect-option           | Class name of the option element           |
| p-multiselect-empty-message    | Class name of the empty message element    |

### Design Tokens

| Token                                        | CSS Variable                                     | Description                         |
| -------------------------------------------- | ------------------------------------------------ | ----------------------------------- |
| multiselect.background                       | --p-multiselect-background                       | Background of root                  |
| multiselect.disabled.background              | --p-multiselect-disabled-background              | Disabled background of root         |
| multiselect.filled.background                | --p-multiselect-filled-background                | Filled background of root           |
| multiselect.filled.hover.background          | --p-multiselect-filled-hover-background          | Filled hover background of root     |
| multiselect.filled.focus.background          | --p-multiselect-filled-focus-background          | Filled focus background of root     |
| multiselect.border.color                     | --p-multiselect-border-color                     | Border color of root                |
| multiselect.hover.border.color               | --p-multiselect-hover-border-color               | Hover border color of root          |
| multiselect.focus.border.color               | --p-multiselect-focus-border-color               | Focus border color of root          |
| multiselect.invalid.border.color             | --p-multiselect-invalid-border-color             | Invalid border color of root        |
| multiselect.color                            | --p-multiselect-color                            | Color of root                       |
| multiselect.disabled.color                   | --p-multiselect-disabled-color                   | Disabled color of root              |
| multiselect.placeholder.color                | --p-multiselect-placeholder-color                | Placeholder color of root           |
| multiselect.invalid.placeholder.color        | --p-multiselect-invalid-placeholder-color        | Invalid placeholder color of root   |
| multiselect.shadow                           | --p-multiselect-shadow                           | Shadow of root                      |
| multiselect.padding.x                        | --p-multiselect-padding-x                        | Padding x of root                   |
| multiselect.padding.y                        | --p-multiselect-padding-y                        | Padding y of root                   |
| multiselect.border.radius                    | --p-multiselect-border-radius                    | Border radius of root               |
| multiselect.focus.ring.width                 | --p-multiselect-focus-ring-width                 | Focus ring width of root            |
| multiselect.focus.ring.style                 | --p-multiselect-focus-ring-style                 | Focus ring style of root            |
| multiselect.focus.ring.color                 | --p-multiselect-focus-ring-color                 | Focus ring color of root            |
| multiselect.focus.ring.offset                | --p-multiselect-focus-ring-offset                | Focus ring offset of root           |
| multiselect.focus.ring.shadow                | --p-multiselect-focus-ring-shadow                | Focus ring shadow of root           |
| multiselect.transition.duration              | --p-multiselect-transition-duration              | Transition duration of root         |
| multiselect.sm.font.size                     | --p-multiselect-sm-font-size                     | Sm font size of root                |
| multiselect.sm.padding.x                     | --p-multiselect-sm-padding-x                     | Sm padding x of root                |
| multiselect.sm.padding.y                     | --p-multiselect-sm-padding-y                     | Sm padding y of root                |
| multiselect.lg.font.size                     | --p-multiselect-lg-font-size                     | Lg font size of root                |
| multiselect.lg.padding.x                     | --p-multiselect-lg-padding-x                     | Lg padding x of root                |
| multiselect.lg.padding.y                     | --p-multiselect-lg-padding-y                     | Lg padding y of root                |
| multiselect.dropdown.width                   | --p-multiselect-dropdown-width                   | Width of dropdown                   |
| multiselect.dropdown.color                   | --p-multiselect-dropdown-color                   | Color of dropdown                   |
| multiselect.overlay.background               | --p-multiselect-overlay-background               | Background of overlay               |
| multiselect.overlay.border.color             | --p-multiselect-overlay-border-color             | Border color of overlay             |
| multiselect.overlay.border.radius            | --p-multiselect-overlay-border-radius            | Border radius of overlay            |
| multiselect.overlay.color                    | --p-multiselect-overlay-color                    | Color of overlay                    |
| multiselect.overlay.shadow                   | --p-multiselect-overlay-shadow                   | Shadow of overlay                   |
| multiselect.list.padding                     | --p-multiselect-list-padding                     | Padding of list                     |
| multiselect.list.gap                         | --p-multiselect-list-gap                         | Gap of list                         |
| multiselect.list.header.padding              | --p-multiselect-list-header-padding              | Header padding of list              |
| multiselect.option.focus.background          | --p-multiselect-option-focus-background          | Focus background of option          |
| multiselect.option.selected.background       | --p-multiselect-option-selected-background       | Selected background of option       |
| multiselect.option.selected.focus.background | --p-multiselect-option-selected-focus-background | Selected focus background of option |
| multiselect.option.color                     | --p-multiselect-option-color                     | Color of option                     |
| multiselect.option.focus.color               | --p-multiselect-option-focus-color               | Focus color of option               |
| multiselect.option.selected.color            | --p-multiselect-option-selected-color            | Selected color of option            |
| multiselect.option.selected.focus.color      | --p-multiselect-option-selected-focus-color      | Selected focus color of option      |
| multiselect.option.padding                   | --p-multiselect-option-padding                   | Padding of option                   |
| multiselect.option.border.radius             | --p-multiselect-option-border-radius             | Border radius of option             |
| multiselect.option.gap                       | --p-multiselect-option-gap                       | Gap of option                       |
| multiselect.option.group.background          | --p-multiselect-option-group-background          | Background of option group          |
| multiselect.option.group.color               | --p-multiselect-option-group-color               | Color of option group               |
| multiselect.option.group.font.weight         | --p-multiselect-option-group-font-weight         | Font weight of option group         |
| multiselect.option.group.padding             | --p-multiselect-option-group-padding             | Padding of option group             |
| multiselect.clear.icon.color                 | --p-multiselect-clear-icon-color                 | Color of clear icon                 |
| multiselect.chip.border.radius               | --p-multiselect-chip-border-radius               | Border radius of chip               |
| multiselect.empty.message.padding            | --p-multiselect-empty-message-padding            | Padding of empty message            |
