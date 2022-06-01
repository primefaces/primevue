this.primevue = this.primevue || {};
this.primevue.listbox = (function (utils, api, Ripple, VirtualScroller, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);
    var VirtualScroller__default = /*#__PURE__*/_interopDefaultLegacy(VirtualScroller);

    var script = {
        name: 'Listbox',
        emits: ['update:modelValue', 'change', 'filter'],
        props: {
            modelValue: null,
            options: Array,
            optionLabel: null,
            optionValue: null,
            optionDisabled: null,
            optionGroupLabel: null,
            optionGroupChildren: null,
    		listStyle: null,
            disabled: Boolean,
            dataKey: null,
            multiple: Boolean,
            metaKeySelection: Boolean,
            filter: Boolean,
            filterPlaceholder: String,
            filterLocale: String,
            filterMatchMode: {
                type: String,
                default: 'contains'
            },
            filterFields: {
                type: Array,
                default: null
            },
            emptyFilterMessage: {
                type: String,
                default: null
            },
            emptyMessage: {
                type: String,
                default: null
            },
            virtualScrollerOptions: {
                type: Object,
                default: null
            }
        },
        optionTouched: false,
        virtualScroller: null,
        data() {
            return {
                filterValue: null,
                filterClear: false
            };
        },
        methods: {
            getOptionIndex(index, fn) {
                return this.virtualScrollerDisabled ? index : (fn && fn(index)['index']);
            },
            getOptionLabel(option) {
                return this.optionLabel ? utils.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
            },
            getOptionValue(option) {
                return this.optionValue ? utils.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
            },
            getOptionRenderKey(option) {
                return this.dataKey ? utils.ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
            },
            isOptionDisabled(option) {
                return this.optionDisabled ? utils.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
            },
            getOptionGroupRenderKey(optionGroup) {
                return utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
            },
            getOptionGroupLabel(optionGroup) {
                return utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
            },
            getOptionGroupChildren(optionGroup) {
                return utils.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
            },
            onOptionSelect(event, option) {
                if (this.disabled || this.isOptionDisabled(option)) {
                    return;
                }

                if(this.multiple)
                    this.onOptionSelectMultiple(event, option);
                else
                    this.onOptionSelectSingle(event, option);

                this.optionTouched = false;
            },
            onOptionTouchEnd() {
                if (this.disabled) {
                    return;
                }

                this.optionTouched = true;
            },
            onOptionSelectSingle(event, option) {
                let selected = this.isSelected(option);
                let valueChanged = false;
                let value = null;
                let metaSelection = this.optionTouched ? false : this.metaKeySelection;

                if (metaSelection) {
                    let metaKey = (event.metaKey || event.ctrlKey);

                    if (selected) {
                        if (metaKey) {
                            value = null;
                            valueChanged = true;
                        }
                    }
                    else {
                        value = this.getOptionValue(option);
                        valueChanged = true;
                    }
                }
                else {
                    value = selected ? null : this.getOptionValue(option);
                    valueChanged = true;
                }

                if (valueChanged) {
                    this.updateModel(event, value);
                }
            },
            onOptionSelectMultiple(event, option) {
                let selected = this.isSelected(option);
                let valueChanged = false;
                let value = null;
                let metaSelection = this.optionTouched ? false : this.metaKeySelection;

                if (metaSelection) {
                    let metaKey = (event.metaKey || event.ctrlKey);

                    if (selected) {
                        if(metaKey)
                            value = this.removeOption(option);
                        else
                            value = [this.getOptionValue(option)];

                        valueChanged = true;
                    }
                    else {
                        value = (metaKey) ? this.modelValue || [] : [];
                        value = [...value, this.getOptionValue(option)];
                        valueChanged = true;
                    }
                }
                else {
                    if (selected)
                        value = this.removeOption(option);
                    else
                        value = [...this.modelValue || [], this.getOptionValue(option)];

                    valueChanged = true;
                }

                if(valueChanged) {
                    this.updateModel(event, value);
                }
            },
            isSelected(option) {
                let selected = false;
                let optionValue = this.getOptionValue(option);

                if (this.multiple) {
                    if (this.modelValue) {
                        for (let val of this.modelValue) {
                            if (utils.ObjectUtils.equals(val, optionValue, this.equalityKey)) {
                                selected = true;
                                break;
                            }
                        }
                    }
                }
                else {
                    selected = utils.ObjectUtils.equals(this.modelValue, optionValue, this.equalityKey);
                }

                return selected;
            },
            removeOption(option) {
                return this.modelValue.filter(val => !utils.ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey));
            },
            updateModel(event, value) {
                this.$emit('update:modelValue', value);
                this.$emit('change', {originalEvent: event, value: value});
            },
            onOptionKeyDown(event, option) {
                let item = event.currentTarget;

                switch (event.which) {
                    //down
                    case 40:
                        var nextItem = this.findNextItem(item);
                        if(nextItem) {
                            nextItem.focus();
                        }

                        event.preventDefault();
                    break;

                    //up
                    case 38:
                        var prevItem = this.findPrevItem(item);
                        if(prevItem) {
                            prevItem.focus();
                        }

                        event.preventDefault();
                    break;

                    //enter
                    case 13:
                        this.onOptionSelect(event, option);
                        event.preventDefault();
                    break;
                }
            },
            findNextItem(item) {
                let nextItem = item.nextElementSibling;

                if (nextItem)
                    return utils.DomHandler.hasClass(nextItem, 'p-disabled') || utils.DomHandler.hasClass(nextItem, 'p-listbox-item-group') ? this.findNextItem(nextItem) : nextItem;
                else
                    return null;
            },
            findPrevItem(item) {
                let prevItem = item.previousElementSibling;

                if (prevItem)
                    return utils.DomHandler.hasClass(prevItem, 'p-disabled') || utils.DomHandler.hasClass(prevItem, 'p-listbox-item-group') ? this.findPrevItem(prevItem) : prevItem;
                else
                    return null;
            },
            onFilterChange(event) {
                if( event.target.value.length > 0 )
                    this.filterClear = true;
                else
                    this.filterClear = false;
                this.$emit('filter', {originalEvent: event, value: event.target.value});
            },
            virtualScrollerRef(el) {
                this.virtualScroller = el;
            },
            clearFilter(event) {
                this.$emit('filter', {originalEvent: event, value: ''});
                this.filterValue = null;
                this.filterClear = false;
            }
        },
        computed: {
            visibleOptions() {
                if (this.filterValue) {
                    if (this.optionGroupLabel) {
                        let filteredGroups = [];
                        for (let optgroup of this.options) {
                            let filteredSubOptions = api.FilterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                            if (filteredSubOptions && filteredSubOptions.length) {
                                filteredGroups.push({...optgroup, ...{items: filteredSubOptions}});
                            }
                        }
                        return filteredGroups
                    }
                    else {
                        return api.FilterService.filter(this.options, this.searchFields, this.filterValue, 'contains', this.filterLocale);
                    }
                }
                else {
                    return this.options;
                }
            },
            equalityKey() {
                return this.optionValue ? null : this.dataKey;
            },
            searchFields() {
                return this.filterFields || [this.optionLabel];
            },
            emptyFilterMessageText() {
                return this.emptyFilterMessage || this.$primevue.config.locale.emptyFilterMessage;
            },
            emptyMessageText() {
                return this.emptyMessage || this.$primevue.config.locale.emptyMessage;
            },
            virtualScrollerDisabled() {
                return !this.virtualScrollerOptions;
            }
        },
        directives: {
            'ripple': Ripple__default["default"]
        },
        components: {
            'VirtualScroller': VirtualScroller__default["default"]
        }
    };

    const _hoisted_1 = { class: "p-listbox p-component" };
    const _hoisted_2 = {
      key: 0,
      class: "p-listbox-header"
    };
    const _hoisted_3 = { class: "p-listbox-filter-container" };
    const _hoisted_4 = ["placeholder"];
    const _hoisted_5 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-listbox-filter-icon pi pi-search" }, null, -1);
    const _hoisted_6 = ["tabindex", "onClick", "onKeydown", "aria-label", "aria-selected"];
    const _hoisted_7 = { class: "p-listbox-item-group" };
    const _hoisted_8 = ["tabindex", "onClick", "onKeydown", "aria-label", "aria-selected"];
    const _hoisted_9 = {
      key: 2,
      class: "p-listbox-empty-message"
    };
    const _hoisted_10 = {
      key: 3,
      class: "p-listbox-empty-message"
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_VirtualScroller = vue.resolveComponent("VirtualScroller");
      const _directive_ripple = vue.resolveDirective("ripple");

      return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "header", {
          value: $props.modelValue,
          options: $options.visibleOptions
        }),
        ($props.filter)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
              vue.createElementVNode("div", _hoisted_3, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  class: "p-listbox-filter p-inputtext p-component",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.filterValue) = $event)),
                  placeholder: $props.filterPlaceholder,
                  onInput: _cache[1] || (_cache[1] = (...args) => ($options.onFilterChange && $options.onFilterChange(...args)))
                }, null, 40, _hoisted_4), [
                  [vue.vModelText, $data.filterValue]
                ]),
                ($data.filterClear)
                  ? (vue.openBlock(), vue.createElementBlock("span", {
                      key: 0,
                      class: "p-listbox-filter-icon pi pi-times me-4",
                      onClick: _cache[2] || (_cache[2] = (...args) => ($options.clearFilter && $options.clearFilter(...args)))
                    }))
                  : vue.createCommentVNode("", true),
                _hoisted_5
              ])
            ]))
          : vue.createCommentVNode("", true),
        vue.createElementVNode("div", {
          class: "p-listbox-list-wrapper",
          style: vue.normalizeStyle($props.listStyle)
        }, [
          vue.createVNode(_component_VirtualScroller, vue.mergeProps({ ref: $options.virtualScrollerRef }, $props.virtualScrollerOptions, {
            style: $props.listStyle,
            items: $options.visibleOptions,
            disabled: $options.virtualScrollerDisabled
          }), vue.createSlots({
            content: vue.withCtx(({ styleClass, contentRef, items, getItemOptions, contentStyle }) => [
              vue.createElementVNode("ul", {
                ref: contentRef,
                class: vue.normalizeClass(['p-listbox-list', styleClass]),
                style: vue.normalizeStyle(contentStyle),
                role: "listbox",
                "aria-multiselectable": "multiple"
              }, [
                (!$props.optionGroupLabel)
                  ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(items, (option, i) => {
                      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("li", {
                        tabindex: $options.isOptionDisabled(option) ? null : '0',
                        class: vue.normalizeClass(['p-listbox-item', {'p-highlight': $options.isSelected(option), 'p-disabled': $options.isOptionDisabled(option)}]),
                        key: $options.getOptionRenderKey(option),
                        onClick: $event => ($options.onOptionSelect($event, option)),
                        onTouchend: _cache[3] || (_cache[3] = $event => ($options.onOptionTouchEnd())),
                        onKeydown: $event => ($options.onOptionKeyDown($event, option)),
                        role: "option",
                        "aria-label": $options.getOptionLabel(option),
                        "aria-selected": $options.isSelected(option)
                      }, [
                        vue.renderSlot(_ctx.$slots, "option", {
                          option: option,
                          index: $options.getOptionIndex(i, getItemOptions)
                        }, () => [
                          vue.createTextVNode(vue.toDisplayString($options.getOptionLabel(option)), 1)
                        ])
                      ], 42, _hoisted_6)), [
                        [_directive_ripple]
                      ])
                    }), 128))
                  : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(items, (optionGroup, i) => {
                      return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                        key: $options.getOptionGroupRenderKey(optionGroup)
                      }, [
                        vue.createElementVNode("li", _hoisted_7, [
                          vue.renderSlot(_ctx.$slots, "optiongroup", {
                            option: optionGroup,
                            index: $options.getOptionIndex(i, getItemOptions)
                          }, () => [
                            vue.createTextVNode(vue.toDisplayString($options.getOptionGroupLabel(optionGroup)), 1)
                          ])
                        ]),
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.getOptionGroupChildren(optionGroup), (option, i) => {
                          return vue.withDirectives((vue.openBlock(), vue.createElementBlock("li", {
                            tabindex: $options.isOptionDisabled(option) ? null : '0',
                            class: vue.normalizeClass(['p-listbox-item', {'p-highlight': $options.isSelected(option), 'p-disabled': $options.isOptionDisabled(option)}]),
                            key: $options.getOptionRenderKey(option),
                            onClick: $event => ($options.onOptionSelect($event, option)),
                            onTouchend: _cache[4] || (_cache[4] = $event => ($options.onOptionTouchEnd())),
                            onKeydown: $event => ($options.onOptionKeyDown($event, option)),
                            role: "option",
                            "aria-label": $options.getOptionLabel(option),
                            "aria-selected": $options.isSelected(option)
                          }, [
                            vue.renderSlot(_ctx.$slots, "option", {
                              option: option,
                              index: $options.getOptionIndex(i, getItemOptions)
                            }, () => [
                              vue.createTextVNode(vue.toDisplayString($options.getOptionLabel(option)), 1)
                            ])
                          ], 42, _hoisted_8)), [
                            [_directive_ripple]
                          ])
                        }), 128))
                      ], 64))
                    }), 128)),
                ($data.filterValue && (!items || (items && items.length === 0)))
                  ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_9, [
                      vue.renderSlot(_ctx.$slots, "emptyfilter", {}, () => [
                        vue.createTextVNode(vue.toDisplayString($options.emptyFilterMessageText), 1)
                      ])
                    ]))
                  : ((!$props.options || ($props.options && $props.options.length === 0)))
                    ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_10, [
                        vue.renderSlot(_ctx.$slots, "empty", {}, () => [
                          vue.createTextVNode(vue.toDisplayString($options.emptyMessageText), 1)
                        ])
                      ]))
                    : vue.createCommentVNode("", true)
              ], 6)
            ]),
            _: 2
          }, [
            (_ctx.$slots.loader)
              ? {
                  name: "loader",
                  fn: vue.withCtx(({ options }) => [
                    vue.renderSlot(_ctx.$slots, "loader", { options: options })
                  ])
                }
              : undefined
          ]), 1040, ["style", "items", "disabled"])
        ], 4),
        vue.renderSlot(_ctx.$slots, "footer", {
          value: $props.modelValue,
          options: $options.visibleOptions
        })
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

    var css_248z = "\n.p-listbox-list-wrapper {\n    overflow: auto;\n}\n.p-listbox-list {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n.p-listbox-item {\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.p-listbox-item-group {\n    cursor: auto;\n}\n.p-listbox-filter-container {\n    position: relative;\n}\n.p-listbox-filter-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n}\n.p-listbox-filter {\n    width: 100%;\n}\n.me-4{\n    margin-right: 1.5rem;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.utils, primevue.api, primevue.ripple, primevue.virtualscroller, Vue);
