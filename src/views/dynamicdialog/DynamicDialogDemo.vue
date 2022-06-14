<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dynamic Dialog</h1>
                <p>Dialogs can be created dynamically with any component as the content using a DialogService.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />

                <DynamicDialog />
            </div>
        </div>

        <DynamicDialogDoc />
    </div>
</template>

<script>
import { h } from 'vue';
import Button from 'primevue/button';
import ProductListDemo from './ProductListDemo';
import DynamicDialogDoc from './DynamicDialogDoc.vue';

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
                    footer: () => {
                        return [
                            h(Button, { label: "No", icon: "pi pi-times", onClick: () => dialogRef.close({ buttonType: 'No' }), class: "p-button-text" }),
                            h(Button, { label: "Yes", icon: "pi pi-check", onClick: () => dialogRef.close({ buttonType: 'Yes' }), autofocus: true})
                        ]
                    }
                },
                onClose: (options) => {
                    const data = options.data;
                    if (data) {
                        const buttonType = data.buttonType;
                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };

                        this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });
        }
    },
    components: {
        'DynamicDialogDoc': DynamicDialogDoc
    }
}
</script>
