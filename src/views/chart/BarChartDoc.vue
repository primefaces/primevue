<template>
	<AppDoc name="BarChartDemo" :sources="sources" />
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
            <h5>Vertical</h5>
            <Chart type="bar" :data="basicData" :options="basicOptions" />
        </div>

        <div class="card">
            <h5>Horizontal</h5>
            <Chart type="horizontalBar" :data="basicData" :options="basicOptions" />
        </div>

        <div class="card">
            <h5>Multi Axis</h5>
            <Chart type="bar" :data="multiAxisData" :options="multiAxisOptions "/>
        </div>

        <div class="card">
            <h5>Stacked</h5>
            <Chart type="bar" :data="stackedData" :options="stackedOptions" />
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
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: '#FFA726',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            },
            multiAxisData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    backgroundColor: ['#EC407A','#AB47BC','#42A5F5','#7E57C2','#66BB6A','#FFCA28','#26A69A'],
                    yAxisID: 'y-axis-1',
                    data: [65, 59, 80, 81, 56, 55, 10]
                }, {
                    label: 'Dataset 2',
                    backgroundColor: '#78909C',
                    yAxisID: 'y-axis-2',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
            },
            multiAxisOptions: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                        ticks: {
                            min: 0,
                            max: 100
                        }
                    },
                    {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            min: 0,
                            max: 100
                        }
                    }]
                }
            },
            stackedData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: '#42A5F5',
                    data: [50,25,12,48,90,76,42]
                }, {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: '#66BB6A',
                    data: [21,84,24,75,37,65,34]
                }, {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#FFA726',
                    data: [41,52,24,74,23,21,32]
                }]
            },
            stackedOptions: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            },
            basicOptions: null
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
        <div class="card">
            <h5>Vertical</h5>
            <Chart type="bar" :data="basicData" :options="basicOptions" />
        </div>

        <div class="card">
            <h5>Horizontal</h5>
            <Chart type="horizontalBar" :data="basicData" :options="basicOptions" />
        </div>

        <div class="card">
            <h5>Multi Axis</h5>
            <Chart type="bar" :data="multiAxisData" :options="multiAxisOptions "/>
        </div>

        <div class="card">
            <h5>Stacked</h5>
            <Chart type="bar" :data="stackedData" :options="stackedOptions" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const basicData = ref({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#FFA726',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        });
        const multiAxisData = ref({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: ['#EC407A','#AB47BC','#42A5F5','#7E57C2','#66BB6A','#FFCA28','#26A69A'],
                yAxisID: 'y-axis-1',
                data: [65, 59, 80, 81, 56, 55, 10]
            }, {
                label: 'Dataset 2',
                backgroundColor: '#78909C',
                yAxisID: 'y-axis-2',
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        });
        const multiAxisOptions = ref({
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    ticks: {
                        min: 0,
                        max: 100
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }]
            }
        });
        const stackedData = ref({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: '#42A5F5',
                data: [50,25,12,48,90,76,42]
            }, {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: '#66BB6A',
                data: [21,84,24,75,37,65,34]
            }, {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: '#FFA726',
                data: [41,52,24,74,23,21,32]
            }]
        });
        const stackedOptions = ref({
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        });
        const basicOptions = ref(null);

		return { basicData, multiAxisData, multiAxisOptions, stackedData, stackedOptions, basicOptions }
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