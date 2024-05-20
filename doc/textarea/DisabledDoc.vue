<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" disabled style="resize: none" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 'Disabled',
            code: {
                basic: `
<Textarea v-model="value" rows="5" cols="30" disabled />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Disabled'
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Disabled');
<\/script>
`
            }
        };
    }
};
</script>
