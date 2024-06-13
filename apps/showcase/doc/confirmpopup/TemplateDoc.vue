<template>
    <DocSectionText v-bind="$attrs">
        <p>Templating allows customizing the message content.</p>
    </DocSectionText>
    <ConfirmPopup group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
                <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="showTemplate($event)" label="Save"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmPopup group="templating">
    <template #message="slotProps">
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
            <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
            <p>{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmPopup>
<Button @click="showTemplate($event)" label="Save"></Button>
`,
                options: `
<template>
    <Toast />
    <ConfirmPopup group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
                <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="showTemplate($event)" label="Save"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        showTemplate(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'templating',
                message: 'Please confirm to proceed moving forward.',
                icon: 'pi pi-exclamation-circle',
                rejectProps: {
                    icon: 'pi pi-times',
                    label: 'Cancel',
                    outlined: true
                },
                acceptProps: {
                    icon: 'pi pi-check',
                    label: 'Confirm'
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
    <Toast />
    <ConfirmPopup group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
                <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="showTemplate($event)" label="Save"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = (event) => {
    confirm.require({
        target: event.currentTarget,
        group: 'templating',
        message: 'Please confirm to proceed moving forward.',
        icon: 'pi pi-exclamation-circle',
        rejectProps: {
            icon: 'pi pi-times',
            label: 'Cancel',
            outlined: true
        },
        acceptProps: {
            icon: 'pi pi-check',
            label: 'Confirm'
        },
        accept: () => {
            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
        },
        reject: () => {
            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
        }
    });
}
<\/script>
`
            }
        };
    },
    methods: {
        showTemplate(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'templating',
                message: 'Please confirm to proceed moving forward.',
                icon: 'pi pi-exclamation-circle',
                rejectProps: {
                    icon: 'pi pi-times',
                    label: 'Cancel',
                    outlined: true
                },
                acceptProps: {
                    icon: 'pi pi-check',
                    label: 'Confirm'
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
