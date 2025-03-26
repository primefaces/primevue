<template>
    <DocSectionText v-bind="$attrs">
        <p>AutoComplete provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items" @complete="search" size="small" placeholder="Small" dropdown />
        <AutoComplete v-model="value2" :suggestions="items" @complete="search" placeholder="Normal" dropdown />
        <AutoComplete v-model="value3" :suggestions="items" @complete="search" size="large" placeholder="Large" dropdown />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import AutoComplete from '@/volt/AutoComplete.vue';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const items = ref([]);

const search = () => {
    items.value = [];
};

const code = ref(`
<template>
    <div class="card flex flex-col items-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items" @complete="search" size="small" placeholder="Small" dropdown />
        <AutoComplete v-model="value2" :suggestions="items" @complete="search" placeholder="Normal" dropdown />
        <AutoComplete v-model="value3" :suggestions="items" @complete="search" size="large" placeholder="Large" dropdown />
    </div>
</template>

<script setup>
import AutoComplete from '@/volt/AutoComplete.vue';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const items = ref([]);

const search = () => {
    items.value = [];
}
<\/script>
`);
</script>
