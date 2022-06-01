'use strict';

var vue = require('vue');

var script = {
    name: 'AccordionTab',
    props: {
        header: null,
        disabled: Boolean
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.renderSlot(_ctx.$slots, "default")
}

script.render = render;

module.exports = script;
