this.primevue = this.primevue || {};
this.primevue.blockui = (function (utils, vue) {
    'use strict';

    var script = {
        name: 'BlockUI',
        emits: ['block', 'unblock'],
        props: {
            blocked: {
                type: Boolean,
                default: false
            },
            fullScreen: {
                type: Boolean,
                default: false
            },
            baseZIndex: {
                type: Number,
                default: 0
            },
            autoZIndex: {
                type: Boolean,
                default: true
            }
        },
        mask: null,
        mounted() {
            if (this.blocked) {
                this.block();
            }
        },
        watch: {
            blocked(newValue) {
                if (newValue === true)
                    this.block();
                else
                    this.unblock();
            }
        },
        methods: {
            block() {
                let styleClass = 'p-blockui p-component-overlay p-component-overlay-enter';
                if (this.fullScreen) {
                    styleClass += ' p-blockui-document';
                    this.mask = document.createElement('div');
                    this.mask.setAttribute('class', styleClass);
                    document.body.appendChild(this.mask);
                    utils.DomHandler.addClass(document.body, 'p-overflow-hidden');
                    document.activeElement.blur();
                }
                else {
                    this.mask = document.createElement('div');
                    this.mask.setAttribute('class', styleClass);
                    this.$refs.container.appendChild(this.mask);
                }

                if (this.autoZIndex) {
                    utils.ZIndexUtils.set('modal', this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
                }

                this.$emit('block');
            },
            unblock() {
                utils.DomHandler.addClass(this.mask, 'p-component-overlay-leave');
                this.mask.addEventListener('animationend', () => {
                    this.removeMask();
                });
            },
            removeMask() {
                utils.ZIndexUtils.clear(this.mask);
                 if (this.fullScreen) {
                    document.body.removeChild(this.mask);
                    utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
                }
                else {
                    this.$refs.container.removeChild(this.mask);
                }

                this.$emit('unblock');
            }
        }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
        ref: "container",
        class: "p-blockui-container"
      }, _ctx.$attrs), [
        vue.renderSlot(_ctx.$slots, "default")
      ], 16))
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

    var css_248z = "\n.p-blockui-container {\n    position: relative;\n}\n.p-blockui {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.p-blockui.p-component-overlay {\n    position: absolute;\n}\n.p-blockui-document.p-component-overlay {\n    position: fixed;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, Vue);
