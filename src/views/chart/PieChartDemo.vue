<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Pie Chart</h1>
                <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Chart type="pie" :data="chartData" :options="chartOptions" />
        </div>

        <PieChartDoc/>
    </div>
</template>

<script>
import PieChartDoc from './PieChartDoc';
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
                            "#42A5F5",
                            "#66BB6A",
                            "#FFA726"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D"
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
        'PieChartDoc': PieChartDoc
    }
}
</script>
