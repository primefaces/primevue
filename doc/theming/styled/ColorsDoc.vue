<template>
    <DocSectionText v-bind="$attrs">
        <p>Lorem Ipsum.</p>
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
