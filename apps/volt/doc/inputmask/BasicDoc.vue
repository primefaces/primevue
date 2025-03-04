<template>
    <DocSectionText v-bind="$attrs">
        <p>InputMask is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputMask from '@/volt/inputmask';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" />
    </div>
</template>

<script setup>
import InputMask from '@/volt/inputmask';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
