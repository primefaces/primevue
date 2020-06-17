<template>
	<div class="content-section documentation flexgrid-demo">
		<TabView>
			<TabPanel header="Documentation">
                <h5>Install</h5>
                <p>PrimeFlex is available at npm, if you have an existing application run the following command to download it to your project.</p>
<CodeHighlight lang="js">
npm install primeflex --save
</CodeHighlight>

                <p>Then add the primeflex.css to your application</p>
<CodeHighlight lang="js">
import 'primeflex/primeflex.css';
</CodeHighlight>


				<h5>Getting Started</h5>
				<p>FlexGrid is a CSS utility based on flexbox. For more information about Flex, visit <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a>. A basic grid is defined by giving
					a container <i>p-grid</i> class and children the <i>p-col</i> class. Children of the grid will have the same width and scale according to the width of the parent.</p>
<CodeHighlight>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;2&lt;/div&gt;
	&lt;div class="p-col"&gt;3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid">
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">2</div>
	</div>
	<div class="p-col">
		<div class="box">3</div>
	</div>
</div>

				<h5>Direction</h5>
				<p>Default direction is <b>row</b> and <i>p-dir-*</i> class at the container defines the other possible directions which can be <b>row reverse</b>, <b>column</b> and <b>column reverse</b></p>
<CodeHighlight>
<!-- Row Reverse -->
&lt;div class="p-grid p-dir-rev"&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;2&lt;/div&gt;
	&lt;div class="p-col"&gt;3&lt;/div&gt;
&lt;/div&gt;

<!-- Column -->
&lt;div class="p-grid p-dir-col"&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;2&lt;/div&gt;
	&lt;div class="p-col"&gt;3&lt;/div&gt;
&lt;/div&gt;

<!-- Column Reverse -->
&lt;div class="p-grid p-dir-col-rev"&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;2&lt;/div&gt;
	&lt;div class="p-col"&gt;3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid p-dir-rev">
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">2</div>
	</div>
	<div class="p-col">
		<div class="box">3</div>
	</div>
</div>

<div class="p-grid p-dir-col">
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">2</div>
	</div>
	<div class="p-col">
		<div class="box">3</div>
	</div>
</div>

<div class="p-grid p-dir-col-rev">
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">2</div>
	</div>
	<div class="p-col">
		<div class="box">3</div>
	</div>
</div>
				<h5>12 Column Grid</h5>
				<p>FlexGrid includes a 12 column based layout utility where width of a column is defined with the <i>p-col-&#123;number&#125;</i> style class. Columns with prefined widths can be used with columns with auto width (p-col) as well.</p>

				<p>In the first example below, first column covers the 4 units out of 12 and the rest of the columns share the remaining space whereas in the second example, all three columns have explicit units.</p>
<CodeHighlight>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-4"&gt;4&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
	&lt;div class="p-col-2"&gt;2&lt;/div&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
	&lt;div class="p-col-4"&gt;4&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid">
	<div class="p-col-4">
		<div class="box">4</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
	<div class="p-col">
		<div class="box">1</div>
	</div>
</div>

<div class="p-grid">
	<div class="p-col-2">
		<div class="box">2</div>
	</div>
	<div class="p-col-6">
		<div class="box">6</div>
	</div>
	<div class="p-col-4">
		<div class="box">4</div>
	</div>
</div>

				<h5>MultiLine</h5>
				<p>When the number of columns exceed 12, columns wrap to a new line.</p>
<CodeHighlight>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid">
	<div class="p-col-6">
		<div class="box">6</div>
	</div>
	<div class="p-col-6">
		<div class="box">6</div>
	</div>
	<div class="p-col-6">
		<div class="box">6</div>
	</div>
	<div class="p-col-6">
		<div class="box">6</div>
	</div>
</div>

				<h5>Fixed Width Column</h5>
				<p>A column can have a fixed width while siblings having auto width. Apply <i>p-col-fixed</i> class to fix a column width.</p>
<CodeHighlight>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-fixed" style="width:100px"&gt;Fixed&lt;/div&gt;
	&lt;div class="p-col"&gt;Auto&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid">
	<div class="p-col-fixed" style="width:100px">
		<div class="box">100px</div>
	</div>
	<div class="p-col">
		<div class="box">auto</div>
	</div>
</div>
				<h5>Responsive</h5>
				<p>Responsive layout is achieved by applying breakpoint specific classes to the columns whereas <i>p-col-*</i> define the default behavior for mobile devices with small screens. Four screen sizes are supported with different breakpoints.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Prefix</th>
							<th>Devices</th>
							<th>Media Query</th>
							<th>Example</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>p-sm-*</td>
							<td>Small devices</td>
							<td>min-width: 576px</td>
							<td>p-sm-6, p-sm-4</td>
						</tr>
						<tr>
							<td>p-md-*</td>
							<td>Medium sized devices such as tablets</td>
							<td>min-width: 768px</td>
							<td>p-md-2, p-md-8</td>
						</tr>
						<tr>
							<td>p-lg-*</td>
							<td>Devices with large screen like desktops</td>
							<td>min-width: 992px</td>
							<td>p-lg-6, p-lg-12</td>
						</tr>
						<tr>
							<td>p-xl-*</td>
							<td>Big screen monitors</td>
							<td>min-width: 1200px</td>
							<td>p-xl-2, ui-xl-10</td>
						</tr>
						</tbody>
					</table>
				</div>

				<p>In example below, large screens display 4 columns, medium screens display 2 columns in 2 rows and finally on small devices, columns are stacked.</p>
<CodeHighlight>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;A&lt;/div&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;B&lt;/div&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;C&lt;/div&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;D&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid">
	<div class="p-col-12 p-md-6 p-lg-3">
		<div class="box">A</div>
	</div>
	<div class="p-col-12 p-md-6 p-lg-3">
		<div class="box">B</div>
	</div>
	<div class="p-col-12 p-md-6 p-lg-3">
		<div class="box">C</div>
	</div>
	<div class="p-col-12 p-md-6 p-lg-3">
		<div class="box">D</div>
	</div>
</div>

				<h5>Horizontal Alignment</h5>
				<p><i>p-justify-*</i> classes are used on the container element to define the alignment along the main axis.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Class</th>
							<th>Description</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>p-justify-start (default)</td>
							<td>Items are packed toward the start line</td>
						</tr>
						<tr>
							<td>p-justify-end</td>
							<td>Items are packed toward to end line</td>
						</tr>
						<tr>
							<td>p-justify-center</td>
							<td>Items are centered along the line</td>
						</tr>
						<tr>
							<td>p-justify-between</td>
							<td>Items are evenly distributed in the line; first item is on the start line, last item on the end line</td>
						</tr>
						<tr>
							<td>p-justify-around</td>
							<td>Items are evenly distributed in the line with equal space around them.</td>
						</tr>
						<tr>
							<td>p-justify-even</td>
							<td>Items are distributed so that the spacing between any two items (and the space to the edges) is equal.</td>
						</tr>
						</tbody>
					</table>
				</div>
<CodeHighlight>
&lt;div class="p-grid p-justify-between"&gt;
	&lt;div class="p-col-2"&gt;2&lt;/div&gt;
	&lt;div class="p-col-1"&gt;1&lt;/div&gt;
	&lt;div class="p-col-4"&gt;4&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid p-justify-between">
	<div class="p-col-2">
		<div class="box">2</div>
	</div>
	<div class="p-col-1">
		<div class="box">1</div>
	</div>
	<div class="p-col-4">
		<div class="box">4</div>
	</div>
</div>

				<h5>Vertical Alignment</h5>
				<p><i>p-align-*</i> classes are used on the container element to define the alignment along the cross axis.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Class</th>
							<th>Description</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>p-align-stretch (default)</td>
							<td>Stretch to fill the container.</td>
						</tr>
						<tr>
							<td>p-align-start</td>
							<td>Cross-start margin edge of the items is placed on the cross-start line</td>
						</tr>
						<tr>
							<td>p-align-end</td>
							<td>Cross-end margin edge of the items is placed on the cross-end line</td>
						</tr>
						<tr>
							<td>p-align-center</td>
							<td>Items are centered in the cross-axis</td>
						</tr>
						<tr>
							<td>p-align-baseline</td>
							<td>Items are aligned such as their baselines align</td>
						</tr>
						</tbody>
					</table>
				</div>
<CodeHighlight>
&lt;div class="p-grid p-align-center"&gt;
	&lt;div class="p-col"&gt;4&lt;/div&gt;
	&lt;div class="p-col"&gt;4&lt;/div&gt;
	&lt;div class="p-col"&gt;4&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid p-align-center vertical-container">
	<div class="p-col">
		<div class="box">4</div>
	</div>
	<div class="p-col">
		<div class="box">4</div>
	</div>
	<div class="p-col">
		<div class="box">4</div>
	</div>
</div>
				<p>Vertical alignment can also be defined at column level with the <i>p-align-col-*</i> classes.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Class</th>
							<th>Description</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>p-col-align-stretch</td>
							<td>Stretch to fill the container.</td>
						</tr>
						<tr>
							<td>p-col-align-start</td>
							<td>Cross-start margin edge of the items is placed on the cross-start line</td>
						</tr>
						<tr>
							<td>p-col-align-end</td>
							<td>Cross-end margin edge of the items is placed on the cross-end line</td>
						</tr>
						<tr>
							<td>p-col-align-center</td>
							<td>Items are centered in the cross-axis</td>
						</tr>
						<tr>
							<td>p-col-align-baseline</td>
							<td>Items are aligned such as their baselines align</td>
						</tr>
						</tbody>
					</table>
				</div>
<CodeHighlight>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col p-col-align-start"&gt;4&lt;/div&gt;
	&lt;div class="p-col p-col-align-center"&gt;4&lt;/div&gt;
	&lt;div class="p-col p-col-align-end"&gt;4&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid vertical-container">
	<div class="p-col p-col-align-start">
		<div class="box">4</div>
	</div>
	<div class="p-col p-col-align-center">
		<div class="box">4</div>
	</div>
	<div class="p-col p-col-align-end">
		<div class="box">4</div>
	</div>
</div>

				<h5>Offset</h5>
				<p>Offset classes allow defining a left margin on a column to avoid adding empty columns for spacing.</p>
<CodeHighlight>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-6 p-offset-3"&gt;6&lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
	&lt;div class="p-col-4"&gt;4&lt;/div&gt;
	&lt;div class="p-col-4 p-offset-4"&gt;4&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid">
	<div class="p-col-6 p-offset-3">
		<div class="box">6</div>
	</div>
</div>

<div class="p-grid">
	<div class="p-col-4">
		<div class="box">4</div>
	</div>
	<div class="p-col-4 p-offset-4">
		<div class="box">4</div>
	</div>
</div>
				<p>The list of offset classes varying within a range of 1 to 12.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Prefix</th>
							<th>Devices</th>
							<th>Media Query</th>
							<th>Example</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>p-col-offset-*</td>
							<td>All devices</td>
							<td>All screens</td>
							<td>p-col-offset-6, p-col-offset-4</td>
						</tr>
						<tr>
							<td>p-sm-offset-*</td>
							<td>Small devices</td>
							<td>min-width: 576px</td>
							<td>p-sm-offset-6, p-sm-offset-4</td>
						</tr>
						<tr>
							<td>p-md-offset-*</td>
							<td>Medium sized devices such as tablets</td>
							<td>min-width: 768px</td>
							<td>p-md-offset-6, p-md-offset-4</td>
						</tr>
						<tr>
							<td>p-lg-offset-*</td>
							<td>Devices with large screen like desktops</td>
							<td>min-width: 992px</td>
							<td>p-lg-offset-6, p-lg-offset-4</td>
						</tr>
						<tr>
							<td>p-xl-offset-*</td>
							<td>Big screen monitors</td>
							<td>min-width: 1200px</td>
							<td>p-xl-offset-6, p-xl-offset-4</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h5>Nested</h5>
				<p>Columns can be nested to create more complex layouts.</p>
<CodeHighlight>
&lt;div class="p-grid nested-grid"&gt;
	&lt;div class="p-col-8"&gt;
		&lt;div class="p-grid"&gt;
			&lt;div class="p-col-6"&gt;
				6
			&lt;/div&gt;
			&lt;div class="p-col-6"&gt;
				6
			&lt;/div&gt;
			&lt;div class="p-col-12"&gt;
				12
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="p-col-4"&gt;
		4
	&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

<div class="p-grid nested-grid">
	<div class="p-col-8">
		<div class="p-grid">
			<div class="p-col-6">
				<div class="box">6</div>
			</div>
			<div class="p-col-6">
				<div class="box">6</div>
			</div>
			<div class="p-col-12">
				<div class="box">12</div>
			</div>
		</div>
	</div>
	<div class="p-col-4">
		<div class="box box-stretched">4</div>
	</div>
</div>

				<h5>Gutter</h5>
				<p>A .5 em padding is applied to each column along with negative margins on the container element, in case you'd like to remove these gutters, apply
					<i>p-nogutter</i> class to the container. Gutters can also be removed on an ndividual columns with the same class name.
				</p>
<CodeHighlight>
&lt;div class="p-grid p-nogutter"&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col p-nogutter"&gt;2&lt;/div&gt;
	&lt;div class="p-col"&gt;3&lt;/div&gt;
&lt;/div&gt;
</CodeHighlight>

				<h5>Customization</h5>
				<p>PrimeFlex allows customization of breakpoints and gutters via SASS variables, visit the <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> repository to get access to the primeflex.scss file to build your own customized Grid.</p>

                <div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Variable</th>
                                <th>Default</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>$sm</td>
                                <td>576px</td>
                            </tr>
                            <tr>
                                <td>$md</td>
                                <td>768</td>
                            </tr>
                            <tr>
                                <td>$lg</td>
                                <td>992</td>
                            </tr>
                            <tr>
                                <td>$xl</td>
                                <td>1200px</td>
                            </tr>
                            <tr>
                                <td>$gutter</td>
                                <td>.5em</td>
                            </tr>
						</tbody>
					</table>
				</div>

			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/flexgrid" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;3&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Dynamic&lt;/h3&gt;
&lt;Button type="button" icon="pi pi-plus" title="Add Column" @click="addColumn" :disabled="columns.length === 20" style="margin-right: .5em" /&gt;
&lt;Button type="button" icon="pi pi-minus" title="Remove Column" @click="removeColumn" :disabled="columns.length === 1" /&gt;

&lt;div style="margin-top: .5em"&gt;
    &lt;transition-group name="dynamic-box" tag="div" class="p-grid"&gt;
        &lt;div v-for="col of columns" :key="col" class="p-col"&gt;
            &lt;div class="box"&gt;{{col}}&lt;/div&gt;
        &lt;/div&gt;
    &lt;/transition-group&gt;
&lt;/div&gt;

&lt;h3&gt;Reverse Direction&lt;/h3&gt;
&lt;div class="p-grid p-dir-rev"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;3&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Column Direction&lt;/h3&gt;
&lt;div class="p-grid p-dir-col"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;3&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Reverse Column Direction&lt;/h3&gt;
&lt;div class="p-grid p-dir-col-rev"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;3&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;12 Column Grid&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-6"&gt;
        &lt;div class="box"&gt;6&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
    &lt;div class="p-col-8"&gt;
        &lt;div class="box"&gt;8&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;MultiLine&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-6"&gt;
        &lt;div class="box"&gt;6&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-6"&gt;
        &lt;div class="box"&gt;6&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-6"&gt;
        &lt;div class="box"&gt;6&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-6"&gt;
        &lt;div class="box"&gt;6&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Fixed Width Column&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-fixed" style="width:100px"&gt;
        &lt;div class="box"&gt;100px&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;auto&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Responsive&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-12 p-md-6 p-lg-3"&gt;
        &lt;div class="box"&gt;p-col-12 p-md-6 p-lg-3&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-6 p-lg-3"&gt;
        &lt;div class="box"&gt;p-col-12 p-md-6 p-lg-3&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-6 p-lg-3"&gt;
        &lt;div class="box"&gt;p-col-12 p-md-6 p-lg-3&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-6 p-lg-3"&gt;
        &lt;div class="box"&gt;p-col-12 p-md-6 p-lg-3&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Alignment - Start&lt;/h3&gt;
&lt;div class="p-grid p-justify-start"&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-1"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Alignment - End&lt;/h3&gt;
&lt;div class="p-grid p-justify-end"&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-1"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Alignment - Center&lt;/h3&gt;
&lt;div class="p-grid p-justify-center"&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-1"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Alignment - Between&lt;/h3&gt;
&lt;div class="p-grid p-justify-between"&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-1"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Alignment - Around&lt;/h3&gt;
&lt;div class="p-grid p-justify-around"&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-1"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Horizontal Alignment - Even&lt;/h3&gt;
&lt;div class="p-grid p-justify-even"&gt;
    &lt;div class="p-col-2"&gt;
        &lt;div class="box"&gt;2&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-1"&gt;
        &lt;div class="box"&gt;1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical Alignment - Start&lt;/h3&gt;
&lt;div class="p-grid p-align-start vertical-container"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical Alignment - End&lt;/h3&gt;
&lt;div class="p-grid p-align-end vertical-container"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical Alignment - Center&lt;/h3&gt;
&lt;div class="p-grid p-align-center vertical-container"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical Alignment - Stretch&lt;/h3&gt;
&lt;div class="p-grid p-align-stretch vertical-container"&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box box-stretched"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box box-stretched"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;div class="box box-stretched"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Vertical Alignment - Per Column&lt;/h3&gt;
&lt;div class="p-grid vertical-container"&gt;
    &lt;div class="p-col p-col-align-start"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col p-col-align-center"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col p-col-align-end"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Offset&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-6 p-offset-3"&gt;
        &lt;div class="box"&gt;6&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4 p-offset-4"&gt;
        &lt;div class="box"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Nested&lt;/h3&gt;
&lt;div class="p-grid nested-grid"&gt;
    &lt;div class="p-col-8"&gt;
        &lt;div class="p-grid"&gt;
            &lt;div class="p-col-6"&gt;
                &lt;div class="box"&gt;6&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-col-6"&gt;
                &lt;div class="box"&gt;6&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="p-col-12"&gt;
                &lt;div class="box"&gt;12&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-4"&gt;
        &lt;div class="box box-stretched"&gt;4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Panels&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col"&gt;
        &lt;Panel header="Godfather"&gt;
            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        &lt;/Panel&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;Panel header="Godfather"&gt;
            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        &lt;/Panel&gt;
    &lt;/div&gt;
    &lt;div class="p-col"&gt;
        &lt;Panel header="Godfather"&gt;
            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        &lt;/Panel&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Sample Layout&lt;/h3&gt;
&lt;div class="p-grid sample-layout"&gt;
    &lt;div class="p-col-12 p-md-2"&gt;
        Menu
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-10 p-col-nogutter"&gt;
        &lt;div class="p-col-12 p-col-nogutter"&gt;
            Top Bar
        &lt;/div&gt;
        &lt;div class="p-col-12"&gt;
            &lt;div class="p-grid"&gt;
                &lt;div class="p-col-12 p-md-4"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec
                    dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh.
                    In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante&lt;/div&gt;
                &lt;div class="p-col-12 p-md-4"&gt;Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis
                    tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh
                    at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique
                    nulla nec, rutrum sapien.&lt;/div&gt;
                &lt;div class="p-col-12 p-md-4"&gt;Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis
                    sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis.
                    Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis,
                    condimentum eget hendrerit sit amet.&lt;/div&gt;

                &lt;div class="p-col-6 p-md-3"&gt;&lt;img alt="Galleria 1" src="demo/images/nature/nature1.jpg" style="width: 100%" /&gt;&lt;/div&gt;
                &lt;div class="p-col-6 p-md-3"&gt;&lt;img alt="Galleria 2" src="demo/images/nature/nature2.jpg" style="width: 100%" /&gt;&lt;/div&gt;
                &lt;div class="p-col-6 p-md-3"&gt;&lt;img alt="Galleria 3" src="demo/images/nature/nature3.jpg" style="width: 100%" /&gt;&lt;/div&gt;
                &lt;div class="p-col-6 p-md-3"&gt;&lt;img alt="Galleria 4" src="demo/images/nature/nature4.jpg" style="width: 100%" /&gt;&lt;/div&gt;

                &lt;div class="p-col-12 p-md-6"&gt;Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien
                    facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque
                    neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.&lt;/div&gt;
                &lt;div class="p-col-12 p-md-6"&gt;Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam
                    pretium leo et egestas luctus. Nunc facilisis gravida tellus.&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12"&gt;
        Footer
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			columns: [0, 1, 2, 3, 4, 5]
		}
	},
	methods: {
		addColumn() {
			this.columns = [...this.columns, this.columns.length];
		},
		removeColumn() {
			this.columns.pop();
		}
	}
}
</CodeHighlight>

<CodeHighlight lang="css">
.flexgrid-demo {
	.box,
	.sample-layout > div {
		background-color: #f1f1f1;
		text-align: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-radius: 4px;
	}

	.box-stretched {
		height: 100%;
	}

	.sample-layout {
		margin: 0;
	}

	.sample-layout > div {
		border: 1px solid #ffffff;
	}

	.vertical-container {
		margin: 0;
		height: 200px;
		background: #c0c0c0;
		border-radius: 4px;
	}

	.nested-grid .p-col-4 {
		padding-bottom: 1rem;
	}

	.dynamic-box-enter-active, .dynamic-box-leave-active {
		transition: all .5s;
	}

	.dynamic-box-enter, .dynamic-box-leave-to {
		opacity: 0;
	}

	.dynamic-box-enter, .dynamic-box-leave-to {
		transform: translateX(30px);
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>