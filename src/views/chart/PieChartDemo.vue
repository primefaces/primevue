<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Pie Chart</h1>
                <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Chart type="pie" :data="chartData" />
        </div>

        <PieChartDoc/>
    </div>
</template>

<script>
import PieChartDoc from './PieChartDoc';

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
        'PieChartDoc': PieChartDoc
    }
}
</script>
