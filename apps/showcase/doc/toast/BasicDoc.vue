<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Ideal location of a Toast is the main application template so that it can be used by any component within the application. A single message is represented by the Message interface that defines properties such as severity, summary and
            detail.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
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
<Toast />
<Button label="Show" @click="show()" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script>
export default {
    methods: {
        show() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        show() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
        }
    }
};
</script>
