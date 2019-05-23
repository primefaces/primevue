<template>
	<div class="content-section documentation">
        <h3>Getting Started</h3>
        <p>To begin with, charts.js package needs to be installed in your project.</p>
 <CodeHighlight lang="javascript">
npm install chart.js --save
</CodeHighlight>

		<h3 style="margin-top: 0">Import</h3>
<CodeHighlight lang="javascript">
import Chart from 'primevue/chart';
</CodeHighlight>

		<h3>Chart Types</h3>
		<p>Chart type is defined using the <i>type</i> property. Currently there are 6 options available; "pie", "doughtnut", "line", "bar", "radar" and "polarArea".</p>

		<h3>Data</h3>
		<p>Data of a chart is provided using a binding to the <i>data</i> property, each type has its own format of data. Here is an example of a line chart.</p>
<CodeHighlight>
&lt;Chart type="bar" :data="basicData" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
</CodeHighlight>

		<h3>Options</h3>
		<p>While a series can be customized per dataset, general chart options are defined with options property.
			Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js documentation.</p>
<CodeHighlight>
&lt;Chart type="line" :data="data" :options="options" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
		    }
        ]
	}
}
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
                        <td>string</td>
                        <td>null</td>
                        <td>Width of the chart in non-responsive mode.</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Height of the chart in non-responsive mode.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h3>Methods</h3>
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
				</tbody>
			</table>
		</div>
	</div>
</template>