<template>
    <DocSectionText v-bind="$attrs">
        <p>Value is reactive so updating it dynamically changes the bar as well.</p>
    </DocSectionText>
    <div class="card">
        <ProgressBar :value="value"></ProgressBar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 0,
            interval: null,
            code: {
                basic: `
<ProgressBar :value="value"></ProgressBar>
`,
                options: `
<template>
    <div class="card">
        <Toast></Toast>
        <ProgressBar :value="value1" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            interval: null
        };
    },
    mounted() {
        this.startProgress();
    },
    beforeUnmount() {
        this.endProgress();
    },
    methods: {
        startProgress() {
            this.interval = setInterval(() => {
                let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;

                if (newValue >= 100) {
                    newValue = 100;
                    this.$toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
                }

                this.value1 = newValue;
            }, 2000);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
};
<\/script>
`,
                composition: `
<template>
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
<\/script>
`
            }
        };
    },
    mounted() {
        this.startProgress();
    },
    beforeUnmount() {
        this.endProgress();
    },
    methods: {
        startProgress() {
            this.interval = setInterval(() => {
                let newValue = this.value + Math.floor(Math.random() * 10) + 1;

                if (newValue >= 100) {
                    newValue = 100;
                    this.$toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
                    this.endProgress();
                }

                this.value = newValue;
            }, 2000);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
};
</script>
