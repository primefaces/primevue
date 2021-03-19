<template>
	<AppDoc name="DoughnutChartDemo" :sources="sources" />
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
    <div class="card">
        <Chart type="doughnut" :data="chartData" />
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
}
<\\/script>
`
				},
				'composition-api': {
					tabName :'Composition API',
					content: `
<template>
    <div class="card">
        <Chart type="doughnut" :data="chartData" />
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

		return { chartData }
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