<template>
	<AppDoc name="BadgeDemo" :sources="sources" github="badge/BadgeDemo.vue">
        <h5>Getting Started</h5>
        <p>Badge can either be used as a standalone component or as a directive.</p>

        <h5>Component</h5>
        <h6>Import via Module</h6>
<pre v-code.script><code>
import Badge from 'primevue/badge';

</code></pre>

        <h6>Import via CDN</h6>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/badge/badge.min.js"&gt;&lt;/script&gt;

</code></pre>

		<p>Content of the badge is specified using the <i>value</i> property.</p>
<pre v-code><code>
&lt;Badge value="2"&gt;&lt;/Badge&gt;

</code></pre>

        <h5>Directive</h5>
        <h6>Import via Module</h6>
        <pre v-code.script><code>
import BadgeDirective from 'primevue/badgedirective';

</code></pre>

        <h6>Import via CDN</h6>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/badgedirective/badgedirective.min.js"&gt;&lt;/script&gt;

</code></pre>

		<p>When used as a directive, badge needs to be configured at the application with a name of your choice.</p>
<pre v-code.script><code>
import BadgeDirective from 'primevue/badgedirective';

app.directive('badge', BadgeDirective);

</code></pre>

        <p>Next step is attaching it to an element.</p>
<pre v-code><code>
&lt;i class="pi pi-bell" v-badge="2"&gt;&lt;/i&gt;

</code></pre>

        <h5>Severities</h5>
        <p>Different color options are available as severity levels. When used as a component use the <i>severity</i> property
        to apply a severity and use a <i>modifier</i> as the severity value in directive mode.</p>

		<ul>
			<li>success</li>
			<li>info</li>
			<li>warning</li>
			<li>danger</li>
		</ul>

<pre v-code><code>
&lt;Badge value="2" severity="success"&gt;&lt;/Badge&gt;

&lt;i class="pi pi-bell" v-badge.success="2"&gt;&lt;/i&gt;

</code></pre>

        <h5>Button Badges</h5>
        <p>Buttons provide integrated badge support with the <i>badge</i> and <i>badgeClass</i> properties.</p>

<pre v-code><code>
&lt;Button type="button" label="Emails" badge="8" /&gt;
&lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" /&gt;

</code></pre>

        <h5>Sizes</h5>
        <p>Badge sizes are adjusted with the <i>size</i> property that accepts "large" and "xlarge" as the possible alternatives to the default size. Currently
        sizes only apply to component mode.</p>
<pre v-code><code>
&lt;Badge value="2"&gt;&lt;/Badge&gt;
&lt;Badge value="4" size="large" severity="warning"&gt;&lt;/Badge&gt;
&lt;Badge value="6" size="xlarge" severity="success"&gt;&lt;/Badge&gt;

</code></pre>

        <p>In addition, when placed inside another element, badge sizes can also derive their size from their parent.</p>
<pre v-code><code>
&lt;h1&gt;Heading 1 &lt;Badge value="New"&gt;&lt;/Badge&gt;&lt;/h1&gt;
&lt;h2&gt;Heading 2 &lt;Badge value="New"&gt;&lt;/Badge&gt;&lt;/h2&gt;

</code></pre>

        <h5>Templating</h5>
		<p>Content can easily be customized with the default slot instead of using the built-in display.</p>
<pre v-code><code>
&lt;Badge&gt;
   Content
&lt;/Badge&gt;

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
                        <td>Value to display inside the badge.</td>
                    </tr>
					<tr>
                        <td>severity</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Severity type of the badge.</td>
                    </tr>
					<tr>
                        <td>size</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Size of the badge, valid options are "large" and "xlarge".</td>
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
                        <td>p-badge</td>
                        <td>Badge element</td>
                    </tr>
                    <tr>
                        <td>p-overlay-badge</td>
                        <td>Wrapper of a badge and its target.</td>
                    </tr>
                    <tr>
                        <td>p-badge-dot</td>
                        <td>Badge element with no value.</td>
                    </tr>
                    <tr>
                        <td>p-badge-success</td>
                        <td>Badge element with success severity.</td>
                    </tr>
                    <tr>
                        <td>p-badge-info</td>
                        <td>Badge element with info severity.</td>
                    </tr>
                    <tr>
                        <td>p-badge-warning</td>
                        <td>Badge element with warning severity.</td>
                    </tr>
                    <tr>
                        <td>p-badge-danger</td>
                        <td>Badge element with danger severity.</td>
                    </tr>
                    <tr>
                        <td>p-badge-lg</td>
                        <td>Large badge element</td>
                    </tr>
                    <tr>
                        <td>p-badge-xl</td>
                        <td>Extra large badge element</td>
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
        <h5>Numbers</h5>
        <Badge value="2" class="p-mr-2"></Badge>
        <Badge value="8" severity="success" class="p-mr-2"></Badge>
        <Badge value="4" severity="info" class="p-mr-2"></Badge>
        <Badge value="12" severity="warning" class="p-mr-2"></Badge>
        <Badge value="3" severity="danger"></Badge>

        <h5 class="p-mb-4">Positioned Badge</h5>
        <i class="pi pi-bell p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>
        <i class="pi pi-calendar p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="'10+'"></i>
        <i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>

        <h5>Button Badge</h5>
        <Button type="button" label="Emails" badge="8" class="p-mr-2" />
        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

        <h5>Sizes</h5>
        <Badge value="2" class="p-mr-2"></Badge>
        <Badge value="4" class="p-mr-2" size="large" severity="warning"></Badge>
        <Badge value="6" size="xlarge" severity="success"></Badge>
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
        <h5>Numbers</h5>
        <Badge value="2" class="p-mr-2"></Badge>
        <Badge value="8" severity="success" class="p-mr-2"></Badge>
        <Badge value="4" severity="info" class="p-mr-2"></Badge>
        <Badge value="12" severity="warning" class="p-mr-2"></Badge>
        <Badge value="3" severity="danger"></Badge>

        <h5 class="p-mb-4">Positioned Badge</h5>
        <i class="pi pi-bell p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>
        <i class="pi pi-calendar p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="'10+'"></i>
        <i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>

        <h5>Button Badge</h5>
        <Button type="button" label="Emails" badge="8" class="p-mr-2" />
        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

        <h5>Sizes</h5>
        <Badge value="2" class="p-mr-2"></Badge>
        <Badge value="4" class="p-mr-2" size="large" severity="warning"></Badge>
        <Badge value="6" size="xlarge" severity="success"></Badge>
    </div>
</template>

<script>
export default {
}
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/badge/badge.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/badgedirective/badgedirective.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Numbers</h5>
            <p-badge value="2" class="p-mr-2"></p-badge>
            <p-badge value="8" severity="success" class="p-mr-2"></p-badge>
            <p-badge value="4" severity="info" class="p-mr-2"></p-badge>
            <p-badge value="12" severity="warning" class="p-mr-2"></p-badge>
            <p-badge value="3" severity="danger"></p-badge>

            <h5 class="p-mb-4">Positioned Badge</h5>
            <i class="pi pi-bell p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>
            <i class="pi pi-calendar p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="'10+'"></i>
            <i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>

            <h5>Button Badge</h5>
            <p-button type="button" label="Emails" badge="8" class="p-mr-2"></p-button>
            <p-button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>

            <h5>Sizes</h5>
            <p-badge value="2" class="p-mr-2"></p-badge>
            <p-badge value="4" class="p-mr-2" size="large" severity="warning"></p-badge>
            <p-badge value="6" size="xlarge" severity="success"></p-badge>
        </div>

<script type="module">
const { createApp } = Vue;
const BadgeDirective = primevue.badgedirective;

const App = {
    components: {
        "p-badge": primevue.badge,
        "p-button": primevue.button
    }
};

const app = createApp(App);
app.use(primevue.config.default);
app.directive('badge', BadgeDirective);
app.mount('#app');
<\\/script>`
                }
            }
        }
    }
}
</script>