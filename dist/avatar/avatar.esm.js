import { openBlock, createElementBlock, normalizeClass, renderSlot, toDisplayString, createCommentVNode } from 'vue';

var script = {
    name: 'Avatar',
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: 'normal'
        },
        shape: {
            type: String,
            default: "square"
        }
    },
    computed: {
        containerClass() {
            return ['p-avatar p-component', {
                'p-avatar-image': this.image != null,
                'p-avatar-circle': this.shape === 'circle',
                'p-avatar-lg': this.size === 'large',
                'p-avatar-xl': this.size === 'xlarge'
            }];
        },
        iconClass() {
            return ['p-avatar-icon', this.icon];
        }
    }
};

const _hoisted_1 = {
  key: 0,
  class: "p-avatar-text"
};
const _hoisted_2 = ["src"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      ($props.label)
        ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString($props.label), 1))
        : ($props.icon)
          ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass($options.iconClass)
            }, null, 2))
          : ($props.image)
            ? (openBlock(), createElementBlock("img", {
                key: 2,
                src: $props.image
              }, null, 8, _hoisted_2))
            : createCommentVNode("", true)
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

var css_248z = "\n.p-avatar {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 2rem;\n    height: 2rem;\n    font-size: 1rem;\n}\n.p-avatar.p-avatar-image {\n    background-color: transparent;\n}\n.p-avatar.p-avatar-circle {\n    border-radius: 50%;\n}\n.p-avatar-circle img {\n    border-radius: 50%;\n}\n.p-avatar .p-avatar-icon {\n    font-size: 1rem;\n}\n.p-avatar img {\n    width: 100%;\n    height: 100%;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
