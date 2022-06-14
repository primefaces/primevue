<template>
    <AppDoc name="DynamicDialogDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="dynamicdialog/DynamicDialogDemo.vue">
        <h5>DialogService</h5>
        <p></p>
<pre v-code.script><code>
import {createApp} from 'vue';
import DialogService from 'primevue/dialogservice';

const app = createApp(App);
app.use(DialogService);

</code></pre>

        <h5>Import via Module</h5>
<pre v-code.script><code>
import DynamicDialog from 'primevue/dynamicdialog';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/dynamicdialog/dynamicdialog.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>Getting Started</h5>
        <p></p>

        <h5>Options API</h5>
        <p><i>$dialog</i> is available as a property in the application instance.</p>
<pre v-code.script><code>
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

</code></pre>

        <h5>Composition API</h5>
        <p>The dialog instance can be injected with the <i>useDialog</i> function.</p>
<pre v-code.script><code>
import { defineComponent } from "vue";
import { useDialog } from "primevue/usedialog";

export default defineComponent({
    setup() {
        const dialog = useDialog();
        const dialogRef = dialog.open(ProductListDemo, {
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
        })
    }
})

</code></pre>

        <h5>Dialog API</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>props</td>
                        <td>object</td>
                        <td>null</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>templates</td>
                        <td>object</td>
                        <td>null</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onHide</td>
                        <td>function</td>
                        <td>null</td>
                        <td>Close function of the dialog.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>DialogService API</h5>
        <div class="doc-tablewrapper">
			<table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
				</thead>
                <tbody>
                    <tr>
                        <td>open</td>
                        <td>content: The component to load<br />
                            options: configuration of the Dialog
                        </td>
                        <td>Creates the dialog.</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </AppDoc>
</template>

<script>
    export default {
        data() {
            return {
                sources: {
                    'options-api': {
                        tabName: 'Options API Source',
                        content: `
<template>
    <div>
        <Button label="Show" @click="onShow" />

        <DynamicDialog />
    </div>
</template> 

<script>
import { h } from 'vue';
import Button from 'primevue/button';
import ProductListDemo from './ProductListDemo';

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
                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: \`Pressed '\${buttonType}' button\` } : { summary: 'Product Selected', detail: data.name };

                        this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });
        }
    }
}
<\\/script>
                        `
                    }
                }
            }
        }
    }
</script>