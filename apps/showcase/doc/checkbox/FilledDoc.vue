<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary variant="filled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<Checkbox v-model="checked" binary variant="filled" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary variant="filled" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
