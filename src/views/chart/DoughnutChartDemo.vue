<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>DoughnutChart</h1>
                <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card p-d-flex p-jc-center">
                <Chart type="doughnut" :data="chartData" :options="chartOptions" style="width: 40%" />
            </div>
        </div>

        <DoughnutChartDoc/>
    </div>
</template>

<script>
import DoughnutChartDoc from './DoughnutChartDoc';
import EventBus from '@/AppEventBus';

export default {
    themeChangeListener: null,
    mounted() {
        this.themeChangeListener = (event) => {
            if (event.dark)
                this.chartOptions = this.getDarkTheme();
            else
                this.chartOptions = this.getLightTheme();
        }
        EventBus.on('change-theme', this.themeChangeListener );
    },
    beforeUnmount() {
        EventBus.off('change-theme', this.themeChangeListener );
    },
    data() {
        return {
            chartData: {
                labels: ['A','B','C'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }
                ]
            },
            chartOptions: this.isDarkTheme() ? this.getDarkTheme() : this.getLightTheme()
        }
    },
    methods: {
        isDarkTheme() {
            return this.$appState.darkTheme === true;
        },
        getLightTheme() {
            return {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                }
            }
        },
        getDarkTheme() {
            return {
                plugins: {
                    legend: {
                        labels: {
                            color: '#ebedef'
                        }
                    }
                }
            }
        }
    },
    components: {
        'DoughnutChartDoc': DoughnutChartDoc
    }
}
</script>
