<template>
    <DocSectionText v-bind="$attrs">
        <p>Severity defines the variant of a badge.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="6" severity="secondary"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warn"></Badge>
        <Badge value="3" severity="danger"></Badge>
        <Badge value="5" severity="contrast"></Badge>
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
<Badge value="6" severity="secondary"></Badge>
<Badge value="8" severity="success"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="12" severity="warn"></Badge>
<Badge value="3" severity="danger"></Badge>
<Badge value="5" severity="contrast"></Badge>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="6" severity="secondary"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warn"></Badge>
        <Badge value="3" severity="danger"></Badge>
        <Badge value="5" severity="contrast"></Badge>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="6" severity="secondary"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warn"></Badge>
        <Badge value="3" severity="danger"></Badge>
        <Badge value="5" severity="contrast"></Badge>
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
