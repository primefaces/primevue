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
                basic: `export default {
    dock: {
        root: ({ props }) => ({
            class: [
                'absolute z-1 flex justify-center items-center pointer-events-none',
                {
                    'left-0 bottom-0 w-full': props.position == 'bottom',
                    'left-0 top-0 w-full': props.position == 'top',
                    'left-0 top-0 h-full': props.position == 'left',
                    'right-0 top-0 h-full': props.position == 'right'
                }
            ]
        }),
        container: {
            class: ['flex pointer-events-auto', 'bg-white/10 border-white/20 p-2 border rounded-md']
        },
        menu: ({ props }) => ({
            class: [
                'm-0 p-0 list-none flex items-center justify-center',
                'outline-none',
                {
                    'flex-col': props.position == 'left' || props.position == 'right'
                }
            ]
        }),
        menuitem: ({ props, context, instance }) => ({
            class: [
                'p-2 rounded-md',
                'transition-all duration-200 ease-cubic-bezier-will-change-transform transform ',
                {
                    'origin-bottom hover:mx-6': props.position == 'bottom',
                    'origin-top hover:mx-6': props.position == 'top',
                    'origin-left hover:my-6': props.position == 'left',
                    'origin-right hover:my-6': props.position == 'right'
                },
                {
                    'hover:scale-150': instance.currentIndex === context.index,
                    'scale-125': instance.currentIndex - 1 === context.index || instance.currentIndex + 1 === context.index,
                    'scale-110': instance.currentIndex - 2 === context.index || instance.currentIndex + 2 === context.index
                }
            ]
        }),
        action: {
            class: ['flex flex-col items-center justify-center relative overflow-hidden cursor-default', 'w-16 h-16']
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-3 mb-5">
            <div v-for="pos of positions" :key="pos.label" class="flex items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="text-gray-700 dark:text-white/80 ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg))'">
            <Dock :model="items" :position="position">
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
    }
]);
const position = ref('bottom');
const positions = ref([
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
]);

<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}
</style>
`
            }
        };
    }
};
</script>
