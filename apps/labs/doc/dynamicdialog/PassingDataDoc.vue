<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>data</i> property to pass parameters when opening a Dialog, the internal component can later access this data using <i>dialogRef</i>.</p>

        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />

        <p>Similarly when hiding a Dialog, any parameter passed to the <i>close</i> function is received from the <i>onClose</i> callback.</p>
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
        <DocSectionCode :code="code4" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
const dialog = useDialog();

const showProducts = () => {
    dialog.open(ProductListDemo, {
        data: {
            user: 'primetime'
        }
    });
}
`
            },
            code2: {
                basic: `
import { inject, onMounted } from "vue";

const dialogRef = inject('dialogRef');

onMounted(() => {
    const params = dialogRef.value.data; // {user: 'primetime'}
})
`
            },
            code3: {
                basic: `
const dialog = useDialog();

const showProducts = () => {
    dialog.open(ProductListDemo, {
        onClose: (opt) => {
            const callbackParams = opt.data; // {selectedId: 12}
        }
    });
}
`
            },
            code4: {
                basic: `
import { inject } from "vue";

const dialogRef = inject('dialogRef');

const closeDialog = () => {
    dialogRef.value.close({
        selectedId: 12
    });
}
`
            }
        };
    }
};
</script>
