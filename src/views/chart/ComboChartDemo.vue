<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Combo Chart</h1>
                <p>Different chart types can be combined in the same graph.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Chart type="bar" :data="chartData" :options="chartOptions"/>
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
            chartOptions: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Combo Bar Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                }
            }
        }
    },
    methods: {
        isDarkTheme() {
            return document.body.getAttribute('data-darktheme') !== null;
        },
        applyLightTheme() {
            this.chartOptions = {
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
            }
        },
        applyDarkTheme() {
            this.chartOptions = {
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
        }
    },
    components: {
        'ComboChartDoc': ComboChartDoc
    }
}
</script>
