<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
    </div>

    <div class="card flex flex-wrap justify-center gap-4 mt-4">
        <i v-badge="2" class="pi pi-bell relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    }
};
</script>
