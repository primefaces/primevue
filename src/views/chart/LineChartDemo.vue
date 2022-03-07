<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Line Chart</h1>
                <p>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
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

        <LineChartDoc/>
    </div>
</template>

<script>
import LineChartDoc from './LineChartDoc';
import EventBus from '@/AppEventBus';

export default {
    themeChangeListener: null,
    mounted() {
        this.themeChangeListener = (event) => {
            if (event.dark)
                this.applyDarkTheme();
            else
                this.applyLightTheme();
        };
        EventBus.on('theme-change', this.themeChangeListener);

        if (this.isDarkTheme()) {
            this.applyDarkTheme();
        }
        else {
            this.applyLightTheme();
        }
    },
    beforeUnmount() {
        EventBus.off('change-theme', this.themeChangeListener);
    },
    data() {
        return {
            basicData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#42A5F5',
                        tension: .4
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#FFA726',
                        tension: .4
                    }
                ]
            },
            multiAxisData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    fill: false,
                    borderColor: '#42A5F5',
                    yAxisID: 'y',
                    tension: .4,
                    data: [65, 59, 80, 81, 56, 55, 10]
                }, {
                    label: 'Dataset 2',
                    fill: false,
                    borderColor: '#00bb7e',
                    yAxisID: 'y1',
                    tension: .4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
            },
            lineStylesData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        tension: .4,
                        borderColor: '#42A5F5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderDash: [5, 5],
                        tension: .4,
                        borderColor: '#66BB6A'
                    },
                    {
                        label: 'Third Dataset',
                        data: [12, 51, 62, 33, 21, 62, 45],
                        fill: true,
                        borderColor: '#FFA726',
                        tension: .4,
                        backgroundColor: 'rgba(255,167,38,0.2)'
                    }
                ]
            },
            basicOptions: null,
            multiAxisOptions: null
        }
    },
    methods: {
        isDarkTheme() {
            return this.$appState.darkTheme === true;
        },
        applyLightTheme() {
            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            };

            this.multiAxisOptions = {
                stacked: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: '#ebedef'
                        }
                    }
                }
            };
        },
        applyDarkTheme() {
            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: '#ebedef'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#ebedef'
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#ebedef'
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }
                }
            };

            this.multiAxisOptions = {
                stacked: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ebedef'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#ebedef'
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            color: '#ebedef'
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: '#ebedef'
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }
                }
            };
        }
    },
    components: {
        'LineChartDoc': LineChartDoc
    }
}
</script>
