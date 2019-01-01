<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ComboChart</h1>
                <p>Different chart types can be combined in the same graph.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Chart type="bar" :data="chartModel" :options="chartOptions"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartModel: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: '#AA5493',
                    borderWidth: 2,
                    fill: false,
                    data: [
                        50,
                        25,
                        12,
                        48,
                        56,
                        76,
                        42
                    ]
                }, {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: '#2f4860',
                    data: [
                        21,
                        84,
                        24,
                        75,
                        37,
                        65,
                        34
                    ],
                    borderColor: 'white',
                    borderWidth: 2
                }, {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#00bb7e',
                    data: [
                        41,
                        52,
                        24,
                        74,
                        23,
                        21,
                        32
                    ]
                }]
            },
            chartOptions: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Combo Bar Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                }
            }
        }
    }
}
</script>
