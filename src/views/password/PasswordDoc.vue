<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Password from 'primevue/password';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;Password v-model=&quot;value&quot; /&gt;
</CodeHighlight>

				<h3>Properties</h3>
				<p>Password accepts all valid properties of an input element in addition the the custom properties below.</p>

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
							<td>promptLabel</td>
							<td>string</td>
							<td>Enter a password</td>
							<td>Text to prompt password entry.</td>
						</tr>
						<tr>
							<td>weakLabel</td>
							<td>string</td>
							<td>Weak</td>
							<td>Text for a weak password.</td>
						</tr>
						<tr>
							<td>mediumLabel</td>
							<td>string</td>
							<td>Medium</td>
							<td>Text for a medium password.</td>
						</tr>
						<tr>
							<td>strongLabel</td>
							<td>string</td>
							<td>Strong</td>
							<td>Text for a strong password.</td>
						</tr>
						<tr>
							<td>feedback</td>
							<td>boolean</td>
							<td>true</td>
							<td>Whether to show the strength indicator or not.</td>
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
								<td>p-password-panel</td>
								<td>Container of password panel</td>
							</tr>
							<tr>
								<td>p-password-meter</td>
								<td>Meter element of password strength</td>
							</tr>
							<tr>
								<td>p-password-info</td>
								<td>Text to display strength</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/password" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Password&lt;/h1&gt;
				&lt;p&gt;Password displays strength indicator for password fields.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;Password v-model=&quot;value&quot; /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value: ''
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>