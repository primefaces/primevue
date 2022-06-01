this.primevue = this.primevue || {};
this.primevue.dock = (function (Ripple, Tooltip, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);
    var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);

    var script$1 = {
        name: 'DockSub',
        props: {
            model: {
                type: Array,
                default: null
            },
            templates: {
                type: null,
                default: null
            },
            exact: {
                type: Boolean,
                default: true
            },
            tooltipOptions: null
        },
        data() {
            return {
                currentIndex: -3
            }
        },
        methods: {
            onListMouseLeave() {
                this.currentIndex = -3;
            },
            onItemMouseEnter(index) {
                this.currentIndex = index;
            },
            onItemClick(event, item, navigate) {
                if (this.disabled(item)) {
                    event.preventDefault();
                    return;
                }

                if (item.command) {
                    item.command({
                        originalEvent: event,
                        item: item
                    });
                }

                if (item.to && navigate) {
                    navigate(event);
                }
            },
            itemClass(index) {
                return ['p-dock-item', {
                    'p-dock-item-second-prev': (this.currentIndex - 2) === index,
                    'p-dock-item-prev': (this.currentIndex - 1) === index,
                    'p-dock-item-current': this.currentIndex === index,
                    'p-dock-item-next': (this.currentIndex + 1) === index,
                    'p-dock-item-second-next': (this.currentIndex + 2) === index
                }];
            },
            linkClass(item, routerProps) {
                return ['p-dock-action', {
                    'p-disabled': this.disabled(item),
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }];
            },
            disabled(item) {
                return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
            }
        },
        directives: {
            'ripple': Ripple__default["default"],
            'tooltip': Tooltip__default["default"]
        }
    };

    const _hoisted_1 = { class: "p-dock-list-container" };
    const _hoisted_2 = ["onMouseenter"];
    const _hoisted_3 = ["href", "target", "onClick"];
    const _hoisted_4 = ["href", "target", "onClick", "tabindex"];

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_router_link = vue.resolveComponent("router-link");
      const _directive_ripple = vue.resolveDirective("ripple");
      const _directive_tooltip = vue.resolveDirective("tooltip");

      return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("ul", {
          ref: "list",
          class: "p-dock-list",
          role: "menu",
          onMouseleave: _cache[0] || (_cache[0] = (...args) => ($options.onListMouseLeave && $options.onListMouseLeave(...args)))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.model, (item, index) => {
            return (vue.openBlock(), vue.createElementBlock("li", {
              class: vue.normalizeClass($options.itemClass(index)),
              key: index,
              role: "none",
              onMouseenter: $event => ($options.onItemMouseEnter(index))
            }, [
              (!$props.templates['item'])
                ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    (item.to && !$options.disabled(item))
                      ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                          key: 0,
                          to: item.to,
                          custom: ""
                        }, {
                          default: vue.withCtx(({navigate, href, isActive, isExactActive}) => [
                            vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
                              href: href,
                              role: "menuitem",
                              class: vue.normalizeClass($options.linkClass(item, {isActive, isExactActive})),
                              target: item.target,
                              onClick: $event => ($options.onItemClick($event, item, navigate))
                            }, [
                              (!$props.templates['icon'])
                                ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                                    key: 0,
                                    class: vue.normalizeClass(['p-dock-action-icon', item.icon])
                                  }, null, 2)), [
                                    [_directive_ripple]
                                  ])
                                : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates['icon']), {
                                    key: 1,
                                    item: item
                                  }, null, 8, ["item"]))
                            ], 10, _hoisted_3)), [
                              [_directive_tooltip, {value: item.label, disabled: !$props.tooltipOptions}, $props.tooltipOptions]
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"]))
                      : vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
                          key: 1,
                          href: item.url,
                          role: "menuitem",
                          class: vue.normalizeClass($options.linkClass(item)),
                          target: item.target,
                          onClick: $event => ($options.onItemClick($event, item)),
                          tabindex: $options.disabled(item) ? null : '0'
                        }, [
                          (!$props.templates['icon'])
                            ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                                key: 0,
                                class: vue.normalizeClass(['p-dock-action-icon', item.icon])
                              }, null, 2)), [
                                [_directive_ripple]
                              ])
                            : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates['icon']), {
                                key: 1,
                                item: item
                              }, null, 8, ["item"]))
                        ], 10, _hoisted_4)), [
                          [_directive_tooltip, {value: item.label, disabled: !$props.tooltipOptions}, $props.tooltipOptions]
                        ])
                  ], 64))
                : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates['item']), {
                    key: 1,
                    item: item
                  }, null, 8, ["item"]))
            ], 42, _hoisted_2))
          }), 128))
        ], 544)
      ]))
    }

    script$1.render = render$1;

    var script = {
        name: 'Dock',
        props: {
            position: {
                type: String,
                default: "bottom"
            },
            model: null,
            class: null,
            style: null,
            tooltipOptions: null,
            exact: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            containerClass() {
                return ['p-dock p-component', `p-dock-${this.position}`, this.class];
            }
        },
        components: {
            DockSub: script$1
        }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_DockSub = vue.resolveComponent("DockSub");

      return (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass($options.containerClass),
        style: vue.normalizeStyle($props.style)
      }, [
        vue.createVNode(_component_DockSub, {
          model: $props.model,
          templates: _ctx.$slots,
          exact: $props.exact,
          tooltipOptions: $props.tooltipOptions
        }, null, 8, ["model", "templates", "exact", "tooltipOptions"])
      ], 6))
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

    var css_248z = "\n.p-dock {\n    position: absolute;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    pointer-events: none;\n}\n.p-dock-list-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    pointer-events: auto;\n}\n.p-dock-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-dock-item {\n    -webkit-transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);\n    will-change: transform;\n}\n.p-dock-action {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative;\n    overflow: hidden;\n    cursor: default;\n}\n.p-dock-item-second-prev,\n.p-dock-item-second-next {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\n.p-dock-item-prev,\n.p-dock-item-next {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n}\n.p-dock-item-current {\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n    z-index: 1;\n}\n\n/* Position */\n/* top */\n.p-dock-top {\n    left: 0;\n    top: 0;\n    width: 100%;\n}\n.p-dock-top .p-dock-item {\n    -webkit-transform-origin: center top;\n            transform-origin: center top;\n}\n\n/* bottom */\n.p-dock-bottom {\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n.p-dock-bottom .p-dock-item {\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n}\n\n/* right */\n.p-dock-right {\n    right: 0;\n    top: 0;\n    height: 100%;\n}\n.p-dock-right .p-dock-item {\n    -webkit-transform-origin: center right;\n            transform-origin: center right;\n}\n.p-dock-right .p-dock-list {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n/* left */\n.p-dock-left {\n    left: 0;\n    top: 0;\n    height: 100%;\n}\n.p-dock-left .p-dock-item {\n    -webkit-transform-origin: center left;\n            transform-origin: center left;\n}\n.p-dock-left .p-dock-list {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.ripple, primevue.tooltip, Vue);
