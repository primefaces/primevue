this.primevue = this.primevue || {};
this.primevue.splitbutton = (function (Button, TieredMenu, utils, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
    var TieredMenu__default = /*#__PURE__*/_interopDefaultLegacy(TieredMenu);

    var script = {
        name: 'SplitButton',
        inheritAttrs: false,
        props: {
            label: {
                type: String,
                default: null
            },
            icon: {
                type: String,
                default: null
            },
    		model: {
                type: Array,
                default: null
            },
            autoZIndex: {
                type: Boolean,
                default: true
            },
            baseZIndex: {
                type: Number,
                default: 0
            },
            appendTo: {
                type: String,
                default: 'body'
            },
            class: null,
            style: null
        },
        methods: {
            onDropdownButtonClick() {
                this.$refs.menu.toggle({currentTarget: this.$el});
            },
            onDefaultButtonClick() {
                this.$refs.menu.hide();
            }
        },
        computed: {
            ariaId() {
                return utils.UniqueComponentId();
            },
            containerClass() {
                return ['p-splitbutton p-component', this.class];
            }
        },
        components: {
            'PVSButton': Button__default["default"],
            'PVSMenu': TieredMenu__default["default"]
        }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_PVSButton = vue.resolveComponent("PVSButton");
      const _component_PVSMenu = vue.resolveComponent("PVSMenu");

      return (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass($options.containerClass),
        style: vue.normalizeStyle($props.style)
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createVNode(_component_PVSButton, vue.mergeProps({
            type: "button",
            class: "p-splitbutton-defaultbutton"
          }, _ctx.$attrs, {
            icon: $props.icon,
            label: $props.label,
            onClick: $options.onDefaultButtonClick
          }), null, 16, ["icon", "label", "onClick"])
        ]),
        vue.createVNode(_component_PVSButton, {
          type: "button",
          class: "p-splitbutton-menubutton",
          icon: "pi pi-chevron-down",
          onClick: $options.onDropdownButtonClick,
          disabled: _ctx.$attrs.disabled,
          "aria-haspopup": "true",
          "aria-controls": $options.ariaId + '_overlay'
        }, null, 8, ["onClick", "disabled", "aria-controls"]),
        vue.createVNode(_component_PVSMenu, {
          id: $options.ariaId + '_overlay',
          ref: "menu",
          model: $props.model,
          popup: true,
          autoZIndex: $props.autoZIndex,
          baseZIndex: $props.baseZIndex,
          appendTo: $props.appendTo
        }, null, 8, ["id", "model", "autoZIndex", "baseZIndex", "appendTo"])
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

    var css_248z = "\n.p-splitbutton[data-v-3d44cde8] {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    position: relative;\n}\n.p-splitbutton .p-splitbutton-defaultbutton[data-v-3d44cde8],\n.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button[data-v-3d44cde8],\n.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button[data-v-3d44cde8] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: 0 none;\n}\n.p-splitbutton-menubutton[data-v-3d44cde8],\n.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button[data-v-3d44cde8],\n.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button[data-v-3d44cde8] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.p-splitbutton .p-menu[data-v-3d44cde8] {\n    min-width: 100%;\n}\n.p-fluid .p-splitbutton[data-v-3d44cde8]  {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n";
    styleInject(css_248z);

    script.render = render;
    script.__scopeId = "data-v-3d44cde8";

    return script;

})(primevue.button, primevue.tieredmenu, primevue.utils, Vue);
