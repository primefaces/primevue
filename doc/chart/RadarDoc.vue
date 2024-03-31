<template>
    <DocSectionText v-bind="$attrs">
        <p>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'chart.js': '3.3.2' }" component="Chart" />
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    data() {
        return {
            chartData: null,
            chartOptions: null,
            code: {
                basic: `
<Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            return {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        borderColor: documentStyle.getPropertyValue('--gray-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--gray-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--gray-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--gray-400'),
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        borderColor: documentStyle.getPropertyValue('--cyan-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--cyan-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--cyan-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--cyan-400'),
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            
            return {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: textColorSecondary
                        }
                    }
                }
            };
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                borderColor: documentStyle.getPropertyValue('--pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                }
            }
        }
    };
}
<\/script>
`
            }
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();

        this.themeChangeListener = () => {
            this.chartOptions = this.setChartOptions();
        };

        EventBus.on('theme-change-complete', this.themeChangeListener);
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            return {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        borderColor: documentStyle.getPropertyValue('--gray-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--gray-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--gray-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--gray-400'),
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        borderColor: documentStyle.getPropertyValue('--cyan-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--cyan-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--cyan-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--cyan-400'),
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

            return {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: textColorSecondary
                        }
                    }
                }
            };
        }
    }
};
</script>
