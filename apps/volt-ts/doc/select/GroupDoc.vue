<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Options can be grouped when a nested data structures is provided. To define the label of a group <i>optionGroupLabel</i> property is needed and also <i>optionGroupChildren</i> is required to define the property that refers to the children
            of a group.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select a City" class="w-full md:w-56">
            <template #optiongroup="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Select>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
import { ref } from 'vue';

const selectedCity = ref();
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

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select a City" class="w-full md:w-56">
            <template #optiongroup="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Select>
    </div>
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
import { ref } from 'vue';

const selectedCity = ref();
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
`);
</script>
