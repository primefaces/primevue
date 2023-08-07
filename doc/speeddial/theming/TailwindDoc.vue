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
    speeddial: {
        root: 'absolute flex',
        button: {
            root: ({ parent }) => ({
                class: [
                    'w-16 !h-16 !rounded-full justify-center z-10',
                    {
                        'rotate-45': parent.state.d_visible
                    }
                ]
            }),
            label: {
                class: 'hidden'
            }
        },
        menu: 'm-0 p-0 list-none flex items-center justify-center transition delay-200 z-20',
        menuitem: ({ props, context }) => ({
            class: [
                'transform transition-transform duration-200 ease-out transition-opacity duration-800',
                context.hidden ? 'opacity-0 scale-0' : 'opacity-1 scale-100',
                {
                    'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                    'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                    'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                    'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
                },
                { absolute: props.type !== 'linear' }
            ]
        }),
        action: {
            class: ['flex items-center justify-center rounded-full relative overflow-hidden', 'w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white']
        },
        mask: ({ state }) => ({
            class: [
                'absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0',
                {
                    'opacity-0': !state.d_visible,
                    'pointer-events-none opacity-100 transition-opacity duration-400 ease-in-out': state.d_visible
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
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`
            }
        };
    }
};
</script>
