<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>emits</i> object defines callbacks to handle events emitted by the component within the Dialog.</p>

        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import ProductListDemo from './ProductListDemo';
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();

const showProducts = () => {
    dialog.open(ProductListDemo, {
        onCancel: (e) => {
            console.log(e);  // {user: 'primetime'}
        }
    });
}
`
            },
            code2: {
                basic: `
<script setup>
/* ProductListDemo.vue */
const emit = defineEmits(['onCancel', 'onSave'])

function buttonClick() {
    emit('onCancel', {user: 'primetime'});
}
<\/script>
`
            }
        };
    }
};
</script>
