'use strict';

var utils = require('primevue/utils');
var OverlayEventBus = require('primevue/overlayeventbus');
var Tree = require('primevue/tree');
var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
var Tree__default = /*#__PURE__*/_interopDefaultLegacy(Tree);
var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script = {
    name: 'TreeSelect',
    emits: ['update:modelValue', 'before-show', 'before-hide', 'change', 'show', 'hide', 'node-select', 'node-unselect', 'node-expand', 'node-collapse'],
    props: {
        modelValue: null,
        options: Array,
		scrollHeight: {
			type: String,
			default: '400px'
		},
		placeholder: String,
		disabled: Boolean,
        tabindex: String,
        inputId: String,
        ariaLabelledBy: null,
        selectionMode: {
            type: String,
            default: 'single'
        },
        panelClass: {
            type: String,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        emptyMessage: {
            type: String,
            default: null
        },
        display: {
            type: String,
            default: 'comma'
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        modelValue: {
            handler: function() {
                if (!this.selfChange) {
                    this.updateTreeState();
                }
                this.selfChange = false;
            },
            immediate: true
        },
        options() {
            this.updateTreeState();
        }
    },
    data() {
        return {
            focused: false,
            overlayVisible: false,
            expandedKeys: {}
        };
    },
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    selfChange: false,
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay) {
            utils.ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    },
    mounted() {
        this.updateTreeState();
    },
    methods: {
        show() {
            this.$emit('before-show');
            this.overlayVisible = true;
        },
        hide() {
            this.$emit('before-hide');
            this.overlayVisible = false;
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        onClick(event) {
            if (!this.disabled && (!this.overlay || !this.overlay.contains(event.target)) && !utils.DomHandler.hasClass(event.target, 'p-treeselect-close')) {
                if (this.overlayVisible)
                    this.hide();
                else
                    this.show();

                this.$refs.focusInput.focus();
            }
        },
        onSelectionChange(keys) {
            this.selfChange = true;
            this.$emit('update:modelValue', keys);
            this.$emit('change', keys);
        },
        onNodeSelect(node) {
            this.$emit('node-select', node);

            if (this.selectionMode === 'single') {
                this.hide();
            }
        },
        onNodeUnselect(node) {
            this.$emit('node-unselect', node);
        },
        onNodeToggle(keys) {
            this.expandedKeys = keys;
        },
        onKeyDown(event) {
            switch(event.which) {
                //down
                case 40:
                    if (!this.overlayVisible && event.altKey) {
                        this.show();
                        event.preventDefault();
                    }
                break;

                //space
                case 32:
                    if (!this.overlayVisible) {
                        this.show();
                        event.preventDefault();
                    }
                break;

                //enter and escape
                case 13:
                case 27:
                    if (this.overlayVisible) {
                        this.hide();
                        event.preventDefault();
                    }
                break;

                //tab
                case 9:
                    this.hide();
                break;
            }
        },
        onOverlayEnter(el) {
            utils.ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
            this.scrollValueInView();
            this.$emit('show');
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.$emit('hide');
            this.overlay = null;
        },
        onOverlayAfterLeave(el) {
            utils.ZIndexUtils.clear(el);
        },
        alignOverlay() {
            if (this.appendDisabled) {
                utils.DomHandler.relativePosition(this.overlay, this.$el);
            }
            else {
                this.overlay.style.minWidth = utils.DomHandler.getOuterWidth(this.$el) + 'px';
                utils.DomHandler.absolutePosition(this.overlay, this.$el);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.isOutsideClicked(event)) {
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
                this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$refs.container, () => {
                    if (this.overlayVisible) {
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
                    if (this.overlayVisible) {
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
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
        },
        overlayRef(el) {
            this.overlay = el;
        },
        onOverlayClick(event) {
            OverlayEventBus__default["default"].emit('overlay-click', {
                originalEvent: event,
                target: this.$el
            });
        },
        findSelectedNodes(node, keys, selectedNodes) {
            if (node) {
                if (this.isSelected(node, keys)) {
                    selectedNodes.push(node);
                    delete keys[node.key];
                }

                if (Object.keys(keys).length && node.children) {
                    for (let childNode of node.children) {
                        this.findSelectedNodes(childNode, keys, selectedNodes);
                    }
                }
            }
            else {
                for (let childNode of this.options) {
                    this.findSelectedNodes(childNode, keys, selectedNodes);
                }
            }
        },
        isSelected(node, keys) {
            return this.selectionMode === 'checkbox' ? keys[node.key] && keys[node.key].checked : keys[node.key];
        },
        updateTreeState() {
            let keys = {...this.modelValue};
            this.expandedKeys = {};
            if (keys && this.options) {
                this.updateTreeBranchState(null, null, keys);
            }
        },
        updateTreeBranchState(node, path, keys) {
            if (node) {
                if (this.isSelected(node, keys)) {
                    this.expandPath(path);
                    delete keys[node.key];
                }

                if (Object.keys(keys).length && node.children) {
                    for (let childNode of node.children) {
                        path.push(node.key);
                        this.updateTreeBranchState(childNode, path, keys);
                    }
                }
            }
            else {
                for (let childNode of this.options) {
                    this.updateTreeBranchState(childNode, [], keys);
                }
            }
        },
        expandPath(path) {
            if (path.length > 0) {
                for (let key of path) {
                    this.expandedKeys[key] = true;
                }
            }
        },
        scrollValueInView() {
            if (this.overlay) {
                let selectedItem = utils.DomHandler.findSingle(this.overlay, 'li.p-highlight');
                if (selectedItem) {
                    selectedItem.scrollIntoView({ block: 'nearest', inline: 'start' });
                }
            }
        }
    },
    computed: {
        containerClass() {
            return [
                'p-treeselect p-component p-inputwrapper',
                {
                    'p-treeselect-chip': this.display === 'chip',
                    'p-disabled': this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': !this.emptyValue,
                    'p-inputwrapper-focus': this.focused || this.overlayVisible
                }
            ];
        },
        labelClass() {
            return [
                'p-treeselect-label',
                {
                    'p-placeholder': this.label === this.placeholder,
                    'p-treeselect-label-empty': !this.placeholder && this.emptyValue
                }
            ];
        },
        panelStyleClass() {
            return ['p-treeselect-panel p-component', this.panelClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        selectedNodes() {
            let selectedNodes = [];
            if (this.modelValue && this.options) {
                let keys = {...this.modelValue};
                this.findSelectedNodes(null, keys, selectedNodes);
            }

            return selectedNodes;
        },
        label() {
            let value = this.selectedNodes;
            return value.length ? value.map(node => node.label).join(', '): this.placeholder;
        },
        emptyMessageText() {
            return this.emptyMessage || this.$primevue.config.locale.emptyMessage;
        },
        emptyValue() {
            return !this.modelValue || Object.keys(this.modelValue).length === 0;
        },
        emptyOptions() {
            return !this.options || this.options.length === 0;
        },
        appendDisabled() {
            return this.appendTo === 'self';
        },
        appendTarget() {
            return this.appendDisabled ? null : this.appendTo;
        }
    },
    components: {
        'TSTree': Tree__default["default"]
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1 = { class: "p-hidden-accessible" };
const _hoisted_2 = ["id", "disabled", "tabindex", "aria-expanded", "aria-labelledby"];
const _hoisted_3 = { class: "p-treeselect-label-container" };
const _hoisted_4 = { class: "p-treeselect-token-label" };
const _hoisted_5 = { class: "p-treeselect-trigger" };
const _hoisted_6 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-treeselect-trigger-icon pi pi-chevron-down" }, null, -1);
const _hoisted_7 = {
  key: 0,
  class: "p-treeselect-empty-message"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TSTree = vue.resolveComponent("TSTree");

  return (vue.openBlock(), vue.createElementBlock("div", {
    ref: "container",
    class: vue.normalizeClass($options.containerClass),
    onClick: _cache[6] || (_cache[6] = (...args) => ($options.onClick && $options.onClick(...args)))
  }, [
    vue.createElementVNode("div", _hoisted_1, [
      vue.createElementVNode("input", {
        ref: "focusInput",
        type: "text",
        role: "listbox",
        id: $props.inputId,
        readonly: "",
        disabled: $props.disabled,
        onFocus: _cache[0] || (_cache[0] = (...args) => ($options.onFocus && $options.onFocus(...args))),
        onBlur: _cache[1] || (_cache[1] = (...args) => ($options.onBlur && $options.onBlur(...args))),
        onKeydown: _cache[2] || (_cache[2] = (...args) => ($options.onKeyDown && $options.onKeyDown(...args))),
        tabindex: $props.tabindex,
        "aria-haspopup": "true",
        "aria-expanded": $data.overlayVisible,
        "aria-labelledby": $props.ariaLabelledBy
      }, null, 40, _hoisted_2)
    ]),
    vue.createElementVNode("div", _hoisted_3, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass($options.labelClass)
      }, [
        vue.renderSlot(_ctx.$slots, "value", {
          value: $options.selectedNodes,
          placeholder: $props.placeholder
        }, () => [
          ($props.display === 'comma')
            ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createTextVNode(vue.toDisplayString($options.label || 'empty'), 1)
              ], 64))
            : ($props.display === 'chip')
              ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.selectedNodes, (node) => {
                    return (vue.openBlock(), vue.createElementBlock("div", {
                      class: "p-treeselect-token",
                      key: node.key
                    }, [
                      vue.createElementVNode("span", _hoisted_4, vue.toDisplayString(node.label), 1)
                    ]))
                  }), 128)),
                  ($options.emptyValue)
                    ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                        vue.createTextVNode(vue.toDisplayString($props.placeholder || 'empty'), 1)
                      ], 64))
                    : vue.createCommentVNode("", true)
                ], 64))
              : vue.createCommentVNode("", true)
        ])
      ], 2)
    ]),
    vue.createElementVNode("div", _hoisted_5, [
      vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
        _hoisted_6
      ])
    ]),
    (vue.openBlock(), vue.createBlock(vue.Teleport, {
      to: $options.appendTarget,
      disabled: $options.appendDisabled
    }, [
      vue.createVNode(vue.Transition, {
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, {
        default: vue.withCtx(() => [
          ($data.overlayVisible)
            ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                ref: $options.overlayRef,
                onClick: _cache[5] || (_cache[5] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args))),
                class: vue.normalizeClass($options.panelStyleClass)
              }, [
                vue.renderSlot(_ctx.$slots, "header", {
                  value: $props.modelValue,
                  options: $props.options
                }),
                vue.createElementVNode("div", {
                  class: "p-treeselect-items-wrapper",
                  style: vue.normalizeStyle({'max-height': $props.scrollHeight})
                }, [
                  vue.createVNode(_component_TSTree, {
                    value: $props.options,
                    selectionMode: $props.selectionMode,
                    "onUpdate:selectionKeys": $options.onSelectionChange,
                    selectionKeys: $props.modelValue,
                    expandedKeys: $data.expandedKeys,
                    "onUpdate:expandedKeys": $options.onNodeToggle,
                    metaKeySelection: $props.metaKeySelection,
                    onNodeExpand: _cache[3] || (_cache[3] = $event => (_ctx.$emit('node-expand', $event))),
                    onNodeCollapse: _cache[4] || (_cache[4] = $event => (_ctx.$emit('node-collapse', $event))),
                    onNodeSelect: $options.onNodeSelect,
                    onNodeUnselect: $options.onNodeUnselect
                  }, null, 8, ["value", "selectionMode", "onUpdate:selectionKeys", "selectionKeys", "expandedKeys", "onUpdate:expandedKeys", "metaKeySelection", "onNodeSelect", "onNodeUnselect"]),
                  ($options.emptyOptions)
                    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
                        vue.renderSlot(_ctx.$slots, "empty", {}, () => [
                          vue.createTextVNode(vue.toDisplayString($options.emptyMessageText), 1)
                        ])
                      ]))
                    : vue.createCommentVNode("", true)
                ], 4),
                vue.renderSlot(_ctx.$slots, "footer", {
                  value: $props.modelValue,
                  options: $props.options
                })
              ], 2))
            : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])
    ], 8, ["to", "disabled"]))
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

var css_248z = "\n.p-treeselect {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.p-treeselect-trigger {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.p-treeselect-label-container {\n    overflow: hidden;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    cursor: pointer;\n}\n.p-treeselect-label  {\n    display: block;\n    white-space: nowrap;\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.p-treeselect-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\n.p-treeselect-token {\n    cursor: default;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n}\n.p-treeselect .p-treeselect-panel {\n    min-width: 100%;\n}\n.p-treeselect-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-treeselect-items-wrapper {\n    overflow: auto;\n}\n.p-fluid .p-treeselect {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
