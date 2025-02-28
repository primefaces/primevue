<template>
    <DocSectionText v-bind="$attrs">
        <p>A global configuration can be overriden with the local <i>pt</i> configuration in case you'd like to change the style of a particular component.</p>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText :pt="myInputStyle" :ptOptions="{mergeSections: true, mergeProps: false}">
`
            }
        };
    }
};
</script>
