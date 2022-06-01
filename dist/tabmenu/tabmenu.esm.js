import { DomHandler } from 'primevue/utils';
import Ripple from 'primevue/ripple';
import { resolveComponent, resolveDirective, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createBlock, withCtx, normalizeClass, normalizeStyle, withDirectives, createCommentVNode, toDisplayString, resolveDynamicComponent } from 'vue';

var script = {
    name: 'TabMenu',
    emits: ['update:activeIndex', 'tab-change'],
    props: {
		model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    timeout: null,
    data() {
        return {
            d_activeIndex: this.activeIndex
        }
    },
    mounted() {
        this.updateInkBar();
    },
    updated() {
        this.updateInkBar();
    },
    beforeUnmount() {
        clearTimeout(this.timeout);
    },
    watch: {
        $route() {
            this.timeout = setTimeout(() => this.updateInkBar(), 50);
        },
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    methods: {
        onItemClick(event, item, index, navigate) {
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

            if (index !== this.d_activeIndex) {
                this.d_activeIndex = index;
                this.$emit('update:activeIndex', this.d_activeIndex);
            }

            this.$emit('tab-change', {
                originalEvent: event,
                index: index
            });
        },
        getItemClass(item, index) {
            return ['p-tabmenuitem', item.class, {
                'p-highlight': this.d_activeIndex === index,
                'p-disabled': this.disabled(item)
            }];
        },
        getRouteItemClass(item, isActive, isExactActive) {
            return ['p-tabmenuitem', item.class, {
                 'p-highlight': this.exact ? isExactActive : isActive,
                'p-disabled': this.disabled(item)
            }];
        },
        getItemIcon(item) {
            return ['p-menuitem-icon', item.icon];
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
        updateInkBar() {
            let tabs = this.$refs.nav.children;
            let inkHighlighted = false;
            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];
                if (DomHandler.hasClass(tab, 'p-highlight')) {
                    this.$refs.inkbar.style.width = DomHandler.getWidth(tab) + 'px';
                    this.$refs.inkbar.style.left =  DomHandler.getOffset(tab).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
                    inkHighlighted = true;
                }
            }

            if (!inkHighlighted) {
                this.$refs.inkbar.style.width = '0px';
                this.$refs.inkbar.style.left =  '0px';
            }
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = { class: "p-tabmenu p-component" };
const _hoisted_2 = {
  ref: "nav",
  class: "p-tabmenu-nav p-reset",
  role: "tablist"
};
const _hoisted_3 = ["href", "onClick"];
const _hoisted_4 = { class: "p-menuitem-text" };
const _hoisted_5 = ["href", "target", "onClick", "tabindex"];
const _hoisted_6 = { class: "p-menuitem-text" };
const _hoisted_7 = {
  ref: "inkbar",
  class: "p-tabmenu-ink-bar"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("ul", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.model, (item, i) => {
        return (openBlock(), createElementBlock(Fragment, {
          key: $options.label(item) + '_' + i.toString()
        }, [
          (item.to && !$options.disabled(item))
            ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                to: item.to,
                custom: ""
              }, {
                default: withCtx(({navigate, href, isActive, isExactActive}) => [
                  ($options.visible(item))
                    ? (openBlock(), createElementBlock("li", {
                        key: 0,
                        class: normalizeClass($options.getRouteItemClass(item,isActive,isExactActive)),
                        style: normalizeStyle(item.style),
                        role: "tab"
                      }, [
                        (!_ctx.$slots.item)
                          ? withDirectives((openBlock(), createElementBlock("a", {
                              key: 0,
                              href: href,
                              class: "p-menuitem-link",
                              onClick: $event => ($options.onItemClick($event, item, i, navigate)),
                              role: "presentation"
                            }, [
                              (item.icon)
                                ? (openBlock(), createElementBlock("span", {
                                    key: 0,
                                    class: normalizeClass($options.getItemIcon(item))
                                  }, null, 2))
                                : createCommentVNode("", true),
                              createElementVNode("span", _hoisted_4, toDisplayString($options.label(item)), 1)
                            ], 8, _hoisted_3)), [
                              [_directive_ripple]
                            ])
                          : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
                              key: 1,
                              item: item
                            }, null, 8, ["item"]))
                      ], 6))
                    : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["to"]))
            : ($options.visible(item))
              ? (openBlock(), createElementBlock("li", {
                  key: 1,
                  class: normalizeClass($options.getItemClass(item, i)),
                  role: "tab"
                }, [
                  (!_ctx.$slots.item)
                    ? withDirectives((openBlock(), createElementBlock("a", {
                        key: 0,
                        href: item.url,
                        class: "p-menuitem-link",
                        target: item.target,
                        onClick: $event => ($options.onItemClick($event, item, i)),
                        role: "presentation",
                        tabindex: $options.disabled(item) ? null : '0'
                      }, [
                        (item.icon)
                          ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              class: normalizeClass($options.getItemIcon(item))
                            }, null, 2))
                          : createCommentVNode("", true),
                        createElementVNode("span", _hoisted_6, toDisplayString($options.label(item)), 1)
                      ], 8, _hoisted_5)), [
                        [_directive_ripple]
                      ])
                    : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
                        key: 1,
                        item: item
                      }, null, 8, ["item"]))
                ], 2))
              : createCommentVNode("", true)
        ], 64))
      }), 128)),
      createElementVNode("li", _hoisted_7, null, 512)
    ], 512)
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

var css_248z = "\n.p-tabmenu {\n    overflow-x: auto;\n}\n.p-tabmenu-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\n.p-tabmenu-nav a {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: relative;\n    text-decoration: none;\n    text-decoration: none;\n    overflow: hidden;\n}\n.p-tabmenu-nav a:focus {\n    z-index: 1;\n}\n.p-tabmenu-nav .p-menuitem-text {\n    line-height: 1;\n}\n.p-tabmenu-ink-bar {\n    display: none;\n    z-index: 1;\n}\n.p-tabmenu::-webkit-scrollbar {\n    display: none;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
