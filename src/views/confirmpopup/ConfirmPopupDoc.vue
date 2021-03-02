<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h5>ConfirmationService</h5>
                <p>ConfirmPopup is controlled via the <i>ConfirmationService</i> that needs to be installed globally before the application
                    instance is created.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);

</code></pre>

				<h5>Import</h5>
<pre v-code.script><code>
import ConfirmPopup from 'primevue/confirmpopup';

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
			</TabPanel>

			<TabPanel header="Source">
                <div class="p-d-flex p-jc-between">
                    <a href="https://github.com/primefaces/primevue/tree/master/src/views/dialog" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
                    <LiveEditor name="ConfirmPopupDemo" :sources="sources" :confirmationService="true" :toastService="true" :components="['Button']" />
                </div>
<pre v-code><code><template v-pre>
&lt;ConfirmPopup&gt;&lt;/ConfirmPopup&gt;

&lt;div class="card"&gt;
    &lt;Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"&gt;&lt;/Button&gt;
    &lt;Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"&gt;&lt;/Button&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
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
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }
    }
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
    data() {
        return {
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <Toast />
        <div class="content-section implementation">
            <ConfirmPopup></ConfirmPopup>

            <div class="card">
                <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
                <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"></Button>
            </div>
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
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
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
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }
    }
}`
                },
                'api': {
                    content: `<template>
    <div class="layout-content">
        <Toast />
        <div class="content-section implementation">
            <ConfirmPopup></ConfirmPopup>

            <div class="card">
                <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
                <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"></Button>
            </div>
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
                    toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
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
                    toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        return { confirm1, confirm2 };
    },
})
`
                }
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>