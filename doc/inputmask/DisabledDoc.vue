<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask mask="99-999999" placeholder="99-999999" disabled />
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
<InputMask mask="99-999999" placeholder="99-999999" disabled />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputMask mask="99-999999" placeholder="99-999999" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
        
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputMask mask="99-999999" placeholder="99-999999" disabled />
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
