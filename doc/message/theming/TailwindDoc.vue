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
export default {
    message: {
        root: ({ props }) => ({
            class: [
                'my-4 rounded-md',
                {
                    'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': props.severity == 'info',
                    'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': props.severity == 'success',
                    'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': props.severity == 'warn',
                    'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': props.severity == 'error'
                }
            ]
        }),
        wrapper: 'flex items-center py-5 px-7',
        icon: {
            class: ['w-6 h-6', 'text-lg mr-2']
        },
        text: 'text-base font-normal',
        button: {
            class: ['w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-white/30']
        },
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-300',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
            leaveToClass: 'max-h-0 opacity-0 !m-0'
        }
    }
}
`
            },
            code2: {
                composition: `<template>
    <div class="card">
        <Message severity="success">Success Message Content</Message>
        <Message severity="info">Info Message Content</Message>
        <Message severity="warn">Warning Message Content</Message>
        <Message severity="error">Error Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
