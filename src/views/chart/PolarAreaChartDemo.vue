<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Polar Area Chart</h1>
                <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Chart type="polarArea" :data="chartData" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ],
                    label: 'My dataset'
                }],
                labels: [
                    "Red",
                    "Green",
                    "Yellow",
                    "Grey",
                    "Blue"
                ]
            }
        }
    }
}
</script>
