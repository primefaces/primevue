<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Chips from 'primevue/chips';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>An array as the value can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;Chips v-model="value" /&gt;
</CodeHighlight>

				<h5>Custom Content</h5>
				<p>A chip is customized using the <i>chip</i> template where the chip value is passed to the slotProps with the value property.</p>
<CodeHighlight>
<template v-pre>
&lt;Chips v-model="value"&gt;
	&lt;template #chip="slotProps"&gt;
		&lt;div&gt;
			&lt;span&gt;{{slotProps.value}} - (active) &lt;/span&gt;
			&lt;i class="pi pi-user-plus" style="font-size: 14px"&gt;&lt;/i&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Chips&gt;
</template>
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
                                <td>addOnBlur</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to add an item when the input loses focus.</td>
                            </tr>
                            <tr>
                                <td>allowDuplicate</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to allow duplicate values or not.</td>
                            </tr>
                            <tr>
                                <td>ariaLabelledBy</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                            </tr>
                             <tr>
                                <td>max</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Maximum number of entries allowed.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>separator</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Specifies a short hint that describes the expected value of the input field.</td>
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
                                <td>input</td>
                                <td>value: New value</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>focus</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when the input is focused.</td>
                            </tr>
                            <tr>
                                <td>blur</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when the input loses focus.</td>
                            </tr>
                            <tr>
                                <td>add</td>
                                <td>originalEvent: Browser event <br/>
                                    value: Added item value</td>
                                <td>Callback to invoke when a chip is added.</td>
                            </tr>
                            <tr>
                                <td>remove</td>
                                <td>originalEvent: Browser event <br/>
                                    value: Removed item value</td>
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
                                <td>p-chips</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-chips-token</td>
                                <td>Chip element container.</td>
                            </tr>
                            <tr>
                                <td>p-chips-token-icon</td>
                                <td>Icon of a chip.</td>
                            </tr>
                            <tr>
                                <td>p-chips-token-label</td>
                                <td>label of a chip.</td>
                            </tr>
                            <tr>
                                <td>p-chips-input-token</td>
                                <td>Container of input element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/chips" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;Chips v-model="value1" /&gt;

&lt;h3&gt;Comma Separator&lt;/h3&gt;
&lt;Chips v-model="value2" separator="," /&gt;

&lt;h3&gt;Template&lt;/h3&gt;
&lt;Chips v-model="value3"&gt;
    &lt;template #chip="slotProps"&gt;
        &lt;div&gt;
            &lt;span&gt;{{slotProps.value}} - (active) &lt;/span&gt;
            &lt;i class="pi pi-user-plus" style="font-size: 14px"&gt;&lt;/i&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Chips&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value1: null,
			value2: null,
            value3: null
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>