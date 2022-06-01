import { resolveComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, normalizeStyle, createBlock, withCtx, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, createVNode, Transition, withDirectives, vShow } from 'vue';
import { UniqueComponentId } from 'primevue/utils';

var script$1 = {
    name: 'PanelMenuSub',
    emits: ['item-toggle'],
    props: {
		model: {
            type: null,
            default: null
        },
        template: {
            type: Function,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            activeItem: null
        }
    },
    methods: {
        onItemClick(event, item, navigate) {
            if (this.isActive(item) && this.activeItem === null) {
                this.activeItem = item;
            }

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

            if (this.activeItem && this.activeItem === item)
                this.activeItem = null;
            else
                this.activeItem = item;

            this.$emit('item-toggle', {item: item, expanded: this.activeItem != null});

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onItemKeydown(event, item) {
            if (event.which === 13) {
                this.onItemClick(event, item);
            }
        },
        getItemClass(item) {
            return ['p-menuitem', item.className];
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        isActive(item) {
            return this.expandedKeys ? this.expandedKeys[item.key] : item === this.activeItem;
        },
        getSubmenuIcon(item) {
            const active = this.isActive(item);
            return ['p-panelmenu-icon pi pi-fw', {'pi-angle-right': !active, 'pi-angle-down': active}];
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
    }
};

const _hoisted_1$1 = {
  class: "p-submenu-list",
  role: "tree"
};
const _hoisted_2$1 = ["href", "onClick", "aria-expanded"];
const _hoisted_3$1 = { class: "p-menuitem-text" };
const _hoisted_4$1 = ["href", "target", "onClick", "onKeydown", "aria-expanded", "tabindex"];
const _hoisted_5$1 = { class: "p-menuitem-text" };
const _hoisted_6$1 = { class: "p-toggleable-content" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_PanelMenuSub = resolveComponent("PanelMenuSub", true);

  return (openBlock(), createElementBlock("ul", _hoisted_1$1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.model, (item, i) => {
      return (openBlock(), createElementBlock(Fragment, {
        key: $options.label(item) + i.toString()
      }, [
        ($options.visible(item) && !item.separator)
          ? (openBlock(), createElementBlock("li", {
              key: 0,
              role: "none",
              class: normalizeClass($options.getItemClass(item)),
              style: normalizeStyle(item.style)
            }, [
              (!$props.template)
                ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    (item.to && !$options.disabled(item))
                      ? (openBlock(), createBlock(_component_router_link, {
                          key: 0,
                          to: item.to,
                          custom: ""
                        }, {
                          default: withCtx(({navigate, href, isActive:isRouterActive, isExactActive}) => [
                            createElementVNode("a", {
                              href: href,
                              class: normalizeClass($options.linkClass(item, {isRouterActive, isExactActive})),
                              onClick: $event => ($options.onItemClick($event, item, navigate)),
                              role: "treeitem",
                              "aria-expanded": $options.isActive(item)
                            }, [
                              createElementVNode("span", {
                                class: normalizeClass(['p-menuitem-icon', item.icon])
                              }, null, 2),
                              createElementVNode("span", _hoisted_3$1, toDisplayString($options.label(item)), 1)
                            ], 10, _hoisted_2$1)
                          ]),
                          _: 2
                        }, 1032, ["to"]))
                      : (openBlock(), createElementBlock("a", {
                          key: 1,
                          href: item.url,
                          class: normalizeClass($options.linkClass(item)),
                          target: item.target,
                          onClick: $event => ($options.onItemClick($event, item)),
                          onKeydown: $event => ($options.onItemKeydown($event, item)),
                          role: "treeitem",
                          "aria-expanded": $options.isActive(item),
                          tabindex: $options.disabled(item) ? null : '0'
                        }, [
                          (item.items)
                            ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: normalizeClass($options.getSubmenuIcon(item))
                              }, null, 2))
                            : createCommentVNode("", true),
                          createElementVNode("span", {
                            class: normalizeClass(['p-menuitem-icon', item.icon])
                          }, null, 2),
                          createElementVNode("span", _hoisted_5$1, toDisplayString($options.label(item)), 1)
                        ], 42, _hoisted_4$1))
                  ], 64))
                : (openBlock(), createBlock(resolveDynamicComponent($props.template), {
                    key: 1,
                    item: item
                  }, null, 8, ["item"])),
              createVNode(Transition, { name: "p-toggleable-content" }, {
                default: withCtx(() => [
                  withDirectives(createElementVNode("div", _hoisted_6$1, [
                    ($options.visible(item) && item.items)
                      ? (openBlock(), createBlock(_component_PanelMenuSub, {
                          model: item.items,
                          key: $options.label(item) + '_sub_',
                          template: $props.template,
                          expandedKeys: $props.expandedKeys,
                          onItemToggle: _cache[0] || (_cache[0] = $event => (_ctx.$emit('item-toggle', $event))),
                          exact: $props.exact
                        }, null, 8, ["model", "template", "expandedKeys", "exact"]))
                      : createCommentVNode("", true)
                  ], 512), [
                    [vShow, $options.isActive(item)]
                  ])
                ]),
                _: 2
              }, 1024)
            ], 6))
          : createCommentVNode("", true),
        ($options.visible(item) && item.separator)
          ? (openBlock(), createElementBlock("li", {
              class: normalizeClass(['p-menu-separator', item.class]),
              style: normalizeStyle(item.style),
              key: 'separator' + i.toString()
            }, null, 6))
          : createCommentVNode("", true)
      ], 64))
    }), 128))
  ]))
}

script$1.render = render$1;

var script = {
    name: 'PanelMenu',
    emits: ['update:expandedKeys'],
    props: {
		model: {
            type: Array,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            activeItem: null
        }
    },
    methods: {
        onItemClick(event, item, navigate) {
            if (this.isActive(item) && this.activeItem === null) {
                this.activeItem = item;
            }

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

            if (this.activeItem && this.activeItem === item)
                this.activeItem = null;
            else
                this.activeItem = item;

            this.updateExpandedKeys({item: item, expanded: this.activeItem != null});

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onItemKeydown(event, item) {
            if (event.which === 13) {
                this.onItemClick(event, item);
            }
        },
        updateExpandedKeys(event) {
            if (this.expandedKeys) {
                let item = event.item;
                let _keys = {...this.expandedKeys};

                if (event.expanded)
                    _keys[item.key] = true;
                else
                    delete _keys[item.key];

                this.$emit('update:expandedKeys', _keys);
            }
        },
        getPanelClass(item) {
            return ['p-panelmenu-panel', item.class];
        },
        getPanelToggleIcon(item) {
            const active = this.isActive(item);
            return ['p-panelmenu-icon pi', {'pi-chevron-right': !active,' pi-chevron-down': active}];
        },
        getPanelIcon(item) {
            return ['p-menuitem-icon', item.icon];
        },
        getHeaderLinkClass(item, routerProps) {
            return ['p-panelmenu-header-link', {
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        isActive(item) {
            return this.expandedKeys ? this.expandedKeys[item.key] : item === this.activeItem;
        },
        getHeaderClass(item) {
            return ['p-component p-panelmenu-header', {'p-highlight': this.isActive(item), 'p-disabled': this.disabled(item)}];
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
    components: {
        'PanelMenuSub': script$1
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        }
    }
};

const _hoisted_1 = { class: "p-panelmenu p-component" };
const _hoisted_2 = ["href", "onClick"];
const _hoisted_3 = { class: "p-menuitem-text" };
const _hoisted_4 = ["href", "onClick", "onKeydown", "tabindex", "aria-expanded", "id", "aria-controls"];
const _hoisted_5 = { class: "p-menuitem-text" };
const _hoisted_6 = ["id", "aria-labelledby"];
const _hoisted_7 = {
  key: 0,
  class: "p-panelmenu-content"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_PanelMenuSub = resolveComponent("PanelMenuSub");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.model, (item, index) => {
      return (openBlock(), createElementBlock(Fragment, {
        key: $options.label(item) + '_' + index
      }, [
        ($options.visible(item))
          ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass($options.getPanelClass(item)),
              style: normalizeStyle(item.style)
            }, [
              createElementVNode("div", {
                class: normalizeClass($options.getHeaderClass(item)),
                style: normalizeStyle(item.style)
              }, [
                (!_ctx.$slots.item)
                  ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      (item.to && !$options.disabled(item))
                        ? (openBlock(), createBlock(_component_router_link, {
                            key: 0,
                            to: item.to,
                            custom: ""
                          }, {
                            default: withCtx(({navigate, href, isActive, isExactActive}) => [
                              createElementVNode("a", {
                                href: href,
                                class: normalizeClass($options.getHeaderLinkClass(item, {isActive, isExactActive})),
                                onClick: $event => ($options.onItemClick($event, item, navigate)),
                                role: "treeitem"
                              }, [
                                (item.icon)
                                  ? (openBlock(), createElementBlock("span", {
                                      key: 0,
                                      class: normalizeClass($options.getPanelIcon(item))
                                    }, null, 2))
                                  : createCommentVNode("", true),
                                createElementVNode("span", _hoisted_3, toDisplayString($options.label(item)), 1)
                              ], 10, _hoisted_2)
                            ]),
                            _: 2
                          }, 1032, ["to"]))
                        : (openBlock(), createElementBlock("a", {
                            key: 1,
                            href: item.url,
                            class: normalizeClass($options.getHeaderLinkClass(item)),
                            onClick: $event => ($options.onItemClick($event, item)),
                            onKeydown: $event => ($options.onItemKeydown($event, item)),
                            tabindex: $options.disabled(item) ? null : '0',
                            "aria-expanded": $options.isActive(item),
                            id: $options.ariaId +'_header_' + index,
                            "aria-controls": $options.ariaId +'_content_' + index
                          }, [
                            (item.items)
                              ? (openBlock(), createElementBlock("span", {
                                  key: 0,
                                  class: normalizeClass($options.getPanelToggleIcon(item))
                                }, null, 2))
                              : createCommentVNode("", true),
                            (item.icon)
                              ? (openBlock(), createElementBlock("span", {
                                  key: 1,
                                  class: normalizeClass($options.getPanelIcon(item))
                                }, null, 2))
                              : createCommentVNode("", true),
                            createElementVNode("span", _hoisted_5, toDisplayString($options.label(item)), 1)
                          ], 42, _hoisted_4))
                    ], 64))
                  : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
                      key: 1,
                      item: item
                    }, null, 8, ["item"]))
              ], 6),
              createVNode(Transition, { name: "p-toggleable-content" }, {
                default: withCtx(() => [
                  withDirectives(createElementVNode("div", {
                    class: "p-toggleable-content",
                    role: "region",
                    id: $options.ariaId +'_content_' + index,
                    "aria-labelledby": $options.ariaId +'_header_' + index
                  }, [
                    (item.items)
                      ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          createVNode(_component_PanelMenuSub, {
                            model: item.items,
                            class: "p-panelmenu-root-submenu",
                            template: _ctx.$slots.item,
                            expandedKeys: $props.expandedKeys,
                            onItemToggle: $options.updateExpandedKeys,
                            exact: $props.exact
                          }, null, 8, ["model", "template", "expandedKeys", "onItemToggle", "exact"])
                        ]))
                      : createCommentVNode("", true)
                  ], 8, _hoisted_6), [
                    [vShow, $options.isActive(item)]
                  ])
                ]),
                _: 2
              }, 1024)
            ], 6))
          : createCommentVNode("", true)
      ], 64))
    }), 128))
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

var css_248z = "\n.p-panelmenu .p-panelmenu-header-link {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    position: relative;\n    text-decoration: none;\n}\n.p-panelmenu .p-panelmenu-header-link:focus {\n    z-index: 1;\n}\n.p-panelmenu .p-submenu-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-panelmenu .p-menuitem-link {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    text-decoration: none;\n}\n.p-panelmenu .p-menuitem-text {\n    line-height: 1;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
