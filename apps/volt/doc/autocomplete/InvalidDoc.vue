<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" :invalid="!value" placeholder="Code" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import AutoComplete from '@/volt/autocomplete';
import { ref } from 'vue';

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
};

const code = ref(`
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" :invalid="!value" placeholder="Code" />
    </div>
</template>

<script setup>
import AutoComplete from '@/volt/autocomplete';
import { ref } from 'vue';

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
`);
</script>
