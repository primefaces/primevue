<template>
    <DocSectionText v-bind="$attrs">
        <p>AutoComplete is used as a controlled component with <i>v-model</i> property. In addition, <i>suggestions</i> property and a <i>complete</i> method are required to query the results.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            items: [],
            code: {
                basic: `
<AutoComplete v-model="value" :suggestions="items" @complete="search" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
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
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
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
