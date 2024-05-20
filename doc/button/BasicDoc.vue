<template>
    <DocSectionText v-bind="$attrs">
        <p>Text to display on a button is defined with the <i>label</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Submit" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Submit" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button label="Submit" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button label="Submit" />
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
