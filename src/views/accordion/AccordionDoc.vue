<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import {Accordion, AccordionTab} from 'primevue/accordion';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Accordion element consists of one or more AccordionTab elements. Title of the tab is defined using header attribute.</p>
<CodeHighlight>
&lt;Accordion&gt;
	&lt;AccordionTab header="Header I"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header II"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header III"&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
</CodeHighlight>

				<h3>Active</h3>
				<p>Visibility of the content is specified with the active property that supports one or two-way binding.</p>
<CodeHighlight>
&lt;Accordion&gt;
	&lt;AccordionTab header="Header I" :active="true"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header II"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header III"&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
</CodeHighlight>

				<h3>Multiple</h3>
				<p>By default only one tab at a time can be active, enabling multiple property changes this behavior to allow multiple
					tabs be active at the same time.</p>
<CodeHighlight>
&lt;Accordion :multiple="true" &gt;
	&lt;AccordionTab header="Header I"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header II"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header III"&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
</CodeHighlight>

				<h3>Disabled</h3>
				<p>A tab can be disabled by setting the disabled property to true.</p>
<CodeHighlight>
&lt;Accordion&gt;
	&lt;AccordionTab header="Header I"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header II"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header III" :disabled="true"&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
</CodeHighlight>

				<h3>Custom Content at Headers</h3>
				<p>Custom content for the title section of a panel is defined using the header template.</p>
<CodeHighlight>
&lt;Accordion&gt;
	&lt;AccordionTab&gt;
		&lt;template slot="header"&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header I&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab&gt;
		&lt;template slot="header"&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header II&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab&gt;
		&lt;template slot="header"&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header III&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
</CodeHighlight>

				<h3>Programmatic Control</h3>
				<p>Tabs can be controlled programmatically using active property.</p>
<CodeHighlight>
&lt;div&gt;
	&lt;Button :icon="active1 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 1st" @click="active1 = !active1" class="p-button-secondary" /&gt;
	&lt;Button :icon="active2 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 2nd" @click="active2 = !active2" class="p-button-secondary" style="margin-left: .5em" /&gt;
	&lt;Button :icon="active3 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 3rd" @click="active3 = !active3" class="p-button-secondary" style="margin-left: .5em" /&gt;
&lt;/div&gt;

&lt;Accordion :multiple="true"&gt;
	&lt;AccordionTab header="Header I" :active="active1"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header II" :active="active2"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header III" :active="active3"&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			active1: true,
			active2: false,
			active3: false
		}
	}
}
</CodeHighlight>

				<h3>Properties of AccordionTab</h3>
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
							<td>Orientation of tab headers.</td>
						</tr>
						<tr>
							<td>active</td>
							<td>boolean</td>
							<td>null</td>
							<td>Visibility of the content.</td>
						</tr>
						<tr>
							<td>disabled</td>
							<td>boolean</td>
							<td>false</td>
							<td>Whether the tab is disabled.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Properties of Accordion</h3>
                <p>Any attribute such as style and class are passed to the main container element. Following is the additional property to configure the component.</p>
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
                                <td>multiple</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, multiple tabs can be activated at the same time.</td>
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
                                <td>tab-open</td>
                                <td>event.originalEvent: Browser event  <br/>
                                    event.tab: Opened tab
                                </td>
                                <td>Callback to invoke when a tab gets expanded.</td>
                            </tr>
                            <tr>
                                <td>tab-close</td>
                                <td>event.originalEvent: Browser event  <br/>
                                    event.tab: closed tab
                                </td>
                                <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
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
							<td>p-accordion</td>
							<td>Container element.</td>
						</tr>
						<tr>
							<td>p-accordion-header</td>
							<td>Header of a tab.</td>
						</tr>
						<tr>
							<td>p-accordion-content</td>
							<td>Container of a tab.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/accordion" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;AccordionPanel&lt;/h1&gt;
				&lt;p&gt;AccordionPanel groups a collection of contents in tabs.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation"&gt;
			&lt;h3 class="first"&gt;Default&lt;/h3&gt;
			&lt;Accordion&gt;
				&lt;AccordionTab header="Godfather I"&gt;
					The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
					but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
					just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab header="Godfather II"&gt;
					Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
					deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
					his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab header="Godfather III"&gt;
					The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
					interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
					A decade earlier, he gave custody of his two children to Kay, who has since remarried.
				&lt;/AccordionTab&gt;
			&lt;/Accordion&gt;

			&lt;h3&gt;Multiple&lt;/h3&gt;
			&lt;Accordion :multiple="true"&gt;
				&lt;AccordionTab header="Godfather I"&gt;
					The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
					but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
					just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab header="Godfather II"&gt;
					Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
					deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
					his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab header="Godfather III"&gt;
					The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
					interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
					A decade earlier, he gave custody of his two children to Kay, who has since remarried.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab header="Godfather IV" :disabled="true"&gt;
				&lt;/AccordionTab&gt;
			&lt;/Accordion&gt;

			&lt;h3&gt;Programmatic&lt;/h3&gt;
			&lt;div style="padding: .5em 0"&gt;
				&lt;Button :icon="active1 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 1st" @click="active1 = !active1" class="p-button-secondary" /&gt;
				&lt;Button :icon="active2 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 2nd" @click="active2 = !active2" class="p-button-secondary" style="margin-left: .5em" /&gt;
				&lt;Button :icon="active3 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 3rd" @click="active3 = !active3" class="p-button-secondary" style="margin-left: .5em" /&gt;
			&lt;/div&gt;

			&lt;Accordion :multiple="true"&gt;
				&lt;AccordionTab header="Godfather I" :active="active1"&gt;
					The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
					but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
					just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab header="Godfather II" :active="active2"&gt;
					Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
					deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
					his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab header="Godfather III" :active="active3"&gt;
					The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
					interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
					A decade earlier, he gave custody of his two children to Kay, who has since remarried.
				&lt;/AccordionTab&gt;
			&lt;/Accordion&gt;

			&lt;h3&gt;Custom Headers&lt;/h3&gt;
			&lt;Accordion class="accordion-custom"&gt;
				&lt;AccordionTab&gt;
					&lt;template slot="header"&gt;
						&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
						&lt;span&gt;Godfather I&lt;/span&gt;
					&lt;/template&gt;
					The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
					but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
					just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab&gt;
					&lt;template slot="header"&gt;
						&lt;i class="pi pi-user"&gt;&lt;/i&gt;
						&lt;span&gt;Godfather II&lt;/span&gt;
					&lt;/template&gt;
					Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
					deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
					his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
				&lt;/AccordionTab&gt;
				&lt;AccordionTab&gt;
					&lt;template slot="header"&gt;
						&lt;i class="pi pi-search"&gt;&lt;/i&gt;
						&lt;span&gt;Godfather III&lt;/span&gt;
						&lt;i class="pi pi-cog"&gt;&lt;/i&gt;
					&lt;/template&gt;
					The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
					interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
					A decade earlier, he gave custody of his two children to Kay, who has since remarried.
				&lt;/AccordionTab&gt;
			&lt;/Accordion&gt;

		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			active1: true,
			active2: false,
			active3: false
		}
	}
}
</CodeHighlight>

<CodeHighlight lang="css">
.accordion-custom {
	i, span {
		vertical-align: middle;
	}

	span {
		margin: 0 .5em;
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>