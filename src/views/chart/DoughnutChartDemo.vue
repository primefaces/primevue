<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>DoughnutChart</h1>
                <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Chart type="doughnut" :data="chartData" />
        </div>

        <DoughnutChartDoc/>
    </div>
</template>

<script>
import DoughnutChartDoc from './DoughnutChartDoc';

export default {
    data() {
        return {
            chartData: {
                labels: ['A','B','C'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }
                ]    
            }
        }
    },
    components: {
        'DoughnutChartDoc': DoughnutChartDoc
    }
}
</script>
