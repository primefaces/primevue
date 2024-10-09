<template>
    <DocPTViewer :docs="docs">
        <ConfirmDialog group="ptviewer" pt:mask="!relative" class="!my-auto"></ConfirmDialog>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('ConfirmDialog'),
                    key: 'ConfirmDialog'
                }
            ]
        };
    },
    mounted() {
        this.$confirm.require({
            group: 'ptviewer',
            appendTo: '#doc-ptviewer',
            modal: false,
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            rejectProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptProps: {
                label: 'Save'
            },
            accept: () => {
                this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
};
</script>
