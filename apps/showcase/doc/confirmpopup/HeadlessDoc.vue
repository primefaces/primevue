<template>
    <DocSectionText v-bind="$attrs">
        <p>Headless mode is enabled by defining a <i>container</i> slot that lets you implement entire confirmation UI instead of the default elements.</p>
    </DocSectionText>
    <ConfirmPopup group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="rounded p-4">
                <span>{{ message.message }}</span>
                <div class="flex items-center gap-2 mt-4">
                    <Button label="Save" @click="acceptCallback" size="small"></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" severity="secondary" size="small" text></Button>
                </div>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation($event)" label="Save"></Button>
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
        <div class="rounded p-4">
            <span>{{ message.message }}</span>
            <div class="flex items-center gap-2 mt-4">
                <Button label="Save" @click="acceptCallback" size="small"></Button>
                <Button label="Cancel" outlined @click="rejectCallback" severity="secondary" size="small" text></Button>
            </div>
        </div>
    </template>
</ConfirmPopup>
<Button @click="requireConfirmation($event)" label="Save"></Button>
`,
                options: `
<template>
    <Toast />
    <ConfirmPopup group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="rounded p-4">
                <span>{{ message.message }}</span>
                <div class="flex items-center gap-2 mt-4">
                    <Button label="Save" @click="acceptCallback" size="small"></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" severity="secondary" size="small" text></Button>
                </div>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation($event)" label="Save"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        requireConfirmation(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'headless',
                message: 'Save your current process?',
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
            <div class="rounded p-4">
                <span>{{ message.message }}</span>
                <div class="flex items-center gap-2 mt-4">
                    <Button label="Save" @click="acceptCallback" size="small"></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" severity="secondary" size="small" text></Button>
                </div>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation($event)" label="Save"></Button>
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
        message: 'Save your current process?',
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
                message: 'Save your current process?',
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
