<template>
    <DocSectionText v-bind="$attrs">
        <p>Label of the tag is defined with the <i>value</i> property.</p>
    </DocSectionText>
    <div class="card">
        <Stepper>
            <StepperPanel header="Header 1">Content 1</StepperPanel>
            <StepperPanel header="Header 2">Content 2</StepperPanel>
            <StepperPanel header="Header 3">Content 3</StepperPanel>
        </Stepper>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Tag value="New"></Tag>
`,
                options: `
<template>
    <div class="flex justify-content-center">
        <Tag value="New"></Tag>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="flex justify-content-center">
        <Tag value="New"></Tag>
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
