<template>
	<AppDoc name="TagDemo" :sources="sources" github="tag/TagDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Tag from 'primevue/tag';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/tag/tag.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Content of the tag is specified using the <i>value</i> property.</p>
<pre v-code><code>
&lt;Tag value="New"&gt;&lt;/Tag&gt;

</code></pre>

		<h5>Icon</h5>
		<p>An icon can also be configured to be displayed next to the value with the <i>icon</i> property.</p>
<pre v-code><code>
&lt;Tag value="New" icon="pi pi-plus"&gt;&lt;/Tag&gt;

</code></pre>

        <h5>Severities</h5>
        <p>Different color options are available as severity levels.</p>

		<ul>
			<li>success</li>
			<li>info</li>
			<li>warning</li>
			<li>danger</li>
		</ul>

		<h5>Templating</h5>
		<p>Content can easily be customized with the default slot instead of using the built-in display.</p>
<pre v-code><code>
&lt;Tag&gt;
   Content
&lt;/Tag&gt;

</code></pre>

		<h5>Properties</h5>
		<p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                        <td>value</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value to display inside the tag.</td>
                    </tr>
					<tr>
                        <td>severity</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Severity type of the tag.</td>
                    </tr>
					<tr>
                        <td>rounded</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the corners of the tag are rounded.</td>
                    </tr>
					<tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon of the tag to display next to the value.</td>
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
                        <td>p-tag</td>
                        <td>Tag element</td>
                    </tr>
                    <tr>
                        <td>p-tag-rounded</td>
                        <td>Rounded element</td>
                    </tr>
                    <tr>
                        <td>p-tag-icon</td>
                        <td>Icon of the tag</td>
                    </tr>
                    <tr>
                        <td>p-tag-value</td>
                        <td>Value of the tag</td>
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
        <h5>Tags</h5>
        <Tag class="mr-2" value="Primary"></Tag>
        <Tag class="mr-2" severity="success" value="Success"></Tag>
        <Tag class="mr-2" severity="info" value="Info"></Tag>
        <Tag class="mr-2" severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>

        <h5>Pills</h5>
        <Tag class="mr-2" value="Primary" rounded></Tag>
        <Tag class="mr-2" severity="success" value="Success" rounded></Tag>
        <Tag class="mr-2" severity="info" value="Info" rounded></Tag>
        <Tag class="mr-2" severity="warning" value="Warning" rounded></Tag>
        <Tag severity="danger" value="Danger" rounded></Tag>

        <h5>Icons</h5>
        <Tag class="mr-2" icon="pi pi-user" value="Primary"></Tag>
        <Tag class="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
        <Tag class="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
        <Tag class="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
        <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
    </div>
</template>

<script>
export default {
}
<\\/script>
`
				},
                'composition-api': {
                    tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <h5>Tags</h5>
        <Tag class="mr-2" value="Primary"></Tag>
        <Tag class="mr-2" severity="success" value="Success"></Tag>
        <Tag class="mr-2" severity="info" value="Info"></Tag>
        <Tag class="mr-2" severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>

        <h5>Pills</h5>
        <Tag class="mr-2" value="Primary" rounded></Tag>
        <Tag class="mr-2" severity="success" value="Success" rounded></Tag>
        <Tag class="mr-2" severity="info" value="Info" rounded></Tag>
        <Tag class="mr-2" severity="warning" value="Warning" rounded></Tag>
        <Tag severity="danger" value="Danger" rounded></Tag>

        <h5>Icons</h5>
        <Tag class="mr-2" icon="pi pi-user" value="Primary"></Tag>
        <Tag class="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
        <Tag class="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
        <Tag class="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
        <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
    </div>
</template>

<script>
export default {
}
<\\/script>
`
				},
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/tag/tag.min.js"><\\/script>`,
					content: `<div id="app">
            <h5>Tags</h5>
            <p-tag class="mr-2" value="Primary"></p-tag>
            <p-tag class="mr-2" severity="success" value="Success"></p-tag>
            <p-tag class="mr-2" severity="info" value="Info"></p-tag>
            <p-tag class="mr-2" severity="warning" value="Warning"></p-tag>
            <p-tag severity="danger" value="Danger"></p-tag>

            <h5>Pills</h5>
            <p-tag class="mr-2" value="Primary" rounded></p-tag>
            <p-tag class="mr-2" severity="success" value="Success" rounded></p-tag>
            <p-tag class="mr-2" severity="info" value="Info" rounded></p-tag>
            <p-tag class="mr-2" severity="warning" value="Warning" rounded></p-tag>
            <p-tag severity="danger" value="Danger" rounded></p-tag>

            <h5>Icons</h5>
            <p-tag class="mr-2" icon="pi pi-user" value="Primary"></p-tag>
            <p-tag class="mr-2" icon="pi pi-check" severity="success" value="Success"></p-tag>
            <p-tag class="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></p-tag>
            <p-tag class="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></p-tag>
            <p-tag icon="pi pi-times" severity="danger" value="Danger"></p-tag>
        </div>

        <script type="module">
        const { createApp } = Vue;

        const App = {
            components: {
                "p-tag": primevue.tag
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
				}
			}
		}
	}
}
</script>