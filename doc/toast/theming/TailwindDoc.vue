<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
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
export default {
    toast: {
        root: {
            class: ['w-96', 'opacity-90']
        },
        container: ({ props }) => ({
            class: [
                'my-4 rounded-md w-full',
                {
                    'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': props.message.severity == 'info',
                    'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': props.message.severity == 'success',
                    'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': props.message.severity == 'warn',
                    'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': props.message.severity == 'error'
                }
            ]
        }),
        content: 'flex items-center py-5 px-7',
        icon: {
            class: ['w-6 h-6', 'text-lg mr-2']
        },
        text: 'text-base font-normal flex flex-col flex-1 grow shrink ml-4',
        summary: 'font-bold block',
        detail: 'mt-1 block',
        closebutton: {
            class: ['w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-white/30']
        },
        transition: {
            enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
            enterActiveClass: 'transition-transform transition-opacity duration-300',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'transition-all duration-500 ease-in',
            leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warning" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};
<\/script>
`
            }
        };
    }
};
</script>
