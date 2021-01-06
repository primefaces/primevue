<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h5>Mitt EventBus</h5>
                <p>ConfirmPopup requires <a href="https://www.npmjs.com/package/mitt">Mitt</a>, a tiny 200b EventBus implementation.</p>
<CodeHighlight>
npm install mitt --save
</CodeHighlight>

                <h5>ConfirmationService</h5>
                <p>ConfirmPopup is controlled via the <i>ConfirmationService</i> that needs to be installed globally before the application
                    instance is created.</p>
<CodeHighlight lang="javascript">
import ConfirmationService from 'primevue/confirmationservice';
Vue.use(ConfirmationService);

//example application instance
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
</CodeHighlight>

				<h5>Import</h5>
<CodeHighlight lang="javascript">
import ConfirmPopup from 'primevue/confirmpopup';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>ConfirmPopup is displayed by calling the <i>require</i> method of the <i>$confirm</i> instance by passing the options to customize the Popup.</p>
<CodeHighlight>
&lt;ConfirmPopup&gt;&lt;/ConfirmPopup&gt;

&lt;Button @click="delete()" icon="pi pi-check" label="Confirm"&gt;&lt;/Button&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	methods: {
        delete() {
            this.$confirm.require({
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
</CodeHighlight>

                <h5>Close Confirmation</h5>
                <p>The popup can also be hidden programmatically using the <i>close</i> method.</p>
<CodeHighlight lang="javascript">
export default {
	methods: {
        discard() {
            this.$confirm.close();
        }
    }
}
</CodeHighlight>

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
				<p>Mitt.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/dialog" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;ConfirmPopup&gt;&lt;/ConfirmPopup&gt;

&lt;div class="card"&gt;
    &lt;Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"&gt;&lt;/Button&gt;
    &lt;Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"&gt;&lt;/Button&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    methods: {
        confirm1() {
            this.$confirm.require({
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
        confirm2() {
            this.$confirm.require({
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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>