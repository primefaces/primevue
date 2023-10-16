<template>
    <DocSectionText v-bind="$attrs">
        <p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :cancel="false" />
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
<Rating v-model="value" :cancel="false" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :cancel="false"  />
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
    <div class="card flex justify-content-center">
        <Rating v-model="value" :cancel="false"  />
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
