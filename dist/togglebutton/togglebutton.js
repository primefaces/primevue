this.primevue = this.primevue || {};
this.primevue.togglebutton = (function (Ripple, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

    var script = {
        name: 'ToggleButton',
        emits: ['update:modelValue', 'change'],
        props: {
            modelValue: Boolean,
    		onIcon: String,
    		offIcon: String,
            onLabel: String,
            offLabel: String,
            iconPos: {
                type: String,
                default: 'left'
            }
        },
        methods: {
            onClick(event) {
                if (!this.$attrs.disabled) {
                    this.$emit('update:modelValue', !this.modelValue);
                    this.$emit('change', event);
                }
            }
        },
        computed: {
            buttonClass() {
                return {
                    'p-button p-togglebutton p-component': true,
                    'p-button-icon-only': this.hasIcon && !this.hasLabel,
                    'p-disabled': this.$attrs.disabled,
                    'p-highlight': this.modelValue === true
                }
            },
            iconClass() {
                return [
                    this.modelValue ? this.onIcon: this.offIcon,
                    'p-button-icon',
                    {
                        'p-button-icon-left': this.iconPos === 'left' && this.label,
                        'p-button-icon-right': this.iconPos === 'right' && this.label
                    }
                ]
            },
            hasLabel() {
                return this.onLabel && this.onLabel.length > 0 && this.offLabel && this.offLabel.length > 0;
            },
            hasIcon() {
                return this.onIcon && this.onIcon.length > 0 && this.offIcon && this.offIcon.length > 0;
            },
            label() {
                return this.hasLabel ? (this.modelValue ? this.onLabel : this.offLabel): '&nbsp;';
            }
        },
        directives: {
            'ripple': Ripple__default["default"]
        }
    };

    const _hoisted_1 = ["aria-checked", "tabindex"];
    const _hoisted_2 = { class: "p-button-label" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _directive_ripple = vue.resolveDirective("ripple");

      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass($options.buttonClass),
        onClick: _cache[0] || (_cache[0] = $event => ($options.onClick($event))),
        role: "checkbox",
        "aria-checked": $props.modelValue,
        tabindex: _ctx.$attrs.disabled ? null : '0'
      }, [
        ($options.hasIcon)
          ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: vue.normalizeClass($options.iconClass)
            }, null, 2))
          : vue.createCommentVNode("", true),
        vue.createElementVNode("span", _hoisted_2, vue.toDisplayString($options.label), 1)
      ], 10, _hoisted_1)), [
        [_directive_ripple]
      ])
    }

    script.render = render;

    return script;

})(primevue.ripple, Vue);
