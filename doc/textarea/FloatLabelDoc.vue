<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel>
            <Textarea v-model="value" rows="5" cols="30" style="resize: none" />
            <label>Username</label>
        </FloatLabel>
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
<FloatLabel>
    <Textarea v-model="value" rows="5" cols="30" />
    <label>Username</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <Textarea v-model="value" rows="5" cols="30" />
            <label>Username</label>
        </FloatLabel>
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
        <FloatLabel>
            <Textarea v-model="value" rows="5" cols="30" />
            <label>Username</label>
        </FloatLabel>
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
