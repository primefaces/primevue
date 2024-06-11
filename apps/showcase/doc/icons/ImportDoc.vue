<template>
    <DocSectionText v-bind="$attrs">
        <p>CSS file of the icon library needs to be imported in <i>styles.scss</i> of your application.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: "\nimport 'primeicons/primeicons.css'\n"
            }
        };
    }
};
</script>
