<template>
    <DocSectionText v-bind="$attrs">
        <p>Default placeholder for a mask is underscore that can be customized using <i>slotChar</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask v-model="value" placeholder="mm/dd/yyyy" mask="99/99/9999" slotChar="mm/dd/yyyy" />
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
        <InputMask v-model="value" placeholder="mm/dd/yyyy" mask="99/99/9999" slotChar="mm/dd/yyyy" />
    </div>
</template>

<script setup>
import InputMask from '@/volt/inputmask';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
