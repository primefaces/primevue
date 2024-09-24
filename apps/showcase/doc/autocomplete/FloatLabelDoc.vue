<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <AutoComplete v-model="value1" inputId="over_label" :suggestions="items" @complete="search" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <AutoComplete v-model="value2" inputId="in_label" :suggestions="items" @complete="search" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <AutoComplete v-model="value3" inputId="on_label" :suggestions="items" @complete="search" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            items: [],
            code: {
                basic: `
<FloatLabel>
    <AutoComplete v-model="value1" inputId="over_label" :suggestions="items" @complete="search" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <AutoComplete v-model="value2" inputId="in_label" :suggestions="items" @complete="search" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <AutoComplete v-model="value3" inputId="on_label" :suggestions="items" @complete="search" />
    <label for="on_label">On Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <AutoComplete v-model="value1" inputId="over_label" :suggestions="items" @complete="search" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <AutoComplete v-model="value2" inputId="in_label" :suggestions="items" @complete="search" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <AutoComplete v-model="value3" inputId="on_label" :suggestions="items" @complete="search" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
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
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <AutoComplete v-model="value1" inputId="over_label" :suggestions="items" @complete="search" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <AutoComplete v-model="value2" inputId="in_label" :suggestions="items" @complete="search" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <AutoComplete v-model="value3" inputId="on_label" :suggestions="items" @complete="search" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
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
