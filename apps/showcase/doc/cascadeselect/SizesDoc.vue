<template>
    <DocSectionText v-bind="$attrs">
        <p>CascadeSelect provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <CascadeSelect v-model="value1" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" size="small" placeholder="Small" />
        <CascadeSelect v-model="value2" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" placeholder="Normal" />
        <CascadeSelect v-model="value3" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" class="w-56" size="large" placeholder="Large" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            countries: [
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
            ],
            code: {
                basic: `
<CascadeSelect v-model="value1" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" 
    class="w-56" size="small" placeholder="Small" />
<CascadeSelect v-model="value2" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" 
    class="w-56" placeholder="Normal" />
<CascadeSelect v-model="value3" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" 
    class="w-56" size="large" placeholder="Large" />
`,
                options: `
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

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            countries: [
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
            ]
        }
    }
}
<\/script>
`,
                composition: `
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
`
            }
        };
    }
};
</script>
