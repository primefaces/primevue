<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;Chart type="polarArea" :data="chartData" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			chartData: {
				datasets: [{
					data: [
						11,
						16,
						7,
						3,
						14
					],
					backgroundColor: [
						"#42A5F5",
                        "#66BB6A",
                        "#FFA726",
                        "#26C6DA",
                        "#7E57C2"
					],
					label: 'My dataset'
				}],
				labels: [
					"Red",
					"Green",
					"Yellow",
					"Grey",
					"Blue"
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