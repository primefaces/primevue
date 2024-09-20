<template>
    <DocPTViewer :docs="docs">
        <SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" :model="items" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Update'
                },
                {
                    label: 'Delete'
                },
                {
                    label: 'Vue Website'
                },
                { label: 'Upload', to: '/fileupload' }
            ],
            docs: [
                {
                    data: getPTOptions('SplitButton'),
                    key: 'SplitButton'
                }
            ]
        };
    }
};
</script>
