<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple messages are displayed by passing an array to the <i>show</i> method.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-2">
            <Button label="Multiple" severity="warning" @click="showMultiple()" />
            <Button label="Clear" @click="clear()" />
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
    <Button label="Multiple" severity="warning" @click="showMultiple()" />
    <Button label="Clear" @click="clear()" />
</div>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Multiple" severity="warning" @click="showMultiple()" />
            <Button label="Clear" @click="clear()" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showMultiple() {
            this.$toast.add({ severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 });
            this.$toast.add({ severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 });
            this.$toast.add({ severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 });
        },
        clear() {
            this.$toast.removeAllGroups();
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Multiple" severity="warning" @click="showMultiple()" />
            <Button label="Clear" @click="clear()" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showMultiple = () => {
    toast.add({ severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 });
};

const clear = () => {
    toast.removeAllGroups();
};
<\/script>`
            }
        };
    },
    methods: {
        showMultiple() {
            this.$toast.add({ severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 });
            this.$toast.add({ severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 });
            this.$toast.add({ severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 });
        },
        clear() {
            this.$toast.removeAllGroups();
        }
    }
};
</script>
