<template>
    <DocSectionText v-bind="$attrs">
        <p>Uninstall primeclt utility.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
prime uninstall
`
            }
        };
    }
};
</script>
