<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Toast
            group="pt"
            :pt="{
                container: { class: 'bg-yellow-100' }
            }"
        />
        <Button label="Show" @click="show()" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Toast
    group="pt"
    :pt="{
        container: { class: 'bg-yellow-100' }
    }"
/>
<Button label="Show" @click="show()" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Toast
            group="pt"
            :pt="{
                container: { class: 'bg-yellow-100' }
            }"
        />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script>
export default {
    methods: {
        show() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', group: 'pt', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Toast
            group="pt"
            :pt="{
                container: { class: 'bg-yellow-100' }
            }"
        />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', group: 'pt', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        show() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', group: 'pt', life: 3000 });
        }
    }
};
</script>
