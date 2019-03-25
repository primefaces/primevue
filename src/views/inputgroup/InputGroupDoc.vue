<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/inputgroup" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;InputGroup&lt;/h1&gt;
				&lt;p&gt;Text, icon, buttons and other content can be grouped next to an input.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Addons&lt;/h3&gt;
			&lt;div class=&quot;p-grid p-fluid&quot;&gt;
				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
					&lt;span class=&quot;p-inputgroup-addon&quot;&gt;
						&lt;i class=&quot;pi pi-user&quot;&gt;&lt;/i&gt;
					&lt;/span&gt;
						&lt;InputText placeholder=&quot;Username&quot; /&gt;
					&lt;/div&gt;
				&lt;/div&gt;

				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;$&lt;/span&gt;
						&lt;InputText placeholder=&quot;Price&quot; /&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;.00&lt;/span&gt;
					&lt;/div&gt;
				&lt;/div&gt;

				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;W&lt;/span&gt;
						&lt;InputText placeholder=&quot;Website&quot; /&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Multiple Addons&lt;/h3&gt;
			&lt;div class=&quot;p-grid&quot;&gt;
				&lt;div class=&quot;p-col-12&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
					&lt;span class=&quot;p-inputgroup-addon&quot;&gt;
						&lt;i class=&quot;pi pi-clock&quot;&gt;&lt;/i&gt;
					&lt;/span&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;
						&lt;i class=&quot;pi pi-star&quot;&gt;&lt;/i&gt;
					&lt;/span&gt;
						&lt;InputText placeholder=&quot;Price&quot; /&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;$&lt;/span&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;.00&lt;/span&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Button Addons&lt;/h3&gt;
			&lt;div class=&quot;p-grid p-fluid&quot;&gt;
				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
						&lt;Button label=&quot;Search&quot;/&gt;
						&lt;InputText placeholder=&quot;Keyword&quot;/&gt;
					&lt;/div&gt;
				&lt;/div&gt;

				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
						&lt;InputText placeholder=&quot;Keyword&quot;/&gt;
						&lt;Button icon=&quot;pi pi-search&quot; class=&quot;p-button-warning&quot;/&gt;
					&lt;/div&gt;
				&lt;/div&gt;

				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
						&lt;Button icon=&quot;pi pi-check&quot; class=&quot;p-button-success&quot;/&gt;
						&lt;InputText placeholder=&quot;Vote&quot;/&gt;
						&lt;Button icon=&quot;pi pi-times&quot; class=&quot;p-button-danger&quot;/&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Checkbox and RadioButton&lt;/h3&gt;
			&lt;div class=&quot;p-grid p-fluid&quot;&gt;
				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
					&lt;span class=&quot;p-inputgroup-addon&quot;&gt;
						&lt;Checkbox v-model=&quot;checked1&quot; /&gt;
					&lt;/span&gt;
						&lt;InputText placeholder=&quot;Username&quot;/&gt;
					&lt;/div&gt;
				&lt;/div&gt;

				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
						&lt;InputText placeholder=&quot;Price&quot;/&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;
						&lt;RadioButton name=&quot;rb1&quot; value=&quot;rb1&quot; v-model=&quot;radioValue1&quot; /&gt;
					&lt;/span&gt;
					&lt;/div&gt;
				&lt;/div&gt;

				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;div class=&quot;p-inputgroup&quot;&gt;
					&lt;span class=&quot;p-inputgroup-addon&quot;&gt;
						&lt;Checkbox v-model=&quot;checked2&quot; /&gt;
					&lt;/span&gt;
						&lt;InputText placeholder=&quot;Website&quot;/&gt;
						&lt;span class=&quot;p-inputgroup-addon&quot;&gt;
						&lt;RadioButton name=&quot;rb2&quot; value=&quot;rb2&quot; v-model=&quot;radioValue2&quot; /&gt;
					&lt;/span&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			checked1: false,
			checked2: false,
			radioValue1: '',
			radioValue2: ''
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>