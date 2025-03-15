<template>
    <DocSectionText v-bind="$attrs">
        <p>Select component supports RTL (Right-To-Left) mode and properly aligns the overlay panel based on the text direction.</p>
    </DocSectionText>
    <div class="card">
        <SelectDemo />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
import SelectDemo from '@/components/select/SelectDemo.vue';

export default {
    data() {
        return {
            code: {
                basic: `
<template>
    <div class="card">
        <h2>RTL Support Test</h2>
        <div class="flex align-items-center mb-4">
            <label class="mr-2">Direction:</label>
            <Button @click="toggleDirection">{{ direction === 'ltr' ? 'Switch to RTL' : 'Switch to LTR' }}</Button>
        </div>

        <div :dir="direction" class="p-4 border-round surface-card">
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" :class="'w-full md:w-14rem'" />
        </div>

        <div class="mt-4">
            <p>Current direction: {{ direction }}</p>
            <p>Selected value: {{ selectedCity?.name }}</p>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import Select from 'primevue/select';
import { ref } from 'vue';

export default {
    components: {
        Button,
        Select
    },
    setup() {
        const direction = ref('ltr');
        const selectedCity = ref(null);
        const cities = ref([
            { name: 'New York', code: 'NY' },
            { name: 'London', code: 'LDN' },
            { name: 'Paris', code: 'PRS' },
            { name: 'Tokyo', code: 'TKY' },
            { name: 'Jerusalem', code: 'JLM' }
        ]);

        const toggleDirection = () => {
            direction.value = direction.value === 'ltr' ? 'rtl' : 'ltr';
            document.dir = direction.value;
        };

        return {
            direction,
            selectedCity,
            cities,
            toggleDirection
        };
    }
};
<\/script>
`
            }
        };
    },
    components: {
        SelectDemo
    }
};
</script>
