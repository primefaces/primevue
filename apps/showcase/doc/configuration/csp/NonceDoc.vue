<template>
    <DocSectionText v-bind="$attrs">
        <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">nonce</a> value to use on dynamically generated style elements in core.</p>

        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
app.use(PrimeVue, {
    csp: {
        nonce: '...'
    }
});
`
            }
        };
    }
};
</script>
