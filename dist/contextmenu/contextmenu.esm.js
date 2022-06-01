import { DomHandler, ZIndexUtils } from 'primevue/utils';
import Ripple from 'primevue/ripple';
import { resolveComponent, resolveDirective, openBlock, createBlock, Transition, withCtx, createElementBlock, normalizeClass, Fragment, renderList, normalizeStyle, withDirectives, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, Teleport, createVNode, mergeProps } from 'vue';

var script$1 = {
    name: 'ContextMenuSub',
    emits: ['leaf-click'],
    props: {
        model: {
            type: Array,
            default: null
        },
        root: {
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
    methods: {
        onItemMouseEnter(event, item) {
            if (this.disabled(item)) {
                event.preventDefault();
                return;
            }

            this.activeItem = item;
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
        onEnter() {
            this.position();
        },
        position() {
            const parentItem = this.$refs.container.parentElement;
            const containerOffset = DomHandler.getOffset(this.$refs.container.parentElement);
            const viewport = DomHandler.getViewport();
            const sublistWidth = this.$refs.container.offsetParent ? this.$refs.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$refs.container);
            const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

            this.$refs.container.style.top = '0px';

            if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
                this.$refs.container.style.left = -1 * sublistWidth + 'px';
            }
            else {
                this.$refs.container.style.left = itemOuterWidth + 'px';
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
        'ripple': Ripple
    }
};

const _hoisted_1 = ["onMouseenter"];
const _hoisted_2 = ["href", "onClick"];
const _hoisted_3 = { class: "p-menuitem-text" };
const _hoisted_4 = ["href", "target", "onClick", "aria-haspopup", "aria-expanded", "tabindex"];
const _hoisted_5 = { class: "p-menuitem-text" };
const _hoisted_6 = {
  key: 0,
  class: "p-submenu-icon pi pi-angle-right"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ContextMenuSub = resolveComponent("ContextMenuSub", true);
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createBlock(Transition, {
    name: "p-contextmenusub",
    onEnter: $options.onEnter
  }, {
    default: withCtx(() => [
      ($props.root ? true : $props.parentActive)
        ? (openBlock(), createElementBlock("ul", {
            key: 0,
            ref: "container",
            class: normalizeClass($options.containerClass),
            role: "menu"
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
                                      role: "menuitem"
                                    }, [
                                      createElementVNode("span", {
                                        class: normalizeClass(['p-menuitem-icon', item.icon])
                                      }, null, 2),
                                      createElementVNode("span", _hoisted_3, toDisplayString($options.label(item)), 1)
                                    ], 10, _hoisted_2)), [
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
                                  onClick: $event => ($options.onItemClick($event, item)),
                                  "aria-haspopup": item.items != null,
                                  "aria-expanded": item === $data.activeItem,
                                  role: "menuitem",
                                  tabindex: $options.disabled(item) ? null : '0'
                                }, [
                                  createElementVNode("span", {
                                    class: normalizeClass(['p-menuitem-icon', item.icon])
                                  }, null, 2),
                                  createElementVNode("span", _hoisted_5, toDisplayString($options.label(item)), 1),
                                  (item.items)
                                    ? (openBlock(), createElementBlock("span", _hoisted_6))
                                    : createCommentVNode("", true)
                                ], 10, _hoisted_4)), [
                                  [_directive_ripple]
                                ])
                          ], 64))
                        : (openBlock(), createBlock(resolveDynamicComponent($props.template), {
                            key: 1,
                            item: item
                          }, null, 8, ["item"])),
                      ($options.visible(item) && item.items)
                        ? (openBlock(), createBlock(_component_ContextMenuSub, {
                            model: item.items,
                            key: $options.label(item) + '_sub_',
                            template: $props.template,
                            onLeafClick: $options.onLeafClick,
                            parentActive: item === $data.activeItem,
                            exact: $props.exact
                          }, null, 8, ["model", "template", "onLeafClick", "parentActive", "exact"]))
                        : createCommentVNode("", true)
                    ], 46, _hoisted_1))
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
          ], 2))
        : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["onEnter"]))
}

script$1.render = render$1;

var script = {
    name: 'ContextMenu',
    inheritAttrs: false,
    props: {
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
        global: {
            type: Boolean,
            default: false
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    target: null,
    outsideClickListener: null,
    resizeListener: null,
    documentContextMenuListener: null,
    pageX: null,
    pageY: null,
    container: null,
    data() {
        return {
            visible: false
        };
    },
    beforeUnmount() {
        this.unbindResizeListener();
        this.unbindOutsideClickListener();
        this.unbindDocumentContextMenuListener();

        if (this.container && this.autoZIndex) {
            ZIndexUtils.clear(this.container);
        }
        this.container = null;
    },
    mounted() {
        if (this.global) {
            this.bindDocumentContextMenuListener();
        }
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
        onLeafClick() {
            this.hide();
        },
        show(event) {
            this.pageX = event.pageX;
            this.pageY = event.pageY;

            if (this.visible)
                this.position();
            else
                this.visible = true;

            event.stopPropagation();
            event.preventDefault();
        },
        hide() {
            this.visible = false;
        },
        onEnter(el) {
            this.position();
            this.bindOutsideClickListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                ZIndexUtils.set('menu', el, this.baseZIndex + this.$primevue.config.zIndex.menu);
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                ZIndexUtils.clear(el);
            }
        },
        position() {
            let left = this.pageX + 1;
            let top = this.pageY + 1;
            let width = this.container.offsetParent ? this.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.container);
            let height = this.container.offsetParent ? this.container.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.container);
            let viewport = DomHandler.getViewport();

            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }

            //flip
            if (top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }

            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }

            //fit
            if (top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }

            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && this.container && !this.container.contains(event.target) && !event.ctrlKey) {
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
        bindDocumentContextMenuListener() {
            if (!this.documentContextMenuListener) {
                this.documentContextMenuListener = (event) => {
                    this.show(event);
                };

                document.addEventListener('contextmenu', this.documentContextMenuListener);
            }
        },
        unbindDocumentContextMenuListener() {
            if(this.documentContextMenuListener) {
                document.removeEventListener('contextmenu', this.documentContextMenuListener);
                this.documentContextMenuListener = null;
            }
        },
        containerRef(el) {
            this.container = el;
        }
    },
    computed: {
        containerClass() {
            return ['p-contextmenu p-component', {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }]
        }
    },
    components: {
        'ContextMenuSub': script$1
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContextMenuSub = resolveComponent("ContextMenuSub");

  return (openBlock(), createBlock(Teleport, { to: $props.appendTo }, [
    createVNode(Transition, {
      name: "p-contextmenu",
      onEnter: $options.onEnter,
      onLeave: $options.onLeave,
      onAfterLeave: $options.onAfterLeave
    }, {
      default: withCtx(() => [
        ($data.visible)
          ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              ref: $options.containerRef,
              class: $options.containerClass
            }, _ctx.$attrs), [
              createVNode(_component_ContextMenuSub, {
                model: $props.model,
                root: true,
                onLeafClick: $options.onLeafClick,
                template: _ctx.$slots.item,
                exact: $props.exact
              }, null, 8, ["model", "onLeafClick", "template", "exact"])
            ], 16))
          : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["onEnter", "onLeave", "onAfterLeave"])
  ], 8, ["to"]))
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

var css_248z = "\n.p-contextmenu {\n    position: absolute;\n}\n.p-contextmenu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-contextmenu .p-submenu-list {\n    position: absolute;\n    min-width: 100%;\n    z-index: 1;\n}\n.p-contextmenu .p-menuitem-link {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-contextmenu .p-menuitem-text {\n    line-height: 1;\n}\n.p-contextmenu .p-menuitem {\n    position: relative;\n}\n.p-contextmenu .p-menuitem-link .p-submenu-icon {\n    margin-left: auto;\n}\n.p-contextmenu-enter-from {\n    opacity: 0;\n}\n.p-contextmenu-enter-active {\n    -webkit-transition: opacity 250ms;\n    transition: opacity 250ms;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
