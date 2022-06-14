<template>
    <AppDoc name="DynamicDialogDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="dynamicdialog/DynamicDialogDemo.vue">
        <h5>DialogService</h5>
        <p>Dynamic dialogs require the <i>DialogService</i> to be configured globally.</p>

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
        <p>Ideal location of a DynamicDialog is the main application template so that it can be used by any component within the application.</p>

<pre v-code><code>
&lt;template&gt;
    &lt;DynamicDialog /&gt;
&lt;template&gt;

</code></pre>

        <h5>Options API</h5>
        <p><i>$dialog</i> is available as a property in the application instance.</p>
<pre v-code.script><code>
const dialogRef = this.$dialog;

</code></pre>

        <h5>Composition API</h5>
        <p>The service can be injected with the <i>useDialog</i> function.</p>
<pre v-code.script><code>
const dialog = useDialog();

</code></pre>


        <h5>Opening a Dialog</h5>
        <p>The <i>open</i> function of the <i>DialogService</i> is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.</p>

        <h6>Options API</h6>
<pre v-code.script><code>
import ProductListDemo from './ProductListDemo';

export default {
    methods:{
        showProducts() {
            this.$dialog.open(ProductListDemo, {});
        }
    }
}

</code></pre>

        <h6>Composition API</h6>
<pre v-code.script><code>
import ProductListDemo from './ProductListDemo';

export default {
    methods:{
        showProducts() {
            const dialog = useDialog();
            dialog.open(ProductListDemo, {});
        }
    }
}

</code></pre>

        <h5>Closing a Dialog</h5>
        <p>The <i>close</i> function of the <i>dialogRef</i> is used to hide a Dialog. The <i>dialogRef</i> is injected to the component that is loaded by the dialog.</p>

        <h6>Options API</h6>
<pre v-code.script><code>
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close();
        }
    }
}

</code></pre>

        <h6>Composition API</h6>
<pre v-code.script><code>
import { inject } from 'vue'

export default {
    methods:{
        closeDialog() {
            const dialogRef = inject('dialogRef');
            dialogRef.close();
        }
    }
}

</code></pre>

        <h5>Passing Data</h5>
        <p>Data can be passed to the component that is loaded by the Dialog and also from the component back to the caller component. Use the <i>open</i> function and pass your parameters with the <i>data</i> property in the options object.</p>

<pre v-code.script><code>
this.$dialog.open(ProductListDemo, {
    data: {
        user: 'primetime'
    }
};

</code></pre>

<pre v-code.script><code>
export default {
    inject: ['dialogRef'],
    mounted:{
        const params = this.dialogRef.data; //{user: 'primetime'}
    }
}

</code></pre>

        <p>Similarly when hiding a Dialog, any parameter passed to the <i>close</i> function is received from the <i>onClose</i> callback defined by the <i>open</i> function at the caller.</p>
<pre v-code.script><code>
this.$dialog.open(ProductListDemo, {
    onClose(options) {
        const callbackParams = options.data; //{id: 12}
    }
);

</code></pre>

<pre v-code.script><code>
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close({id: 12});
        }
    }
}

</code></pre>

        <h5>Customizing a Dialog</h5>
        <p><i>props</i> option is used to customize the dynamically generated Dialog, refer to the <router-link to="/dialog">Dialog</router-link> documentation for the whole list of options.</p>

<pre v-code.script><code>
import { h } from 'vue';
import Button from 'primevue/button';
import ProductListDemo from './ProductListDemo';

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
                            h(Button, { label: "No", icon: "pi pi-times", onClick: () => dialogRef.close(), class: "p-button-text" }),
                            h(Button, { label: "Yes", icon: "pi pi-check", onClick: () => dialogRef.close(), autofocus: true})
                        ]
                    }
                },
                onClose: (options) => {
                    const data = options.data;
                    if (data) {
                        this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });
        }
    }
}
</code></pre>

        <h5>DialogService API</h5>
        <p>DialogService is the main entry point to open a dialog and load any content within.</p>

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
                            options: Configuration of the Dialog
                        </td>
                        <td>Creates a dialog dynamically with the given options and loads the component. See the <i>Dialog Open Configuration API</i> section below for
                        the avaiable properties.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Dialog Open Configuration API</h5>
        <p>Options to configure a dynamically loaded Dialog including Dialog props, data to pass and callback to execute on hide.</p>
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
                        <td>Properties of a dialog.</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Data to pass to the loaded component.</td>
                    </tr>
                    <tr>
                        <td>templates</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Templates of a dialog including, <strong>header</strong> and <strong>footer</strong>.</td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td>function</td>
                        <td>null</td>
                        <td>Function callback to invoke when dialog is closed.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Dialog Ref API</h5>
        <p>Reference to the dynamic dialog that can be used to access the passed data and close the dialog with the option of passing data back to the caller.</p>
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
                        <td>content</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Loaded content of a dialog.</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Options used to open a dialog.</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Data passed to the dialog.</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>function</td>
                        <td>null</td>
                        <td>Function to close a dialog.</td>
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