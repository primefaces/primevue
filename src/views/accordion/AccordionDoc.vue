<template>
	<AppDoc name="AccordionDemo" :sources="sources" github="accordion/AccordionDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/accordion/accordion.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/accordiontab/accordiontab.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Accordion element consists of one or more AccordionTab elements. Title of the tab is defined using header attribute.</p>
<pre v-code><code>
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

</code></pre>

		<h5>Active</h5>
		<p>Visibility of the content is specified with the <i>activeIndex</i> property that supports one or two-way binding.</p>
<pre v-code><code>
&lt;Accordion :activeIndex="0"&gt;
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

</code></pre>

		<p>Two-way binding requires v-model.</p>
<pre v-code><code>
&lt;Accordion v-model:activeIndex="activeIndex"&gt;
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

</code></pre>

		<h5>Multiple</h5>
		<p>By default only one tab at a time can be active, enabling multiple property changes this behavior to allow multiple
			tabs be active at the same time.</p>
<pre v-code><code>
&lt;Accordion :multiple="true"&gt;
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

</code></pre>

		<h5>Disabled</h5>
		<p>A tab can be disabled by setting the <i>disabled</i> property to true.</p>
<pre v-code><code>
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

</code></pre>

		<h5>Custom Content at Headers</h5>
		<p>Custom content for the title section of a panel is defined using the header template.</p>
<pre v-code><code>
&lt;Accordion&gt;
	&lt;AccordionTab&gt;
		&lt;template #header&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header I&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab&gt;
		&lt;template #header&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header II&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab&gt;
		&lt;template #header&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header III&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;

</code></pre>

		<h5>Programmatic Control</h5>
		<p>Tabs can be controlled programmatically using <i>activeIndex</i> property.</p>
<pre v-code><code>
&lt;Button @click="active = 0" class="p-button-text" label="Activate 1st" /&gt;
&lt;Button @click="active = 1" class="p-button-text" label="Activate 2nd" /&gt;
&lt;Button @click="active = 2" class="p-button-text" label="Activate 3rd" /&gt;

&lt;Accordion :multiple="true" :activeIdex="active"&gt;
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
&lt;Accordion&gt;
	&lt;AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title"&gt;
		&lt;p&gt;{{tab.content}}&lt;/p&gt;
	&lt;/AccordionTab&gt;
&lt;/Accordion&gt;
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
&lt;Accordion lazy&gt;
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

</code></pre>

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
					<tr>
                        <td>activeIndex</td>
                        <td>number|array</td>
                        <td>null</td>
                        <td>Index of the active tab or an array of indexes in multiple mode.</td>
                    </tr>
                    <tr>
                        <td>lazy</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.</td>
                    </tr>
                    <tr>
                        <td>expandIcon</td>
                        <td>string</td>
                        <td>pi-chevron-right</td>
                        <td>Icon of a collapsed tab.</td>
                    </tr>
                    <tr>
                        <td>collapseIcon</td>
                        <td>string</td>
                        <td>pi-chevron-down</td>
                        <td>Icon of an expanded tab.</td>
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
                            event.index: Opened tab index
                        </td>
                        <td>Callback to invoke when a tab gets expanded.</td>
                    </tr>
                    <tr>
                        <td>tab-close</td>
                        <td>event.originalEvent: Browser event  <br/>
                            event.index: Closed tab index
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
        <h5>Default</h5>
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
        </Accordion>

        <h5>Multiple</h5>
        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
			<AccordionTab header="Header IV" :disabled="true">
				<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
        </Accordion>

        <h5>Programmatic</h5>
        <div class="pb-3">
            <Button @click="active = 0" class="p-button-text" label="Activate 1st" />
            <Button @click="active = 1" class="p-button-text  mr-2" label="Activate 2nd" />
            <Button @click="active = 2" class="p-button-text  mr-2" label="Activate 3rd" />
        </div>

        <Accordion v-model:activeIndex="active">
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration  voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
        </Accordion>

        <h5>Custom Headers</h5>
        <Accordion class="accordion-custom" :activeIndex="0">
            <AccordionTab>
                <template #header>
                    <i class="pi pi-calendar"></i>
                    <span>Header I</span>
                </template>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-user"></i>
                    <span>Header II</span>
                </template>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-search"></i>
                    <span>Header III</span>
                    <i class="pi pi-cog"></i>
                </template>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
        </Accordion>

        <h5>Dynamic Tabs</h5>
        <Accordion>
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{tab.content}}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            tabs: [
                {
                    title: "Header I", 
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    title: "Header II", 
                    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
                },
                {
                    title: "Header III", 
                    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
                }
            ]
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.accordion-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-accordion p {
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
        <h5>Default</h5>
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
        </Accordion>

        <h5>Multiple</h5>
        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
			<AccordionTab header="Header IV" :disabled="true">
				<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
        </Accordion>

        <h5>Programmatic</h5>
        <div class="pb-3">
            <Button @click="active = 0" class="p-button-text" label="Activate 1st" />
            <Button @click="active = 1" class="p-button-text  mr-2" label="Activate 2nd" />
            <Button @click="active = 2" class="p-button-text  mr-2" label="Activate 3rd" />
        </div>

        <Accordion v-model:activeIndex="active">
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration  voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
        </Accordion>

        <h5>Custom Headers</h5>
        <Accordion class="accordion-custom" :activeIndex="0">
            <AccordionTab>
                <template #header>
                    <i class="pi pi-calendar"></i>
                    <span>Header I</span>
                </template>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-user"></i>
                    <span>Header II</span>
                </template>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-search"></i>
                    <span>Header III</span>
                    <i class="pi pi-cog"></i>
                </template>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </AccordionTab>
        </Accordion>

        <h5>Dynamic Tabs</h5>
        <Accordion>
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{tab.content}}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const active = ref(0);
        const tabs = ref([
            {
                title: "Header I", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Header II", 
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: "Header III", 
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);

		return { active, tabs }
    }
}
<\\/script>

<style lang="scss" scoped>
.accordion-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-accordion p {
    line-height: 1.5;
    margin: 0;
}
</style>`
				},
                'browser-source': {
					tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/accordion/accordion.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/accordiontab/accordiontab.min.js"><\\/script>`,
					content: `<div id="app">
            <h5>Default</h5>
            <p-accordion :active-index="0">
                <p-accordiontab header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </p-accordiontab>
                <p-accordiontab header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </p-accordiontab>
                <p-accordiontab header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </p-accordiontab>
            </p-accordion>

            <h5>Multiple</h5>
            <p-accordion :multiple="true" :active-index="[0]">
                <p-accordiontab header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </p-accordiontab>
                <p-accordiontab header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </p-accordiontab>
                <p-accordiontab header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </p-accordiontab>
                <p-accordiontab header="Header IV" :disabled="true">
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </p-accordiontab>
            </p-accordion>

            <h5>Programmatic</h5>
            <div class="pb-3">
                <p-button @click="active = 0" class="p-button-text" label="Activate 1st"></p-button>
                <p-button @click="active = 1" class="p-button-text  mr-2" label="Activate 2nd"></p-button>
                <p-button @click="active = 2" class="p-button-text  mr-2" label="Activate 3rd"></p-button>
            </div>

            <p-accordion v-model:active-index="active">
                <p-accordiontab header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </p-accordiontab>
                <p-accordiontab header="Header II">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration  voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </p-accordiontab>
                <p-accordiontab header="Header III">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </p-accordiontab>
            </p-accordion>

            <h5>Custom Headers</h5>
            <p-accordion class="accordion-custom" :active-index="0">
                <p-accordiontab>
                    <template #header>
                        <i class="pi pi-calendar"></i>
                        <span>Header I</span>
                    </template>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </p-accordiontab>
                <p-accordiontab>
                    <template #header>
                        <i class="pi pi-user"></i>
                        <span>Header II</span>
                    </template>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </p-accordiontab>
                <p-accordiontab>
                    <template #header>
                        <i class="pi pi-search"></i>
                        <span>Header III</span>
                        <i class="pi pi-cog"></i>
                    </template>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </p-accordiontab>
            </p-accordion>

            <h5>Dynamic Tabs</h5>
            <p-accordion>
                <p-accordiontab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                    <p>{{tab.content}}</p>
                </p-accordiontab>
            </p-accordion>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App =  {
            setup() {
                const active = ref(0);
                const tabs = ref([
                    {
                        title: "Header I", 
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        title: "Header II", 
                        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
                    },
                    {
                        title: "Header III", 
                        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
                    }
                ]);

                return { active, tabs }
            },
            components: {
                "p-accordion": primevue.accordion,
                "p-accordiontab": primevue.accordiontab,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .accordion-custom i{
            vertical-align: middle;
        }

        .accordion-custom span {
            vertical-align: middle;
            margin: 0 .5rem;
        }

        .p-accordion p {
            line-height: 1.5;
            margin: 0;
        }
        </style>
`
				}
			}
		}
	}
}
</script>