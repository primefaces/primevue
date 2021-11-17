<template>
	<AppDoc name="ChartDemo" :sources="sources" :dependencies="{'chart.js': '3.3.2'}" component="Chart" github="chart/PieChartDemo.vue" />
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
    <div>
        <Chart type="pie" :data="chartData" :options="lightOptions" />
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
                        backgroundColor: ["#42A5F5","#66BB6A","#FFA726"],
                        hoverBackgroundColor: ["#64B5F6","#81C784","#FFB74D"]
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
					tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <Chart type="pie" :data="chartData" :options="lightOptions" />
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
                    backgroundColor: ["#42A5F5","#66BB6A","#FFA726"],
                    hoverBackgroundColor: ["#64B5F6","#81C784","#FFB74D"]
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