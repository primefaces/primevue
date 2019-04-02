<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Sidebar from 'primevue/sidebar';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Sidebar is used as a container and visibility is controlled with <i>visible</i> property.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync=&quot;visibleLeft&quot; :baseZIndex=&quot;1000&quot;&gt;
	Content
&lt;/Sidebar&gt;

&lt;Button icon=&quot;pi pi-arrow-right&quot; @click=&quot;visibleLeft = true&quot; /&gt;
</CodeHighlight>

				<h3>Position</h3>
				<p>Sidebar can either be located on the left (default), right, top or bottom of the screen depending on the <i>position</i> property.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync=&quot;visibleRight&quot; :baseZIndex=&quot;1000&quot; position=&quot;right&quot;&gt;
	Content
&lt;/Sidebar&gt;
</CodeHighlight>

				<h3>Size</h3>
				<p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync=&quot;visibleLeft&quot; class=&quot;p-sidebar-sm&quot;&gt;&lt;/Sidebar&gt;
&lt;Sidebar :visible.sync=&quot;visibleLeft&quot; class=&quot;p-sidebar-md&quot;&gt;&lt;/Sidebar&gt;
&lt;Sidebar :visible.sync=&quot;visibleLeft&quot; class=&quot;p-sidebar-lg&quot;&gt;&lt;/Sidebar&gt;
</CodeHighlight>

				<h3>Full Screen</h3>
				<p>Full screen mode allows the sidebar to cover whole screen.</p>
<CodeHighlight>
&lt;Sidebar :visible.sync=&quot;visibleFull&quot; position=&quot;full&quot;&gt;
	Content
&lt;/Sidebar&gt;
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
						</tbody>
					</table>
				</div>

				<h3>Events</h3>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/sidebar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Sidebar&lt;/h1&gt;
				&lt;p&gt;Sidebar is a panel component displayed as an overlay at the edges of the screen.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;Sidebar :visible.sync=&quot;visibleLeft&quot; :baseZIndex=&quot;1000&quot;&gt;
				&lt;h1 style=&quot;fontWeight:normal&quot;&gt;Left Sidebar&lt;/h1&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleLeft = false&quot; label=&quot;Save&quot; class=&quot;p-button-success&quot; style=&quot;margin-right:.25em&quot; /&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleLeft = false&quot; label=&quot;Cancel&quot; class=&quot;p-button-secondary&quot;/&gt;
			&lt;/Sidebar&gt;

			&lt;Sidebar :visible.sync=&quot;visibleRight&quot; :baseZIndex=&quot;1000&quot; position=&quot;right&quot;&gt;
				&lt;h1 style=&quot;fontWeight:normal&quot;&gt;Right Sidebar&lt;/h1&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleRight = false&quot; label=&quot;Save&quot; class=&quot;p-button-success&quot; style=&quot;margin-right:.25em&quot; /&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleRight = false&quot; label=&quot;Cancel&quot; class=&quot;p-button-secondary&quot;/&gt;
			&lt;/Sidebar&gt;

			&lt;Sidebar :visible.sync=&quot;visibleTop&quot; :baseZIndex=&quot;1000&quot; position=&quot;top&quot;&gt;
				&lt;h1 style=&quot;fontWeight:normal&quot;&gt;Top Sidebar&lt;/h1&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleTop = false&quot; label=&quot;Save&quot; class=&quot;p-button-success&quot; style=&quot;margin-right:.25em&quot; /&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleTop = false&quot; label=&quot;Cancel&quot; class=&quot;p-button-secondary&quot;/&gt;
			&lt;/Sidebar&gt;

			&lt;Sidebar :visible.sync=&quot;visibleBottom&quot; :baseZIndex=&quot;1000&quot; position=&quot;bottom&quot;&gt;
				&lt;h1 style=&quot;fontWeight:normal&quot;&gt;Bottom Sidebar&lt;/h1&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleBottom = false&quot; label=&quot;Save&quot; class=&quot;p-button-success&quot; style=&quot;margin-right:.25em&quot; /&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleBottom = false&quot; label=&quot;Cancel&quot; class=&quot;p-button-secondary&quot;/&gt;
			&lt;/Sidebar&gt;

			&lt;Sidebar :visible.sync=&quot;visibleFull&quot; :baseZIndex=&quot;1000&quot; position=&quot;full&quot;&gt;
				&lt;h1 style=&quot;fontWeight:normal&quot;&gt;Full Screen&lt;/h1&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleFull = false&quot; label=&quot;Save&quot; class=&quot;p-button-success&quot; style=&quot;margin-right:.25em&quot; /&gt;
				&lt;Button type=&quot;button&quot; @click=&quot;visibleFull = false&quot; label=&quot;Cancel&quot; class=&quot;p-button-secondary&quot;/&gt;
			&lt;/Sidebar&gt;

			&lt;Button icon=&quot;pi pi-arrow-right&quot; @click=&quot;visibleLeft = true&quot; style=&quot;margin-right:.25em&quot; /&gt;
			&lt;Button icon=&quot;pi pi-arrow-left&quot; @click=&quot;visibleRight = true&quot; style=&quot;margin-right:.25em&quot; /&gt;
			&lt;Button icon=&quot;pi pi-arrow-down&quot; @click=&quot;visibleTop = true&quot; style=&quot;margin-right:.25em&quot; /&gt;
			&lt;Button icon=&quot;pi pi-arrow-up&quot; @click=&quot;visibleBottom = true&quot; style=&quot;margin-right:.25em&quot; /&gt;
			&lt;Button icon=&quot;pi pi-th-large&quot; @click=&quot;visibleFull = true&quot;  /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
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