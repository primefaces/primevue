<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputText v-model="value" variant="filled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputText v-model="value" variant="filled" />
    </div>
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
