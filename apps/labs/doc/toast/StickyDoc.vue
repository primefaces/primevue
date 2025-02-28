<template>
    <DocSectionText v-bind="$attrs">
        <p>A message disappears after the number of milliseconds defined in the <i>life</i> option. Omit the <i>life</i> option to make the message sticky.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-2">
            <Button @click="showSticky" label="Sticky" />
            <Button label="Clear" severity="secondary" @click="clear()" />
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
<Button @click="showSticky" label="Sticky" />
<Button label="Clear" severity="secondary" @click="clear()" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button @click="showSticky" label="Sticky" />
            <Button label="Clear" severity="secondary" @click="clear()" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showSticky() {
            this.$toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
        },
        clear() {
            this.$toast.removeAllGroups();
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button @click="showSticky" label="Sticky" />
            <Button label="Clear" severity="secondary" @click="clear()" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
}

const clear = () => {
    toast.removeAllGroups();
}
<\/script>
`
            }
        };
    },
    methods: {
        showSticky() {
            this.$toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content' });
        },
        clear() {
            this.$toast.removeAllGroups();
        }
    }
};
</script>
