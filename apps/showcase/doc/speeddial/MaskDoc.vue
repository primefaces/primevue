<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>mask</i> property displays a modal layer behind the popup items.</p>
    </DocSectionText>
    <div class="card p-4">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
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
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
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
<SpeedDial :model="items" direction="up" mask :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
`,
                options: `
<template>
    <div class="card p-4">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
        </div>
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
                    this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
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
    <div class="card p-4">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
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
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
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
