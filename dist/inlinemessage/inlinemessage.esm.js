import { openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createTextVNode } from 'vue';

var script = {
    name: 'InlineMessage',
    props: {
        severity: {
            type: String,
            default: 'error'
        }
    },
    timeout: null,
    data() {
        return {
            visible: true
        }
    },
    mounted() {
        if (!this.sticky) {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        containerClass() {
            return ['p-inline-message p-component p-inline-message-' + this.severity, {'p-inline-message-icon-only': !this.$slots.default}];
        },
        iconClass() {
            return ['p-inline-message-icon pi', {
                'pi-info-circle': this.severity === 'info',
                'pi-check': this.severity === 'success',
                'pi-exclamation-triangle': this.severity === 'warn',
                'pi-times-circle': this.severity === 'error'
            }];
        }
    }
};

const _hoisted_1 = { class: "p-inline-message-text" };
const _hoisted_2 = /*#__PURE__*/createTextVNode(" ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    "aria-live": "polite",
    class: normalizeClass($options.containerClass)
  }, [
    createElementVNode("span", {
      class: normalizeClass($options.iconClass)
    }, null, 2),
    createElementVNode("span", _hoisted_1, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _hoisted_2
      ])
    ])
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

var css_248z = "\n.p-inline-message {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    vertical-align: top;\n}\n.p-inline-message-icon-only .p-inline-message-text {\n    visibility: hidden;\n    width: 0;\n}\n.p-fluid .p-inline-message {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
