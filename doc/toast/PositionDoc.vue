<template>
    <DocSectionText v-bind="$attrs">
        <p>A message can be targeted to a certain Toast component by matching the <i>group</i> keys whereas location is customized with the <i>position</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" @click="showTopLeft" />
            <Button label="Bottom Left" @click="showBottomLeft" />
            <Button label="Bottom Right" @click="showBottomRight" />
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
<Toast position="top-left" group="tl" />
<Toast position="bottom-left" group="bl" />
<Toast position="bottom-right" group="br" />

<Button label="Top Left" @click="showTopLeft" />
<Button label="Bottom Left" @click="showBottomLeft" />
<Button label="Bottom Right" @click="showBottomRight" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />

        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" @click="showTopLeft" />
            <Button label="Bottom Left" @click="showBottomLeft" />
            <Button label="Bottom Right" @click="showBottomRight" />
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
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />

        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" @click="showTopLeft" />
            <Button label="Bottom Left" @click="showBottomLeft" />
            <Button label="Bottom Right" @click="showBottomRight" />
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
<\/script>
`
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
