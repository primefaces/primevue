import { ObjectUtils } from 'primevue/utils';
import { openBlock, createElementBlock, normalizeClass, Fragment, renderList, createElementVNode, renderSlot, createCommentVNode } from 'vue';

var script = {
    name: 'Timeline',
    props: {
        value: null,
        align: {
            mode: String,
            default: 'left'
        },
        layout: {
            mode: String,
            default: 'vertical'
        },
        dataKey: null
    },
    methods: {
        getKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
        }
    },
    computed: {
        containerClass() {
            return [
                'p-timeline p-component',
                'p-timeline-' + this.align,
                'p-timeline-' + this.layout
            ];
        }
    }
};

const _hoisted_1 = { class: "p-timeline-event-opposite" };
const _hoisted_2 = { class: "p-timeline-event-separator" };
const _hoisted_3 = /*#__PURE__*/createElementVNode("div", { class: "p-timeline-event-marker" }, null, -1);
const _hoisted_4 = /*#__PURE__*/createElementVNode("div", { class: "p-timeline-event-connector" }, null, -1);
const _hoisted_5 = { class: "p-timeline-event-content" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.value, (item, index) => {
      return (openBlock(), createElementBlock("div", {
        key: $options.getKey(item, index),
        class: "p-timeline-event"
      }, [
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "opposite", {
            item: item,
            index: index
          })
        ]),
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "marker", {
            item: item,
            index: index
          }, () => [
            _hoisted_3
          ]),
          (index !== ($props.value.length - 1))
            ? renderSlot(_ctx.$slots, "connector", { key: 0 }, () => [
                _hoisted_4
              ])
            : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "content", {
            item: item,
            index: index
          })
        ])
      ]))
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

var css_248z = "\n.p-timeline {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-timeline-left .p-timeline-event-opposite {\n    text-align: right;\n}\n.p-timeline-left .p-timeline-event-content {\n    text-align: left;\n}\n.p-timeline-right .p-timeline-event {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n}\n.p-timeline-right .p-timeline-event-opposite {\n    text-align: left;\n}\n.p-timeline-right .p-timeline-event-content {\n    text-align: right;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n    text-align: right;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n    text-align: left;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n    text-align: left;\n}\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: right;\n}\n.p-timeline-event {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    min-height: 70px;\n}\n.p-timeline-event:last-child {\n    min-height: 0;\n}\n.p-timeline-event-opposite {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 0 1rem;\n}\n.p-timeline-event-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 0 1rem;\n}\n.p-timeline-event-separator {\n    -webkit-box-flex: 0;\n        -ms-flex: 0;\n            flex: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-timeline-event-marker {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-item-align: baseline;\n        align-self: baseline;\n}\n.p-timeline-event-connector {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.p-timeline-horizontal {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.p-timeline-horizontal .p-timeline-event {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.p-timeline-horizontal .p-timeline-event:last-child {\n    -webkit-box-flex: 0;\n        -ms-flex: 0;\n            flex: 0;\n}\n.p-timeline-horizontal .p-timeline-event-separator {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.p-timeline-horizontal .p-timeline-event-connector  {\n    width: 100%;\n}\n.p-timeline-bottom .p-timeline-event {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n}\n.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
