this.primevue = this.primevue || {};
this.primevue.scrolltop = (function (utils, vue) {
    'use strict';

    var script = {
        name: 'ScrollTop',
        scrollListener: null,
        container: null,
        data() {
            return {
                visible: false
            }
        },
        props: {
            target: {
                type: String,
                default: 'window'
            },
            threshold: {
                type: Number,
                default: 400
            },
            icon: {
                type: String,
                default: 'pi pi-chevron-up'
            },
            behavior: {
                type: String,
                default: 'smooth'
            }
        },
        mounted() {
            if (this.target === 'window')
                this.bindDocumentScrollListener();
            else if (this.target === 'parent')
                this.bindParentScrollListener();
        },
        beforeUnmount() {
            if (this.target === 'window')
                this.unbindDocumentScrollListener();
            else if (this.target === 'parent')
                this.unbindParentScrollListener();

            if (this.container) {
                utils.ZIndexUtils.clear(this.container);
                this.overlay = null;
            }
        },
        methods: {
            onClick() {
                let scrollElement = this.target === 'window' ? window : this.$el.parentElement;
                scrollElement.scroll({
                    top: 0,
                    behavior: this.behavior
                });
            },
            checkVisibility(scrollY) {
                if (scrollY > this.threshold)
                    this.visible = true;
                else
                    this.visible = false;
            },
            bindParentScrollListener() {
                this.scrollListener = () => {
                    this.checkVisibility(this.$el.parentElement.scrollTop);
                };

                this.$el.parentElement.addEventListener('scroll', this.scrollListener);
            },
            bindDocumentScrollListener() {
                this.scrollListener = () => {
                    this.checkVisibility(utils.DomHandler.getWindowScrollTop());
                };

                window.addEventListener('scroll', this.scrollListener);
            },
            unbindParentScrollListener() {
                if (this.scrollListener) {
                    this.$el.parentElement.removeEventListener('scroll', this.scrollListener);
                    this.scrollListener = null;
                }
            },
            unbindDocumentScrollListener() {
                if (this.scrollListener) {
                    window.removeEventListener('scroll', this.scrollListener);
                    this.scrollListener = null;
                }
            },
            onEnter(el) {
                utils.ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            },
            onAfterLeave(el) {
                utils.ZIndexUtils.clear(el);
            },
            containerRef(el) {
                this.container = el;
            }
        },
        computed: {
            containerClass() {
                return ['p-scrolltop p-link p-component', {'p-scrolltop-sticky': this.target !== 'window'}];
            },
            iconClass() {
                return ['p-scrolltop-icon', this.icon];
            }
        }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock(vue.Transition, {
        name: "p-scrolltop",
        appear: "",
        onEnter: $options.onEnter,
        onAfterLeave: $options.onAfterLeave
      }, {
        default: vue.withCtx(() => [
          ($data.visible)
            ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 0,
                ref: $options.containerRef,
                class: vue.normalizeClass($options.containerClass),
                onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
                type: "button"
              }, [
                vue.createElementVNode("span", {
                  class: vue.normalizeClass($options.iconClass)
                }, null, 2)
              ], 2))
            : vue.createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["onEnter", "onAfterLeave"]))
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

    var css_248z = "\n.p-scrolltop {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-scrolltop-sticky {\n    position: sticky;\n}\n.p-scrolltop-sticky.p-link {\n    margin-left: auto;\n}\n.p-scrolltop-enter-from {\n    opacity: 0;\n}\n.p-scrolltop-enter-active {\n    -webkit-transition: opacity .15s;\n    transition: opacity .15s;\n}\n.p-scrolltop.p-scrolltop-leave-to {\n    opacity: 0;\n}\n.p-scrolltop-leave-active {\n    -webkit-transition: opacity .15s;\n    transition: opacity .15s;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, Vue);
