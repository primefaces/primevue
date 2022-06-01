this.primevue = this.primevue || {};
this.primevue.toolbar = (function (vue) {
    'use strict';

    var script = {
        name: 'Toolbar'
    };

    const _hoisted_1 = {
      class: "p-toolbar p-component",
      role: "toolbar"
    };
    const _hoisted_2 = { class: "p-toolbar-group-left" };
    const _hoisted_3 = { class: "p-toolbar-group-right" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "start")
        ]),
        vue.createElementVNode("div", _hoisted_3, [
          vue.renderSlot(_ctx.$slots, "end")
        ])
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

    var css_248z = "\n.p-toolbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.p-toolbar-group-left,\n.p-toolbar-group-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(Vue);
