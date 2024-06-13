<template>
    <DocSectionText v-bind="$attrs">
        <p>Different chart types can be combined in the same graph usign the <i>type</i> option of a dataset.</p>
    </DocSectionText>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'chart.js': '3.3.2' }" component="Chart" />
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    redrawListener: null,
    data() {
        return {
            chartData: null,
            chartOptions: null,
            code: {
                basic: `
<Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
`,
                options: `
<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
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

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Dataset 1',
                        borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        data: [50, 25, 12, 48, 56, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [21, 84, 24, 75, 37, 65, 34],
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
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
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
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

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: [50, 25, 12, 48, 56, 76, 42]
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                data: [21, 84, 24, 75, 37, 65, 34],
                borderColor: 'white',
                borderWidth: 2
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                data: [41, 52, 24, 74, 23, 21, 32]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
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
    beforeUnmount() {
        EventBus.off('dark-mode-toggle-complete', this.redrawListener);
        EventBus.off('theme-palette-change', this.redrawListener);
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();

        this.redrawListener = () => {
            this.chartOptions = this.setChartOptions();
        };

        EventBus.on('theme-palette-change', this.redrawListener);
        EventBus.on('dark-mode-toggle-complete', this.redrawListener);
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Dataset 1',
                        borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        data: [50, 25, 12, 48, 56, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [21, 84, 24, 75, 37, 65, 34],
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
</script>
