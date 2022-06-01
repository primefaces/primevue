import Button from 'primevue/button';
import { resolveComponent, openBlock, createElementBlock, normalizeClass, withKeys, renderSlot, createBlock, createCommentVNode } from 'vue';

var script = {
    name: 'Inplace',
    emits: ['open', 'close', 'update:active'],
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    data() {
        return {
            d_active: this.active
        }
    },
    methods: {
        open(event) {
            if (this.disabled) {
                return;
            }

            this.$emit('open', event);
            this.d_active = true;
            this.$emit('update:active', true);
        },
        close(event) {
            this.$emit('close', event);
            this.d_active = false;
            this.$emit('update:active', false);
        }
    },
    computed: {
        containerClass() {
            return ['p-inplace p-component', {'p-inplace-closable': this.closable}];
        },
        displayClass() {
            return ['p-inplace-display', {'p-disabled': this.disabled}];
        }
    },
    components: {
        'IPButton': Button
    }
};

const _hoisted_1 = ["tabindex"];
const _hoisted_2 = {
  key: 1,
  class: "p-inplace-content"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IPButton = resolveComponent("IPButton");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    (!$data.d_active)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass($options.displayClass),
          tabindex: _ctx.$attrs.tabindex||'0',
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.open && $options.open(...args))),
          onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => ($options.open && $options.open(...args)), ["enter"]))
        }, [
          renderSlot(_ctx.$slots, "display")
        ], 42, _hoisted_1))
      : (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "content"),
          ($props.closable)
            ? (openBlock(), createBlock(_component_IPButton, {
                key: 0,
                icon: "pi pi-times",
                onClick: $options.close
              }, null, 8, ["onClick"]))
            : createCommentVNode("", true)
        ]))
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

var css_248z = "\n.p-inplace .p-inplace-display {\n    display: inline;\n    cursor: pointer;\n}\n.p-inplace .p-inplace-content {\n    display: inline;\n}\n.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
