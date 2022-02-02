<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Combo Chart</h1>
                <p>Different chart types can be combined in the same graph.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Chart type="bar" :data="chartData" :options="chartOptions"/>
            </div>
        </div>

        <ComboChartDoc/>
    </div>
</template>

<script>
import ComboChartDoc from './ComboChartDoc';
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
        else {
            this.applyLightTheme();
        }
    },
    beforeDestroy() {
        EventBus.$off('change-theme');
    },
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
                    data: [
                        50,
                        25,
                        12,
                        48,
                        56,
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
                    ],
                    borderColor: 'white',
                    borderWidth: 2
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
            chartOptions: null
        }
    },
    methods: {
        isDarkTheme() {
            return this.$appState.darkTheme === true;
        },
        applyLightTheme() {
            this.chartOptions = {
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
        },
        applyDarkTheme() {
            this.chartOptions = {
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
        }
    },
    components: {
        'ComboChartDoc': ComboChartDoc
    }
}
</script>
