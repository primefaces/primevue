this.primevue = this.primevue || {};
this.primevue.steps = (function (utils, vue) {
    'use strict';

    var script = {
        name: 'Steps',
        props: {
            id: {
                type: String,
                default: utils.UniqueComponentId()
            },
    		model: {
                type: Array,
                default: null
            },
            readonly: {
                type: Boolean,
                default: true
            },
            exact: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            onItemClick(event, item, navigate) {
                if (this.disabled(item) || this.readonly) {
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
            isActive(item) {
                return this.activeRoute === item.to || this.activeRoute === item.to + '/' ;
            },
            getItemClass(item) {
                return ['p-steps-item', item.class, {
                    'p-highlight p-steps-current': this.isActive(item),
                    'p-disabled': this.isItemDisabled(item)
                }];
            },
            linkClass(routerProps) {
                return ['p-menuitem-link', {
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }];
            },
            isItemDisabled(item) {
                return (this.disabled(item) || (this.readonly && !this.isActive(item)));
            },
            visible(item) {
                return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
            },
            disabled(item) {
                return (typeof item.disabled === 'function' ? item.disabled() : item.disabled);
            },
            label(item) {
                return (typeof item.label === 'function' ? item.label() : item.label);
            }
        },
        computed: {
            activeRoute() {
                return this.$route.path;
            },
            containerClass() {
                return ['p-steps p-component', {'p-readonly': this.readonly}];
            }
        }
    };

    const _hoisted_1 = ["id"];
    const _hoisted_2 = { role: "tablist" };
    const _hoisted_3 = ["aria-selected", "aria-expanded"];
    const _hoisted_4 = ["href", "onClick"];
    const _hoisted_5 = { class: "p-steps-number" };
    const _hoisted_6 = { class: "p-steps-title" };
    const _hoisted_7 = { class: "p-steps-number" };
    const _hoisted_8 = { class: "p-steps-title" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_router_link = vue.resolveComponent("router-link");

      return (vue.openBlock(), vue.createElementBlock("div", {
        id: $props.id,
        class: vue.normalizeClass($options.containerClass)
      }, [
        vue.createElementVNode("ul", _hoisted_2, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.model, (item, index) => {
            return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: item.to
            }, [
              ($options.visible(item))
                ? (vue.openBlock(), vue.createElementBlock("li", {
                    key: 0,
                    class: vue.normalizeClass($options.getItemClass(item)),
                    style: vue.normalizeStyle(item.style),
                    role: "tab",
                    "aria-selected": $options.isActive(item),
                    "aria-expanded": $options.isActive(item)
                  }, [
                    (!_ctx.$slots.item)
                      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                          (!$options.isItemDisabled(item))
                            ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                                key: 0,
                                to: item.to,
                                custom: ""
                              }, {
                                default: vue.withCtx(({navigate, href, isActive, isExactActive}) => [
                                  vue.createElementVNode("a", {
                                    href: href,
                                    class: vue.normalizeClass($options.linkClass({isActive, isExactActive})),
                                    onClick: $event => ($options.onItemClick($event, item, navigate)),
                                    role: "presentation"
                                  }, [
                                    vue.createElementVNode("span", _hoisted_5, vue.toDisplayString(index + 1), 1),
                                    vue.createElementVNode("span", _hoisted_6, vue.toDisplayString($options.label(item)), 1)
                                  ], 10, _hoisted_4)
                                ]),
                                _: 2
                              }, 1032, ["to"]))
                            : (vue.openBlock(), vue.createElementBlock("span", {
                                key: 1,
                                class: vue.normalizeClass($options.linkClass()),
                                role: "presentation"
                              }, [
                                vue.createElementVNode("span", _hoisted_7, vue.toDisplayString(index + 1), 1),
                                vue.createElementVNode("span", _hoisted_8, vue.toDisplayString($options.label(item)), 1)
                              ], 2))
                        ], 64))
                      : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.$slots.item), {
                          key: 1,
                          item: item
                        }, null, 8, ["item"]))
                  ], 14, _hoisted_3))
                : vue.createCommentVNode("", true)
            ], 64))
          }), 128))
        ])
      ], 10, _hoisted_1))
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

    var css_248z = "\n.p-steps {\n    position: relative;\n}\n.p-steps ul {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-steps-item {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.p-steps-item .p-menuitem-link {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    text-decoration: none;\n}\n.p-steps.p-steps-readonly .p-steps-item {\n    cursor: auto;\n}\n.p-steps-item.p-steps-current .p-menuitem-link {\n    cursor: default;\n}\n.p-steps-title {\n    white-space: nowrap;\n}\n.p-steps-number {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-steps-title {\n    display: block;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, Vue);
