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
    button: {
        root: ({ props, context }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
                'transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0',
                {
                    'text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:border-blue-600 dark:hover:border-blue-500 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.link
                },
                {
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(203,213,225,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'secondary',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(136,234,172,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(134,239,172,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'success',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'info',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(250,207,133,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,211,77,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'warning',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(212,170,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(216,180,254,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'help',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,165,165,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'danger'
                },
                {
                    'text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:border-gray-600 dark:hover:border-gray-500':
                        props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500':
                        props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 dark:bg-blue-400 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500':
                        props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500':
                        props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500':
                        props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500':
                        props.severity === 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 dark:text-blue-400 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 dark:text-gray-400 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                    'text-green-500 dark:text-green-400 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                    'text-orange-500 dark:text-orange-400 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                    'text-purple-500 dark:text-purple-400 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                    'text-red-500 dark:text-red-400 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain && props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain && props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain && !props.outlined && !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 dark:text-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'flex-column': props.iconPos == 'top' || props.iconPos == 'bottom' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            ]
        }),
        label: ({ props }) => ({
            class: [
                'flex-1',
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                },
                { 'invisible w-0': props.label == null }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'mx-0',
                {
                    'mr-2': props.iconPos == 'left' && props.label != null,
                    'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                    'mb-2': props.iconPos == 'top' && props.label != null,
                    'mt-2 order-2': props.iconPos == 'bottom' && props.label != null
                }
            ]
        }),
        badge: ({ props }) => ({
            class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
        })
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
    </div>
</template>`
            }
        };
    }
};
</script>
