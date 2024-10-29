<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items" @complete="search" :invalid="!value1" placeholder="Code" />
        <AutoComplete v-model="value2" :suggestions="items" @complete="search" :invalid="!value2" variant="filled" placeholder="Code" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            items: [],
            code: {
                basic: `
<AutoComplete v-model="value1" :suggestions="items" @complete="search" :invalid="!value1" placeholder="Code" />
<AutoComplete v-model="value2" :suggestions="items" @complete="search" :invalid="!value2" variant="filled" placeholder="Code" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items" @complete="search" :invalid="!value1" placeholder="Code" />
        <AutoComplete v-model="value2" :suggestions="items" @complete="search" :invalid="!value2" variant="filled" placeholder="Code" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
                value2: '',
            items: []
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
    <div class="card flex flex-wrap justify-center gap-4">
        <AutoComplete v-model="value1" :suggestions="items" @complete="search" :invalid="!value1" placeholder="Code" />
        <AutoComplete v-model="value2" :suggestions="items" @complete="search" :invalid="!value2" variant="filled" placeholder="Code" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref('');
const value2 = ref('');
const items = ref([]);

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
