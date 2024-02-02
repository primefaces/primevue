<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <RadioButton invalid binary />
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
<RadioButton invalid binary />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <RadioButton invalid binary />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <RadioButton invalid binary />
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
