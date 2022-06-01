this.primevue = this.primevue || {};
this.primevue.breadcrumb = (function (vue) {
    'use strict';

    var script$1 = {
        name: 'BreadcrumbItem',
        props: {
            item: null,
            template: null,
            exact: null
        },
        methods: {
            onClick(event, navigate) {
                if (this.item.command) {
                    this.item.command({
                        originalEvent: event,
                        item: this.item
                    });
                }

                if (this.item.to && navigate) {
                    navigate(event);
                }
            },
            containerClass(item) {
                return [{'p-disabled': this.disabled(item)}, this.item.class];
            },
            linkClass(routerProps) {
                return ['p-menuitem-link', {
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
            iconClass() {
                return ['p-menuitem-icon', this.item.icon];
            }
        }
    };

    const _hoisted_1$1 = ["href", "onClick"];
    const _hoisted_2$1 = {
      key: 1,
      class: "p-menuitem-text"
    };
    const _hoisted_3 = ["href", "target"];
    const _hoisted_4 = {
      key: 1,
      class: "p-menuitem-text"
    };

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_router_link = vue.resolveComponent("router-link");

      return ($options.visible())
        ? (vue.openBlock(), vue.createElementBlock("li", {
            key: 0,
            class: vue.normalizeClass($options.containerClass($props.item))
          }, [
            (!$props.template)
              ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  ($props.item.to)
                    ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                        key: 0,
                        to: $props.item.to,
                        custom: ""
                      }, {
                        default: vue.withCtx(({navigate, href, isActive, isExactActive}) => [
                          vue.createElementVNode("a", {
                            href: href,
                            class: vue.normalizeClass($options.linkClass({isActive, isExactActive})),
                            onClick: $event => ($options.onClick($event, navigate))
                          }, [
                            ($props.item.icon)
                              ? (vue.openBlock(), vue.createElementBlock("span", {
                                  key: 0,
                                  class: vue.normalizeClass($options.iconClass)
                                }, null, 2))
                              : vue.createCommentVNode("", true),
                            ($props.item.label)
                              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$1, vue.toDisplayString($options.label()), 1))
                              : vue.createCommentVNode("", true)
                          ], 10, _hoisted_1$1)
                        ]),
                        _: 1
                      }, 8, ["to"]))
                    : (vue.openBlock(), vue.createElementBlock("a", {
                        key: 1,
                        href: $props.item.url||'#',
                        class: vue.normalizeClass($options.linkClass()),
                        onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
                        target: $props.item.target
                      }, [
                        ($props.item.icon)
                          ? (vue.openBlock(), vue.createElementBlock("span", {
                              key: 0,
                              class: vue.normalizeClass($options.iconClass)
                            }, null, 2))
                          : vue.createCommentVNode("", true),
                        ($props.item.label)
                          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, vue.toDisplayString($options.label()), 1))
                          : vue.createCommentVNode("", true)
                      ], 10, _hoisted_3))
                ], 64))
              : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.template), {
                  key: 1,
                  item: $props.item
                }, null, 8, ["item"]))
          ], 2))
        : vue.createCommentVNode("", true)
    }

    script$1.render = render$1;

    var script = {
        name: 'Breadcrumb',
        props: {
            model: {
                type: Array,
                default: null
            },
            home: {
                type: null,
                default: null
            },
            exact: {
                type: Boolean,
                default: true
            }
        },
        components: {
            'BreadcrumbItem': script$1
        }
    };

    const _hoisted_1 = {
      class: "p-breadcrumb p-component",
      "aria-label": "Breadcrumb"
    };
    const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("li", { class: "p-breadcrumb-chevron pi pi-chevron-right" }, null, -1);

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_BreadcrumbItem = vue.resolveComponent("BreadcrumbItem");

      return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1, [
        vue.createElementVNode("ul", null, [
          ($props.home)
            ? (vue.openBlock(), vue.createBlock(_component_BreadcrumbItem, {
                key: 0,
                item: $props.home,
                class: "p-breadcrumb-home",
                template: _ctx.$slots.item,
                exact: $props.exact
              }, null, 8, ["item", "template", "exact"]))
            : vue.createCommentVNode("", true),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.model, (item) => {
            return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: item.label
            }, [
              _hoisted_2,
              vue.createVNode(_component_BreadcrumbItem, {
                item: item,
                template: _ctx.$slots.item,
                exact: $props.exact
              }, null, 8, ["item", "template", "exact"])
            ], 64))
          }), 128))
        ])
      ]))
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

    var css_248z = "\n.p-breadcrumb {\n    overflow-x: auto;\n}\n.p-breadcrumb ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\n.p-breadcrumb .p-menuitem-text {\n    line-height: 1;\n}\n.p-breadcrumb .p-menuitem-link {\n    text-decoration: none;\n}\n.p-breadcrumb::-webkit-scrollbar {\n    display: none;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(Vue);
