<template>
    <DocSectionText v-bind="$attrs">
        <p>ConfirmDialog is controlled via the <i>ConfirmationService</i> that needs to be installed as an application plugin.</p>
        <DocSectionCode :code="code1" lang="script" />
        <p>Recommended location of a Toast is the main application template so that the component can be accessed in a shared manner.</p>
        <DocSectionCode :code="code2" />
        <p>The <i>useConfirm</i> composable is used to interact with the component.</p>
        <DocSectionCode :code="code3" />
    </DocSectionText>
</template>

<script setup lang="ts">
const code1 = ref(`import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);
`);

const code2 = ref(`
<template>
    <ConfirmDialog />
</template>
`);

const code3 = ref(`
<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();
<\/script>
`);
</script>
