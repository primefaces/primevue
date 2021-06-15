<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Pie Chart</h1>
                <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card p-d-flex p-jc-center">
                <Chart type="pie" :data="chartData" :options="chartOptions" style="width: 40%" />
            </div>
        </div>

        <PieChartDoc/>
    </div>
</template>

<script>
import PieChartDoc from './PieChartDoc';
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
        EventBus.off('change-theme', this.themeChangeListener);
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
        'PieChartDoc': PieChartDoc
    }
}
</script>
