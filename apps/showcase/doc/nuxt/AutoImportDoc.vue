<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <NuxtLink to="/autoimport">auto import</NuxtLink> feature registers components automatically with tree shaking support. Defaults to <i>true</i>, when disabled use include/exclude options of <i>components</i> and <i>directives</i> for
            manual registration.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>Use the <i>prefix</i> in <i>components</i> and <i>directives</i> to add a prefix for registration.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: {
    autoImport: true|false
}
`
            },
            code2: {
                basic: `
primevue: {
    autoImport: true|false,
    components: {
        prefix: 'org'
    },
    directives: {
        prefix: 'org'
    }
}
`
            }
        };
    }
};
</script>
