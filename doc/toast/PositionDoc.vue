<template>
    <DocSectionText v-bind="$attrs">
        <p>Location of the messages is customized with the <i>position</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" class="mr-2" @click="showTopLeft" />
            <Button label="Bottom Left" severity="warning" @click="showBottomLeft" />
            <Button label="Bottom Right" severity="success" @click="showBottomRight" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Toast />
<div class="flex flex-wrap gap-2">
    <Button label="Top Left" class="mr-2" @click="showTopLeft" />
    <Button label="Bottom Left" severity="warning" @click="showBottomLeft" />
    <Button label="Bottom Right" severity="success" @click="showBottomRight" />
</div>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" class="mr-2" @click="showTopLeft" />
            <Button label="Bottom Left" severity="warning" @click="showBottomLeft" />
            <Button label="Bottom Right" severity="success" @click="showBottomRight" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showTopLeft() {
            this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
        },
        showBottomLeft() {
            this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
        },
        showBottomRight() {
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" class="mr-2" @click="showTopLeft" />
            <Button label="Bottom Left" severity="warning" @click="showBottomLeft" />
            <Button label="Bottom Right" severity="success" @click="showBottomRight" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
};

const showBottomLeft = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
};

const showBottomRight = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
};
<\/script>`
            }
        };
    },
    methods: {
        showTopLeft() {
            this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
        },
        showBottomLeft() {
            this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
        },
        showBottomRight() {
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
        }
    }
};
</script>
