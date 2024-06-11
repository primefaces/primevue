<template>
    <DocSectionText v-bind="$attrs">
        <p>Text to display is defined with the <i>value</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Badge value="2"></Badge>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Badge value="2"></Badge>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Badge value="2"></Badge>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Badge value="2"></Badge>
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
