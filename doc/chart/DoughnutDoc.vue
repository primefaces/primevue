<template>
    <DocSectionText v-bind="$attrs">
        <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'chart.js': '3.3.2' }" component="Chart" />
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: {
                cutout: '60%'
            },
            code: {
                basic: `
<Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: {
                cutout: '60%'
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
                        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
    cutout: '60%'
});

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };
};
<\/script>`
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
                        data: [300, 50, 100],
                        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    }
};
</script>
