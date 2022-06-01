import Ripple from 'primevue/ripple';
import { resolveDirective, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, renderSlot, createElementBlock, createCommentVNode, vShow } from 'vue';

var script = {
    name: 'Message',
    emits: ['close'],
    props: {
        severity: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        sticky: {
            type: Boolean,
            default: true
        },
        life: {
            type: Number,
            default: 3000
        },
        icon: {
            type: String,
            default: null
        },
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
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        }
    },
    computed: {
        containerClass() {
            return 'p-message p-component p-message-' + this.severity;
        },
        iconClass() {
            return ['p-message-icon pi', this.icon ? this.icon : {
                'pi-info-circle': this.severity === 'info',
                'pi-check': this.severity === 'success',
                'pi-exclamation-triangle': this.severity === 'warn',
                'pi-times-circle': this.severity === 'error'
            }];
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = { class: "p-message-wrapper" };
const _hoisted_2 = { class: "p-message-text" };
const _hoisted_3 = /*#__PURE__*/createElementVNode("i", { class: "p-message-close-icon pi pi-times" }, null, -1);
const _hoisted_4 = [
  _hoisted_3
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createBlock(Transition, {
    name: "p-message",
    appear: ""
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass($options.containerClass),
        role: "alert"
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("span", {
            class: normalizeClass($options.iconClass)
          }, null, 2),
          createElementVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "default")
          ]),
          ($props.closable)
            ? withDirectives((openBlock(), createElementBlock("button", {
                key: 0,
                class: "p-message-close p-link",
                onClick: _cache[0] || (_cache[0] = $event => ($options.close($event))),
                type: "button"
              }, _hoisted_4)), [
                [_directive_ripple]
              ])
            : createCommentVNode("", true)
        ])
      ], 2), [
        [vShow, $data.visible]
      ])
    ]),
    _: 3
  }))
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

var css_248z = "\n.p-message-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-message-close {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-message-close.p-link {\n    margin-left: auto;\n    overflow: hidden;\n    position: relative;\n}\n.p-message-enter-from {\n    opacity: 0;\n}\n.p-message-enter-active {\n    -webkit-transition: opacity .3s;\n    transition: opacity .3s;\n}\n.p-message.p-message-leave-from {\n    max-height: 1000px;\n}\n.p-message.p-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin: 0 !important;\n}\n.p-message-leave-active {\n    overflow: hidden;\n    -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .15s;\n    transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .15s;\n}\n.p-message-leave-active .p-message-close {\n    display: none;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
