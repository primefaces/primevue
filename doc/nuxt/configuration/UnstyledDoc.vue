<template>
    <DocSectionText v-bind="$attrs">
        <p>Defines the theming mode, defaults to false.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
primevue: {
    unstyled: true
}
`
            }
        };
    }
};
</script>
