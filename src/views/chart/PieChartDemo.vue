<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>PieChart</h1>
                <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Chart type="pie" :data="chartModel" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartModel: {
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
    }
}
</script>
