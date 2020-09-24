<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
<pre v-code>
<code><template v-pre>
&lt;Chart type="pie" :data="chartData" /&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
	data() {
		return {
			chartData: {
				labels: ['A','B','C'],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
                            "#42A5F5",
                            "#66BB6A",
                            "#FFA726"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D"
                        ]
					}
				]
			}
		}
	}
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>