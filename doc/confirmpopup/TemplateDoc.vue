<template>
    <DocSectionText v-bind="$attrs">
        <p>Templating allows customizing the content where the message instance is available as the implicit variable.</p>
    </DocSectionText>
    <ConfirmPopup group="demo">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmPopup group="demo">
    <template #message="slotProps">
        <div class="flex p-4">
            <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
            <p class="pl-2">{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmPopup>
<div class="card flex flex-wrap gap-2 justify-content-center">
    <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions"></Button>
</div>`,
                options: `
<template>
    <Toast />
    <ConfirmPopup group="demo">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        showTemplate(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'demo',
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
    <ConfirmPopup group="demo">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions"></Button>
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
        group: 'demo',
        message: 'Do you accept that?',
        icon: 'pi pi-question-circle',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        accept: () => {
            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
        },
        reject: () => {
            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
        }
    });
}
<\/script>`
            }
        };
    },
    methods: {
        showTemplate(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'demo',
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
