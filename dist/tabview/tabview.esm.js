import { DomHandler } from 'primevue/utils';
import Ripple from 'primevue/ripple';
import { resolveDirective, openBlock, createElementBlock, normalizeClass, createElementVNode, withDirectives, createCommentVNode, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent, vShow } from 'vue';

var script = {
    name: 'TabView',
    emits: ['update:activeIndex', 'tab-change', 'tab-click'],
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            d_activeIndex: this.activeIndex,
            backwardIsDisabled: true,
            forwardIsDisabled: false
        }
    },
    watch: {
        activeIndex(newValue) {
            this.d_activeIndex = newValue;

            this.updateScrollBar(newValue);
        }
    },
    updated() {
        this.updateInkBar();
    },
    mounted() {
        this.updateInkBar();
    },
    methods: {
        onTabClick(event, i) {
            if (!this.isTabDisabled(this.tabs[i]) && i !== this.d_activeIndex) {
                this.d_activeIndex = i;
                this.$emit('update:activeIndex', this.d_activeIndex);

                this.$emit('tab-change', {
                    originalEvent: event,
                    index: i
                });

                this.updateScrollBar(i);
            }

            this.$emit('tab-click', {
                originalEvent: event,
                index: i
            });
        },
        onTabKeydown(event, i) {
            if (event.which === 13) {
                this.onTabClick(event, i);
            }
        },
        updateInkBar() {
            let tabHeader = this.$refs.nav.children[this.d_activeIndex];
            this.$refs.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
            this.$refs.inkbar.style.left =  DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.$refs.nav).left + 'px';
        },
        updateScrollBar(index) {
            let tabHeader = this.$refs.nav.children[index];
            tabHeader.scrollIntoView({ block: 'nearest' });
        },
        updateButtonState() {
            const content = this.$refs.content;
            const { scrollLeft, scrollWidth } = content;
            const width = DomHandler.getWidth(content);

            this.backwardIsDisabled = scrollLeft === 0;
            this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
        },
        getKey(tab, i) {
            return (tab.props && tab.props.header) ? tab.props.header : i;
        },
        isTabDisabled(tab) {
            return (tab.props && tab.props.disabled);
        },
        isTabPanel(child) {
            return child.type.name === 'TabPanel'
        },
        onScroll(event) {
            this.scrollable && this.updateButtonState();

            event.preventDefault();
        },
        getVisibleButtonWidths() {
            const { prevBtn, nextBtn } = this.$refs;

            return [prevBtn, nextBtn].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
        },
        navBackward() {
            const content = this.$refs.content;
            const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
            const pos = content.scrollLeft - width;
            content.scrollLeft = pos <= 0 ? 0 : pos;
        },
        navForward() {
            const content = this.$refs.content;
            const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
            const pos = content.scrollLeft + width;
            const lastPos = content.scrollWidth - width;

            content.scrollLeft = pos >= lastPos ? lastPos : pos;
        }
    },
    computed: {
        contentClasses() {
			return ['p-tabview p-component', {'p-tabview-scrollable': this.scrollable}];
		},
        prevButtonClasses() {
            return ['p-tabview-nav-prev p-tabview-nav-btn p-link']
        },
        nextButtonClasses() {
            return ['p-tabview-nav-next p-tabview-nav-btn p-link']
        },
        tabs() {
            const tabs = [];
            this.$slots.default().forEach(child => {
                    if (this.isTabPanel(child)) {
                        tabs.push(child);
                    }
                    else if (child.children && child.children instanceof Array) {
                        child.children.forEach(nestedChild => {
                            if (this.isTabPanel(nestedChild)) {
                                tabs.push(nestedChild);
                            }
                        });
                    }
                }
            );
            return tabs;
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = { class: "p-tabview-nav-container" };
const _hoisted_2 = /*#__PURE__*/createElementVNode("span", { class: "pi pi-chevron-left" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  ref: "nav",
  class: "p-tabview-nav",
  role: "tablist"
};
const _hoisted_5 = ["onClick", "onKeydown", "tabindex", "aria-selected"];
const _hoisted_6 = {
  key: 0,
  class: "p-tabview-title"
};
const _hoisted_7 = {
  ref: "inkbar",
  class: "p-tabview-ink-bar"
};
const _hoisted_8 = /*#__PURE__*/createElementVNode("span", { class: "pi pi-chevron-right" }, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { class: "p-tabview-panels" };
const _hoisted_11 = {
  key: 0,
  class: "p-tabview-panel",
  role: "tabpanel"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.contentClasses)
  }, [
    createElementVNode("div", _hoisted_1, [
      ($props.scrollable && !$data.backwardIsDisabled)
        ? withDirectives((openBlock(), createElementBlock("button", {
            key: 0,
            ref: "prevBtn",
            class: normalizeClass($options.prevButtonClasses),
            onClick: _cache[0] || (_cache[0] = (...args) => ($options.navBackward && $options.navBackward(...args))),
            type: "button"
          }, _hoisted_3, 2)), [
            [_directive_ripple]
          ])
        : createCommentVNode("", true),
      createElementVNode("div", {
        ref: "content",
        class: "p-tabview-nav-content",
        onScroll: _cache[1] || (_cache[1] = (...args) => ($options.onScroll && $options.onScroll(...args)))
      }, [
        createElementVNode("ul", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, (tab, i) => {
            return (openBlock(), createElementBlock("li", {
              role: "presentation",
              key: $options.getKey(tab,i),
              class: normalizeClass([{'p-highlight': ($data.d_activeIndex === i), 'p-disabled': $options.isTabDisabled(tab)}])
            }, [
              withDirectives((openBlock(), createElementBlock("a", {
                role: "tab",
                class: "p-tabview-nav-link",
                onClick: $event => ($options.onTabClick($event, i)),
                onKeydown: $event => ($options.onTabKeydown($event, i)),
                tabindex: $options.isTabDisabled(tab) ? null : '0',
                "aria-selected": $data.d_activeIndex === i
              }, [
                (tab.props && tab.props.header)
                  ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(tab.props.header), 1))
                  : createCommentVNode("", true),
                (tab.children && tab.children.header)
                  ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.header), { key: 1 }))
                  : createCommentVNode("", true)
              ], 40, _hoisted_5)), [
                [_directive_ripple]
              ])
            ], 2))
          }), 128)),
          createElementVNode("li", _hoisted_7, null, 512)
        ], 512)
      ], 544),
      ($props.scrollable && !$data.forwardIsDisabled)
        ? withDirectives((openBlock(), createElementBlock("button", {
            key: 1,
            ref: "nextBtn",
            class: normalizeClass($options.nextButtonClasses),
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.navForward && $options.navForward(...args))),
            type: "button"
          }, _hoisted_9, 2)), [
            [_directive_ripple]
          ])
        : createCommentVNode("", true)
    ]),
    createElementVNode("div", _hoisted_10, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, (tab, i) => {
        return (openBlock(), createElementBlock(Fragment, {
          key: $options.getKey(tab,i)
        }, [
          ($props.lazy ? ($data.d_activeIndex === i) : true)
            ? withDirectives((openBlock(), createElementBlock("div", _hoisted_11, [
                (openBlock(), createBlock(resolveDynamicComponent(tab)))
              ], 512)), [
                [vShow, $props.lazy ? true: ($data.d_activeIndex === i)]
              ])
            : createCommentVNode("", true)
        ], 64))
      }), 128))
    ])
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

var css_248z = "\n.p-tabview-nav-container {\n    position: relative;\n}\n.p-tabview-scrollable .p-tabview-nav-container {\n    overflow: hidden;\n}\n.p-tabview-nav-content {\n    overflow-x: auto;\n    overflow-y: hidden;\n    scroll-behavior: smooth;\n    scrollbar-width: none;\n    -ms-scroll-chaining: contain auto;\n        overscroll-behavior: contain auto;\n}\n.p-tabview-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.p-tabview-nav-link {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: relative;\n    text-decoration: none;\n    overflow: hidden;\n}\n.p-tabview-ink-bar {\n    display: none;\n    z-index: 1;\n}\n.p-tabview-nav-link:focus {\n    z-index: 1;\n}\n.p-tabview-title {\n    line-height: 1;\n    white-space: nowrap;\n}\n.p-tabview-nav-btn {\n    position: absolute;\n    top: 0;\n    z-index: 2;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-tabview-nav-prev {\n    left: 0;\n}\n.p-tabview-nav-next {\n    right: 0;\n}\n.p-tabview-nav-content::-webkit-scrollbar {\n    display: none;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
