<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Volt components leverage the <a href="https://www.npmjs.com/package/tailwind-merge" target="_blank" rel="noopener noreferrer">tailwind-merge</a> utility to combine custom classes with default ones efficiently. This feature is particularly
            useful when you want to customize individual components by integrating external classes.
        </p>
        <p>
            The classes passed to the <i>pt:{section}:class</i> attributes are automatically merged with the default classes. It's important to note that the regular class attribute might not be applied due to its lower precedence. However, the
            inline pt version merges successfully, allowing for effective overrides per component instance.
        </p>
        <p>
            Consider the following test case that demonstrates this behavior. In the first case, the custom <i>bg-primary text-primary-contrast</i> might not be applied because the regular class attribute has lower precedence. On the other hand, the
            <i>pt:root:class</i> attribute in the second case will merge the custom classes with the default classes perfectly.
        </p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <InputText class="bg-primary text-primary-contrast" value="Fails" />
        <InputText pt:root:class="bg-primary text-primary-contrast" value="Works" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const code = ref(`
<template>
   <div class="card flex justify-center gap-4">
        <InputText class="bg-primary text-primary-contrast" value="Fails" />
        <InputText pt:root:class="bg-primary text-primary-contrast" value="Works" />
    </div>
</template>

<script setup lang="ts">
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const selectedCity = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
`);
</script>
