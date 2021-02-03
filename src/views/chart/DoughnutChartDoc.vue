<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
				<div class="p-d-flex">
					<LiveEditor name="ChartDemo" :sources="sources" class="p-ml-auto" />
				</div>
<pre v-code><code><template v-pre>
&lt;Chart type="doughnut" :data="chartData" /&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
                <Chart type="doughnut" :data="chartData" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                labels: ['A','B','C'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
                        hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
                    }
                ]
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