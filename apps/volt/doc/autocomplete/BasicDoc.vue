<template>
    <DocSectionText v-bind="$attrs">
        <p>AutoComplete is used with the <i>v-model</i> property for two-way value binding. In addition, <i>suggestions</i> property and a <i>complete</i> method are required to query the results.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import AutoComplete from '@/volt/AutoComplete.vue';
import { ref } from 'vue';

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup lang="ts">
import AutoComplete from '@/volt/AutoComplete.vue';
import { ref } from 'vue';

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
`);
</script>
