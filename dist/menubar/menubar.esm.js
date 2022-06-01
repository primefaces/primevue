import { DomHandler, ZIndexUtils } from 'primevue/utils';
import Ripple from 'primevue/ripple';
import { resolveComponent, resolveDirective, openBlock, createElementBlock, normalizeClass, Fragment, renderList, normalizeStyle, createBlock, withCtx, withDirectives, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, renderSlot, createVNode } from 'vue';

var script$1 = {
    name: 'MenubarSub',
    emits: ['keydown-item', 'leaf-click'],
    props: {
        model: {
            type: Array,
            default: null
        },
        root: {
            type: Boolean,
            default: false
        },
        popup: {
            type: Boolean,
            default: false
        },
        parentActive: {
            type: Boolean,
            default: false
        },
        mobileActive: {
            type: Boolean,
            default: false
        },
        template: {
            type: Function,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    documentClickListener: null,
    watch: {
        parentActive(newValue) {
            if (!newValue) {
                this.activeItem = null;
            }
        }
    },
    data() {
        return {
            activeItem: null
        }
    },
    updated() {
        if (this.root && this.activeItem) {
            this.bindDocumentClickListener();
        }
    },
    beforeUnmount() {
        this.unbindDocumentClickListener();
    },
    methods: {
        onItemMouseEnter(event, item) {
            if (this.disabled(item) || this.mobileActive) {
                event.preventDefault();
                return;
            }

            if (this.root) {
                if (this.activeItem || this.popup) {
                    this.activeItem = item;
                }
            }
            else {
                this.activeItem = item;
            }
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

            if (item.items) {
                if (this.activeItem && item === this.activeItem)
                    this.activeItem = null;
                else
                   this.activeItem = item;
            }

            if (!item.items) {
                this.onLeafClick();
            }

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onLeafClick() {
            this.activeItem = null;
            this.$emit('leaf-click');
        },
        onItemKeyDown(event, item) {
            let listItem = event.currentTarget.parentElement;

            switch(event.which) {
                //down
                case 40:
                    if (this.root) {
                        if (item.items) {
                            this.expandSubmenu(item, listItem);
                        }
                    }
                    else {
                        this.navigateToNextItem(listItem);
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    if (!this.root) {
                        this.navigateToPrevItem(listItem);
                    }

                    event.preventDefault();
                break;

                //right
                case 39:
                    if (this.root) {
                        var nextItem = this.findNextItem(listItem);
                        if (nextItem) {
                            nextItem.children[0].focus();
                        }
                    }
                    else {
                        if (item.items) {
                            this.expandSubmenu(item, listItem);
                        }
                    }

                    event.preventDefault();
                break;

                //left
                case 37:
                    if (this.root) {
                        this.navigateToPrevItem(listItem);
                    }

                    event.preventDefault();
                break;
            }

            this.$emit('keydown-item', {
                originalEvent: event,
                element: listItem
            });
        },
        onChildItemKeyDown(event) {
            if (this.root) {
                //up
                if (event.originalEvent.which === 38 && event.element.previousElementSibling == null) {
                    this.collapseMenu(event.element);
                }
            }
            else {
                //left
                if (event.originalEvent.which === 37) {
                    this.collapseMenu(event.element);
                }
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        expandSubmenu(item, listItem) {
            this.activeItem = item;

            setTimeout(() => {
                listItem.children[1].children[0].children[0].focus();
            }, 50);
        },
        collapseMenu(listItem) {
            this.activeItem = null;
            listItem.parentElement.previousElementSibling.focus();
        },
        navigateToNextItem(listItem) {
            var nextItem = this.findNextItem(listItem);
            if (nextItem) {
                nextItem.children[0].focus();
            }
        },
        navigateToPrevItem(listItem) {
            var prevItem = this.findPrevItem(listItem);
            if (prevItem) {
                prevItem.children[0].focus();
            }
        },
        getItemClass(item) {
            return [
                'p-menuitem', item.class, {
                    'p-menuitem-active': this.activeItem === item
                }
            ]
        },
        linkClass(item, routerProps) {
            return ['p-menuitem-link', {
                'p-disabled': this.disabled(item),
                'router-link-active': routerProps && routerProps.isActive,
                'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
            }];
        },
        bindDocumentClickListener() {
            if (!this.documentClickListener) {
                this.documentClickListener = (event) => {
                    if (this.$el && !this.$el.contains(event.target)) {
                        this.activeItem = null;
                        this.unbindDocumentClickListener();
                    }
                };

                document.addEventListener('click', this.documentClickListener);
            }
        },
        unbindDocumentClickListener() {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        },
        getSubmenuIcon() {
            return [
                'p-submenu-icon pi', {'pi-angle-right': !this.root, 'pi-angle-down': this.root}
            ];
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
        containerClass() {
            return {'p-submenu-list': !this.root, 'p-menubar-root-list': this.root};
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1$1 = ["role"];
const _hoisted_2$1 = ["onMouseenter"];
const _hoisted_3$1 = ["href", "onClick", "onKeydown"];
const _hoisted_4$1 = { class: "p-menuitem-text" };
const _hoisted_5 = ["href", "target", "aria-haspopup", "aria-expanded", "onClick", "onKeydown", "tabindex"];
const _hoisted_6 = { class: "p-menuitem-text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_MenubarSub = resolveComponent("MenubarSub", true);
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createElementBlock("ul", {
    class: normalizeClass($options.containerClass),
    role: $props.root ? 'menubar' : 'menu'
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.model, (item, i) => {
      return (openBlock(), createElementBlock(Fragment, {
        key: $options.label(item) + i.toString()
      }, [
        ($options.visible(item) && !item.separator)
          ? (openBlock(), createElementBlock("li", {
              key: 0,
              role: "none",
              class: normalizeClass($options.getItemClass(item)),
              style: normalizeStyle(item.style),
              onMouseenter: $event => ($options.onItemMouseEnter($event, item))
            }, [
              (!$props.template)
                ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    (item.to && !$options.disabled(item))
                      ? (openBlock(), createBlock(_component_router_link, {
                          key: 0,
                          to: item.to,
                          custom: ""
                        }, {
                          default: withCtx(({navigate, href, isActive, isExactActive}) => [
                            withDirectives((openBlock(), createElementBlock("a", {
                              href: href,
                              onClick: $event => ($options.onItemClick($event, item, navigate)),
                              class: normalizeClass($options.linkClass(item, {isActive, isExactActive})),
                              onKeydown: $event => ($options.onItemKeyDown($event, item)),
                              role: "menuitem"
                            }, [
                              createElementVNode("span", {
                                class: normalizeClass(['p-menuitem-icon', item.icon])
                              }, null, 2),
                              createElementVNode("span", _hoisted_4$1, toDisplayString($options.label(item)), 1)
                            ], 42, _hoisted_3$1)), [
                              [_directive_ripple]
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"]))
                      : withDirectives((openBlock(), createElementBlock("a", {
                          key: 1,
                          href: item.url,
                          class: normalizeClass($options.linkClass(item)),
                          target: item.target,
                          "aria-haspopup": item.items != null,
                          "aria-expanded": item === $data.activeItem,
                          onClick: $event => ($options.onItemClick($event, item)),
                          onKeydown: $event => ($options.onItemKeyDown($event, item)),
                          role: "menuitem",
                          tabindex: $options.disabled(item) ? null : '0'
                        }, [
                          createElementVNode("span", {
                            class: normalizeClass(['p-menuitem-icon', item.icon])
                          }, null, 2),
                          createElementVNode("span", _hoisted_6, toDisplayString($options.label(item)), 1),
                          (item.items)
                            ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: normalizeClass($options.getSubmenuIcon())
                              }, null, 2))
                            : createCommentVNode("", true)
                        ], 42, _hoisted_5)), [
                          [_directive_ripple]
                        ])
                  ], 64))
                : (openBlock(), createBlock(resolveDynamicComponent($props.template), {
                    key: 1,
                    item: item
                  }, null, 8, ["item"])),
              ($options.visible(item) && item.items)
                ? (openBlock(), createBlock(_component_MenubarSub, {
                    model: item.items,
                    key: $options.label(item) + '_sub_',
                    mobileActive: $props.mobileActive,
                    onLeafClick: $options.onLeafClick,
                    onKeydownItem: $options.onChildItemKeyDown,
                    parentActive: item === $data.activeItem,
                    template: $props.template,
                    exact: $props.exact
                  }, null, 8, ["model", "mobileActive", "onLeafClick", "onKeydownItem", "parentActive", "template", "exact"]))
                : createCommentVNode("", true)
            ], 46, _hoisted_2$1))
          : createCommentVNode("", true),
        ($options.visible(item) && item.separator)
          ? (openBlock(), createElementBlock("li", {
              class: normalizeClass(['p-menu-separator', item.class]),
              style: normalizeStyle(item.style),
              key: 'separator' + i.toString(),
              role: "separator"
            }, null, 6))
          : createCommentVNode("", true)
      ], 64))
    }), 128))
  ], 10, _hoisted_1$1))
}

script$1.render = render$1;

var script = {
    name: 'Menubar',
    props: {
		model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    outsideClickListener: null,
    data() {
        return {
            mobileActive: false
        }
    },
    beforeUnmount() {
        this.mobileActive = false;
        this.unbindOutsideClickListener();
        if (this.$refs.rootmenu && this.$refs.rootmenu.$el) {
            ZIndexUtils.clear(this.$refs.rootmenu.$el);
        }
    },
    methods: {
        toggle(event) {
            if (this.mobileActive) {
                this.mobileActive = false;
                ZIndexUtils.clear(this.$refs.rootmenu.$el);
            }
            else {
                this.mobileActive = true;
                ZIndexUtils.set('menu', this.$refs.rootmenu.$el, this.$primevue.config.zIndex.menu);
            }

            this.bindOutsideClickListener();
            event.preventDefault();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.mobileActive && this.$refs.rootmenu.$el !== event.target && !this.$refs.rootmenu.$el.contains(event.target)
                        && this.$refs.menubutton !== event.target && !this.$refs.menubutton.contains(event.target)) {
                        this.mobileActive = false;
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
        onLeafClick() {
            this.mobileActive = false;
        }
    },
    computed: {
        containerClass() {
            return ['p-menubar p-component', {'p-menubar-mobile-active': this.mobileActive}];
        }
    },
    components: {
        'MenubarSub': script$1
    }
};

const _hoisted_1 = {
  key: 0,
  class: "p-menubar-start"
};
const _hoisted_2 = /*#__PURE__*/createElementVNode("i", { class: "pi pi-bars" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  class: "p-menubar-end"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenubarSub = resolveComponent("MenubarSub");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    (_ctx.$slots.start)
      ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "start")
        ]))
      : createCommentVNode("", true),
    createElementVNode("a", {
      ref: "menubutton",
      tabindex: "0",
      class: "p-menubar-button",
      onClick: _cache[0] || (_cache[0] = $event => ($options.toggle($event)))
    }, _hoisted_3, 512),
    createVNode(_component_MenubarSub, {
      ref: "rootmenu",
      model: $props.model,
      root: true,
      mobileActive: $data.mobileActive,
      onLeafClick: $options.onLeafClick,
      template: _ctx.$slots.item,
      exact: $props.exact
    }, null, 8, ["model", "mobileActive", "onLeafClick", "template", "exact"]),
    (_ctx.$slots.end)
      ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "end")
        ]))
      : createCommentVNode("", true)
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

var css_248z = "\n.p-menubar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-menubar ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-menubar .p-menuitem-link {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-menubar .p-menuitem-text {\n    line-height: 1;\n}\n.p-menubar .p-menuitem {\n    position: relative;\n}\n.p-menubar-root-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-menubar-root-list > li ul {\n    display: none;\n    z-index: 1;\n}\n.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {\n    display: block;\n}\n.p-menubar .p-submenu-list {\n    display: none;\n    position: absolute;\n    z-index: 1;\n}\n.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list  {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {\n    margin-left: auto;\n}\n.p-menubar .p-menubar-custom,\n.p-menubar .p-menubar-end {\n    margin-left: auto;\n    -ms-flex-item-align: center;\n        align-self: center;\n}\n.p-menubar-button {\n    display: none;\n    cursor: pointer;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-decoration: none;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
