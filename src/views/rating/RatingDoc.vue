<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Rating from 'primevue/rating';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Two-way value binding is defined using v-model.</p>
<CodeHighlight>
&lt;Rating v-model="val" /&gt;
</CodeHighlight>

				<h5>Number of Stars</h5>
				<p>Number of stars to display is defined with <i>stars</i> property, default is 5.</p>
<CodeHighlight>
&lt;Rating v-model="val" :stars="7"/&gt;
</CodeHighlight>

				<h5>Cancel</h5>
				<p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>
<CodeHighlight>
&lt;Rating v-model="val" :cancel="false" /&gt;
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
                                <td>value</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Value of the rating.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element should be disabled.</td>
                            </tr>
                            <tr>
                                <td>readonly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that component is read-only.</td>
                            </tr>
                            <tr>
                                <td>stars</td>
                                <td>number</td>
                                <td>5</td>
                                <td>Number of stars.</td>
                            </tr>
                            <tr>
                                <td>cancel</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When specified a cancel icon is displayed to allow clearing the value.</td>
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
                                <td>change</td>
                                <td>event.originalEvent: Original event <br />
                                event.value: Selected option value </td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>input</td>
                                <td>value: New value</td>
                                <td>Callback to invoke on value change.</td>
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
                                <td>p-rating</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-rating-star</td>
                                <td>Star element</td>
                            </tr>
                            <tr>
                                <td>p-rating-star-on</td>
                                <td>Selected star element.</td>
                            </tr>
                            <tr>
                                <td>p-rating-cancel</td>
                                <td>Cancel icon.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/rating" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic {{val1}}&lt;/h3&gt;
&lt;Rating v-model="val1" /&gt;

&lt;h3&gt;Without Cancel&lt;/h3&gt;
&lt;Rating v-model="val2" :cancel="false" /&gt;

&lt;h3&gt;ReadOnly&lt;/h3&gt;
&lt;Rating :value="5" :readonly="true" :stars="10" :cancel="false" /&gt;

&lt;h3&gt;Disabled&lt;/h3&gt;
&lt;Rating :value="8" :disabled="true" :stars="10" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			val1: null,
			val2: 3,
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>