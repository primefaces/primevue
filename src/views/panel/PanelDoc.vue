<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Panel from 'primevue/panel';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Panel is a container component that accepts content as its children.</p>
<CodeHighlight>
&lt;Panel header="Godfather I"&gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Panel&gt;
</CodeHighlight>

                <h3>Custom Header</h3>
                <p>Header of the panel is either defined with the <i>header</i> property or the header template.</p>
<CodeHighlight>
&lt;Panel&gt;
    &lt;template #header&gt;
        Header Content
    &lt;/template&gt;
	Content
&lt;/Panel&gt;
</CodeHighlight>

				<h3>Toggleable</h3>
				<p>Content of the panel can be expanded and collapsed using <i>toggleable</i> option.</p>
<CodeHighlight>
&lt;Panel header="Godfather I" :toggleable="true"&gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Panel&gt;
</CodeHighlight>

                <p>To control the initial state of the toggleable panel, use the <i>collapsed</i> property.</p>
<CodeHighlight>
&lt;Panel header="Header Text" :toggleable="true" :collapsed="true"&gt;
	Content
&lt;/Panel&gt;
</CodeHighlight>

                <p>Use the sync operator to enable two-way binding.</p>

<CodeHighlight>
&lt;button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically&lt;/button&gt;
&lt;Panel header="Header Text" :toggleable="true" :collapsed.sync="isCollapsed"&gt;
	Content
&lt;/Panel&gt;
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
                                <td>header</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Header text of the panel.</td>
                            </tr>
                            <tr>
                                <td>toggleable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Defines if content of panel can be expanded and collapsed.</td>
                            </tr>
                            <tr>
                                <td>collapsed</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Defines the initial state of panel content.</td>
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
                                <td>Callback to invoke when a tab toggle.</td>
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
                                <td>p-panel</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-panel-titlebar</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-panel-title</td>
                                <td>Title text of panel.</td>
                            </tr>
                            <tr>
                                <td>p-panel-titlebar-toggler</td>
                                <td>Toggle icon.</td>
                            </tr>
                            <tr>
                                <td>p-panel-content</td>
                                <td>Content of panel.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/panel" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Regular&lt;/h3&gt;
&lt;Panel header="Godfather I"&gt;
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Panel&gt;

&lt;h3&gt;Toggleable&lt;/h3&gt;
&lt;Panel header="Godfather I" :toggleable="true"&gt;
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Panel&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>