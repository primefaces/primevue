'use strict';

var utils = require('primevue/utils');
var vue = require('vue');

var script = {
    name: 'Accordion',
    emits: ['tab-close', 'tab-open', 'update:activeIndex'],
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        activeIndex: {
            type: [Number,Array],
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        },
        expandIcon: {
            type: String,
            default: 'pi-chevron-right'
        },
        collapseIcon: {
            type: String,
            default: 'pi-chevron-down'
        }
    },
    data() {
        return {
            d_activeIndex: this.activeIndex
        }
    },
    watch: {
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    methods: {
        onTabClick(event, tab, i) {
            if (!this.isTabDisabled(tab)) {
                const active = this.isTabActive(i);
                const eventName = active ? 'tab-close' : 'tab-open';

                if (this.multiple) {
                    if (active) {
                        this.d_activeIndex = this.d_activeIndex.filter(index => index !== i);
                    }
                    else {
                        if (this.d_activeIndex)
                            this.d_activeIndex.push(i);
                        else
                            this.d_activeIndex = [i];
                    }
                }
                else {
                    this.d_activeIndex = this.d_activeIndex === i ? null : i;
                }

                this.$emit('update:activeIndex', this.d_activeIndex);

                this.$emit(eventName, {
                    originalEvent: event,
                    index: i
                });
            }
        },
        onTabKeydown(event, tab, i) {
            if (event.which === 13) {
                this.onTabClick(event, tab, i);
            }
        },
        isTabActive(index) {
            if (this.multiple)
                return this.d_activeIndex && this.d_activeIndex.includes(index);
            else
                return index === this.d_activeIndex;
        },
        getKey(tab, i) {
            return (tab.props && tab.props.header) ? tab.props.header : i;
        },
        isTabDisabled(tab) {
            return tab.props && tab.props.disabled;
        },
        getTabClass(i) {
            return ['p-accordion-tab', {'p-accordion-tab-active': this.isTabActive(i)}];
        },
        getTabHeaderClass(tab, i) {
            return ['p-accordion-header', {'p-highlight': this.isTabActive(i), 'p-disabled': this.isTabDisabled(tab)}];
        },
        getTabAriaId(i) {
            return this.ariaId + '_' + i;
        },
        getHeaderCollapseIcon() {
            return ['p-accordion-toggle-icon pi', this.collapseIcon];
        },
        getHeaderExpandIcon() {
            return ['p-accordion-toggle-icon pi', this.expandIcon];
        },
        isAccordionTab(child) {
            return child.type.name === 'AccordionTab';
        }
    },
    computed: {
        tabs() {
            const tabs = [];
            this.$slots.default().forEach(child => {
                    if (this.isAccordionTab(child)) {
                        tabs.push(child);
                    }
                    else if (child.children && child.children instanceof Array) {
                        child.children.forEach(nestedChild => {
                            if (this.isAccordionTab(nestedChild)) {
                                tabs.push(nestedChild);
                            }
                        });
                    }
                }
            );
            return tabs;
        },
        ariaId() {
            return utils.UniqueComponentId();
        }
    }
};

const _hoisted_1 = { class: "p-accordion p-component" };
const _hoisted_2 = ["onClick", "onKeydown", "tabindex", "aria-expanded", "id", "aria-controls"];
const _hoisted_3 = {
  key: 0,
  class: "p-accordion-header-text"
};
const _hoisted_4 = ["id", "aria-labelledby"];
const _hoisted_5 = { class: "p-accordion-content" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.tabs, (tab, i) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        key: $options.getKey(tab,i),
        class: vue.normalizeClass($options.getTabClass(i))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass($options.getTabHeaderClass(tab, i))
        }, [
          vue.createElementVNode("a", {
            role: "tab",
            class: "p-accordion-header-link",
            onClick: $event => ($options.onTabClick($event, tab, i)),
            onKeydown: $event => ($options.onTabKeydown($event, tab, i)),
            tabindex: $options.isTabDisabled(tab) ? null : '0',
            "aria-expanded": $options.isTabActive(i),
            id: $options.getTabAriaId(i) + '_header',
            "aria-controls": $options.getTabAriaId(i) + '_content'
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass($options.isTabActive(i) ? $options.getHeaderCollapseIcon() : $options.getHeaderExpandIcon())
            }, null, 2),
            (tab.props && tab.props.header)
              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(tab.props.header), 1))
              : vue.createCommentVNode("", true),
            (tab.children && tab.children.header)
              ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(tab.children.header), { key: 1 }))
              : vue.createCommentVNode("", true)
          ], 40, _hoisted_2)
        ], 2),
        vue.createVNode(vue.Transition, { name: "p-toggleable-content" }, {
          default: vue.withCtx(() => [
            ($props.lazy ? $options.isTabActive(i) : true)
              ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: "p-toggleable-content",
                  role: "region",
                  id: $options.getTabAriaId(i) + '_content',
                  "aria-labelledby": $options.getTabAriaId(i) + '_header'
                }, [
                  vue.createElementVNode("div", _hoisted_5, [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(tab)))
                  ])
                ], 8, _hoisted_4)), [
                  [vue.vShow, $props.lazy ? true: $options.isTabActive(i)]
                ])
              : vue.createCommentVNode("", true)
          ]),
          _: 2
        }, 1024)
      ], 2))
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

var css_248z = "\n.p-accordion-header-link {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    position: relative;\n    text-decoration: none;\n}\n.p-accordion-header-link:focus {\n    z-index: 1;\n}\n.p-accordion-header-text {\n    line-height: 1;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
