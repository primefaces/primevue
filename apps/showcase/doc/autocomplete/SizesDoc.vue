<template>
    <DocSectionText v-bind="$attrs">
        <p>AutoComplete provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items1" @complete="search" size="small" placeholder="Small" />
        <AutoComplete v-model="value2" :suggestions="items2" @complete="search" placeholder="Normal" />
        <AutoComplete v-model="value3" :suggestions="items3" @complete="search" size="large" placeholder="Large" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            items1: [],
            items2: [],
            items3: [],
            code: {
                basic: `
<AutoComplete v-model="value1" :suggestions="items1" @complete="search" size="small" placeholder="Small" />
<AutoComplete v-model="value2" :suggestions="items2" @complete="search" placeholder="Normal" />
<AutoComplete v-model="value3" :suggestions="items3" @complete="search" size="large" placeholder="Large" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items1" @complete="search" size="small" placeholder="Small" />
        <AutoComplete v-model="value2" :suggestions="items2" @complete="search" placeholder="Normal" />
        <AutoComplete v-model="value3" :suggestions="items3" @complete="search" size="large" placeholder="Large" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            items1: [],
            items2: [],
            items3: [],
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items1" @complete="search" size="small" placeholder="Small" />
        <AutoComplete v-model="value2" :suggestions="items2" @complete="search" placeholder="Normal" />
        <AutoComplete v-model="value3" :suggestions="items3" @complete="search" size="large" placeholder="Large" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const items1 = ref([]);
const items2 = ref([]);
const items3 = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
`
            }
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
</script>
