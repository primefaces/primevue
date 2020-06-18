<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</CodeHighlight>

				<h5>Getting Started</h5>
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

				<h5>Active</h5>
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

                <p>Two-way binding requires the sync operator.</p>
<CodeHighlight>
&lt;Accordion&gt;
	&lt;AccordionTab header="Header I" :active.sync="active1"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header II" :active.sync="active2"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header III" :active.sync="active3"&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
</CodeHighlight>

				<h5>Multiple</h5>
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

				<h5>Disabled</h5>
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

				<h5>Custom Content at Headers</h5>
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

				<h5>Programmatic Control</h5>
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

				<h5>Properties of AccordionTab</h5>
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

				<h5>Properties of Accordion</h5>
                <p>Any property as style and class are passed to the main container element. Following is the additional property to configure the component.</p>
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

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/accordion" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Default&lt;/h5&gt;
&lt;Accordion&gt;
    &lt;AccordionTab header="Header I"&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab header="Header II"&gt;
        &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab header="Header III"&gt;
        &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
    &lt;/AccordionTab&gt;
&lt;/Accordion&gt;

&lt;h5&gt;Multiple&lt;/h5&gt;
&lt;Accordion :multiple="true"&gt;
    &lt;AccordionTab header="Header I"&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab header="Header II"&gt;
        &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab header="Header III"&gt;
        &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab header="Header IV" :disabled="true"&gt;
    &lt;/AccordionTab&gt;
&lt;/Accordion&gt;

&lt;h5&gt;Programmatic&lt;/h5&gt;
&lt;div style="padding: .5em 0 1em 0"&gt;
    &lt;Button :icon="active1 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 1st" @click="active1 = !active1" class="p-button-secondary" /&gt;
    &lt;Button :icon="active2 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 2nd" @click="active2 = !active2" class="p-button-secondary" style="margin-left: .5em" /&gt;
    &lt;Button :icon="active3 ? 'pi pi-minus' : 'pi pi-plus'" label="Toggle 3rd" @click="active3 = !active3" class="p-button-secondary" style="margin-left: .5em" /&gt;
&lt;/div&gt;

&lt;Accordion :multiple="true"&gt;
    &lt;AccordionTab header="Header I" :active="active1"&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab header="Header II" :active="active2"&gt;
        &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab header="Header III" :active="active3"&gt;
        &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
    &lt;/AccordionTab&gt;
&lt;/Accordion&gt;

&lt;h5&gt;Custom Headers&lt;/h5&gt;
&lt;Accordion class="accordion-custom"&gt;
    &lt;AccordionTab&gt;
        &lt;template slot="header"&gt;
            &lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
            &lt;span&gt;Header I&lt;/span&gt;
        &lt;/template&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab&gt;
        &lt;template slot="header"&gt;
            &lt;i class="pi pi-user"&gt;&lt;/i&gt;
            &lt;span&gt;Header II&lt;/span&gt;
        &lt;/template&gt;
        &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
    &lt;/AccordionTab&gt;
    &lt;AccordionTab&gt;
        &lt;template slot="header"&gt;
            &lt;i class="pi pi-search"&gt;&lt;/i&gt;
            &lt;span&gt;Header III&lt;/span&gt;
            &lt;i class="pi pi-cog"&gt;&lt;/i&gt;
        &lt;/template&gt;
        &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
    &lt;/AccordionTab&gt;
&lt;/Accordion&gt;
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
		margin: 0 .5rem;
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>