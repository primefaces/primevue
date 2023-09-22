<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" class="p-invalid" />
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
<AutoComplete v-model="value" :suggestions="items" @complete="search" class="p-invalid" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" class="p-invalid" />
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
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`
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
