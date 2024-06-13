<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>toggleMask</i> is present, an icon is displayed to show the value as plain text.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" toggleMask />
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
<Password v-model="value" toggleMask />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Password v-model="value" toggleMask />
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
        <Password v-model="value" toggleMask />
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
