import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, Fragment, renderList, renderSlot, toDisplayString, mergeProps } from 'vue';

var script = {
    name: 'Chips',
    inheritAttrs: false,
    emits: ['update:modelValue', 'add', 'remove'],
    props: {
        modelValue: {
            type: Array,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        separator: {
            type: String,
            default: null
        },
        addOnBlur: {
            type: Boolean,
            default: null
        },
        allowDuplicate: {
            type: Boolean,
            default: true
        },
        class: null,
        style: null
    },
    data() {
        return {
            inputValue: null,
            focused: false
        };
    },
    methods: {
        onWrapperClick() {
            this.$refs.input.focus();
        },
        onInput(event) {
            this.inputValue = event.target.value;
        },
        onFocus() {
            this.focused = true;
        },
        onBlur(event) {
            this.focused = false;
            if (this.addOnBlur) {
                this.addItem(event, event.target.value, false);
            }
        },
        onKeyDown(event) {
            const inputValue = event.target.value;

            switch(event.which) {
                //backspace
                case 8:
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        this.removeItem(event, this.modelValue.length - 1);
                    }
                break;

                //enter
                case 13:
                    if (inputValue && inputValue.trim().length && !this.maxedOut) {
                        this.addItem(event, inputValue, true);
                    }
                break;

                default:
                    if (this.separator) {
                        if (this.separator === ',' && (event.which === 188 || event.which === 110)) {
                            this.addItem(event, inputValue, true);
                        }
                    }
                break;
            }
        },
        onPaste(event) {
            if (this.separator) {
                let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');
                if (pastedData) {
                    let value = this.modelValue || [];
                    let pastedValues = pastedData.split(this.separator);
                    pastedValues = pastedValues.filter(val => (this.allowDuplicate || value.indexOf(val) === -1));
                    value = [...value, ...pastedValues];
                    this.updateModel(event, value, true);
                }
            }
        },
        updateModel(event, value, preventDefault) {
            this.$emit('update:modelValue', value);
            this.$emit('add', {
                originalEvent: event,
                value: value
            });
            this.$refs.input.value = '';
            this.inputValue = '';

            if (preventDefault) {
                event.preventDefault();
            }
        },
        addItem(event, item, preventDefault) {
            if (item && item.trim().length) {
                let value = this.modelValue ? [...this.modelValue]: [];
                if (this.allowDuplicate || value.indexOf(item) === -1) {
                    value.push(item);
                    this.updateModel(event, value, preventDefault);
                }
            }
        },
        removeItem(event, index) {
            if (this.$attrs.disabled) {
                return;
            }

            let values = [...this.modelValue];
            const removedItem = values.splice(index, 1);
            this.$emit('update:modelValue', values);
            this.$emit('remove', {
                originalEvent: event,
                value: removedItem
            });
        }
    },
    computed: {
        maxedOut() {
            return this.max && this.modelValue && this.max === this.modelValue.length;
        },
        containerClass() {
            return ['p-chips p-component p-inputwrapper', this.class, {
                'p-inputwrapper-filled': ((this.modelValue && this.modelValue.length) || (this.inputValue && this.inputValue.length)),
                'p-inputwrapper-focus': this.focused
            }];
        }
    }
};

const _hoisted_1 = { class: "p-chips-token-label" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "p-chips-input-token" };
const _hoisted_4 = ["disabled"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass),
    style: normalizeStyle($props.style)
  }, [
    createElementVNode("ul", {
      class: normalizeClass(['p-inputtext p-chips-multiple-container', {'p-disabled': _ctx.$attrs.disabled, 'p-focus': $data.focused}]),
      onClick: _cache[5] || (_cache[5] = $event => ($options.onWrapperClick()))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.modelValue, (val, i) => {
        return (openBlock(), createElementBlock("li", {
          key: `${i}_${val}`,
          class: "p-chips-token"
        }, [
          renderSlot(_ctx.$slots, "chip", { value: val }, () => [
            createElementVNode("span", _hoisted_1, toDisplayString(val), 1)
          ]),
          createElementVNode("span", {
            class: "p-chips-token-icon pi pi-times-circle",
            onClick: $event => ($options.removeItem($event, i))
          }, null, 8, _hoisted_2)
        ]))
      }), 128)),
      createElementVNode("li", _hoisted_3, [
        createElementVNode("input", mergeProps({
          ref: "input",
          type: "text"
        }, _ctx.$attrs, {
          onFocus: _cache[0] || (_cache[0] = (...args) => ($options.onFocus && $options.onFocus(...args))),
          onBlur: _cache[1] || (_cache[1] = $event => ($options.onBlur($event))),
          onInput: _cache[2] || (_cache[2] = (...args) => ($options.onInput && $options.onInput(...args))),
          onKeydown: _cache[3] || (_cache[3] = $event => ($options.onKeyDown($event))),
          onPaste: _cache[4] || (_cache[4] = $event => ($options.onPaste($event))),
          disabled: _ctx.$attrs.disabled || $options.maxedOut
        }), null, 16, _hoisted_4)
      ])
    ], 2)
  ], 6))
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

var css_248z = "\n.p-chips {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.p-chips-multiple-container {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.p-chips-token {\n    cursor: default;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n}\n.p-chips-input-token {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.p-chips-token-icon {\n    cursor: pointer;\n}\n.p-chips-input-token input {\n    border: 0 none;\n    outline: 0 none;\n    background-color: transparent;\n    margin: 0;\n    padding: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n}\n.p-fluid .p-chips {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
