import Ripple from 'primevue/ripple';
import { resolveDirective, withDirectives, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createElementVNode, toDisplayString } from 'vue';

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
        'ripple': Ripple
    }
};

const _hoisted_1 = ["disabled"];
const _hoisted_2 = { class: "p-button-label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");

  return withDirectives((openBlock(), createElementBlock("button", {
    class: normalizeClass($options.buttonClass),
    type: "button",
    disabled: $options.disabled
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      ($props.loading && !$props.icon)
        ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass($options.iconClass)
          }, null, 2))
        : createCommentVNode("", true),
      ($props.icon)
        ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass($options.iconClass)
          }, null, 2))
        : createCommentVNode("", true),
      createElementVNode("span", _hoisted_2, toDisplayString($props.label||' '), 1),
      ($props.badge)
        ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass($options.badgeStyleClass)
          }, toDisplayString($props.badge), 3))
        : createCommentVNode("", true)
    ])
  ], 10, _hoisted_1)), [
    [_directive_ripple]
  ])
}

script.render = render;

export { script as default };
