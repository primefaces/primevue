<template>
    <DocSectionText v-bind="$attrs">
        <p>Templating allows customizing the content where the message instance is available as the implicit variable.</p>
    </DocSectionText>
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate()" icon="pi pi-check" label="Terms and Conditions" class="mr-2"></Button>
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
        <div class="flex p-4">
            <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
            <p class="pl-2">{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmDialog>
<Button @click="showTemplate()" icon="pi pi-check" label="Terms and Conditions" class="mr-2"></Button>`,
                options: `
<template>
    <Toast />
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate()" icon="pi pi-check" label="Terms and Conditions" class="mr-2"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        showTemplate() {
            this.$confirm.require({
                group: 'templating',
                header: 'Terms and Conditions',
                message: 'Do you accept that?',
                icon: 'pi pi-question-circle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
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
<\/script>`,
                composition: `
<template>
    <Toast />
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate()" icon="pi pi-check" label="Terms and Conditions" class="mr-2"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Terms and Conditions',
        message: 'Do you accept that?',
        icon: 'pi pi-question-circle',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`
            }
        };
    },
    methods: {
        showTemplate() {
            this.$confirm.require({
                group: 'templating',
                header: 'Terms and Conditions',
                message: 'Do you accept that?',
                icon: 'pi pi-question-circle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
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
