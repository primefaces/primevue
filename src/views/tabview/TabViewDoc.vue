<template>
	<AppDoc name="TabViewDemo" :sources="sources" github="tabview/TabViewDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/tabview/tabview.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/tabpanel/tabpanel.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Tabview element consists of one or more TabPanel elements. Header of the tab is defined using header attribute.</p>
<pre v-code><code>
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
<pre v-code><code>
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
<pre v-code><code>
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
<pre v-code><code>
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
<pre v-code><code>
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
<pre v-code><code>
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

<pre v-code.script><code>
export default {
    data() {
        return {
            active: 0
        }
    }
}

</code></pre>

        <h5>Dynamic Tabs</h5>
		<p>Tabs can be generated dynamically using the standard <i>v-for</i> directive.</p>
<pre v-code><code><template v-pre>
&lt;TabView&gt;
	&lt;TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title"&gt;
		&lt;p&gt;{{tab.content}}&lt;/p&gt;
	&lt;/TabPanel&gt;
&lt;/TabView&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			tabs: [
				{title: 'Title 1', content: 'Content 1'},
				{title: 'Title 3', content: 'Content 2'},
				{title: 'Title 3', content: 'Content 3'}
			]
		}
	}
}

</code></pre>

        <h5>Lazy Rendering</h5>
		<p>All tabs are rendered when mounted and inactive tabs are hidden with CSS. Enabling <i>lazy</i> option activates the dynamic mode where a tab is only rendered at DOM when it is active. This option is
        useful to speed up the initial rendering performance if there are many tabs.</p>

        <pre v-code><code>
&lt;TabView lazy&gt;
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

        <h5>Scrollable</h5>
		<p>Enable <i>scrollable</i> property to display buttons at each side of the tab headers that scrolls the tab list.</p>
<pre v-code><code>
&lt;TabView scrollable&gt;
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
                    <tr>
                        <td>lazy</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.</td>
                    </tr>
                    <tr>
                        <td>scrollable</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled displays buttons at each side of the tab headers to scroll the tab list.</td>
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
                            event.index: Index of the selected tab
                        </td>
                        <td>Callback to invoke when an active tab is changed.</td>
                    </tr>
                     <tr>
                        <td>tab-click</td>
                        <td>event.originalEvent: Browser event  <br/>
                            event.index: Index of the clicked tab
                        </td>
                        <td>Callback to invoke when an active tab is clicked.</td>
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
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Default</h5>
            <TabView ref="tabview1">
                <TabPanel header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Programmatic</h5>
            <div class="p-py-2">
                <Button @click="active1 = 0" class="p-button-text" label="Activate 1st" />
                <Button @click="active1 = 1" class="p-button-text p-mr-2" label="Activate 2nd" />
                <Button @click="active1 = 2" class="p-button-text p-mr-2" label="Activate 3rd" />
            </div>

            <TabView ref="tabview2" v-model:activeIndex="active1">
                <TabPanel header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Disabled</h5>
            <TabView ref="tabview3">
                <TabPanel header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
                <TabPanel header="Header IV" :disabled="true"></TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Custom Headers</h5>
            <TabView class="tabview-custom" ref="tabview4">
                <TabPanel>
                    <template #header>
                        <i class="pi pi-calendar"></i>
                        <span>Header I</span>
                    </template>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <span>Header II</span>
                        <i class="pi pi-user"></i>
                    </template>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <i class="pi pi-search"></i>
                        <span>Header III</span>
                        <i class="pi pi-cog"></i>
                    </template>
                   <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Dynamic Tabs</h5>
            <TabView>
                <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                    <p>{{tab.content}}</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Scrollable</h5>
            <div class="p-py-2">
                <Button @click="active2 = 0" class="p-button-text" label="Activate 1st" />
                <Button @click="active2 = 29" class="p-button-text p-mr-2" label="Activate 30th" />
                <Button @click="active2 = 49" class="p-button-text p-mr-2" label="Activate 50th" />
            </div>

            <TabView v-model:activeIndex="active2" :scrollable="true">
                <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                    <p>{{tab.content}}</p>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active1: 0,
            active2: 0,
            tabs: [
                {
                    title: 'Header I',
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    title: 'Header II',
                    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
                },
                {
                    title: 'Header III',
                    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
                }
            ],
            scrollableTabs: Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.tabview-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-tabview p {
    line-height: 1.5;
    margin: 0;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Default</h5>
            <TabView ref="tabview1">
                <TabPanel header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Programmatic</h5>
            <div class="p-py-2">
                <Button @click="active1 = 0" class="p-button-text" label="Activate 1st" />
                <Button @click="active1 = 1" class="p-button-text p-mr-2" label="Activate 2nd" />
                <Button @click="active1 = 2" class="p-button-text p-mr-2" label="Activate 3rd" />
            </div>

            <TabView ref="tabview2" v-model:activeIndex="active1">
                <TabPanel header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Disabled</h5>
            <TabView ref="tabview3">
                <TabPanel header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
                <TabPanel header="Header IV" :disabled="true"></TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Custom Headers</h5>
            <TabView class="tabview-custom" ref="tabview4">
                <TabPanel>
                    <template #header>
                        <i class="pi pi-calendar"></i>
                        <span>Header I</span>
                    </template>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <span>Header II</span>
                        <i class="pi pi-user"></i>
                    </template>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <i class="pi pi-search"></i>
                        <span>Header III</span>
                        <i class="pi pi-cog"></i>
                    </template>
                   <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Dynamic Tabs</h5>
            <TabView>
                <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                    <p>{{tab.content}}</p>
                </TabPanel>
            </TabView>
        </div>

        <div class="card">
            <h5>Scrollable</h5>
            <div class="p-py-2">
                <Button @click="active2 = 0" class="p-button-text" label="Activate 1st" />
                <Button @click="active2 = 29" class="p-button-text p-mr-2" label="Activate 30th" />
                <Button @click="active2 = 49" class="p-button-text p-mr-2" label="Activate 50th" />
            </div>

            <TabView v-model:activeIndex="active2" :scrollable="true">
                <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                    <p>{{tab.content}}</p>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const active1 = ref(0);
        const active2 = ref(0);
        const tabs = ref([
            {
                title: 'Header I',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);
        const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` })));

        return { active1, active2, tabs, scrollableTabs }
    }
}
<\\/script>

<style lang="scss" scoped>
.tabview-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-tabview p {
    line-height: 1.5;
    margin: 0;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/tabview/tabview.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/tabpanel/tabpanel.min.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Default</h5>
                <p-tabview ref="tabview1">
                    <p-tabpanel header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </p-tabpanel>
                    <p-tabpanel header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </p-tabpanel>
                    <p-tabpanel header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </p-tabpanel>
                </p-tabview>
            </div>

            <div class="card">
                <h5>Programmatic</h5>
                <div class="p-py-2">
                    <p-button @click="active1 = 0" class="p-button-text" label="Activate 1st"></p-button>
                    <p-button @click="active1 = 1" class="p-button-text p-mr-2" label="Activate 2nd"></p-button>
                    <p-button @click="active1 = 2" class="p-button-text p-mr-2" label="Activate 3rd"></p-button>
                </div>

                <p-tabview ref="tabview2" v-model:active-index="active1">
                    <p-tabpanel header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </p-tabpanel>
                    <p-tabpanel header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </p-tabpanel>
                    <p-tabpanel header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </p-tabpanel>
                </p-tabview>
            </div>

            <div class="card">
                <h5>Disabled</h5>
                <p-tabview ref="tabview3">
                    <p-tabpanel header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </p-tabpanel>
                    <p-tabpanel header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </p-tabpanel>
                    <p-tabpanel header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </p-tabpanel>
                    <p-tabpanel header="Header IV" :disabled="true"></p-tabpanel>
                </p-tabview>
            </div>

            <div class="card">
                <h5>Custom Headers</h5>
                <p-tabview class="tabview-custom" ref="tabview4">
                    <p-tabpanel>
                        <template #header>
                            <i class="pi pi-calendar"></i>
                            <span>Header I</span>
                        </template>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </p-tabpanel>
                    <p-tabpanel>
                        <template #header>
                            <span>Header II</span>
                            <i class="pi pi-user"></i>
                        </template>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </p-tabpanel>
                    <p-tabpanel>
                        <template #header>
                            <i class="pi pi-search"></i>
                            <span>Header III</span>
                            <i class="pi pi-cog"></i>
                        </template>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </p-tabpanel>
                </p-tabview>
            </div>

            <div class="card">
                <h5>Dynamic Tabs</h5>
                <p-tabview>
                    <p-tabpanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                        <p>{{tab.content}}</p>
                    </p-tabpanel>
                </p-tabview>
            </div>

            <div class="card">
                <h5>Scrollable</h5>
                <div class="p-py-2">
                    <p-button @click="active2 = 0" class="p-button-text" label="Activate 1st"></p-button>
                    <p-button @click="active2 = 29" class="p-button-text p-mr-2" label="Activate 30th"></p-button>
                    <p-button @click="active2 = 49" class="p-button-text p-mr-2" label="Activate 50th"></p-button>
                </div>

                <p-tabview v-model:active-index="active2" :scrollable="true">
                    <p-tabpanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                        <p>{{tab.content}}</p>
                    </p-tabpanel>
                </p-tabview>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const active1 = ref(0);
                const active2 = ref(0);
                const tabs = ref([
                    {
                        title: 'Header I',
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        title: 'Header II',
                        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
                    },
                    {
                        title: 'Header III',
                        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
                    }
                ]);
                const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` })));

                return { active1, active2, tabs, scrollableTabs }
            },
            components: {
                "p-tabview": primevue.tabview,
                "p-tabpanel": primevue.tabpanel,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .tabview-custom i, .tabview-custom span {
            vertical-align: middle;
        }

        .tabview-custom span {
            margin: 0 .5rem;
        }
        

        .p-tabview p {
            line-height: 1.5;
            margin: 0;
        }
        </style>`
                }
            }
        }
    }
}
</script>
