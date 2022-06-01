this.primevue = this.primevue || {};
this.primevue.overlaypanel = (function (utils, OverlayEventBus, Ripple, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
    var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

    var script = {
        name: 'OverlayPanel',
        inheritAttrs: false,
        props: {
    		dismissable: {
    			type: Boolean,
    			default: true
    		},
    		showCloseIcon: {
    			type: Boolean,
    			default: false
    		},
            appendTo: {
    			type: String,
    			default: 'body'
    		},
            baseZIndex: {
                type: Number,
                default: 0
            },
            autoZIndex: {
                type: Boolean,
                default: true
            },
            ariaCloseLabel: {
                type: String,
                default: 'close'
            },
            breakpoints: {
                type: Object,
                default: null
            }
        },
        emits: ['show', 'hide'],
        data() {
            return {
                visible: false
            }
        },
        selfClick: false,
        target: null,
        eventTarget: null,
        outsideClickListener: null,
        scrollHandler: null,
        resizeListener: null,
        container: null,
        styleElement: null,
        overlayEventListener: null,
        beforeUnmount() {
            if (this.dismissable) {
                this.unbindOutsideClickListener();
            }

            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.destroyStyle();
            this.unbindResizeListener();
            this.target = null;

            if (this.container && this.autoZIndex) {
                utils.ZIndexUtils.clear(this.container);
            }

            if (this.overlayEventListener) {
                OverlayEventBus__default["default"].off('overlay-click', this.overlayEventListener);
                this.overlayEventListener = null;
            }

            this.container = null;
        },
        mounted() {
            if (this.breakpoints) {
                this.createStyle();
            }
        },
        methods: {
            toggle(event, target) {
                if (this.visible)
                    this.hide();
                else
                    this.show(event, target);
            },
            show(event, target) {
                this.visible = true;
                this.eventTarget = event.currentTarget;
                this.target = target || event.currentTarget;
            },
            hide() {
                this.visible = false;
            },
            onContentClick() {
                this.selfClick = true;
            },
            onEnter(el) {
                this.container.setAttribute(this.attributeSelector, '');
                this.alignOverlay();
                if (this.dismissable) {
                    this.bindOutsideClickListener();
                }

                this.bindScrollListener();
                this.bindResizeListener();

                if (this.autoZIndex) {
                    utils.ZIndexUtils.set('overlay', el, this.baseZIndex + this.$primevue.config.zIndex.overlay);
                }

                this.overlayEventListener = (e) => {
                    if (this.container.contains(e.target)) {
                        this.selfClick = true;
                    }
                };

                OverlayEventBus__default["default"].on('overlay-click', this.overlayEventListener);
                this.$emit('show');
            },
            onLeave() {
                this.unbindOutsideClickListener();
                this.unbindScrollListener();
                this.unbindResizeListener();
                OverlayEventBus__default["default"].off('overlay-click', this.overlayEventListener);
                this.overlayEventListener = null;
                this.$emit('hide');
            },
            onAfterLeave(el) {
                if (this.autoZIndex) {
                    utils.ZIndexUtils.clear(el);
                }
            },
            alignOverlay() {
                utils.DomHandler.absolutePosition(this.container, this.target);

                const containerOffset = utils.DomHandler.getOffset(this.container);
                const targetOffset = utils.DomHandler.getOffset(this.target);
                let arrowLeft = 0;

                if (containerOffset.left < targetOffset.left) {
                    arrowLeft = targetOffset.left - containerOffset.left;
                }
                this.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

                if (containerOffset.top < targetOffset.top) {
                    utils.DomHandler.addClass(this.container, 'p-overlaypanel-flipped');
                }
            },
            bindOutsideClickListener() {
                if (!this.outsideClickListener) {
                    this.outsideClickListener = (event) => {
                        if (this.visible && !this.selfClick && !this.isTargetClicked(event)) {
                            this.visible = false;
                        }
                        this.selfClick = false;
                    };
                    document.addEventListener('click', this.outsideClickListener);
                }
            },
            unbindOutsideClickListener() {
                if (this.outsideClickListener) {
                    document.removeEventListener('click', this.outsideClickListener);
                    this.outsideClickListener = null;
                    this.selfClick = false;
                }
            },
            bindScrollListener() {
                if (!this.scrollHandler) {
                    this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.target, () => {
                        if (this.visible) {
                            this.visible = false;
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
                        if (this.visible && !utils.DomHandler.isAndroid()) {
                            this.visible = false;
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
                return (this.eventTarget && (this.eventTarget === event.target || this.eventTarget.contains(event.target)));
            },
            containerRef(el) {
                this.container = el;
            },
            createStyle() {
    			if (!this.styleElement) {
    				this.styleElement = document.createElement('style');
    				this.styleElement.type = 'text/css';
    				document.head.appendChild(this.styleElement);

                    let innerHTML = '';
                    for (let breakpoint in this.breakpoints) {
                        innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-overlaypanel[${this.attributeSelector}] {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
                    }

                    this.styleElement.innerHTML = innerHTML;
    			}
    		},
            destroyStyle() {
                if (this.styleElement) {
                    document.head.removeChild(this.styleElement);
                    this.styleElement = null;
                }
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
                return ['p-overlaypanel p-component', {
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false
                }];
            },
            attributeSelector() {
                return utils.UniqueComponentId();
            }
        },
        directives: {
            'ripple': Ripple__default["default"]
        }
    };

    const _hoisted_1 = ["aria-label"];
    const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-overlaypanel-close-icon pi pi-times" }, null, -1);
    const _hoisted_3 = [
      _hoisted_2
    ];

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _directive_ripple = vue.resolveDirective("ripple");

      return (vue.openBlock(), vue.createBlock(vue.Teleport, { to: $props.appendTo }, [
        vue.createVNode(vue.Transition, {
          name: "p-overlaypanel",
          onEnter: $options.onEnter,
          onLeave: $options.onLeave,
          onAfterLeave: $options.onAfterLeave
        }, {
          default: vue.withCtx(() => [
            ($data.visible)
              ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
                  key: 0,
                  class: $options.containerClass,
                  ref: $options.containerRef
                }, _ctx.$attrs, {
                  onClick: _cache[3] || (_cache[3] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
                }), [
                  vue.createElementVNode("div", {
                    class: "p-overlaypanel-content",
                    onClick: _cache[0] || (_cache[0] = (...args) => ($options.onContentClick && $options.onContentClick(...args))),
                    onMousedown: _cache[1] || (_cache[1] = (...args) => ($options.onContentClick && $options.onContentClick(...args)))
                  }, [
                    vue.renderSlot(_ctx.$slots, "default")
                  ], 32),
                  ($props.showCloseIcon)
                    ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                        key: 0,
                        class: "p-overlaypanel-close p-link",
                        onClick: _cache[2] || (_cache[2] = (...args) => ($options.hide && $options.hide(...args))),
                        "aria-label": $props.ariaCloseLabel,
                        type: "button"
                      }, _hoisted_3, 8, _hoisted_1)), [
                        [_directive_ripple]
                      ])
                    : vue.createCommentVNode("", true)
                ], 16))
              : vue.createCommentVNode("", true)
          ]),
          _: 3
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

    var css_248z = "\n.p-overlaypanel {\n    position: absolute;\n    margin-top: 10px;\n    top: 0;\n    left: 0;\n}\n.p-overlaypanel-flipped {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n.p-overlaypanel-close {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Animation */\n.p-overlaypanel-enter-from {\n    opacity: 0;\n    -webkit-transform: scaleY(0.8);\n            transform: scaleY(0.8);\n}\n.p-overlaypanel-leave-to {\n    opacity: 0;\n}\n.p-overlaypanel-enter-active {\n    -webkit-transition: opacity .12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform .12s cubic-bezier(0, 0, 0.2, 1);\n    transition: opacity .12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform .12s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform .12s cubic-bezier(0, 0, 0.2, 1);\n}\n.p-overlaypanel-leave-active {\n    -webkit-transition: opacity .1s linear;\n    transition: opacity .1s linear;\n}\n.p-overlaypanel:after, .p-overlaypanel:before {\n\tbottom: 100%;\n\tleft: calc(var(--overlayArrowLeft, 0) + 1.25rem);\n\tcontent: \" \";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.p-overlaypanel:after {\n\tborder-width: 8px;\n\tmargin-left: -8px;\n}\n.p-overlaypanel:before {\n\tborder-width: 10px;\n\tmargin-left: -10px;\n}\n.p-overlaypanel-flipped:after, .p-overlaypanel-flipped:before {\n    bottom: auto;\n    top: 100%;\n}\n.p-overlaypanel.p-overlaypanel-flipped:after {\n    border-bottom-color: transparent;\n}\n.p-overlaypanel.p-overlaypanel-flipped:before {\n    border-bottom-color: transparent\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, primevue.overlayeventbus, primevue.ripple, Vue);
