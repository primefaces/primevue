<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Skeleton from 'primevue/skeleton';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Skeleton displays a rectangle in its simplest form.</p>
<CodeHighlight>
&lt;Skeleton /&gt;
</CodeHighlight>

				<h5>Circle</h5>
				<p>The other option is the circle by setting <i>shape</i> property as "circle".</p>
<CodeHighlight>
&lt;Skeleton shape="circle"/&gt;
</CodeHighlight>

				<h5>Size</h5>
				<p>In order to customize the size, use <i>width</i> and <i>height</i> properties for rectangles and <i>size</i> for Circle and Square shapes.</p>
<CodeHighlight>
&lt;Skeleton width="100%" height="2rem" /&gt;
&lt;Skeleton shape="circle" size="50px" /&gt;
</CodeHighlight>

				<h5>Border Radius</h5>
				<p>The default border radius of a rectangle is specified by the theme and can be overriden using the <i>borderRadius</i> property.</p>
<CodeHighlight>
&lt;Skeleton borderRadius="16px" /&gt;
</CodeHighlight>

				<h5>Animation</h5>
				<p>Animation can be turned of by setting <i>animation</i> to "none".</p>
<CodeHighlight>
&lt;Skeleton animation="none" /&gt;
</CodeHighlight>

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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/skeleton" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
	&lt;div class="p-grid p-formgrid"&gt;
		&lt;div class="p-field p-col-12 p-md-6"&gt;
			&lt;h5&gt;Rectangle&lt;/h5&gt;
			&lt;Skeleton class="p-mb-2"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton width="10rem" class="p-mb-2"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton width="5rem" class="p-mb-2"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton height="2rem" class="p-mb-2"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton width="10rem" height="4rem"&gt;&lt;/Skeleton&gt;
		&lt;/div&gt;
		&lt;div class="p-field p-col-12 p-md-6"&gt;
			&lt;h5&gt;Rounded&lt;/h5&gt;
			&lt;Skeleton class="p-mb-2" borderRadius="16px"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton width="10rem" class="p-mb-2" borderRadius="16px"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton width="5rem" borderRadius="16px" class="p-mb-2"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton height="2rem" class="p-mb-2" borderRadius="16px"&gt;&lt;/Skeleton&gt;
			&lt;Skeleton width="10rem" height="4rem" borderRadius="16px"&gt;&lt;/Skeleton&gt;
		&lt;/div&gt;
		&lt;div class="p-field p-col-12 p-md-6"&gt;
			&lt;h5 class="p-mt-3"&gt;Square&lt;/h5&gt;
			&lt;div class="p-d-flex p-ai-end"&gt;
				&lt;Skeleton size="2rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
				&lt;Skeleton size="3rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
				&lt;Skeleton size="4rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
				&lt;Skeleton size="5rem"&gt;&lt;/Skeleton&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="p-field p-col-12 p-md-6"&gt;
			&lt;h5 class="p-mt-3"&gt;Circle&lt;/h5&gt;
			&lt;div class="p-d-flex p-ai-end"&gt;
				&lt;Skeleton shape="circle" size="2rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
				&lt;Skeleton shape="circle" size="3rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
				&lt;Skeleton shape="circle" size="4rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
				&lt;Skeleton shape="circle" size="5rem"&gt;&lt;/Skeleton&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;div class="card"&gt;
		&lt;div class="p-grid p-formgrid"&gt;
		&lt;div class="p-field p-col-12 p-md-6 p-pr-md-6 p-pr-0"&gt;
			&lt;h5&gt;Card&lt;/h5&gt;
			&lt;div class="custom-skeleton p-p-4"&gt;
				&lt;div class="p-d-flex p-mb-3"&gt;
					&lt;Skeleton shape="circle" size="4rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
					&lt;div&gt;
						&lt;Skeleton width="10rem" class="p-mb-2"&gt;&lt;/Skeleton&gt;
						&lt;Skeleton width="5rem" class="p-mb-2"&gt;&lt;/Skeleton&gt;
						&lt;Skeleton height=".5rem"&gt;&lt;/Skeleton&gt;
					&lt;/div&gt;
				&lt;/div&gt;
				&lt;Skeleton width="100%" height="150px"&gt;&lt;/Skeleton&gt;
				&lt;div class="p-d-flex p-jc-between p-mt-3"&gt;
					&lt;Skeleton width="4rem" height="2rem"&gt;&lt;/Skeleton&gt;
					&lt;Skeleton width="4rem" height="2rem"&gt;&lt;/Skeleton&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="p-field p-col-12 p-md-6"&gt;
			&lt;h5&gt;List&lt;/h5&gt;
			&lt;div class="custom-skeleton p-p-4"&gt;
				&lt;ul class="p-m-0 p-p-0"&gt;
					&lt;li class="p-mb-3"&gt;
						&lt;div class="p-d-flex"&gt;
							&lt;Skeleton shape="circle" size="4rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
							&lt;div style="flex: 1"&gt;
								&lt;Skeleton width="100%" class="p-mb-2"&gt;&lt;/Skeleton&gt;
								&lt;Skeleton width="75%"&gt;&lt;/Skeleton&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/li&gt;
					&lt;li class="p-mb-3"&gt;
						&lt;div class="p-d-flex"&gt;
							&lt;Skeleton shape="circle" size="4rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
							&lt;div style="flex: 1"&gt;
								&lt;Skeleton width="100%" class="p-mb-2"&gt;&lt;/Skeleton&gt;
								&lt;Skeleton width="75%"&gt;&lt;/Skeleton&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/li&gt;
					&lt;li class="p-mb-3"&gt;
						&lt;div class="p-d-flex"&gt;
							&lt;Skeleton shape="circle" size="4rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
							&lt;div style="flex: 1"&gt;
								&lt;Skeleton width="100%" class="p-mb-2"&gt;&lt;/Skeleton&gt;
								&lt;Skeleton width="75%"&gt;&lt;/Skeleton&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;div class="p-d-flex"&gt;
							&lt;Skeleton shape="circle" size="4rem" class="p-mr-2"&gt;&lt;/Skeleton&gt;
							&lt;div style="flex: 1"&gt;
								&lt;Skeleton width="100%" class="p-mb-2"&gt;&lt;/Skeleton&gt;
								&lt;Skeleton width="75%"&gt;&lt;/Skeleton&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;h5&gt;DataTable&lt;/h5&gt;
	&lt;DataTable :value="products"&gt;
		&lt;Column field="code" header="Code"&gt;
			&lt;template #body&gt;
				&lt;Skeleton&gt;&lt;/Skeleton&gt;
			&lt;/template&gt;
		&lt;/Column&gt;
		&lt;Column field="name" header="Name"&gt;
			&lt;template #body&gt;
				&lt;Skeleton&gt;&lt;/Skeleton&gt;
			&lt;/template&gt;
		&lt;/Column&gt;
		&lt;Column field="category" header="Category"&gt;
			&lt;template #body&gt;
				&lt;Skeleton&gt;&lt;/Skeleton&gt;
			&lt;/template&gt;
		&lt;/Column&gt;
		&lt;Column field="quantity" header="Quantity"&gt;
			&lt;template #body&gt;
				&lt;Skeleton&gt;&lt;/Skeleton&gt;
			&lt;/template&gt;
		&lt;/Column&gt;
	&lt;/DataTable&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

			</TabPanel>
		</TabView>
	</div>
</template>