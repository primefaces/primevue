<template>
    <DocSectionText v-bind="$attrs">
        <p>Enabling <i>checked</i> property displays the component as active initially.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            code: {
                basic: `
<ToggleSwitch v-model="checked" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>
`
            }
        };
    }
};
</script>
