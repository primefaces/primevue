<template>
    <DocSectionText v-bind="$attrs">
        <p>Determines the composables to use, when default value is ignored or set as <i>*</i> all composables are imported.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: {
    composables: {
        include: ['useStyle']
    }
}
`
            }
        };
    }
};
</script>
