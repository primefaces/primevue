<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Labels are translated at component level by <i>promptLabel</i>, <i>weakLabel</i>, <i>mediumLabel</i> and <i>strongLabel</i> properties. In order to apply global translations for all Password components in the application, refer to the
            <a href="https://primevue.org/configuration/#locale" target="_blank" rel="noopener noreferrer">locale</a> documentation.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
    </div>
</template>

<script setup lang="ts">
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
