<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>size</i> property to customize the size of a Badge, currently <i>large</i> and <i>xlarge</i> are available as size options.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center align-items-end gap-2">
        <Badge value="6" size="xlarge" severity="success"></Badge>
        <Badge value="4" size="large" severity="warning"></Badge>
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
<Badge value="6" size="xlarge" severity="success"></Badge>
<Badge value="4" size="large" severity="warning"></Badge>
<Badge value="2"></Badge>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center align-items-end gap-2">
        <Badge value="6" size="xlarge" severity="success"></Badge>
        <Badge value="4" size="large" severity="warning"></Badge>
        <Badge value="2"></Badge>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center align-items-end gap-2">
        <Badge value="6" size="xlarge" severity="success"></Badge>
        <Badge value="4" size="large" severity="warning"></Badge>
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
