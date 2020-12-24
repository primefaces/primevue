<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Chip from 'primevue/chip';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Chip can display labels, icons and images.</p>
<CodeHighlight>
&lt;Chip label="Text Only" /&gt;
&lt;Chip label="Text with icon" icon="pi pi-check" /&gt;
&lt;Chip label="Text with image" image="user.png" /&gt;
</CodeHighlight>

				<h5>Removable</h5>
				<p>Setting <i>removable</i> property displays an icon to close the chip, the optional <i>remove</i>
				event is available to get notified when a chip is hidden.</p>
<CodeHighlight>
&lt;Chip label="Text" removable /&gt;
</CodeHighlight>

				<h5>Templating</h5>
				<p>Content can easily be customized with the default slot instead of using the built-in modes.</p>
<CodeHighlight>
&lt;Chip&gt;
   Content
&lt;/Chip&gt;
</CodeHighlight>

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
								<td>label</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the text to display.</td>
							</tr>
							<tr>
								<td>icon</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the icon to display.</td>
							</tr>
							<tr>
								<td>image</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the image to display.</td>
							</tr>
							<tr>
								<td>removable</td>
								<td>boolean</td>
								<td>false</td>
								<td>Whether to display a remove icon.</td>
							</tr>
							<tr>
								<td>removeIconClass</td>
								<td>string</td>
								<td>pi pi-times-circle</td>
								<td>Icon of the remove element.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h5>Events</h5>
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
                                <td>remove</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when a chip is removed.</td>
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
								<td>p-chip</td>
								<td>Container element.</td>
                            </tr>
							<tr>
								<td>p-chip-image</td>
								<td>Container element in image mode.</td>
                            </tr>
							<tr>
								<td>p-chip-text</td>
								<td>Text of the chip.</td>
                            </tr>
							<tr>
								<td>p-chip-remove-icon</td>
								<td>Remove icon.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/chip" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;div class="p-d-flex p-ai-center"&gt;
	&lt;Chip label="Action" class="p-mr-2" /&gt;
	&lt;Chip label="Comedy" class="p-mr-2" /&gt;
	&lt;Chip label="Mystery" class="p-mr-2" /&gt;
	&lt;Chip label="Thriller" removable /&gt;
&lt;/div&gt;

&lt;h5&gt;Icon&lt;/h5&gt;
&lt;div class="p-d-flex p-ai-center"&gt;
	&lt;Chip label="Apple" icon="pi pi-apple" class="p-mr-2" /&gt;
	&lt;Chip label="Facebook" icon="pi pi-facebook" class="p-mr-2" /&gt;
	&lt;Chip label="Google" icon="pi pi-google" class="p-mr-2" /&gt;
	&lt;Chip label="Microsoft" icon="pi pi-microsoft" removable /&gt;
&lt;/div&gt;

&lt;h5&gt;Image&lt;/h5&gt;
&lt;div class="p-d-flex p-ai-center"&gt;
	&lt;Chip label="Amy Elsner" image="demo/images/avatar/amyelsner.png" class="p-mr-2" /&gt;
	&lt;Chip label="Asiya Javayant" image="demo/images/avatar/asiyajavayant.png" class="p-mr-2" /&gt;
	&lt;Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="p-mr-2" /&gt;
	&lt;Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" removable /&gt;
&lt;/div&gt;

&lt;h5&gt;Styling&lt;/h5&gt;
&lt;div class="p-d-flex p-ai-center"&gt;
	&lt;Chip label="Action" class="p-mr-2 custom-chip" /&gt;
	&lt;Chip label="Apple" icon="pi pi-apple" class="p-mr-2 custom-chip" /&gt;
	&lt;Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="p-mr-2 custom-chip" /&gt;
	&lt;Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" class="custom-chip" removable /&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

			</TabPanel>
		</TabView>
	</div>
</template>