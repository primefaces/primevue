<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h3>ToastService</h3>
                <p>Toast messages are dynamically created using a <i>ToastService</i> that needs to be installed globally before the application
                    instance is created.</p>
<CodeHighlight lang="javascript">
import ToastService from 'primevue/toastservice';
Vue.use(ToastService);

//example application instance
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
</CodeHighlight>

				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Toast from 'primevue/toast';
</CodeHighlight>

				<h3>Getting Started</h3>
                <p>Ideal location of a Toast is the main application template so that it can be used by any component within the application.</p>

				<p>A single message is represented by the Message interface in PrimeVue that defines various properties such as severity,
					summary and detail. Messages are displayed by using the <i>add</i> method of the <b>$toast</b> property of the application.</p>
<CodeHighlight lang="js">
this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
</CodeHighlight>

				<h3>Message API</h3>
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
                                <td>severity</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Severity of the message.</td>
                            </tr>
                            <tr>
                                <td>summary</td>
                                <td>element</td>
                                <td>null</td>
                                <td>Summary content of the message.</td>
                            </tr>
                            <tr>
                                <td>detail</td>
                                <td>element</td>
                                <td>null</td>
                                <td>Detail content of the message.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the message can be closed manually using the close icon.</td>
                            </tr>
                            <tr>
                                <td>life</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Delay in milliseconds to close the message automatically.</td>
                            </tr>
                            <tr>
                                <td>group</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Key of the Toast to display the message.</td>
                            </tr>
						</tbody>
					</table>
				</div>

                <h3>MessageService API</h3>
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
                                <td>add</td>
                                <td>message: Message instance</td>
                                <td>Displays the message in a suitable Toast component.</td>
                            </tr>
                            <tr>
                                <td>removeGroup</td>
                                <td>group: Name of the message group</td>
                                <td>Clears the messages that belongs to the group.</td>
                            </tr>
                            <tr>
                                <td>removeAllGroup</td>
                                <td>-</td>
                                <td>Clears all the messages.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Severities</h3>
				<p>There are four possible values for the severity of a message. Info is the default.</p>

				<ul>
					<li>success</li>
					<li>info</li>
					<li>warn</li>
					<li>error</li>
				</ul>

				<h3>Position</h3>
				<p>There are four positions available for the toast container defined by the <i>position</i> property that defaults to "topright". Other
					valid values are "topleft", "bottomleft" and "bottomright"
				</p>
<CodeHighlight>
&lt;Toast /&gt;
&lt;Toast position="topleft" /&gt;
&lt;Toast position="bottomleft" /&gt;
&lt;Toast position="bottomright" /&gt;
</CodeHighlight>

                <h3>Groups</h3>
                <p>A message can be targeted to a specific Toast component if their group properties match. Messages without a group
                    are forwarded to the default Toast component that does not have a group defined.
                </p>
				
<CodeHighlight>
&lt;Toast /&gt;
&lt;Toast position="mykey" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
this.$toast.add({severity:'success', summary: 'Default Message'});
this.$toast.add({severity:'success', summary: 'Specific Message', group: 'mykey'});
</CodeHighlight>

				<h3>Clearing Messages</h3>
				<p><i>removeGroup(group)</i> clears the messages for a specific Toast whereas <i>removeAllGroups()</i> method clears all messages.</p>
<CodeHighlight lang="js">
this.$toast.removeAllGroups();
</CodeHighlight>

				<h3>Properties</h3>
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
                                <td>Unique identifier of a message group.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>topright</td>
                                <td>Position of the toast in viewport, valid values are "topright", "topleft", "bottomleft" and "bottomright".</td>
                            </tr>
                            <tr>
                                <td>autoZIndex</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to automatically manage layering.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
				<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
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
                                <td>p-toast</td>
                                <td>Main container element.</td>
                            </tr>
                            <tr>
                                <td>p-toast-container</td>
                                <td>Container of a message item.</td>
                            </tr>
                            <tr>
                                <td>p-toast-item</td>
                                <td>Message element.</td>
                            </tr>
                            <tr>
                                <td>p-toast-icon-close</td>
                                <td>Close icon of a message.</td>
                            </tr>
                            <tr>
                                <td>p-toast-image</td>
                                <td>Severity icon.</td>
                            </tr>
                            <tr>
                                <td>p-toast-message</td>
                                <td>Container of message texts.</td>
                            </tr>
                            <tr>
                                <td>p-toast-title</td>
                                <td>Summary of the message.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/toast" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;Toast&lt;/h1&gt;
				&lt;p&gt;Toast is used to display messages in an overlay.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation p-fluid"&gt;
			&lt;h3&gt;Severities&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Success" class="p-button-success" @click="showSuccess" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Info" class="p-button-info" @click="showInfo" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Warn" class="p-button-warning" @click="showWarn" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Error" class="p-button-danger" @click="showError" /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Positions&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12 p-md-4"&gt;
					&lt;Button label="Top Left" @click="showTopLeft" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-4"&gt;
					&lt;Button label="Bottom Left" class="p-button-warning" @click="showBottomLeft" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-4"&gt;
					&lt;Button label="Bottom Right" class="p-button-success" @click="showBottomRight" /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Options&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12 p-md-6"&gt;
					&lt;Button @click="showMultiple" label="Multiple" class="p-button-warning" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-6"&gt;
					&lt;Button @click="showSticky" label="Sticky" /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Remove All&lt;/h3&gt;
			&lt;Button @click="clear" label="Clear" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			messages: [],
		}
	},
	methods: {
		showSuccess() {
			this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
		},
		showInfo() {
			this.$toast.add({severity:'info', summary: 'Info Message', detail:'PrimeVue rocks', life: 3000});
		},
		showWarn() {
			this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes', life: 3000});
		},
		showError() {
			this.$toast.add({severity:'error', summary: 'Error Message', detail:'Validation failed', life: 3000});
		},
		showTopLeft() {
			this.$toast.add({severity: 'info', summary: 'Info ', detail: 'You need to close Me', group: 'tl', life: 3000});
		},
		showBottomLeft() {
			this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes', group: 'bl', life: 3000});
		},
		showBottomRight() {
			this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', group: 'br', life: 3000});
		},
		showSticky() {
			this.$toast.add({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me'});
		},
		showMultiple() {
			this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
			this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
			this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
		},
		clear() {
			this.$toast.removeAllGroups();
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>