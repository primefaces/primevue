<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
    </DocSectionText>
    <div class="card">
        <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
        <AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

        <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
        <AutoComplete v-model="value2" inputId="multiple-ac-2" multiple fluid @complete="search" :typeahead="false" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import AutoComplete from '@/volt/AutoComplete.vue';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
};

const code = ref(`
<template>
    <div class="card">
        <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
        <AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

        <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
        <AutoComplete v-model="value2" inputId="multiple-ac-2" multiple fluid @complete="search" :typeahead="false" />
    </div>
</template>

<script setup>
import AutoComplete from '@/volt/AutoComplete.vue';
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
`);
</script>
