import { renderSlot } from 'vue';

var script = {
    name: 'TabPanel',
    props: {
        header: null,
        disabled: Boolean
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default")
}

script.render = render;

export { script as default };
