<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <Password v-model="value" :invalid="!value" placeholder="Password" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <Password v-model="value" :invalid="!value" placeholder="Password" />
    </div>
</template>

<script setup lang="ts">
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
