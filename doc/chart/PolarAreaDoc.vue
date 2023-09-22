<template>
    <DocSectionText v-bind="$attrs">
        <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'chart.js': '3.3.2' }" component="Chart" />
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null,
            code: {
                basic: `
<Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
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
                datasets: [
                    {
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: [
                            documentStyle.getPropertyValue('--red-500'),
                            documentStyle.getPropertyValue('--green-500'),
                            documentStyle.getPropertyValue('--yellow-500'),
                            documentStyle.getPropertyValue('--bluegray-500'),
                            documentStyle.getPropertyValue('--blue-500')
                        ],
                        label: 'My dataset'
                    }
                ],
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

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
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
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
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    documentStyle.getPropertyValue('--red-500'),
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--bluegray-500'),
                    documentStyle.getPropertyValue('--blue-500')
                ],
                label: 'My dataset'
            }
        ],
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

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
                    color: surfaceBorder
                }
            }
        }
    };
}
<\/script>`
            }
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
                datasets: [
                    {
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: [
                            documentStyle.getPropertyValue('--red-500'),
                            documentStyle.getPropertyValue('--green-500'),
                            documentStyle.getPropertyValue('--yellow-500'),
                            documentStyle.getPropertyValue('--bluegray-500'),
                            documentStyle.getPropertyValue('--blue-500')
                        ],
                        label: 'My dataset'
                    }
                ],
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

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
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
</script>
