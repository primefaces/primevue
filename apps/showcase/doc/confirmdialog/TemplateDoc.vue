<template>
    <DocSectionText v-bind="$attrs">
        <p>Templating allows customizing the message content.</p>
    </DocSectionText>
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="showTemplate()" label="Save"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmDialog group="templating">
    <template #message="slotProps">
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
            <p>{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmDialog>
<Button @click="showTemplate()" label="Save"></Button>
`,
                options: `
<template>
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i :class="slotProps.message.icon" class="text-5xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="showTemplate()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script>
export default {
    methods: {
        showTemplate() {
            this.$confirm.require({
                group: 'templating',
                header: 'Confirmation',
                message: 'Please confirm to proceed moving forward.',
                icon: 'pi pi-exclamation-circle',
                rejectProps: {
                    label: 'Cancel',
                    icon: 'pi pi-times',
                    outlined: true,
                    size: 'small'
                },
                acceptProps: {
                    label: 'Save',
                    icon: 'pi pi-check',
                    size: 'small'
                },
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="showTemplate()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        icon: 'pi pi-exclamation-circle',
        rejectProps: {
            label: 'Cancel',
            icon: 'pi pi-times',
            outlined: true,
            size: 'small'
        },
        acceptProps: {
            label: 'Save',
            icon: 'pi pi-check',
            size: 'small'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>
`
            }
        };
    },
    methods: {
        showTemplate() {
            this.$confirm.require({
                group: 'templating',
                header: 'Confirmation',
                message: 'Please confirm to proceed moving forward.',
                icon: 'pi pi-exclamation-circle',
                rejectProps: {
                    label: 'Cancel',
                    icon: 'pi pi-times',
                    outlined: true,
                    size: 'small'
                },
                acceptProps: {
                    label: 'Save',
                    icon: 'pi pi-check',
                    size: 'small'
                },
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
</script>
