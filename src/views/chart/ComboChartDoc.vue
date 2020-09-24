<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
<pre v-code>
<code><template v-pre>
&lt;Chart type="bar" :data="chartData" :options="chartOptions"/&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
	data() {
		return {
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					type: 'line',
					label: 'Dataset 1',
					borderColor: '#42A5F5',
					borderWidth: 2,
					fill: false,
					data: [
						50,
						25,
						12,
						48,
						56,
						76,
						42
					]
				},
				{
					type: 'bar',
					label: 'Dataset 2',
					backgroundColor: '#66BB6A',
					data: [
						21,
						84,
						24,
						75,
						37,
						65,
						34
					],
					borderColor: 'white',
					borderWidth: 2
				},
				{
					type: 'bar',
					label: 'Dataset 3',
					backgroundColor: '#FFA726',
					data: [
						41,
						52,
						24,
						74,
						23,
						21,
						32
					]
				}]
			},
			chartOptions: {
				responsive: true,
				title: {
					display: true,
					text: 'Combo Bar Line Chart'
				},
				tooltips: {
					mode: 'index',
					intersect: true
				}
			}
		}
	}
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>