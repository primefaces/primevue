<template>
    <div class="p-chart">
        <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script>
import ChartJS from 'chart.js/src/chart.js';

export default {
    props: {
        type: String,
        data: null,
        options: null,
        width: Number,
        height: Number
    },
    chart: null,
    mounted() {
        this.initChart();
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    },
    watch: {
        data() {
            this.reinit();
        },
        type() {
            this.reinit();
        },
        options() {
            this.reinit();
        }
    },
    methods: {
        initChart() {
            this.chart = new ChartJS(this.$refs.canvas, {
                type: this.type,
                data: this.data,
                options: this.options
            });
        },
        getCanvas() {
            return this.$canvas;
        },
        getBase64Image() {
            return this.chart.toBase64Image();
        },
        refresh() {
            if (this.chart) {
                this.chart.update();
            }
        },
        reinit() {
            if (this.chart) {
                this.chart.destroy();
                this.initChart();
            }
        }
    }
}
</script>

<style>
.p-chart {
    position: relative;
}
</style>