<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>open</i> function of the <i>DialogService</i> is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import ProductListDemo from './ProductListDemo';

export default {
    methods:{
        showProducts() {
            this.$dialog.open(ProductListDemo, {});
        }
    }
}`,
                options: `
import ProductListDemo from './ProductListDemo';

export default {
    methods:{
        showProducts() {
            this.$dialog.open(ProductListDemo, {});
        }
    }
}`,
                composition: `
import ProductListDemo from './ProductListDemo';
import { useDialog } from 'primevue/usedialog';

const showProducts = () => {
    const dialog = useDialog();
    dialog.open(ProductListDemo, {});
}`
            }
        };
    }
};
</script>
