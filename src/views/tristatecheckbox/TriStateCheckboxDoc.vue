<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import TriStateCheckbox from 'primevue/tristatecheckbox';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;TriStateCheckbox v-model=&quot;value&quot; /&gt;
</CodeHighlight>

				<h3>Properties</h3>
                <p>Any valid attribute such as name and autofocus are passed to the underlying input element. Following is the additional property to configure the component.</p>
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
                                <td>value</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Value of the component.</td>
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
                                <td>change</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>input</td>
                                <td>event: Value of checkbox</td>
                                <td>Callback to invoke on click.</td>
                            </tr>
                            <tr>
                                <td>click</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke click.</td>
                            </tr>
                            <tr>
                                <td>focus</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on focus.</td>
                            </tr>
                            <tr>
                                <td>blur</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on blur.</td>
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
                                <td>p-chkbox</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-tristatechkbox</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-chkbox-box</td>
                                <td>Container of icon.</td>
                            </tr>
                            <tr>
                                <td>p-chkbox-icon</td>
                                <td>Icon element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/tristatecheckbox" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;TriStateCheckbox&lt;/h1&gt;
				&lt;p&gt;TriStateCheckbox is used to select either &quot;true&quot;, &quot;false&quot; or &quot;null&quot; as the value.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;TriStateCheckbox v-model=&quot;value&quot; /&gt;
			&lt;p&gt;Value: &lt;span style=&quot;font-weight: bold&quot;&gt;{{value == null ? 'null' : value}}&lt;/span&gt;&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value: null
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>