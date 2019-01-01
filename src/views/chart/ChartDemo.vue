<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ChartModel</h1>
                <p>Chart components are based on <a href="https://www.chartjs.org/">Charts.js</a>, an open source HTML5 based charting library.</p>
            </div>
        </div>

        <div class="content-section implementation">
            
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
