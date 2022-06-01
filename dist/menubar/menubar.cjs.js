'use strict';

var utils = require('primevue/utils');
var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

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
                return utils.DomHandler.hasClass(nextItem, 'p-disabled') || !utils.DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return utils.DomHandler.hasClass(prevItem, 'p-disabled') || !utils.DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;
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
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1$1 = ["role"];
const _hoisted_2$1 = ["onMouseenter"];
const _hoisted_3$1 = ["href", "onClick", "onKeydown"];
const _hoisted_4$1 = { class: "p-menuitem-text" };
const _hoisted_5 = ["href", "target", "aria-haspopup", "aria-expanded", "onClick", "onKeydown", "tabindex"];
const _hoisted_6 = { class: "p-menuitem-text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_MenubarSub = vue.resolveComponent("MenubarSub", true);
  const _directive_ripple = vue.resolveDirective("ripple");

  return (vue.openBlock(), vue.createElementBlock("ul", {
    class: vue.normalizeClass($options.containerClass),
    role: $props.root ? 'menubar' : 'menu'
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.model, (item, i) => {
      return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: $options.label(item) + i.toString()
      }, [
        ($options.visible(item) && !item.separator)
          ? (vue.openBlock(), vue.createElementBlock("li", {
              key: 0,
              role: "none",
              class: vue.normalizeClass($options.getItemClass(item)),
              style: vue.normalizeStyle(item.style),
              onMouseenter: $event => ($options.onItemMouseEnter($event, item))
            }, [
              (!$props.template)
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
                              onClick: $event => ($options.onItemClick($event, item, navigate)),
                              class: vue.normalizeClass($options.linkClass(item, {isActive, isExactActive})),
                              onKeydown: $event => ($options.onItemKeyDown($event, item)),
                              role: "menuitem"
                            }, [
                              vue.createElementVNode("span", {
                                class: vue.normalizeClass(['p-menuitem-icon', item.icon])
                              }, null, 2),
                              vue.createElementVNode("span", _hoisted_4$1, vue.toDisplayString($options.label(item)), 1)
                            ], 42, _hoisted_3$1)), [
                              [_directive_ripple]
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"]))
                      : vue.withDirectives((vue.openBlock(), vue.createElementBlock("a", {
                          key: 1,
                          href: item.url,
                          class: vue.normalizeClass($options.linkClass(item)),
                          target: item.target,
                          "aria-haspopup": item.items != null,
                          "aria-expanded": item === $data.activeItem,
                          onClick: $event => ($options.onItemClick($event, item)),
                          onKeydown: $event => ($options.onItemKeyDown($event, item)),
                          role: "menuitem",
                          tabindex: $options.disabled(item) ? null : '0'
                        }, [
                          vue.createElementVNode("span", {
                            class: vue.normalizeClass(['p-menuitem-icon', item.icon])
                          }, null, 2),
                          vue.createElementVNode("span", _hoisted_6, vue.toDisplayString($options.label(item)), 1),
                          (item.items)
                            ? (vue.openBlock(), vue.createElementBlock("span", {
                                key: 0,
                                class: vue.normalizeClass($options.getSubmenuIcon())
                              }, null, 2))
                            : vue.createCommentVNode("", true)
                        ], 42, _hoisted_5)), [
                          [_directive_ripple]
                        ])
                  ], 64))
                : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.template), {
                    key: 1,
                    item: item
                  }, null, 8, ["item"])),
              ($options.visible(item) && item.items)
                ? (vue.openBlock(), vue.createBlock(_component_MenubarSub, {
                    model: item.items,
                    key: $options.label(item) + '_sub_',
                    mobileActive: $props.mobileActive,
                    onLeafClick: $options.onLeafClick,
                    onKeydownItem: $options.onChildItemKeyDown,
                    parentActive: item === $data.activeItem,
                    template: $props.template,
                    exact: $props.exact
                  }, null, 8, ["model", "mobileActive", "onLeafClick", "onKeydownItem", "parentActive", "template", "exact"]))
                : vue.createCommentVNode("", true)
            ], 46, _hoisted_2$1))
          : vue.createCommentVNode("", true),
        ($options.visible(item) && item.separator)
          ? (vue.openBlock(), vue.createElementBlock("li", {
              class: vue.normalizeClass(['p-menu-separator', item.class]),
              style: vue.normalizeStyle(item.style),
              key: 'separator' + i.toString(),
              role: "separator"
            }, null, 6))
          : vue.createCommentVNode("", true)
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
            utils.ZIndexUtils.clear(this.$refs.rootmenu.$el);
        }
    },
    methods: {
        toggle(event) {
            if (this.mobileActive) {
                this.mobileActive = false;
                utils.ZIndexUtils.clear(this.$refs.rootmenu.$el);
            }
            else {
                this.mobileActive = true;
                utils.ZIndexUtils.set('menu', this.$refs.rootmenu.$el, this.$primevue.config.zIndex.menu);
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
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("i", { class: "pi pi-bars" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  class: "p-menubar-end"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenubarSub = vue.resolveComponent("MenubarSub");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.containerClass)
  }, [
    (_ctx.$slots.start)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "start")
        ]))
      : vue.createCommentVNode("", true),
    vue.createElementVNode("a", {
      ref: "menubutton",
      tabindex: "0",
      class: "p-menubar-button",
      onClick: _cache[0] || (_cache[0] = $event => ($options.toggle($event)))
    }, _hoisted_3, 512),
    vue.createVNode(_component_MenubarSub, {
      ref: "rootmenu",
      model: $props.model,
      root: true,
      mobileActive: $data.mobileActive,
      onLeafClick: $options.onLeafClick,
      template: _ctx.$slots.item,
      exact: $props.exact
    }, null, 8, ["model", "mobileActive", "onLeafClick", "template", "exact"]),
    (_ctx.$slots.end)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "end")
        ]))
      : vue.createCommentVNode("", true)
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

module.exports = script;
