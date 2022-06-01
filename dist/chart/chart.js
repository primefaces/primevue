this.primevue = this.primevue || {};
this.primevue.chart = (function (vue) {
    'use strict';

    var script = {
        name: 'Chart',
        emits: ['select', 'loaded'],
        props: {
            type: String,
            data: null,
            options: null,
            plugins: null,
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
    };

    const _hoisted_1 = { class: "p-chart" };
    const _hoisted_2 = ["width", "height"];

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("canvas", {
          ref: "canvas",
          width: $props.width,
          height: $props.height,
          onClick: _cache[0] || (_cache[0] = $event => ($options.onCanvasClick($event)))
        }, null, 8, _hoisted_2)
      ]))
    }

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = "\n.p-chart {\n    position: relative;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(Vue);
