<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Inplace from 'primevue/inplace';
</CodeHighlight>

<h3>Getting Started</h3>
<p>Inplace requires two child components having inplaceDisplay and inplaceContent attributes to define the content of each state.</p>
				
<CodeHighlight>
&lt;div class="content-section implementation"&gt;
    &lt;h3 class="first"&gt;Basic"&lt;/h3&gt;
    &lt;Inplace closable="true"&gt;
        &lt;template slot="inplaceDisplay"&gt;
        &lt;span&gt;Click to Edit&lt;/span&gt;
        &lt;/template&gt;
        &lt;template slot="inplaceContent"&gt;
            &lt;span&gt;
                &lt;InputText type="text"/&gt;
            &lt;/span&gt;
        &lt;/template&gt;
    &lt;/Inplace&gt;
&lt;/div&gt;
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
                                    <td>active</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the content is displayed or not.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the element should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>closable</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Displays a button to switch back to display mode.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>styleClass</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the component.</td>
                                </tr>
                                </tbody>
                            </table>
				</div>

				<p>Inplace passes any valid attribute to the underlying input element.</p>

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
							<td>p-inplace</td>
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
&lt;template&gt;
	&lt;div&gt;
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;InputText&lt;/h1&gt;
				&lt;p&gt;InputText renders and input field where the user can enter data.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation"&gt;
			&lt;h3 class="first"&gt;Basic&lt;/h3&gt;
			&lt;InputText type="text" v-model="value1" /&gt;
			&lt;span :style="{marginLeft: '.5em'}"&gt;{{value1}}&lt;/span&gt;

			&lt;h3&gt;Floating Label&lt;/h3&gt;
			&lt;span class="p-float-label"&gt;
				&lt;InputText id="username" type="text" v-model="value2" /&gt;
				&lt;label for="username"&gt;Username&lt;/label&gt;
			&lt;/span&gt;

			&lt;h3&gt;Disabled&lt;/h3&gt;
			&lt;InputText type="text" v-model="value3" disabled /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value1: '',
			value2: '',
			value3: 'PrimeVue'
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>