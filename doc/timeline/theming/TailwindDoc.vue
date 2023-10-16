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
    timeline: {
        root: ({ props }) => ({
            class: [
                'flex grow',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row flex-1': props.layout === 'horizontal'
                }
            ]
        }),
        event: ({ props, context }) => ({
            class: [
                'flex relative min-h-[70px]',
                {
                    'flex-row-reverse': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1),
                    'flex-col flex-1': props.layout === 'horizontal',
                    'flex-col-reverse ': props.align === 'bottom' || (props.layout === 'horizontal' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        opposite: ({ props, context }) => ({
            class: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-right': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-left': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        separator: ({ props }) => ({
            class: [
                'flex items-center flex-initial',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row': props.layout === 'horizontal'
                }
            ]
        }),
        marker: 'flex self-baseline w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:border-blue-300 dark:bg-blue-900/40',
        connector: ({ props }) => ({
            class: [
                'grow bg-gray-300 dark:bg-blue-900/40',
                {
                    'w-[2px]': props.layout === 'vertical',
                    'w-full h-[2px]': props.layout === 'horizontal'
                }
            ]
        }),
        content: ({ props, context }) => ({
            class: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-left': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-right': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                },
                {
                    'min-h-0': props.layout === 'vertical' && context.index === context.count,
                    'grow-0': props.layout === 'horizontal' && context.index === context.count
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
    <div class="card flex flex-wrap gap-6">
        <Timeline :value="events" class="w-full md:w-80">
            <template #content="slotProps">
                <span class="text-gray-700 dark:text-white/80">
                    {{ slotProps.item.status }}
                </span>
            </template>
        </Timeline>

        <Timeline :value="events" align="right" class="w-full md:w-80">
            <template #content="slotProps">
                <span class="text-gray-700 dark:text-white/80">
                    {{ slotProps.item.status }}
                </span>
            </template>
        </Timeline>

        <Timeline :value="events" align="alternate" class="w-full md:w-80">
            <template #content="slotProps">
                <span class="text-gray-700 dark:text-white/80">
                    {{ slotProps.item.status }}
                </span>
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>
`
            }
        };
    }
};
</script>
