<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A chart is configured with 3 properties; <i>type</i>, <i>data</i> and <i>options</i>. Chart type is defined using the <i>type</i> property that accepts <i>pie</i>, <i>doughtnut</i>, <i>line</i>, <i>bar</i>, <i>radar</i> and
            <i>polarArea</i> as a value. The <i>data</i> defines datasets represented with the chart and the <i>options</i> provide numerous customization options to customize the presentation.
        </p>
    </DocSectionText>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'chart.js': '3.3.2' }" component="Chart" />
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [540, 325, 702, 620],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            code: {
                basic: `
<Chart type="bar" :data="chartData" :options="chartOptions" />`,
                options: `
<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [540, 325, 702, 620],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const chartData = ref({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
});
const chartOptions = ref({
    scales: {
        y: {
            beginAtZero: true
        }
    }
});
<\/script>`
            }
        };
    }
};
</script>
