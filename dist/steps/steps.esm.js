import { UniqueComponentId } from 'primevue/utils';
import { resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, normalizeStyle, createBlock, withCtx, toDisplayString, resolveDynamicComponent, createCommentVNode } from 'vue';

var script = {
    name: 'Steps',
    props: {
        id: {
            type: String,
            default: UniqueComponentId()
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
  const _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock("div", {
    id: $props.id,
    class: normalizeClass($options.containerClass)
  }, [
    createElementVNode("ul", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.model, (item, index) => {
        return (openBlock(), createElementBlock(Fragment, {
          key: item.to
        }, [
          ($options.visible(item))
            ? (openBlock(), createElementBlock("li", {
                key: 0,
                class: normalizeClass($options.getItemClass(item)),
                style: normalizeStyle(item.style),
                role: "tab",
                "aria-selected": $options.isActive(item),
                "aria-expanded": $options.isActive(item)
              }, [
                (!_ctx.$slots.item)
                  ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      (!$options.isItemDisabled(item))
                        ? (openBlock(), createBlock(_component_router_link, {
                            key: 0,
                            to: item.to,
                            custom: ""
                          }, {
                            default: withCtx(({navigate, href, isActive, isExactActive}) => [
                              createElementVNode("a", {
                                href: href,
                                class: normalizeClass($options.linkClass({isActive, isExactActive})),
                                onClick: $event => ($options.onItemClick($event, item, navigate)),
                                role: "presentation"
                              }, [
                                createElementVNode("span", _hoisted_5, toDisplayString(index + 1), 1),
                                createElementVNode("span", _hoisted_6, toDisplayString($options.label(item)), 1)
                              ], 10, _hoisted_4)
                            ]),
                            _: 2
                          }, 1032, ["to"]))
                        : (openBlock(), createElementBlock("span", {
                            key: 1,
                            class: normalizeClass($options.linkClass()),
                            role: "presentation"
                          }, [
                            createElementVNode("span", _hoisted_7, toDisplayString(index + 1), 1),
                            createElementVNode("span", _hoisted_8, toDisplayString($options.label(item)), 1)
                          ], 2))
                    ], 64))
                  : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
                      key: 1,
                      item: item
                    }, null, 8, ["item"]))
              ], 14, _hoisted_3))
            : createCommentVNode("", true)
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

export { script as default };
