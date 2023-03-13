<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>close</i> function of the <i>dialogRef</i> is used to hide a Dialog. The <i>dialogRef</i> is injected to the component that is loaded by the dialog.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close();
        }
    }
}`,
                options: `
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close();
        }
    }
}`,
                composition: `
import { inject } from "vue";

const dialogRef = inject('dialogRef');
const closeDialog = () => {
    dialogRef.value.close();
}`
            }
        };
    }
};
</script>
