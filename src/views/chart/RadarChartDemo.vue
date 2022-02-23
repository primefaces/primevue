<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Radar Chart</h1>
                <p>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card flex justify-content-center">
                <Chart type="radar" :data="chartData" :options="chartOptions" style="width: 40%" />
            </div>
        </div>

        <RadarChartDoc/>
    </div>
</template>

<script>
import RadarChartDoc from './RadarChartDoc';
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
        EventBus.on('theme-change', this.themeChangeListener );
    },
    beforeUnmount() {
        EventBus.off('change-theme', this.themeChangeListener );
    },
    data() {
        return {
            chartData: {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
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
                        pointLabels: {
                            color: '#495057',
                        },
                        grid: {
                            color: '#ebedef',
                        },
                        angleLines: {
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
                        pointLabels: {
                            color: '#ebedef',
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)',
                        },
                        angleLines: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }
                }
            };
        }
    },
    components: {
        'RadarChartDoc': RadarChartDoc
    }
}
</script>
