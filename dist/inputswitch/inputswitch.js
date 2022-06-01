this.primevue = this.primevue || {};
this.primevue.inputswitch = (function (vue) {
    'use strict';

    var script = {
        name: 'InputSwitch',
        inheritAttrs: false,
        emits: ['click', 'update:modelValue', 'change', 'input'],
        props: {
            modelValue: {
                type: null,
                default: false
            },
            class: null,
            style: null,
            trueValue: {
                type: null,
                default: true
            },
            falseValue: {
                type: null,
                default: false
            }
        },
        data() {
            return {
                focused: false
            }
        },
        methods: {
            onClick(event) {
                if (!this.$attrs.disabled) {
                    const newValue = this.checked ? this.falseValue : this.trueValue;
                    this.$emit('click', event);
                    this.$emit('update:modelValue', newValue);
                    this.$emit('change', event);
                    this.$emit('input', newValue);
                    this.$refs.input.focus();
                }
                event.preventDefault();
            },
            onFocus() {
                this.focused = true;
            },
            onBlur() {
                this.focused = false;
            }
        },
        computed: {
            containerClass() {
                return [
                    'p-inputswitch p-component', this.class,
                    {
                        'p-inputswitch-checked': this.checked,
    					'p-disabled': this.$attrs.disabled,
                        'p-focus': this.focused
                    }
                ];
            },
            checked() {
                return this.modelValue === this.trueValue;
            }
        }
    };

    const _hoisted_1 = { class: "p-hidden-accessible" };
    const _hoisted_2 = ["checked", "aria-checked"];
    const _hoisted_3 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-inputswitch-slider" }, null, -1);

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass($options.containerClass),
        onClick: _cache[3] || (_cache[3] = $event => ($options.onClick($event))),
        style: vue.normalizeStyle($props.style)
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.createElementVNode("input", vue.mergeProps({
            ref: "input",
            type: "checkbox",
            checked: $options.checked
          }, _ctx.$attrs, {
            onFocus: _cache[0] || (_cache[0] = $event => ($options.onFocus($event))),
            onBlur: _cache[1] || (_cache[1] = $event => ($options.onBlur($event))),
            onKeydown: _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers($event => ($options.onClick($event)), ["prevent"]), ["enter"])),
            role: "switch",
            "aria-checked": $options.checked
          }), null, 16, _hoisted_2)
        ]),
        _hoisted_3
      ], 6))
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

    var css_248z = "\n.p-inputswitch {\n    position: relative;\n    display: inline-block;\n}\n.p-inputswitch-slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.p-inputswitch-slider:before {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(Vue);
