<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
				<div class="p-d-flex">
					<LiveEditor name="ChartDemo" :sources="sources" class="p-ml-auto" />
				</div>
<pre v-code>
<code><template v-pre>
&lt;Chart type="polarArea" :data="chartData" /&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
	data() {
		return {
			sources: {
				'template': {
					content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <Chart type="polarArea" :data="chartData" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                datasets: [{
                    data: [11,16,7,3,14],
                    backgroundColor: ["#42A5F5","#66BB6A","#FFA726","#26C6DA","#7E57C2"],
                    label: 'My dataset'
                }],
                labels: ["Red","Green","Yellow","Grey","Blue"]
            }
        }
    }
}`
				}
			}
		}
	},
	components: {
		LiveEditor
	}
}
</script>