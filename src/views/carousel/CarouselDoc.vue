<template>
	<AppDoc name="CarouselDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="carousel/CarouselDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Carousel from 'primevue/carousel';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/carousel/carousel.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Carousel requires a collection of items as its value along with a template to render each item.</p>
<pre v-code><code>
&lt;Carousel :value="cars"&gt;
    &lt;template #item="slotProps"&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;

</code></pre>

		<h5>Items per page and Scroll Items</h5>
		<p>Number of items per page is defined using the <i>numVisible</i> property whereas number of items to scroll is defined with the <i>numScroll</i> property.</p>
<pre v-code><code>
&lt;Carousel :value="cars" :numVisible="3" :numScroll="1"&gt;
	&lt;template #item="slotProps"&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;

</code></pre>

		<h5>Responsive</h5>
		<p>For responsive design, <i>numVisible</i> and <i>numScroll</i> can be defined using the <i>responsiveOptions</i> property that should be an array of
			objects whose breakpoint defines the max-width to apply the settings.</p>
<pre v-code><code><template v-pre>
&lt;Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Basic&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		&lt;div class="car-item"&gt;
            &lt;div class="car-content"&gt;
                &lt;div&gt;
                    &lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" /&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div class="car-title"&gt;{{slotProps.data.brand}}&lt;/div&gt;
                    &lt;div class="car-subtitle"&gt;{{slotProps.data.year}} | {{slotProps.data.color}}&lt;/div&gt;

                    &lt;div class="car-buttons"&gt;
                        &lt;Button icon="pi pi-search" class="p-button-secondary" /&gt;
                        &lt;Button icon="pi pi-star-fill" class="p-button-secondary" /&gt;
                        &lt;Button icon="pi pi-cog" class="p-button-secondary" /&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;
</template>
</code></pre>
<pre v-code.script><code>
data() {
	return {
		responsiveOptions: [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		]
	}
},

</code></pre>

		<h5>Header and Footer</h5>
		<p>Custom content projection is available using the <i>item</i>, <i>header</i> and <i>footer</i> templates.</p>

<pre v-code><code>
&lt;Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Custom Header&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		Content
	&lt;/template&gt;
	&lt;template #footer&gt;
		&lt;h2&gt;Custom Footer&lt;/h2&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;

</code></pre>

		<h5>Orientation</h5>
		<p>Default layout of the Carousel is horizontal, other possible option is the vertical mode that is configured with the <i>orientation</i> property.</p>
<pre v-code><code>
&lt;Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" :responsiveOptions="responsiveOptions"&gt;
	&lt;template #item="slotProps"&gt;
		Content
	&lt;/template&gt;
&lt;/Carousel&gt;

</code></pre>

		<h5>AutoPlay and Circular</h5>
		<p>When <i>autoplayInterval</i> is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling <i>circular</i> property needs to be enabled. Note that in autoplay mode, circular is enabled by default.</p>
<pre v-code><code>
&lt;Carousel :value="cars" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Circular, AutoPlay&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		Content
	&lt;/template&gt;
&lt;/Carousel&gt;

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
                        <td>value</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of objects to display.</td>
                    </tr>
                    <tr>
                        <td>page</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Index of the first item.</td>
                    </tr>
                    <tr>
                        <td>circular</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Defines if scrolling would be infinite.</td>
                    </tr>
                    <tr>
                        <td>autoplayInterval</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Time in milliseconds to scroll items automatically.</td>
                    </tr>
                    <tr>
                        <td>numVisible</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Number of items per page.</td>
                    </tr>
                    <tr>
                        <td>numScroll</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Number of items to scroll.</td>
                    </tr>
                    <tr>
                        <td>responsiveOptions</td>
                        <td>any</td>
                        <td>null</td>
                        <td>An array of options for responsive design.</td>
                    </tr>
                    <tr>
                        <td>orientation</td>
                        <td>string</td>
                        <td>horizontal</td>
                        <td>Specifies the layout of the component, valid values are "horizontal" and "vertical".</td>
                    </tr>
                    <tr>
                        <td>verticalViewPortHeight</td>
                        <td>string</td>
                        <td>300px</td>
                        <td>Height of the viewport in vertical layout.</td>
                    </tr>
                    <tr>
                        <td>contentClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of main content.</td>
                    </tr>
                    <tr>
                        <td>containerClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the viewport container.</td>
                    </tr>
                    <tr>
                        <td>indicatorsContentClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the indicator items.</td>
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
                    <tr>
                        <td>item</td>
                        <td>data: Data of the component<br />
                            index: Index of the item</td>
                    </tr>
                    <tr>
                        <td>footer</td>
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
                        <td>p-carousel</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-carousel-header</td>
                        <td>Header section.</td>
                    </tr>
                    <tr>
                        <td>p-carousel-footer</td>
                        <td>Footer section.</td>
                    </tr>
                    <tr>
                        <td>p-carousel-content</td>
                        <td>Main content element. It contains the container of the viewport.</td>
                    </tr>
                    <tr>
                        <td>p-carousel-container</td>
                        <td>Container of the viewport. It contains navigation buttons and viewport.</td>
                    </tr>
                    <tr>
                        <td>p-carousel-items-content</td>
                        <td>Viewport.</td>
                    </tr>
                    <tr>
                        <td>p-carousel-indicators</td>
                        <td>Container of the indicators.</td>
                    </tr>
                    <tr>
                        <td>p-carousel-indicator</td>
                        <td>Indicator element.</td>
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
            <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #header>
                    <h5>Basic</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>

        <div class="card">
            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
                <template #header>
                    <h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>

        <div class="card">
            <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="430px"
                        style="max-width: 400px; margin-top: 2em">
                <template #header>
                    <h5>Vertical</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
	</div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
	data() {
		return {
            products: null,
			responsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
				},
				{
					breakpoint: '600px',
					numVisible: 2,
					numScroll: 2
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
		}
	},
    productService: null,
	created() {
        this.productService = new ProductService();
	},
	mounted() {
        this.productService.getProductsSmall().then(data => this.products = data.slice(0,9));
	}
}
<\\/script>

<style lang="scss" scoped>
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
    }

    .product-image {
        width: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
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
            <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #header>
                    <h5>Basic</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>

        <div class="card">
            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
                <template #header>
                    <h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>

        <div class="card">
            <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="430px"
                        style="max-width: 400px; margin-top: 2em">
                <template #header>
                    <h5>Vertical</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from './service/ProductService';

export default {
	setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data.slice(0,9));
        })
        const products = ref(null);
        const productService = ref(new ProductService());
		const responsiveOptions = ref([
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		]);

        return {products, productService, responsiveOptions }
	}
}
<\\/script>

<style lang="scss" scoped>
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
    }

    .product-image {
        width: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/carousel/carousel.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <p-carousel :value="products" :num-visible="3" :num-scroll="3" :responsive-options="responsiveOptions">
                    <template #header>
                        <h5>Basic</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                    <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                    <div class="car-buttons mt-5">
                                        <p-button icon="pi pi-search" class="p-button p-button-rounded mr-2"></p-button>
                                        <p-button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2"></p-button>
                                        <p-button icon="pi pi-cog" class="p-button-help p-button-rounded"></p-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </p-carousel>
            </div>

            <div class="card">
                <p-carousel :value="products" :num-visible="3" :num-scroll="1" :responsive-options="responsiveOptions" class="custom-carousel" :circular="true" :autoplay-interval="3000">
                    <template #header>
                        <h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                    <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                    <div class="car-buttons mt-5">
                                        <p-button icon="pi pi-search" class="p-button p-button-rounded mr-2"></p-button>
                                        <p-button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2"></p-button>
                                        <p-button icon="pi pi-cog" class="p-button-help p-button-rounded"></p-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </p-carousel>
            </div>

            <div class="card">
                <p-carousel :value="products" :num-visible="1" :num-scroll="1" orientation="vertical" vertical-view-portHeight="430px"
                            style="max-width: 400px; margin-top: 2em">
                    <template #header>
                        <h5>Vertical</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                    <h6 class="mt-0 mb-3">\${{slotProps.data.price}}</h6>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                    <div class="car-buttons mt-5">
                                        <p-button icon="pi pi-search" class="p-button p-button-rounded mr-2"></p-button>
                                        <p-button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2"></p-button>
                                        <p-button icon="pi pi-cog" class="p-button-help p-button-rounded"></p-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </p-carousel>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProductsSmall().then(data => products.value = data.slice(0,9));
                })
                const products = ref(null);
                const productService = ref(new ProductService());
                const responsiveOptions = ref([
                    {
                        breakpoint: '1024px',
                        numVisible: 3,
                        numScroll: 3
                    },
                    {
                        breakpoint: '600px',
                        numVisible: 2,
                        numScroll: 2
                    },
                    {
                        breakpoint: '480px',
                        numVisible: 1,
                        numScroll: 1
                    }
                ]);

                return {products, productService, responsiveOptions }
            },
            components: {
                "p-carousel": primevue.carousel,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .product-item .product-item-content {
            border: 1px solid var(--surface-border);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }

        .product-item .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
        </style>
`
                }
            }
        }
    }
}
</script>
