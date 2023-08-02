<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button label="New" icon="pi pi-plus" class="mr-2" />
                <Button label="Upload" icon="pi pi-upload" severity="success" class="mr-2" />
                <i class="pi pi-bars text-gray-700 dark:text-white/80 mr-2" />
                <SplitButton label="Save" icon="pi pi-check" :model="items" severity="warning"></SplitButton>
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-calendar" severity="success" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            this.$router.push('fileupload');
        }
    }
])
<\/script>`
            }
        };
    }
};
</script>
