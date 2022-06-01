import { UniqueComponentId } from 'primevue/utils';
import Ripple from 'primevue/ripple';
import { resolveDirective, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, toDisplayString, createCommentVNode, withDirectives, createVNode, Transition, withCtx, vShow } from 'vue';

var script = {
    name: 'Panel',
    emits: ['update:collapsed', 'toggle'],
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean
    },
    data() {
        return {
            d_collapsed: this.collapsed
        }
    },
    watch: {
        collapsed(newValue) {
            this.d_collapsed = newValue;
        }
    },
    methods: {
        toggle(event) {
            this.d_collapsed = !this.d_collapsed;
            this.$emit('update:collapsed', this.d_collapsed);
            this.$emit('toggle', {
                originalEvent: event,
                value: this.d_collapsed
            });
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return ['p-panel p-component', {'p-panel-toggleable': this.toggleable}];
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = { class: "p-panel-header" };
const _hoisted_2 = ["id"];
const _hoisted_3 = { class: "p-panel-icons" };
const _hoisted_4 = ["id", "aria-controls", "aria-expanded"];
const _hoisted_5 = ["id", "aria-labelledby"];
const _hoisted_6 = { class: "p-panel-content" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "header", {}, () => [
        ($props.header)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "p-panel-title",
              id: $options.ariaId + '_header'
            }, toDisplayString($props.header), 9, _hoisted_2))
          : createCommentVNode("", true)
      ]),
      createElementVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "icons"),
        ($props.toggleable)
          ? withDirectives((openBlock(), createElementBlock("button", {
              key: 0,
              class: "p-panel-header-icon p-panel-toggler p-link",
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggle && $options.toggle(...args))),
              type: "button",
              id: $options.ariaId +  '_header',
              "aria-controls": $options.ariaId + '_content',
              "aria-expanded": !$data.d_collapsed
            }, [
              createElementVNode("span", {
                class: normalizeClass({'pi pi-minus': !$data.d_collapsed, 'pi pi-plus': $data.d_collapsed})
              }, null, 2)
            ], 8, _hoisted_4)), [
              [_directive_ripple]
            ])
          : createCommentVNode("", true)
      ])
    ]),
    createVNode(Transition, { name: "p-toggleable-content" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: "p-toggleable-content",
          role: "region",
          id: $options.ariaId + '_content',
          "aria-labelledby": $options.ariaId + '_header'
        }, [
          createElementVNode("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 8, _hoisted_5), [
          [vShow, !$data.d_collapsed]
        ])
      ]),
      _: 3
    })
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

var css_248z = "\n.p-panel-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-panel-title {\n    line-height: 1;\n}\n.p-panel-header-icon {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
