<template>
    <DocSectionText v-bind="$attrs">
        <p>Option groups are specified with the <i>optionGroupLabel</i> and <i>optionGroupChildren</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Hint: type 'a'">
            <template #optiongroup="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import AutoComplete from '@/volt/AutoComplete.vue';
import { FilterMatchMode, FilterService } from '@primevue/core/api';
import { ref } from 'vue';

const selectedCity = ref(null);
const filteredCities = ref(null);
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
            newFilteredCities.push({ ...country, ...{ items: filteredItems } });
        }
    }

    filteredCities.value = newFilteredCities;
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Hint: type 'a'">
            <template #optiongroup="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup lang="ts">
import AutoComplete from '@/volt/AutoComplete.vue';
import { FilterMatchMode, FilterService } from '@primevue/core/api';
import { ref } from 'vue';

const selectedCity = ref(null);
const filteredCities = ref(null);
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
            newFilteredCities.push({ ...country, ...{ items: filteredItems } });
        }
    }

    filteredCities.value = newFilteredCities;
};
<\/script>
`);
</script>
