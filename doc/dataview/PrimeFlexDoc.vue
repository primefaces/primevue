<template>
    <DocSectionText v-bind="$attrs">
        <p>DataView depends on PrimeFlex Grid functionality so it needs to be installed and imported.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `npm install primeflex`
            },
            code2: {
                basic: `import 'primeflex/primeflex.css';`
            }
        };
    }
};
</script>
