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
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the CascadeSelect.

```vue
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

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
<CascadeSelect v-model="selectedCity" variant="filled" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <CascadeSelect v-model="selectedCity" variant="filled" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
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
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<CascadeSelect v-model="selectedCity" fluid :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" placeholder="Select a City" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <CascadeSelect v-model="selectedCity" fluid :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" placeholder="Select a City" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

## Forms

CascadeSelect integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-1">
        <CascadeSelect name="city" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
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
                <CascadeSelect name="city" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City" />
                <Message v-if="$form.city?.invalid" severity="error" size="small" variant="simple">{{ $form.city.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    city: null
});

const resolver = ref(zodResolver(
    z.object({
        city: z.union([
            z.object({
                cname: z.string().min(1, 'City is required.')
            }),
            z.any().refine((val) => false, { message: 'City is required.' })
        ])
    })
));

const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel class="w-full md:w-56">
    <CascadeSelect v-model="selectedCity" inputId="cs_city" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-full" variant="filled" />
    <label for="cs_city">City</label>
</IftaLabel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <IftaLabel class="w-full md:w-56">
            <CascadeSelect v-model="selectedCity" inputId="cs_city" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-full" variant="filled" />
            <label for="cs_city">City</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <CascadeSelect v-model="selectedCity1" :invalid="!selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" class="w-full sm:w-56" placeholder="Select a City" />
        <CascadeSelect v-model="selectedCity2" :invalid="!selectedCity2" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" class="w-full sm:w-56" placeholder="Select a City" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity1 = ref(null);
const selectedCity2 = ref(null);
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

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
<CascadeSelect v-model="value1" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" size="small" placeholder="Small" />
<CascadeSelect v-model="value2" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Normal" />
<CascadeSelect v-model="value3" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" size="large" placeholder="Large" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <CascadeSelect v-model="value1" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']"
            class="w-56" size="small" placeholder="Small" />
        <CascadeSelect v-model="value2" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']"
            class="w-56" placeholder="Normal" />
        <CascadeSelect v-model="value3" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']"
            class="w-56" size="large" placeholder="Large" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

## Template

CascadeSelect offers multiple slots for customization through templating.

```vue
<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City">
    <template #option="slotProps">
        <div class="flex items-center">
            <img v-if="slotProps.option.states" :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px"  />
            <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
            <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
            <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
        </div>
    </template>
    <template #dropdownicon>
        <i class="pi pi-map" />
    </template>
    <template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </template>
    <template #footer>
        <div class="px-3 py-1">
            <Button label="Add New" fluid severity="secondary" variant="text" size="small" icon="pi pi-plus" />
        </div>
    </template>
</CascadeSelect>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Select a City">
            <template #option="slotProps">
                <div class="flex items-center">
                    <img v-if="slotProps.option.states" :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px"  />
                    <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
                    <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
                    <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
                </div>
            </template>
            <template #dropdownicon>
                <i class="pi pi-map" />
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="px-3 py-1">
                    <Button label="Add New" fluid severity="secondary" variant="text" size="small" icon="pi pi-plus" />
                </div>
            </template>
        </CascadeSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>
```

</details>

## Cascade Select

### Props

| Name                  | Type                                          | Default                     | Description                                                                                                                                                           |
| --------------------- | --------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue            | any                                           | -                           | Value of the component.                                                                                                                                               |
| defaultValue          | any                                           | -                           | The default value for the input when not controlled by `modelValue` .                                                                                                 |
| name                  | string                                        | -                           | The name attribute for the element, typically used in form submissions.                                                                                               |
| options               | any[]                                         | -                           | An array of selectitems to display as the available options.                                                                                                          |
| optionLabel           | string \| Function                            | -                           | Property name or getter function to use as the label of an option.                                                                                                    |
| optionValue           | string \| Function                            | -                           | Property name or getter function to use as the value of an option, defaults to the option itself when not defined.                                                    |
| optionDisabled        | string \| Function                            | -                           | Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.                                                        |
| optionGroupLabel      | string \| Function                            | -                           | Property name or getter function to use as the label of an option group.                                                                                              |
| optionGroupChildren   | string \| string[] \| Function                | -                           | Property name or getter function to retrieve the items of a group.                                                                                                    |
| placeholder           | string                                        | -                           | Default text to display when no option is selected.                                                                                                                   |
| breakpoint            | string                                        | 960px                       | The breakpoint to define the maximum width boundary.                                                                                                                  |
| size                  | HintedString<"small" \| "large">              | -                           | Defines the size of the component.                                                                                                                                    |
| invalid               | boolean                                       | false                       | When present, it specifies that the component should have invalid state style.                                                                                        |
| disabled              | boolean                                       | false                       | When present, it specifies that the component should be disabled.                                                                                                     |
| variant               | null \| HintedString<"outlined" \| "filled">  | null                        | Specifies the input variant of the component.                                                                                                                         |
| dataKey               | string                                        | -                           | A property to uniquely identify an option.                                                                                                                            |
| showClear             | boolean                                       | false                       | When enabled, a clear icon is displayed to clear the value.                                                                                                           |
| clearIcon             | string                                        | -                           | Icon to display in clear button.                                                                                                                                      |
| inputId               | string                                        | -                           | Identifier of the underlying input element.                                                                                                                           |
| inputStyle            | object                                        | -                           | Inline style of the input field.                                                                                                                                      |
| inputClass            | string \| object                              | -                           | Style class of the input field.                                                                                                                                       |
| inputProps            | InputHTMLAttributes                           | -                           | Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.                                                              |
| panelStyle            | object                                        | -                           |                                                                                                                                                                       |
| panelClass            | string \| object                              | -                           |                                                                                                                                                                       |
| panelProps            | HTMLAttributes                                | -                           |                                                                                                                                                                       |
| overlayStyle          | object                                        | -                           | Inline style of the overlay overlay.                                                                                                                                  |
| overlayClass          | string \| object                              | -                           | Style class of the overlay overlay.                                                                                                                                   |
| overlayProps          | HTMLAttributes                                | -                           | Used to pass all properties of the HTMLDivElement to the overlay overlay inside the component.                                                                        |
| appendTo              | HTMLElement \| HintedString<"body" \| "self"> | body                        | A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself. |
| loading               | boolean                                       | false                       | Whether the dropdown is in loading state.                                                                                                                             |
| dropdownIcon          | string                                        | -                           | Icon to display in the dropdown.                                                                                                                                      |
| loadingIcon           | string                                        | -                           | Icon to display in loading state.                                                                                                                                     |
| optionGroupIcon       | string                                        | -                           | Icon to display in the option group.                                                                                                                                  |
| autoOptionFocus       | boolean                                       | false                       | Whether to focus on the first visible or selected element when the overlay panel is shown.                                                                            |
| selectOnFocus         | boolean                                       | false                       | When enabled, the focused option is selected/opened.                                                                                                                  |
| focusOnHover          | boolean                                       | true                        | When enabled, the focus is placed on the hovered option.                                                                                                              |
| searchLocale          | string                                        | -                           | Locale to use in searching. The default locale is the host environment's current locale.                                                                              |
| searchMessage         | string                                        | '{0} results are available' | Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.                             |
| selectionMessage      | string                                        | '{0} items selected'        | Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.                                      |
| emptySelectionMessage | string                                        | No selected item            | Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.                                |
| emptySearchMessage    | string                                        | No results found            | Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.                                                     |
| emptyMessage          | string                                        | No available options        | Text to be displayed when there are no options available. Defaults to value from PrimeVue locale configuration.                                                       |
| tabindex              | string \| number                              | -                           | Index of the element in tabbing order.                                                                                                                                |
| fluid                 | boolean                                       | null                        | Spans 100% width of the container when enabled.                                                                                                                       |
| ariaLabelledby        | string                                        | -                           | Establishes relationships between the component and label(s) where its value should be one or more element IDs.                                                       |
| ariaLabel             | string                                        | -                           | Establishes a string value that labels the component.                                                                                                                 |
| formControl           | Record<string, any>                           | -                           | Form control object, typically used for handling validation and form state.                                                                                           |
| dt                    | any                                           | -                           | It generates scoped CSS variables using design tokens for the component.                                                                                              |
| pt                    | PassThrough<CascadeSelectPassThroughOptions>  | -                           | Used to pass attributes to DOM elements inside the component.                                                                                                         |
| ptOptions             | any                                           | -                           | Used to configure passthrough(pt) options of the component.                                                                                                           |
| unstyled              | boolean                                       | false                       | When enabled, it removes component related styles in the core.                                                                                                        |

## Pass Through Options

| Name                  | Type                                   | Description                                                                   |
| --------------------- | -------------------------------------- | ----------------------------------------------------------------------------- |
| root                  | CascadeSelectPassThroughOptionType     | Used to pass attributes to the root's DOM element.                            |
| input                 | CascadeSelectPassThroughOptionType     | Used to pass attributes to the input's DOM element.                           |
| label                 | CascadeSelectPassThroughOptionType     | Used to pass attributes to the label's DOM element.                           |
| clearIcon             | CascadeSelectPassThroughOptionType     | Used to pass attributes to the label's DOM element.                           |
| dropdown              | CascadeSelectPassThroughOptionType     | Used to pass attributes to the dropdown button's DOM element.                 |
| dropdownIcon          | CascadeSelectPassThroughOptionType     | Used to pass attributes to the dropdown icon's DOM element.                   |
| loadingIcon           | CascadeSelectPassThroughOptionType     | Used to pass attributes to the loading icon's DOM element.                    |
| overlay               | CascadeSelectPassThroughOptionType     | Used to pass attributes to the overlay's DOM element.                         |
| listContainer         | CascadeSelectPassThroughOptionType     | Used to pass attributes to the list container's DOM element.                  |
| list                  | CascadeSelectPassThroughOptionType     | Used to pass attributes to the list's DOM element.                            |
| option                | CascadeSelectPassThroughOptionType     | Used to pass attributes to the option's DOM element.                          |
| optionContent         | CascadeSelectPassThroughOptionType     | Used to pass attributes to the option content's DOM element.                  |
| optionText            | CascadeSelectPassThroughOptionType     | Used to pass attributes to the option text's DOM element.                     |
| optionList            | CascadeSelectPassThroughOptionType     | Used to pass attributes to the option list's DOM element.                     |
| groupIconContainer    | CascadeSelectPassThroughOptionType     | Used to pass attributes to the group icon container's DOM element.            |
| groupIcon             | CascadeSelectPassThroughOptionType     | Used to pass attributes to the group icon's DOM element.                      |
| hiddenInputContainer  | CascadeSelectPassThroughOptionType     | Used to pass attributes to the hidden input container's DOM element.          |
| hiddenInput           | CascadeSelectPassThroughOptionType     | Used to pass attributes to the hidden input's DOM element.                    |
| hiddenSelectedMessage | CascadeSelectPassThroughOptionType     | Used to pass attributes to the hidden selected message's DOM element.         |
| hiddenSearchResult    | CascadeSelectPassThroughOptionType     | Used to pass attributes to the search result message text aria's DOM element. |
| hooks                 | any                                    | Used to manage all lifecycle hooks.                                           |
| transition            | CascadeSelectPassThroughTransitionType | Used to control Vue Transition API.                                           |

## Theming

### CSS Classes

| Class                          | Description                              |
| ------------------------------ | ---------------------------------------- |
| p-cascadeselect                | Class name of the root element           |
| p-cascadeselect-label          | Class name of the label element          |
| p-cascadeselect-dropdown       | Class name of the dropdown element       |
| p-cascadeselect-loading-icon   | Class name of the loading icon element   |
| p-cascadeselect-clear-icon     | Class name of the dropdown icon element  |
| p-cascadeselect-dropdown-icon  | Class name of the dropdown icon element  |
| p-cascadeselect-overlay        | Class name of the overlay element        |
| p-cascadeselect-list-container | Class name of the list container element |
| p-cascadeselect-list           | Class name of the list element           |
| p-cascadeselect-item           | Class name of the item element           |
| p-cascadeselect-item-content   | Class name of the item content element   |
| p-cascadeselect-item-text      | Class name of the item text element      |
| p-cascadeselect-group-icon     | Class name of the group icon element     |
| p-cascadeselect-item-list      | Class name of the item list element      |

### Design Tokens

| Token                                          | CSS Variable                                       | Description                         |
| ---------------------------------------------- | -------------------------------------------------- | ----------------------------------- |
| cascadeselect.background                       | --p-cascadeselect-background                       | Background of root                  |
| cascadeselect.disabled.background              | --p-cascadeselect-disabled-background              | Disabled background of root         |
| cascadeselect.filled.background                | --p-cascadeselect-filled-background                | Filled background of root           |
| cascadeselect.filled.hover.background          | --p-cascadeselect-filled-hover-background          | Filled hover background of root     |
| cascadeselect.filled.focus.background          | --p-cascadeselect-filled-focus-background          | Filled focus background of root     |
| cascadeselect.border.color                     | --p-cascadeselect-border-color                     | Border color of root                |
| cascadeselect.hover.border.color               | --p-cascadeselect-hover-border-color               | Hover border color of root          |
| cascadeselect.focus.border.color               | --p-cascadeselect-focus-border-color               | Focus border color of root          |
| cascadeselect.invalid.border.color             | --p-cascadeselect-invalid-border-color             | Invalid border color of root        |
| cascadeselect.color                            | --p-cascadeselect-color                            | Color of root                       |
| cascadeselect.disabled.color                   | --p-cascadeselect-disabled-color                   | Disabled color of root              |
| cascadeselect.placeholder.color                | --p-cascadeselect-placeholder-color                | Placeholder color of root           |
| cascadeselect.invalid.placeholder.color        | --p-cascadeselect-invalid-placeholder-color        | Invalid placeholder color of root   |
| cascadeselect.shadow                           | --p-cascadeselect-shadow                           | Shadow of root                      |
| cascadeselect.padding.x                        | --p-cascadeselect-padding-x                        | Padding x of root                   |
| cascadeselect.padding.y                        | --p-cascadeselect-padding-y                        | Padding y of root                   |
| cascadeselect.border.radius                    | --p-cascadeselect-border-radius                    | Border radius of root               |
| cascadeselect.focus.ring.width                 | --p-cascadeselect-focus-ring-width                 | Focus ring width of root            |
| cascadeselect.focus.ring.style                 | --p-cascadeselect-focus-ring-style                 | Focus ring style of root            |
| cascadeselect.focus.ring.color                 | --p-cascadeselect-focus-ring-color                 | Focus ring color of root            |
| cascadeselect.focus.ring.offset                | --p-cascadeselect-focus-ring-offset                | Focus ring offset of root           |
| cascadeselect.focus.ring.shadow                | --p-cascadeselect-focus-ring-shadow                | Focus ring shadow of root           |
| cascadeselect.transition.duration              | --p-cascadeselect-transition-duration              | Transition duration of root         |
| cascadeselect.sm.font.size                     | --p-cascadeselect-sm-font-size                     | Sm font size of root                |
| cascadeselect.sm.padding.x                     | --p-cascadeselect-sm-padding-x                     | Sm padding x of root                |
| cascadeselect.sm.padding.y                     | --p-cascadeselect-sm-padding-y                     | Sm padding y of root                |
| cascadeselect.lg.font.size                     | --p-cascadeselect-lg-font-size                     | Lg font size of root                |
| cascadeselect.lg.padding.x                     | --p-cascadeselect-lg-padding-x                     | Lg padding x of root                |
| cascadeselect.lg.padding.y                     | --p-cascadeselect-lg-padding-y                     | Lg padding y of root                |
| cascadeselect.dropdown.width                   | --p-cascadeselect-dropdown-width                   | Width of dropdown                   |
| cascadeselect.dropdown.color                   | --p-cascadeselect-dropdown-color                   | Color of dropdown                   |
| cascadeselect.overlay.background               | --p-cascadeselect-overlay-background               | Background of overlay               |
| cascadeselect.overlay.border.color             | --p-cascadeselect-overlay-border-color             | Border color of overlay             |
| cascadeselect.overlay.border.radius            | --p-cascadeselect-overlay-border-radius            | Border radius of overlay            |
| cascadeselect.overlay.color                    | --p-cascadeselect-overlay-color                    | Color of overlay                    |
| cascadeselect.overlay.shadow                   | --p-cascadeselect-overlay-shadow                   | Shadow of overlay                   |
| cascadeselect.list.padding                     | --p-cascadeselect-list-padding                     | Padding of list                     |
| cascadeselect.list.gap                         | --p-cascadeselect-list-gap                         | Gap of list                         |
| cascadeselect.list.mobile.indent               | --p-cascadeselect-list-mobile-indent               | Mobile indent of list               |
| cascadeselect.option.focus.background          | --p-cascadeselect-option-focus-background          | Focus background of option          |
| cascadeselect.option.selected.background       | --p-cascadeselect-option-selected-background       | Selected background of option       |
| cascadeselect.option.selected.focus.background | --p-cascadeselect-option-selected-focus-background | Selected focus background of option |
| cascadeselect.option.color                     | --p-cascadeselect-option-color                     | Color of option                     |
| cascadeselect.option.focus.color               | --p-cascadeselect-option-focus-color               | Focus color of option               |
| cascadeselect.option.selected.color            | --p-cascadeselect-option-selected-color            | Selected color of option            |
| cascadeselect.option.selected.focus.color      | --p-cascadeselect-option-selected-focus-color      | Selected focus color of option      |
| cascadeselect.option.padding                   | --p-cascadeselect-option-padding                   | Padding of option                   |
| cascadeselect.option.border.radius             | --p-cascadeselect-option-border-radius             | Border radius of option             |
| cascadeselect.option.icon.color                | --p-cascadeselect-option-icon-color                | Icon color of option                |
| cascadeselect.option.icon.focus.color          | --p-cascadeselect-option-icon-focus-color          | Icon focus color of option          |
| cascadeselect.option.icon.size                 | --p-cascadeselect-option-icon-size                 | Icon size of option                 |
| cascadeselect.clear.icon.color                 | --p-cascadeselect-clear-icon-color                 | Color of clear icon                 |
