<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card">
        <ProgressBar :value="50"></ProgressBar>
    </div>
    <div class="card">
        <Toast></Toast>
        <ProgressBar :value="value1" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "primevue/usetoast";

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const toast = useToast();
const value1 = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
            toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};
<\/script>`
            }
        };
    }
};
</script>
