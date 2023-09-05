<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `import StyleClass from 'primevue/styleclass';
                
app.directive('styleclass', StyleClass);`
            }
        };
    }
};
</script>
