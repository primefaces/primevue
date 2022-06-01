this.primevue = this.primevue || {};
this.primevue.tieredmenu = (function (utils, OverlayEventBus, Ripple, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
    var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

    var script$1 = {
        name: 'TieredMenuSub',
        emits: ['leaf-click', 'keydown-item'],
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
                if (this.disabled(item)) {
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

                switch (event.which) {
                    //down
                    case 40:
                        var nextItem = this.findNextItem(listItem);
                        if (nextItem) {
                            nextItem.children[0].focus();
                        }

                        event.preventDefault();
                    break;

                    //up
                    case 38:
                        var prevItem = this.findPrevItem(listItem);
                        if (prevItem) {
                            prevItem.children[0].focus();
                        }

                        event.preventDefault();
                    break;

                    //right
                    case 39:
                        if (item.items) {
                            this.activeItem = item;

                            setTimeout(() => {
                                listItem.children[1].children[0].children[0].focus();
                            }, 50);
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
                //left
                if (event.originalEvent.which === 37) {
                    this.activeItem = null;
                    event.element.parentElement.previousElementSibling.focus();
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
                return {'p-submenu-list': !this.root};
            }
        },
        directives: {
            'ripple': Ripple__default["default"]
        }
    };

    const _hoisted_1 = ["onMouseenter"];
    const _hoisted_2 = ["href", "onClick", "onKeydown"];
    const _hoisted_3 = { class: "p-menuitem-text" };
    const _hoisted_4 = ["href", "target", "aria-haspopup", "aria-expanded", "onClick", "onKeydown", "tabindex"];
    const _hoisted_5 = { class: "p-menuitem-text" };
    const _hoisted_6 = {
      key: 0,
      class: "p-submenu-icon pi pi-angle-right"
    };

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_TieredMenuSub = vue.resolveComponent("TieredMenuSub", true);
      const _directive_ripple = vue.resolveDirective("ripple");

      return (vue.openBlock(), vue.createElementBlock("ul", {
        ref: "element",
        class: vue.normalizeClass($options.containerClass),
        role: "'menubar' : 'menu'",
        "aria-orientation": "horizontal"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.model, (item, i) => {
          return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: $options.label(item) + i.toString()
          }, [
            ($options.visible(item) && !item.separator)
              ? (vue.openBlock(), vue.createElementBlock("li", {
                  key: 0,
                  class: vue.normalizeClass($options.getItemClass(item)),
                  style: vue.normalizeStyle(item.style),
                  onMouseenter: $event => ($options.onItemMouseEnter($event, item)),
                  role: "none"
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
                                  vue.createElementVNode("span", _hoisted_3, vue.toDisplayString($options.label(item)), 1)
                                ], 42, _hoisted_2)), [
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
                              vue.createElementVNode("span", _hoisted_5, vue.toDisplayString($options.label(item)), 1),
                              (item.items)
                                ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6))
                                : vue.createCommentVNode("", true)
                            ], 42, _hoisted_4)), [
                              [_directive_ripple]
                            ])
                      ], 64))
                    : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.template), {
                        key: 1,
                        item: item
                      }, null, 8, ["item"])),
                  ($options.visible(item) && item.items)
                    ? (vue.openBlock(), vue.createBlock(_component_TieredMenuSub, {
                        model: item.items,
                        key: $options.label(item) + '_sub_',
                        template: $props.template,
                        onLeafClick: $options.onLeafClick,
                        onKeydownItem: $options.onChildItemKeyDown,
                        parentActive: item === $data.activeItem,
                        exact: $props.exact
                      }, null, 8, ["model", "template", "onLeafClick", "onKeydownItem", "parentActive", "exact"]))
                    : vue.createCommentVNode("", true)
                ], 46, _hoisted_1))
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
      ], 2))
    }

    script$1.render = render$1;

    var script = {
        name: 'TieredMenu',
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
        target: null,
        container: null,
        outsideClickListener: null,
        scrollHandler: null,
        resizeListener: null,
        data() {
            return {
                visible: false
            };
        },
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
                if (item.command) {
                    item.command(event);
                    event.originalEvent.preventDefault();
                }
                this.hide();
            },
            toggle(event) {
                if (this.visible)
                    this.hide();
                else
                    this.show(event);
            },
            show(event) {
                this.visible = true;
                this.target = event.currentTarget;
            },
            hide() {
                this.visible = false;
            },
            onEnter(el) {
                this.alignOverlay();
                this.bindOutsideClickListener();
                this.bindResizeListener();
                this.bindScrollListener();

                if (this.autoZIndex) {
                    utils.ZIndexUtils.set('menu', el, this.baseZIndex + this.$primevue.config.zIndex.menu);
                }
            },
            onLeave() {
                this.unbindOutsideClickListener();
                this.unbindResizeListener();
                this.unbindScrollListener();
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
                        if (this.visible && this.container && !this.container.contains(event.target) && !this.isTargetClicked(event)) {
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
                        if (this.visible) {
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
                        if (this.visible) {
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
            onLeafClick() {
                if (this.popup) {
                    this.hide();
                }
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
                return ['p-tieredmenu p-component', {
                    'p-tieredmenu-overlay': this.popup,
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false
                }];
            }
        },
        components: {
            'TieredMenuSub': script$1
        }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_TieredMenuSub = vue.resolveComponent("TieredMenuSub");

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
            ($props.popup ? $data.visible : true)
              ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
                  key: 0,
                  ref: $options.containerRef,
                  class: $options.containerClass
                }, _ctx.$attrs, {
                  onClick: _cache[0] || (_cache[0] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
                }), [
                  vue.createVNode(_component_TieredMenuSub, {
                    model: $props.model,
                    root: true,
                    popup: $props.popup,
                    onLeafClick: $options.onLeafClick,
                    template: _ctx.$slots.item,
                    exact: $props.exact
                  }, null, 8, ["model", "popup", "onLeafClick", "template", "exact"])
                ], 16))
              : vue.createCommentVNode("", true)
          ]),
          _: 1
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

    var css_248z = "\n.p-tieredmenu-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-tieredmenu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-tieredmenu .p-submenu-list {\n    position: absolute;\n    min-width: 100%;\n    z-index: 1;\n    display: none;\n}\n.p-tieredmenu .p-menuitem-link {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-tieredmenu .p-menuitem-text {\n    line-height: 1;\n}\n.p-tieredmenu .p-menuitem {\n    position: relative;\n}\n.p-tieredmenu .p-menuitem-link .p-submenu-icon {\n    margin-left: auto;\n}\n.p-tieredmenu .p-menuitem-active > .p-submenu-list {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, primevue.overlayeventbus, primevue.ripple, Vue);
