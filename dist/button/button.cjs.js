'use strict';

var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script = {
    name: 'Button',
    props: {
        label: {
            type: String
        },
        icon: {
            type: String
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        badge: {
            type: String
        },
        badgeClass: {
            type: String,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner pi-spin'
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-component': true,
                'p-button-icon-only': this.icon && !this.label,
                'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
                'p-disabled': this.$attrs.disabled || this.loading,
                'p-button-loading': this.loading,
                'p-button-loading-label-only': this.loading && !this.icon && this.label
            }
        },
        iconClass() {
            return [
                this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this.icon,
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label,
                    'p-button-icon-top': this.iconPos === 'top' && this.label,
                    'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
                }
            ]
        },
        badgeStyleClass() {
            return [
                'p-badge p-component', this.badgeClass, {
                'p-badge-no-gutter': this.badge && String(this.badge).length === 1
            }]
        },
        disabled() {
            return this.$attrs.disabled || this.loading;
        }
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1 = ["disabled"];
const _hoisted_2 = { class: "p-button-label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = vue.resolveDirective("ripple");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass($options.buttonClass),
    type: "button",
    disabled: $options.disabled
  }, [
    vue.renderSlot(_ctx.$slots, "default", {}, () => [
      ($props.loading && !$props.icon)
        ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass($options.iconClass)
          }, null, 2))
        : vue.createCommentVNode("", true),
      ($props.icon)
        ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: vue.normalizeClass($options.iconClass)
          }, null, 2))
        : vue.createCommentVNode("", true),
      vue.createElementVNode("span", _hoisted_2, vue.toDisplayString($props.label||' '), 1),
      ($props.badge)
        ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 2,
            class: vue.normalizeClass($options.badgeStyleClass)
          }, vue.toDisplayString($props.badge), 3))
        : vue.createCommentVNode("", true)
    ])
  ], 10, _hoisted_1)), [
    [_directive_ripple]
  ])
}

script.render = render;

module.exports = script;
