<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Polar Area Chart</h1>
                <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card p-d-flex p-jc-center">
                <Chart type="polarArea" :data="chartData" :options="chartOptions" style="width: 40%" />
            </div>
        </div>

        <PolarAreaChartDoc/>
    </div>
</template>

<script>
import PolarAreaChartDoc from './PolarAreaChartDoc';
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
                datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#42A5F5",
                        "#66BB6A",
                        "#FFA726",
                        "#26C6DA",
                        "#7E57C2"
                    ],
                    label: 'My dataset'
                }],
                labels: [
                    "Red",
                    "Green",
                    "Yellow",
                    "Grey",
                    "Blue"
                ]
            },
            chartOptions: this.isDarkTheme() ? this.getDarkTheme(): this.getLightTheme()
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
                },
                scales: {
                    r: {
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            };
        },
        getDarkTheme() {
            return {
                plugins: {
                    legend: {
                        labels: {
                            color: '#ebedef'
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }
                }
            };
        }
    },
    components: {
        'PolarAreaChartDoc': PolarAreaChartDoc
    }
}
</script>
