<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" variant="filled" />
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
<AutoComplete v-model="value" :suggestions="items" @complete="search" variant="filled" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" variant="filled" />
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
        <AutoComplete v-model="value" :suggestions="items" @complete="search" variant="filled" />
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
