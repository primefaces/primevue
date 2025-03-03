<template>
    <DocSectionText v-bind="$attrs">
        <p>Textarea is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" class="resize-none" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Textarea from '@/volt/textarea';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" class="resize-none" />
    </div>
</template>

<script setup>
import Textarea from '@/volt/textarea';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
