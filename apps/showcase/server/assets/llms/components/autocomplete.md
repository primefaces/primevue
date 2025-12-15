# Vue AutoComplete Component

AutoComplete is an input component that provides real-time suggestions when being typed.

## Import

```javascript
import AutoComplete from 'primevue/autocomplete';
```

## Accessibility

Screen Reader Value to describe the component can either be provided via label tag combined with inputId prop or using aria-labelledby , aria-label props. The input element has combobox role in addition to aria-autocomplete , aria-haspopup and aria-expanded attributes. The relation between the input and the popup is created with aria-controls and aria-activedescendant attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. In multiple mode, chip list uses listbox role with aria-orientation set to horizontal whereas each chip has the option role with aria-label set to the label of the chip. The popup list has an id that refers to the aria-controls attribute of the input element and uses listbox as the role. Each list item has option role and an id to match the aria-activedescendant of the input element. Closed State Keyboard Support Key Function tab Moves focus to the autocomplete element. any printable character Opens the popup and moves focus to the first option. Popup Keyboard Support Key Function tab Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page. shift + tab Moves focus to the previous focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page. enter Selects the focused option and closes the popup, then moves focus to the autocomplete element. space Selects the focused option and closes the popup, then moves focus to the autocomplete element. escape Closes the popup, then moves focus to the autocomplete element. down arrow Moves focus to the next option, if there is none then visual focus does not change. up arrow Moves focus to the previous option, if there is none then visual focus does not change. alt + up arrow Selects the focused option and closes the popup, then moves focus to the autocomplete element. left arrow Removes the visual focus from the current option and moves input cursor to one character left. right arrow Removes the visual focus from the current option and moves input cursor to one character right. home Moves input cursor at the end, if not then moves focus to the first option. end Moves input cursor at the beginning, if not then moves focus to the last option. pageUp Jumps visual focus to first option. pageDown Jumps visual focus to last option. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the last one. Chips Input Keyboard Support Key Function backspace Deletes the previous chip if the input field is empty. left arrow Moves focus to the previous chip if available and input field is empty. Chip Keyboard Support Key Function left arrow Moves focus to the previous chip if available. right arrow Moves focus to the next chip, if there is none then input field receives the focus. backspace Deletes the chips and adds focus to the input field.

```vue
<label for="ac1">;Username</label>
<AutoComplete inputId="ac1" />

<span id="ac2">Email</span>
<AutoComplete aria-labelledby="ac2" />

<AutoComplete aria-label="City" />
```

## Basic

AutoComplete is used with the v-model property for two-way value binding. In addition, suggestions property and a complete method are required to query the results.

```vue
<AutoComplete v-model="value" :suggestions="items" @complete="search" />
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the AutoComplete.

```vue
<AutoComplete v-model="value" showClear :suggestions="items" @complete="search" inputClass="w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" showClear :suggestions="items" @complete="search" inputClass="w-56" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
```

</details>

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<AutoComplete disabled placeholder="Disabled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Dropdown

Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes blank or current as possible values. blank is the default mode to send a query with an empty string whereas current setting sends a query with the current value of the input.

```vue
<AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    let _items = [...Array(10).keys()];

    items.value = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
}
<\/script>
```

</details>

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<AutoComplete v-model="value" :suggestions="items" @complete="search" variant="filled" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
```

</details>

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <AutoComplete v-model="value1" inputId="over_label" :suggestions="items" @complete="search" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <AutoComplete v-model="value2" inputId="in_label" :suggestions="items" @complete="search" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <AutoComplete v-model="value3" inputId="on_label" :suggestions="items" @complete="search" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <AutoComplete v-model="value1" inputId="over_label" :suggestions="items" @complete="search" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <AutoComplete v-model="value2" inputId="in_label" :suggestions="items" @complete="search" variant="filled" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <AutoComplete v-model="value3" inputId="on_label" :suggestions="items" @complete="search" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
```

</details>

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<AutoComplete v-model="value" :suggestions="items" fluid @complete="search" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <AutoComplete v-model="value" :suggestions="items" fluid @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
```

</details>

## Force Selection

ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions. Simply enable forceSelection to enforce that input is always from the suggestion list.

```vue
<AutoComplete v-model="selectedCountry" forceSelection optionLabel="name" :suggestions="filteredCountries" @complete="search" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" forceSelection optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>
```

</details>

## Forms

AutoComplete integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
    <div class="flex flex-col gap-1">
        <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
        <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
            <div class="flex flex-col gap-1">
                <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
                <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const initialValues = ref({
    country: { name: '' }
});
const resolver = ref(zodResolver(
    z.object({
        country: z.union([
            z.object({
                name: z.string().min(1, 'Country is required.')
            }),
            z.any().refine((val) => false, { message: 'Country is required.' })
        ])
    })
));
const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();
const toast = useToast();

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
};

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Group

Option groups are specified with the optionGroupLabel and optionGroupChildren properties.

```vue
<AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Hint: type 'a'">
    <template #optiongroup="slotProps">
        <div class="flex items-center country-item">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.label }}</div>
        </div>
    </template>
</AutoComplete>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Hint: type 'a'">
            <template #optiongroup="slotProps">
                <div class="flex items-center country-item">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { FilterMatchMode, FilterService } from '@primevue/core/api';

const selectedCity = ref();
const filteredCities = ref();
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

const search = (event) => {
    let query = event.query;
    let newFilteredCities = [];

    for (let country of groupedCities.value) {
        let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
        if (filteredItems && filteredItems.length) {
            newFilteredCities.push({...country, ...{items: filteredItems}});
        }
    }

    filteredCities.value = newFilteredCities;

}
<\/script>
```

</details>

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" variant="filled" />
    <label for="ac">Identifier</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" variant="filled" />
            <label for="ac">Identifier</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
```

</details>

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<AutoComplete v-model="value1" :suggestions="items" @complete="search" :invalid="!value1" placeholder="Code" />
<AutoComplete v-model="value2" :suggestions="items" @complete="search" :invalid="!value2" variant="filled" placeholder="Code" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items" @complete="search" :invalid="!value1" placeholder="Code" />
        <AutoComplete v-model="value2" :suggestions="items" @complete="search" :invalid="!value2" variant="filled" placeholder="Code" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref('');
const value2 = ref('');
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
```

</details>

## Multiple

Multiple mode is enabled using multiple property used to select more than one value from the autocomplete. In this case, value reference should be an array.

```vue
<label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
<AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

<label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
<AutoComplete v-model="value2" inputId="multiple-ac-2" multiple fluid @complete="search" :typeahead="false" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
        <AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

        <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
        <AutoComplete v-model="value2" inputId="multiple-ac-2" multiple fluid @complete="search" :typeahead="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
```

</details>

## Objects

AutoComplete can work with objects using the optionLabel property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as &#123;name: "United States", code:"USA"&#125; .

```vue
<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>
```

</details>

## Sizes

AutoComplete provides small and large sizes as alternatives to the base.

```vue
<AutoComplete v-model="value1" :suggestions="items" @complete="search" size="small" placeholder="Small" dropdown />
<AutoComplete v-model="value2" :suggestions="items" @complete="search" placeholder="Normal" dropdown />
<AutoComplete v-model="value3" :suggestions="items" @complete="search" size="large" placeholder="Large" dropdown />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items" @complete="search" size="small" placeholder="Small" dropdown />
        <AutoComplete v-model="value2" :suggestions="items" @complete="search" placeholder="Normal" dropdown />
        <AutoComplete v-model="value3" :suggestions="items" @complete="search" size="large" placeholder="Large" dropdown />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const items = ref([]);

const search = () => {
    items.value = [];
}
<\/script>
```

</details>

## Template

AutoComplete offers multiple slots for customization through templating.

```vue
<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
    <template #option="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
    <template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </template>
    <template #footer>
        <div class="px-3 py-3">
            <Button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </template>
</AutoComplete>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="px-3 py-3">
                    <Button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>
```

</details>

## Virtual Scroll

Virtual Scrolling is a performant way to render large lists. Configuration of the scroll behavior is defined with virtualScrollerOptions that requires itemSize as the mandatory value to set the height of an item. Visit VirtualScroller documentation for more information about the configuration API.

```vue
<AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
const selectedItem = ref();
const filteredItems = ref();
const searchItems = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let query = event.query;
    let _filteredItems = [];

    for (let i = 0; i < items.value.length; i++) {
        let item = items.value[i];

        if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            _filteredItems.push(item);
        }
    }

    filteredItems.value = _filteredItems;
};
<\/script>
```

</details>

## Auto Complete

### Props

| Name                   | Type                                          | Default                     | Description                                                                                                                                                           |
| ---------------------- | --------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue             | any                                           | -                           | Value of the component.                                                                                                                                               |
| defaultValue           | any                                           | -                           | The default value for the input when not controlled by `modelValue` .                                                                                                 |
| name                   | string                                        | -                           | The name attribute for the element, typically used in form submissions.                                                                                               |
| suggestions            | any[]                                         | -                           | An array of suggestions to display.                                                                                                                                   |
| optionLabel            | string \| Function                            | -                           | Property name or getter function to use as the label of an option.                                                                                                    |
| optionDisabled         | string \| Function                            | -                           | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.                                                        |
| optionGroupLabel       | string \| Function                            | -                           | Property name or getter function to use as the label of an option group.                                                                                              |
| optionGroupChildren    | string \| Function                            | -                           | Property name or getter function that refers to the children options of option group.                                                                                 |
| typeahead              | boolean                                       | true                        | whether typeahead is active or not.                                                                                                                                   |
| scrollHeight           | string                                        | 14rem                       | Maximum height of the suggestions overlay.                                                                                                                            |
| dropdown               | boolean                                       | false                       | Displays a button next to the input field when enabled.                                                                                                               |
| dropdownMode           | HintedString<"blank" \| "current">            | blank                       | Specifies the behavior dropdown button. Default 'blank' mode sends an empty string and 'current' mode sends the input value.                                          |
| multiple               | boolean                                       | false                       | Specifies if multiple values can be selected.                                                                                                                         |
| showClear              | boolean                                       | false                       | When enabled, a clear icon is displayed to clear the value.                                                                                                           |
| placeholder            | string                                        | -                           | Default text to display when no option is selected.                                                                                                                   |
| loading                | boolean                                       | false                       | Whether the autocomplete is in loading state.                                                                                                                         |
| size                   | HintedString<"small" \| "large">              | -                           | Defines the size of the component.                                                                                                                                    |
| invalid                | boolean                                       | false                       | When present, it specifies that the component should have invalid state style.                                                                                        |
| disabled               | boolean                                       | false                       | When present, it specifies that the component should be disabled.                                                                                                     |
| variant                | null \| HintedString<"outlined" \| "filled">  | null                        | Specifies the input variant of the component.                                                                                                                         |
| dataKey                | string                                        | -                           | A property to uniquely identify an option.                                                                                                                            |
| minLength              | number                                        | 1                           | Minimum number of characters to initiate a search.                                                                                                                    |
| delay                  | number                                        | 300                         | Delay between keystrokes to wait before sending a query.                                                                                                              |
| appendTo               | HTMLElement \| HintedString<"body" \| "self"> | body                        | A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself. |
| forceSelection         | boolean                                       | false                       | When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.                       |
| completeOnFocus        | boolean                                       | false                       | Whether to run a query when input receives focus.                                                                                                                     |
| inputId                | string                                        | -                           | Identifier of the underlying input element.                                                                                                                           |
| inputStyle             | object                                        | -                           | Inline style of the input field.                                                                                                                                      |
| inputClass             | string \| object                              | -                           | Style class of the input field.                                                                                                                                       |
| panelStyle             | object                                        | -                           | Inline style of the overlay.                                                                                                                                          |
| panelClass             | string \| object                              | -                           | Style class of the overlay.                                                                                                                                           |
| overlayStyle           | object                                        | -                           | Inline style of the overlay overlay.                                                                                                                                  |
| overlayClass           | string \| object                              | -                           | Style class of the overlay overlay.                                                                                                                                   |
| dropdownIcon           | string                                        | -                           | Icon to display in the dropdown.                                                                                                                                      |
| dropdownClass          | string \| object                              | -                           | Style class of the dropdown button.                                                                                                                                   |
| loadingIcon            | string                                        | -                           | Icon to display in loading state.                                                                                                                                     |
| loader                 | string                                        | -                           | Icon to display in loading state.                                                                                                                                     |
| removeTokenIcon        | string                                        | -                           | Icon to display in chip remove action.                                                                                                                                |
| chipIcon               | string                                        | -                           | Icon to display in chip remove action.                                                                                                                                |
| virtualScrollerOptions | any                                           | -                           | Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.                                             |
| autoOptionFocus        | boolean                                       | false                       | Whether to focus on the first visible or selected element when the overlay is shown.                                                                                  |
| selectOnFocus          | boolean                                       | false                       | When enabled, the focused option is selected.                                                                                                                         |
| focusOnHover           | boolean                                       | true                        | When enabled, the focus is placed on the hovered option.                                                                                                              |
| searchLocale           | string                                        | -                           | Locale to use in searching. The default locale is the host environment's current locale.                                                                              |
| searchMessage          | string                                        | '{0} results are available' | Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.                             |
| selectionMessage       | string                                        | '{0} items selected'        | Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.                                      |
| emptySelectionMessage  | string                                        | No selected item            | Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.                                |
| emptySearchMessage     | string                                        | No results found            | Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.                                                     |
| showEmptyMessage       | boolean                                       | true                        | When enabled, empty search message will be visible.                                                                                                                   |
| tabindex               | string \| number                              | -                           | Index of the element in tabbing order.                                                                                                                                |
| fluid                  | boolean                                       | null                        | Spans 100% width of the container when enabled.                                                                                                                       |
| ariaLabel              | string                                        | -                           | Defines a string value that labels an interactive element.                                                                                                            |
| ariaLabelledby         | string                                        | -                           | Identifier of the underlying input element.                                                                                                                           |
| formControl            | Record<string, any>                           | -                           | Form control object, typically used for handling validation and form state.                                                                                           |
| dt                     | any                                           | -                           | It generates scoped CSS variables using design tokens for the component.                                                                                              |
| pt                     | PassThrough<AutoCompletePassThroughOptions>   | -                           | Used to pass attributes to DOM elements inside the component.                                                                                                         |
| ptOptions              | any                                           | -                           | Used to configure passthrough(pt) options of the component.                                                                                                           |
| unstyled               | boolean                                       | false                       | When enabled, it removes component related styles in the core.                                                                                                        |

## Pass Through Options

| Name                | Type                                  | Description                                                         |
| ------------------- | ------------------------------------- | ------------------------------------------------------------------- |
| root                | AutoCompletePassThroughOptionType     | Used to pass attributes to the root's DOM element.                  |
| pcInputText         | any                                   | Used to pass attributes to the InputText component.                 |
| inputMultiple       | AutoCompletePassThroughOptionType     | Used to pass attributes to the input multiple's DOM element.        |
| chipItem            | AutoCompletePassThroughOptionType     | Used to pass attributes to the chip's DOM element.                  |
| pcChip              | any                                   | Used to pass attributes to the Chip.                                |
| chipIcon            | AutoCompletePassThroughOptionType     | Used to pass attributes to the chip icon's DOM element.             |
| input               | AutoCompletePassThroughOptionType     | Used to pass attributes to the input chip's DOM element.            |
| inputChip           | AutoCompletePassThroughOptionType     | Used to pass attributes to the input chip's DOM element.            |
| loader              | AutoCompletePassThroughOptionType     | Used to pass attributes to the loader's DOM element.                |
| clearIcon           | AutoCompletePassThroughOptionType     | Used to pass attributes to the clear icon's DOM element.            |
| dropdown            | AutoCompletePassThroughOptionType     | Used to pass attributes to the dropdown's DOM element.              |
| dropdownIcon        | AutoCompletePassThroughOptionType     | Used to pass attributes to the dropdown icon's DOM element.         |
| overlay             | AutoCompletePassThroughOptionType     | Used to pass attributes to the overlay's DOM element.               |
| virtualScroller     | any                                   | Used to pass attributes to the VirtualScroller component.           |
| listContainer       | AutoCompletePassThroughOptionType     | Used to pass attributes to the list container's DOM element.        |
| list                | AutoCompletePassThroughOptionType     | Used to pass attributes to the list's DOM element.                  |
| optionGroup         | AutoCompletePassThroughOptionType     | Used to pass attributes to the option group's DOM element.          |
| option              | AutoCompletePassThroughOptionType     | Used to pass attributes to the option's DOM element.                |
| emptyMessage        | AutoCompletePassThroughOptionType     | Used to pass attributes to the empty message's DOM element.         |
| searchResultMessage | AutoCompletePassThroughOptionType     | Used to pass attributes to the search result message's DOM element. |
| selectedMessage     | AutoCompletePassThroughOptionType     | Used to pass attributes to the selected message's DOM element.      |
| hooks               | any                                   | Used to manage all lifecycle hooks.                                 |
| transition          | AutoCompletePassThroughTransitionType | Used to control Vue Transition API.                                 |

## Theming

### CSS Classes

| Class                         | Description                              |
| ----------------------------- | ---------------------------------------- |
| p-autocomplete                | Class name of the root element           |
| p-autocomplete-input          | Class name of the input element          |
| p-autocomplete-input-multiple | Class name of the input multiple element |
| p-autocomplete-clear-icon     | Class name of the clear icon element     |
| p-autocomplete-chip-item      | Class name of the chip item element      |
| p-autocomplete-chip           | Class name of the chip element           |
| p-autocomplete-chip-icon      | Class name of the chip icon element      |
| p-autocomplete-input-chip     | Class name of the input chip element     |
| p-autocomplete-loader         | Class name of the loader element         |
| p-autocomplete-dropdown       | Class name of the dropdown element       |
| p-autocomplete-overlay        | Class name of the panel element          |
| p-autocomplete-list           | Class name of the list element           |
| p-autocomplete-list-container | Class name of the list container element |
| p-autocomplete-option-group   | Class name of the option group element   |
| p-autocomplete-option         | Class name of the option element         |
| p-autocomplete-empty-message  | Class name of the empty message element  |

### Design Tokens

| Token                                         | CSS Variable                                      | Description                         |
| --------------------------------------------- | ------------------------------------------------- | ----------------------------------- |
| autocomplete.background                       | --p-autocomplete-background                       | Background of root                  |
| autocomplete.disabled.background              | --p-autocomplete-disabled-background              | Disabled background of root         |
| autocomplete.filled.background                | --p-autocomplete-filled-background                | Filled background of root           |
| autocomplete.filled.hover.background          | --p-autocomplete-filled-hover-background          | Filled hover background of root     |
| autocomplete.filled.focus.background          | --p-autocomplete-filled-focus-background          | Filled focus background of root     |
| autocomplete.border.color                     | --p-autocomplete-border-color                     | Border color of root                |
| autocomplete.hover.border.color               | --p-autocomplete-hover-border-color               | Hover border color of root          |
| autocomplete.focus.border.color               | --p-autocomplete-focus-border-color               | Focus border color of root          |
| autocomplete.invalid.border.color             | --p-autocomplete-invalid-border-color             | Invalid border color of root        |
| autocomplete.color                            | --p-autocomplete-color                            | Color of root                       |
| autocomplete.disabled.color                   | --p-autocomplete-disabled-color                   | Disabled color of root              |
| autocomplete.placeholder.color                | --p-autocomplete-placeholder-color                | Placeholder color of root           |
| autocomplete.invalid.placeholder.color        | --p-autocomplete-invalid-placeholder-color        | Invalid placeholder color of root   |
| autocomplete.shadow                           | --p-autocomplete-shadow                           | Shadow of root                      |
| autocomplete.padding.x                        | --p-autocomplete-padding-x                        | Padding x of root                   |
| autocomplete.padding.y                        | --p-autocomplete-padding-y                        | Padding y of root                   |
| autocomplete.border.radius                    | --p-autocomplete-border-radius                    | Border radius of root               |
| autocomplete.focus.ring.width                 | --p-autocomplete-focus-ring-width                 | Focus ring width of root            |
| autocomplete.focus.ring.style                 | --p-autocomplete-focus-ring-style                 | Focus ring style of root            |
| autocomplete.focus.ring.color                 | --p-autocomplete-focus-ring-color                 | Focus ring color of root            |
| autocomplete.focus.ring.offset                | --p-autocomplete-focus-ring-offset                | Focus ring offset of root           |
| autocomplete.focus.ring.shadow                | --p-autocomplete-focus-ring-shadow                | Focus ring shadow of root           |
| autocomplete.transition.duration              | --p-autocomplete-transition-duration              | Transition duration of root         |
| autocomplete.overlay.background               | --p-autocomplete-overlay-background               | Background of overlay               |
| autocomplete.overlay.border.color             | --p-autocomplete-overlay-border-color             | Border color of overlay             |
| autocomplete.overlay.border.radius            | --p-autocomplete-overlay-border-radius            | Border radius of overlay            |
| autocomplete.overlay.color                    | --p-autocomplete-overlay-color                    | Color of overlay                    |
| autocomplete.overlay.shadow                   | --p-autocomplete-overlay-shadow                   | Shadow of overlay                   |
| autocomplete.list.padding                     | --p-autocomplete-list-padding                     | Padding of list                     |
| autocomplete.list.gap                         | --p-autocomplete-list-gap                         | Gap of list                         |
| autocomplete.option.focus.background          | --p-autocomplete-option-focus-background          | Focus background of option          |
| autocomplete.option.selected.background       | --p-autocomplete-option-selected-background       | Selected background of option       |
| autocomplete.option.selected.focus.background | --p-autocomplete-option-selected-focus-background | Selected focus background of option |
| autocomplete.option.color                     | --p-autocomplete-option-color                     | Color of option                     |
| autocomplete.option.focus.color               | --p-autocomplete-option-focus-color               | Focus color of option               |
| autocomplete.option.selected.color            | --p-autocomplete-option-selected-color            | Selected color of option            |
| autocomplete.option.selected.focus.color      | --p-autocomplete-option-selected-focus-color      | Selected focus color of option      |
| autocomplete.option.padding                   | --p-autocomplete-option-padding                   | Padding of option                   |
| autocomplete.option.border.radius             | --p-autocomplete-option-border-radius             | Border radius of option             |
| autocomplete.option.group.background          | --p-autocomplete-option-group-background          | Background of option group          |
| autocomplete.option.group.color               | --p-autocomplete-option-group-color               | Color of option group               |
| autocomplete.option.group.font.weight         | --p-autocomplete-option-group-font-weight         | Font weight of option group         |
| autocomplete.option.group.padding             | --p-autocomplete-option-group-padding             | Padding of option group             |
| autocomplete.dropdown.width                   | --p-autocomplete-dropdown-width                   | Width of dropdown                   |
| autocomplete.dropdown.sm.width                | --p-autocomplete-dropdown-sm-width                | Sm width of dropdown                |
| autocomplete.dropdown.lg.width                | --p-autocomplete-dropdown-lg-width                | Lg width of dropdown                |
| autocomplete.dropdown.border.color            | --p-autocomplete-dropdown-border-color            | Border color of dropdown            |
| autocomplete.dropdown.hover.border.color      | --p-autocomplete-dropdown-hover-border-color      | Hover border color of dropdown      |
| autocomplete.dropdown.active.border.color     | --p-autocomplete-dropdown-active-border-color     | Active border color of dropdown     |
| autocomplete.dropdown.border.radius           | --p-autocomplete-dropdown-border-radius           | Border radius of dropdown           |
| autocomplete.dropdown.focus.ring.width        | --p-autocomplete-dropdown-focus-ring-width        | Focus ring width of dropdown        |
| autocomplete.dropdown.focus.ring.style        | --p-autocomplete-dropdown-focus-ring-style        | Focus ring style of dropdown        |
| autocomplete.dropdown.focus.ring.color        | --p-autocomplete-dropdown-focus-ring-color        | Focus ring color of dropdown        |
| autocomplete.dropdown.focus.ring.offset       | --p-autocomplete-dropdown-focus-ring-offset       | Focus ring offset of dropdown       |
| autocomplete.dropdown.focus.ring.shadow       | --p-autocomplete-dropdown-focus-ring-shadow       | Focus ring shadow of dropdown       |
| autocomplete.dropdown.background              | --p-autocomplete-dropdown-background              | Background of dropdown              |
| autocomplete.dropdown.hover.background        | --p-autocomplete-dropdown-hover-background        | Hover background of dropdown        |
| autocomplete.dropdown.active.background       | --p-autocomplete-dropdown-active-background       | Active background of dropdown       |
| autocomplete.dropdown.color                   | --p-autocomplete-dropdown-color                   | Color of dropdown                   |
| autocomplete.dropdown.hover.color             | --p-autocomplete-dropdown-hover-color             | Hover color of dropdown             |
| autocomplete.dropdown.active.color            | --p-autocomplete-dropdown-active-color            | Active color of dropdown            |
| autocomplete.chip.border.radius               | --p-autocomplete-chip-border-radius               | Border radius of chip               |
| autocomplete.chip.focus.background            | --p-autocomplete-chip-focus-background            | Focus background of chip            |
| autocomplete.chip.focus.color                 | --p-autocomplete-chip-focus-color                 | Focus color of chip                 |
| autocomplete.empty.message.padding            | --p-autocomplete-empty-message-padding            | Padding of empty message            |
