<template>
	<AppDoc name="ScrollTopDemo" :sources="sources" github="scrolltop/ScrollTopDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import ScrollTop from 'primevue/scrolltop';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/scrolltop/scrolltop.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Without any configuration, ScrollTop listens window scroll.</p>
<pre v-code><code>
&lt;ScrollTop /&gt;

</code></pre>

		<h5>Threshold</h5>
		<p>When the vertical scroll position reaches a certain value, ScrollTop gets displayed. This value is
			defined with the <i>threshold</i> property that defaults to 400.</p>
<pre v-code><code>
&lt;ScrollTop :threshold="200" /&gt;

</code></pre>

		<h5>Target Element</h5>
		<p>ScrollTop can also be assigned to its parent element by setting <i>target</i> as "parent".</p>
<pre v-code><code>
&lt;div style="height: 400px; overflow: auto"&gt;
	Content that overflows to container
	&lt;ScrollTop /&gt;
&lt;/div&gt;

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
                        <td>target</td>
                        <td>string</td>
                        <td>window</td>
                        <td>Target of the ScrollTop, valid values are "window" and "parent".</td>
                    </tr>
                    <tr>
                        <td>threshold</td>
                        <td>number</td>
                        <td>400</td>
                        <td>Defines the threshold value of the vertical scroll position of the target to toggle the visibility.</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>pi pi-chevron-up</td>
                        <td>Icon to display.</td>
                    </tr>
					<tr>
                        <td>behavior</td>
                        <td>string</td>
                        <td>smooth</td>
                        <td>Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump.</td>
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
                        <td>p-scrolltop</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-scrolltop-sticky</td>
                        <td>Container element when attached to its parent.</td>
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
        <h5>Element</h5>
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae et leo duis ut diam.
                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);

    &:hover {
		background-color: var(--primary-color);
	}

    .p-scrolltop-icon {
        font-size: 1rem;
        color: var(--primary-color-text);
    }
}
</style>`
				},
                'composition-api': {
                    tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <h5>Element</h5>
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae et leo duis ut diam.
                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);

    &:hover {
		background-color: var(--primary-color);
	}

    .p-scrolltop-icon {
        font-size: 1rem;
        color: var(--primary-color-text);
    }
}
</style>`
				},
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/scrolltop/scrolltop.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/scrollpanel/scrollpanel.min.js"><\\/script>`,
					content: `<div id="app">
        <h5>Element</h5>
        <p-scrollpanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae et leo duis ut diam.
                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <p-scrolltop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up"></p-scrolltop>
        </p-scrollpanel>
    </div>

        <script type="module">
        const { createApp } = Vue;

        const App = {
            components: {
                "p-scrolltop": primevue.scrolltop,
                "p-scrollpanel": primevue.scrollpanel
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

<style>
.custom-scrolltop {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color) !important;
}

.custom-scrolltop:hover {
	background-color: var(--primary-color);
}

.custom-scrolltop .p-scrolltop-icon {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>`
				}
			}
		}
	}
}
</script>