<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel>
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </FloatLabel>
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
<FloatLabel>
    <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
    <label for="ac">Float Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </FloatLabel>
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
        <FloatLabel>
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </FloatLabel>
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
