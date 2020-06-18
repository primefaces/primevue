<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>BarChart</h1>
                <p>A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.</p>
            </div>
        </div>

        <div class="content-section implementation">
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

        <BarChartDoc/>
    </div>
</template>

<script>
import BarChartDoc from './BarChartDoc';
import EventBus from '@/EventBus';

export default {
    mounted() {
        EventBus.$on('change-theme', event => {
            if (event.dark)
                this.applyDarkTheme();
            else
                this.applyLightTheme();
        });

        if (this.isDarkTheme()) {
            this.applyDarkTheme();
        }
    },
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
                    backgroundColor: [
                        '#EC407A',
                        '#AB47BC',
                        '#42A5F5',
                        '#7E57C2',
                        '#66BB6A',
                        '#FFCA28',
                        '#26A69A'
                    ],
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
                    data: [
                        50,
                        25,
                        12,
                        48,
                        90,
                        76,
                        42
                    ]
                }, {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: '#66BB6A',
                    data: [
                        21,
                        84,
                        24,
                        75,
                        37,
                        65,
                        34
                    ]
                }, {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#FFA726',
                    data: [
                        41,
                        52,
                        24,
                        74,
                        23,
                        21,
                        32
                    ]
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
    },
    methods: {
        isDarkTheme() {
            return document.body.getAttribute('data-darktheme') !== null;
        },
        applyLightTheme() {
            this.basicOptions = {
                legend: {
                    labels: {
                        fontColor: '#495057'
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: '#495057'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: '#495057'
                        }
                    }]
                }
            };

            this.stackedOptions.scales.xAxes[0].ticks = {
                fontColor: '#495057'
            };
            this.stackedOptions.scales.xAxes[0].gridLines = {
                color: '#ebedef'
            };
            this.stackedOptions.scales.yAxes[0].ticks = {
                fontColor: '#495057'
            };
            this.stackedOptions.scales.yAxes[0].gridLines = {
                color: '#ebedef'
            };
            this.stackedOptions.legend = {
                labels:  {
                    fontColor: '#495057'
                }
            };
            this.stackedOptions = {...this.stackedOptions};

            this.multiAxisOptions.scales.xAxes = [{
                    ticks: {
                        fontColor: '#495057'
                    },
                    gridLines: {
                        color: '#ebedef'
                    }
                }
            ];
            this.multiAxisOptions.scales.yAxes[0].ticks = {
                fontColor: '#495057'
            };
            this.multiAxisOptions.scales.yAxes[0].gridLines = {
                color: '#ebedef'
            };
            this.multiAxisOptions.scales.yAxes[1].ticks = {
                fontColor: '#495057'
            };
            this.multiAxisOptions.scales.yAxes[1].gridLines = {
                color: '#ebedef'
            };
            this.multiAxisOptions.legend = {
                labels:  {
                    fontColor: '#495057'
                }
            };
            this.multiAxisOptions = {...this.multiAxisOptions};
        },
        applyDarkTheme() {
            this.basicOptions = {
                legend: {
                    labels: {
                        fontColor: '#ebedef'
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: '#ebedef'
                        },
                        gridLines: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: '#ebedef'
                        },
                        gridLines: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }]
                }
            };

            this.stackedOptions.scales.xAxes[0].ticks = {
                fontColor: '#ebedef'
            };
            this.stackedOptions.scales.xAxes[0].gridLines = {
                color: 'rgba(255,255,255,0.2)'
            };
            this.stackedOptions.scales.yAxes[0].ticks = {
                fontColor: '#ebedef'
            };
            this.stackedOptions.scales.yAxes[0].gridLines = {
                color: 'rgba(255,255,255,0.2)'
            };
            this.stackedOptions.legend = {
                labels:  {
                    fontColor: '#ebedef'
                }
            };
            this.stackedOptions = {...this.stackedOptions};

            this.multiAxisOptions.scales.xAxes = [{
                    ticks: {
                        fontColor: '#ebedef'
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            ];
            this.multiAxisOptions.scales.yAxes[0].ticks = {
                fontColor: '#ebedef'
            };
            this.multiAxisOptions.scales.yAxes[0].gridLines = {
                color: 'rgba(255,255,255,0.2)'
            };
            this.multiAxisOptions.scales.yAxes[1].ticks = {
                fontColor: '#ebedef'
            };
            this.multiAxisOptions.scales.yAxes[1].gridLines = {
                color: 'rgba(255,255,255,0.2)'
            };
            this.multiAxisOptions.legend = {
                labels:  {
                    fontColor: '#ebedef'
                }
            };
            this.multiAxisOptions = {...this.multiAxisOptions};
        }
    },
    components: {
        'BarChartDoc': BarChartDoc
    }
}
</script>
