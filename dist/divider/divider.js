this.primevue = this.primevue || {};
this.primevue.divider = (function (vue) {
    'use strict';

    var script = {
        name: 'Divider',
        props: {
            align: {
                type: String,
                default: null
            },
            layout: {
                type: String,
                default: 'horizontal'
            },
            type: {
                type: String,
                default: 'solid'
            }
        },
        computed: {
            containerClass() {
                return ['p-divider p-component', 'p-divider-' + this.layout, 'p-divider-' + this.type,
                    {'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left')},
                    {'p-divider-center': this.layout === 'horizontal' && this.align === 'center'},
                    {'p-divider-right': this.layout === 'horizontal' && this.align === 'right'},
                    {'p-divider-top': this.layout === 'vertical' && (this.align === 'top')},
                    {'p-divider-center': this.layout === 'vertical' && (!this.align || this.align === 'center')},
                    {'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'}
                ];
            }
        }
    };

    const _hoisted_1 = {
      key: 0,
      class: "p-divider-content"
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass($options.containerClass),
        role: "separator"
      }, [
        (_ctx.$slots.default)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
              vue.renderSlot(_ctx.$slots, "default")
            ]))
          : vue.createCommentVNode("", true)
      ], 2))
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

    var css_248z = "\n.p-divider-horizontal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    position: relative;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-divider-horizontal:before {\n    position: absolute;\n    display: block;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    content: \"\";\n}\n.p-divider-horizontal.p-divider-left {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.p-divider-horizontal.p-divider-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.p-divider-horizontal.p-divider-center {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-divider-content {\n    z-index: 1;\n}\n.p-divider-vertical {\n    min-height: 100%;\n    margin: 0 1rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-divider-vertical:before {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 50%;\n    height: 100%;\n    content: \"\";\n}\n.p-divider-vertical.p-divider-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-divider-vertical.p-divider-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-divider-vertical.p-divider-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.p-divider-solid.p-divider-horizontal:before {\n    border-top-style: solid;\n}\n.p-divider-solid.p-divider-vertical:before {\n    border-left-style: solid;\n}\n.p-divider-dashed.p-divider-horizontal:before {\n    border-top-style: dashed;\n}\n.p-divider-dashed.p-divider-vertical:before {\n    border-left-style: dashed;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n    border-top-style: dotted;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n    border-left-style: dotted;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(Vue);
