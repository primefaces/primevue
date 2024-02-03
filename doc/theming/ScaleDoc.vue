<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue utilizes <i>rem</i> units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components is easy as configuring the font size of your document.
            Code below sets the scale of the components based on <i>16px</i>. If you require bigger or smaller components, just change this variable and components will scale accordingly.
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
