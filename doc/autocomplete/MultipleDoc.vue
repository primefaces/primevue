<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />
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
<AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />
`,
                options: `
<template>
    <div class="card p-fluid">
        <AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />
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
    <div class="card p-fluid">
        <AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />
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
