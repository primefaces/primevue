<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import OverlayPanel from 'primevue/overlaypanel';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
<CodeHighlight>
&lt;Button type="button" label="Toggle" @click="toggle" /&gt;

&lt;OverlayPanel ref="op"&gt;
	&lt;img src="demo/images/nature/nature1.jpg" alt="Nature Image"&gt;
&lt;/OverlayPanel&gt;
</CodeHighlight>

<CodeHighlight lang="js">
toggle(event) {
    this.$refs.op.toggle(event);
}
</CodeHighlight>

				<h3>Dismissable and CloseIcon</h3>
				<p>Clicking outside the overlay hides the panel, setting <i>dismissable</i> to false disables this behavior.
					Additionally enabling <i>showCloseIcon</i> property displays a close icon at the top right corner to close the panel.</p>
<CodeHighlight>
&lt;OverlayPanel ref="op" :showCloseIcon="true" :dismissable="true"&gt;
	&lt;img src="demo/images/nature/nature1.jpg" alt="Nature Image"&gt;
&lt;/OverlayPanel&gt;
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
                                <td>dismissable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Enables to hide the overlay when outside is clicked.</td>
                            </tr>
                            <tr>
                                <td>showCloseIcon</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, displays a close icon at top right corner.</td>
                            </tr>
                            <tr>
                                <td>appendTo</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Id of the element or "body" for document where the overlay should be appended to.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
                            <tr>
                                <td>autoZIndex</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to automatically manage layering.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Methods</h3>
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
							<td>toggle</td>
							<td>event: Browser event</td>
							<td>Toggles the visibility of the overlay.</td>
						</tr>
						<tr>
							<td>show</td>
							<td>event: Browser event <br />
								target: Optional target if event.target should not be used</td>
							<td>Shows the overlay.</td>
						</tr>
						<tr>
							<td>hide</td>
							<td>-</td>
							<td>Hides the overlay.</td>
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
							<td>p-overlaypanel</td>
							<td>Container element.</td>
						</tr>
						<tr>
							<td>p-overlaypanel-content</td>
							<td>Content of the panel.</td>
						</tr>
						<tr>
							<td>p-overlaypanel-close</td>
							<td>Close icon.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/overlaypanel" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Button type="button" label="Toggle" @click="toggle" /&gt;

&lt;OverlayPanel ref="op" appendTo="body" :showCloseIcon="true"&gt;
    &lt;img src="demo/images/nature/nature1.jpg" alt="Nature Image"&gt;
&lt;/OverlayPanel&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	methods: {
		toggle(event) {
			this.$refs.op.toggle(event);
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>