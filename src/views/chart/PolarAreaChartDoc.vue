<template>
	<AppDoc name="ChartDemo" :sources="sources" :dependencies="{'chart.js': '3.3.2'}" component="Chart" github="chart/PolarAreaChartDemo.vue" />
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
        <Chart type="polarArea" :data="chartData" :options="chartOptions" />
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
            },
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: '#ebedef'
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
        <Chart type="polarArea" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const chartData = ref({
            datasets: [{
                data: [11,16,7,3,14],
                backgroundColor: ["#42A5F5","#66BB6A","#FFA726","#26C6DA","#7E57C2"],
                label: 'My dataset'
            }],
            labels: ["Red","Green","Yellow","Grey","Blue"]
        });

        const chartOptions = ref(
            {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            }
        );

		return { chartData, chartOptions }
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