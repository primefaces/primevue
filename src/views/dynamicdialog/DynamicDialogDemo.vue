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
                <Button label="Show" @click="onShow" />

                <DynamicDialog />
            </div>
        </div>
    </div>
</template>

<script>
import ProductListDemo from './ProductListDemo';
import Button from 'primevue/button';
import { h } from 'vue';

export default {
    methods:{
        onShow() {
            const dialogRef = this.$dialog.open(ProductListDemo, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50%',
                        height: '550px',
                    },
                    modal: true
                },
                templates: {
                    footer: () => {
                        return [
                            h(Button, { label: "No", icon: "pi pi-times", onClick: () => dialogRef.hide({ buttonType: 'No' }), class: "p-button-text" }),
                            h(Button, { label: "Yes", icon: "pi pi-check", onClick: () => dialogRef.hide({ buttonType: 'Yes' }), autofocus: true })
                        ]
                    }
                },
                onHide: (options) => {
                    const data = options.data;
                    if (data) {
                        const buttonType = data.buttonType;
                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };

                        this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });
        }
    }
}
</script>
