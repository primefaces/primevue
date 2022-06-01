this.primevue = this.primevue || {};
this.primevue.splitter = (function (utils, vue) {
    'use strict';

    var script = {
        name: 'Splitter',
        emits: ['resizeend'],
        props: {
            layout: {
                type: String,
                default: 'horizontal'
            },
            gutterSize: {
                type: Number,
                default: 4
            },
            stateKey: {
                type: String,
                default: null
            },
            stateStorage: {
                type: String,
                default: 'session'
            }
        },
        dragging: false,
        mouseMoveListener: null,
        mouseUpListener: null,
        size: null,
        gutterElement: null,
        startPos: null,
        prevPanelElement: null,
        nextPanelElement: null,
        nextPanelSize: null,
        prevPanelSize: null,
        panelSizes: null,
        prevPanelIndex: null,
        mounted() {
            if (this.panels && this.panels.length) {
                let initialized = false;
                if (this.isStateful()) {
                    initialized = this.restoreState();
                }

                if (!initialized) {
                    let children = [...this.$el.children].filter(child => utils.DomHandler.hasClass(child, 'p-splitter-panel'));
                    let _panelSizes = [];

                    this.panels.map((panel, i) => {
                        let panelInitialSize = panel.props && panel.props.size ? panel.props.size: null;
                        let panelSize = panelInitialSize || (100 / this.panels.length);
                        _panelSizes[i] = panelSize;
                        children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                    });

                    this.panelSizes = _panelSizes;
                }
            }
        },
        beforeUnmount() {
            this.clear();
            this.unbindMouseListeners();
        },
        methods: {
            isSplitterPanel(child) {
                return child.type.name === 'SplitterPanel';
            },
            onResizeStart(event, index) {
                this.gutterElement = event.currentTarget;
                this.size = this.horizontal ? utils.DomHandler.getWidth(this.$el) : utils.DomHandler.getHeight(this.$el);
                this.dragging = true;
                this.startPos = this.layout === 'horizontal' ? event.pageX : event.pageY;
                this.prevPanelElement = this.gutterElement.previousElementSibling;
                this.nextPanelElement = this.gutterElement.nextElementSibling;
                this.prevPanelSize = 100 * (this.horizontal ? utils.DomHandler.getOuterWidth(this.prevPanelElement, true): utils.DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
                this.nextPanelSize = 100 * (this.horizontal ? utils.DomHandler.getOuterWidth(this.nextPanelElement, true): utils.DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
                this.prevPanelIndex = index;
                utils.DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing');
                utils.DomHandler.addClass(this.$el, 'p-splitter-resizing');
            },
            onResize(event) {
                let newPos;
                if (this.horizontal)
                    newPos = (event.pageX * 100 / this.size) - (this.startPos * 100 / this.size);
                else
                    newPos = (event.pageY * 100 / this.size) - (this.startPos * 100 / this.size);

                let newPrevPanelSize = this.prevPanelSize + newPos;
                let newNextPanelSize = this.nextPanelSize - newPos;

                if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
                    this.prevPanelElement.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                    this.nextPanelElement.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                    this.panelSizes[this.prevPanelIndex] = newPrevPanelSize;
                    this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
                }
            },
            onResizeEnd(event) {
                if (this.isStateful()) {
                    this.saveState();
                }

                this.$emit('resizeend', {originalEvent: event, sizes: this.panelSizes});
                utils.DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing');
                utils.DomHandler.removeClass(this.$el, 'p-splitter-resizing');
                this.clear();
            },
            onGutterMouseDown(event, index) {
                this.onResizeStart(event, index);
                this.bindMouseListeners();
            },
            onGutterTouchStart(event, index) {
                this.onResizeStart(event, index);
                event.preventDefault();
            },
            onGutterTouchMove(event) {
                this.onResize(event);
                event.preventDefault();
            },
            onGutterTouchEnd(event) {
                this.onResizeEnd(event);
                event.preventDefault();
            },
            bindMouseListeners() {
                if (!this.mouseMoveListener) {
                    this.mouseMoveListener = event => this.onResize(event);
                    document.addEventListener('mousemove', this.mouseMoveListener);
                }

                if (!this.mouseUpListener) {
                    this.mouseUpListener = event => {
                        this.onResizeEnd(event);
                        this.unbindMouseListeners();
                    };
                    document.addEventListener('mouseup', this.mouseUpListener);
                }
            },
            validateResize(newPrevPanelSize, newNextPanelSize) {
                let prevPanelMinSize = utils.ObjectUtils.getVNodeProp(this.panels[0], 'minSize');
                if (this.panels[0].props && prevPanelMinSize && prevPanelMinSize > newPrevPanelSize) {
                    return false;
                }

                let newPanelMinSize = utils.ObjectUtils.getVNodeProp(this.panels[1], 'minSize');
                if (this.panels[1].props && newPanelMinSize && newPanelMinSize > newNextPanelSize) {
                    return false;
                }

                return true;
            },
            unbindMouseListeners() {
                if (this.mouseMoveListener) {
                    document.removeEventListener('mousemove', this.mouseMoveListener);
                    this.mouseMoveListener = null;
                }

                if (this.mouseUpListener) {
                    document.removeEventListener('mouseup', this.mouseUpListener);
                    this.mouseUpListener = null;
                }
            },
            clear() {
                this.dragging = false;
                this.size = null;
                this.startPos = null;
                this.prevPanelElement = null;
                this.nextPanelElement = null;
                this.prevPanelSize = null;
                this.nextPanelSize = null;
                this.gutterElement = null;
                this.prevPanelIndex = null;
            },
            isStateful() {
                return this.stateKey != null;
            },
            getStorage() {
                switch(this.stateStorage) {
                    case 'local':
                        return window.localStorage;

                    case 'session':
                        return window.sessionStorage;

                    default:
                        throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
                }
            },
            saveState() {
                this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes));
            },
            restoreState() {
                const storage = this.getStorage();
                const stateString = storage.getItem(this.stateKey);

                if (stateString) {
                    this.panelSizes = JSON.parse(stateString);
                    let children = [...this.$el.children].filter(child => utils.DomHandler.hasClass(child, 'p-splitter-panel'));
                    children.forEach((child, i) => {
                        child.style.flexBasis = 'calc(' + this.panelSizes[i] + '% - ' + ((this.panels.length - 1) * this.gutterSize) + 'px)';
                    });

                    return true;
                }

                return false;
            }
        },
        computed: {
            containerClass() {
                return ['p-splitter p-component', 'p-splitter-' + this.layout];
            },
            panels() {
                const panels = [];
                this.$slots.default().forEach(child => {
                        if (this.isSplitterPanel(child)) {
                            panels.push(child);
                        }
                        else if (child.children instanceof Array) {
                            child.children.forEach(nestedChild => {
                                if (this.isSplitterPanel(nestedChild)) {
                                    panels.push(nestedChild);
                                }
                            });
                        }
                    }
                );
                return panels;
            },
            gutterStyle() {
                if (this.horizontal)
                    return {width: this.gutterSize + 'px'};
                else
                    return {height: this.gutterSize + 'px'};
            },
            horizontal() {
                return this.layout === 'horizontal';
            }
        }
    };

    const _hoisted_1 = ["onMousedown", "onTouchstart", "onTouchmove", "onTouchend"];
    const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("div", { class: "p-splitter-gutter-handle" }, null, -1);
    const _hoisted_3 = [
      _hoisted_2
    ];

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass($options.containerClass)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.panels, (panel, i) => {
          return (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: i }, [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(panel))),
            (i !== ($options.panels.length -1))
              ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: "p-splitter-gutter",
                  style: vue.normalizeStyle($options.gutterStyle),
                  onMousedown: $event => ($options.onGutterMouseDown($event, i)),
                  onTouchstart: $event => ($options.onGutterTouchStart($event, i)),
                  onTouchmove: $event => ($options.onGutterTouchMove($event, i)),
                  onTouchend: $event => ($options.onGutterTouchEnd($event, i))
                }, _hoisted_3, 44, _hoisted_1))
              : vue.createCommentVNode("", true)
          ], 64))
        }), 128))
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

    var css_248z = "\n.p-splitter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\n.p-splitter-vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-splitter-panel {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.p-splitter-panel-nested {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-splitter-panel .p-splitter {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    border: 0 none;\n}\n.p-splitter-gutter {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: col-resize;\n}\n.p-splitter-horizontal.p-splitter-resizing {\n    cursor: col-resize;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n    height: 24px;\n    width: 100%;\n}\n.p-splitter-horizontal > .p-splitter-gutter {\n    cursor: col-resize;\n}\n.p-splitter-vertical.p-splitter-resizing {\n    cursor: row-resize;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.p-splitter-vertical > .p-splitter-gutter {\n    cursor: row-resize;\n}\n.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n    width: 24px;\n    height: 100%;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, Vue);
