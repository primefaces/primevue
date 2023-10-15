<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <div :style="{ position: 'relative', height: '300px' }">
            <SpeedDial
                :model="items"
                direction="down"
                :style="{ left: 'calc(50% - 2rem)', top: 0 }"
                :pt="{
                    action: ({ props, state, context }) => ({
                        class: context.active ? 'bg-primary' : undefined
                    })
                }"
            />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ],
            code: {
                basic: `
<SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }"
    :pt="{
        action: ({ props, state, context }) => ({
            class: context.active ? 'bg-primary' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '300px' }">
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }"
                :pt="{
                    action: ({ props, state, context }) => ({
                        class: context.active ? 'bg-primary' : undefined
                    })
                }"
            />
        </div>
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '300px' }">
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }"
                :pt="{
                    action: ({ props, state, context }) => ({
                        class: context.active ? 'bg-primary' : undefined
                    })
                }"
            />
        </div>
        <Toast />
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
<\/script>
`
            }
        };
    }
};
</script>
