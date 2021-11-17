<template>
	<AppDoc name="ConfirmPopupDemo" :sources="sources" github="confirmpopup/ConfirmPopupDemo.vue">
        <h5>ConfirmationService</h5>
        <p>ConfirmPopup is controlled via the <i>ConfirmationService</i> that needs to be installed globally before the application
            instance is created.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);

</code></pre>

		<h5>Import via Module</h5>
<pre v-code.script><code>
import ConfirmPopup from 'primevue/confirmpopup';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/confirmpopup/confirmpopup.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>ConfirmPopup is displayed by calling the <i>require</i> method of the <i>$confirm</i> instance by passing the options to customize the Popup.
        <i>target</i> attribute is mandatory to align the popup to its caller.</p>
<pre v-code><code>
&lt;ConfirmPopup&gt;&lt;/ConfirmPopup&gt;

&lt;Button @click="delete($event)" icon="pi pi-check" label="Confirm"&gt;&lt;/Button&gt;
</code></pre>

<pre v-code.script><code>
export default {
	methods: {
        delete(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    //callback to execute when user rejects the action
                }
            });
        },
    }
}

</code></pre>

        <h5>Composition API</h5>
        <p>The service can be injected with the <i>useConfirm</i> function.</p>
<pre v-code.script><code>
import { defineComponent } from "vue";
import { useConfirm } from "primevue/useconfirm";

export default defineComponent({
    setup() {
        const confirm = useConfirm();

        function delete(event) {
            confirm.require({
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    //callback to execute when user rejects the action
                }
            });
        } 
        
        return {delete};
    }
})

</code></pre>

        <h5>Close Confirmation</h5>
        <p>The popup can also be hidden programmatically using the <i>close</i> method.</p>
<pre v-code.script><code>
export default {
	methods: {
        discard() {
            this.$confirm.close();
        }
    }
}

</code></pre>

        <h5>Templating</h5>
        <p>Templating allows customizing the content where the message instance is available as the implicit variable.</p>
<pre v-code><code><template v-pre>
&lt;ConfirmPopup group="demo">
    &lt;template #message="slotProps"&gt;
        &lt;div class="p-d-flex p-p-4"&gt;
            &lt;i :class="slotProps.message.icon" style="font-size: 1.5rem"&gt;&lt;/i&gt;
            &lt;p class="p-pl-2"&gt;{{slotProps.message.message}}&lt;/p&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/ConfirmPopup&gt;

</template>
</code></pre>

        <h5>Confirmation Options</h5>
        <p>ConfirmDialog can be customized with various options listed here.</p>
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
                        <td>target</td>
                        <td>DomElement</td>
                        <td>null</td>
                        <td>Element to align the overlay.</td>
                    </tr>
                    <tr>
                        <td>message</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Message of the confirmation.</td>
                    </tr>
                    <tr>
                        <td>group</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon to display next to the message.</td>
                    </tr>
                    <tr>
                        <td>accept</td>
                        <td>Function</td>
                        <td>null</td>
                        <td>Callback to execute when action is confirmed.</td>
                    </tr>
                    <tr>
                        <td>reject</td>
                        <td>Function</td>
                        <td>null</td>
                        <td>Callback to execute when action is rejected.</td>
                    </tr>
                     <tr>
                        <td>acceptLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Label of the accept button. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>rejectLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Label of the reject button. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>acceptIcon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon of the accept button.</td>
                    </tr>
                    <tr>
                        <td>rejectIcon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon of the reject button.</td>
                    </tr>
                    <tr>
                        <td>acceptClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the accept button.</td>
                    </tr>
                    <tr>
                        <td>rejectClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the reject button.</td>
                    </tr>
                </tbody>
            </table>
        </div>

		<h5>Properties</h5>
        <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                        <td>group</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>message</td>
                        <td>-</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Styling</h5>
		<p>ConfirmDialog inherits all the classes from the Dialog component, visit <router-link to="/dialog">dialog</router-link> for more information.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
				<tr>
					<th>Name</th>
					<th>Element</th>
				</tr>
				</thead>
				<tbody>
                    <tr>
                        <td>p-confirm-popup</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-confirm-content</td>
                        <td>Content element.</td>
                    </tr>
                    <tr>
                        <td>p-confirm-popup-icon</td>
                        <td>Message icon.</td>
                    </tr>
                    <tr>
                        <td>p-confirm-popup-message</td>
                        <td>Message text.</td>
                    </tr>
                    <tr>
                        <td>p-confirm-popup-footer</td>
                        <td>Footer element for buttons.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
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
        <ConfirmPopup></ConfirmPopup>
        <ConfirmPopup group="demo">
            <template #message="slotProps">
                <div class="p-d-flex p-p-4">
                    <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                    <p class="p-pl-2">{{slotProps.message.message}}</p>
                </div>
            </template>
        </ConfirmPopup>
        <Toast />

        <div class="card">
            <h5>Overlay</h5>
            <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
            <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"></Button>
    
            <h5>Templating</h5>
            <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions" class="p-mr-2"></Button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        confirm2(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        showTemplate(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'demo',
                message: 'Do you accept that?',
                icon: 'pi pi-question-circle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `<template>
    <div>
        <ConfirmPopup></ConfirmPopup>
        <ConfirmPopup group="demo">
            <template #message="slotProps">
                <div class="p-d-flex p-p-4">
                    <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                    <p class="p-pl-2">{{slotProps.message.message}}</p>
                </div>
            </template>
        </ConfirmPopup>
        <Toast />

        <div class="card">
            <h5>Overlay</h5>
            <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
            <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"></Button>
    
            <h5>Templating</h5>
            <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions" class="p-mr-2"></Button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

export default defineComponent({
    setup() {
        const confirm = useConfirm();
        const toast = useToast();

        const confirm1 = (event) => {
            confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        const confirm2 = (event) => {
            confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        const showTemplate = (event) => {
            confirm.require({
                target: event.currentTarget,
                group: 'demo',
                message: 'Do you accept that?',
                icon: 'pi pi-question-circle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        return { confirm1, confirm2, showTemplate };
    },
})
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/confirmpopup/confirmpopup.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/confirmationservice/confirmationservice.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-confirmpopup></p-confirmpopup>
            <p-confirmpopup group="demo">
                <template #message="slotProps">
                    <div class="p-d-flex p-p-4">
                        <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                        <p class="p-pl-2">{{slotProps.message.message}}</p>
                    </div>
                </template>
            </p-confirmpopup>
            <p-toast></p-toast>

            <div class="card">
                <h5>Overlay</h5>
                <p-button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></p-button>
                <p-button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"></p-button>

                <h5>Templating</h5>
                <p-button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions" class="p-mr-2"></p-button>
            </div>
        </div>

        <script type="module">
        const { createApp } = Vue;
        const { useConfirm } = primevue.useconfirm;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                const confirm = useConfirm();
                const toast = useToast();

                const confirm1 = (event) => {
                    confirm.require({
                        target: event.currentTarget,
                        message: 'Are you sure you want to proceed?',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                }

                const confirm2 = (event) => {
                    confirm.require({
                        target: event.currentTarget,
                        message: 'Do you want to delete this record?',
                        icon: 'pi pi-info-circle',
                        acceptClass: 'p-button-danger',
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                }

                const showTemplate = (event) => {
                    confirm.require({
                        target: event.currentTarget,
                        group: 'demo',
                        message: 'Do you accept that?',
                        icon: 'pi pi-question-circle',
                        acceptIcon: 'pi pi-check',
                        rejectIcon: 'pi pi-times',
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                }

                return { confirm1, confirm2, showTemplate };
            },
            components: {
                "p-confirmpopup": primevue.confirmpopup,
                "p-toast": primevue.toast,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.confirmationservice)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    }
}
</script>