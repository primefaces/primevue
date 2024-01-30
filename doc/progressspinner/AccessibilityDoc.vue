<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>ProgressSpinner components uses <i>progressbar</i> role. Value to describe the component can be defined using <i>aria-labelledby</i> and <i>aria-label</i> props.</p>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />

        <h3>Keyboard Support</h3>
        <p>Component does not include any interactive elements.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ProgressSpinner aria-label="Loading" />
`
            }
        };
    }
};
</script>
