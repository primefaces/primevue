<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside the ProgressBar is defined with the <i>default</i> slot.</p>
    </DocSectionText>
    <div class="card">
        <ProgressBar :value="value"> {{ value }}/100 </ProgressBar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 40,
            code: {
                basic: `
<ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
`,
                options: `
<template>
    <div class="card">
        <ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 40
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(40);
<\/script>
`
            }
        };
    }
};
</script>
