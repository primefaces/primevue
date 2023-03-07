<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside a message is defined with the <i>content</i> option.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Toast position="bottom-center" group="bc">
            <template #message="slotProps">
                <div class="flex flex-column align-items-center" style="flex: 1">
                    <div class="text-center">
                        <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                        <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
                    </div>
                    <div class="flex gap-2">
                        <Button severity="success" label="Yes" @click="onConfirm()"></Button>
                        <Button severity="secondary" label="No" @click="onReject()"></Button>
                    </div>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="Confirm" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Toast position="bottom-center" group="bc">
    <template #message="slotProps">
        <div class="flex flex-column align-items-center" style="flex: 1">
            <div class="text-center">
                <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
            </div>
            <div class="flex gap-2">
                <Button severity="success" label="Yes" @click="onConfirm()"></Button>
                <Button severity="secondary" label="No" @click="onReject()"></Button>
            </div>
        </div>
    </template>
</Toast>
<Button @click="showTemplate" label="Confirm" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Toast position="bottom-center" group="bc">
            <template #message="slotProps">
                <div class="flex flex-column align-items-center" style="flex: 1">
                    <div class="text-center">
                        <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                        <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
                    </div>
                    <div class="flex gap-2">
                        <Button severity="success" label="Yes" @click="onConfirm()"></Button>
                        <Button severity="secondary" label="No" @click="onReject()"></Button>
                    </div>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="Confirm" />
    </div>
</template>

<script>
export default {
    methods: {
        showTemplate() {
            this.$toast.add({ severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm', group: 'bc' });
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Toast position="bottom-center" group="bc">
            <template #message="slotProps">
                <div class="flex flex-column align-items-center" style="flex: 1">
                    <div class="text-center">
                        <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                        <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
                    </div>
                    <div class="flex gap-2">
                        <Button severity="success" label="Yes" @click="onConfirm()"></Button>
                        <Button severity="secondary" label="No" @click="onReject()"></Button>
                    </div>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="Confirm" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showTemplate = () => {
    toast.add({ severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm', group: 'bc' });
};
<\/script>`
            }
        };
    },
    methods: {
        showTemplate() {
            this.$toast.add({ severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm', group: 'bc' });
        },
        onConfirm() {
            this.$toast.removeGroup('bc');
        },
        onReject() {
            this.$toast.removeGroup('bc');
        }
    }
};
</script>
