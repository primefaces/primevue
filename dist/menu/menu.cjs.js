'use strict';

var utils = require('primevue/utils');
var OverlayEventBus = require('primevue/overlayeventbus');
var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script$1 = {
    name: 'Menuitem',
    inheritAttrs: false,
    emits: ['click'],
    props: {
        item: null,
        template: null,
        exact: null
    },
    methods: {
        onClick(event, navigate) {
            this.$emit('click', {
                originalEvent: event,
                item: this.item,
                navigate: navigate
            });
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        visible() {
            return (typeof this.item.visible === 'function' ? this.item.visible() : this.item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        },
        label() {
            return (typeof this.item.label === 'function' ? this.item.label() : this.item.label);
        }
    },
    computed: {
        containerClass() {
            return ['p-menuitem', this.item.class];
        }
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1$1 = ["href", "onClick"];
const _hoisted_2$1 = { class: "p-menuitem-text" };
const _hoisted_3 = ["href", "target", "tabindex"];
const _hoisted_4 = { class: "p-menuitem-text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _directive_ripple = vue.resolveDirective("ripple");

  return ($options.visible())
    ? (vue.openBlock(), vue.createElementBlock("li", {
        key: 0,
        class: vue.normalizeClass($options.containerClass),
        role: "none",
        style: vue.normalizeStyle($props.item.style)
      }, [
        (!$props.template)
          ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              ($props.item.to && !$options.disabled($props.item))
                ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                    key: 0,
                    to: $props.item.to,
                    custom: ""
                  }, {
                    default: vue.withCtx(({navigate, href, isActive, isExactActive}) => [
                      vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
                        href: href,
                        onClick: $event => ($options.onClick($event, navigate)),
                        class: vue.normalizeClass($options.linkClass($props.item, {isActive, isExactActive})),
                        role: "menuitem"
                      }, [
                        vue.createElementVNode("span", {
                          class: vue.normalizeClass(['p-menuitem-icon', $props.item.icon])
                        }, null, 2),
                        vue.createElementVNode("span", _hoisted_2$1, vue.toDisplayString($options.label()), 1)
                      ], 10, _hoisted_1$1)), [
                        [_directive_ripple]
                      ])
                    ]),
                    _: 1
                  }, 8, ["to"]))
                : vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
                    key: 1,
                    href: $props.item.url,
                    class: vue.normalizeClass($options.linkClass($props.item)),
                    onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
                    target: $props.item.target,
                    role: "menuitem",
                    tabindex: $options.disabled($props.item) ? null : '0'
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(['p-menuitem-icon', $props.item.icon])
                    }, null, 2),
                    vue.createElementVNode("span", _hoisted_4, vue.toDisplayString($options.label()), 1)
                  ], 10, _hoisted_3)), [
                    [_directive_ripple]
                  ])
            ], 64))
          : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.template), {
              key: 1,
              item: $props.item
            }, null, 8, ["item"]))
      ], 6))
    : vue.createCommentVNode("", true)
}

script$1.render = render$1;

var script = {
    name: 'Menu',
    emits: ['show', 'hide'],
    inheritAttrs: false,
    props: {
        popup: {
            type: Boolean,
            default: false
        },
		model: {
            type: Array,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            overlayVisible: false
        };
    },
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    container: null,
    beforeUnmount() {
        this.unbindResizeListener();
        this.unbindOutsideClickListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.target = null;

        if (this.container && this.autoZIndex) {
            utils.ZIndexUtils.clear(this.container);
        }
        this.container = null;
    },
    methods: {
        itemClick(event) {
            const item = event.item;
            if (this.disabled(item)) {
                return;
            }

            if (item.command) {
                item.command(event);
            }

            if (item.to && event.navigate) {
                event.navigate(event.originalEvent);
            }

            this.hide();
        },
        toggle(event) {
            if (this.overlayVisible)
                this.hide();
            else
                this.show(event);
        },
        show(event) {
            this.overlayVisible = true;
            this.target = event.currentTarget;
        },
        hide() {
            this.overlayVisible = false;
            this.target = null;
        },
        onEnter(el) {
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindResizeListener();
            this.bindScrollListener();

            if (this.autoZIndex) {
                utils.ZIndexUtils.set('menu', el, this.baseZIndex + this.$primevue.config.zIndex.menu);
            }

            this.$emit('show');
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
            this.unbindScrollListener();
            this.$emit('hide');
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                utils.ZIndexUtils.clear(el);
            }
        },
        alignOverlay() {
            utils.DomHandler.absolutePosition(this.container, this.target);
            this.container.style.minWidth = utils.DomHandler.getOuterWidth(this.target) + 'px';
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.container && !this.container.contains(event.target) && !this.isTargetClicked(event)) {
                        this.hide();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.target, () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        },
        isTargetClicked(event) {
            return this.target && (this.target === event.target || this.target.contains(event.target));
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        disabled(item) {
            return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
        },
        label(item) {
            return (typeof item.label === 'function' ? item.label() : item.label);
        },
        containerRef(el) {
            this.container = el;
        },
        onOverlayClick(event) {
            OverlayEventBus__default["default"].emit('overlay-click', {
                originalEvent: event,
                target: this.target
            });
        }
    },
    computed: {
        containerClass() {
            return ['p-menu p-component', {
                'p-menu-overlay': this.popup,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }]
        }
    },
    components: {
        'Menuitem': script$1
    }
};

const _hoisted_1 = {
  class: "p-menu-list p-reset",
  role: "menu"
};
const _hoisted_2 = {
  key: 0,
  class: "p-submenu-header"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Menuitem = vue.resolveComponent("Menuitem");

  return (vue.openBlock(), vue.createBlock(vue.Teleport, {
    to: $props.appendTo,
    disabled: !$props.popup
  }, [
    vue.createVNode(vue.Transition, {
      name: "p-connected-overlay",
      onEnter: $options.onEnter,
      onLeave: $options.onLeave,
      onAfterLeave: $options.onAfterLeave
    }, {
      default: vue.withCtx(() => [
        ($props.popup ? $data.overlayVisible : true)
          ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
              key: 0,
              ref: $options.containerRef,
              class: $options.containerClass
            }, _ctx.$attrs, {
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
            }), [
              vue.createElementVNode("ul", _hoisted_1, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.model, (item, i) => {
                  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                    key: $options.label(item) + i.toString()
                  }, [
                    (item.items && $options.visible(item) && !item.separator)
                      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                          (item.items)
                            ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2, [
                                vue.renderSlot(_ctx.$slots, "item", { item: item }, () => [
                                  vue.createTextVNode(vue.toDisplayString($options.label(item)), 1)
                                ])
                              ]))
                            : vue.createCommentVNode("", true),
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.items, (child, j) => {
                            return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                              key: child.label + i + j
                            }, [
                              ($options.visible(child) && !child.separator)
                                ? (vue.openBlock(), vue.createBlock(_component_Menuitem, {
                                    key: 0,
                                    item: child,
                                    onClick: $options.itemClick,
                                    template: _ctx.$slots.item,
                                    exact: $props.exact
                                  }, null, 8, ["item", "onClick", "template", "exact"]))
                                : ($options.visible(child) && child.separator)
                                  ? (vue.openBlock(), vue.createElementBlock("li", {
                                      class: vue.normalizeClass(['p-menu-separator', child.class]),
                                      style: vue.normalizeStyle(child.style),
                                      key: 'separator' + i + j,
                                      role: "separator"
                                    }, null, 6))
                                  : vue.createCommentVNode("", true)
                            ], 64))
                          }), 128))
                        ], 64))
                      : ($options.visible(item) && item.separator)
                        ? (vue.openBlock(), vue.createElementBlock("li", {
                            class: vue.normalizeClass(['p-menu-separator', item.class]),
                            style: vue.normalizeStyle(item.style),
                            key: 'separator' + i.toString(),
                            role: "separator"
                          }, null, 6))
                        : (vue.openBlock(), vue.createBlock(_component_Menuitem, {
                            key: $options.label(item) + i.toString(),
                            item: item,
                            onClick: $options.itemClick,
                            template: _ctx.$slots.item,
                            exact: $props.exact
                          }, null, 8, ["item", "onClick", "template", "exact"]))
                  ], 64))
                }), 128))
              ])
            ], 16))
          : vue.createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave", "onAfterLeave"])
  ], 8, ["to", "disabled"]))
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

var css_248z = "\n.p-menu-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-menu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-menu .p-menuitem-link {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-menu .p-menuitem-text {\n    line-height: 1;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
