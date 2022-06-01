this.primevue = this.primevue || {};
this.primevue.inputtext = (function (vue) {
    'use strict';

    var script = {
        name: 'InputText',
        emits: ['update:modelValue'],
        props: {
            modelValue: null
        },
        methods: {
            onInput(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        },
        computed: {
            filled() {
                return (this.modelValue != null && this.modelValue.toString().length > 0)
            }
        }
    };

    const _hoisted_1 = ["value"];

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({
        class: ['p-inputtext p-component', {'p-filled': $options.filled}],
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = (...args) => ($options.onInput && $options.onInput(...args)))
      }, _ctx.$attrs), null, 16, _hoisted_1))
    }

    script.render = render;

    return script;

})(Vue);
