import { openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString } from 'vue';

var script = {
    name: 'Badge',
    props: {
        value: null,
        severity: null,
        size: null
    },
    computed: {
        containerClass() {
            return this.$slots.default ? 'p-overlay-badge': this.badgeClass;
        },
        badgeClass() {
            return ['p-badge p-component', {
                'p-badge-no-gutter': this.value && String(this.value).length === 1,
                'p-badge-dot': !this.value && !this.$slots.default,
                'p-badge-lg': this.size === 'large',
                'p-badge-xl': this.size === 'xlarge',
                'p-badge-info': this.severity === 'info',
                'p-badge-success': this.severity === 'success',
                'p-badge-warning': this.severity === 'warning',
                'p-badge-danger': this.severity === 'danger'
            }];
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span", {
    class: normalizeClass($options.badgeClass)
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(toDisplayString($props.value), 1)
    ])
  ], 2))
}

script.render = render;

export { script as default };
