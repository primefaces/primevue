<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>autoResize</i> is enabled, textarea grows instead of displaying a scrollbar.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<Textarea v-model="value" autoResize rows="5" cols="30" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
`
            }
        };
    }
};
</script>
