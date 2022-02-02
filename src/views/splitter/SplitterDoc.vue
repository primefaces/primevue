<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Splitter requires two SplitterPanel components to wrap.</p>
<CodeHighlight>
&lt;Splitter style="height: 300px"&gt;
	&lt;SplitterPanel&gt;
		Panel 1
	&lt;/SplitterPanel&gt;
	&lt;SplitterPanel&gt;
		Panel 2
	&lt;/SplitterPanel&gt;
&lt;/Splitter&gt;
</CodeHighlight>

				<h5>Multiple Panels</h5>
				<p>Any number of panels can be nested inside a Splitter.</p>
<CodeHighlight>
<template v-pre>
&lt;Splitter style="height: 300px"&gt;
	&lt;SplitterPanel v-for="item of items" :key="item.key"&gt;
		{{item.content}}
	&lt;/SplitterPanel&gt;
&lt;/Splitter&gt;
</template>
</CodeHighlight>

				<h5>Layout</h5>
				<p>Default orientation is configured with the <i>layout</i> property and default is the "horizontal" whereas other alternative is the "vertical".</p>
<CodeHighlight>
&lt;Splitter style="height: 300px" layout="vertical"&gt;
	&lt;SplitterPanel&gt;
		Panel 1
	&lt;/SplitterPanel&gt;
	&lt;SplitterPanel&gt;
		Panel 2
	&lt;/SplitterPanel&gt;
&lt;/Splitter&gt;
</CodeHighlight>

				<h5>Initial Sizes</h5>
				<p>When no size is defined, panels are split 50/50, use the <i>size</i> property to give relative widths e.g. 20/80.</p>
<CodeHighlight>
&lt;Splitter style="height: 300px"&gt;
	&lt;SplitterPanel :size="20" &gt;
		Panel 1
	&lt;/SplitterPanel&gt;
	&lt;SplitterPanel  :size="80"&gt;
		Panel 2
	&lt;/SplitterPanel&gt;
&lt;/Splitter&gt;
</CodeHighlight>

				<h5>Minimum Size</h5>
				<p>Minimum size defines the lowest boundary for the size of a panel.</p>
<CodeHighlight>
&lt;Splitter style="height: 300px"&gt;
	&lt;SplitterPanel :size="20" :minSize="10"&gt;
		Panel 1
	&lt;/SplitterPanel&gt;
	&lt;SplitterPanel  :size="80" :minSize="20"&gt;
		Panel 2
	&lt;/SplitterPanel&gt;
&lt;/Splitter&gt;
</CodeHighlight>

				<h5>Nested Panels</h5>
				<p>Splitters can be combined to create advanced layouts.</p>
<CodeHighlight>
&lt;Splitter style="height: 300px"&gt;
	&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10"&gt;
		Panel 1
	&lt;/SplitterPanel&gt;
	&lt;SplitterPanel :size="80"&gt;
		&lt;Splitter layout="vertical"&gt;
			&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="15"&gt;
				Panel 2
			&lt;/SplitterPanel&gt;
			&lt;SplitterPanel :size="85"&gt;
				&lt;Splitter&gt;
					&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="20"&gt;
						Panel 3
					&lt;/SplitterPanel&gt;
					&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="80"&gt;
						Panel 4
					&lt;/SplitterPanel&gt;
				&lt;/Splitter&gt;
			&lt;/SplitterPanel&gt;
		&lt;/Splitter&gt;
	&lt;/SplitterPanel&gt;
&lt;/Splitter&gt;
</CodeHighlight>

				<h5>Stateful</h5>
				<p>Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes
					can be restored. Define a <i>stateKey</i> to enable this feature. Default location of the state is
					session storage and other option is the local storage which can be configured using the <i>stateStorage</i> property.</p>
<CodeHighlight>
&lt;Splitter stateKey="mykey" stateStorage="local"&gt;
	&lt;SplitterPanel&gt;
		Panel 1
	&lt;/SplitterPanel&gt;
	&lt;SplitterPanel&gt;
		Panel 2
	&lt;/SplitterPanel&gt;
&lt;/Splitter&gt;
</CodeHighlight>

				<h5>Properties of SplitterPanel</h5>
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
                                <td>size</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Size of the element relative to 100%.</td>
                            </tr>
                            <tr>
                                <td>minSize</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Minimum size of the element relative to 100%.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Properties of Splitter</h5>
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
                                <td>layout</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Orientation of the panels, valid values are "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>gutterSize</td>
                                <td>number</td>
                                <td>4</td>
                                <td>Size of the divider in pixels.</td>
                            </tr>
							<tr>
                                <td>stateKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Storage identifier of a stateful Splitter.</td>
                            </tr>
							<tr>
                                <td>stateStorage</td>
                                <td>string</td>
                                <td>session</td>
                                <td>Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Events of Splitter</h5>
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
                                <td>resizeend</td>
                                <td>event.originalEvent: Original event <br />
                                    event.sizes: Sizes of the panels as an array </td>
                                <td>Callback to invoke when resize ends.</td>
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
                                <td>p-splitter</td>
                                <td>Container element.</td>
                            </tr>
							<tr>
                                <td>p-splitter-resizing</td>
                                <td>Container element during resize.</td>
                            </tr>
							<tr>
                                <td>p-splitter-horizontal</td>
                                <td>Container element with horizontal layout.</td>
                            </tr>
							<tr>
                                <td>p-splitter-vertical</td>
                                <td>Container element with vertical layout.</td>
                            </tr>
							<tr>
                                <td>p-splitter-panel</td>
                                <td>Splitter panel element.</td>
                            </tr>
							<tr>
                                <td>p-splitter-gutter</td>
                                <td>Gutter element to use when resizing the panels.</td>
                            </tr>
							<tr>
                                <td>p-splitter-gutter-handle</td>
                                <td>Handle element of the gutter.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/splitter" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
	&lt;h5&gt;Horizontal&lt;/h5&gt;
	&lt;Splitter style="height: 300px"&gt;
		&lt;SplitterPanel class="flex align-items-center justify-content-center"&gt;
			Panel 1
		&lt;/SplitterPanel&gt;
		&lt;SplitterPanel class="flex align-items-center justify-content-center"&gt;
			Panel 2
		&lt;/SplitterPanel&gt;
	&lt;/Splitter&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
	&lt;h5&gt;Vertical&lt;/h5&gt;
	&lt;Splitter style="height: 300px" layout="vertical"&gt;
		&lt;SplitterPanel class="flex align-items-center justify-content-center"&gt;
			Panel 1
		&lt;/SplitterPanel&gt;
		&lt;SplitterPanel class="flex align-items-center justify-content-center"&gt;
			Panel 2
		&lt;/SplitterPanel&gt;
	&lt;/Splitter&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
	&lt;h5&gt;Nested&lt;/h5&gt;
	&lt;Splitter style="height: 300px"&gt;
		&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10"&gt;
			Panel 1
		&lt;/SplitterPanel&gt;
		&lt;SplitterPanel :size="80"&gt;
			&lt;Splitter layout="vertical"&gt;
				&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="15"&gt;
					Panel 2
				&lt;/SplitterPanel&gt;
				&lt;SplitterPanel :size="85"&gt;
					&lt;Splitter&gt;
						&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="20"&gt;
							Panel 3
						&lt;/SplitterPanel&gt;
						&lt;SplitterPanel class="flex align-items-center justify-content-center" :size="80"&gt;
							Panel 4
						&lt;/SplitterPanel&gt;
					&lt;/Splitter&gt;
				&lt;/SplitterPanel&gt;
			&lt;/Splitter&gt;
		&lt;/SplitterPanel&gt;
	&lt;/Splitter&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

			</TabPanel>
		</TabView>
	</div>
</template>