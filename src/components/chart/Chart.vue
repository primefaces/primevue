<template>
    <div class="p-chart">
        <canvas ref="canvas" :width="width" :height="height" @click="onCanvasClick($event)"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Chart',
    emits: ['select'],
    props: {
        type: String,
        data: null,
        options: null,
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 150
        },
    },
    chart: null,
    mounted() {
        this.initChart();
    },
    beforeUnmount() {
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
            import('chart.js').then((module) => {
                if (module && module.default) {
                    this.chart = new module.default(this.$refs.canvas, {
                        type: this.type,
                        data: this.data,
                        options: this.options
                    });
                }
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
        },
        onCanvasClick(event) {
            if (this.chart) {
                const element = this.chart.getElementAtEvent(event);
                const dataset = this.chart.getDatasetAtEvent(event);

                if (element && element[0] && dataset) {
                    this.$emit('select', {originalEvent: event, element: element[0], dataset: dataset});
                }
            }
        },
        generateLegend() {
            if (this.chart) {
                return this.chart.generateLegend();
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
