<template>
    <DocSectionText v-bind="$attrs">
        <p>A model can be bound using the standard <i>v-model</i> directive.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" style="resize: none" />
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
<Textarea v-model="value" rows="5" cols="30" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" />
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
        <Textarea v-model="value" rows="5" cols="30" />
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
