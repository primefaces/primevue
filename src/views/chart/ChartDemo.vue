<template>
    <div>
        <ChartDoc/>
    </div>
</template>

<script>
import ChartDoc from './ChartDoc';

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
    },
    components: {
        'ChartDoc': ChartDoc
    }
}
</script>
