<template>
	<AppDoc name="ChartDemo" :sources="sources" :dependencies="{'chart.js': '3.3.2'}" component="Chart" github="chart/DoughnutChartDemo.vue" />
</template>

<script>
export default {
	data() {
		return {
			sources: {
				'options-api': {
					tabName :'Source',
					content: `
<template>
    <div>
        <Chart type="doughnut" :data="chartData" :options="lightOptions" />
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
            },
			lightOptions: {
				plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                }
			}
        }
    }
}
<\\/script>
`
				},
				'composition-api': {
					tabName :'Composition API',
					content: `
<template>
    <div>
        <Chart type="doughnut" :data="chartData" :options="lightOptions" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
		const chartData = ref({
		    labels: ['A','B','C'],
		    datasets: [
		        {
		            data: [300, 50, 100],
		            backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
		            hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
		        }
		    ]
		});

		const lightOptions = ref({
			plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
		});

		return { chartData, lightOptions }
    }
}
<\\/script>
`
				}
			}
		}
	}
}
</script>