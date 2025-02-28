<template>
    <DocSectionText v-bind="$attrs">
        <p>Busy state is controlled with the <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button type="button" label="Search" icon="pi pi-check" :loading="loading" @click="load" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            code: {
                basic: `
<Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
<\/script>
`
            }
        };
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    }
};
</script>
