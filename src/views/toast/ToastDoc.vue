<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h5>ToastService</h5>
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

				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Toast from 'primevue/toast';
</CodeHighlight>

				<h5>Getting Started</h5>
                <p>Ideal location of a Toast is the main application template so that it can be used by any component within the application.</p>

				<p>A single message is represented by the Message interface in PrimeVue that defines various properties such as severity,
					summary and detail. Messages are displayed by using the <i>add</i> method of the <b>$toast</b> property of the application.</p>
<CodeHighlight lang="js">
this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
</CodeHighlight>

				<h5>Message API</h5>
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

                <h5>MessageService API</h5>
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

				<h5>Severities</h5>
				<p>There are four possible values for the severity of a message. Info is the default.</p>

				<ul>
					<li>success</li>
					<li>info</li>
					<li>warn</li>
					<li>error</li>
				</ul>

				<h5>Position</h5>
				<p>There are four positions available for the toast container defined by the <i>position</i> property that defaults to "top-right". Other
					valid values are "top-left", "top-center", "bottom-left", "botton-center", "bottom-right" and "center".
				</p>
<CodeHighlight>
&lt;Toast /&gt;
&lt;Toast position="top-left" /&gt;
&lt;Toast position="top-center" /&gt;
&lt;Toast position="top-right" /&gt;
&lt;Toast position="center" /&gt;
&lt;Toast position="bottom-left" /&gt;
&lt;Toast position="bottom-center" /&gt;
&lt;Toast position="bottom-right" /&gt;
</CodeHighlight>

                <h5>Groups</h5>
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

				<h5>Clearing Messages</h5>
				<p><i>removeGroup(group)</i> clears the messages for a specific Toast whereas <i>removeAllGroups()</i> method clears all messages.</p>
<CodeHighlight lang="js">
this.$toast.removeAllGroups();
</CodeHighlight>

				<h5>Properties</h5>
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
                                <td>top-right</td>
                                <td>Position of the toast in viewport.</td>
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

				<h5>Styling</h5>
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
                                <td>p-toast-message</td>
                                <td>Container of a message item.</td>
                            </tr>
                            <tr>
                                <td>p-toast-icon-close</td>
                                <td>Close icon of a message.</td>
                            </tr>
                            <tr>
                                <td>p-toast-icon</td>
                                <td>Severity icon.</td>
                            </tr>
                            <tr>
                                <td>p-toast-message-content</td>
                                <td>Container of message texts.</td>
                            </tr>
                            <tr>
                                <td>p-toast-summary</td>
                                <td>Summary of the message.</td>
                            </tr>
                            <tr>
                                <td>p-toast-detail</td>
                                <td>Detail of the message.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/toast" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Severities&lt;/h5&gt;
&lt;Button label="Success" class="p-button-success" @click="showSuccess" /&gt;
&lt;Button label="Info" class="p-button-info" @click="showInfo" /&gt;
&lt;Button label="Warn" class="p-button-warning" @click="showWarn" /&gt;
&lt;Button label="Error" class="p-button-danger" @click="showError" /&gt;

&lt;h5&gt;Positions&lt;/h5&gt;
&lt;Button label="Top Left" class="p-mr-2" @click="showTopLeft" /&gt;
&lt;Button label="Bottom Left" class="p-button-warning" @click="showBottomLeft" /&gt;
&lt;Button label="Bottom Right" class="p-button-success" @click="showBottomRight" /&gt;

&lt;h5&gt;Options&lt;/h5&gt;
&lt;Button @click="showMultiple" label="Multiple" class="p-button-warning" /&gt;
&lt;Button @click="showSticky" label="Sticky" /&gt;

&lt;h5&gt;Remove All&lt;/h5&gt;
&lt;Button @click="clear" label="Clear" /&gt;
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
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
        },
        showInfo() {
            this.$toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
        },
        showWarn() {
            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
        },
        showError() {
            this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
        },
        showTopLeft() {
            this.$toast.add({severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000});
        },
        showBottomLeft() {
            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', group: 'bl', life: 3000});
        },
        showBottomRight() {
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', group: 'br', life: 3000});
        },
        showSticky() {
            this.$toast.add({severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
        },
        showMultiple() {
            this.$toast.add({severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000});
            this.$toast.add({severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000});
            this.$toast.add({severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000});
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