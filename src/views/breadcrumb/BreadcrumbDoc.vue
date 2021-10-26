<template>
	<AppDoc name="BreadcrumbDemo" :sources="sources" github="breadcrumb/BreadcrumbDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Breadcrumb from 'primevue/breadcrumb';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/breadcrumb/breadcrumb.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>MenuModel</h5>
        <p>Breadcrumb uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

		<h5>Getting Started</h5>
		<p>Breadcrumb requires a collection of menuitems as its model and a home item.</p>
<pre v-code><code>
&lt;Breadcrumb :home="home" :model="items" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}

</code></pre>

        <h5>Templating</h5>
        <p>Breadcrumb offers content customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;Breadcrumb :home="home" :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;a :href="item.url"&gt;{{item.label}}&lt;/a&gt;
    &lt;/template&gt;
&lt;/Breadcrumb&gt;
</template>
</code></pre>

        <p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
<pre v-code><code><template v-pre>
&lt;Breadcrumb :home="home" :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
            &lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact": isExactActive}&gt;{{route.fullPath}}&lt;/a&gt;
        &lt;/router-link&gt;
    &lt;/template&gt;
&lt;/Breadcrumb&gt;
</template>
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
                        <td>model</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of menuitems.</td>
                    </tr>
                    <tr>
                        <td>home</td>
                        <td>menuitem</td>
                        <td>null</td>
                        <td>Configuration for the home icon.</td>
                    </tr>
                    <tr>
                        <td>exact</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to apply 'router-link-active-exact' class if route exactly matches the item path.</td>
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
                        <td>item</td>
                        <td>item: Menuitem instance</td>
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
                        <td>p-breadcrumb</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-menuitem</td>
                        <td>Menuitem element.</td>
                    </tr>
                    <tr>
                        <td>p-menuitem-text</td>
                        <td>Label of a menuitem.</td>
                    </tr>
                    <tr>
                        <td>p-breadcrumb-chevron</td>
                        <td>Chevron element.</td>
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
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home', 
                to: '/',
            },
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
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
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const home = ref({
            icon: 'pi pi-home', 
            to: '/',
        });
        const items = ref([
            {label: 'Computer'},
            {label: 'Notebook'},
            {label: 'Accessories'},
            {label: 'Backpacks'},
            {label: 'Item'}
        ]);

        return { home, items }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/breadcrumb/breadcrumb.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-breadcrumb :home="home" :model="items"></p-breadcrumb>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;
        const { createRouter, createWebHistory } = VueRouter;

        const App = {
            setup() {
                const home = ref({
                    icon: 'pi pi-home', 
                    to: '/',
                });
                const items = ref([
                    {label: 'Computer'},
                    {label: 'Notebook'},
                    {label: 'Accessories'},
                    {label: 'Backpacks'},
                    {label: 'Item'}
                ]);

                return { home, items }
            },
            components: {
                "p-breadcrumb": primevue.breadcrumb
            }
        };

        const routes = [{ path: "/", component: App }];

        const router = VueRouter.createRouter({
            history: VueRouter.createWebHashHistory(),
            routes
        });

        createApp(App)
            .use(router)
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