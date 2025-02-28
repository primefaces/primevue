<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>close</i> function is available through a <i>dialogRef</i> that is injected to the component loaded by the dialog.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { inject } from "vue";

const dialogRef = inject('dialogRef');

const closeDialog = () => {
    dialogRef.value.close();
}
`
            }
        };
    }
};
</script>
