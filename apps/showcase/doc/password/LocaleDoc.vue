<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Labels are translated at component level by <i>promptLabel</i>, <i>weakLabel</i>, <i>mediumLabel</i> and <i>strongLabel</i> properties. In order to apply global translations for all Password components in the application, refer to the
            <NuxtLink to="/configuration/#locale">locale</NuxtLink>.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
