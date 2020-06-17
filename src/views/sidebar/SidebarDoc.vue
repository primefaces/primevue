<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Sidebar from 'primevue/sidebar';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Sidebar is used as a container and visibility is controlled with <i>visible</i> property that requires the sync operator for two-way binding.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync="visibleLeft"&gt;
	Content
&lt;/Sidebar&gt;

&lt;Button icon="pi pi-arrow-right" @click="visibleLeft = true" /&gt;
</CodeHighlight>

				<h5>Position</h5>
				<p>Sidebar can either be located on the left (default), right, top or bottom of the screen depending on the <i>position</i> property.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync="visibleRight" position="right"&gt;
	Content
&lt;/Sidebar&gt;
</CodeHighlight>

				<h5>Size</h5>
				<p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync="visibleLeft" class="p-sidebar-sm"&gt;&lt;/Sidebar&gt;
&lt;Sidebar :visible.sync="visibleLeft" class="p-sidebar-md"&gt;&lt;/Sidebar&gt;
&lt;Sidebar :visible.sync="visibleLeft" class="p-sidebar-lg"&gt;&lt;/Sidebar&gt;
</CodeHighlight>

				<h5>Full Screen</h5>
				<p>Full screen mode allows the sidebar to cover whole screen.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync="visibleFull" position="full"&gt;
	Content
&lt;/Sidebar&gt;
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
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the dialog.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Specifies the position of the sidebar, valid values are "left", "right", "top", "bottom" and "full".</td>
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
                            <tr>
                                <td>dismissable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether clicking outside closes the panel.</td>
                            </tr>
                            <tr>
                                <td>showCloseIcon</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display a close icon inside the panel.</td>
                            </tr>
                            <tr>
                                <td>modal</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to a modal layer behind the sidebar.</td>
                            </tr>
                            <tr>
                                <td>ariaCloseLabel</td>
                                <td>string</td>
                                <td>close</td>
                                <td>Aria label of the close icon.</td>
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
							<td>hide</td>
							<td>-</td>
							<td>Callback to invoke when sidebar gets hidden.</td>
						</tr>
						<tr>
							<td>show</td>
							<td>-</td>
							<td>Callback to invoke when sidebar gets shown.</td>
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
							<td>p-sidebar</td>
							<td>Container element</td>
						</tr>
						<tr>
							<td>p-sidebar-left</td>
							<td>Container element of left sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-right</td>
							<td>Container element of right sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-top</td>
							<td>Container element of top sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-bottom</td>
							<td>Container element of bottom sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-full</td>
							<td>Container element of a full screen sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-active</td>
							<td>Container element when sidebar is visible.</td>
						</tr>
						<tr>
							<td>p-sidebar-close</td>
							<td>Close anchor element.</td>
						</tr>
						<tr>
							<td>p-sidebar-sm</td>
							<td>Small sized sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-md</td>
							<td>Medium sized sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-lg</td>
							<td>Large sized sidebar.</td>
						</tr>
						<tr>
							<td>p-sidebar-mask</td>
							<td>Modal layer of the sidebar.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/sidebar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Sidebar :visible.sync="visibleLeft" :baseZIndex="1000"&gt;
    &lt;h1 style="fontWeight:normal"&gt;Left Sidebar&lt;/h1&gt;
    &lt;Button type="button" @click="visibleLeft = false" label="Save" class="p-button-success" style="margin-right:.25em" /&gt;
    &lt;Button type="button" @click="visibleLeft = false" label="Cancel" class="p-button-secondary"/&gt;
&lt;/Sidebar&gt;

&lt;Sidebar :visible.sync="visibleRight" :baseZIndex="1000" position="right"&gt;
    &lt;h1 style="fontWeight:normal"&gt;Right Sidebar&lt;/h1&gt;
    &lt;Button type="button" @click="visibleRight = false" label="Save" class="p-button-success" style="margin-right:.25em" /&gt;
    &lt;Button type="button" @click="visibleRight = false" label="Cancel" class="p-button-secondary"/&gt;
&lt;/Sidebar&gt;

&lt;Sidebar :visible.sync="visibleTop" :baseZIndex="1000" position="top"&gt;
    &lt;h1 style="fontWeight:normal"&gt;Top Sidebar&lt;/h1&gt;
    &lt;Button type="button" @click="visibleTop = false" label="Save" class="p-button-success" style="margin-right:.25em" /&gt;
    &lt;Button type="button" @click="visibleTop = false" label="Cancel" class="p-button-secondary"/&gt;
&lt;/Sidebar&gt;

&lt;Sidebar :visible.sync="visibleBottom" :baseZIndex="1000" position="bottom"&gt;
    &lt;h1 style="fontWeight:normal"&gt;Bottom Sidebar&lt;/h1&gt;
    &lt;Button type="button" @click="visibleBottom = false" label="Save" class="p-button-success" style="margin-right:.25em" /&gt;
    &lt;Button type="button" @click="visibleBottom = false" label="Cancel" class="p-button-secondary"/&gt;
&lt;/Sidebar&gt;

&lt;Sidebar :visible.sync="visibleFull" :baseZIndex="1000" position="full"&gt;
    &lt;h1 style="fontWeight:normal"&gt;Full Screen&lt;/h1&gt;
    &lt;Button type="button" @click="visibleFull = false" label="Save" class="p-button-success" style="margin-right:.25em" /&gt;
    &lt;Button type="button" @click="visibleFull = false" label="Cancel" class="p-button-secondary"/&gt;
&lt;/Sidebar&gt;

&lt;Button icon="pi pi-arrow-right" @click="visibleLeft = true" style="margin-right:.25em" /&gt;
&lt;Button icon="pi pi-arrow-left" @click="visibleRight = true" style="margin-right:.25em" /&gt;
&lt;Button icon="pi pi-arrow-down" @click="visibleTop = true" style="margin-right:.25em" /&gt;
&lt;Button icon="pi pi-arrow-up" @click="visibleBottom = true" style="margin-right:.25em" /&gt;
&lt;Button icon="pi pi-th-large" @click="visibleFull = true"  /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			visibleLeft: false,
			visibleRight: false,
			visibleTop: false,
			visibleBottom: false,
			visibleFull: false
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>