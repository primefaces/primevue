<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>indeterminate</i> state indicates that a checkbox is neither "on" or "off".</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" indeterminate binary />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Checkbox from '@/volt/Checkbox.vue';
import { ref } from 'vue';

const checked = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" indeterminate binary />
    </div>
</template>

<script setup lang="ts">
import Checkbox from '@/volt/Checkbox.vue';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
