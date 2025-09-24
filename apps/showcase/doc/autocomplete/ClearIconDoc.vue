<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>showClear</i> is enabled, a clear icon is added to reset the AutoComplete.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" showClear :suggestions="items" @complete="search" inputClass="w-56" />
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
<AutoComplete v-model="value" showClear :suggestions="items" @complete="search" inputClass="w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" showClear :suggestions="items" @complete="search" inputClass="w-56" />
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
        <AutoComplete v-model="value" showClear :suggestions="items" @complete="search" inputClass="w-56" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
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
