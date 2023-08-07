<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <NuxtLink to="/tailwind">Tailwind Customization</NuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    progressbar: {
        root: {
            class: ['overflow-hidden relative', 'border-0 h-6 bg-gray-200 rounded-md dark:bg-gray-800']
        },
        value: ({ props }) => ({
            class: [
                'border-0 m-0 bg-blue-500',
                {
                    'transition-width duration-1000 ease-in-out absolute items-center border-0 flex h-full justify-center overflow-hidden w-0': props.mode !== 'indeterminate',
                    'progressbar-value-animate before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000': props.mode == 'indeterminate'
                }
            ]
        }),
        label: {
            class: ['inline-flex', 'text-white leading-6']
        }
    }
}
`
            },
            code2: {
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
