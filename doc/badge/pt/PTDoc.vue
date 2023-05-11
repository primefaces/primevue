<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Badge value="2" :pt="{ root: { class: 'bg-primary border-round-sm' } }" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Badge value="2"
    :pt="{
        root: { class: 'bg-primary border-round-sm' }
    }"
/>`,
                options: `
<template>
    <Badge value="2"
        :pt="{
            root: { class: 'bg-primary border-round-sm' }
        }"
    />
</template>`,
                composition: `
<template>
    <Badge value="2"
        :pt="{
            root: { class: 'bg-primary border-round-sm' }
        }"
    />
</template>`
            }
        };
    }
};
</script>
