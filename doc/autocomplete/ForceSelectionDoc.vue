<template>
    <DocSectionText v-bind="$attrs">
        <p>
            ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions. Simply enable
            <i>forceSelection</i> to enforce that input is always from the suggestion list.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />
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
<AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />
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
        <AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />
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
