<template>
    <DocSectionText v-bind="$attrs">
        <p>Severity defines the color of the badge, possible values are <i>success</i>, <i>info</i>, <i>warning</i> and <i>danger</i> in addition to the default theme color.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
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
<Badge value="8" severity="success"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="12" severity="warning"></Badge>
<Badge value="3" severity="danger"></Badge>`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
    </div>
</template>

<script>

<\/script>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    }
};
</script>
