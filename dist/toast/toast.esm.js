import ToastEventBus from 'primevue/toasteventbus';
import Ripple from 'primevue/ripple';
import { resolveDirective, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, toDisplayString, createBlock, resolveDynamicComponent, withDirectives, createCommentVNode, resolveComponent, Teleport, mergeProps, createVNode, TransitionGroup, withCtx, renderList } from 'vue';
import { ZIndexUtils, ObjectUtils, UniqueComponentId } from 'primevue/utils';

var script$1 = {
    name: 'ToastMessage',
    emits: ['close'],
    props: {
        message: null,
        template: null
    },
    closeTimeout: null,
    mounted() {
        if (this.message.life) {
            this.closeTimeout = setTimeout(() => {
                this.close();
            }, this.message.life);
        }
    },
    beforeUnmount() {
        this.clearCloseTimeout();
    },
    methods: {
        close() {
            this.$emit('close', this.message);
        },
        onCloseClick() {
            this.clearCloseTimeout();
            this.close();
        },
        clearCloseTimeout() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null;
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-toast-message', this.message.styleClass, {
                'p-toast-message-info': this.message.severity === 'info',
                'p-toast-message-warn': this.message.severity === 'warn',
                'p-toast-message-error': this.message.severity === 'error',
                'p-toast-message-success': this.message.severity === 'success'
            }];
        },
        iconClass() {
            return ['p-toast-message-icon pi', {
                'pi-info-circle': this.message.severity === 'info',
                'pi-exclamation-triangle': this.message.severity === 'warn',
                'pi-times': this.message.severity === 'error',
                'pi-check': this.message.severity === 'success'
            }];
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = { class: "p-toast-message-text" };
const _hoisted_2 = { class: "p-toast-summary" };
const _hoisted_3 = { class: "p-toast-detail" };
const _hoisted_4 = /*#__PURE__*/createElementVNode("span", { class: "p-toast-icon-close-icon pi pi-times" }, null, -1);
const _hoisted_5 = [
  _hoisted_4
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, [
    createElementVNode("div", {
      class: normalizeClass(["p-toast-message-content", $props.message.contentStyleClass])
    }, [
      (!$props.template)
        ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createElementVNode("span", {
              class: normalizeClass($options.iconClass)
            }, null, 2),
            createElementVNode("div", _hoisted_1, [
              createElementVNode("span", _hoisted_2, toDisplayString($props.message.summary), 1),
              createElementVNode("div", _hoisted_3, toDisplayString($props.message.detail), 1)
            ])
          ], 64))
        : (openBlock(), createBlock(resolveDynamicComponent($props.template), {
            key: 1,
            message: $props.message
          }, null, 8, ["message"])),
      ($props.message.closable !== false)
        ? withDirectives((openBlock(), createElementBlock("button", {
            key: 2,
            class: "p-toast-icon-close p-link",
            onClick: _cache[0] || (_cache[0] = (...args) => ($options.onCloseClick && $options.onCloseClick(...args))),
            type: "button"
          }, _hoisted_5)), [
            [_directive_ripple]
          ])
        : createCommentVNode("", true)
    ], 2)
  ], 2))
}

script$1.render = render$1;

var messageIdx = 0;

var script = {
    name: 'Toast',
    inheritAttrs: false,
    props: {
        group: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: 'top-right'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        breakpoints: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            messages: []
        }
    },
    styleElement: null,
    mounted() {
        ToastEventBus.on('add', this.onAdd);
        ToastEventBus.on('remove-group', this.onRemoveGroup);
        ToastEventBus.on('remove-all-groups', this.onRemoveAllGroups);

        if (this.breakpoints) {
            this.createStyle();
        }
    },
    beforeUnmount() {
        this.destroyStyle();

        if (this.$refs.container && this.autoZIndex) {
            ZIndexUtils.clear(this.$refs.container);
        }

        ToastEventBus.off('add', this.onAdd);
        ToastEventBus.off('remove-group', this.onRemoveGroup);
        ToastEventBus.off('remove-all-groups', this.onRemoveAllGroups);
    },
    methods: {
        add(message) {
            if (message.id == null) {
                message.id = messageIdx++;
            }

            this.messages = [...this.messages, message];
        },
        remove(message) {
            let index = -1;
            for (let i = 0; i < this.messages.length; i++) {
                if (this.messages[i] === message) {
                    index = i;
                    break;
                }
            }

            this.messages.splice(index, 1);
        },
        onAdd(message) {
            if (this.group == message.group) {
                this.add(message);
            }
        },
        onRemoveGroup(group) {
            if (this.group === group) {
                this.messages = [];
            }
        },
        onRemoveAllGroups() {
            this.messages = [];
        },
        onEnter() {
            this.$refs.container.setAttribute(this.attributeSelector, '');

            if (this.autoZIndex) {
                ZIndexUtils.set('modal', this.$refs.container, this.baseZIndex || this.$primevue.config.zIndex.modal);
            }
        },
        onLeave() {
            if (this.$refs.container && this.autoZIndex && ObjectUtils.isEmpty(this.messages)) {
                ZIndexUtils.clear(this.$refs.container);
            }
        },
        createStyle() {
            if (!this.styleElement) {
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                document.head.appendChild(this.styleElement);

                let innerHTML = '';
                for (let breakpoint in this.breakpoints) {
                    let breakpointStyle = '';
                    for (let styleProp in this.breakpoints[breakpoint]) {
                        breakpointStyle += styleProp + ':' + this.breakpoints[breakpoint][styleProp] + '!important;';
                    }
                    innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-toast[${this.attributeSelector}] {
                                ${breakpointStyle}
                            }
                        }
                    `;
                }

                this.styleElement.innerHTML = innerHTML;
            }
        },
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        }
    },
    components: {
        'ToastMessage': script$1
    },
    computed: {
        containerClass() {
            return ['p-toast p-component p-toast-' + this.position, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        attributeSelector() {
            return UniqueComponentId();
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ToastMessage = resolveComponent("ToastMessage");

  return (openBlock(), createBlock(Teleport, { to: "body" }, [
    createElementVNode("div", mergeProps({
      ref: "container",
      class: $options.containerClass
    }, _ctx.$attrs), [
      createVNode(TransitionGroup, {
        name: "p-toast-message",
        tag: "div",
        onEnter: $options.onEnter,
        onLeave: $options.onLeave
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, (msg) => {
            return (openBlock(), createBlock(_component_ToastMessage, {
              key: msg.id,
              message: msg,
              onClose: _cache[0] || (_cache[0] = $event => ($options.remove($event))),
              template: _ctx.$slots.message
            }, null, 8, ["message", "template"]))
          }), 128))
        ]),
        _: 1
      }, 8, ["onEnter", "onLeave"])
    ], 16)
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

var css_248z = "\n.p-toast {\n    position: fixed;\n    width: 25rem;\n}\n.p-toast-message-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-toast-message-text {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.p-toast-top-right {\n\ttop: 20px;\n\tright: 20px;\n}\n.p-toast-top-left {\n\ttop: 20px;\n\tleft: 20px;\n}\n.p-toast-bottom-left {\n\tbottom: 20px;\n\tleft: 20px;\n}\n.p-toast-bottom-right {\n\tbottom: 20px;\n\tright: 20px;\n}\n.p-toast-top-center {\n\ttop: 20px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.p-toast-bottom-center {\n\tbottom: 20px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.p-toast-center {\n\tleft: 50%;\n\ttop: 50%;\n    min-width: 20vw;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.p-toast-icon-close {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n.p-toast-icon-close.p-link {\n\tcursor: pointer;\n}\n\n/* Animations */\n.p-toast-message-enter-from {\n    opacity: 0;\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%);\n}\n.p-toast-message-leave-from {\n    max-height: 1000px;\n}\n.p-toast .p-toast-message.p-toast-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin-bottom: 0;\n    overflow: hidden;\n}\n.p-toast-message-enter-active {\n    -webkit-transition: transform .3s, opacity .3s;\n    -webkit-transition: opacity .3s, -webkit-transform .3s;\n    transition: opacity .3s, -webkit-transform .3s;\n    transition: transform .3s, opacity .3s;\n    transition: transform .3s, opacity .3s, -webkit-transform .3s;\n}\n.p-toast-message-leave-active {\n    -webkit-transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n    transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
