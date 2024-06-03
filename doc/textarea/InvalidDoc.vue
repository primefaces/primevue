<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" :invalid="value === ''" style="resize: none" />
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
<Textarea v-model="value" rows="5" cols="30" :invalid="value ===''"  />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" :invalid="value ===''"  />
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
        <Textarea v-model="value" rows="5" cols="30" :invalid="value ===''"  />
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
