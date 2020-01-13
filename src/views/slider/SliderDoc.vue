<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Slider from 'primevue/slider';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Two-way binding is defined using the standard v-model directive.</p>
<CodeHighlight>
&lt;Slider v-model="value" /&gt;
</CodeHighlight>

				<h3>Range</h3>
				<p>Range slider provides two handles to define two values. Enable <i>range</i> property and bind an array to implement a range slider.</p>

<CodeHighlight>
&lt;Slider v-model="value" :range="true" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			value: [20,80]
		}
	}
}
</CodeHighlight>

				<h3>Orientation</h3>
				<p>Default layout of slider is horizontal, use <i>orientation</i> property for the alternative vertical mode.</p>
<CodeHighlight>
&lt;Slider v-model="value" orientation="vertical" /&gt;
</CodeHighlight>

				<h3>Step</h3>
				<p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<CodeHighlight>
&lt;Slider v-model="value" :step="20" /&gt;
</CodeHighlight>

				<h3>Min-Max</h3>
				<p>Boundaries are specified with min and max attributes.</p>
<CodeHighlight>
&lt;Slider v-model="value" :step="20" :min="50" :max="200" /&gt;
</CodeHighlight>

				<h3>Properties</h3>
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
                                <td>0</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>min</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Mininum boundary value.</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>number</td>
                                <td>100</td>
                                <td>Maximum boundary value.</td>
                            </tr>
                            <tr>
                                <td>orientation</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Orientation of the slider, valid values are horizontal and vertical.</td>
                            </tr>
                            <tr>
                                <td>step</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Step factor to increment/decrement the value.</td>
                            </tr>
                            <tr>
                                <td>range</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When speficed, allows two boundary values to be picked.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>ariaLabelledBy</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                                <td>event.originalEvent: Original event <br />
                                    event.value: Selected option value </td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>input</td>
                                <td>value: New value</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>slideEnd</td>
                                <td>event.originalEvent: Slide event <br />
                                    event.value: New value.
                                </td>
                                <td>Callback to invoke when slide ends.</td>
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
                                <td>p-slider</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-slider-handle</td>
                                <td>Handle element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/slider" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic: {{value1}}&lt;/h3&gt;
&lt;Slider v-model="value1" /&gt;

&lt;h3&gt;Input: {{value2}}&lt;/h3&gt;
&lt;InputText v-model.number="value2" /&gt;
&lt;Slider v-model="value2" /&gt;

&lt;h3&gt;Step: {{value3}}&lt;/h3&gt;
&lt;Slider v-model="value3" :step="20" /&gt;

&lt;h3&gt;Range: {{value4}}&lt;/h3&gt;
&lt;Slider v-model="value4" :range="true" /&gt;

&lt;h3&gt;Vertical: {{value5}}&lt;/h3&gt;
&lt;Slider v-model="value5" orientation="vertical" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value1: null,
			value2: 50,
			value3: 20,
			value4: [20,80],
			value5: 50
		}
	}
}
</CodeHighlight>

<CodeHighlight lang="css">
.p-slider-horizontal, .p-inputtext {
	width: 14em;
}

.p-slider-vertical {
	height: 14em;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>