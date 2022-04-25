<template>
	<AppDoc name="SidebarDemo" :sources="sources" github="sidebar/SidebarDemo.vue" >
		<h5>Import via Module</h5>
<pre v-code.script><code>
import Sidebar from 'primevue/sidebar';

</code></pre>

		<h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/sidebar/sidebar.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Sidebar is used as a container and visibility is controlled with the <i>visible</i> property that requires a v-model two-way binding.</p>
<pre v-code><code>
&lt;Sidebar v-model:visible="visibleLeft"&gt;
	Content
&lt;/Sidebar&gt;

&lt;Button icon="pi pi-arrow-right" @click="visibleLeft = true" /&gt;

</code></pre>

		<h5>Position</h5>
		<p>Sidebar can either be located on the left (default), right, top or bottom of the screen depending on the <i>position</i> property.</p>
<pre v-code><code>
&lt;Sidebar v-model:visible="visibleRight" position="right"&gt;
	Content
&lt;/Sidebar&gt;

</code></pre>

		<h5>Size</h5>
		<p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>
<pre v-code><code>
&lt;Sidebar v-model:visible="visibleLeft" class="p-sidebar-sm"&gt;&lt;/Sidebar&gt;
&lt;Sidebar v-model:visible="visibleLeft" class="p-sidebar-md"&gt;&lt;/Sidebar&gt;
&lt;Sidebar v-model:visible="visibleLeft" class="p-sidebar-lg"&gt;&lt;/Sidebar&gt;

</code></pre>

		<h5>Full Screen</h5>
		<p>Full screen mode allows the sidebar to cover whole screen.</p>
<pre v-code><code>
&lt;Sidebar v-model:visible="visibleFull" position="full"&gt;
	Content
&lt;/Sidebar&gt;

</code></pre>


		<h5>Properties</h5>
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
                        <td>visible</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Specifies the visibility of the dialog.</td>
                    </tr>
                    <tr>
                        <td>position</td>
                        <td>string</td>
                        <td>left</td>
                        <td>Specifies the position of the sidebar, valid values are "left", "right", "top", "bottom" and "full".</td>
                    </tr>
                    <tr>
                        <td>baseZIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Base zIndex value to use in layering.</td>
                    </tr>
                    <tr>
                        <td>autoZIndex</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to automatically manage layering.</td>
                    </tr>
                    <tr>
                        <td>dismissable</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether clicking outside closes the panel.</td>
                    </tr>
                    <tr>
                        <td>showCloseIcon</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to display a close icon inside the panel.</td>
                    </tr>
                    <tr>
                        <td>modal</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to a modal layer behind the sidebar.</td>
                    </tr>
                    <tr>
                        <td>ariaCloseLabel</td>
                        <td>string</td>
                        <td>close</td>
                        <td>Aria label of the close icon.</td>
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
					<td>hide</td>
					<td>-</td>
					<td>Callback to invoke when sidebar gets hidden.</td>
				</tr>
				<tr>
					<td>show</td>
					<td>-</td>
					<td>Callback to invoke when sidebar gets shown.</td>
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
                        <td>header</td>
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
					<td>p-sidebar</td>
					<td>Container element</td>
				</tr>
				<tr>
					<td>p-sidebar-left</td>
					<td>Container element of left sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-right</td>
					<td>Container element of right sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-top</td>
					<td>Container element of top sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-bottom</td>
					<td>Container element of bottom sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-full</td>
					<td>Container element of a full screen sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-active</td>
					<td>Container element when sidebar is visible.</td>
				</tr>
				<tr>
					<td>p-sidebar-close</td>
					<td>Close anchor element.</td>
				</tr>
				<tr>
					<td>p-sidebar-sm</td>
					<td>Small sized sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-md</td>
					<td>Medium sized sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-lg</td>
					<td>Large sized sidebar.</td>
				</tr>
				<tr>
					<td>p-sidebar-mask</td>
					<td>Modal layer of the sidebar.</td>
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
        <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
        <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2"  />
        <Button icon="pi pi-arrow-down" @click="visibleTop = true" class="mr-2"  />
        <Button icon="pi pi-arrow-up" @click="visibleBottom = true" class="mr-2"  />
        <Button icon="pi pi-th-large" @click="visibleFull = true"  />

        <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">
            <h3>Left Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleRight" :baseZIndex="10000" position="right">
            <h3>Right Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleTop" :baseZIndex="10000" position="top">
            <h3>Top Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleBottom" :baseZIndex="10000" position="bottom">
            <h3>Bottom Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleFull" :baseZIndex="10000" position="full">
            <h3>Full Screen</h3>
        </Sidebar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false
        }
    }
}
<\\/script>
`
				},
				'composition-api': {
					tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
        <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2"  />
        <Button icon="pi pi-arrow-down" @click="visibleTop = true" class="mr-2"  />
        <Button icon="pi pi-arrow-up" @click="visibleBottom = true" class="mr-2"  />
        <Button icon="pi pi-th-large" @click="visibleFull = true"  />

        <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">
            <h3>Left Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleRight" :baseZIndex="10000" position="right">
            <h3>Right Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleTop" :baseZIndex="10000" position="top">
            <h3>Top Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleBottom" :baseZIndex="10000" position="bottom">
            <h3>Bottom Sidebar</h3>
        </Sidebar>

        <Sidebar v-model:visible="visibleFull" :baseZIndex="10000" position="full">
            <h3>Full Screen</h3>
        </Sidebar>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const visibleLeft = ref(false);
        const visibleRight = ref(false);
        const visibleTop = ref(false);
        const visibleBottom = ref(false);
        const visibleFull = ref(false);

		return { visibleLeft, visibleRight, visibleTop, visibleBottom, visibleFull }
    }
}
<\\/script>
`
				},
				'browser-source': {
					tabName: 'Browser Source',
					imports: `<script src="https://unpkg.com/primevue@^3/sidebar/sidebar.min.js"><\\/script>`,
					content: `<div id="app">
			<p-button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2"></p-button>
			<p-button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2"></p-button>
			<p-button icon="pi pi-arrow-down" @click="visibleTop = true" class="mr-2"></p-button>
			<p-button icon="pi pi-arrow-up" @click="visibleBottom = true" class="mr-2"></p-button>
			<p-button icon="pi pi-th-large" @click="visibleFull = true"></p-button>

			<p-sidebar v-model:visible="visibleLeft" :base-z-index="10000">
				<h3>Left Sidebar</h3>
			</p-sidebar>

			<p-sidebar v-model:visible="visibleRight" :base-z-index="10000" position="right">
				<h3>Right Sidebar</h3>
			</p-sidebar>

			<p-sidebar v-model:visible="visibleTop" :base-z-index="10000" position="top">
				<h3>Top Sidebar</h3>
			</p-sidebar>

			<p-sidebar v-model:visible="visibleBottom" :base-z-index="10000" position="bottom">
				<h3>Bottom Sidebar</h3>
			</p-sidebar>

			<p-sidebar v-model:visible="visibleFull" :base-z-index="10000" position="full">
				<h3>Full Screen</h3>
			</p-sidebar>
		</div>

		<script>
		const { createApp, ref } = Vue;

		const App = {
			setup() {
				const visibleLeft = ref(false);
				const visibleRight = ref(false);
				const visibleTop = ref(false);
				const visibleBottom = ref(false);
				const visibleFull = ref(false);

				return { visibleLeft, visibleRight, visibleTop, visibleBottom, visibleFull }
			},
			components: {
				"p-sidebar": primevue.sidebar,
				"p-button": primevue.button
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