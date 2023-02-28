<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </span>
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
<span class="p-float-label">
    <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
    <label for="ac">Float Label</label>
</span>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </span>
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
        <span class="p-float-label">
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </span>
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
