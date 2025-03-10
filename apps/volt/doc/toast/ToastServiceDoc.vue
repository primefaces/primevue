<template>
    <DocSectionText v-bind="$attrs">
        <p>Toast component is controlled via the <i>ToastService</i> that needs to be installed as an application plugin.</p>
        <DocSectionCode :code="code1" lang="script" />
        <p>Recommended location of a Toast is the main application template.</p>
        <DocSectionCode :code="code2" />
        <p>The <i>useToast</i> composable can be accessed anywhere within your application to interact with the component.</p>
        <DocSectionCode :code="code3" />
    </DocSectionText>
</template>

<script setup>
const code1 = ref(`import {createApp} from 'vue';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(ToastService);
`);

const code2 = ref(`
<template>
    <Toast />
</template>
`);

const code3 = ref(`
<script setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast();   // instance to create messages
<\/script>
`);
</script>
