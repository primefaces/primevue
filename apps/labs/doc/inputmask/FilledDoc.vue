<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" variant="filled" mask="99-999999" placeholder="99-999999" />
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
<InputMask id="basic" v-model="value" variant="filled" mask="99-999999" placeholder="99-999999" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" variant="filled" mask="99-999999" placeholder="99-999999" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" variant="filled" mask="99-999999" placeholder="99-999999" />
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
