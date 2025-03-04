<template>
    <DocSectionText v-bind="$attrs">
        <p>Busy state is controlled with the <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button type="button" label="Search" icon="pi pi-check" :loading="loading" @click="load" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button type="button" label="Search" icon="pi pi-check" :loading="loading" @click="load" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
<\/script>
`);
</script>
