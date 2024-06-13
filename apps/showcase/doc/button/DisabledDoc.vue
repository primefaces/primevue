<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Submit" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Submit" disabled />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button label="Submit" disabled />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button label="Submit" disabled />
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
