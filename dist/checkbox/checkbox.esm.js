import { ObjectUtils } from 'primevue/utils';
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, mergeProps } from 'vue';

var script = {
    name: 'Checkbox',
    inheritAttrs: false,
    emits: ['click', 'update:modelValue', 'change', 'input'],
    props: {
        value: null,
        modelValue: null,
        binary: Boolean,
        class: null,
        style: null,
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
        }
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.checked ? this.falseValue : this.trueValue;
                }
                else {
                    if (this.checked)
                        newModelValue = this.modelValue.filter(val => !ObjectUtils.equals(val, this.value));
                    else
                        newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('click', event);
                this.$emit('update:modelValue', newModelValue);
                this.$emit('change', event);
                this.$emit('input', newModelValue);
                this.$refs.input.focus();
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    },
    computed: {
        checked() {
            return this.binary ? this.modelValue === this.trueValue : ObjectUtils.contains(this.value, this.modelValue);
        },
        containerClass() {
            return ['p-checkbox p-component', this.class, {'p-checkbox-checked': this.checked, 'p-checkbox-disabled': this.$attrs.disabled, 'p-checkbox-focused': this.focused}];
        }
    }
};

const _hoisted_1 = { class: "p-hidden-accessible" };
const _hoisted_2 = ["checked", "value"];
const _hoisted_3 = ["aria-checked"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass),
    onClick: _cache[2] || (_cache[2] = $event => ($options.onClick($event))),
    style: normalizeStyle($props.style)
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("input", mergeProps({
        ref: "input",
        type: "checkbox",
        checked: $options.checked,
        value: $props.value
      }, _ctx.$attrs, {
        onFocus: _cache[0] || (_cache[0] = (...args) => ($options.onFocus && $options.onFocus(...args))),
        onBlur: _cache[1] || (_cache[1] = (...args) => ($options.onBlur && $options.onBlur(...args)))
      }), null, 16, _hoisted_2)
    ]),
    createElementVNode("div", {
      ref: "box",
      class: normalizeClass(['p-checkbox-box', {'p-highlight': $options.checked, 'p-disabled': _ctx.$attrs.disabled, 'p-focus': $data.focused}]),
      role: "checkbox",
      "aria-checked": $options.checked
    }, [
      createElementVNode("span", {
        class: normalizeClass(['p-checkbox-icon', {'pi pi-check': $options.checked}])
      }, null, 2)
    ], 10, _hoisted_3)
  ], 6))
}

script.render = render;

export { script as default };
