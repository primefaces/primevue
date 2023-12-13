<template>
    <DocSectionText v-bind="$attrs">
        <p>Headless mode is enabled by defining a <i>container</i> slot that lets you implement entire confirmation UI instead of the default elements.</p>
    </DocSectionText>
    <ConfirmPopup group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="bg-gray-900 text-white border-round p-3">
                <span>{{ message.message }}</span>
                <div class="flex align-items-center gap-2 mt-3">
                    <Button label="Save" @click="acceptCallback" size="small" outlined></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" size="small" text></Button>
                </div>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-content-center">
        <Button @click="requireConfirmation($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmPopup group="headless">
    <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="bg-gray-900 text-white border-round p-3">
            <span>{{ message.message }}</span>
            <div class="flex align-items-center gap-2 mt-3">
                <Button label="Save" @click="acceptCallback" size="small" outlined></Button>
                <Button label="Cancel" outlined @click="rejectCallback" size="small" text></Button>
            </div>
        </div>
    </template>
</ConfirmPopup>
<Button @click="requireConfirmation($event)" icon="pi pi-check" label="Confirm"></Button>
`,
                options: `
<template>
    <Toast />
    <ConfirmPopup group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="bg-gray-900 text-white border-round p-3">
                <span>{{ message.message }}</span>
                <div class="flex align-items-center gap-2 mt-3">
                    <Button label="Save" @click="acceptCallback" size="small" outlined></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" size="small" text></Button>
                </div>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-content-center">
        <Button @click="requireConfirmation($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        requireConfirmation(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'headless',
                message: 'Are you sure? You cannot undo this.',
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
    <ConfirmPopup group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="bg-gray-900 text-white border-round p-3">
                <span>{{ message.message }}</span>
                <div class="flex align-items-center gap-2 mt-3">
                    <Button label="Save" @click="acceptCallback" size="small" outlined></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" size="small" text></Button>
                </div>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-content-center">
        <Button @click="requireConfirmation($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const requireConfirmation = (event) => {
    confirm.require({
        target: event.currentTarget,
        group: 'headless',
        message: 'Are you sure? You cannot undo this.',
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
        requireConfirmation(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'headless',
                message: 'Are you sure? You cannot undo this.',
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
