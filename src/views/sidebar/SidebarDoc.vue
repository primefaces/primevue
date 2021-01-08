<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import Sidebar from 'primevue/sidebar';

</code></pre>

				<h5>Getting Started</h5>
				<p>Sidebar is used as a container and visibility is controlled with the <i>visible</i> property that requires a v-model two-way binding.</p>
<pre v-code>
<code>
&lt;Sidebar v-model:visible="visibleLeft"&gt;
	Content
&lt;/Sidebar&gt;

&lt;Button icon="pi pi-arrow-right" @click="visibleLeft = true" /&gt;

</code></pre>

				<h5>Position</h5>
				<p>Sidebar can either be located on the left (default), right, top or bottom of the screen depending on the <i>position</i> property.</p>
<pre v-code>
<code>
&lt;Sidebar v-model:visible="visibleRight" position="right"&gt;
	Content
&lt;/Sidebar&gt;

</code></pre>

				<h5>Size</h5>
				<p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>
<pre v-code>
<code>
&lt;Sidebar v-model:visible="visibleLeft" class="p-sidebar-sm"&gt;&lt;/Sidebar&gt;
&lt;Sidebar v-model:visible="visibleLeft" class="p-sidebar-md"&gt;&lt;/Sidebar&gt;
&lt;Sidebar v-model:visible="visibleLeft" class="p-sidebar-lg"&gt;&lt;/Sidebar&gt;

</code></pre>

				<h5>Full Screen</h5>
				<p>Full screen mode allows the sidebar to cover whole screen.</p>
<pre v-code>
<code>
&lt;Sidebar v-model:visible="visibleFull" position="full"&gt;
	Content
&lt;/Sidebar&gt;

</code></pre>


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
				<div class="p-d-flex p-jc-between">
					<a href="https://github.com/primefaces/primevue/tree/master/src/views/sidebar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
						<span>View on GitHub</span>
					</a>
					<LiveEditor name="SidebarDemo" :sources="sources" :components="['Button', 'Calendar']"/>
                </div>
<pre v-code>
<code><template v-pre>
&lt;Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="p-mr-2" /&gt;
&lt;Button icon="pi pi-arrow-left" @click="visibleRight = true" class="p-mr-2"  /&gt;
&lt;Button icon="pi pi-arrow-down" @click="visibleTop = true" class="p-mr-2"  /&gt;
&lt;Button icon="pi pi-arrow-up" @click="visibleBottom = true" class="p-mr-2"  /&gt;
&lt;Button icon="pi pi-th-large" @click="visibleFull = true"  /&gt;

&lt;Sidebar v-model:visible="visibleLeft" :baseZIndex="1000"&gt;
    &lt;h3&gt;Left Sidebar&lt;/h3&gt;
&lt;/Sidebar&gt;

&lt;Sidebar v-model:visible="visibleRight" :baseZIndex="1000" position="right"&gt;
    &lt;h3&gt;Right Sidebar&lt;/h3&gt;
&lt;/Sidebar&gt;

&lt;Sidebar v-model:visible="visibleTop" :baseZIndex="1000" position="top"&gt;
    &lt;h3&gt;Top Sidebar&lt;/h3&gt;
&lt;/Sidebar&gt;

&lt;Sidebar v-model:visible="visibleBottom" :baseZIndex="1000" position="bottom"&gt;
    &lt;h3&gt;Bottom Sidebar&lt;/h3&gt;
&lt;/Sidebar&gt;

&lt;Sidebar v-model:visible="visibleFull" :baseZIndex="1000" position="full"&gt;
    &lt;h3&gt;Full Screen&lt;/h3&gt;
&lt;/Sidebar&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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
        <div class="content-section implementation">
            <div class="card">
                <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="p-mr-2" />
                <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="p-mr-2"  />
                <Button icon="pi pi-arrow-down" @click="visibleTop = true" class="p-mr-2"  />
                <Button icon="pi pi-arrow-up" @click="visibleBottom = true" class="p-mr-2"  />
                <Button icon="pi pi-th-large" @click="visibleFull = true"  />

                <Sidebar v-model:visible="visibleLeft" :baseZIndex="1000">
                    <h3>Left Sidebar</h3>
                    <Calendar id="basic" />
                </Sidebar>

                <Sidebar v-model:visible="visibleRight" :baseZIndex="1000" position="right">
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleTop" :baseZIndex="1000" position="top">
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleBottom" :baseZIndex="1000" position="bottom">
                    <h3>Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleFull" :baseZIndex="1000" position="full">
                    <h3>Full Screen</h3>
                </Sidebar>
            </div>
        </div>
    </div>
</template>

<script>
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
}`
				}
			}
		}
	},
	components: {
		LiveEditor
	}
}
</script>