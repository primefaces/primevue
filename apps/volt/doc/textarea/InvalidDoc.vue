<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" :invalid="!value" class="resize-none" placeholder="Address" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Textarea from '@/volt/textarea';
import { ref } from 'vue';

const value = ref('');

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" :invalid="!value" class="resize-none" placeholder="Address" />
    </div>
</template>

<script setup>
import Textarea from '@/volt/textarea';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
