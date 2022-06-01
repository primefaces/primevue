import { openBlock, createElementBlock, mergeProps, normalizeClass, createCommentVNode, renderSlot, createElementVNode, toDisplayString } from 'vue';

var script = {
    name: 'Tag',
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    computed: {
        containerClass() {
            return ['p-tag p-component', {
                'p-tag-info': this.severity === 'info',
                'p-tag-success': this.severity === 'success',
                'p-tag-warning': this.severity === 'warning',
                'p-tag-danger': this.severity === 'danger',
                'p-tag-rounded': this.rounded
            }];
        },
        iconClass() {
            return ['p-tag-icon', this.icon];
        }
    }
};

const _hoisted_1 = { class: "p-tag-value" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span", mergeProps({ class: $options.containerClass }, _ctx.$attrs), [
    ($props.icon)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass($options.iconClass)
        }, null, 2))
      : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", _hoisted_1, toDisplayString($props.value), 1)
    ])
  ], 16))
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

var css_248z = "\n.p-tag {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-tag-icon,\n.p-tag-value,\n.p-tag-icon.pi {\n    line-height: 1.5;\n}\n.p-tag.p-tag-rounded {\n    border-radius: 10rem;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
