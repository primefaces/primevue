<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Tooltip from 'primevue/tooltip';

app.directive('tooltip', Tooltip);
`
            }
        };
    }
};
</script>
