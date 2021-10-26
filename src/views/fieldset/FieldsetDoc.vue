<template>
	<AppDoc name="FieldsetDemo" :sources="sources" github="fieldset/FieldsetDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Fieldset from 'primevue/fieldset';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/fieldset/fieldset.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Fieldset is a container component that accepts content as its children.</p>
<pre v-code><code>
&lt;Fieldset legend="Godfather I"&gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Fieldset&gt;

</code></pre>

        <h5>Custom Header</h5>
        <p>Header of the panel is either defined with the <i>legend</i> property or the legend template.</p>
<pre v-code><code>
&lt;Fieldset&gt;
    &lt;template #legend&gt;
        Header Content
    &lt;/template&gt;
	Content
&lt;/Fieldset&gt;

</code></pre>


		<h5>Toggleable</h5>
		<p>Content of the fieldset can be expanded and collapsed using <i>toggleable</i> option..</p>
<pre v-code><code>
&lt;Fieldset legend="Godfather I" :toggleable="true"&gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Fieldset&gt;

</code></pre>

<p>To control the initial state of the toggleable panel, use the <i>collapsed</i> property.</p>
<pre v-code><code>
&lt;Fieldset legend="Header Text" :toggleable="true" :collapsed="true"&gt;
	Content
&lt;/Fieldset&gt;

</code></pre>

        <p>Use the v-model directive to enable two-way binding.</p>
<pre v-code><code>
&lt;button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically&lt;/button&gt;
&lt;Fieldset legend="Header Text" :toggleable="true" v-model:collapsed="isCollapsed"&gt;
	Content
&lt;/Fieldset&gt;

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
                        <td>toggle</td>
                        <td>event.originalEvent: browser event <br />
                            event.value: collapsed state as a boolean
                        </td>
                        <td>Callback to invoke when a tab gets expanded or collapsed.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>legend</td>
                        <td>-</td>
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
        <h5>Regular</h5>
        <Fieldset legend="Header">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Fieldset>

        <h5>Toggleable</h5>
        <Fieldset legend="Header" :toggleable="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Fieldset>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
.p-fieldset p {
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
        <h5>Regular</h5>
        <Fieldset legend="Header">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Fieldset>

        <h5>Toggleable</h5>
        <Fieldset legend="Header" :toggleable="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Fieldset>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
.p-fieldset p {
    line-height: 1.5;
    margin: 0;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/fieldset/fieldset.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Regular</h5>
            <p-fieldset legend="Header">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </p-fieldset>

            <h5>Toggleable</h5>
            <p-fieldset legend="Header" :toggleable="true">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </p-fieldset>
        </div>

        <script type="module">
        const { createApp } = Vue;

        const App = {
            components: {
                "p-fieldset": primevue.fieldset
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-fieldset p {
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