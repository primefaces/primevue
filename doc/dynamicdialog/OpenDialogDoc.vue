<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>open</i> function of the <i>DialogService</i> is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <p>The component can also be loaded asynchronously, this approach is useful in conditional cases and to improve initial load times as well.</p>
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
    dialog.open(ProductListDemo, {});
}
`
            },
            code2: {
                basic: `
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();

const dynamicComponent = defineAsyncComponent(() => import('./ProductListDemo.vue'));

const showProducts = () => {
    dialog.open(dynamicComponent, {});
}
`
            }
        };
    }
};
</script>
