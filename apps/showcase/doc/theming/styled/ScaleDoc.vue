<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue UI component use <i>rem</i> units, 1rem equals to the font size of the <i>html</i> element which is <i>16px</i> by default. Use the root font-size to adjust the size of the components globally. This website uses <i>14px</i> as
            the base so it may differ from your application if your base font size is different.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
html {
    font-size: 14px;
}
`
            }
        };
    }
};
</script>
