<template>
	<AppDoc name="ChartDemo" :sources="sources" :dependencies="{'chart.js': '2.7.3'}" />
</template>

<script>

export default {
	data() {
		return {
			sources: {
				'options-api': {
					tabName: 'Source',
					content: `
<template>
    <div>
        <Chart type="pie" :data="chartData" />
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
            }
        }
    }
}
<\\/script>
`
				},
				'composition-api': {
					tabName: 'Composition API',
					content: `
<template>
    <div>
        <Chart type="pie" :data="chartData" />
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