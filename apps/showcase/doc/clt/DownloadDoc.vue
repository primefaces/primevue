<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeCLT is available for download on <a href="https://www.npmjs.com/package/primeclt">npm Registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
npm install -g primeclt
`
            }
        };
    }
};
</script>
