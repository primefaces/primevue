<template>
    <DocSectionText v-bind="$attrs">
        <p>A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Chart
            type="pie"
            :data="chartData"
            :options="chartOptions"
            :pt="{
                root: { class: 'w-full md:w-30rem' }
            }"
        />
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'chart.js': '3.3.2' }" component="Chart" />
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            },
            code: {
                basic: `
<Chart
    type="pie"
    :data="chartData"
    :options="chartOptions"
    :pt="{
        root: { class: 'w-full md:w-30rem' }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Chart
            type="pie"
            :data="chartData"
            :options="chartOptions"
            :pt="{
                root: { class: 'w-full md:w-30rem' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            }
        };
    },
    mounted() {
        this.chartData = this.setChartData();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.body);

            return {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
                    }
                ]
            };
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Chart
            type="pie"
            :data="chartData"
            :options="chartOptions"
            :pt="{
                root: { class: 'w-full md:w-30rem' }
            }"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
    plugins: {
        legend: {
            labels: {
                usePointStyle: true
            }
        }
    }
});

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
            }
        ]
    };
};
<\/script>
`
            }
        };
    },
    mounted() {
        this.chartData = this.setChartData();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.body);

            return {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
                    }
                ]
            };
        }
    }
};
</script>
