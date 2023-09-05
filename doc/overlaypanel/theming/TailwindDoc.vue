<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
export default {
    overlaypanel: {
        root: {
            class: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'absolute left-0 top-0',
                'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white dark:before:border-b-gray-900',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        },
        content: 'p-5 items-center flex',
        transition: TRANSITIONS.overlay
    }
}
`
            },
            code2: {
                composition: `<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op">
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
<\/script>`
            }
        };
    }
};
</script>
