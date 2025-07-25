<template>
    <DocSectionText v-bind="$attrs">
        <p>
            For advanced filtering scenarios, Dropdown supports custom filtering logic through the <i>custom-filter</i> property. This allows you to implement complex search algorithms, such as multi-word searches or specialized matching criteria that go beyond the built-in filtering capabilities.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Dropdown
            v-model="selectedCountry"
            :options="countries"
            filter
            :custom-filter="filterCountry"
            optionLabel="name"
            placeholder="Select a Country"
            class="w-full md:w-14rem"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
            countries: [
                { name: 'USA (New York, Los Angeles, Chicago)', code: 'USA' },
                { name: 'Italy (Rome, Milan, Naples)', code: 'ITA' },
                { name: 'UK (London, Manchester, Birmingham)', code: 'UK' },
                { name: 'Turkey (Istanbul, Ankara, Izmir)', code: 'TUR' },
                { name: 'France (Paris, Marseille, Lyon)', code: 'FRA' }
            ],
            code: {
                basic: `
<Dropdown v-model="selectedCountry" :options="countries" filter :custom-filter="filterCountry" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCountry" :options="countries" filter :custom-filter="filterCountry" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
            countries: [
                { name: 'USA (New York, Los Angeles, Chicago)', code: 'USA' },
                { name: 'Italy (Rome, Milan, Naples)', code: 'ITA' },
                { name: 'UK (London, Manchester, Birmingham)', code: 'UK' },
                { name: 'Turkey (Istanbul, Ankara, Izmir)', code: 'TUR' },
                { name: 'France (Paris, Marseille, Lyon)', code: 'FRA' }
            ]
        };
    },
    methods: {
        filterCountry(options, filterValue) {
            return options.filter((option) => {
                if (!filterValue) {
                    return true;
                }

                const searchWords = filterValue.toLowerCase()
                    .split(' ')
                    .filter(word => word.length > 0);

                const optionText = option.name.toLowerCase();

                return searchWords.every(word => optionText.includes(word));
            });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCountry" :options="countries" filter :custom-filter="filterCountry" optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountry = ref();
const countries = ref([
    { name: 'USA (New York, Los Angeles, Chicago)', code: 'USA' },
    { name: 'Italy (Rome, Milan, Naples)', code: 'ITA' },
    { name: 'UK (London, Manchester, Birmingham)', code: 'UK' },
    { name: 'Turkey (Istanbul, Ankara, Izmir)', code: 'TUR' },
    { name: 'France (Paris, Marseille, Lyon)', code: 'FRA' }
]);
const filterCountry = (options, filterValue) => {
    return options.filter((option) => {
        if (!filterValue) {
            return true;
        }

        const searchWords = filterValue.toLowerCase()
            .split(' ')
            .filter(word => word.length > 0);

        const optionText = option.name.toLowerCase();

        return searchWords.every(word => optionText.includes(word));
    });
};
<\/script>
`
            }
        };
    },
    methods: {
        filterCountry(options, filterValue) {
            return options.filter((option) => {
                if (!filterValue) {
                    return true;
                }

                const searchWords = filterValue.toLowerCase()
                    .split(' ')
                    .filter(word => word.length > 0);

                const optionText = option.name.toLowerCase();

                return searchWords.every(word => optionText.includes(word));
            });
        }
    }
};
</script>
