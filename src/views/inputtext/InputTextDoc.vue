<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import InputText from 'primevue/inputtext';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;InputText type="text" v-model="value" /&gt;
</CodeHighlight>

				<h3>Float Label</h3>
				<p>A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.</p>
<CodeHighlight>
&lt;span class="p-float-label"&gt;
	&lt;InputText id="username" type="text" v-model="value" /&gt;
	&lt;label for="username"&gt;Username&lt;/label&gt;
&lt;/span&gt;
</CodeHighlight>

                <h3>Icons</h3>
                <p>An icon can be integrated within an input field by wrapping the input and the icon with an element having either <i>p-input-icon-right</i>
                or <i>p-input-icon-left</i> class depending on the icon location.</p>
<CodeHighlight>
&lt;span class="p-input-icon-left"&gt;
    &lt;i class="pi pi-search" /&gt;
    &lt;InputText type="text" v-model="value1" placeholder="Search" /&gt;
&lt;/span&gt;

&lt;span class="p-input-icon-right"&gt;
    &lt;i class="pi pi-spin pi-spinner" /&gt;
    &lt;InputText type="text" v-model="value2" /&gt;
&lt;/span&gt;
</CodeHighlight>

				<h3>Properties</h3>
				<p>InputText passes any valid attribute to the underlying input element.</p>

                <h3>Events</h3>
                <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

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
							<td>p-inputtext</td>
							<td>Input element</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/inputtext" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3 class="first"&gt;Basic&lt;/h3&gt;
&lt;InputText type="text" v-model="value1" /&gt;
&lt;span :style="{marginLeft: '.5em'}"&gt;{{value1}}&lt;/span&gt;

&lt;h3&gt;Floating Label&lt;/h3&gt;
&lt;span class="p-float-label"&gt;
    &lt;InputText id="username" type="text" v-model="value2" /&gt;
    &lt;label for="username"&gt;Username&lt;/label&gt;
&lt;/span&gt;

&lt;h3&gt;Left Icon&lt;/h3&gt;
&lt;span class="p-input-icon-left"&gt;
    &lt;i class="pi pi-search" /&gt;
    &lt;InputText type="text" v-model="value3" placeholder="Search" /&gt;
&lt;/span&gt;

&lt;h3&gt;Right Icon&lt;/h3&gt;
&lt;span class="p-input-icon-right"&gt;
    &lt;i class="pi pi-spin pi-spinner" /&gt;
    &lt;InputText type="text" v-model="value4" /&gt;
&lt;/span&gt;

&lt;h3&gt;Disabled&lt;/h3&gt;
&lt;InputText type="text" v-model="value5" disabled /&gt;

    &lt;h3&gt;Invalid&lt;/h3&gt;
&lt;InputText type="text" class="p-invalid" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: 'PrimeVue'
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>