<template>
    <DocSectionText v-bind="$attrs">
        <p>IftaLabel is used to create infield top aligned labels. Visit <PrimeVueNuxtLink to="/iftalabel">IftaLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <IftaLabel>
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Identifier</label>
        </IftaLabel>
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
<IftaLabel>
    <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
    <label for="ac">Identifier</label>
</IftaLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Identifier</label>
        </IftaLabel>
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
        <IftaLabel>
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Identifier</label>
        </IftaLabel>
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
