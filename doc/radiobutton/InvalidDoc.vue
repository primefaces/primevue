<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <RadioButton class="p-invalid" />
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
<RadioButton class="p-invalid" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <RadioButton class="p-invalid" />
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <RadioButton class="p-invalid" />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
