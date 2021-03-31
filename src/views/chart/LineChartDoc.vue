<template>
	<AppDoc name="ChartDemo" :sources="sources" :dependencies="{'chart.js': '2.7.3'}" component="Chart" />
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
        <div class="card">
            <h5>Basic</h5>
            <Chart type="line" :data="basicData" :options="basicOptions" />
        </div>

        <div class="card">
            <h5>Multi Axis</h5>
            <Chart type="line" :data="multiAxisData" :options="multiAxisOptions" />
        </div>

        <div class="card">
            <h5>Line Styles</h5>
            <Chart type="line" :data="lineStylesData" :options="basicOptions" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#42A5F5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#FFA726'
                    }
                ]
            },
            multiAxisData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    fill: false,
                    borderColor: '#42A5F5',
                    yAxisID: 'y-axis-1',
                    data: [65, 59, 80, 81, 56, 55, 10]
                }, {
                    label: 'Dataset 2',
                    fill: false,
                    borderColor: '#00bb7e',
                    yAxisID: 'y-axis-2',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
            },
            multiAxisOptions: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                scales: {
                    yAxes: [{
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }]
                }
            },
            lineStylesData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#42A5F5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderDash: [5, 5],
                        borderColor: '#66BB6A'
                    },
                    {
                        label: 'Third Dataset',
                        data: [12, 51, 62, 33, 21, 62, 45],
                        fill: true,
                        borderColor: '#FFA726',
                        backgroundColor: 'rgba(255,167,38,0.2)'
                    }
                ]
            },
            basicOptions: null
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
        <div class="card">
            <h5>Basic</h5>
            <Chart type="line" :data="basicData" :options="basicOptions" />
        </div>

        <div class="card">
            <h5>Multi Axis</h5>
            <Chart type="line" :data="multiAxisData" :options="multiAxisOptions" />
        </div>

        <div class="card">
            <h5>Line Styles</h5>
            <Chart type="line" :data="lineStylesData" :options="basicOptions" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const basicData =  ref({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#FFA726'
                }
            ]
        });
        const multiAxisData = ref({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Dataset 1',
                fill: false,
                borderColor: '#42A5F5',
                yAxisID: 'y-axis-1',
                data: [65, 59, 80, 81, 56, 55, 10]
            }, {
                label: 'Dataset 2',
                fill: false,
                borderColor: '#00bb7e',
                yAxisID: 'y-axis-2',
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        });
        const multiAxisOptions = ref({
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        });
        const lineStylesData = ref({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    borderColor: '#66BB6A'
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: '#FFA726',
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        });
        const basicOptions = ref(null);

		return { basicData, multiAxisData, multiAxisOptions, lineStylesData, basicOptions }
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