<template>
    <DocSectionText v-bind="$attrs">
        <p>DynamicDialog uses the Dialog component internally, visit <NuxtLink to="/dialog">dialog</NuxtLink> for more information.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { markRaw } from 'vue';
import ProductListDemo from './ProductListDemo';
import FooterDemo from './FooterDemo';

export default {
    methods:{
        showProducts() {
            const dialogRef = this.$dialog.open(ProductListDemo, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50vw',
                    },
                    breakpoints:{
                        '960px': '75vw',
                        '640px': '90vw'
                    },
                    modal: true
                },
                templates: {
                    footer: markRaw(FooterDemo)
                },
                onClose: (options) => {
                    const data = options.data;
                    if (data) {
                        this.$toast.add({ severity:'info', summary: 'Info Message', detail:'Order submitted', life: 3000 });
                    }
                }
            });
        }
    }
}`
            }
        };
    }
};
</script>
