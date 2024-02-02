<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center">
        <TriStateCheckbox v-model="value" disabled />
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
<TriStateCheckbox v-model="value" />
`,
                options: `
<template>
    <div class="card flex flex-column align-items-center">
        <TriStateCheckbox v-model="value" disabled />
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
    <div class="card flex flex-column align-items-center">
        <TriStateCheckbox v-model="value" disabled />
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
