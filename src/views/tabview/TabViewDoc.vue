<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

</code></pre>

				<h5>Getting Started</h5>
				<p>Tabview element consists of one or more TabPanel elements. Header of the tab is defined using header attribute.</p>
<pre v-code>
<code>
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

</code></pre>

                <h5>Active</h5>
				<p>Visibility of the content is specified with the <i>activeIndex</i> property that supports one or two-way binding.</p>
<pre v-code>
<code>
&lt;TabView :activeIndex="activeIndex"&gt;
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

</code></pre>

                <p>Two-way binding requires v-model.</p>
<pre v-code>
<code>
&lt;TabView v-model:activeIndex="activeIndex"&gt;
	&lt;TabPanel header="Header I"&gt;
		Content I
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header II"&gt;
		Content II
	&lt;/TabPanel&gt;
	&lt;TabPanel header="Header III""&gt;
		Content III
	&lt;/TabPanel&gt;
&lt;/TabView&gt;

</code></pre>

				<h5>Disabled</h5>
				<p>A tab can be disabled to prevent the content to be displayed by setting the disabled property on a panel.</p>
<pre v-code>
<code>
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

</code></pre>

				<h5>Header Template</h5>
				<p>Custom content for the title section of a panel is defined using the header template.</p>
<pre v-code>
<code>
&lt;TabView&gt;
	&lt;TabPanel&gt;
		&lt;template #header&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header I&lt;/span&gt;
		&lt;/template&gt;
		Content I
	&lt;/TabPanel&gt;
	&lt;TabPanel&gt;
		&lt;template #header&gt;
			&lt;span&gt;Header II&lt;/span&gt;
			&lt;i class="pi pi-user"&gt;&lt;/i&gt;
		&lt;/template&gt;
		Content II
	&lt;/TabPanel&gt;
&lt;/TabView&gt;

</code></pre>

                <h5>Programmatic Control</h5>
				<p>Tabs can be controlled programmatically using <i>activeIndex</i> property.</p>
<pre v-code>
<code>
&lt;Button @click="active = 0" class="p-button-text" label="Activate 1st" /&gt;
&lt;Button @click="active = 1" class="p-button-text" label="Activate 2nd" /&gt;
&lt;Button @click="active = 2" class="p-button-text" label="Activate 3rd" /&gt;

&lt;TabView v-model:activeIndex="active"&gt;
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

</code></pre>

<pre v-code.script>
<code>
export default {
    data() {
        return {
            active: 0
        }
    }
}

</code></pre>

				<h5>Properties of TabPanel</h5>
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
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Whether the tab is disabled.</td>
                            </tr>
						</tbody>
					</table>
				</div>

                <h5>Properties of TabView</h5>
                <p>Any additional properties like style and class are passed to the main container element.</p>
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
                                <td>activeIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Index of the active tab.</td>
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
                                <td>tab-change</td>
                                <td>event.originalEvent: Browser event  <br/>
                                    event.tab: Selected tab
                                </td>
                                <td>Callback to invoke when an active tab is changed.</td>
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

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/tabview" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code>
<code><template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Default&lt;/h5&gt;
    &lt;TabView&gt;
        &lt;TabPanel header="Header I"&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel header="Header II"&gt;
            &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel header="Header III"&gt;
            &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
        &lt;/TabPanel&gt;
    &lt;/TabView&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Programmatic&lt;/h5&gt;
    &lt;div class="p-py-2"&gt;
        &lt;Button @click="active = 0" class="p-button-text" label="Activate 1st" /&gt;
        &lt;Button @click="active = 1" class="p-button-text p-mr-2" label="Activate 2nd" /&gt;
        &lt;Button @click="active = 2" class="p-button-text p-mr-2" label="Activate 3rd" /&gt;
    &lt;/div&gt;

    &lt;TabView ref="tabview2" v-model:activeIndex="active"&gt;
        &lt;TabPanel header="Header I"&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel header="Header II"&gt;
            &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel header="Header III"&gt;
            &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
        &lt;/TabPanel&gt;
    &lt;/TabView&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Disabled&lt;/h5&gt;
    &lt;TabView&gt;
        &lt;TabPanel header="Header I"&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel header="Header II"&gt;
            &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel header="Header III"&gt;
            &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel header="Header IV" :disabled="true"&gt;&lt;/TabPanel&gt;
    &lt;/TabView&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Custom Headers&lt;/h5&gt;
    &lt;TabView class="tabview-custom"&gt;
        &lt;TabPanel&gt;
            &lt;template #header&gt;
                &lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
                &lt;span&gt;Header I&lt;/span&gt;
            &lt;/template&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel&gt;
            &lt;template #header&gt;
                &lt;span&gt;Header II&lt;/span&gt;
                &lt;i class="pi pi-user"&gt;&lt;/i&gt;
            &lt;/template&gt;
            &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
        &lt;/TabPanel&gt;
        &lt;TabPanel&gt;
            &lt;template #header&gt;
                &lt;i class="pi pi-search"&gt;&lt;/i&gt;
                &lt;span&gt;Header III&lt;/span&gt;
                &lt;i class="pi pi-cog"&gt;&lt;/i&gt;
            &lt;/template&gt;
            &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.&lt;/p&gt;
        &lt;/TabPanel&gt;
    &lt;/TabView&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
    data() {
        return {
            active: 0
        }
    }
}

</code></pre>

<pre v-code.css>
<code>
.tabview-custom {
	i, span {
		vertical-align: middle;
	}

	span {
		margin: 0 .5rem;
	}
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>