<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>type</i> is defined as <i>semi-circle</i>, items are displayed in a half-circle around the button.</p>
    </DocSectionText>
    <div class="card">
        <div style="position: relative; height: 500px">
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
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
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
`,
                options: `
<template>
    <div class="card">
        <div style="position: relative; height: 500px">
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
            <Toast />
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
    <div class="card" :style="{ position: 'relative', height: '500px' }">
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
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
