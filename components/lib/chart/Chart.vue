<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="chart">
        <canvas ref="canvas" :width="width" :height="height" @click="onCanvasClick($event)" v-bind="{ ...canvasProps, ...ptm('canvas') }"></canvas>
    </div>
</template>

<script>
import BaseChart from './BaseChart.vue';

export default {
    name: 'Chart',
    extends: BaseChart,
    emits: ['select', 'loaded'],
    chart: null,
    watch: {
        /*
         * Use deep watch to enable triggering watch for changes within structure
         * otherwise the entire data object needs to be replaced to trigger watch
         */
        data: {
            handler() {
                this.reinit();
            },
            deep: true
        },
        type() {
            this.reinit();
        },
        options() {
            this.reinit();
        }
    },
    mounted() {
        this.initChart();
    },
    beforeUnmount() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    },
    methods: {
        initChart() {
            import('chart.js/auto').then((module) => {
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = null;
                }

                if (module && module.default) {
                    this.chart = new module.default(this.$refs.canvas, {
                        type: this.type,
                        data: this.data,
                        options: this.options,
                        plugins: this.plugins
                    });
                }

                this.$emit('loaded', this.chart);
            });
        },
        getCanvas() {
            return this.$canvas;
        },
        getChart() {
            return this.chart;
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
            this.initChart();
        },
        onCanvasClick(event) {
            if (this.chart) {
                const element = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
                const dataset = this.chart.getElementsAtEventForMode(event, 'dataset', { intersect: true }, false);

                if (element && element[0] && dataset) {
                    this.$emit('select', { originalEvent: event, element: element[0], dataset: dataset });
                }
            }
        },
        generateLegend() {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        }
    }
};
</script>
