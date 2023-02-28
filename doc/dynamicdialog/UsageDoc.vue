<template>
    <DocSectionText v-bind="$attrs">
        <p><i>$dialog</i> is available as a property in the application instance for Options API. The service can be injected with the <i>useDialog</i> function for Composition API.</p>
    </DocSectionText>
    <DocSectionCode :code="code" import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `const dialogRef = this.$dialog;`,
                options: `const dialogRef = this.$dialog;`,
                composition: `
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();`
            }
        };
    }
};
</script>
