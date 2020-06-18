<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>DoughnutChart</h1>
                <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Chart type="doughnut" :data="chartData" :options="chartOptions" />
            </div>
        </div>

        <DoughnutChartDoc/>
    </div>
</template>

<script>
import DoughnutChartDoc from './DoughnutChartDoc';
import EventBus from '@/EventBus';

export default {
    mounted() {
        EventBus.$on('change-theme', event => {
            if (event.dark)
                this.chartOptions = this.getDarkTheme();
            else
                this.chartOptions = this.getLightTheme();
        });
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
            return document.body.getAttribute('data-darktheme') !== null;
        },
        getLightTheme() {
            return {
                legend: {
                    labels: {
                        fontColor: '#495057'
                    }
                }
            }
        },
        getDarkTheme() {
            return {
                legend: {
                    labels: {
                        fontColor: '#ebedef'
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
