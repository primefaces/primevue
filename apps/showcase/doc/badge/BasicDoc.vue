<template>
    <DocSectionText v-bind="$attrs">
        <p>Content to display is defined with the <i>value</i> property or the default slot.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge>10</Badge>
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
<Badge>10</Badge>
`,
                options: `
<template>
    <div class="card flex justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge>10</Badge>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge>10</Badge>
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
