this.primevue = this.primevue || {};
this.primevue.textarea = (function (vue) {
    'use strict';

    var script = {
        name: 'Textarea',
        emits: ['update:modelValue'],
        props: {
            modelValue: null,
            autoResize: Boolean
        },
        mounted() {
            if (this.$el.offsetParent && this.autoResize) {
                this.resize();
            }
        },
        updated() {
            if (this.$el.offsetParent && this.autoResize) {
                this.resize();
            }
        },
        methods: {
            resize() {
                const style = window.getComputedStyle(this.$el);
                this.$el.style.height = 'auto';
                this.$el.style.height = `calc(${style.borderTopWidth} + ${style.borderBottomWidth} + ${this.$el.scrollHeight}px)`;

                if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
                    this.$el.style.overflowY = "scroll";
                    this.$el.style.height = this.$el.style.maxHeight;
                }
                else {
                    this.$el.style.overflow = "hidden";
                }
            },
            onInput(event) {
                 if (this.autoResize) {
                    this.resize();
                }

                this.$emit('update:modelValue', event.target.value);
            }
        },
        computed: {
            filled() {
                return (this.modelValue != null && this.modelValue.toString().length > 0)
            }
        }
    };

    const _hoisted_1 = ["value"];

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("textarea", vue.mergeProps({
        class: ['p-inputtextarea p-inputtext p-component', {'p-filled': $options.filled, 'p-inputtextarea-resizable ': $props.autoResize}]
      }, _ctx.$attrs, {
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = (...args) => ($options.onInput && $options.onInput(...args)))
      }), null, 16, _hoisted_1))
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

    var css_248z = "\n.p-inputtextarea-resizable {\n    overflow: hidden;\n    resize: none;\n}\n.p-fluid .p-inputtextarea {\n    width: 100%;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(Vue);
