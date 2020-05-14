<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Carousel from 'primevue/carousel';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Carousel requires a collection of items as its value along with a template to render each item.</p>
<CodeHighlight>
&lt;Carousel :value="cars"&gt;
    &lt;template #item="slotProps"&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;
</CodeHighlight>

				<h3>Items per page and Scroll Items</h3>
				<p>Number of items per page is defined using the <i>numVisible</i> property whereas number of items to scroll is defined with the <i>numScroll</i> property.</p>
<CodeHighlight>
&lt;Carousel :value="cars" :numVisible="3" :numScroll="1"&gt;
	&lt;template #item="slotProps"&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;
</CodeHighlight>

				<h3>Responsive</h3>
				<p>For responsive design, <i>numVisible</i> and <i>numScroll</i> can be defined using the <i>responsiveOptions</i> property that should be an array of
					objects whose breakpoint defines the max-width to apply the settings.</p>
<CodeHighlight>
<template v-pre>
&lt;Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Basic&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		&lt;div class="car-details"&gt;
			&lt;div class="p-grid p-nogutter"&gt;
				&lt;div class="p-col-12"&gt;
					&lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 car-data"&gt;
					&lt;div class="car-title"&gt;{{slotProps.data.brand}}&lt;/div&gt;
					&lt;div class="car-subtitle"&gt;{{slotProps.data.year}} | {{slotProps.data.color}}&lt;/div&gt;

					&lt;div class="car-buttons"&gt;
						&lt;Button icon="pi pi-search" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-star" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-cog" class="p-button-secondary" /&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;
</template>
</CodeHighlight>
<CodeHighlight lang="js">
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
</CodeHighlight>

				<h3>Header and Footer</h3>
				<p>Custom content projection is available using the <i>header</i> and <i>footer</i> templates.</p>

<CodeHighlight>
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
</CodeHighlight>

				<h3>Orientation</h3>
				<p>Default layout of the Carousel is horizontal, other possible option is the vertical mode that is configured with the <i>orientation</i> property.</p>
<CodeHighlight>
&lt;Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" :responsiveOptions="responsiveOptions"&gt;
	&lt;template #item="slotProps"&gt;
		Content
	&lt;/template&gt;
&lt;/Carousel&gt;
</CodeHighlight>

				<h3>AutoPlay and Circular</h3>
				<p>When <i>autoplayInterval</i> is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling <i>circular</i> property needs to be enabled. Note that in autoplay mode, circular is enabled by default.</p>
<CodeHighlight>
&lt;Carousel :value="cars" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Circular, AutoPlay&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		Content
	&lt;/template&gt;
&lt;/Carousel&gt;
</CodeHighlight>

				<h3>Properties</h3>
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
							<td>dotsContainerClass</td>
							<td>string</td>
							<td>null</td>
							<td>Style class of the paginator items.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
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
							<td>p-carousel-dots-container</td>
							<td>Container of the paginator.</td>
						</tr>
						<tr>
							<td>p-carousel-dot-item</td>
							<td>Paginator element.</td>
						</tr>
						<tr>
							<td>p-carousel-dot-icon</td>
							<td>Paginator element icon.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/carousel" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Basic&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		&lt;div class="car-details"&gt;
			&lt;div class="p-grid p-nogutter"&gt;
				&lt;div class="p-col-12"&gt;
					&lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 car-data"&gt;
					&lt;div class="car-title"&gt;{{slotProps.data.brand}}&lt;/div&gt;
					&lt;div class="car-subtitle"&gt;{{slotProps.data.year}} | {{slotProps.data.color}}&lt;/div&gt;

					&lt;div class="car-buttons"&gt;
						&lt;Button icon="pi pi-search" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-star" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-cog" class="p-button-secondary" /&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;

&lt;Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Circular, AutoPlay, 3 Items per Page and Scroll by 1&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		&lt;div class="car-details"&gt;
			&lt;div class="p-grid p-nogutter"&gt;
				&lt;div class="p-col-12"&gt;
					&lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 car-data"&gt;
					&lt;div class="car-title"&gt;{{slotProps.data.brand}}&lt;/div&gt;
					&lt;div class="car-subtitle"&gt;{{slotProps.data.year}} | {{slotProps.data.color}}&lt;/div&gt;

					&lt;div class="car-buttons"&gt;
						&lt;Button icon="pi pi-search" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-star" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-cog" class="p-button-secondary" /&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;

&lt;Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" :responsiveOptions="responsiveOptions" verticalViewPortHeight="330px"
			style="max-width: 400px; margin-top: 2em"&gt;
	&lt;template #header&gt;
		&lt;h2&gt;Vertical&lt;/h2&gt;
	&lt;/template&gt;
	&lt;template #item="slotProps"&gt;
		&lt;div class="car-details"&gt;
			&lt;div class="p-grid p-nogutter"&gt;
				&lt;div class="p-col-12"&gt;
					&lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 car-data"&gt;
					&lt;div class="car-title"&gt;{{slotProps.data.brand}}&lt;/div&gt;
					&lt;div class="car-subtitle"&gt;{{slotProps.data.year}} | {{slotProps.data.color}}&lt;/div&gt;

					&lt;div class="car-buttons"&gt;
						&lt;Button icon="pi pi-search" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-star" class="p-button-secondary" /&gt;
						&lt;Button icon="pi pi-cog" class="p-button-secondary" /&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Carousel&gt;
</template>
</CodeHighlight>
<CodeHighlight lang="javascript">
import CarService from "../../service/CarService";

export default {
	data() {
		return {
			cars: null,
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
	carService: null,
	created() {
		this.carService = new CarService();
	},
	mounted() {
		this.carService.getCarsSmall().then(data => this.cars = data);
	},
}
</CodeHighlight>

<CodeHighlight lang="css">
.p-carousel {
    .p-carousel-header {
		h3 {
			font-weight: 500;
			font-size: 18px;
		}
	}

	.p-carousel-content {
		.p-carousel-item {
			.car-details {
				> .p-grid {
					border: 1px solid #dee2e6;
					border-radius: 3px;
					margin: .3rem;
					text-align: center;
					padding: 2em 0 2.25em 0;
				}
			}

			.car-data {
				.car-title {
					font-weight: 600;
					font-size: 20px;
					margin-top: 24px;
				}

				.car-subtitle {
					margin: .25em 0 2em 0;
				}

				button {
					margin-left: .5rem;

					&amp;:first-child {
						margin-left: 0;
					}
				}
			}
		}
	}

	&amp;.custom-carousel {
		.p-carousel-dot-icon  {
			width: 16px !important;
			height: 16px !important;
			border-radius: 50%;
		}
	}

	&amp;.p-carousel-horizontal {
		.p-carousel-content {
			.p-carousel-item {
				&amp;.p-carousel-item-start {
					.car-details {
						> .p-grid {
							margin-left: .6rem;
						}
					}
				}

				&amp;.p-carousel-item-end {
					.car-details {
						> .p-grid {
							margin-right: .6rem;
						}
					}
				}
			}
		}
	}
}

/* Dark Theme such as luna-amber, luna-blue, luna-green and luna-pink */
.dark-theme {
	.p-carousel {
		.p-carousel-content {
			.p-carousel-item {
				.car-details {
					> .p-grid {
						border: 1px solid #191919;
						background-color: #323232;
					}
				}
			}
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>