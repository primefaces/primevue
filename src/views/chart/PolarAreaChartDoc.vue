<template>
	<AppDoc name="ChartDemo" :sources="sources" :dependencies="{'chart.js': '2.7.3'}" component="Chart" />
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
        <Chart type="polarArea" :data="chartData" />
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
}
<\\/script>
`
				},
				'composition-api': {
					tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <Chart type="polarArea" :data="chartData" />
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