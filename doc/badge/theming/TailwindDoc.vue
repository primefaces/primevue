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
    directives: {
        badge: {
            root: ({ context }) => ({
                class: [
                    'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0',
                    'text-xs leading-6 flex items-center justify-center',
                    'text-center text-white font-bold',
                    {
                        'rounded-full p-0': context.nogutter || context.dot,
                        'rounded-[10px] px-2': !context.nogutter && !context.dot,
                        'min-w-[0.5rem] w-2 h-2': context.dot,
                        'min-w-[1.5rem] h-6': !context.dot
                    },
                    {
                        'bg-blue-500 ': context.info || (!context.info && !context.success && !context.warning && !context.danger),
                        'bg-green-500 ': context.success,
                        'bg-orange-500 ': context.warning,
                        'bg-red-500 ': context.danger
                    }
                ]
            })
        }
    },
    badge: {
        root: ({ props }) => ({
            class: [
                'rounded-full p-0 text-center inline-block',
                'bg-blue-500 text-white font-bold',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null,
                    'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large',
                    'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge'
                }
            ]
        })
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
    </div>

    <div class="card flex flex-wrap justify-center gap-4 mt-4">
        <i v-badge="2" class="pi pi-bell relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    }
};
</script>
