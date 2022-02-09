<template>
	<AppDoc name="SkeletonDemo" :sources="sources" github="skeleton/SkeletonDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Skeleton from 'primevue/skeleton';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/skeleton/skeleton.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Skeleton displays a rectangle in its simplest form.</p>
<pre v-code><code>
&lt;Skeleton /&gt;

</code></pre>

		<h5>Circle</h5>
		<p>The other option is the circle by setting <i>shape</i> property as "circle".</p>
<pre v-code><code>
&lt;Skeleton shape="circle"/&gt;

</code></pre>

		<h5>Size</h5>
		<p>In order to customize the size, use <i>width</i> and <i>height</i> properties for rectangles and <i>size</i> for Circle and Square shapes.</p>
<pre v-code><code>
&lt;Skeleton width="100%" height="2rem" /&gt;
&lt;Skeleton shape="circle" size="50px" /&gt;

</code></pre>

		<h5>Border Radius</h5>
		<p>The default border radius of a rectangle is specified by the theme and can be overriden using the <i>borderRadius</i> property.</p>
<pre v-code><code>
&lt;Skeleton borderRadius="16px" /&gt;

</code></pre>

		<h5>Animation</h5>
		<p>Animation can be turned of by setting <i>animation</i> to "none".</p>
<pre v-code><code>
&lt;Skeleton animation="none" /&gt;

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
                        <td>shape</td>
                        <td>string</td>
                        <td>rectangle</td>
                        <td>Shape of the element, options are "rectangle" and "circle".</td>
                    </tr>
					<tr>
                        <td>size</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Size of the Circle or Square.</td>
                    </tr>
					<tr>
                        <td>width</td>
                        <td>string</td>
                        <td>100%</td>
                        <td>Width of the element.</td>
                    </tr>
					<tr>
                        <td>height</td>
                        <td>string</td>
                        <td>1rem</td>
                        <td>Height of the element.</td>
                    </tr>
					<tr>
                        <td>borderRadius</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Border radius of the element, defaults to value from theme.</td>
                    </tr>
					<tr>
                        <td>animation</td>
                        <td>string</td>
                        <td>wave</td>
                        <td>Type of the animation, valid options are "wave" and "none".</td>
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
                        <td>p-skeleton</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-skeleton-circle</td>
                        <td>Container element of a determinate progressbar.</td>
                    </tr>
                    <tr>
                        <td>p-skeleton-animation-none</td>
                        <td>Container element of an indeterminate progressbar.</td>
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
             <div class="grid formgrid">
                <div class="field col-12 md:col-6">
                    <h5>Rectangle</h5>
                    <Skeleton class="mb-2"></Skeleton>
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton height="2rem" class="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div class="field col-12 md:col-6">
                    <h5>Rounded</h5>
                    <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                    <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div class="field col-12 md:col-6">
                    <h5 class="mt-3">Square</h5>
                    <div class="flex align-items-end">
                        <Skeleton size="2rem" class="mr-2"></Skeleton>
                        <Skeleton size="3rem" class="mr-2"></Skeleton>
                        <Skeleton size="4rem" class="mr-2"></Skeleton>
                        <Skeleton size="5rem"></Skeleton>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <h5 class="mt-3">Circle</h5>
                    <div class="flex align-items-end">
                        <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="5rem"></Skeleton>
                    </div>
                </div>
             </div>
        </div>

        <div class="card">
             <div class="grid formgrid">
                <div class="field col-12 md:col-6 md:pr-6 pr-0">
                    <h5>Card</h5>
                    <div class="custom-skeleton p-4">
                        <div class="flex mb-3">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div>
                                <Skeleton width="10rem" class="mb-2"></Skeleton>
                                <Skeleton width="5rem" class="mb-2"></Skeleton>
                                <Skeleton height=".5rem"></Skeleton>
                            </div>
                        </div>
                        <Skeleton width="100%" height="150px"></Skeleton>
                        <div class="flex justify-content-center mt-3">
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                        </div>
                    </div>
                </div>

                <div class="field col-12 md:col-6">
                    <h5>List</h5>
                    <div class="custom-skeleton p-4">
                        <ul class="m-0 p-0">
                            <li class="mb-3">
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h5>DataTable</h5>
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="name" header="Name">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="category" header="Category">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="quantity" header="Quantity">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: new Array(4)
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.custom-skeleton {
    border: 1px solid var(--surface-border);
    border-radius: 4px;

    ul {
        list-style: none;
    }
}
</style>`
				},
                'composition-api': {
                    tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <div class="card">
            <div class="grid formgrid">
                <div class="field col-12 md:col-6">
                    <h5>Rectangle</h5>
                    <Skeleton class="mb-2"></Skeleton>
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton height="2rem" class="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div class="field col-12 md:col-6">
                    <h5>Rounded</h5>
                    <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                    <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div class="field col-12 md:col-6">
                    <h5 class="mt-3">Square</h5>
                    <div class="flex align-items-end">
                        <Skeleton size="2rem" class="mr-2"></Skeleton>
                        <Skeleton size="3rem" class="mr-2"></Skeleton>
                        <Skeleton size="4rem" class="mr-2"></Skeleton>
                        <Skeleton size="5rem"></Skeleton>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <h5 class="mt-3">Circle</h5>
                    <div class="flex align-items-end">
                        <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="5rem"></Skeleton>
                    </div>
                </div>
             </div>
        </div>

        <div class="card">
             <div class="grid formgrid">
                <div class="field col-12 md:col-6 md:pr-6 pr-0">
                    <h5>Card</h5>
                    <div class="custom-skeleton p-4">
                        <div class="flex mb-3">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div>
                                <Skeleton width="10rem" class="mb-2"></Skeleton>
                                <Skeleton width="5rem" class="mb-2"></Skeleton>
                                <Skeleton height=".5rem"></Skeleton>
                            </div>
                        </div>
                        <Skeleton width="100%" height="150px"></Skeleton>
                        <div class="flex justify-content-center mt-3">
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                        </div>
                    </div>
                </div>

                <div class="field col-12 md:col-6">
                    <h5>List</h5>
                    <div class="custom-skeleton p-4">
                        <ul class="m-0 p-0">
                            <li class="mb-3">
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex">
                                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                                    <div style="flex: 1">
                                        <Skeleton width="100%" class="mb-2"></Skeleton>
                                        <Skeleton width="75%"></Skeleton>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h5>DataTable</h5>
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="name" header="Name">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="category" header="Category">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="quantity" header="Quantity">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const products = ref(new Array(4));

        return { products }
    }
}
<\\/script>

<style lang="scss" scoped>
.custom-skeleton {
    border: 1px solid var(--surface-border);
    border-radius: 4px;

    ul {
        list-style: none;
    }
}
</style>`
				},
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/skeleton/skeleton.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>`,
					content: `<div id="app">
            <div class="card">
                <div class="grid formgrid">
                    <div class="field col-12 md:col-6">
                        <h5>Rectangle</h5>
                        <p-skeleton class="mb-2"></p-skeleton>
                        <p-skeleton width="10rem" class="mb-2"></p-skeleton>
                        <p-skeleton width="5rem" class="mb-2"></p-skeleton>
                        <p-skeleton height="2rem" class="mb-2"></p-skeleton>
                        <p-skeleton width="10rem" height="4rem"></p-skeleton>
                    </div>
                    <div class="field col-12 md:col-6">
                        <h5>Rounded</h5>
                        <p-skeleton class="mb-2" border-radius="16px"></p-skeleton>
                        <p-skeleton width="10rem" class="mb-2" border-radius="16px"></p-skeleton>
                        <p-skeleton width="5rem" border-radius="16px" class="mb-2"></p-skeleton>
                        <p-skeleton height="2rem" class="mb-2" border-radius="16px"></p-skeleton>
                        <p-skeleton width="10rem" height="4rem" border-radius="16px"></p-skeleton>
                    </div>
                    <div class="field col-12 md:col-6">
                        <h5 class="mt-3">Square</h5>
                        <div class="flex align-items-end">
                            <p-skeleton size="2rem" class="mr-2"></p-skeleton>
                            <p-skeleton size="3rem" class="mr-2"></p-skeleton>
                            <p-skeleton size="4rem" class="mr-2"></p-skeleton>
                            <p-skeleton size="5rem"></p-skeleton>
                        </div>
                    </div>
                    <div class="field col-12 md:col-6">
                        <h5 class="mt-3">Circle</h5>
                        <div class="flex align-items-end">
                            <p-skeleton shape="circle" size="2rem" class="mr-2"></p-skeleton>
                            <p-skeleton shape="circle" size="3rem" class="mr-2"></p-skeleton>
                            <p-skeleton shape="circle" size="4rem" class="mr-2"></p-skeleton>
                            <p-skeleton shape="circle" size="5rem"></p-skeleton>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="grid formgrid">
                    <div class="field col-12 md:col-6 md:pr-6 pr-0">
                        <h5>Card</h5>
                        <div class="custom-skeleton p-4">
                            <div class="flex mb-3">
                                <p-skeleton shape="circle" size="4rem" class="mr-2"></p-skeleton>
                                <div>
                                    <p-skeleton width="10rem" class="mb-2"></p-skeleton>
                                    <p-skeleton width="5rem" class="mb-2"></p-skeleton>
                                    <p-skeleton height=".5rem"></p-skeleton>
                                </div>
                            </div>
                            <p-skeleton width="100%" height="150px"></p-skeleton>
                            <div class="flex justify-content-center mt-3">
                                <p-skeleton width="4rem" height="2rem"></p-skeleton>
                                <p-skeleton width="4rem" height="2rem"></p-skeleton>
                            </div>
                        </div>
                    </div>

                    <div class="field col-12 md:col-6">
                        <h5>List</h5>
                        <div class="custom-skeleton p-4">
                            <ul class="m-0 p-0">
                                <li class="mb-3">
                                    <div class="flex">
                                        <p-skeleton shape="circle" size="4rem" class="mr-2"></p-skeleton>
                                        <div style="flex: 1">
                                            <p-skeleton width="100%" class="mb-2"></p-skeleton>
                                            <p-skeleton width="75%"></p-skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="flex">
                                        <p-skeleton shape="circle" size="4rem" class="mr-2"></p-skeleton>
                                        <div style="flex: 1">
                                            <p-skeleton width="100%" class="mb-2"></p-skeleton>
                                            <p-skeleton width="75%"></p-skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-3">
                                    <div class="flex">
                                        <p-skeleton shape="circle" size="4rem" class="mr-2"></p-skeleton>
                                        <div style="flex: 1">
                                            <p-skeleton width="100%" class="mb-2"></p-skeleton>
                                            <p-skeleton width="75%"></p-skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex">
                                        <p-skeleton shape="circle" size="4rem" class="mr-2"></p-skeleton>
                                        <div style="flex: 1">
                                            <p-skeleton width="100%" class="mb-2"></p-skeleton>
                                            <p-skeleton width="75%"></p-skeleton>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h5>DataTable</h5>
                <p-datatable :value="products" responsive-layout="scroll">
                    <p-column field="code" header="Code">
                        <template #body>
                            <p-skeleton></p-skeleton>
                        </template>
                    </p-column>
                    <p-column field="name" header="Name">
                        <template #body>
                            <p-skeleton></p-skeleton>
                        </template>
                    </p-column>
                    <p-column field="category" header="Category">
                        <template #body>
                            <p-skeleton></p-skeleton>
                        </template>
                    </p-column>
                    <p-column field="quantity" header="Quantity">
                        <template #body>
                            <p-skeleton></p-skeleton>
                        </template>
                    </p-column>
                </p-datatable>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const products = ref(new Array(4));

                return { products }
            },
            components: {
                "p-skeleton": primevue.skeleton,
                "p-datatable": primevue.datatable,
                "p-column": primevue.column
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .custom-skeleton {
            border: 1px solid var(--surface-border);
            border-radius: 4px;
        }

        .custom-skeleton ul {
            list-style: none;
        }
        </style>`
				}
			}
		}
	}
}
</script>