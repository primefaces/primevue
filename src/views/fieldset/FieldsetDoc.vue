<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Fieldset from 'primevue/fieldset';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Fieldset is a container component that accepts content as its children.</p>
<CodeHighlight>
&lt;Fieldset legend="Godfather I"&gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Fieldset&gt;
</CodeHighlight>

                <h3>Custom Header</h3>
                <p>Header of the panel is either defined with the <i>legend</i> property or the legend template.</p>
<CodeHighlight>
&lt;Fieldset&gt;
    &lt;template #legend&gt;
        Header Content
    &lt;/template&gt;
	Content
&lt;/Fieldset&gt;
</CodeHighlight>


				<h3>Toggleable</h3>
				<p>Content of the fieldset can be expanded and collapsed using <i>toggleable</i> option..</p>
<CodeHighlight>
&lt;Fieldset legend="Godfather I" :toggleable="true"&gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Fieldset&gt;
</CodeHighlight>

<p>To control the initial state of the toggleable panel, use the <i>collapsed</i> property.</p>
<CodeHighlight>
&lt;Fieldset legend="Header Text" :toggleable="true" :collapsed="true"&gt;
	Content
&lt;/Fieldset&gt;
</CodeHighlight>

                <p>Use the sync operator to enable two-way binding.</p>
<CodeHighlight>
&lt;button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically&lt;/button&gt;
&lt;Fieldset legend="Header Text" :toggleable="true" :collapsed.sync="isCollapsed"&gt;
	Content
&lt;/Fieldset&gt;
</CodeHighlight>

				<h3>Properties</h3>
                <p>Any attribute such as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>legend</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Header text of the fieldset.</td>
                            </tr>
                            <tr>
                                <td>toggleable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>When specified, content can toggled by clicking the legend.</td>
                            </tr>
                            <tr>
                                <td>collapsed</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Defines the default visibility state of the content.</td>
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
                                <td>toggle</td>
                                <td>event.originalEvent: browser event <br />
                                    event.value: collapsed state as a boolean
                                </td>
                                <td>Callback to invoke when a tab gets expanded or collapsed.</td>
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
                                <td>p-fieldset</td>
                                <td>Fieldset element.</td>
                            </tr>
                            <tr>
                                <td>p-fieldset-toggleable</td>
                                <td>Toggleable fieldset element.</td>
                            </tr>
                            <tr>
                                <td>p-fieldset-legend</td>
                                <td>Legend element.</td>
                            </tr>
                            <tr>
                                <td>p-fieldset-content</td>
                                <td>Content element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/fieldset" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;Fieldset&lt;/h1&gt;
				&lt;p&gt;Fieldset is a grouping component with the optional content toggle feature.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation"&gt;
			&lt;h3 class="first"&gt;Regular&lt;/h3&gt;
			&lt;Fieldset legend="Godfather I"&gt;
				The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
				His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
				Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
				kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
			&lt;/Fieldset&gt;

			&lt;h3&gt;Toggleable&lt;/h3&gt;
			&lt;Fieldset legend="Godfather I" :toggleable="true"&gt;
				The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
				His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
				Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
				kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
			&lt;/Fieldset&gt;
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