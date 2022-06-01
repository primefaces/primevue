'use strict';

var utils = require('primevue/utils');
var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script = {
    name: 'Fieldset',
    emits: ['update:collapsed', 'toggle'],
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean
    },
    data() {
        return {
           d_collapsed: this.collapsed
        }
    },
    watch: {
        collapsed(newValue) {
            this.d_collapsed = newValue;
        }
    },
    methods: {
        toggle(event) {
            this.d_collapsed = !this.d_collapsed;
            this.$emit('update:collapsed', this.d_collapsed);
            this.$emit('toggle', {
                originalEvent: event,
                value: this.d_collapsed
            });
        }
    },
	computed: {
		iconClass() {
			return ['p-fieldset-toggler pi ', {
				'pi-minus': !this.d_collapsed,
				'pi-plus': this.d_collapsed
			}]
        },
        ariaId() {
            return utils.UniqueComponentId();
        }
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1 = { class: "p-fieldset-legend" };
const _hoisted_2 = ["id"];
const _hoisted_3 = ["id", "aria-controls", "aria-expanded"];
const _hoisted_4 = { class: "p-fieldset-legend-text" };
const _hoisted_5 = ["id", "aria-labelledby"];
const _hoisted_6 = { class: "p-fieldset-content" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = vue.resolveDirective("ripple");

  return (vue.openBlock(), vue.createElementBlock("fieldset", {
    class: vue.normalizeClass(['p-fieldset p-component', {'p-fieldset-toggleable': $props.toggleable}])
  }, [
    vue.createElementVNode("legend", _hoisted_1, [
      (!$props.toggleable)
        ? vue.renderSlot(_ctx.$slots, "legend", { key: 0 }, () => [
            vue.createElementVNode("span", {
              class: "p-fieldset-legend-text",
              id: $options.ariaId + '_header'
            }, vue.toDisplayString($props.legend), 9, _hoisted_2)
          ])
        : vue.createCommentVNode("", true),
      ($props.toggleable)
        ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
            key: 1,
            tabindex: "0",
            onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggle && $options.toggle(...args))),
            onKeydown: _cache[1] || (_cache[1] = vue.withKeys((...args) => ($options.toggle && $options.toggle(...args)), ["enter"])),
            id: $options.ariaId +  '_header',
            "aria-controls": $options.ariaId + '_content',
            "aria-expanded": !$data.d_collapsed
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass($options.iconClass)
            }, null, 2),
            vue.renderSlot(_ctx.$slots, "legend", {}, () => [
              vue.createElementVNode("span", _hoisted_4, vue.toDisplayString($props.legend), 1)
            ])
          ], 40, _hoisted_3)), [
            [_directive_ripple]
          ])
        : vue.createCommentVNode("", true)
    ]),
    vue.createVNode(vue.Transition, { name: "p-toggleable-content" }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", {
          class: "p-toggleable-content",
          role: "region",
          id: $options.ariaId + '_content',
          "aria-labelledby": $options.ariaId + '_header'
        }, [
          vue.createElementVNode("div", _hoisted_6, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 8, _hoisted_5), [
          [vue.vShow, !$data.d_collapsed]
        ])
      ]),
      _: 3
    })
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

var css_248z = "\n.p-fieldset-legend > a,\n.p-fieldset-legend > span {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-fieldset-toggleable .p-fieldset-legend a {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow: hidden;\n    position: relative;\n    text-decoration: none;\n}\n.p-fieldset-legend-text {\n    line-height: 1;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
