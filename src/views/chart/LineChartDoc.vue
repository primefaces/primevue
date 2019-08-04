<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;Chart type="line" :data="basicData" /&gt;

&lt;h3&gt;Multi Axis&lt;/h3&gt;
&lt;Chart type="line" :data="multiAxisData" :options="multiAxisOptions" /&gt;

&lt;h3&gt;Line Styles&lt;/h3&gt;
&lt;Chart type="line" :data="lineStylesData" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			basicData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						backgroundColor: '#2f4860',
						borderColor: '#2f4860'
					},
					{
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						backgroundColor: '#00bb7e',
						borderColor: '#00bb7e'
					}
				]
			},
			multiAxisData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'Dataset 1',
						fill: false,
						backgroundColor: '#2f4860',
						borderColor: '#2f4860',
						yAxisID: 'y-axis-1',
						data: [65, 59, 80, 81, 56, 55, 10]
					},
					{
						label: 'Dataset 2',
						fill: false,
						backgroundColor: '#00bb7e',
						borderColor: '#00bb7e',
						yAxisID: 'y-axis-2',
						data: [28, 48, 40, 19, 86, 27, 90]
					}
				]
			},
			multiAxisOptions: {
				responsive: true,
				hoverMode: 'index',
				stacked: false,
				scales: {
					yAxes: [
						{
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
			},
			lineStylesData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: '#42A5F5'
					},
					{
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						borderDash: [5, 5],
						borderColor: '#66BB6A'
					},
					{
						label: 'Third Dataset',
						data: [12, 51, 62, 33, 21, 62, 45],
						fill: true,
						borderColor: '#FFA726',
						backgroundColor: '#FFCC80'
					}
				]
			}
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>