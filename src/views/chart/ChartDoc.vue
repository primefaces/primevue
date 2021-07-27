<template>
	<div class="content-section documentation">
        <h1>ChartModel</h1>
        <p>Chart components are based on <a href="https://www.chartjs.org/">Charts.js</a>, an open source HTML5 based charting library.</p>

        <h5>Getting Started</h5>
        <p>Chart component is a wrapper around on <a href="https://www.chartjs.org/docs/3.3.2/">Chart.js 3.3.2+</a> so chart.js needs to be included in your project.
        For a complete documentation and samples please refer to the <a href="https://www.chartjs.org/">chart.js website</a>.</p>
 <pre v-code.script><code>
npm install chart.js --save

</code></pre>

		<h5>Import</h5>
<pre v-code.script><code>
import Chart from 'primevue/chart';

</code></pre>

		<h5>Chart Types</h5>
		<p>Chart type is defined using the <i>type</i> property. Currently there are 6 options available; <b>pie</b>, <b>doughnut</b>, <b>line</b>, <b>bar</b>, <b>radar</b> and <b>polarArea</b>.</p>

		<h5>Data</h5>
		<p>Data of a chart is provided using a binding to the <i>data</i> property, each type has its own format of data. Here is an example of a line chart.  For more information refer to the <a href="https://www.chartjs.org/">charts.js</a> documentation.</p>
<pre v-code><code>
&lt;Chart type="bar" :data="basicData" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			basicData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: '#42A5F5',
						data: [65, 59, 80, 81, 56, 55, 40]
					},
					{
						label: 'My Second dataset',
						backgroundColor: '#9CCC65',
						data: [28, 48, 40, 19, 86, 27, 90]
					}
				]
			}
		}
	}
}

</code></pre>

		<h5>Options</h5>
		<p>While a series can be customized per dataset, general chart options are defined with options property.
			Example below adds a title and customizes the legend position of the chart. For all available options refer to the <a href="https://www.chartjs.org/">charts.js</a> documentation.</p>
<pre v-code><code>
&lt;Chart type="line" :data="data" :options="options" /&gt;

</code></pre>

<pre v-code.script><code>
options: {
	responsive: true,
	hoverMode: 'index',
	stacked: false,
	scales: {
        yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
        },
        {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
                drawOnChartArea: false
            }
        }]
	}
}

</code></pre>

		<h5>Properties</h5>
        <p>Any property as style and class are passed to the main container element. Following is the additional property to configure the component.</p>
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
                        <td>type</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Type of the chart.</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Data to display.</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Options to customize the chart.</td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td>number</td>
                        <td>300</td>
                        <td>Width of the chart in non-responsive mode.</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>number</td>
                        <td>150</td>
                        <td>Height of the chart in non-responsive mode.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Methods</h5>
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
                        <td>refresh</td>
                        <td>-</td>
                        <td>Redraws the graph.</td>
                    </tr>
                    <tr>
                        <td>reinit</td>
                        <td>-</td>
                        <td>Destroys the graph first and then creates it again.</td>
                    </tr>
                    <tr>
                        <td>generateLegend</td>
                        <td>-</td>
                        <td>Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.</td>
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
                        <td>select</td>
                        <td>
                            event: original event<br>
                            event.dataset: Selected dataset<br>
                            event.element: Selected element<br>
                            event.element._datasetIndex = Index of the dataset in data<br>
                            event.element._index = Index of the data in dataset
                        </td>
                        <td>Callback to invoke when a tab gets expanded.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Styling</h5>
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
                        <td>p-chart</td>
                        <td>Container element.</td>
                    </tr>
                </tbody>
            </table>
        </div>
	</div>
</template>