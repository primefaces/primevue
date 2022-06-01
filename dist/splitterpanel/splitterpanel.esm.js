import { openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

var script = {
    name: 'SplitterPanel',
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
            default: null
        }
    },
    computed: {
        containerClass() {
            return ['p-splitter-panel', {'p-splitter-panel-nested': this.isNested}];
        },
        isNested() {
            return this.$slots.default().some(child => {
                return child.type.name === 'Splitter';
            });
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass($options.containerClass)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2))
}

script.render = render;

export { script as default };
