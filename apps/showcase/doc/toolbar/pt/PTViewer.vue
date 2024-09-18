<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="docs">
        <Toolbar class="w-full">
            <template #start>
                <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
                <Button icon="pi pi-print" class="mr-2" severity="secondary" text />
                <Button icon="pi pi-upload" severity="secondary" text />
            </template>

            <template #center>
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
            </template>

            <template #end> <Button label="Save"></Button></template>
        </Toolbar>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Toolbar'),
                    key: 'Toolbar'
                }
            ]
        };
    }
};
</script>
