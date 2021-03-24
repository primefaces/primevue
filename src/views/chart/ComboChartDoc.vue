<template>
	<AppDoc name="ComboChartDemo" :sources="sources" />
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
        <Chart type="bar" :data="chartData"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: '#42A5F5',
                    borderWidth: 2,
                    fill: false,
                    data: [50,25,12,48,56,76,42]
                }, {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: '#66BB6A',
                    data: [21,84,24,75,37,65,34],
                    borderColor: 'white',
                    borderWidth: 2
                }, {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#FFA726',
                    data: [41,52,24,74,23,21,32]
                }]
            }
        }
    }
}
<\\/script>`

				},
				'composition-api': {
					tabName: 'Composition API',
					content: `
<template>
    <div>
        <Chart type="bar" :data="chartData"/>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const chartData = ref({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                type: 'line',
                label: 'Dataset 1',
                borderColor: '#42A5F5',
                borderWidth: 2,
                fill: false,
                data: [50,25,12,48,56,76,42]
            }, {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: '#66BB6A',
                data: [21,84,24,75,37,65,34],
                borderColor: 'white',
                borderWidth: 2
            }, {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: '#FFA726',
                data: [41,52,24,74,23,21,32]
            }]
        });

		return { chartData }
    }
}
<\\/script>`

				}
			}
		}
	}
}
</script>