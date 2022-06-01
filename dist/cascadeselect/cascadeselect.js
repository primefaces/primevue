this.primevue = this.primevue || {};
this.primevue.cascadeselect = (function (utils, OverlayEventBus, Ripple, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
    var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

    var script$1 = {
        name: 'CascadeSelectSub',
        emits: ['option-select','optiongroup-select'],
        props: {
            selectionPath: Array,
            level: Number,
            options: Array,
            optionLabel: String,
            optionValue: String,
            optionGroupLabel: String,
            optionGroupChildren: Array,
            parentActive: Boolean,
            dirty: Boolean,
            templates: null,
            root: Boolean
        },
        data() {
            return {
                activeOption: null
            }
        },
        mounted() {
            if (this.selectionPath && this.options && !this.dirty) {
                for (let option of this.options) {
                    if (this.selectionPath.includes(option)) {
                        this.activeOption = option;
                        break;
                    }
                }
            }

            if (!this.root) {
                this.position();
            }
        },
        watch: {
            parentActive(newValue) {
                if (!newValue) {
                    this.activeOption = null;
                }
            }
        },
        methods: {
            onOptionClick(event, option) {
                if (this.isOptionGroup(option)) {
                    this.activeOption = (this.activeOption === option) ? null : option;

                    this.$emit('optiongroup-select', {
                        originalEvent: event,
                        value: option
                    });
                }
                else {
                    this.$emit('option-select', {
                        originalEvent: event,
                        value: this.getOptionValue(option)
                    });
                }
            },
            onOptionSelect(event) {
                this.$emit('option-select', event);
            },
            onOptionGroupSelect(event) {
                this.$emit('optiongroup-select', event);
            },
            getOptionLabel(option) {
                return this.optionLabel ? utils.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
            },
            getOptionValue(option) {
                return this.optionValue ? utils.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
            },
            getOptionGroupLabel(optionGroup) {
                return this.optionGroupLabel ? utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
            },
            getOptionGroupChildren(optionGroup) {
                return utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[this.level]);
            },
            isOptionGroup(option) {
                return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[this.level]);
            },
            getOptionLabelToRender(option) {
                return this.isOptionGroup(option) ? this.getOptionGroupLabel(option) : this.getOptionLabel(option);
            },
            getItemClass(option) {
                return [
                    'p-cascadeselect-item', {
                        'p-cascadeselect-item-group': this.isOptionGroup(option),
                        'p-cascadeselect-item-active p-highlight': this.isOptionActive(option)
                    }
                ]
            },
            isOptionActive(option) {
                return this.activeOption === option;
            },
            onKeyDown(event, option, index) {
                switch (event.key) {
                    case 'Down':
                    case 'ArrowDown':
                        var nextItem = this.$el.children[index + 1];
                        if (nextItem) {
                            nextItem.children[0].focus();
                        }
                    break;

                    case 'Up':
                    case 'ArrowUp':
                        var prevItem = this.$el.children[index - 1];
                        if (prevItem) {
                            prevItem.children[0].focus();
                        }
                    break;

                    case 'Right':
                    case 'ArrowRight':
                        if (this.isOptionGroup(option)) {
                            if (this.isOptionActive(option)) {
                                event.currentTarget.nextElementSibling.children[0].children[0].focus();
                            }
                            else {
                                this.activeOption = option;
                            }
                        }
                    break;

                    case 'Left':
                    case 'ArrowLeft':
                        this.activeOption = null;

                        var parentList = event.currentTarget.parentElement.parentElement.previousElementSibling;
                        if (parentList) {
                            parentList.focus();
                        }
                    break;

                    case 'Enter':
                        this.onOptionClick(event, option);
                    break;
                }

                event.preventDefault();
            },
            position() {
                const parentItem = this.$el.parentElement;
                const containerOffset = utils.DomHandler.getOffset(parentItem);
                const viewport = utils.DomHandler.getViewport();
                const sublistWidth = this.$el.offsetParent ? this.$el.offsetWidth : utils.DomHandler.getHiddenElementOuterWidth(this.$el);
                const itemOuterWidth = utils.DomHandler.getOuterWidth(parentItem.children[0]);

                if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - utils.DomHandler.calculateScrollbarWidth())) {
                    this.$el.style.left = '-100%';
                }
            }
        },
        directives: {
            'ripple': Ripple__default["default"]
        }
    };

    const _hoisted_1$1 = {
      class: "p-cascadeselect-panel p-cascadeselect-items",
      role: "listbox",
      "aria-orientation": "horizontal"
    };
    const _hoisted_2$1 = ["onClick", "onKeydown"];
    const _hoisted_3$1 = {
      key: 1,
      class: "p-cascadeselect-item-text"
    };
    const _hoisted_4$1 = {
      key: 2,
      class: "p-cascadeselect-group-icon pi pi-angle-right"
    };

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_CascadeSelectSub = vue.resolveComponent("CascadeSelectSub", true);
      const _directive_ripple = vue.resolveDirective("ripple");

      return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$1, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option, i) => {
          return (vue.openBlock(), vue.createElementBlock("li", {
            key: $options.getOptionLabelToRender(option),
            class: vue.normalizeClass($options.getItemClass(option)),
            role: "none"
          }, [
            vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              class: "p-cascadeselect-item-content",
              onClick: $event => ($options.onOptionClick($event, option)),
              tabindex: "0",
              onKeydown: $event => ($options.onKeyDown($event, option, i))
            }, [
              ($props.templates['option'])
                ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates['option']), {
                    key: 0,
                    option: option
                  }, null, 8, ["option"]))
                : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$1, vue.toDisplayString($options.getOptionLabelToRender(option)), 1)),
              ($options.isOptionGroup(option))
                ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$1))
                : vue.createCommentVNode("", true)
            ], 40, _hoisted_2$1)), [
              [_directive_ripple]
            ]),
            ($options.isOptionGroup(option) && $options.isOptionActive(option))
              ? (vue.openBlock(), vue.createBlock(_component_CascadeSelectSub, {
                  key: 0,
                  class: "p-cascadeselect-sublist",
                  selectionPath: $props.selectionPath,
                  options: $options.getOptionGroupChildren(option),
                  optionLabel: $props.optionLabel,
                  optionValue: $props.optionValue,
                  level: $props.level + 1,
                  onOptionSelect: $options.onOptionSelect,
                  onOptiongroupSelect: $options.onOptionGroupSelect,
                  optionGroupLabel: $props.optionGroupLabel,
                  optionGroupChildren: $props.optionGroupChildren,
                  parentActive: $options.isOptionActive(option),
                  dirty: $props.dirty,
                  templates: $props.templates
                }, null, 8, ["selectionPath", "options", "optionLabel", "optionValue", "level", "onOptionSelect", "onOptiongroupSelect", "optionGroupLabel", "optionGroupChildren", "parentActive", "dirty", "templates"]))
              : vue.createCommentVNode("", true)
          ], 2))
        }), 128))
      ]))
    }

    script$1.render = render$1;

    var script = {
        name: 'CascadeSelect',
        emits: ['update:modelValue','change','group-change', 'before-show','before-hide','hide','show'],
        data() {
            return {
                selectionPath: null,
                focused: false,
                overlayVisible: false,
                dirty: false
            };
        },
        props: {
            modelValue: null,
            options: Array,
            optionLabel: String,
            optionValue: String,
            optionGroupLabel: String,
            optionGroupChildren: Array,
            placeholder: String,
    		disabled: Boolean,
            dataKey: null,
            inputId: String,
            tabindex: String,
            ariaLabelledBy: null,
            appendTo: {
                type: String,
                default: 'body'
            },
            panelClass: null,
            loading: {
                type: Boolean,
                default: false
            },
            loadingIcon: {
                type: String,
                default: 'pi pi-spinner pi-spin'
            }
        },
        outsideClickListener: null,
        scrollHandler: null,
        resizeListener: null,
        overlay: null,
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
            this.updateSelectionPath();
        },
        watch: {
            modelValue() {
                this.updateSelectionPath();
            }
        },
        methods: {
            onOptionSelect(event) {
                this.$emit('update:modelValue', event.value);
                this.$emit('change', event);
                this.hide();
                this.$refs.focusInput.focus();
            },
            onOptionGroupSelect(event) {
                this.dirty = true;
                this.$emit('group-change', event);
            },
            getOptionLabel(option) {
                return this.optionLabel ? utils.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
            },
            getOptionValue(option) {
                return this.optionValue ? utils.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
            },
            getOptionGroupChildren(optionGroup, level) {
                return utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
            },
            isOptionGroup(option, level) {
                return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
            },
            updateSelectionPath() {
                let path;
                if (this.modelValue != null && this.options) {
                    for (let option of this.options) {
                        path = this.findModelOptionInGroup(option, 0);
                        if (path) {
                            break;
                        }
                    }
                }

                this.selectionPath = path;
            },
            findModelOptionInGroup(option, level) {
                if (this.isOptionGroup(option, level)) {
                    let selectedOption;
                    for (let childOption of this.getOptionGroupChildren(option, level)) {
                        selectedOption = this.findModelOptionInGroup(childOption, level + 1);
                        if (selectedOption) {
                            selectedOption.unshift(option);
                            return selectedOption;
                        }
                    }
                }
                else if ((utils.ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.dataKey))) {
                    return [option];
                }

                return null;
            },
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
                if (this.disabled || this.loading) {
                    return;
                }

                if (!this.overlay || !this.overlay.contains(event.target)) {
                    if (this.overlayVisible)
                        this.hide();
                    else
                        this.show();

                    this.$refs.focusInput.focus();
                }
            },
            onOverlayEnter(el) {
                utils.ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
                this.alignOverlay();
                this.bindOutsideClickListener();
                this.bindScrollListener();
                this.bindResizeListener();
                this.$emit('show');
            },
            onOverlayLeave() {
                this.unbindOutsideClickListener();
                this.unbindScrollListener();
                this.unbindResizeListener();
                this.$emit('hide');
                this.overlay = null;
                this.dirty = false;
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
                        if (this.overlayVisible && this.overlay && !this.$el.contains(event.target) && !this.overlay.contains(event.target)) {
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
            overlayRef(el) {
                this.overlay = el;
            },
            onKeyDown(event) {
                switch(event.key) {
                    case 'Down':
                    case 'ArrowDown':
                        if (this.overlayVisible) {
                            utils.DomHandler.findSingle(this.overlay, '.p-cascadeselect-item').children[0].focus();
                        }
                        else if (event.altKey && this.options && this.options.length) {
                            this.show();
                        }
                        event.preventDefault();
                    break;

                    case 'Escape':
                        if (this.overlayVisible) {
                            this.hide();
                            event.preventDefault();
                        }
                    break;

                    case 'Tab':
                        this.hide();
                    break;
                }
            },
            onOverlayClick(event) {
                OverlayEventBus__default["default"].emit('overlay-click', {
                    originalEvent: event,
                    target: this.$el
                });
            }
        },
        computed: {
            containerClass() {
                return [
                    'p-cascadeselect p-component p-inputwrapper',
                    {
                        'p-disabled': this.disabled,
                        'p-focus': this.focused,
                        'p-inputwrapper-filled': this.modelValue,
                        'p-inputwrapper-focus': this.focused || this.overlayVisible
                    }
                ];
            },
            labelClass() {
                return [
                    'p-cascadeselect-label',
                    {
                        'p-placeholder': this.label === this.placeholder,
                        'p-cascadeselect-label-empty': !this.$slots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
                    }
                ];
            },
            label() {
                if (this.selectionPath)
                    return this.getOptionLabel(this.selectionPath[this.selectionPath.length - 1]);
                else
                    return this.placeholder||'p-emptylabel';
            },
            panelStyleClass() {
                return ['p-cascadeselect-panel p-component', this.panelClass, {
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false
                }];
            },
            appendDisabled() {
                return this.appendTo === 'self';
            },
            appendTarget() {
                return this.appendDisabled ? null : this.appendTo;
            },
            dropdownIconClass() {
                return ['p-cascadeselect-trigger-icon', this.loading ? this.loadingIcon : 'pi pi-chevron-down'];
            }
        },
        components: {
            'CascadeSelectSub': script$1
        }
    };

    const _hoisted_1 = { class: "p-hidden-accessible" };
    const _hoisted_2 = ["id", "disabled", "tabindex", "aria-expanded", "aria-labelledby"];
    const _hoisted_3 = ["aria-expanded"];
    const _hoisted_4 = { class: "p-cascadeselect-items-wrapper" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_CascadeSelectSub = vue.resolveComponent("CascadeSelectSub");

      return (vue.openBlock(), vue.createElementBlock("div", {
        ref: "container",
        class: vue.normalizeClass($options.containerClass),
        onClick: _cache[4] || (_cache[4] = $event => ($options.onClick($event)))
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.createElementVNode("input", {
            ref: "focusInput",
            type: "text",
            id: $props.inputId,
            readonly: "",
            disabled: $props.disabled,
            onFocus: _cache[0] || (_cache[0] = (...args) => ($options.onFocus && $options.onFocus(...args))),
            onBlur: _cache[1] || (_cache[1] = (...args) => ($options.onBlur && $options.onBlur(...args))),
            onKeydown: _cache[2] || (_cache[2] = (...args) => ($options.onKeyDown && $options.onKeyDown(...args))),
            tabindex: $props.tabindex,
            "aria-haspopup": "listbox",
            "aria-expanded": $data.overlayVisible,
            "aria-labelledby": $props.ariaLabelledBy
          }, null, 40, _hoisted_2)
        ]),
        vue.createElementVNode("span", {
          class: vue.normalizeClass($options.labelClass)
        }, [
          vue.renderSlot(_ctx.$slots, "value", {
            value: $props.modelValue,
            placeholder: $props.placeholder
          }, () => [
            vue.createTextVNode(vue.toDisplayString($options.label), 1)
          ])
        ], 2),
        vue.createElementVNode("div", {
          class: "p-cascadeselect-trigger",
          role: "button",
          "aria-haspopup": "listbox",
          "aria-expanded": $data.overlayVisible
        }, [
          vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
            vue.createElementVNode("span", {
              class: vue.normalizeClass($options.dropdownIconClass)
            }, null, 2)
          ])
        ], 8, _hoisted_3),
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
                    class: vue.normalizeClass($options.panelStyleClass),
                    onClick: _cache[3] || (_cache[3] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
                  }, [
                    vue.createElementVNode("div", _hoisted_4, [
                      vue.createVNode(_component_CascadeSelectSub, {
                        options: $props.options,
                        selectionPath: $data.selectionPath,
                        optionLabel: $props.optionLabel,
                        optionValue: $props.optionValue,
                        level: 0,
                        templates: _ctx.$slots,
                        optionGroupLabel: $props.optionGroupLabel,
                        optionGroupChildren: $props.optionGroupChildren,
                        onOptionSelect: $options.onOptionSelect,
                        onOptiongroupSelect: $options.onOptionGroupSelect,
                        dirty: $data.dirty,
                        root: true
                      }, null, 8, ["options", "selectionPath", "optionLabel", "optionValue", "templates", "optionGroupLabel", "optionGroupChildren", "onOptionSelect", "onOptiongroupSelect", "dirty"])
                    ])
                  ], 2))
                : vue.createCommentVNode("", true)
            ]),
            _: 1
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

    var css_248z = "\n.p-cascadeselect {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.p-cascadeselect-trigger {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.p-cascadeselect-label {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    text-overflow: ellipsis;\n    cursor: pointer;\n}\n.p-cascadeselect-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\n.p-cascadeselect .p-cascadeselect-panel {\n    min-width: 100%;\n}\n.p-cascadeselect-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-cascadeselect-item {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n}\n.p-cascadeselect-item-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n.p-cascadeselect-group-icon {\n    margin-left: auto;\n}\n.p-cascadeselect-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    min-width: 100%;\n}\n.p-fluid .p-cascadeselect {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-fluid .p-cascadeselect .p-cascadeselect-label {\n    width: 1%;\n}\n.p-cascadeselect-sublist {\n    position: absolute;\n    min-width: 100%;\n    z-index: 1;\n    display: none;\n}\n.p-cascadeselect-item-active {\n    overflow: visible !important;\n}\n.p-cascadeselect-item-active > .p-cascadeselect-sublist {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, primevue.overlayeventbus, primevue.ripple, Vue);
