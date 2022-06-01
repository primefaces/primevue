import { openBlock, createElementBlock, normalizeClass, createCommentVNode, Fragment, renderList, withKeys, withModifiers } from 'vue';

var script = {
    name: 'Rating',
    emits: ['update:modelValue', 'change'],
    props: {
        modelValue: {
            type: Number,
            default: null
        },
		disabled: {
            type: Boolean,
            default: false
        },
		readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        cancel: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onStarClick(event, value) {
            if (!this.readonly && !this.disabled) {
                this.updateModel(event, value);
            }
        },
        onCancelClick(event) {
            if (!this.readonly && !this.disabled) {
                this.updateModel(event, null);
            }
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', {
                originalEvent: event,
                value: value
            });
        }
    },
    computed: {
        containerClass() {
            return [
                'p-rating',
                {
                    'p-readonly': this.readonly,
                    'p-disabled': this.disabled
                }
            ];
        },
        focusIndex() {
            return (this.disabled || this.readonly) ? null : '0';
        }
    }
};

const _hoisted_1 = ["tabindex"];
const _hoisted_2 = ["onClick", "tabindex", "onKeydown"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    ($props.cancel)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "p-rating-icon p-rating-cancel pi pi-ban",
          tabindex: $options.focusIndex,
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.onCancelClick && $options.onCancelClick(...args)))
        }, null, 8, _hoisted_1))
      : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.stars, (i) => {
      return (openBlock(), createElementBlock("span", {
        key: i,
        onClick: $event => ($options.onStarClick($event,i)),
        tabindex: $options.focusIndex,
        onKeydown: withKeys(withModifiers($event => ($options.onStarClick($event,i)), ["prevent"]), ["enter"]),
        class: normalizeClass(['p-rating-icon', {'pi pi-star': (i > $props.modelValue), 'pi pi-star-fill': (i <= $props.modelValue)}])
      }, null, 42, _hoisted_2))
    }), 128))
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

var css_248z = "\n.p-rating-icon {\n    cursor: pointer;\n}\n.p-rating.p-rating-readonly .p-rating-icon {\n    cursor: default;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
