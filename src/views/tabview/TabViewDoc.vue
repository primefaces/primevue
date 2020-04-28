<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Tabview element consists of one or more TabPanel elements. Header of the tab is defined using header attribute.</p>
<CodeHighlight>
&lt;TabView&gt;
	&lt;TabPanel header="Header I"&gt;
		Content I
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header II"&gt;
		Content II
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header III"&gt;
		Content III
	&lt;/TabPanel&gt;
&lt;/TabView&gt;
</CodeHighlight>

                <h3>Active</h3>
				<p>Visibility of the content is specified with the active property that supports one or two-way binding.</p>
<CodeHighlight>
&lt;TabView&gt;
	&lt;TabPanel header="Header I"&gt;
		Content I
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header II" :active="true"&gt;
		Content II
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header III"&gt;
		Content III
	&lt;/TabPanel&gt;
&lt;/TabView&gt;
</CodeHighlight>

                <p>Two-way binding requires the sync operator.</p>
<CodeHighlight>
&lt;TabView&gt;
	&lt;TabPanel header="Header I" :active.sync="active1"&gt;
		Content I
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header II" :active.sync="active2"&gt;
		Content II
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header III" :active.sync="active3"&gt;
		Content III
	&lt;/TabPanel&gt;
&lt;/TabView&gt;
</CodeHighlight>

				<h3>Disabled</h3>
				<p>A tab can be disabled to prevent the content to be displayed by setting the disabled property on a panel.</p>
<CodeHighlight>
&lt;TabView&gt;
	&lt;TabPanel header="Header I"&gt;
		Content I
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header II"&gt;
		Content II
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header III" :disabled="true"&gt;
		Content III
	&lt;/TabPanel&gt;
&lt;/TabView&gt;
</CodeHighlight>

				<h3>Header Template</h3>
				<p>Custom content for the title section of a panel is defined using the header template.</p>
<CodeHighlight>
&lt;TabView class="tabview-custom"&gt;
	&lt;TabPanel&gt;
		&lt;template slot="header"&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header I&lt;/span&gt;
		&lt;/template&gt;
		Content I
	&lt;/TabPanel&gt;
	&lt;TabPanel&gt;
		&lt;template slot="header"&gt;
			&lt;span&gt;Header II&lt;/span&gt;
			&lt;i class="pi pi-user"&gt;&lt;/i&gt;
		&lt;/template&gt;
		Content II
	&lt;/TabPanel&gt;
&lt;/TabView&gt;
</CodeHighlight>

                <h3>Programmatic Control</h3>
				<p>Tabs can be controlled programmatically using active property that defines the active tab.</p>
<CodeHighlight>
&lt;Button @click="activate(0)" class="p-button-secondary" label="Activate 1st" /&gt;
&lt;Button @click="activate(1)" class="p-button-secondary" label="Activate 2st" /&gt;
&lt;Button @click="activate(2)" class="p-button-secondary" label="Activate 3st" /&gt;

&lt;TabView&gt;
    &lt;TabPanel header="Header I" :active.sync="active[0]"&gt;
        Content I
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Header II" :active.sync="active[1]"&gt;
        Content II
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Header III" :active.sync="active[2]"&gt;
       Content III
    &lt;/TabPanel&gt;
&lt;/TabView&gt;

</CodeHighlight>

<CodeHighlight lang="js">
export default {
    data() {
        return {
            active: [true, false, false]
        }
    },
    methods: {
        activate(index) {
            let activeArray = [...this.active];
            for (let i = 0 ; i &lt; activeArray.length; i++) {
                activeArray[i] = (i === index);
            }
            this.active = activeArray;
        }
    },
}
</CodeHighlight>

				<h3>Properties of TabPanel</h3>
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
							<td>null</td>
							<td>Whether the tab is disabled.</td>
						</tr>
						</tbody>
					</table>
				</div>

                <h3>Properties of TabView</h3>
                <p>Any property as style and class are passed to the main container element.</p>

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
                                <td>tab-change</td>
                                <td>event.originalEvent: Browser event  <br/>
                                    event.tab: Selected tab
                                </td>
                                <td>Callback to invoke when an active tab is changed.</td>
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
                                <td>p-tabview</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-nav</td>
                                <td>Container of headers.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-selected</td>
                                <td>Selected tab header.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-panels</td>
                                <td>Container panels.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-panel</td>
                                <td>Content of a tab.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/tabview" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Default&lt;/h3&gt;
&lt;TabView&gt;
    &lt;TabPanel header="Godfather I"&gt;
        &lt;p&gt;gThe story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Godfather II"&gt;
        &lt;p&gt;Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Godfather III"&gt;
        &lt;p&gt;The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.&lt;/p&gt;
    &lt;/TabPanel&gt;
&lt;/TabView&gt;

&lt;h3&gt;Programmatic&lt;/h3&gt;
&lt;div style="padding: .5em 0"&gt;
    &lt;Button @click="activate(0)" class="p-button-secondary" label="Activate 1st" /&gt;
    &lt;Button @click="activate(1)" class="p-button-secondary" label="Activate 2nd" /&gt;
    &lt;Button @click="activate(2)" class="p-button-secondary" label="Activate 3rd" /&gt;
&lt;/div&gt;

&lt;TabView&gt;
    &lt;TabPanel header="Godfather I" :active.sync="active[0]"&gt;
        &lt;p&gt;The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Godfather II" :active.sync="active[1]"&gt;
        &lt;p&gt;Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Godfather III" :active.sync="active[2]"&gt;
        &lt;p&gt;The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.&lt;/p&gt;
    &lt;/TabPanel&gt;
&lt;/TabView&gt;

&lt;h3&gt;Disabled&lt;/h3&gt;
&lt;TabView&gt;
    &lt;TabPanel header="Godfather I"&gt;
        &lt;p&gt;The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Godfather II"&gt;
        &lt;p&gt;Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Godfather III"&gt;
        &lt;p&gt;The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel header="Godfather IV" :disabled="true"&gt;&lt;/TabPanel&gt;
&lt;/TabView&gt;

&lt;h3&gt;Custom Headers&lt;/h3&gt;
&lt;TabView class="tabview-custom"&gt;
    &lt;TabPanel&gt;
        &lt;template slot="header"&gt;
            &lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
            &lt;span&gt;Godfather I&lt;/span&gt;
        &lt;/template&gt;
        &lt;p&gt;The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel&gt;
        &lt;template slot="header"&gt;
            &lt;span&gt;Godfather II&lt;/span&gt;
            &lt;i class="pi pi-user"&gt;&lt;/i&gt;
        &lt;/template&gt;
        &lt;p&gt;Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel&gt;
        &lt;template slot="header"&gt;
            &lt;i class="pi pi-search"&gt;&lt;/i&gt;
            &lt;span&gt;Godfather III&lt;/span&gt;
            &lt;i class="pi pi-cog"&gt;&lt;/i&gt;
        &lt;/template&gt;
        &lt;p&gt;The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.&lt;/p&gt;
    &lt;/TabPanel&gt;
&lt;/TabView&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            active: [true, false, false]
        }
    },
    methods: {
        activate(index) {
            let activeArray = [...this.active];
            for (let i = 0 ; i &lt; activeArray.length; i++) {
                activeArray[i] = (i === index);
            }
            this.active = activeArray;
        }
    }
</CodeHighlight>

<CodeHighlight lang="css">
.tabview-custom {
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