<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center">
        <TriStateCheckbox v-model="value" variant="filled" />
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
<TriStateCheckbox v-model="value" variant="filled" />
`,
                options: `
<template>
    <div class="card flex align-items-center">
        <TriStateCheckbox v-model="value" variant="filled" />
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
    <div class="card flex align-items-center">
        <TriStateCheckbox v-model="value" variant="filled" />
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
