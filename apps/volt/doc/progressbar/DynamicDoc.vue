<template>
    <DocSectionText v-bind="$attrs">
        <p>Value is reactive so updating it dynamically changes the bar as well.</p>
    </DocSectionText>
    <div class="card">
        <ProgressBar :value="progress"></ProgressBar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import ProgressBar from '@/volt/progressbar';
import { onBeforeUnmount, onMounted, ref } from 'vue';

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const progress = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = progress.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
        }
        progress.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};

const code = ref(`
<template>
    <div class="card">
        <ProgressBar :value="progress"></ProgressBar>
    </div>
</template>

<script setup>
import ProgressBar from '@/volt/progressbar';
import { onBeforeUnmount, onMounted, ref } from 'vue';

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const progress = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = progress.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
        }
        progress.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};
<\/script>
`);
</script>
