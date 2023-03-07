<template>
    <DocSectionText v-bind="$attrs">
        <p>A message disappears after 3000ms defined the <i>life</i> option, set <i>sticky</i> option to display messages that do not hide automatically.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button @click="showSticky" label="Sticky" />
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
<Button @click="showSticky" label="Sticky" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Button @click="showSticky" label="Sticky" />
    </div>
</template>

<script>
export default {
    methods: {
        showSticky() {
            this.$toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Button @click="showSticky" label="Sticky" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
};
<\/script>`
            }
        };
    },
    methods: {
        showSticky() {
            this.$toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content' });
        }
    }
};
</script>
