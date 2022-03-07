<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>BarChart</h1>
                <p>A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Vertical</h5>
                <Chart type="bar" :data="basicData" :options="basicOptions" />
            </div>

            <div class="card">
                <h5>Horizontal</h5>
                <Chart type="bar" :data="basicData" :options="horizontalOptions" />
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
                    yAxisID: 'y',
                    data: [65, 59, 80, 81, 56, 55, 10]
                }, {
                    label: 'Dataset 2',
                    backgroundColor: '#78909C',
                    yAxisID: 'y1',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }]
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
            basicOptions: null,
            horizontalOptions: null,
            multiAxisOptions: null,
            stackedOptions: null
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

            this.horizontalOptions = {
                indexAxis: 'y',
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
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true
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
                            min: 0,
                            max: 100,
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
                        grid: {
                            drawOnChartArea: false,
                            color: '#ebedef'
                        },
                        ticks: {
                            min: 0,
                            max: 100,
                            color: '#495057'
                        }
                    }
                }
            };

            this.stackedOptions = {
                plugins: {
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
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

            this.horizontalOptions = {
                indexAxis: 'y',
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
                plugins: {
                    legend: {
                        labels: {
                            color: '#ebedef'
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true
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
                            min: 0,
                            max: 100,
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
                        grid: {
                            drawOnChartArea: false,
                            color: 'rgba(255,255,255,0.2)'
                        },
                        ticks: {
                            min: 0,
                            max: 100,
                            color: '#ebedef'
                        }
                    }
                }
            };

            this.stackedOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: '#ebedef'
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: '#ebedef'
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: '#ebedef'
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }
                }
            };            
        }
    },
    components: {
        'BarChartDoc': BarChartDoc
    }
}
</script>
