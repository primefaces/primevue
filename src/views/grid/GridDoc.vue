<template>
	<AppDoc name="GridDemo" :sources="sources" github="grid/GridDemo.vue">
		<h5>Getting Started</h5>
		<p>FlexGrid is a CSS utility based on flexbox. For more information about Flex, visit <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a>. A basic grid is defined by giving
			a container <i>p-grid</i> class and children the <i>p-col</i> class. Children of the grid will have the same width and scale according to the width of the parent.</p>
<pre v-code><code>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col"&gt;2&lt;/div&gt;
	&lt;div class="p-col"&gt;3&lt;/div&gt;
&lt;/div&gt;

</code></pre>

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

		<h5>12 Column Grid</h5>
		<p>FlexGrid includes a 12 column based layout utility where width of a column is defined with the <i>p-col-&#123;number&#125;</i> style class. Columns with prefined widths can be used with columns with auto width (p-col) as well.</p>

		<p>In the first example below, first column covers the 4 units out of 12 and the rest of the columns share the remaining space whereas in the second example, all three columns have explicit units.</p>
<pre v-code><code>
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

</code></pre>

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
<pre v-code><code>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
	&lt;div class="p-col-6"&gt;6&lt;/div&gt;
&lt;/div&gt;

</code></pre>

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
<pre v-code><code>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-fixed" style="width:100px"&gt;Fixed&lt;/div&gt;
	&lt;div class="p-col"&gt;Auto&lt;/div&gt;
&lt;/div&gt;

</code></pre>

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
<pre v-code><code>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;A&lt;/div&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;B&lt;/div&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;C&lt;/div&gt;
	&lt;div class="p-col-12 p-md-6 p-lg-3"&gt;D&lt;/div&gt;
&lt;/div&gt;

</code></pre>

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
		<h5>Offset</h5>
		<p>Offset classes allow defining a left margin on a column to avoid adding empty columns for spacing.</p>
<pre v-code><code>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-6 p-offset-3"&gt;6&lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
	&lt;div class="p-col-4"&gt;4&lt;/div&gt;
	&lt;div class="p-col-4 p-offset-4"&gt;4&lt;/div&gt;
&lt;/div&gt;

</code></pre>

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
<pre v-code><code>
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

</code></pre>

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
		<p>A .5rem padding is applied to each column along with negative margins on the container element, in case you'd like to remove these gutters, apply
			<i>p-nogutter</i> class to the container. Gutters can also be removed on an ndividual columns with the same class name.
		</p>
<pre v-code><code>
&lt;div class="p-grid p-nogutter"&gt;
	&lt;div class="p-col"&gt;1&lt;/div&gt;
	&lt;div class="p-col p-nogutter"&gt;2&lt;/div&gt;
	&lt;div class="p-col"&gt;3&lt;/div&gt;
&lt;/div&gt;

</code></pre>

        <div class="p-grid p-nogutter">
            <div class="p-col">
                <div class="box">1</div>
            </div>
            <div class="p-col p-nogutter">
                <div class="box">2</div>
            </div>
            <div class="p-col">
                <div class="box">3</div>
            </div>
        </div>
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
    <div class="flexgrid-demo p-p-2">
        <h5>Basic</h5>
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

        <h5>Dynamic</h5>
        <Button type="button" icon="pi pi-plus" title="Add Column" @click="addColumn" :disabled="columns.length === 20" style="margin-right: .5em" />
        <Button type="button" icon="pi pi-minus" title="Remove Column" @click="removeColumn" :disabled="columns.length === 1" />

        <div style="margin-top: .5em">
            <transition-group name="dynamic-box" tag="div" class="p-grid">
                <div v-for="col of columns" :key="col" class="p-col">
                    <div class="box">{{col}}</div>
                </div>
            </transition-group>
        </div>

        <h5>Reverse Direction</h5>
        <div class="p-grid p-flex-row-reverse">
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

        <h5>Column Direction</h5>
        <div class="p-grid p-flex-column">
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

        <h5>Reverse Column Direction</h5>
        <div class="p-grid p-flex-column-reverse">
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

        <div class="p-grid">
            <div class="p-col-8">
                <div class="box">8</div>
            </div>
            <div class="p-col-2">
                <div class="box">2</div>
            </div>
            <div class="p-col-2">
                <div class="box">2</div>
            </div>
        </div>

        <h5>MultiLine</h5>
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
        <div class="p-grid">
            <div class="p-col-fixed" style="width:100px">
                <div class="box">100px</div>
            </div>
            <div class="p-col">
                <div class="box">auto</div>
            </div>
        </div>

        <h5>Responsive</h5>
        <div class="p-grid">
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
        </div>

        <h5>Horizontal Alignment - Start</h5>
        <div class="p-grid p-jc-start">
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

        <h5>Horizontal Alignment - End</h5>
        <div class="p-grid p-jc-end">
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

        <h5>Horizontal Alignment - Center</h5>
        <div class="p-grid p-jc-center">
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

        <h5>Horizontal Alignment - Between</h5>
        <div class="p-grid p-jc-between">
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

        <h5>Horizontal Alignment - Around</h5>
        <div class="p-grid p-jc-around">
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

        <h5>Horizontal Alignment - Even</h5>
        <div class="p-grid p-jc-evenly">
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

        <h5>Vertical Alignment - Start</h5>
        <div class="p-grid p-ai-start vertical-container">
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

        <h5>Vertical Alignment - End</h5>
        <div class="p-grid p-ai-end vertical-container">
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

        <h5>Vertical Alignment - Center</h5>
        <div class="p-grid p-ai-center vertical-container">
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

        <h5>Vertical Alignment - Stretch</h5>
        <div class="p-grid p-ai-stretch vertical-container">
            <div class="p-col">
                <div class="box box-stretched">4</div>
            </div>
            <div class="p-col">
                <div class="box box-stretched">4</div>
            </div>
            <div class="p-col">
                <div class="box box-stretched">4</div>
            </div>
        </div>

        <h5>Vertical Alignment - Per Column</h5>
        <div class="p-grid vertical-container">
            <div class="p-col p-as-start">
                <div class="box">4</div>
            </div>
            <div class="p-col p-as-center">
                <div class="box">4</div>
            </div>
            <div class="p-col p-as-end">
                <div class="box">4</div>
            </div>
        </div>

        <h5>Offset</h5>
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

        <h5>Nested</h5>
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

        <h5>Panels</h5>
        <div class="p-grid">
            <div class="p-col">
                <Panel header="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>
            </div>
            <div class="p-col">
                <Panel header="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>
            </div>
            <div class="p-col">
                <Panel header="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>
            </div>
        </div>
    </div>
</template>

<script>
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
<\\/script>

<style lang="scss">
.flexgrid-demo {
	background-color: var(--surface-b);
  	color: var(--text-color);

    .box {
        background-color: var(--surface-e);
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 4px;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }

    .box-stretched {
        height: 100%;
    }

    .vertical-container {
        margin: 0;
        height: 200px;
        background: var(--surface-d);
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

    p {
        margin: 0;
    }
}
</style>

`
				},
				'composition-api': {
					tabName: 'Composition API Source',
					content: `
<template>
    <div class="flexgrid-demo p-p-2">
        <h5>Basic</h5>
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

        <h5>Dynamic</h5>
        <Button type="button" icon="pi pi-plus" title="Add Column" @click="addColumn" :disabled="columns.length === 20" style="margin-right: .5em" />
        <Button type="button" icon="pi pi-minus" title="Remove Column" @click="removeColumn" :disabled="columns.length === 1" />

        <div style="margin-top: .5em">
            <transition-group name="dynamic-box" tag="div" class="p-grid">
                <div v-for="col of columns" :key="col" class="p-col">
                    <div class="box">{{col}}</div>
                </div>
            </transition-group>
        </div>

        <h5>Reverse Direction</h5>
        <div class="p-grid p-flex-row-reverse">
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

        <h5>Column Direction</h5>
        <div class="p-grid p-flex-column">
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

        <h5>Reverse Column Direction</h5>
        <div class="p-grid p-flex-column-reverse">
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

        <div class="p-grid">
            <div class="p-col-8">
                <div class="box">8</div>
            </div>
            <div class="p-col-2">
                <div class="box">2</div>
            </div>
            <div class="p-col-2">
                <div class="box">2</div>
            </div>
        </div>

        <h5>MultiLine</h5>
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
        <div class="p-grid">
            <div class="p-col-fixed" style="width:100px">
                <div class="box">100px</div>
            </div>
            <div class="p-col">
                <div class="box">auto</div>
            </div>
        </div>

        <h5>Responsive</h5>
        <div class="p-grid">
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-12 p-md-6 p-lg-3">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
        </div>

        <h5>Horizontal Alignment - Start</h5>
        <div class="p-grid p-jc-start">
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

        <h5>Horizontal Alignment - End</h5>
        <div class="p-grid p-jc-end">
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

        <h5>Horizontal Alignment - Center</h5>
        <div class="p-grid p-jc-center">
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

        <h5>Horizontal Alignment - Between</h5>
        <div class="p-grid p-jc-between">
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

        <h5>Horizontal Alignment - Around</h5>
        <div class="p-grid p-jc-around">
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

        <h5>Horizontal Alignment - Even</h5>
        <div class="p-grid p-jc-evenly">
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

        <h5>Vertical Alignment - Start</h5>
        <div class="p-grid p-ai-start vertical-container">
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

        <h5>Vertical Alignment - End</h5>
        <div class="p-grid p-ai-end vertical-container">
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

        <h5>Vertical Alignment - Center</h5>
        <div class="p-grid p-ai-center vertical-container">
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

        <h5>Vertical Alignment - Stretch</h5>
        <div class="p-grid p-ai-stretch vertical-container">
            <div class="p-col">
                <div class="box box-stretched">4</div>
            </div>
            <div class="p-col">
                <div class="box box-stretched">4</div>
            </div>
            <div class="p-col">
                <div class="box box-stretched">4</div>
            </div>
        </div>

        <h5>Vertical Alignment - Per Column</h5>
        <div class="p-grid vertical-container">
            <div class="p-col p-as-start">
                <div class="box">4</div>
            </div>
            <div class="p-col p-as-center">
                <div class="box">4</div>
            </div>
            <div class="p-col p-as-end">
                <div class="box">4</div>
            </div>
        </div>

        <h5>Offset</h5>
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

        <h5>Nested</h5>
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

        <h5>Panels</h5>
        <div class="p-grid">
            <div class="p-col">
                <Panel header="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>
            </div>
            <div class="p-col">
                <Panel header="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>
            </div>
            <div class="p-col">
                <Panel header="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const columns = ref([0, 1, 2, 3, 4, 5]);
		const addColumn = () => {
            columns.value = [...columns.value, columns.value.length];
        };
        const removeColumn = () => {
            columns.value.pop();
        };

		return { columns, addColumn, removeColumn }
    }
}
<\\/script>

<style lang="scss">
.flexgrid-demo {
	background-color: var(--surface-b);
  	color: var(--text-color);

    .box {
        background-color: var(--surface-e);
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 4px;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }

    .box-stretched {
        height: 100%;
    }

    .vertical-container {
        margin: 0;
        height: 200px;
        background: var(--surface-d);
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

    p {
        margin: 0;
    }
}
</style>

`
				},
                'browser-source': {
					tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/panel/panel.min.js"><\\/script>`,
					content: `<div id="app">
            <div class="flexgrid-demo p-p-2">
                <h5>Basic</h5>
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

                <h5>Dynamic</h5>
                <p-button type="button" icon="pi pi-plus" title="Add Column" @click="addColumn" :disabled="columns.length === 20" style="margin-right: .5em"></p-button>
                <p-button type="button" icon="pi pi-minus" title="Remove Column" @click="removeColumn" :disabled="columns.length === 1"></p-button>

                <div style="margin-top: .5em">
                    <transition-group name="dynamic-box" tag="div" class="p-grid">
                        <div v-for="col of columns" :key="col" class="p-col">
                            <div class="box">{{col}}</div>
                        </div>
                    </transition-group>
                </div>

                <h5>Reverse Direction</h5>
                <div class="p-grid p-flex-row-reverse">
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

                <h5>Column Direction</h5>
                <div class="p-grid p-flex-column">
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

                <h5>Reverse Column Direction</h5>
                <div class="p-grid p-flex-column-reverse">
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

                <div class="p-grid">
                    <div class="p-col-8">
                        <div class="box">8</div>
                    </div>
                    <div class="p-col-2">
                        <div class="box">2</div>
                    </div>
                    <div class="p-col-2">
                        <div class="box">2</div>
                    </div>
                </div>

                <h5>MultiLine</h5>
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
                <div class="p-grid">
                    <div class="p-col-fixed" style="width:100px">
                        <div class="box">100px</div>
                    </div>
                    <div class="p-col">
                        <div class="box">auto</div>
                    </div>
                </div>

                <h5>Responsive</h5>
                <div class="p-grid">
                    <div class="p-col-12 p-md-6 p-lg-3">
                        <div class="box">p-col-12 p-md-6 p-lg-3</div>
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-3">
                        <div class="box">p-col-12 p-md-6 p-lg-3</div>
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-3">
                        <div class="box">p-col-12 p-md-6 p-lg-3</div>
                    </div>
                    <div class="p-col-12 p-md-6 p-lg-3">
                        <div class="box">p-col-12 p-md-6 p-lg-3</div>
                    </div>
                </div>

                <h5>Horizontal Alignment - Start</h5>
                <div class="p-grid p-jc-start">
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

                <h5>Horizontal Alignment - End</h5>
                <div class="p-grid p-jc-end">
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

                <h5>Horizontal Alignment - Center</h5>
                <div class="p-grid p-jc-center">
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

                <h5>Horizontal Alignment - Between</h5>
                <div class="p-grid p-jc-between">
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

                <h5>Horizontal Alignment - Around</h5>
                <div class="p-grid p-jc-around">
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

                <h5>Horizontal Alignment - Even</h5>
                <div class="p-grid p-jc-evenly">
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

                <h5>Vertical Alignment - Start</h5>
                <div class="p-grid p-ai-start vertical-container">
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

                <h5>Vertical Alignment - End</h5>
                <div class="p-grid p-ai-end vertical-container">
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

                <h5>Vertical Alignment - Center</h5>
                <div class="p-grid p-ai-center vertical-container">
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

                <h5>Vertical Alignment - Stretch</h5>
                <div class="p-grid p-ai-stretch vertical-container">
                    <div class="p-col">
                        <div class="box box-stretched">4</div>
                    </div>
                    <div class="p-col">
                        <div class="box box-stretched">4</div>
                    </div>
                    <div class="p-col">
                        <div class="box box-stretched">4</div>
                    </div>
                </div>

                <h5>Vertical Alignment - Per Column</h5>
                <div class="p-grid vertical-container">
                    <div class="p-col p-as-start">
                        <div class="box">4</div>
                    </div>
                    <div class="p-col p-as-center">
                        <div class="box">4</div>
                    </div>
                    <div class="p-col p-as-end">
                        <div class="box">4</div>
                    </div>
                </div>

                <h5>Offset</h5>
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

                <h5>Nested</h5>
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

                <h5>Panels</h5>
                <div class="p-grid">
                    <div class="p-col">
                        <p-panel header="Header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </p-panel>
                    </div>
                    <div class="p-col">
                        <p-panel header="Header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </p-panel>
                    </div>
                    <div class="p-col">
                        <p-panel header="Header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </p-panel>
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const columns = ref([0, 1, 2, 3, 4, 5]);
                const addColumn = () => {
                    columns.value = [...columns.value, columns.value.length];
                };
                const removeColumn = () => {
                    columns.value.pop();
                };

                return { columns, addColumn, removeColumn }
            },
            components: {
                "p-button": primevue.button,
                "p-panel": primevue.panel
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style lang="scss">
        .flexgrid-demo {
            background-color: var(--surface-b);
            color: var(--text-color);
        }

        .flexgrid-demo .box {
            background-color: var(--surface-e);
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-radius: 4px;
            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        }

        .flexgrid-demo .box-stretched {
            height: 100%;
        }

        .flexgrid-demo .vertical-container {
            margin: 0;
            height: 200px;
            background: var(--surface-d);
            border-radius: 4px;
        }

        .flexgrid-demo .nested-grid .p-col-4 {
            padding-bottom: 1rem;
        }

        .flexgrid-demo .dynamic-box-enter-active, .flexgrid-demo .dynamic-box-leave-active {
            transition: all .5s;
        }

        .flexgrid-demo .dynamic-box-enter, .flexgrid-demo .dynamic-box-leave-to {
            opacity: 0;
        }

        .flexgrid-demo .dynamic-box-enter, .flexgrid-demo .dynamic-box-leave-to {
            transform: translateX(30px);
        }

        .flexgrid-demo p {
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