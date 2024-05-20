<template>
    <DocSectionText v-bind="$attrs">
        <p>Headless mode is enabled by defining a <i>container</i> slot that lets you implement entire confirmation UI instead of the default elements.</p>
    </DocSectionText>
    <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                    <i class="pi pi-question text-5xl"></i>
                </div>
                <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex items-center gap-2 mt-6">
                    <Button label="Save" @click="acceptCallback" class="w-32"></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" class="w-32"></Button>
                </div>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation()" label="Save"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmDialog group="headless">
    <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
            <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                <i class="pi pi-question text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex items-center gap-2 mt-6">
                <Button label="Save" @click="acceptCallback" class="w-32"></Button>
                <Button label="Cancel" outlined @click="rejectCallback" class="w-32"></Button>
            </div>
        </div>
    </template>
</ConfirmDialog>
<Button @click="requireConfirmation()" label="Save"></Button>
`,
                options: `
<template>
    <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                    <i class="pi pi-question text-5xl"></i>
                </div>
                <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex items-center gap-2 mt-6">
                    <Button label="Save" @click="acceptCallback" class="w-32"></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" class="w-32"></Button>
                </div>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script>
export default {
    methods: {
        requireConfirmation() {
            this.$confirm.require({
                group: 'headless',
                header: 'Are you sure?',
                message: 'Please confirm to proceed.',
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
    <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                    <i class="pi pi-question text-5xl"></i>
                </div>
                <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex items-center gap-2 mt-6">
                    <Button label="Save" @click="acceptCallback"></Button>
                    <Button label="Cancel" outlined @click="rejectCallback"></Button>
                </div>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const requireConfirmation = () => {
    confirm.require({
        group: 'headless',
        header: 'Are you sure?',
        message: 'Please confirm to proceed.',
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
        requireConfirmation() {
            this.$confirm.require({
                group: 'headless',
                header: 'Are you sure?',
                message: 'Please confirm to proceed.',
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
