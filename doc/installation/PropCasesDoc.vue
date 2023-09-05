<template>
    <DocSectionText v-bind="$attrs">
        <p>Component prop names are described as camel case throughout the documentation however kebab-case is also fully supported. Events on the other hand should always be kebab-case.</p>

        <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `<Dialog :showHeader="false"></Dialog>

<!-- can be written as -->

<Dialog :show-header="false"></Dialog>`
            }
        };
    }
};
</script>
