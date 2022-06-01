'use strict';

var utils = require('primevue/utils');
var api = require('primevue/api');
var Paginator = require('primevue/paginator');
var VirtualScroller = require('primevue/virtualscroller');
var vue = require('vue');
var OverlayEventBus = require('primevue/overlayeventbus');
var Dropdown = require('primevue/dropdown');
var Button = require('primevue/button');
var Ripple = require('primevue/ripple');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Paginator__default = /*#__PURE__*/_interopDefaultLegacy(Paginator);
var VirtualScroller__default = /*#__PURE__*/_interopDefaultLegacy(VirtualScroller);
var OverlayEventBus__default = /*#__PURE__*/_interopDefaultLegacy(OverlayEventBus);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script$a = {
    name: 'HeaderCheckbox',
    inheritAttrs: false,
    emits: ['change'],
    props: {
        checked: null
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                this.focused = true;
                this.$emit('change', {
                    originalEvent: event,
                    checked: !this.checked
                });
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    }
};

const _hoisted_1$a = ["aria-checked", "tabindex"];

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(['p-checkbox p-component', {'p-checkbox-focused': $data.focused}]),
    onClick: _cache[2] || (_cache[2] = (...args) => ($options.onClick && $options.onClick(...args))),
    onKeydown: _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers((...args) => ($options.onClick && $options.onClick(...args)), ["prevent"]), ["space"]))
  }, [
    vue.createElementVNode("div", {
      ref: "box",
      class: vue.normalizeClass(['p-checkbox-box p-component', {'p-highlight': $props.checked, 'p-disabled': _ctx.$attrs.disabled, 'p-focus': $data.focused}]),
      role: "checkbox",
      "aria-checked": $props.checked,
      tabindex: _ctx.$attrs.disabled ? null : '0',
      onFocus: _cache[0] || (_cache[0] = $event => ($options.onFocus($event))),
      onBlur: _cache[1] || (_cache[1] = $event => ($options.onBlur($event)))
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass(['p-checkbox-icon', {'pi pi-check': $props.checked}])
      }, null, 2)
    ], 42, _hoisted_1$a)
  ], 34))
}

script$a.render = render$a;

var script$9 = {
    name: 'ColumnFilter',
    emits: ['filter-change','filter-apply','operator-change','matchmode-change','constraint-add','constraint-remove','filter-clear','apply-click'],
    props: {
        field: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'text'
        },
        display: {
            type: String,
            default: null
        },
        showMenu: {
            type: Boolean,
            default: true
        },
        matchMode: {
            type: String,
            default: null
        },
        showOperator: {
            type: Boolean,
            default: true
        },
        showClearButton: {
            type: Boolean,
            default: true
        },
        showApplyButton: {
            type: Boolean,
            default: true
        },
        showMatchModes: {
            type: Boolean,
            default: true
        },
        showAddButton: {
            type: Boolean,
            default: true
        },
        matchModeOptions: {
            type: Array,
            default: null
        },
        maxConstraints: {
            type: Number,
            default: 2
        },
        filterElement: null,
        filterHeaderTemplate: null,
        filterFooterTemplate: null,
        filterClearTemplate: null,
        filterApplyTemplate: null,
        filters: {
            type: Object,
            default: null
        },
        filtersStore: {
            type: Object,
            default: null
        },
        filterMenuClass: {
            type: String,
            default: null
        },
        filterMenuStyle: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            overlayVisible: false,
            defaultMatchMode: null,
            defaultOperator: null
        }
    },
    overlay: null,
    selfClick: false,
    overlayEventListener: null,
    beforeUnmount() {
        if (this.overlayEventListener) {
            OverlayEventBus__default["default"].off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        }

        if (this.overlay) {
            utils.ZIndexUtils.clear(this.overlay);
            this.onOverlayHide();
        }
    },
    mounted() {
        if (this.filters && this.filters[this.field]) {
            let fieldFilters = this.filters[this.field];
            if (fieldFilters.operator) {
                this.defaultMatchMode = fieldFilters.constraints[0].matchMode;
                this.defaultOperator = fieldFilters.operator;
            }
            else {
                this.defaultMatchMode = this.filters[this.field].matchMode;
            }
        }
    },
    methods: {
        clearFilter() {
            let _filters = {...this.filters};
            if (_filters[this.field].operator) {
                _filters[this.field].constraints.splice(1);
                _filters[this.field].operator = this.defaultOperator;
                _filters[this.field].constraints[0] = {value: null, matchMode: this.defaultMatchMode};
            }
            else {
                _filters[this.field].value = null;
                _filters[this.field].matchMode = this.defaultMatchMode;
            }

            this.$emit('filter-clear');
            this.$emit('filter-change', _filters);
            this.$emit('filter-apply');
            this.hide();
        },
        applyFilter() {
            this.$emit('apply-click', {field: this.field, constraints: this.filters[this.field]});
            this.$emit('filter-apply');
            this.hide();
        },
        hasFilter() {
            if (this.filtersStore) {
                let fieldFilter = this.filtersStore[this.field];
                if (fieldFilter) {
                    if (fieldFilter.operator)
                        return !this.isFilterBlank(fieldFilter.constraints[0].value);
                    else
                        return !this.isFilterBlank(fieldFilter.value);
                }
            }

            return false;
        },
        hasRowFilter() {
            return this.filters[this.field] && !this.isFilterBlank(this.filters[this.field].value);
        },
        isFilterBlank(filter) {
            if (filter !== null && filter !== undefined) {
                if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                    return true;
                else
                    return false;
            }
            return true;
        },
        toggleMenu() {
            this.overlayVisible = !this.overlayVisible;
        },
        onToggleButtonKeyDown(event) {
            switch(event.key) {
                case 'Escape':
                case 'Tab':
                    this.overlayVisible = false;
                break;

                case 'ArrowDown':
                    if (this.overlayVisible) {
                        let focusable = utils.DomHandler.getFocusableElements(this.overlay);
                        if (focusable) {
                            focusable[0].focus();
                        }
                        event.preventDefault();
                    }
                    else if (event.altKey) {
                        this.overlayVisible = true;
                        event.preventDefault();
                    }
                break;
            }
        },
        onEscape() {
            this.overlayVisible = false;
            if (this.$refs.icon) {
                this.$refs.icon.focus();
            }
        },
        onRowMatchModeChange(matchMode) {
            let _filters = {...this.filters};
            _filters[this.field].matchMode = matchMode;
            this.$emit('matchmode-change', {field: this.field, matchMode: matchMode});
            this.$emit('filter-change', _filters);
            this.$emit('filter-apply');
            this.hide();
        },
        onRowMatchModeKeyDown(event) {
            let item = event.target;

            switch(event.key) {
                case 'ArrowDown':
                    var nextItem = this.findNextItem(item);
                    if (nextItem) {
                        item.removeAttribute('tabindex');
                        nextItem.tabIndex = '0';
                        nextItem.focus();
                    }

                    event.preventDefault();
                break;

                case 'ArrowUp':
                    var prevItem = this.findPrevItem(item);
                    if (prevItem) {
                        item.removeAttribute('tabindex');
                        prevItem.tabIndex = '0';
                        prevItem.focus();
                    }

                    event.preventDefault();
                break;
            }
        },
        isRowMatchModeSelected(matchMode) {
            return (this.filters[this.field]).matchMode === matchMode;
        },
        onOperatorChange(value) {
            let _filters = {...this.filters};
            _filters[this.field].operator = value;
            this.$emit('filter-change', _filters);

            this.$emit('operator-change', {field: this.field, operator: value});
            if (!this.showApplyButton) {
                this.$emit('filter-apply');
            }
        },
        onMenuMatchModeChange(value, index) {
            let _filters = {...this.filters};
            _filters[this.field].constraints[index].matchMode = value;
            this.$emit('matchmode-change', {field: this.field, matchMode: value, index: index});

            if (!this.showApplyButton) {
                this.$emit('filter-apply');
            }
        },
        addConstraint() {
            let _filters = {...this.filters};
            let newConstraint = {value: null, matchMode: this.defaultMatchMode};
            _filters[this.field].constraints.push(newConstraint);
            this.$emit('constraint-add', {field: this.field, constraing: newConstraint});
            this.$emit('filter-change', _filters);

            if (!this.showApplyButton) {
                this.$emit('filter-apply');
            }
        },
        removeConstraint(index) {
            let _filters = {...this.filters};
            let removedConstraint = _filters[this.field].constraints.splice(index, 1);
            this.$emit('constraint-remove', {field: this.field, constraing: removedConstraint});
            this.$emit('filter-change', _filters);

            if (!this.showApplyButton) {
                this.$emit('filter-apply');
            }
        },
        filterCallback() {
            this.$emit('filter-apply');
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return utils.DomHandler.hasClass(nextItem, 'p-column-filter-separator')  ? this.findNextItem(nextItem) : nextItem;
            else
                return item.parentElement.firstElementChild;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                utils.DomHandler.hasClass(prevItem, 'p-column-filter-separator')  ? this.findPrevItem(prevItem) : prevItem;
            else
                return item.parentElement.lastElementChild;
        },
        hide() {
            this.overlayVisible = false;
        },
        onContentClick(event) {
            this.selfClick = true;

            OverlayEventBus__default["default"].emit('overlay-click', {
                originalEvent: event,
                target: this.overlay
            });
        },
        onContentMouseDown() {
            this.selfClick = true;
        },
        onOverlayEnter(el) {
            if (this.filterMenuStyle) {
                utils.DomHandler.applyStyle(this.overlay, this.filterMenuStyle);
            }
            utils.ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            utils.DomHandler.absolutePosition(this.overlay, this.$refs.icon);
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            this.overlayEventListener = (e) => {
                if (!this.isOutsideClicked(e.target)) {
                    this.selfClick = true;
                }
            };
            OverlayEventBus__default["default"].on('overlay-click', this.overlayEventListener);
        },
        onOverlayLeave() {
            this.onOverlayHide();
        },
        onOverlayAfterLeave(el) {
            utils.ZIndexUtils.clear(el);
        },
        onOverlayHide() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
            OverlayEventBus__default["default"].off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        },
        overlayRef(el) {
            this.overlay = el;
        },
        isOutsideClicked(target) {
            return !this.isTargetClicked(target) && this.overlay && !(this.overlay.isSameNode(target) || this.overlay.contains(target));
        },
        isTargetClicked(target) {
            return this.$refs.icon && (this.$refs.icon.isSameNode(target) || this.$refs.icon.contains(target));
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && !this.selfClick && this.isOutsideClicked(event.target)) {
                        this.overlayVisible = false;
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
                this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.$refs.icon, () => {
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
        }
    },
    computed: {
        containerClass() {
            return ['p-column-filter p-fluid', {
                'p-column-filter-row': this.display === 'row',
                'p-column-filter-menu': this.display === 'menu'
            }];
        },
        overlayClass() {
            return [this.filterMenuClass, {
                'p-column-filter-overlay p-component p-fluid': true,
                'p-column-filter-overlay-menu': this.display === 'menu',
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        showMenuButton() {
            return this.showMenu && (this.display === 'row' ? this.type !== 'boolean': true);
        },
        matchModes() {
            return this.matchModeOptions ||
                this.$primevue.config.filterMatchModeOptions[this.type].map(key => {
                    return {label: this.$primevue.config.locale[key], value: key}
                });
        },
        isShowMatchModes() {
            return this.type !== 'boolean' && this.showMatchModes && this.matchModes;
        },
        operatorOptions() {
            return [
                {label: this.$primevue.config.locale.matchAll, value: api.FilterOperator.AND},
                {label: this.$primevue.config.locale.matchAny, value: api.FilterOperator.OR}
            ];
        },
        noFilterLabel() {
            return this.$primevue.config.locale.noFilter;
        },
        isShowOperator() {
            return this.showOperator && this.filters[this.field].operator;
        },
        operator() {
            return this.filters[this.field].operator;
        },
        fieldConstraints() {
            return this.filters[this.field].constraints || [this.filters[this.field]];
        },
        showRemoveIcon() {
            return this.fieldConstraints.length > 1;
        },
        removeRuleButtonLabel() {
            return this.$primevue.config.locale.removeRule;
        },
        addRuleButtonLabel() {
            return this.$primevue.config.locale.addRule;
        },
        isShowAddConstraint() {
            return this.showAddButton && this.filters[this.field].operator && (this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints);
        },
        clearButtonLabel() {
            return this.$primevue.config.locale.clear;
        },
        applyButtonLabel() {
            return this.$primevue.config.locale.apply;
        }
    },
    components: {
        'CFDropdown': Dropdown__default["default"],
        'CFButton': Button__default["default"]
    }
};

const _hoisted_1$9 = {
  key: 0,
  class: "p-fluid p-column-filter-element"
};
const _hoisted_2$7 = ["aria-expanded"];
const _hoisted_3$6 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-filter-icon pi-filter" }, null, -1);
const _hoisted_4$4 = [
  _hoisted_3$6
];
const _hoisted_5$3 = /*#__PURE__*/vue.createElementVNode("span", { class: "pi pi-filter-slash" }, null, -1);
const _hoisted_6$3 = [
  _hoisted_5$3
];
const _hoisted_7$1 = {
  key: 0,
  class: "p-column-filter-row-items"
};
const _hoisted_8 = ["onClick", "onKeydown", "tabindex"];
const _hoisted_9 = /*#__PURE__*/vue.createElementVNode("li", { class: "p-column-filter-separator" }, null, -1);
const _hoisted_10 = {
  key: 0,
  class: "p-column-filter-operator"
};
const _hoisted_11 = { class: "p-column-filter-constraints" };
const _hoisted_12 = {
  key: 1,
  class: "p-column-filter-add-rule"
};
const _hoisted_13 = { class: "p-column-filter-buttonbar" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CFDropdown = vue.resolveComponent("CFDropdown");
  const _component_CFButton = vue.resolveComponent("CFButton");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.containerClass)
  }, [
    ($props.display === 'row')
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.filterElement), {
            field: $props.field,
            filterModel: $props.filters[$props.field],
            filterCallback: $options.filterCallback
          }, null, 8, ["field", "filterModel", "filterCallback"]))
        ]))
      : vue.createCommentVNode("", true),
    ($options.showMenuButton)
      ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          ref: "icon",
          type: "button",
          class: vue.normalizeClass(["p-column-filter-menu-button p-link", {'p-column-filter-menu-button-open': $data.overlayVisible, 'p-column-filter-menu-button-active': $options.hasFilter()}]),
          "aria-haspopup": "true",
          "aria-expanded": $data.overlayVisible,
          onClick: _cache[0] || (_cache[0] = $event => ($options.toggleMenu())),
          onKeydown: _cache[1] || (_cache[1] = $event => ($options.onToggleButtonKeyDown($event)))
        }, _hoisted_4$4, 42, _hoisted_2$7))
      : vue.createCommentVNode("", true),
    ($props.showClearButton && $props.display === 'row')
      ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 2,
          class: vue.normalizeClass([{'p-hidden-space': !$options.hasRowFilter()}, "p-column-filter-clear-button p-link"]),
          type: "button",
          onClick: _cache[2] || (_cache[2] = $event => ($options.clearFilter()))
        }, _hoisted_6$3, 2))
      : vue.createCommentVNode("", true),
    (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
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
                class: vue.normalizeClass($options.overlayClass),
                onKeydown: _cache[11] || (_cache[11] = vue.withKeys((...args) => ($options.onEscape && $options.onEscape(...args)), ["escape"])),
                onClick: _cache[12] || (_cache[12] = (...args) => ($options.onContentClick && $options.onContentClick(...args))),
                onMousedown: _cache[13] || (_cache[13] = (...args) => ($options.onContentMouseDown && $options.onContentMouseDown(...args)))
              }, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.filterHeaderTemplate), {
                  field: $props.field,
                  filterModel: $props.filters[$props.field],
                  filterCallback: $options.filterCallback
                }, null, 8, ["field", "filterModel", "filterCallback"])),
                ($props.display === 'row')
                  ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_7$1, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.matchModes, (matchMode, i) => {
                        return (vue.openBlock(), vue.createElementBlock("li", {
                          class: vue.normalizeClass(["p-column-filter-row-item", {'p-highlight': $options.isRowMatchModeSelected(matchMode.value)}]),
                          key: matchMode.label,
                          onClick: $event => ($options.onRowMatchModeChange(matchMode.value)),
                          onKeydown: [
                            _cache[3] || (_cache[3] = $event => ($options.onRowMatchModeKeyDown($event))),
                            vue.withKeys(vue.withModifiers($event => ($options.onRowMatchModeChange(matchMode.value)), ["prevent"]), ["enter"])
                          ],
                          tabindex: i === 0 ? '0' : null
                        }, vue.toDisplayString(matchMode.label), 43, _hoisted_8))
                      }), 128)),
                      _hoisted_9,
                      vue.createElementVNode("li", {
                        class: "p-column-filter-row-item",
                        onClick: _cache[4] || (_cache[4] = $event => ($options.clearFilter())),
                        onKeydown: [
                          _cache[5] || (_cache[5] = $event => ($options.onRowMatchModeKeyDown($event))),
                          _cache[6] || (_cache[6] = vue.withKeys($event => (_ctx.onRowClearItemClick()), ["enter"]))
                        ]
                      }, vue.toDisplayString($options.noFilterLabel), 33)
                    ]))
                  : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                      ($options.isShowOperator)
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
                            vue.createVNode(_component_CFDropdown, {
                              options: $options.operatorOptions,
                              modelValue: $options.operator,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ($options.onOperatorChange($event))),
                              class: "p-column-filter-operator-dropdown",
                              optionLabel: "label",
                              optionValue: "value"
                            }, null, 8, ["options", "modelValue"])
                          ]))
                        : vue.createCommentVNode("", true),
                      vue.createElementVNode("div", _hoisted_11, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.fieldConstraints, (fieldConstraint, i) => {
                          return (vue.openBlock(), vue.createElementBlock("div", {
                            key: i,
                            class: "p-column-filter-constraint"
                          }, [
                            ($options.isShowMatchModes)
                              ? (vue.openBlock(), vue.createBlock(_component_CFDropdown, {
                                  key: 0,
                                  options: $options.matchModes,
                                  modelValue: fieldConstraint.matchMode,
                                  optionLabel: "label",
                                  optionValue: "value",
                                  "onUpdate:modelValue": $event => ($options.onMenuMatchModeChange($event, i)),
                                  class: "p-column-filter-matchmode-dropdown"
                                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"]))
                              : vue.createCommentVNode("", true),
                            ($props.display === 'menu')
                              ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.filterElement), {
                                  key: 1,
                                  field: $props.field,
                                  filterModel: fieldConstraint,
                                  filterCallback: $options.filterCallback
                                }, null, 8, ["field", "filterModel", "filterCallback"]))
                              : vue.createCommentVNode("", true),
                            vue.createElementVNode("div", null, [
                              ($options.showRemoveIcon)
                                ? (vue.openBlock(), vue.createBlock(_component_CFButton, {
                                    key: 0,
                                    type: "button",
                                    icon: "pi pi-trash",
                                    class: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
                                    onClick: $event => ($options.removeConstraint(i)),
                                    label: $options.removeRuleButtonLabel
                                  }, null, 8, ["onClick", "label"]))
                                : vue.createCommentVNode("", true)
                            ])
                          ]))
                        }), 128))
                      ]),
                      ($options.isShowAddConstraint)
                        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12, [
                            vue.createVNode(_component_CFButton, {
                              type: "button",
                              label: $options.addRuleButtonLabel,
                              icon: "pi pi-plus",
                              class: "p-column-filter-add-button p-button-text p-button-sm",
                              onClick: _cache[8] || (_cache[8] = $event => ($options.addConstraint()))
                            }, null, 8, ["label"])
                          ]))
                        : vue.createCommentVNode("", true),
                      vue.createElementVNode("div", _hoisted_13, [
                        (!$props.filterClearTemplate && $props.showClearButton)
                          ? (vue.openBlock(), vue.createBlock(_component_CFButton, {
                              key: 0,
                              type: "button",
                              class: "p-button-outlined p-button-sm",
                              onClick: _cache[9] || (_cache[9] = $event => ($options.clearFilter())),
                              label: $options.clearButtonLabel
                            }, null, 8, ["label"]))
                          : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.filterClearTemplate), {
                              key: 1,
                              field: $props.field,
                              filterModel: $props.filters[$props.field],
                              filterCallback: $options.clearFilter
                            }, null, 8, ["field", "filterModel", "filterCallback"])),
                        ($props.showApplyButton)
                          ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
                              (!$props.filterApplyTemplate)
                                ? (vue.openBlock(), vue.createBlock(_component_CFButton, {
                                    key: 0,
                                    type: "button",
                                    class: "p-button-sm",
                                    onClick: _cache[10] || (_cache[10] = $event => ($options.applyFilter())),
                                    label: $options.applyButtonLabel
                                  }, null, 8, ["label"]))
                                : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.filterApplyTemplate), {
                                    key: 1,
                                    field: $props.field,
                                    filterModel: $props.filters[$props.field],
                                    filterCallback: $options.applyFilter
                                  }, null, 8, ["field", "filterModel", "filterCallback"]))
                            ], 64))
                          : vue.createCommentVNode("", true)
                      ])
                    ], 64)),
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.filterFooterTemplate), {
                  field: $props.field,
                  filterModel: $props.filters[$props.field],
                  filterCallback: $options.filterCallback
                }, null, 8, ["field", "filterModel", "filterCallback"]))
              ], 34))
            : vue.createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])
    ]))
  ], 2))
}

script$9.render = render$9;

var script$8 = {
    name: 'HeaderCell',
    emits: ['column-click', 'column-mousedown', 'column-dragstart', 'column-dragover', 'column-dragleave', 'column-drop',
            'column-resizestart', 'checkbox-change', 'filter-change', 'filter-apply',
            'operator-change', 'matchmode-change', 'constraint-add', 'constraint-remove', 'filter-clear', 'apply-click'],
    props: {
        column: {
            type: Object,
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        groupRowsBy: {
            type: [Array,String],
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        groupRowSortField: {
            type: [String, Function],
            default: null
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        allRowsSelected: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        filterDisplay: {
            type: String,
            default: null
        },
        filters: {
            type: Object,
            default: null
        },
        filtersStore: {
            type: Object,
            default: null
        },
        filterColumn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            styleObject: {}
        }
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    methods: {
        columnProp(prop) {
            return utils.ObjectUtils.getVNodeProp(this.column, prop);
        },
        onClick(event) {
            this.$emit('column-click', {originalEvent: event, column: this.column});
        },
        onKeyDown(event) {
            if (event.which === 13 && event.currentTarget.nodeName === 'TH' && utils.DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
                this.$emit('column-click', {originalEvent: event, column: this.column});
            }
        },
        onMouseDown(event) {
            this.$emit('column-mousedown', {originalEvent: event, column: this.column});
        },
        onDragStart(event) {
            this.$emit('column-dragstart', event);
        },
        onDragOver(event) {
            this.$emit('column-dragover', event);
        },
        onDragLeave(event) {
            this.$emit('column-dragleave', event);
        },
        onDrop(event) {
            this.$emit('column-drop', event);
        },
        onResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        getMultiSortMetaIndex() {
            return this.multiSortMeta.findIndex(meta => (meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField')));
        },
        getBadgeValue() {
            let index = this.getMultiSortMetaIndex();

            return (this.groupRowsBy && this.groupRowsBy === this.groupRowSortField) && index > -1 ? index : index + 1;
        },
        isMultiSorted() {
            return this.sortMode === 'multiple' && this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? (this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'))) : this.isMultiSorted();
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');
                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;
                    if (next) {
                        right = utils.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }
                    this.styleObject.right = right + 'px';
                }
                else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;
                    if (prev) {
                        left = utils.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }
                    this.styleObject.left = left + 'px';
                }

                let filterRow = this.$el.parentElement.nextElementSibling;
                if (filterRow) {
                    let index = utils.DomHandler.index(this.$el);
                    filterRow.children[index].style.left = this.styleObject.left;
                    filterRow.children[index].style.right = this.styleObject.right;
                }
            }
        },
        onHeaderCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        }
    },
    computed: {
        containerClass() {
            return [this.filterColumn ? this.columnProp('filterHeaderClass') : this.columnProp('headerClass'), this.columnProp('class'), {
                    'p-sortable-column': this.columnProp('sortable'),
                    'p-resizable-column': this.resizableColumns,
                    'p-highlight': this.isColumnSorted(),
                    'p-filter-column': this.filterColumn,
                    'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let headerStyle = this.filterColumn ? this.columnProp('filterHeaderStyle'): this.columnProp('headerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, headerStyle, this.styleObject]: [columnStyle, headerStyle];
        },
        sortableColumnIcon() {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
                sortOrder = sorted ? this.sortOrder: 0;
            }
            else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex();
                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            return [
                'p-sortable-column-icon pi pi-fw', {
                    'pi-sort-alt': !sorted,
                    'pi-sort-amount-up-alt': sorted && sortOrder > 0,
                    'pi-sort-amount-down': sorted && sortOrder < 0
                }
            ];
        },
        ariaSort() {
            if (this.columnProp('sortable')) {
                const sortIcon = this.sortableColumnIcon;
                if (sortIcon[1]['pi-sort-amount-down'])
                    return 'descending';
                else if (sortIcon[1]['pi-sort-amount-up-alt'])
                    return 'ascending';
                else
                    return 'none';
            }
            else {
                return null;
            }
        }
    },
    components: {
        'DTHeaderCheckbox': script$a,
        'DTColumnFilter': script$9
    }
};

const _hoisted_1$8 = ["tabindex", "colspan", "rowspan", "aria-sort"];
const _hoisted_2$6 = { class: "p-column-header-content" };
const _hoisted_3$5 = {
  key: 1,
  class: "p-column-title"
};
const _hoisted_4$3 = {
  key: 3,
  class: "p-sortable-column-badge"
};

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTHeaderCheckbox = vue.resolveComponent("DTHeaderCheckbox");
  const _component_DTColumnFilter = vue.resolveComponent("DTColumnFilter");

  return (vue.openBlock(), vue.createElementBlock("th", {
    style: vue.normalizeStyle($options.containerStyle),
    class: vue.normalizeClass($options.containerClass),
    tabindex: $options.columnProp('sortable') ? '0' : null,
    role: "cell",
    onClick: _cache[8] || (_cache[8] = (...args) => ($options.onClick && $options.onClick(...args))),
    onKeydown: _cache[9] || (_cache[9] = (...args) => ($options.onKeyDown && $options.onKeyDown(...args))),
    onMousedown: _cache[10] || (_cache[10] = (...args) => ($options.onMouseDown && $options.onMouseDown(...args))),
    onDragstart: _cache[11] || (_cache[11] = (...args) => ($options.onDragStart && $options.onDragStart(...args))),
    onDragover: _cache[12] || (_cache[12] = (...args) => ($options.onDragOver && $options.onDragOver(...args))),
    onDragleave: _cache[13] || (_cache[13] = (...args) => ($options.onDragLeave && $options.onDragLeave(...args))),
    onDrop: _cache[14] || (_cache[14] = (...args) => ($options.onDrop && $options.onDrop(...args))),
    colspan: $options.columnProp('colspan'),
    rowspan: $options.columnProp('rowspan'),
    "aria-sort": $options.ariaSort
  }, [
    ($props.resizableColumns && !$options.columnProp('frozen'))
      ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "p-column-resizer",
          onMousedown: _cache[0] || (_cache[0] = (...args) => ($options.onResizeStart && $options.onResizeStart(...args)))
        }, null, 32))
      : vue.createCommentVNode("", true),
    vue.createElementVNode("div", _hoisted_2$6, [
      ($props.column.children && $props.column.children.header)
        ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.column.children.header), {
            key: 0,
            column: $props.column
          }, null, 8, ["column"]))
        : vue.createCommentVNode("", true),
      ($options.columnProp('header'))
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$5, vue.toDisplayString($options.columnProp('header')), 1))
        : vue.createCommentVNode("", true),
      ($options.columnProp('sortable'))
        ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 2,
            class: vue.normalizeClass($options.sortableColumnIcon)
          }, null, 2))
        : vue.createCommentVNode("", true),
      ($options.isMultiSorted())
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$3, vue.toDisplayString($options.getBadgeValue()), 1))
        : vue.createCommentVNode("", true),
      ($options.columnProp('selectionMode') ==='multiple' && $props.filterDisplay !== 'row')
        ? (vue.openBlock(), vue.createBlock(_component_DTHeaderCheckbox, {
            key: 4,
            checked: $props.allRowsSelected,
            onChange: $options.onHeaderCheckboxChange,
            disabled: $props.empty
          }, null, 8, ["checked", "onChange", "disabled"]))
        : vue.createCommentVNode("", true),
      ($props.filterDisplay === 'menu' && $props.column.children && $props.column.children.filter)
        ? (vue.openBlock(), vue.createBlock(_component_DTColumnFilter, {
            key: 5,
            field: $options.columnProp('filterField')||$options.columnProp('field'),
            type: $options.columnProp('dataType'),
            display: "menu",
            showMenu: $options.columnProp('showFilterMenu'),
            filterElement: $props.column.children && $props.column.children.filter,
            filterHeaderTemplate: $props.column.children && $props.column.children.filterheader,
            filterFooterTemplate: $props.column.children && $props.column.children.filterfooter,
            filterClearTemplate: $props.column.children && $props.column.children.filterclear,
            filterApplyTemplate: $props.column.children && $props.column.children.filterapply,
            filters: $props.filters,
            filtersStore: $props.filtersStore,
            onFilterChange: _cache[1] || (_cache[1] = $event => (_ctx.$emit('filter-change', $event))),
            onFilterApply: _cache[2] || (_cache[2] = $event => (_ctx.$emit('filter-apply'))),
            filterMenuStyle: $options.columnProp('filterMenuStyle'),
            filterMenuClass: $options.columnProp('filterMenuClass'),
            showOperator: $options.columnProp('showFilterOperator'),
            showClearButton: $options.columnProp('showClearButton'),
            showApplyButton: $options.columnProp('showApplyButton'),
            showMatchModes: $options.columnProp('showFilterMatchModes'),
            showAddButton: $options.columnProp('showAddButton'),
            matchModeOptions: $options.columnProp('filterMatchModeOptions'),
            maxConstraints: $options.columnProp('maxConstraints'),
            onOperatorChange: _cache[3] || (_cache[3] = $event => (_ctx.$emit('operator-change',$event))),
            onMatchmodeChange: _cache[4] || (_cache[4] = $event => (_ctx.$emit('matchmode-change', $event))),
            onConstraintAdd: _cache[5] || (_cache[5] = $event => (_ctx.$emit('constraint-add', $event))),
            onConstraintRemove: _cache[6] || (_cache[6] = $event => (_ctx.$emit('constraint-remove', $event))),
            onApplyClick: _cache[7] || (_cache[7] = $event => (_ctx.$emit('apply-click',$event)))
          }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filters", "filtersStore", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints"]))
        : vue.createCommentVNode("", true)
    ])
  ], 46, _hoisted_1$8))
}

script$8.render = render$8;

var script$7 = {
    name: 'TableHeader',
    emits: ['column-click', 'column-mousedown', 'column-dragstart', 'column-dragover', 'column-dragleave', 'column-drop',
            'column-resizestart', 'checkbox-change', 'filter-change', 'filter-apply',
            'operator-change', 'matchmode-change', 'constraint-add', 'constraint-remove', 'filter-clear', 'apply-click'],
    props: {
		columnGroup: {
            type: null,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array,String],
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        allRowsSelected: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        groupRowSortField: {
            type: [String, Function],
            default: null
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        filterDisplay: {
            type: String,
            default: null
        },
        filters: {
            type: Object,
            default: null
        },
        filtersStore: {
            type: Object,
            default: null
        }
    },
    methods: {
        columnProp(col, prop) {
            return utils.ObjectUtils.getVNodeProp(col, prop);
        },
        getFilterColumnHeaderClass(column) {
            return ['p-filter-column', this.columnProp(column, 'filterHeaderClass'), this.columnProp(column, 'class'), {
                'p-frozen-column': this.columnProp(column, 'frozen')
            }];
        },
        getFilterColumnHeaderStyle(column) {
            return [this.columnProp(column, 'filterHeaderStyle'), this.columnProp(column, 'style')];
        },
        getHeaderRows() {
            let rows = [];

            let columnGroup = this.columnGroup;
            if (columnGroup.children && columnGroup.children.default) {
                for (let child of columnGroup.children.default()) {
                    if (child.type.name === 'Row') {
                        rows.push(child);
                    }
                    else if (child.children && child.children instanceof Array) {
                        rows = child.children;
                    }
                }

                return rows;
            }
        },
        getHeaderColumns(row){
            let cols = [];

            if (row.children && row.children.default) {
                row.children.default().forEach(child => {
                    if (child.children && child.children instanceof Array)
                        cols = [...cols, ...child.children];
                    else if (child.type.name === 'Column')
                        cols.push(child);
                });

                return cols;
            }
        }
    },
    components: {
        'DTHeaderCell': script$8,
        'DTHeaderCheckbox': script$a,
        'DTColumnFilter': script$9
    }
};

const _hoisted_1$7 = {
  class: "p-datatable-thead",
  role: "rowgroup"
};
const _hoisted_2$5 = { role: "row" };
const _hoisted_3$4 = {
  key: 0,
  role: "row"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTHeaderCell = vue.resolveComponent("DTHeaderCell");
  const _component_DTHeaderCheckbox = vue.resolveComponent("DTHeaderCheckbox");
  const _component_DTColumnFilter = vue.resolveComponent("DTColumnFilter");

  return (vue.openBlock(), vue.createElementBlock("thead", _hoisted_1$7, [
    (!$props.columnGroup)
      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("tr", _hoisted_2$5, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (col, i) => {
              return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                key: $options.columnProp(col, 'columnKey')||$options.columnProp(col, 'field')||i
              }, [
                (!$options.columnProp(col, 'hidden') && ($props.rowGroupMode !== 'subheader' || ($props.groupRowsBy !== $options.columnProp(col, 'field'))))
                  ? (vue.openBlock(), vue.createBlock(_component_DTHeaderCell, {
                      key: 0,
                      column: col,
                      onColumnClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('column-click', $event))),
                      onColumnMousedown: _cache[1] || (_cache[1] = $event => (_ctx.$emit('column-mousedown', $event))),
                      onColumnDragstart: _cache[2] || (_cache[2] = $event => (_ctx.$emit('column-dragstart', $event))),
                      onColumnDragover: _cache[3] || (_cache[3] = $event => (_ctx.$emit('column-dragover', $event))),
                      onColumnDragleave: _cache[4] || (_cache[4] = $event => (_ctx.$emit('column-dragleave', $event))),
                      onColumnDrop: _cache[5] || (_cache[5] = $event => (_ctx.$emit('column-drop', $event))),
                      groupRowsBy: $props.groupRowsBy,
                      groupRowSortField: $props.groupRowSortField,
                      resizableColumns: $props.resizableColumns,
                      onColumnResizestart: _cache[6] || (_cache[6] = $event => (_ctx.$emit('column-resizestart', $event))),
                      sortMode: $props.sortMode,
                      sortField: $props.sortField,
                      sortOrder: $props.sortOrder,
                      multiSortMeta: $props.multiSortMeta,
                      allRowsSelected: $props.allRowsSelected,
                      empty: $props.empty,
                      onCheckboxChange: _cache[7] || (_cache[7] = $event => (_ctx.$emit('checkbox-change', $event))),
                      filters: $props.filters,
                      filterDisplay: $props.filterDisplay,
                      filtersStore: $props.filtersStore,
                      onFilterChange: _cache[8] || (_cache[8] = $event => (_ctx.$emit('filter-change', $event))),
                      onFilterApply: _cache[9] || (_cache[9] = $event => (_ctx.$emit('filter-apply'))),
                      onOperatorChange: _cache[10] || (_cache[10] = $event => (_ctx.$emit('operator-change',$event))),
                      onMatchmodeChange: _cache[11] || (_cache[11] = $event => (_ctx.$emit('matchmode-change', $event))),
                      onConstraintAdd: _cache[12] || (_cache[12] = $event => (_ctx.$emit('constraint-add', $event))),
                      onConstraintRemove: _cache[13] || (_cache[13] = $event => (_ctx.$emit('constraint-remove', $event))),
                      onApplyClick: _cache[14] || (_cache[14] = $event => (_ctx.$emit('apply-click',$event)))
                    }, null, 8, ["column", "groupRowsBy", "groupRowSortField", "resizableColumns", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore"]))
                  : vue.createCommentVNode("", true)
              ], 64))
            }), 128))
          ]),
          ($props.filterDisplay === 'row')
            ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_3$4, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (col, i) => {
                  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                    key: $options.columnProp(col, 'columnKey')||$options.columnProp(col, 'field')||i
                  }, [
                    (!$options.columnProp(col, 'hidden') && ($props.rowGroupMode !== 'subheader' || ($props.groupRowsBy !== $options.columnProp(col, 'field'))))
                      ? (vue.openBlock(), vue.createElementBlock("th", {
                          key: 0,
                          style: vue.normalizeStyle($options.getFilterColumnHeaderStyle(col)),
                          class: vue.normalizeClass($options.getFilterColumnHeaderClass(col))
                        }, [
                          ($options.columnProp(col, 'selectionMode') ==='multiple')
                            ? (vue.openBlock(), vue.createBlock(_component_DTHeaderCheckbox, {
                                key: 0,
                                checked: $props.allRowsSelected,
                                onChange: _cache[15] || (_cache[15] = $event => (_ctx.$emit('checkbox-change', $event))),
                                disabled: $props.empty
                              }, null, 8, ["checked", "disabled"]))
                            : vue.createCommentVNode("", true),
                          (col.children && col.children.filter)
                            ? (vue.openBlock(), vue.createBlock(_component_DTColumnFilter, {
                                key: 1,
                                field: $options.columnProp(col,'filterField')||$options.columnProp(col,'field'),
                                type: $options.columnProp(col,'dataType'),
                                display: "row",
                                showMenu: $options.columnProp(col,'showFilterMenu'),
                                filterElement: col.children && col.children.filter,
                                filterHeaderTemplate: col.children && col.children.filterheader,
                                filterFooterTemplate: col.children && col.children.filterfooter,
                                filterClearTemplate: col.children && col.children.filterclear,
                                filterApplyTemplate: col.children && col.children.filterapply,
                                filters: $props.filters,
                                filtersStore: $props.filtersStore,
                                onFilterChange: _cache[16] || (_cache[16] = $event => (_ctx.$emit('filter-change', $event))),
                                onFilterApply: _cache[17] || (_cache[17] = $event => (_ctx.$emit('filter-apply'))),
                                filterMenuStyle: $options.columnProp(col,'filterMenuStyle'),
                                filterMenuClass: $options.columnProp(col,'filterMenuClass'),
                                showOperator: $options.columnProp(col,'showFilterOperator'),
                                showClearButton: $options.columnProp(col,'showClearButton'),
                                showApplyButton: $options.columnProp(col,'showApplyButton'),
                                showMatchModes: $options.columnProp(col,'showFilterMatchModes'),
                                showAddButton: $options.columnProp(col,'showAddButton'),
                                matchModeOptions: $options.columnProp(col,'filterMatchModeOptions'),
                                maxConstraints: $options.columnProp(col,'maxConstraints'),
                                onOperatorChange: _cache[18] || (_cache[18] = $event => (_ctx.$emit('operator-change',$event))),
                                onMatchmodeChange: _cache[19] || (_cache[19] = $event => (_ctx.$emit('matchmode-change', $event))),
                                onConstraintAdd: _cache[20] || (_cache[20] = $event => (_ctx.$emit('constraint-add', $event))),
                                onConstraintRemove: _cache[21] || (_cache[21] = $event => (_ctx.$emit('constraint-remove', $event))),
                                onApplyClick: _cache[22] || (_cache[22] = $event => (_ctx.$emit('apply-click',$event)))
                              }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filters", "filtersStore", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints"]))
                            : vue.createCommentVNode("", true)
                        ], 6))
                      : vue.createCommentVNode("", true)
                  ], 64))
                }), 128))
              ]))
            : vue.createCommentVNode("", true)
        ], 64))
      : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($options.getHeaderRows(), (row, i) => {
          return (vue.openBlock(), vue.createElementBlock("tr", {
            key: i,
            role: "row"
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.getHeaderColumns(row), (col, j) => {
              return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                key: $options.columnProp(col, 'columnKey')||$options.columnProp(col, 'field')||j
              }, [
                (!$options.columnProp(col, 'hidden') && ($props.rowGroupMode !== 'subheader' || ($props.groupRowsBy !== $options.columnProp(col, 'field'))) && (typeof col.children !== 'string'))
                  ? (vue.openBlock(), vue.createBlock(_component_DTHeaderCell, {
                      key: 0,
                      column: col,
                      onColumnClick: _cache[23] || (_cache[23] = $event => (_ctx.$emit('column-click', $event))),
                      onColumnMousedown: _cache[24] || (_cache[24] = $event => (_ctx.$emit('column-mousedown', $event))),
                      groupRowsBy: $props.groupRowsBy,
                      groupRowSortField: $props.groupRowSortField,
                      sortMode: $props.sortMode,
                      sortField: $props.sortField,
                      sortOrder: $props.sortOrder,
                      multiSortMeta: $props.multiSortMeta,
                      allRowsSelected: $props.allRowsSelected,
                      empty: $props.empty,
                      onCheckboxChange: _cache[25] || (_cache[25] = $event => (_ctx.$emit('checkbox-change', $event))),
                      filters: $props.filters,
                      filterDisplay: $props.filterDisplay,
                      filtersStore: $props.filtersStore,
                      onFilterChange: _cache[26] || (_cache[26] = $event => (_ctx.$emit('filter-change', $event))),
                      onFilterApply: _cache[27] || (_cache[27] = $event => (_ctx.$emit('filter-apply'))),
                      onOperatorChange: _cache[28] || (_cache[28] = $event => (_ctx.$emit('operator-change',$event))),
                      onMatchmodeChange: _cache[29] || (_cache[29] = $event => (_ctx.$emit('matchmode-change', $event))),
                      onConstraintAdd: _cache[30] || (_cache[30] = $event => (_ctx.$emit('constraint-add', $event))),
                      onConstraintRemove: _cache[31] || (_cache[31] = $event => (_ctx.$emit('constraint-remove', $event))),
                      onApplyClick: _cache[32] || (_cache[32] = $event => (_ctx.$emit('apply-click',$event)))
                    }, null, 8, ["column", "groupRowsBy", "groupRowSortField", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore"]))
                  : vue.createCommentVNode("", true)
              ], 64))
            }), 128))
          ]))
        }), 128))
  ]))
}

script$7.render = render$7;

var script$6 = {
    name: 'RowRadioButton',
    inheritAttrs: false,
    emits: ['change'],
    props: {
		value: null,
        checked: null
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                if (!this.checked) {
                    this.$emit('change', {
                        originalEvent: event,
                        data: this.value
                    });
                }
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    }
};

const _hoisted_1$6 = ["aria-checked"];
const _hoisted_2$4 = /*#__PURE__*/vue.createElementVNode("div", { class: "p-radiobutton-icon" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$4
];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(['p-radiobutton p-component', {'p-radiobutton-focused': $data.focused}]),
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
    tabindex: "0",
    onFocus: _cache[1] || (_cache[1] = $event => ($options.onFocus($event))),
    onBlur: _cache[2] || (_cache[2] = $event => ($options.onBlur($event))),
    onKeydown: _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers((...args) => ($options.onClick && $options.onClick(...args)), ["prevent"]), ["space"]))
  }, [
    vue.createElementVNode("div", {
      ref: "box",
      class: vue.normalizeClass(['p-radiobutton-box p-component', {'p-highlight': $props.checked, 'p-disabled': _ctx.$attrs.disabled, 'p-focus': $data.focused}]),
      role: "radio",
      "aria-checked": $props.checked
    }, _hoisted_3$3, 10, _hoisted_1$6)
  ], 34))
}

script$6.render = render$6;

var script$5 = {
    name: 'RowCheckbox',
    inheritAttrs: false,
    emits: ['change'],
    props: {
		value: null,
        checked: null
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                this.focused = true;
                this.$emit('change', {
                    originalEvent: event,
                    data: this.value
                });
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    }
};

const _hoisted_1$5 = ["aria-checked", "tabindex"];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(['p-checkbox p-component', {'p-checkbox-focused': $data.focused}]),
    onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => ($options.onClick && $options.onClick(...args)), ["stop","prevent"]))
  }, [
    vue.createElementVNode("div", {
      ref: "box",
      class: vue.normalizeClass(['p-checkbox-box p-component', {'p-highlight': $props.checked, 'p-disabled': _ctx.$attrs.disabled, 'p-focus': $data.focused}]),
      role: "checkbox",
      "aria-checked": $props.checked,
      tabindex: _ctx.$attrs.disabled ? null : '0',
      onKeydown: _cache[0] || (_cache[0] = vue.withKeys(vue.withModifiers((...args) => ($options.onClick && $options.onClick(...args)), ["prevent"]), ["space"])),
      onFocus: _cache[1] || (_cache[1] = $event => ($options.onFocus($event))),
      onBlur: _cache[2] || (_cache[2] = $event => ($options.onBlur($event)))
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass(['p-checkbox-icon', {'pi pi-check': $props.checked}])
      }, null, 2)
    ], 42, _hoisted_1$5)
  ], 2))
}

script$5.render = render$5;

var script$4 = {
    name: 'BodyCell',
    emits: ['cell-edit-init', 'cell-edit-complete', 'cell-edit-cancel', 'row-edit-init', 'row-edit-save', 'row-edit-cancel',
            'row-toggle', 'radio-change', 'checkbox-change', 'editing-meta-change'],
    props: {
        rowData: {
            type: Object,
            default: null
        },
        column: {
            type: Object,
            default: null
        },
        frozenRow: {
            type: Boolean,
            default: false
        },
        rowIndex: {
            type: Number,
            default: null
        },
        index: {
            type: Number,
            default: null
        },
        rowTogglerIcon: {
            type: Array,
            default: null
        },
        selected: {
            type: Boolean,
            default: false
        },
        editing: {
            type: Boolean,
            default: false
        },
        editingMeta: {
            type: Object,
            default: null
        },
        editMode: {
            type: String,
            default: null
        },
        responsiveLayout: {
            type: String,
            default: 'stack'
        },
        virtualScrollerContentProps: {
            type: Object,
            default: null
        }
    },
    documentEditListener: null,
    selfClick: false,
    overlayEventListener: null,
    data() {
        return {
            d_editing: this.editing,
            styleObject: {}
        }
    },
    watch: {
        editing(newValue) {
            this.d_editing = newValue;
        },
        '$data.d_editing': function(newValue) {
            this.$emit('editing-meta-change', {data: this.rowData, field: (this.field || `field_${this.index}`), index: this.rowIndex, editing: newValue});
        }
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }

        if (this.d_editing && (this.editMode === 'cell' || (this.editMode === 'row' && this.columnProp('rowEditor')))) {
            const focusableEl = utils.DomHandler.getFirstFocusableElement(this.$el);
            focusableEl && focusableEl.focus();
        }
    },
    beforeUnmount() {
        if (this.overlayEventListener) {
            OverlayEventBus__default["default"].off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        }
    },
    methods: {
        columnProp(prop) {
            return utils.ObjectUtils.getVNodeProp(this.column, prop);
        },
        resolveFieldData() {
            return utils.ObjectUtils.resolveFieldData(this.rowData, this.field);
        },
        toggleRow(event) {
            this.$emit('row-toggle', {
                originalEvent: event,
                data: this.rowData
            });
        },
        toggleRowWithRadio(event, index) {
            this.$emit('radio-change', { originalEvent: event.originalEvent, index: index, data: event.data});
        },
        toggleRowWithCheckbox(event, index) {
            this.$emit('checkbox-change', { originalEvent: event.originalEvent, index: index, data: event.data });
        },
        isEditable() {
            return this.column.children && this.column.children.editor != null;
        },
        bindDocumentEditListener() {
            if (!this.documentEditListener) {
                this.documentEditListener = (event) => {
                    if (!this.selfClick) {
                        this.completeEdit(event, 'outside');
                    }
                    this.selfClick = false;
                };

                document.addEventListener('click', this.documentEditListener);
            }
        },
        unbindDocumentEditListener() {
            if (this.documentEditListener) {
                document.removeEventListener('click', this.documentEditListener);
                this.documentEditListener = null;
                this.selfClick = false;
            }
        },
        switchCellToViewMode() {
            this.d_editing = false;
            this.unbindDocumentEditListener();
            OverlayEventBus__default["default"].off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        },
        onClick(event) {
            if (this.editMode === 'cell' && this.isEditable()) {
                this.selfClick = true;

                if (!this.d_editing) {
                    this.d_editing = true;
                    this.bindDocumentEditListener();
                    this.$emit('cell-edit-init', {originalEvent: event, data: this.rowData, field: this.field, index: this.rowIndex});

                    this.overlayEventListener = (e) => {
                        if (this.$el && this.$el.contains(e.target)) {
                            this.selfClick = true;
                        }
                    };
                    OverlayEventBus__default["default"].on('overlay-click', this.overlayEventListener);
                }
            }
        },
        completeEdit(event, type) {
            const completeEvent = {
                originalEvent: event,
                data: this.rowData,
                newData: this.editingRowData,
                value: this.rowData[this.field],
                newValue: this.editingRowData[this.field],
                field: this.field,
                index: this.rowIndex,
                type: type,
                defaultPrevented: false,
                preventDefault: function() {
                    this.defaultPrevented = true;
                }
            };

            this.$emit('cell-edit-complete', completeEvent);

            if (!completeEvent.defaultPrevented) {
                this.switchCellToViewMode();
            }
        },
        onKeyDown(event) {
            if (this.editMode === 'cell') {
                switch (event.which) {
                    case 13:
                        this.completeEdit(event, 'enter');
                    break;

                    case 27:
                        this.switchCellToViewMode();
                        this.$emit('cell-edit-cancel', {originalEvent: event, data: this.rowData, field: this.field, index: this.rowIndex});
                    break;

                    case 9:
                        this.completeEdit(event, 'tab');

                        if (event.shiftKey)
                            this.moveToPreviousCell(event);
                        else
                            this.moveToNextCell(event);
                    break;
                }
            }
        },
        moveToPreviousCell(event) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findPreviousEditableColumn(currentCell);

            if (targetCell) {
                utils.DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        },
        moveToNextCell(event) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findNextEditableColumn(currentCell);

            if (targetCell) {
                utils.DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        },
        findCell(element) {
            if (element) {
                let cell = element;
                while (cell && !utils.DomHandler.hasClass(cell, 'p-cell-editing')) {
                    cell = cell.parentElement;
                }

                return cell;
            }
            else {
                return null;
            }
        },
        findPreviousEditableColumn(cell) {
            let prevCell = cell.previousElementSibling;

            if (!prevCell) {
                let previousRow = cell.parentElement.previousElementSibling;
                if (previousRow) {
                    prevCell = previousRow.lastElementChild;
                }
            }

            if (prevCell) {
                if (utils.DomHandler.hasClass(prevCell, 'p-editable-column'))
                    return prevCell;
                else
                    return this.findPreviousEditableColumn(prevCell);
            }
            else {
                return null;
            }
        },
        findNextEditableColumn(cell) {
            let nextCell = cell.nextElementSibling;

            if (!nextCell) {
                let nextRow = cell.parentElement.nextElementSibling;
                if (nextRow) {
                    nextCell = nextRow.firstElementChild;
                }
            }

            if (nextCell) {
                if (utils.DomHandler.hasClass(nextCell, 'p-editable-column'))
                    return nextCell;
                else
                    return this.findNextEditableColumn(nextCell);
            }
            else {
                return null;
            }
        },
        isEditingCellValid() {
            return (utils.DomHandler.find(this.$el, '.p-invalid').length === 0);
        },
        onRowEditInit(event) {
            this.$emit('row-edit-init', {originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex});
        },
        onRowEditSave(event) {
            this.$emit('row-edit-save', {originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex});
        },
        onRowEditCancel(event) {
            this.$emit('row-edit-cancel', {originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex});
        },
        editorInitCallback(event) {
            this.$emit('row-edit-init', {originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex});
        },
        editorSaveCallback(event) {
            this.$emit('row-edit-save', {originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex});
        },
        editorCancelCallback(event) {
            this.$emit('row-edit-cancel', {originalEvent: event, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex});
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');
                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;
                    if (next) {
                        right = utils.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }
                    this.styleObject.right = right + 'px';
                }
                else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;
                    if (prev) {
                        left = utils.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }
                    this.styleObject.left = left + 'px';
                }
            }
        },
        getVirtualScrollerProp(option) {
            return this.virtualScrollerContentProps ? this.virtualScrollerContentProps[option] : null;
        }
    },
    computed: {
        editingRowData() {
            return this.editingMeta[this.rowIndex] ? this.editingMeta[this.rowIndex].data : this.rowData;
        },
        field() {
            return this.columnProp('field');
        },
        containerClass() {
            return [this.columnProp('bodyClass'), this.columnProp('class'), {
                'p-selection-column': this.columnProp('selectionMode') != null,
                'p-editable-column': this.isEditable(),
                'p-cell-editing': this.d_editing,
                'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('bodyStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject]: [columnStyle, bodyStyle];
        },
        loading() {
            return this.getVirtualScrollerProp('loading');
        },
        loadingOptions() {
            const getLoaderOptions = this.getVirtualScrollerProp('getLoaderOptions');
            return getLoaderOptions && getLoaderOptions(this.rowIndex, {
                cellIndex: this.index,
                cellFirst: this.index === 0,
                cellLast: this.index === (this.getVirtualScrollerProp('columns').length - 1),
                cellEven: this.index % 2 === 0,
                cellOdd: this.index % 2 !== 0,
                column: this.column,
                field: this.field
            });
        }
    },
    components: {
        'DTRadioButton': script$6,
        'DTCheckbox': script$5
    },
    directives: {
        'ripple': Ripple__default["default"]
    }
};

const _hoisted_1$4 = {
  key: 0,
  class: "p-column-title"
};
const _hoisted_2$3 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-row-editor-init-icon pi pi-fw pi-pencil" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
const _hoisted_4$2 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-row-editor-save-icon pi pi-fw pi-check" }, null, -1);
const _hoisted_5$2 = [
  _hoisted_4$2
];
const _hoisted_6$2 = /*#__PURE__*/vue.createElementVNode("span", { class: "p-row-editor-cancel-icon pi pi-fw pi-times" }, null, -1);
const _hoisted_7 = [
  _hoisted_6$2
];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTRadioButton = vue.resolveComponent("DTRadioButton");
  const _component_DTCheckbox = vue.resolveComponent("DTCheckbox");
  const _directive_ripple = vue.resolveDirective("ripple");

  return ($options.loading)
    ? (vue.openBlock(), vue.createElementBlock("td", {
        key: 0,
        style: vue.normalizeStyle($options.containerStyle),
        class: vue.normalizeClass($options.containerClass)
      }, [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.column.children.loading), {
          data: $props.rowData,
          column: $props.column,
          field: $options.field,
          index: $props.rowIndex,
          frozenRow: $props.frozenRow,
          loadingOptions: $options.loadingOptions
        }, null, 8, ["data", "column", "field", "index", "frozenRow", "loadingOptions"]))
      ], 6))
    : (vue.openBlock(), vue.createElementBlock("td", {
        key: 1,
        style: vue.normalizeStyle($options.containerStyle),
        class: vue.normalizeClass($options.containerClass),
        onClick: _cache[6] || (_cache[6] = (...args) => ($options.onClick && $options.onClick(...args))),
        onKeydown: _cache[7] || (_cache[7] = (...args) => ($options.onKeyDown && $options.onKeyDown(...args))),
        role: "cell"
      }, [
        ($props.responsiveLayout === 'stack')
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$4, vue.toDisplayString($options.columnProp('header')), 1))
          : vue.createCommentVNode("", true),
        ($props.column.children && $props.column.children.body && !$data.d_editing)
          ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.column.children.body), {
              key: 1,
              data: $props.rowData,
              column: $props.column,
              field: $options.field,
              index: $props.rowIndex,
              frozenRow: $props.frozenRow,
              editorInitCallback: $options.editorInitCallback
            }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorInitCallback"]))
          : ($props.column.children && $props.column.children.editor && $data.d_editing)
            ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.column.children.editor), {
                key: 2,
                data: $options.editingRowData,
                column: $props.column,
                field: $options.field,
                index: $props.rowIndex,
                frozenRow: $props.frozenRow,
                editorSaveCallback: $options.editorSaveCallback,
                editorCancelCallback: $options.editorCancelCallback
              }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorSaveCallback", "editorCancelCallback"]))
            : ($props.column.children && $props.column.children.body && !$props.column.children.editor && $data.d_editing)
              ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.column.children.body), {
                  key: 3,
                  data: $options.editingRowData,
                  column: $props.column,
                  field: $options.field,
                  index: $props.rowIndex,
                  frozenRow: $props.frozenRow
                }, null, 8, ["data", "column", "field", "index", "frozenRow"]))
              : ($options.columnProp('selectionMode'))
                ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
                    ($options.columnProp('selectionMode') === 'single')
                      ? (vue.openBlock(), vue.createBlock(_component_DTRadioButton, {
                          key: 0,
                          value: $props.rowData,
                          checked: $props.selected,
                          onChange: _cache[0] || (_cache[0] = $event => ($options.toggleRowWithRadio($event, $props.rowIndex)))
                        }, null, 8, ["value", "checked"]))
                      : ($options.columnProp('selectionMode') ==='multiple')
                        ? (vue.openBlock(), vue.createBlock(_component_DTCheckbox, {
                            key: 1,
                            value: $props.rowData,
                            checked: $props.selected,
                            onChange: _cache[1] || (_cache[1] = $event => ($options.toggleRowWithCheckbox($event, $props.rowIndex)))
                          }, null, 8, ["value", "checked"]))
                        : vue.createCommentVNode("", true)
                  ], 64))
                : ($options.columnProp('rowReorder'))
                  ? (vue.openBlock(), vue.createElementBlock("i", {
                      key: 5,
                      class: vue.normalizeClass(['p-datatable-reorderablerow-handle', ($options.columnProp('rowReorderIcon') || 'pi pi-bars')])
                    }, null, 2))
                  : ($options.columnProp('expander'))
                    ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                        key: 6,
                        class: "p-row-toggler p-link",
                        onClick: _cache[2] || (_cache[2] = (...args) => ($options.toggleRow && $options.toggleRow(...args))),
                        type: "button"
                      }, [
                        vue.createElementVNode("span", {
                          class: vue.normalizeClass($props.rowTogglerIcon)
                        }, null, 2)
                      ])), [
                        [_directive_ripple]
                      ])
                    : ($props.editMode === 'row' && $options.columnProp('rowEditor'))
                      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 7 }, [
                          (!$data.d_editing)
                            ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                                key: 0,
                                class: "p-row-editor-init p-link",
                                onClick: _cache[3] || (_cache[3] = (...args) => ($options.onRowEditInit && $options.onRowEditInit(...args))),
                                type: "button"
                              }, _hoisted_3$2)), [
                                [_directive_ripple]
                              ])
                            : vue.createCommentVNode("", true),
                          ($data.d_editing)
                            ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                                key: 1,
                                class: "p-row-editor-save p-link",
                                onClick: _cache[4] || (_cache[4] = (...args) => ($options.onRowEditSave && $options.onRowEditSave(...args))),
                                type: "button"
                              }, _hoisted_5$2)), [
                                [_directive_ripple]
                              ])
                            : vue.createCommentVNode("", true),
                          ($data.d_editing)
                            ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", {
                                key: 2,
                                class: "p-row-editor-cancel p-link",
                                onClick: _cache[5] || (_cache[5] = (...args) => ($options.onRowEditCancel && $options.onRowEditCancel(...args))),
                                type: "button"
                              }, _hoisted_7)), [
                                [_directive_ripple]
                              ])
                            : vue.createCommentVNode("", true)
                        ], 64))
                      : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 8 }, [
                          vue.createTextVNode(vue.toDisplayString($options.resolveFieldData()), 1)
                        ], 64))
      ], 38))
}

script$4.render = render$4;

var script$3 = {
    name: 'TableBody',
    emits: ['rowgroup-toggle', 'row-click', 'row-dblclick', 'row-rightclick', 'row-touchend', 'row-keydown', 'row-mousedown',
        'row-dragstart', 'row-dragover', 'row-dragleave', 'row-dragend', 'row-drop', 'row-toggle',
        'radio-change', 'checkbox-change', 'cell-edit-init', 'cell-edit-complete', 'cell-edit-cancel',
        'row-edit-init', 'row-edit-save', 'row-edit-cancel', 'editing-meta-change'],
    props: {
        value: {
            type: Array,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        frozenRow: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array,String],
            default: null
        },
        expandableRowGroups: {
            type: Boolean,
            default: false
        },
        expandedRowGroups: {
            type: Array,
            default: null
        },
        dataKey: {
            type: String,
            default: null
        },
        expandedRowIcon: {
            type: String,
            default: null
        },
        collapsedRowIcon: {
            type: String,
            default: null
        },
        expandedRows: {
            type: Array,
            default: null
        },
        expandedRowKeys: {
            type: null,
            default: null
        },
        selection: {
            type: [Array,Object],
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        contextMenu: {
            type: Boolean,
            default: false
        },
        contextMenuSelection: {
            type: Object,
            default: null
        },
        rowClass: {
            type: null,
            default: null
        },
        rowStyle: {
            type: null,
            default: null
        },
        editMode: {
            type: String,
            default: null
        },
        compareSelectionBy: {
            type: String,
            default: 'deepEquals'
        },
        editingRows: {
            type: Array,
            default: null
        },
        editingRowKeys: {
            type: null,
            default: null
        },
        editingMeta: {
            type: Object,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        templates: {
            type: null,
            default: null
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        responsiveLayout: {
            type: String,
            default: 'stack'
        },
        virtualScrollerContentProps: {
            type: Object,
            default: null
        },
        isVirtualScrollerDisabled: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        virtualScrollerContentProps(newValue, oldValue) {
            if (!this.isVirtualScrollerDisabled && this.getVirtualScrollerProp('vertical') && this.getVirtualScrollerProp('itemSize', oldValue) !== this.getVirtualScrollerProp('itemSize', newValue)) {
                this.updateVirtualScrollerPosition();
            }
        }
    },
    mounted() {
        if (this.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.scrollable && this.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }

        if (!this.isVirtualScrollerDisabled && this.getVirtualScrollerProp('vertical')) {
            this.updateVirtualScrollerPosition();
        }
    },
    updated() {
        if (this.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.scrollable && this.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }
    },
    data() {
        return {
            rowGroupHeaderStyleObject: {}
        }
    },
    methods: {
        columnProp(col, prop) {
            return utils.ObjectUtils.getVNodeProp(col, prop);
        },
        shouldRenderRowGroupHeader(value, rowData, i) {
            let currentRowFieldData = utils.ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
            let prevRowData = value[i - 1];
            if (prevRowData) {
                let previousRowFieldData = utils.ObjectUtils.resolveFieldData(prevRowData, this.groupRowsBy);
                return currentRowFieldData !== previousRowFieldData;
            }
            else {
                return true;
            }
        },
        getRowKey(rowData, index) {
            return this.dataKey ? utils.ObjectUtils.resolveFieldData(rowData, this.dataKey): index;
        },
        getRowIndex(index) {
            const getItemOptions = this.getVirtualScrollerProp('getItemOptions');
            return getItemOptions ? getItemOptions(index).index : index;
        },
        getRowClass(rowData) {
            let rowStyleClass = [];
            if (this.selectionMode) {
                 rowStyleClass.push('p-selectable-row');
            }

            if (this.selection) {
                rowStyleClass.push({
                    'p-highlight': this.isSelected(rowData)
                });
            }

            if (this.contextMenuSelection) {
                rowStyleClass.push({
                    'p-highlight-contextmenu': this.isSelectedWithContextMenu(rowData)
                });
            }

            if (this.rowClass) {
                let rowClassValue = this.rowClass(rowData);

                if (rowClassValue) {
                    rowStyleClass.push(rowClassValue);
                }
            }

            return rowStyleClass;
        },
        shouldRenderRowGroupFooter(value, rowData, i) {
            if (this.expandableRowGroups && !this.isRowGroupExpanded(rowData)) {
                return false;
            }
            else {
                let currentRowFieldData = utils.ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                let nextRowData = value[i + 1];
                if (nextRowData) {
                    let nextRowFieldData = utils.ObjectUtils.resolveFieldData(nextRowData, this.groupRowsBy);
                    return currentRowFieldData !== nextRowFieldData;
                }
                else {
                    return true;
                }
            }
        },
        shouldRenderBodyCell(value, column, i) {
            if (this.rowGroupMode) {
                if (this.rowGroupMode === 'subheader') {
                    return this.groupRowsBy !== this.columnProp(column, 'field');
                }
                else if (this.rowGroupMode === 'rowspan') {
                    if (this.isGrouped(column)) {
                        let prevRowData = value[i - 1];
                        if (prevRowData) {
                            let currentRowFieldData = utils.ObjectUtils.resolveFieldData(value[i], this.columnProp(column, 'field'));
                            let previousRowFieldData = utils.ObjectUtils.resolveFieldData(prevRowData, this.columnProp(column, 'field'));
                            return currentRowFieldData !== previousRowFieldData;
                        }
                        else {
                            return true;
                        }
                    }
                    else {
                        return true;
                    }
                }
            }
            else {
                return !this.columnProp(column, 'hidden');
            }
        },
        calculateRowGroupSize(value, column, index) {
            if (this.isGrouped(column)) {
                let currentRowFieldData = utils.ObjectUtils.resolveFieldData(value[index], this.columnProp(column, 'field'));
                let nextRowFieldData = currentRowFieldData;
                let groupRowSpan = 0;

                while (currentRowFieldData === nextRowFieldData) {
                    groupRowSpan++;
                    let nextRowData = value[++index];
                    if (nextRowData) {
                        nextRowFieldData = utils.ObjectUtils.resolveFieldData(nextRowData, this.columnProp(column, 'field'));
                    }
                    else {
                        break;
                    }
                }

                return groupRowSpan === 1 ? null : groupRowSpan;
            }
            else {
                return null;
            }
        },
        rowTogglerIcon(rowData) {
            const icon = this.isRowExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
            return ['p-row-toggler-icon pi', icon];
        },
        rowGroupTogglerIcon(rowData) {
            const icon = this.isRowGroupExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
            return ['p-row-toggler-icon pi', icon];
        },
        isGrouped(column) {
            if (this.groupRowsBy && this.columnProp(column, 'field')) {
                if (Array.isArray(this.groupRowsBy))
                    return this.groupRowsBy.indexOf(column.props.field) > -1;
                else
                    return this.groupRowsBy === column.props.field;
            }
            else {
                return false;
            }
        },
        isRowEditing(rowData) {
            if (rowData && this.editingRows) {
                if (this.dataKey)
                    return this.editingRowKeys ? this.editingRowKeys[utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else
                    return this.findIndex(rowData, this.editingRows) > -1;
            }

            return false;
        },
        isRowExpanded(rowData) {
            if (rowData && this.expandedRows) {
                if (this.dataKey)
                    return this.expandedRowKeys ? this.expandedRowKeys[utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else
                    return this.findIndex(rowData, this.expandedRows) > -1;
            }

            return false;
        },
        isRowGroupExpanded(rowData) {
            if (this.expandableRowGroups && this.expandedRowGroups) {
                let groupFieldValue = utils.ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
            }
            return false;
        },
        isSelected(rowData) {
            if (rowData && this.selection) {
                if (this.dataKey) {
                    return this.selectionKeys ? this.selectionKeys[utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                }
                else {
                    if (this.selection instanceof Array)
                        return this.findIndexInSelection(rowData) > -1;
                    else
                        return this.equals(rowData, this.selection);
                }
            }

            return false;
        },
        isSelectedWithContextMenu(rowData) {
            if (rowData && this.contextMenuSelection) {
                return this.equals(rowData, this.contextMenuSelection, this.dataKey);
            }

            return false;
        },
        findIndexInSelection(rowData) {
            return this.findIndex(rowData, this.selection);
        },
        findIndex(rowData, collection) {
            let index = -1;
            if (collection && collection.length) {
                for (let i = 0; i < collection.length; i++) {
                    if (this.equals(rowData, collection[i])) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        },
        equals(data1, data2) {
            return this.compareSelectionBy === 'equals' ? (data1 === data2) : utils.ObjectUtils.equals(data1, data2, this.dataKey);
        },
        onRowGroupToggle(event, data) {
            this.$emit('rowgroup-toggle', {originalEvent: event, data: data});
        },
        onRowClick(event, rowData, rowIndex) {
            this.$emit('row-click', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowDblClick(event, rowData, rowIndex) {
            this.$emit('row-dblclick', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowRightClick(event, rowData, rowIndex) {
            this.$emit('row-rightclick', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowTouchEnd(event) {
            this.$emit('row-touchend', event);
        },
        onRowKeyDown(event, rowData, rowIndex) {
            this.$emit('row-keydown', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowMouseDown(event) {
            this.$emit('row-mousedown', event);
        },
        onRowDragStart(event, rowIndex) {
            this.$emit('row-dragstart', {originalEvent: event, index: rowIndex});
        },
        onRowDragOver(event, rowIndex) {
            this.$emit('row-dragover', {originalEvent: event, index: rowIndex});
        },
        onRowDragLeave(event) {
            this.$emit('row-dragleave', event);
        },
        onRowDragEnd(event) {
            this.$emit('row-dragend', event);
        },
        onRowDrop(event) {
            this.$emit('row-drop', event);
        },
        onRowToggle(event) {
            this.$emit('row-toggle', event);
        },
        onRadioChange(event) {
            this.$emit('radio-change', event);
        },
        onCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        },
        onCellEditInit(event) {
            this.$emit('cell-edit-init', event);
        },
        onCellEditComplete(event) {
            this.$emit('cell-edit-complete', event);
        },
        onCellEditCancel(event) {
            this.$emit('cell-edit-cancel', event);
        },
        onRowEditInit(event) {
            this.$emit('row-edit-init', event);
        },
        onRowEditSave(event) {
            this.$emit('row-edit-save', event);
        },
        onRowEditCancel(event) {
            this.$emit('row-edit-cancel', event);
        },
        onEditingMetaChange(event) {
            this.$emit('editing-meta-change', event);
        },
        updateFrozenRowStickyPosition() {
            this.$el.style.top = utils.DomHandler.getOuterHeight(this.$el.previousElementSibling) + 'px';
        },
        updateFrozenRowGroupHeaderStickyPosition() {
            let tableHeaderHeight = utils.DomHandler.getOuterHeight(this.$el.previousElementSibling);
            this.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px';
        },
        updateVirtualScrollerPosition() {
            const tableHeaderHeight = utils.DomHandler.getOuterHeight(this.$el.previousElementSibling);
            this.$el.style.top = (this.$el.style.top || 0) + tableHeaderHeight + 'px';
        },
        getVirtualScrollerProp(option, options) {
            options = options || this.virtualScrollerContentProps;
            return options ? options[option] : null;
        },
        bodyRef(el) {
            // For VirtualScroller
            const contentRef = this.getVirtualScrollerProp('contentRef');
            contentRef && contentRef(el);
        }
    },
    computed: {
        columnsLength() {
            let hiddenColLength = 0;

            this.columns.forEach(column => {
                if(this.columnProp(column, 'hidden')) hiddenColLength++;
            });

            return this.columns ? this.columns.length - hiddenColLength : 0;
        },
        rowGroupHeaderStyle() {
            if (this.scrollable) {
                return {top: this.rowGroupHeaderStyleObject.top};
            }

            return null;
        },
        bodyStyle() {
            return this.getVirtualScrollerProp('contentStyle');
        }
    },
    components: {
        'DTBodyCell': script$4
    }
};

const _hoisted_1$3 = ["colspan"];
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$1 = ["onClick", "onDblclick", "onContextmenu", "onKeydown", "tabindex", "onDragstart", "onDragover"];
const _hoisted_4$1 = ["colspan"];
const _hoisted_5$1 = {
  key: 1,
  class: "p-datatable-emptymessage",
  role: "row"
};
const _hoisted_6$1 = ["colspan"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTBodyCell = vue.resolveComponent("DTBodyCell");

  return (vue.openBlock(), vue.createElementBlock("tbody", {
    ref: $options.bodyRef,
    class: "p-datatable-tbody",
    role: "rowgroup",
    style: vue.normalizeStyle($options.bodyStyle)
  }, [
    (!$props.empty)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.value, (rowData, index) => {
          return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: $options.getRowKey(rowData, $options.getRowIndex(index)) + '_subheader'
          }, [
            ($props.templates['groupheader'] && $props.rowGroupMode === 'subheader' && $options.shouldRenderRowGroupHeader($props.value, rowData, $options.getRowIndex(index)))
              ? (vue.openBlock(), vue.createElementBlock("tr", {
                  key: 0,
                  class: "p-rowgroup-header",
                  style: vue.normalizeStyle($options.rowGroupHeaderStyle),
                  role: "row"
                }, [
                  vue.createElementVNode("td", {
                    colspan: $options.columnsLength - 1
                  }, [
                    ($props.expandableRowGroups)
                      ? (vue.openBlock(), vue.createElementBlock("button", {
                          key: 0,
                          class: "p-row-toggler p-link",
                          onClick: $event => ($options.onRowGroupToggle($event, rowData)),
                          type: "button"
                        }, [
                          vue.createElementVNode("span", {
                            class: vue.normalizeClass($options.rowGroupTogglerIcon(rowData))
                          }, null, 2)
                        ], 8, _hoisted_2$2))
                      : vue.createCommentVNode("", true),
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates['groupheader']), {
                      data: rowData,
                      index: $options.getRowIndex(index)
                    }, null, 8, ["data", "index"]))
                  ], 8, _hoisted_1$3)
                ], 4))
              : vue.createCommentVNode("", true),
            ($props.expandableRowGroups ? $options.isRowGroupExpanded(rowData): true)
              ? (vue.openBlock(), vue.createElementBlock("tr", {
                  class: vue.normalizeClass($options.getRowClass(rowData)),
                  style: vue.normalizeStyle($props.rowStyle),
                  key: $options.getRowKey(rowData, $options.getRowIndex(index)),
                  onClick: $event => ($options.onRowClick($event, rowData, $options.getRowIndex(index))),
                  onDblclick: $event => ($options.onRowDblClick($event, rowData, $options.getRowIndex(index))),
                  onContextmenu: $event => ($options.onRowRightClick($event, rowData, $options.getRowIndex(index))),
                  onTouchend: _cache[9] || (_cache[9] = $event => ($options.onRowTouchEnd($event))),
                  onKeydown: $event => ($options.onRowKeyDown($event, rowData, $options.getRowIndex(index))),
                  tabindex: $props.selectionMode || $props.contextMenu ? '0' : null,
                  onMousedown: _cache[10] || (_cache[10] = $event => ($options.onRowMouseDown($event))),
                  onDragstart: $event => ($options.onRowDragStart($event, $options.getRowIndex(index))),
                  onDragover: $event => ($options.onRowDragOver($event, $options.getRowIndex(index))),
                  onDragleave: _cache[11] || (_cache[11] = $event => ($options.onRowDragLeave($event))),
                  onDragend: _cache[12] || (_cache[12] = $event => ($options.onRowDragEnd($event))),
                  onDrop: _cache[13] || (_cache[13] = $event => ($options.onRowDrop($event))),
                  role: "row"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (col, i) => {
                    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                      key: $options.columnProp(col,'columnKey')||$options.columnProp(col,'field')||i
                    }, [
                      ($options.shouldRenderBodyCell($props.value, col, $options.getRowIndex(index)))
                        ? (vue.openBlock(), vue.createBlock(_component_DTBodyCell, {
                            key: 0,
                            rowData: rowData,
                            column: col,
                            rowIndex: $options.getRowIndex(index),
                            index: i,
                            selected: $options.isSelected(rowData),
                            rowTogglerIcon: $options.columnProp(col,'expander') ? $options.rowTogglerIcon(rowData): null,
                            frozenRow: $props.frozenRow,
                            rowspan: $props.rowGroupMode === 'rowspan' ? $options.calculateRowGroupSize($props.value, col, $options.getRowIndex(index)) : null,
                            editMode: $props.editMode,
                            editing: $props.editMode === 'row' && $options.isRowEditing(rowData),
                            responsiveLayout: $props.responsiveLayout,
                            onRadioChange: _cache[0] || (_cache[0] = $event => ($options.onRadioChange($event))),
                            onCheckboxChange: _cache[1] || (_cache[1] = $event => ($options.onCheckboxChange($event))),
                            onRowToggle: _cache[2] || (_cache[2] = $event => ($options.onRowToggle($event))),
                            onCellEditInit: _cache[3] || (_cache[3] = $event => ($options.onCellEditInit($event))),
                            onCellEditComplete: _cache[4] || (_cache[4] = $event => ($options.onCellEditComplete($event))),
                            onCellEditCancel: _cache[5] || (_cache[5] = $event => ($options.onCellEditCancel($event))),
                            onRowEditInit: _cache[6] || (_cache[6] = $event => ($options.onRowEditInit($event))),
                            onRowEditSave: _cache[7] || (_cache[7] = $event => ($options.onRowEditSave($event))),
                            onRowEditCancel: _cache[8] || (_cache[8] = $event => ($options.onRowEditCancel($event))),
                            editingMeta: $props.editingMeta,
                            onEditingMetaChange: $options.onEditingMetaChange,
                            virtualScrollerContentProps: $props.virtualScrollerContentProps
                          }, null, 8, ["rowData", "column", "rowIndex", "index", "selected", "rowTogglerIcon", "frozenRow", "rowspan", "editMode", "editing", "responsiveLayout", "editingMeta", "onEditingMetaChange", "virtualScrollerContentProps"]))
                        : vue.createCommentVNode("", true)
                    ], 64))
                  }), 128))
                ], 46, _hoisted_3$1))
              : vue.createCommentVNode("", true),
            ($props.templates['expansion'] && $props.expandedRows && $options.isRowExpanded(rowData))
              ? (vue.openBlock(), vue.createElementBlock("tr", {
                  class: "p-datatable-row-expansion",
                  key: $options.getRowKey(rowData, $options.getRowIndex(index)) + '_expansion',
                  role: "row"
                }, [
                  vue.createElementVNode("td", { colspan: $options.columnsLength }, [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates['expansion']), {
                      data: rowData,
                      index: $options.getRowIndex(index)
                    }, null, 8, ["data", "index"]))
                  ], 8, _hoisted_4$1)
                ]))
              : vue.createCommentVNode("", true),
            ($props.templates['groupfooter'] && $props.rowGroupMode === 'subheader' && $options.shouldRenderRowGroupFooter($props.value, rowData, $options.getRowIndex(index)))
              ? (vue.openBlock(), vue.createElementBlock("tr", {
                  class: "p-rowgroup-footer",
                  key: $options.getRowKey(rowData, $options.getRowIndex(index)) + '_subfooter',
                  role: "row"
                }, [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates['groupfooter']), {
                    data: rowData,
                    index: $options.getRowIndex(index)
                  }, null, 8, ["data", "index"]))
                ]))
              : vue.createCommentVNode("", true)
          ], 64))
        }), 128))
      : (vue.openBlock(), vue.createElementBlock("tr", _hoisted_5$1, [
          vue.createElementVNode("td", { colspan: $options.columnsLength }, [
            ($props.templates.empty && !$props.loading)
              ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.empty), { key: 0 }))
              : vue.createCommentVNode("", true),
            ($props.templates.loading && $props.loading)
              ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.loading), { key: 1 }))
              : vue.createCommentVNode("", true)
          ], 8, _hoisted_6$1)
        ]))
  ], 4))
}

script$3.render = render$3;

var script$2 = {
    name: 'FooterCell',
    props: {
        column: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            styleObject: {}
        }
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    methods: {
        columnProp(prop) {
            return utils.ObjectUtils.getVNodeProp(this.column, prop);
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');
                if (align === 'right') {
                    let right = 0;
                    let next = this.$el.nextElementSibling;
                    if (next) {
                        right = utils.DomHandler.getOuterWidth(next) + parseFloat(next.style.left);
                    }
                    this.styleObject.right = right + 'px';
                }
                else {
                    let left = 0;
                    let prev = this.$el.previousElementSibling;
                    if (prev) {
                        left = utils.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left);
                    }
                    this.styleObject.left = left + 'px';
                }
            }
        }
    },
    computed: {
        containerClass() {
            return [this.columnProp('footerClass'), this.columnProp('class'), {
                'p-frozen-column': this.columnProp('frozen')
            }];
        },
        containerStyle() {
            let bodyStyle = this.columnProp('footerStyle');
            let columnStyle = this.columnProp('style');

            return this.columnProp('frozen') ? [columnStyle, bodyStyle, this.styleObject]: [columnStyle, bodyStyle];
        }
    }
};

const _hoisted_1$2 = ["colspan", "rowspan"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("td", {
    style: vue.normalizeStyle($options.containerStyle),
    class: vue.normalizeClass($options.containerClass),
    role: "cell",
    colspan: $options.columnProp('colspan'),
    rowspan: $options.columnProp('rowspan')
  }, [
    ($props.column.children && $props.column.children.footer)
      ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.column.children.footer), {
          key: 0,
          column: $props.column
        }, null, 8, ["column"]))
      : vue.createCommentVNode("", true),
    vue.createTextVNode(" " + vue.toDisplayString($options.columnProp('footer')), 1)
  ], 14, _hoisted_1$2))
}

script$2.render = render$2;

var script$1 = {
    name: 'TableFooter',
    props: {
        columnGroup: {
            type: null,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
    },
    methods: {
        columnProp(col, prop) {
            return utils.ObjectUtils.getVNodeProp(col, prop);
        },
        getFooterRows() {
            let rows = [];

            let columnGroup = this.columnGroup;
            if (columnGroup.children && columnGroup.children.default) {
                for (let child of columnGroup.children.default()) {
                    if (child.type.name === 'Row') {
                        rows.push(child);
                    }
                    else if (child.children && child.children instanceof Array) {
                        rows = child.children;
                    }
                }

                return rows;
            }
        },
        getFooterColumns(row){
            let cols = [];

            if (row.children && row.children.default) {
                row.children.default().forEach(child => {
                    if (child.children && child.children instanceof Array)
                        cols = [...cols, ...child.children];
                    else if (child.type.name === 'Column')
                        cols.push(child);
                });

                return cols;
            }
        }
    },
    computed: {
        hasFooter() {
            let hasFooter = false;

            if (this.columnGroup) {
                hasFooter = true;
            }
            else if (this.columns) {
                for (let col of this.columns) {
                    if (this.columnProp(col, 'footer') || (col.children && col.children.footer)) {
                        hasFooter = true;
                        break;
                    }
                }
            }

            return hasFooter;
        }
    },
    components: {
        'DTFooterCell': script$2
    }
};

const _hoisted_1$1 = {
  key: 0,
  class: "p-datatable-tfoot",
  role: "rowgroup"
};
const _hoisted_2$1 = {
  key: 0,
  role: "row"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTFooterCell = vue.resolveComponent("DTFooterCell");

  return ($options.hasFooter)
    ? (vue.openBlock(), vue.createElementBlock("tfoot", _hoisted_1$1, [
        (!$props.columnGroup)
          ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_2$1, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (col, i) => {
                return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                  key: $options.columnProp(col,'columnKey')||$options.columnProp(col,'field')||i
                }, [
                  (!$options.columnProp(col,'hidden'))
                    ? (vue.openBlock(), vue.createBlock(_component_DTFooterCell, {
                        key: 0,
                        column: col
                      }, null, 8, ["column"]))
                    : vue.createCommentVNode("", true)
                ], 64))
              }), 128))
            ]))
          : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($options.getFooterRows(), (row, i) => {
              return (vue.openBlock(), vue.createElementBlock("tr", {
                key: i,
                role: "row"
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.getFooterColumns(row), (col, j) => {
                  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                    key: $options.columnProp(col,'columnKey')||$options.columnProp(col,'field')||j
                  }, [
                    (!$options.columnProp(col,'hidden'))
                      ? (vue.openBlock(), vue.createBlock(_component_DTFooterCell, {
                          key: 0,
                          column: col
                        }, null, 8, ["column"]))
                      : vue.createCommentVNode("", true)
                  ], 64))
                }), 128))
              ]))
            }), 128))
      ]))
    : vue.createCommentVNode("", true)
}

script$1.render = render$1;

var script = {
    name: 'DataTable',
    emits: ['value-change', 'update:first', 'update:rows', 'page', 'update:sortField', 'update:sortOrder', 'update:multiSortMeta', 'sort', 'filter', 'row-click', 'row-dblclick',
        'update:selection', 'row-select', 'row-unselect', 'update:contextMenuSelection', 'row-contextmenu', 'row-unselect-all', 'row-select-all', 'select-all-change',
        'column-resize-end', 'column-reorder', 'row-reorder', 'update:expandedRows', 'row-collapse', 'row-expand',
        'update:expandedRowGroups', 'rowgroup-collapse', 'rowgroup-expand', 'update:filters', 'state-restore', 'state-save',
        'cell-edit-init', 'cell-edit-complete', 'cell-edit-cancel', 'update:editingRows', 'row-edit-init', 'row-edit-save', 'row-edit-cancel'],
    props: {
        value: {
            type: Array,
            default: null
        },
        dataKey: {
            type: String,
            default: null
        },
        rows: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        totalRecords: {
            type: Number,
            default: 0
        },
        paginator: {
            type: Boolean,
            default: false
        },
        paginatorPosition: {
            type: String,
            default: 'bottom'
        },
        alwaysShowPaginator: {
            type: Boolean,
            default: true
        },
        paginatorTemplate: {
            type: String,
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        pageLinkSize: {
            type: Number,
            default: 5
        },
        rowsPerPageOptions: {
            type: Array,
            default: null
        },
        currentPageReportTemplate: {
            type: String,
            default: '({currentPage} of {totalPages})'
        },
        lazy: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner'
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        defaultSortOrder: {
            type: Number,
            default: 1
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        removableSort: {
            type: Boolean,
            default: false
        },
        filters: {
            type: Object,
            default: null
        },
        filterDisplay: {
            type: String,
            default: null
        },
        globalFilterFields: {
            type: Array,
            default: null
        },
        filterLocale: {
            type: String,
            default: undefined
        },
        selection: {
            type: [Array,Object],
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        compareSelectionBy: {
            type: String,
            default: 'deepEquals'
        },
        metaKeySelection: {
            type: Boolean,
            default: true
        },
        contextMenu: {
            type: Boolean,
            default: false
        },
        contextMenuSelection: {
            type: Object,
            default: null
        },
        selectAll: {
            type: Boolean,
            default: null
        },
        rowHover: {
            type: Boolean,
            default: false
        },
        csvSeparator: {
            type: String,
            default: ','
        },
        exportFilename: {
            type: String,
            default: 'download'
        },
        exportFunction: {
            type: Function,
            default: null
        },
        autoLayout: {
            type: Boolean,
            default: false
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        columnResizeMode: {
            type: String,
            default: 'fit'
        },
        reorderableColumns: {
            type: Boolean,
            default: false
        },
        expandedRows: {
            type: Array,
            default: null
        },
        expandedRowIcon: {
            type: String,
            default: 'pi-chevron-down'
        },
        collapsedRowIcon: {
            type: String,
            default: 'pi-chevron-right'
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array,String],
            default: null
        },
        expandableRowGroups: {
            type: Boolean,
            default: false
        },
        expandedRowGroups: {
            type: Array,
            default: null
        },
        stateStorage: {
            type: String,
            default: 'session'
        },
        stateKey: {
            type: String,
            default: null
        },
        editMode: {
            type: String,
            default: null
        },
        editingRows: {
            type: Array,
            default: null
        },
        rowClass: {
            type: null,
            default: null
        },
        rowStyle: {
            type: null,
            default: null
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        scrollDirection: {
            type: String,
            default: "vertical"
        },
        virtualScrollerOptions: {
            type: Object,
            default: null
        },
        scrollHeight: {
            type: String,
            default: null
        },
        frozenValue: {
            type: Array,
            default: null
        },
        responsiveLayout: {
            type: String,
            default: 'stack'
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        showGridlines: {
            type: Boolean,
            default: false
        },
        stripedRows: {
            type: Boolean,
            default: false
        },
        tableStyle: {
            type: null,
            default: null
        },
        tableClass: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            d_first: this.first,
            d_rows: this.rows,
            d_sortField: this.sortField,
            d_sortOrder: this.sortOrder,
            d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
            d_groupRowsSortMeta: null,
            d_selectionKeys: null,
            d_expandedRowKeys: null,
            d_columnOrder: null,
            d_editingRowKeys: null,
            d_editingMeta: {},
            d_filters: this.cloneFilters(this.filters)
        };
    },
    rowTouched: false,
    anchorRowIndex: null,
    rangeRowIndex: null,
    documentColumnResizeListener: null,
    documentColumnResizeEndListener: null,
    lastResizeHelperX: null,
    resizeColumnElement: null,
    columnResizing: false,
    colReorderIconWidth: null,
    colReorderIconHeight: null,
    draggedColumn: null,
    draggedRowIndex: null,
    droppedRowIndex: null,
    rowDragging: null,
    columnWidthsState: null,
    tableWidthState: null,
    columnWidthsRestored: false,
    watch: {
        first(newValue) {
            this.d_first = newValue;
        },
        rows(newValue) {
            this.d_rows = newValue;
        },
        sortField(newValue) {
            this.d_sortField = newValue;
        },
        sortOrder(newValue) {
            this.d_sortOrder = newValue;
        },
        multiSortMeta(newValue) {
            this.d_multiSortMeta = newValue;
        },
        selection: {
            immediate: true,
            handler(newValue) {
                if (this.dataKey) {
                    this.updateSelectionKeys(newValue);
                }
            }
        },
        expandedRows(newValue) {
            if (this.dataKey) {
                this.updateExpandedRowKeys(newValue);
            }
        },
        editingRows(newValue) {
            if (this.dataKey) {
                this.updateEditingRowKeys(newValue);
            }
        },
        filters: {
            deep: true,
            handler: function(newValue) {
                this.d_filters = this.cloneFilters(newValue);
            }
        }
    },
    beforeMount() {
        if (this.isStateful()) {
            this.restoreState();
        }
    },
    mounted() {
        this.$el.setAttribute(this.attributeSelector, '');

        if (this.responsiveLayout === 'stack' && !this.scrollable) {
            this.createResponsiveStyle();
        }

        if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
        }

        if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {
            this.updateEditingRowKeys(this.editingRows);
        }
    },
    beforeUnmount() {
        this.unbindColumnResizeEvents();
        this.destroyStyleElement();
        this.destroyResponsiveStyle();
    },
    updated() {
        if (this.isStateful()) {
            this.saveState();
        }

        if (this.editMode === 'row' && this.dataKey && !this.d_editingRowKeys) {
            this.updateEditingRowKeys(this.editingRows);
        }
    },
    methods: {
        columnProp(col, prop) {
            return utils.ObjectUtils.getVNodeProp(col, prop);
        },
        onPage(event) {
            this.clearEditingMetaData();

            this.d_first = event.first;
            this.d_rows = event.rows;

            let pageEvent = this.createLazyLoadEvent(event);
            pageEvent.pageCount = event.pageCount;
            pageEvent.page = event.page;

            this.$emit('update:first', this.d_first);
            this.$emit('update:rows', this.d_rows);
            this.$emit('page', pageEvent);
            this.$emit('value-change', this.processedData);
        },
        onColumnHeaderClick(e) {
            const event = e.originalEvent;
            const column = e.column;

            if (this.columnProp(column, 'sortable')) {
                const targetNode = event.target;
                const columnField = this.columnProp(column, 'sortField') || this.columnProp(column, 'field');

                if (utils.DomHandler.hasClass(targetNode, 'p-sortable-column') || utils.DomHandler.hasClass(targetNode, 'p-column-title') || utils.DomHandler.hasClass(targetNode, 'p-column-header-content')
                    || utils.DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || utils.DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
                    utils.DomHandler.clearSelection();

                    if (this.sortMode === 'single') {
                        if (this.d_sortField === columnField) {
                            if (this.removableSort && (this.d_sortOrder * -1 === this.defaultSortOrder)) {
                                this.d_sortOrder = null;
                                this.d_sortField = null;
                            }
                            else {
                                this.d_sortOrder = this.d_sortOrder * -1;
                            }
                        }
                        else {
                            this.d_sortOrder = this.defaultSortOrder;
                            this.d_sortField = columnField;
                        }

                        this.$emit('update:sortField', this.d_sortField);
                        this.$emit('update:sortOrder', this.d_sortOrder);
                        this.resetPage();
                    }
                    else if (this.sortMode === 'multiple') {
                        let metaKey = event.metaKey || event.ctrlKey;
                        if (!metaKey) {
                            this.d_multiSortMeta =  this.d_multiSortMeta.filter(meta => meta.field === columnField);
                        }

                        this.addMultiSortField(columnField);
                        this.$emit('update:multiSortMeta', this.d_multiSortMeta);
                    }

                    this.$emit('sort', this.createLazyLoadEvent(event));
                    this.$emit('value-change', this.processedData);
                }
            }
        },
        sortSingle(value) {
            this.clearEditingMetaData();

            if (this.groupRowsBy && this.groupRowsBy === this.sortField) {
                this.d_multiSortMeta = [
                    {field: this.sortField, order: this.sortOrder || this.defaultSortOrder},
                    {field: this.d_sortField, order: this.d_sortOrder}
                ];

                return this.sortMultiple(value);
            }

            let data = [...value];

            data.sort((data1, data2) => {
                let value1 = utils.ObjectUtils.resolveFieldData(data1, this.d_sortField);
                let value2 = utils.ObjectUtils.resolveFieldData(data2, this.d_sortField);

                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.d_sortOrder * result);
            });

            return data;
        },
        sortMultiple(value) {
            this.clearEditingMetaData();

            if (this.groupRowsBy && (this.d_groupRowsSortMeta || (this.d_multiSortMeta.length && this.groupRowsBy === this.d_multiSortMeta[0].field))) {
                const firstSortMeta = this.d_multiSortMeta[0];
                !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = firstSortMeta);

                if (firstSortMeta.field !== this.d_groupRowsSortMeta.field) {
                    this.d_multiSortMeta = [this.d_groupRowsSortMeta, ...this.d_multiSortMeta];
                }
            }

            let data = [...value];

            data.sort((data1, data2) => {
                return this.multisortField(data1, data2, 0);
            });

            return data;
        },
        multisortField(data1, data2, index) {
            const value1 = utils.ObjectUtils.resolveFieldData(data1, this.d_multiSortMeta[index].field);
            const value2 = utils.ObjectUtils.resolveFieldData(data2, this.d_multiSortMeta[index].field);
            let result = null;

            if (typeof value1 === 'string' || value1 instanceof String) {
                if (value1.localeCompare && (value1 !== value2)) {
                    return (this.d_multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
                }
            }
            else {
                result = (value1 < value2) ? -1 : 1;
            }

            if (value1 === value2)  {
                return (this.d_multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, index + 1)) : 0;
            }

            return (this.d_multiSortMeta[index].order * result);
        },
        addMultiSortField(field) {
            let index =  this.d_multiSortMeta.findIndex(meta => meta.field === field);

            if (index >= 0) {
                if (this.removableSort && (this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder))
                    this.d_multiSortMeta.splice(index, 1);
                else
                    this.d_multiSortMeta[index] = {field: field, order: this.d_multiSortMeta[index].order * -1};
            }
            else {
                this.d_multiSortMeta.push({field: field, order: this.defaultSortOrder});
            }

            this.d_multiSortMeta = [...this.d_multiSortMeta];
        },
        filter(data) {
            if (!data) {
                return;
            }

            this.clearEditingMetaData();

            let globalFilterFieldsArray;
            if (this.filters['global']) {
                globalFilterFieldsArray = this.globalFilterFields|| this.columns.map(col => this.columnProp(col, 'filterField') || this.columnProp(col, 'field'));
            }

            let filteredValue = [];

            for (let i = 0; i < data.length; i++) {
                let localMatch = true;
                let globalMatch = false;
                let localFiltered = false;

                for (let prop in this.filters) {
                    if (Object.prototype.hasOwnProperty.call(this.filters, prop) && prop !== 'global') {
                        localFiltered = true;
                        let filterField = prop;
                        let filterMeta = this.filters[filterField];

                        if (filterMeta.operator) {
                            for (let filterConstraint of filterMeta.constraints) {
                                localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint);

                                if ((filterMeta.operator === api.FilterOperator.OR && localMatch) || (filterMeta.operator === api.FilterOperator.AND && !localMatch)) {
                                    break;
                                }
                            }
                        }
                        else {
                            localMatch = this.executeLocalFilter(filterField, data[i], filterMeta);
                        }

                        if (!localMatch) {
                            break;
                        }
                    }
                }

                if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                    for(let j = 0; j < globalFilterFieldsArray.length; j++) {
                        let globalFilterField = globalFilterFieldsArray[j];
                        globalMatch = api.FilterService.filters[this.filters['global'].matchMode || api.FilterMatchMode.CONTAINS](utils.ObjectUtils.resolveFieldData(data[i], globalFilterField), this.filters['global'].value, this.filterLocale);

                        if (globalMatch) {
                            break;
                        }
                    }
                }

                let matches;
                if (this.filters['global']) {
                    matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
                }
                else {
                    matches = localFiltered && localMatch;
                }

                if (matches) {
                    filteredValue.push(data[i]);
                }
            }

            if (filteredValue.length === this.value.length) {
                filteredValue = data;
            }

            let filterEvent = this.createLazyLoadEvent();
            filterEvent.filteredValue = filteredValue;
            this.$emit('filter', filterEvent);
            this.$emit('value-change', filteredValue);

            return filteredValue;
        },
        executeLocalFilter(field, rowData, filterMeta) {
            let filterValue = filterMeta.value;
            let filterMatchMode = filterMeta.matchMode || api.FilterMatchMode.STARTS_WITH;
            let dataFieldValue = utils.ObjectUtils.resolveFieldData(rowData, field);
            let filterConstraint = api.FilterService.filters[filterMatchMode];

            return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
        },
        onRowClick(e) {
            const event = e.originalEvent;
            if (utils.DomHandler.isClickable(event.target)) {
                return;
            }

            this.$emit('row-click', e);

            if (this.selectionMode) {
                const rowData = e.data;
                const rowIndex = this.d_first + e.index;

                if (this.isMultipleSelectionMode() && event.shiftKey && this.anchorRowIndex != null) {
                    utils.DomHandler.clearSelection();
                    this.rangeRowIndex = rowIndex;
                    this.selectRange(event);
                }
                else {
                    const selected = this.isSelected(rowData);
                    const metaSelection = this.rowTouched ? false : this.metaKeySelection;
                    this.anchorRowIndex = rowIndex;
                    this.rangeRowIndex = rowIndex;

                    if (metaSelection) {
                        let metaKey = event.metaKey || event.ctrlKey;

                        if (selected && metaKey) {
                            if(this.isSingleSelectionMode()) {
                                this.$emit('update:selection', null);
                            }
                            else {
                                const selectionIndex = this.findIndexInSelection(rowData);
                                const _selection = this.selection.filter((val,i) => i != selectionIndex);
                                this.$emit('update:selection', _selection);
                            }

                            this.$emit('row-unselect', {originalEvent: event, data: rowData, index: rowIndex, type: 'row'});
                        }
                        else {
                            if(this.isSingleSelectionMode()) {
                                this.$emit('update:selection', rowData);
                            }
                            else if (this.isMultipleSelectionMode()) {
                                let _selection = metaKey ? (this.selection || []) : [];
                                _selection = [..._selection, rowData];
                                this.$emit('update:selection', _selection);
                            }

                            this.$emit('row-select', {originalEvent: event, data: rowData, index: rowIndex, type: 'row'});
                        }
                    }
                    else {
                        if (this.selectionMode === 'single') {
                            if (selected) {
                                this.$emit('update:selection', null);
                                this.$emit('row-unselect', {originalEvent: event, data: rowData, index: rowIndex, type: 'row'});
                            }
                            else {
                                this.$emit('update:selection', rowData);
                                this.$emit('row-select', {originalEvent: event, data: rowData, index: rowIndex, type: 'row'});
                            }
                        }
                        else if (this.selectionMode === 'multiple') {
                            if (selected) {
                                const selectionIndex = this.findIndexInSelection(rowData);
                                const _selection = this.selection.filter((val, i) => i != selectionIndex);
                                this.$emit('update:selection', _selection);
                                this.$emit('row-unselect', {originalEvent: event, data: rowData, index: rowIndex, type: 'row'});
                            }
                            else {
                                const _selection = this.selection ? [...this.selection, rowData] : [rowData];
                                this.$emit('update:selection', _selection);
                                this.$emit('row-select', {originalEvent: event, data: rowData, index: rowIndex, type: 'row'});
                            }
                        }
                    }
                }
            }

            this.rowTouched = false;
        },
        onRowDblClick(e) {
            const event = e.originalEvent;
            if (utils.DomHandler.isClickable(event.target)) {
                return;
            }

            this.$emit('row-dblclick', e);
        },
        onRowRightClick(event) {
            utils.DomHandler.clearSelection();
            event.originalEvent.target.focus();

            this.$emit('update:contextMenuSelection', event.data);
            this.$emit('row-contextmenu', event);
        },
        onRowTouchEnd() {
            this.rowTouched = true;
        },
        onRowKeyDown(e) {
            const event = e.originalEvent;
            const rowData = e.data;
            const rowIndex = e.index;

            if (this.selectionMode) {
                const row = event.target;

                switch (event.which) {
                    //down arrow
                    case 40:
                        var nextRow = this.findNextSelectableRow(row);
                        if (nextRow) {
                            nextRow.focus();
                        }

                        event.preventDefault();
                    break;

                    //up arrow
                    case 38:
                        var prevRow = this.findPrevSelectableRow(row);
                        if (prevRow) {
                            prevRow.focus();
                        }

                        event.preventDefault();
                    break;

                    //enter
                    case 13:
                        this.onRowClick({originalEvent: event, data: rowData, index: rowIndex});
                    break;
                }
            }
        },
        findNextSelectableRow(row) {
            let nextRow = row.nextElementSibling;
            if (nextRow) {
                if (utils.DomHandler.hasClass(nextRow, 'p-selectable-row'))
                    return nextRow;
                else
                    return this.findNextSelectableRow(nextRow);
            }
            else {
                return null;
            }
        },
        findPrevSelectableRow(row) {
            let prevRow = row.previousElementSibling;
            if (prevRow) {
                if (utils.DomHandler.hasClass(prevRow, 'p-selectable-row'))
                    return prevRow;
                else
                    return this.findPrevSelectableRow(prevRow);
            }
            else {
                return null;
            }
        },
        toggleRowWithRadio(event) {
            const rowData = event.data;

            if (this.isSelected(rowData)) {
                this.$emit('update:selection', null);
                this.$emit('row-unselect', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'radiobutton' });
            }
            else {
                this.$emit('update:selection', rowData);
                this.$emit('row-select', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'radiobutton' });
            }
        },
        toggleRowWithCheckbox(event) {
            const rowData = event.data;

            if (this.isSelected(rowData)) {
                const selectionIndex = this.findIndexInSelection(rowData);
                const _selection = this.selection.filter((val, i) => i != selectionIndex);
                this.$emit('update:selection', _selection);
                this.$emit('row-unselect', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'checkbox' });
            }
            else {
                let _selection = this.selection ? [...this.selection] : [];
                _selection = [..._selection, rowData];
                this.$emit('update:selection', _selection);
                this.$emit('row-select', { originalEvent: event.originalEvent, data: rowData, index: event.index, type: 'checkbox' });
            }
        },
        toggleRowsWithCheckbox(event) {
            if (this.selectAll !== null) {
                this.$emit('select-all-change', event);
            }
            else {
                const { originalEvent, checked } = event;
                let _selection = [];

                if (checked) {
                    _selection = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData;
                    this.$emit('row-select-all', {originalEvent, data: _selection});
                }
                else {
                    this.$emit('row-unselect-all', {originalEvent});
                }

                this.$emit('update:selection', _selection);

            }
        },
        isSingleSelectionMode() {
            return this.selectionMode === 'single';
        },
        isMultipleSelectionMode() {
            return this.selectionMode === 'multiple';
        },
        isSelected(rowData) {
            if (rowData && this.selection) {
                if (this.dataKey) {
                    return this.d_selectionKeys ? this.d_selectionKeys[utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                }
                else {
                    if (this.selection instanceof Array)
                        return this.findIndexInSelection(rowData) > -1;
                    else
                        return this.equals(rowData, this.selection);
                }
            }

            return false;
        },
        findIndexInSelection(rowData) {
            return this.findIndex(rowData, this.selection);
        },
        findIndex(rowData, collection) {
            let index = -1;
            if (collection && collection.length) {
                for (let i = 0; i < collection.length; i++) {
                    if (this.equals(rowData, collection[i])) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        },
        updateSelectionKeys(selection) {
            this.d_selectionKeys = {};
            if (Array.isArray(selection)) {
                for (let data of selection) {
                    this.d_selectionKeys[String(utils.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.d_selectionKeys[String(utils.ObjectUtils.resolveFieldData(selection, this.dataKey))] = 1;
            }
        },
        updateExpandedRowKeys(expandedRows) {
            if (expandedRows && expandedRows.length) {
                this.d_expandedRowKeys = {};
                for (let data of expandedRows) {
                    this.d_expandedRowKeys[String(utils.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.d_expandedRowKeys = null;
            }
        },
        updateEditingRowKeys(editingRows) {
            if (editingRows && editingRows.length) {
                this.d_editingRowKeys = {};
                for (let data of editingRows) {
                    this.d_editingRowKeys[String(utils.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.d_editingRowKeys = null;
            }
        },
        equals(data1, data2) {
            return this.compareSelectionBy === 'equals' ? (data1 === data2) : utils.ObjectUtils.equals(data1, data2, this.dataKey);
        },
        selectRange(event) {
            let rangeStart, rangeEnd;

            if (this.rangeRowIndex > this.anchorRowIndex) {
                rangeStart = this.anchorRowIndex;
                rangeEnd = this.rangeRowIndex;
            }
            else if(this.rangeRowIndex < this.anchorRowIndex) {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.anchorRowIndex;
            }
            else {
                rangeStart = this.rangeRowIndex;
                rangeEnd = this.rangeRowIndex;
            }

            if (this.lazy && this.paginator) {
                rangeStart -= this.first;
                rangeEnd -= this.first;
            }

            const value = this.processedData;
            let _selection = [];
            for(let i = rangeStart; i <= rangeEnd; i++) {
                let rangeRowData = value[i];
                _selection.push(rangeRowData);
                this.$emit('row-select', {originalEvent: event, data: rangeRowData, type: 'row'});
            }

            this.$emit('update:selection', _selection);
        },
        exportCSV(options, data) {
            let csv = '\ufeff';

            if (!data) {
                data = this.processedData;

                if (options && options.selectionOnly)
                    data = this.selection || [];
                else if (this.frozenValue)
                    data = data ? [...this.frozenValue, ...data] : this.frozenValue;
            }

            //headers
            let headerInitiated = false;
            for (let i = 0; i < this.columns.length; i++) {
                let column = this.columns[i];

                if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'field')) {
                    if (headerInitiated)
                        csv += this.csvSeparator;
                    else
                        headerInitiated = true;

                    csv += '"' + (this.columnProp(column, 'exportHeader') || this.columnProp(column, 'header') || this.columnProp(column, 'field')) + '"';
                }
            }

            //body
            if (data) {
                data.forEach(record => {
                    csv += '\n';
                    let rowInitiated = false;
                    for (let i = 0; i < this.columns.length; i++) {
                        let column = this.columns[i];
                        if (this.columnProp(column, 'exportable') !== false && this.columnProp(column, 'field')) {
                            if (rowInitiated)
                                csv += this.csvSeparator;
                            else
                                rowInitiated = true;

                            let cellData = utils.ObjectUtils.resolveFieldData(record, this.columnProp(column, 'field'));

                            if (cellData != null) {
                                if (this.exportFunction) {
                                    cellData = this.exportFunction({
                                        data: cellData,
                                        field: this.columnProp(column, 'field')
                                    });
                                }
                                else
                                    cellData = String(cellData).replace(/"/g, '""');
                            }
                            else
                                cellData = '';

                            csv += '"' + cellData + '"';
                        }
                    }
                });
            }

            utils.DomHandler.exportCSV(csv, this.exportFilename);
        },
        resetPage() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
        },
        onColumnResizeStart(event) {
            let containerLeft = utils.DomHandler.getOffset(this.$el).left;
            this.resizeColumnElement = event.target.parentElement;
            this.columnResizing = true;
            this.lastResizeHelperX = (event.pageX - containerLeft + this.$el.scrollLeft);

            this.bindColumnResizeEvents();
        },
        onColumnResize(event) {
            let containerLeft = utils.DomHandler.getOffset(this.$el).left;
            utils.DomHandler.addClass(this.$el, 'p-unselectable-text');
            this.$refs.resizeHelper.style.height = this.$el.offsetHeight + 'px';
            this.$refs.resizeHelper.style.top = 0 + 'px';
            this.$refs.resizeHelper.style.left = (event.pageX - containerLeft + this.$el.scrollLeft) + 'px';

            this.$refs.resizeHelper.style.display = 'block';
        },
        onColumnResizeEnd() {
            let delta = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX;
            let columnWidth = this.resizeColumnElement.offsetWidth;
            let newColumnWidth = columnWidth + delta;
            let minWidth = this.resizeColumnElement.style.minWidth||15;

            if (columnWidth + delta > parseInt(minWidth, 10)) {
                if (this.columnResizeMode === 'fit') {
                    let nextColumn = this.resizeColumnElement.nextElementSibling;
                    let nextColumnWidth = nextColumn.offsetWidth - delta;

                    if (newColumnWidth > 15 && nextColumnWidth > 15) {
                        this.resizeTableCells(newColumnWidth, nextColumnWidth);
                    }
                }
                else if (this.columnResizeMode === 'expand') {
                    const tableWidth = this.$refs.table.offsetWidth + delta + 'px';
                    this.$refs.table.style.width = tableWidth;
                    this.$refs.table.style.minWidth = tableWidth;

                    this.resizeTableCells(newColumnWidth);
                }

                this.$emit('column-resize-end', {
                    element: this.resizeColumnElement,
                    delta: delta
                });
            }

            this.$refs.resizeHelper.style.display = 'none';
            this.resizeColumn = null;
            utils.DomHandler.removeClass(this.$el, 'p-unselectable-text');

            this.unbindColumnResizeEvents();

            if (this.isStateful()) {
                this.saveState();
            }
        },
        resizeTableCells(newColumnWidth, nextColumnWidth) {
            let colIndex = utils.DomHandler.index(this.resizeColumnElement);
            let widths = [];
            let headers = utils.DomHandler.find(this.$refs.table, '.p-datatable-thead > tr > th');
            headers.forEach(header => widths.push(utils.DomHandler.getOuterWidth(header)));

            this.destroyStyleElement();
            this.createStyleElement();

            let innerHTML = '';
            widths.forEach((width, index) => {
                let colWidth = index === colIndex ? newColumnWidth : (nextColumnWidth && index === colIndex + 1) ? nextColumnWidth : width;
                let style = this.scrollable ? `flex: 1 1 ${colWidth}px !important` : `width: ${colWidth}px !important`;
                innerHTML += `
                    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}),
                    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                        ${style}
                    }
                `;
            });

            this.styleElement.innerHTML = innerHTML;
        },
        bindColumnResizeEvents() {
            if (!this.documentColumnResizeListener) {
                this.documentColumnResizeListener = document.addEventListener('mousemove', () => {
                    if(this.columnResizing) {
                        this.onColumnResize(event);
                    }
                });
            }

            if (!this.documentColumnResizeEndListener) {
                this.documentColumnResizeEndListener = document.addEventListener('mouseup', () => {
                    if(this.columnResizing) {
                        this.columnResizing = false;
                        this.onColumnResizeEnd();
                    }
                });
            }

        },
        unbindColumnResizeEvents() {
            if (this.documentColumnResizeListener) {
                document.removeEventListener('document', this.documentColumnResizeListener);
                this.documentColumnResizeListener = null;
            }

            if (this.documentColumnResizeEndListener) {
                document.removeEventListener('document', this.documentColumnResizeEndListener);
                this.documentColumnResizeEndListener = null;
            }
        },
        onColumnHeaderMouseDown(e) {
            const event = e.originalEvent;
            const column = e.column;

            if (this.reorderableColumns && this.columnProp(column, 'reorderableColumn') !== false) {
                if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || utils.DomHandler.hasClass(event.target, 'p-column-resizer'))
                    event.currentTarget.draggable = false;
                else
                    event.currentTarget.draggable = true;
            }
        },
        onColumnHeaderDragStart(event) {
            if (this.columnResizing) {
                event.preventDefault();
                return;
            }

            this.colReorderIconWidth = utils.DomHandler.getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp);
            this.colReorderIconHeight = utils.DomHandler.getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp);

            this.draggedColumn = this.findParentHeader(event.target);
            event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
        },
        onColumnHeaderDragOver(event) {
            let dropHeader = this.findParentHeader(event.target);
            if(this.reorderableColumns && this.draggedColumn && dropHeader) {
                event.preventDefault();
                let containerOffset = utils.DomHandler.getOffset(this.$el);
                let dropHeaderOffset = utils.DomHandler.getOffset(dropHeader);

                if (this.draggedColumn !== dropHeader) {
                    let targetLeft =  dropHeaderOffset.left - containerOffset.left;
                    let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;

                    this.$refs.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px';
                    this.$refs.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                    if(event.pageX > columnCenter) {
                        this.$refs.reorderIndicatorUp.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                        this.$refs.reorderIndicatorDown.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2))+ 'px';
                        this.dropPosition = 1;
                    }
                    else {
                        this.$refs.reorderIndicatorUp.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                        this.$refs.reorderIndicatorDown.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2))+ 'px';
                        this.dropPosition = -1;
                    }

                    this.$refs.reorderIndicatorUp.style.display = 'block';
                    this.$refs.reorderIndicatorDown.style.display = 'block';
                }
            }
        },
        onColumnHeaderDragLeave(event) {
            if(this.reorderableColumns && this.draggedColumn) {
                event.preventDefault();
                this.$refs.reorderIndicatorUp.style.display = 'none';
                this.$refs.reorderIndicatorDown.style.display = 'none';
            }
        },
        onColumnHeaderDrop(event) {
            event.preventDefault();
            if (this.draggedColumn) {
                let dragIndex = utils.DomHandler.index(this.draggedColumn);
                let dropIndex = utils.DomHandler.index(this.findParentHeader(event.target));
                let allowDrop = (dragIndex !== dropIndex);
                if (allowDrop && ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dragIndex - dropIndex === 1 && this.dropPosition === 1))) {
                    allowDrop = false;
                }

                if (allowDrop) {
                    utils.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                    this.updateReorderableColumns();

                    this.$emit('column-reorder', {
                        originalEvent: event,
                        dragIndex: dragIndex,
                        dropIndex: dropIndex
                    });
                }

                this.$refs.reorderIndicatorUp.style.display = 'none';
                this.$refs.reorderIndicatorDown.style.display = 'none';
                this.draggedColumn.draggable = false;
                this.draggedColumn = null;
                this.dropPosition = null;
            }
        },
        findParentHeader(element) {
            if(element.nodeName === 'TH') {
                return element;
            }
            else {
                let parent = element.parentElement;
                while(parent.nodeName !== 'TH') {
                    parent = parent.parentElement;
                    if (!parent) break;
                }
                return parent;
            }
        },
        findColumnByKey(columns, key) {
            if (columns && columns.length) {
                for (let i = 0; i < columns.length; i++) {
                    let column = columns[i];
                    if (this.columnProp(column, 'columnKey') === key || this.columnProp(column, 'field') === key) {
                        return column;
                    }
                }
            }

            return null;
        },
        onRowMouseDown(event) {
            if (utils.DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))
                event.currentTarget.draggable = true;
            else
                event.currentTarget.draggable = false;
        },
        onRowDragStart(e) {
            const event = e.originalEvent;
            const index = e.index;
            this.rowDragging = true;
            this.draggedRowIndex = index;
            event.dataTransfer.setData('text', 'b');    // For firefox
        },
        onRowDragOver(e) {
            const event = e.originalEvent;
            const index = e.index;

            if (this.rowDragging && this.draggedRowIndex !== index) {
                let rowElement = event.currentTarget;
                let rowY = utils.DomHandler.getOffset(rowElement).top + utils.DomHandler.getWindowScrollTop();
                let pageY = event.pageY;
                let rowMidY = rowY + utils.DomHandler.getOuterHeight(rowElement) / 2;
                let prevRowElement = rowElement.previousElementSibling;

                if (pageY < rowMidY) {
                    utils.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');

                    this.droppedRowIndex = index;
                    if (prevRowElement)
                        utils.DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    else
                        utils.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
                }
                else {
                    if (prevRowElement)
                        utils.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
                    else
                        utils.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');

                    this.droppedRowIndex = index + 1;
                    utils.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
                }

                event.preventDefault();
            }
        },
        onRowDragLeave(event) {
            let rowElement = event.currentTarget;
            let prevRowElement = rowElement.previousElementSibling;
            if (prevRowElement) {
                utils.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
            }

            utils.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
            utils.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
        },
        onRowDragEnd(event) {
            this.rowDragging = false;
            this.draggedRowIndex = null;
            this.droppedRowIndex = null;
            event.currentTarget.draggable = false;
        },
        onRowDrop(event) {
            if (this.droppedRowIndex != null) {
                let dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
                let processedData = [...this.processedData];
                utils.ObjectUtils.reorderArray(processedData, this.draggedRowIndex, dropIndex);

                this.$emit('row-reorder', {
                    originalEvent: event,
                    dragIndex: this.draggedRowIndex,
                    dropIndex: dropIndex,
                    value: processedData
                });
            }

            //cleanup
            this.onRowDragLeave(event);
            this.onRowDragEnd(event);
            event.preventDefault();
        },
        toggleRow(event) {
            let rowData = event.data;
            let expanded;
            let expandedRowIndex;
            let _expandedRows = this.expandedRows ? [...this.expandedRows] : [];

            if (this.dataKey) {
                expanded = this.d_expandedRowKeys ? this.d_expandedRowKeys[utils.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
            }
            else {
                expandedRowIndex = this.findIndex(rowData, this.expandedRows);
                expanded = expandedRowIndex > -1;
            }

            if (expanded) {
                if (expandedRowIndex == null) {
                    expandedRowIndex = this.findIndex(rowData, this.expandedRows);
                }
                _expandedRows.splice(expandedRowIndex, 1);
                this.$emit('update:expandedRows', _expandedRows);
                this.$emit('row-collapse', event);
            }
            else {
                _expandedRows.push(rowData);
                this.$emit('update:expandedRows', _expandedRows);
                this.$emit('row-expand', event);
            }
        },
        toggleRowGroup(e) {
            const event = e.originalEvent;
            const data = e.data;
            const groupFieldValue = utils.ObjectUtils.resolveFieldData(data, this.groupRowsBy);
            let _expandedRowGroups = this.expandedRowGroups ? [...this.expandedRowGroups] : [];

            if (this.isRowGroupExpanded(data)) {
                _expandedRowGroups = _expandedRowGroups.filter(group => group !== groupFieldValue);
                this.$emit('update:expandedRowGroups', _expandedRowGroups);
                this.$emit('rowgroup-collapse', {originalEvent: event, data: groupFieldValue});
            }
            else {
                _expandedRowGroups.push(groupFieldValue);
                this.$emit('update:expandedRowGroups', _expandedRowGroups);
                this.$emit('rowgroup-expand', {originalEvent: event, data: groupFieldValue});
            }
        },
        isRowGroupExpanded(rowData) {
            if (this.expandableRowGroups && this.expandedRowGroups) {
                let groupFieldValue = utils.ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
            }
            return false;
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
            const storage = this.getStorage();
            let state = {};

            if (this.paginator) {
                state.first = this.d_first;
                state.rows = this.d_rows;
            }

            if (this.d_sortField) {
                state.sortField = this.d_sortField;
                state.sortOrder = this.d_sortOrder;
            }

            if (this.d_multiSortMeta) {
                state.multiSortMeta = this.d_multiSortMeta;
            }

            if (this.hasFilters) {
                state.filters = this.filters;
            }

            if (this.resizableColumns) {
                this.saveColumnWidths(state);
            }

            if (this.reorderableColumns) {
                state.columnOrder = this.d_columnOrder;
            }

            if (this.expandedRows) {
                state.expandedRows = this.expandedRows;
                state.expandedRowKeys = this.d_expandedRowKeys;
            }

            if (this.expandedRowGroups) {
                state.expandedRowGroups = this.expandedRowGroups;
            }

            if (this.selection) {
                state.selection = this.selection;
                state.selectionKeys = this.d_selectionKeys;
            }

            if (Object.keys(state).length) {
                storage.setItem(this.stateKey, JSON.stringify(state));
            }

            this.$emit('state-save', state);
        },
        restoreState() {
            const storage = this.getStorage();
            const stateString = storage.getItem(this.stateKey);
            const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
            const reviver = function(key, value) {
                if (typeof value === "string" && dateFormat.test(value)) {
                    return new Date(value);
                }

                return value;
            };

            if (stateString) {
                let restoredState = JSON.parse(stateString, reviver);

                if (this.paginator) {
                    this.d_first = restoredState.first;
                    this.d_rows = restoredState.rows;
                }

                if (restoredState.sortField) {
                    this.d_sortField = restoredState.sortField;
                    this.d_sortOrder = restoredState.sortOrder;
                }

                if (restoredState.multiSortMeta) {
                    this.d_multiSortMeta = restoredState.multiSortMeta;
                }

                if (restoredState.filters) {
                    this.$emit('update:filters', restoredState.filters);
                }

                if (this.resizableColumns) {
                    this.columnWidthsState = restoredState.columnWidths;
                    this.tableWidthState = restoredState.tableWidth;
                }

                if (this.reorderableColumns) {
                    this.d_columnOrder = restoredState.columnOrder;
                }

                if (restoredState.expandedRows) {
                    this.d_expandedRowKeys = restoredState.expandedRowKeys;
                    this.$emit('update:expandedRows', restoredState.expandedRows);
                }

                if (restoredState.expandedRowGroups) {
                    this.$emit('update:expandedRowGroups', restoredState.expandedRowGroups);
                }

                if (restoredState.selection) {
                    this.d_selectionKeys = restoredState.d_selectionKeys;
                    this.$emit('update:selection', restoredState.selection);
                }

                this.$emit('state-restore', restoredState);
            }
        },
        saveColumnWidths(state) {
            let widths = [];
            let headers = utils.DomHandler.find(this.$el, '.p-datatable-thead > tr > th');
            headers.forEach(header => widths.push(utils.DomHandler.getOuterWidth(header)));
            state.columnWidths = widths.join(',');

            if (this.columnResizeMode === 'expand') {
                state.tableWidth = utils.DomHandler.getOuterWidth(this.$refs.table) + 'px';
            }
        },
        restoreColumnWidths() {
            if (this.columnWidthsState) {
                let widths = this.columnWidthsState.split(',');

                if (this.columnResizeMode === 'expand' && this.tableWidthState) {
                    this.$refs.table.style.width = this.tableWidthState;
                    this.$refs.table.style.minWidth = this.tableWidthState;
                    this.$el.style.width = this.tableWidthState;
                }

                if (utils.ObjectUtils.isNotEmpty(widths)) {
                    this.createStyleElement();

                    let innerHTML = '';
                    widths.forEach((width, index) => {
                        let style = this.scrollable ? `flex: 1 1 ${width}px !important` : `width: ${width}px !important`;
                        innerHTML += `
                            .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}),
                            .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                            .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                                ${style}
                            }
                        `;
                    });

                    this.styleElement.innerHTML = innerHTML;
                }
            }
        },
        onCellEditInit(event) {
            this.$emit('cell-edit-init', event);
        },
        onCellEditComplete(event) {
            this.$emit('cell-edit-complete', event);
        },
        onCellEditCancel(event) {
            this.$emit('cell-edit-cancel', event);
        },
        onRowEditInit(event) {
            let _editingRows = this.editingRows ? [...this.editingRows] : [];
            _editingRows.push(event.data);
            this.$emit('update:editingRows', _editingRows);
            this.$emit('row-edit-init', event);
        },
        onRowEditSave(event) {
            let _editingRows = [...this.editingRows];
            _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
            this.$emit('update:editingRows', _editingRows);
            this.$emit('row-edit-save', event);
        },
        onRowEditCancel(event) {
            let _editingRows = [...this.editingRows];
            _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
            this.$emit('update:editingRows', _editingRows);
            this.$emit('row-edit-cancel', event);
        },
        onEditingMetaChange(event) {
            let { data, field, index, editing } = event;
            let editingMeta = { ...this.d_editingMeta };
            let meta = editingMeta[index];

            if (editing) {
                !meta && (meta = editingMeta[index] = { data: { ...data }, fields: [] });
                meta['fields'].push(field);
            }
            else if (meta) {
                const fields = meta['fields'].filter(f => f !== field);
                !fields.length ? (delete editingMeta[index]) : (meta['fields'] = fields);
            }

            this.d_editingMeta = editingMeta;
        },
        clearEditingMetaData() {
            if (this.editMode) {
                this.d_editingMeta = {};
            }
        },
        createLazyLoadEvent(event) {
            return {
                originalEvent: event,
                first: this.d_first,
                rows: this.d_rows,
                sortField: this.d_sortField,
                sortOrder: this.d_sortOrder,
                multiSortMeta: this.d_multiSortMeta,
                filters: this.d_filters
            };
        },
        hasGlobalFilter() {
            return this.filters && Object.prototype.hasOwnProperty.call(this.filters, 'global');
        },
        getChildren() {
            return this.$slots.default ? this.$slots.default() : null;
        },
        onFilterChange(filters) {
            this.d_filters = filters;
        },
        onFilterApply() {
            this.d_first = 0;
            this.$emit('update:first', this.d_first);
            this.$emit('update:filters', this.d_filters);

            if (this.lazy) {
                this.$emit('filter', this.createLazyLoadEvent());
            }
        },
        cloneFilters() {
            let cloned = {};
            if (this.filters) {
                Object.entries(this.filters).forEach(([prop,value]) => {
                    cloned[prop] = value.operator ? {operator: value.operator, constraints: value.constraints.map(constraint => {return {...constraint}})} : {...value};
                });
            }

            return cloned;
        },
        updateReorderableColumns() {
            let columnOrder = [];
            this.columns.forEach(col => columnOrder.push(this.columnProp(col, 'columnKey')||this.columnProp(col, 'field')));
            this.d_columnOrder = columnOrder;
        },
        createStyleElement() {
            this.styleElement = document.createElement('style');
            this.styleElement.type = 'text/css';
            document.head.appendChild(this.styleElement);
        },
        createResponsiveStyle() {
			if (!this.responsiveStyleElement) {
				this.responsiveStyleElement = document.createElement('style');
				this.responsiveStyleElement.type = 'text/css';
				document.head.appendChild(this.responsiveStyleElement);

                let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th,
    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    .p-datatable[${this.attributeSelector}].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;

                this.responsiveStyleElement.innerHTML = innerHTML;
			}
		},
        destroyResponsiveStyle() {
            if (this.responsiveStyleElement) {
                document.head.removeChild(this.responsiveStyleElement);
                this.responsiveStyleElement = null;
            }
        },
        destroyStyleElement() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        },
        recursiveGetChildren(children, results) {
            if (!results) {
                results = [];
            }
            if (children && children.length) {
                children.forEach((child) => {
                    if (child.children instanceof Array) {
                        results.concat(this.recursiveGetChildren(child.children, results));
                    } else if (child.type.name == 'Column') {
                        results.push(child);
                    }
                });
            }
            return results;
        },
        dataToRender(data) {
            const _data = data || this.processedData;

            if (_data && this.paginator) {
                const first = this.lazy ? 0 : this.d_first;
                return _data.slice(first, first + this.d_rows);
            }

            return _data;
        }
    },
    computed: {
        containerClass() {
            return [
                'p-datatable p-component', {
                    'p-datatable-hoverable-rows': (this.rowHover || this.selectionMode),
                    'p-datatable-auto-layout': this.autoLayout,
                    'p-datatable-resizable': this.resizableColumns,
                    'p-datatable-resizable-fit': this.resizableColumns && this.columnResizeMode === 'fit',
                    'p-datatable-scrollable': this.scrollable,
                    'p-datatable-scrollable-vertical': this.scrollable && this.scrollDirection === 'vertical',
                    'p-datatable-scrollable-horizontal': this.scrollable && this.scrollDirection === 'horizontal',
                    'p-datatable-scrollable-both': this.scrollable && this.scrollDirection === 'both',
                    'p-datatable-flex-scrollable': (this.scrollable && this.scrollHeight === 'flex'),
                    'p-datatable-responsive-stack': this.responsiveLayout === 'stack',
                    'p-datatable-responsive-scroll': this.responsiveLayout === 'scroll',
                    'p-datatable-striped': this.stripedRows,
                    'p-datatable-gridlines': this.showGridlines,
                    'p-datatable-grouped-header': this.headerColumnGroup != null,
                    'p-datatable-grouped-footer': this.footerColumnGroup != null
                }
            ];
        },
        columns() {
            let children = this.getChildren();

            if (!children) {
                return;
            }

            const cols = this.recursiveGetChildren(children, []);

            if (this.reorderableColumns && this.d_columnOrder) {
                let orderedColumns = [];
                for (let columnKey of this.d_columnOrder) {
                    let column = this.findColumnByKey(cols, columnKey);
                    if (column) {
                        orderedColumns.push(column);
                    }
                }

                return [...orderedColumns, ...cols.filter((item) => orderedColumns.indexOf(item) < 0)];
            }

            return cols;
        },
        headerColumnGroup() {
            const children = this.getChildren();
            if (children) {
                for (let child of children) {
                    if (child.type.name === 'ColumnGroup' && this.columnProp(child, 'type') === 'header') {
                        return child;
                    }
                }
            }

            return null;
        },
        footerColumnGroup() {
            const children = this.getChildren();
            if (children) {
                for (let child of children) {
                    if (child.type.name === 'ColumnGroup' && this.columnProp(child, 'type') === 'footer') {
                        return child;
                    }
                }
            }

            return null;
        },
        hasFilters() {
            return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
        },
        processedData() {
            let data = this.value || [];

            if (!this.lazy) {
                if (data && data.length) {
                    if (this.hasFilters) {
                        data = this.filter(data);
                    }

                    if (this.sorted) {
                        if(this.sortMode === 'single')
                            data = this.sortSingle(data);
                        else if(this.sortMode === 'multiple')
                            data = this.sortMultiple(data);
                    }
                }
            }

            return data;
        },
        totalRecordsLength() {
            if (this.lazy) {
                return this.totalRecords;
            }
            else {
                const data = this.processedData;
                return data ? data.length : 0;
            }
        },
        empty() {
            const data = this.processedData;
            return (!data || data.length === 0);
        },
        paginatorTop() {
            return this.paginator && (this.paginatorPosition !== 'bottom' || this.paginatorPosition === 'both');
        },
        paginatorBottom() {
            return this.paginator && (this.paginatorPosition !== 'top' || this.paginatorPosition === 'both');
        },
        sorted() {
            return this.d_sortField || (this.d_multiSortMeta && this.d_multiSortMeta.length > 0);
        },
        loadingIconClass() {
            return ['p-datatable-loading-icon pi-spin', this.loadingIcon];
        },
        allRowsSelected() {
            if (this.selectAll !== null) {
                return this.selectAll;
            }
            else {
                const val = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData;
                return val && this.selection && Array.isArray(this.selection) && val.every(v => this.selection.some(s => this.equals(s, v)));
            }
        },
        attributeSelector() {
            return utils.UniqueComponentId();
        },
        groupRowSortField() {
            return this.sortMode === 'single' ? this.sortField : (this.d_groupRowsSortMeta ? this.d_groupRowsSortMeta.field : null);
        },
        virtualScrollerDisabled() {
            return utils.ObjectUtils.isEmpty(this.virtualScrollerOptions) || !this.scrollable;
        }
    },
    components: {
        'DTPaginator': Paginator__default["default"],
        'DTTableHeader': script$7,
        'DTTableBody': script$3,
        'DTTableFooter': script$1,
        'DTVirtualScroller': VirtualScroller__default["default"]
    }
};

const _hoisted_1 = {
  key: 0,
  class: "p-datatable-loading-overlay p-component-overlay"
};
const _hoisted_2 = {
  key: 1,
  class: "p-datatable-header"
};
const _hoisted_3 = {
  key: 4,
  class: "p-datatable-footer"
};
const _hoisted_4 = {
  ref: "resizeHelper",
  class: "p-column-resizer-helper",
  style: {"display":"none"}
};
const _hoisted_5 = {
  key: 5,
  ref: "reorderIndicatorUp",
  class: "pi pi-arrow-down p-datatable-reorder-indicator-up",
  style: {"position":"absolute","display":"none"}
};
const _hoisted_6 = {
  key: 6,
  ref: "reorderIndicatorDown",
  class: "pi pi-arrow-up p-datatable-reorder-indicator-down",
  style: {"position":"absolute","display":"none"}
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DTPaginator = vue.resolveComponent("DTPaginator");
  const _component_DTTableHeader = vue.resolveComponent("DTTableHeader");
  const _component_DTTableBody = vue.resolveComponent("DTTableBody");
  const _component_DTTableFooter = vue.resolveComponent("DTTableFooter");
  const _component_DTVirtualScroller = vue.resolveComponent("DTVirtualScroller");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.containerClass),
    "data-scrollselectors": ".p-datatable-wrapper"
  }, [
    vue.renderSlot(_ctx.$slots, "default"),
    ($props.loading)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("i", {
            class: vue.normalizeClass($options.loadingIconClass)
          }, null, 2)
        ]))
      : vue.createCommentVNode("", true),
    (_ctx.$slots.header)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "header")
        ]))
      : vue.createCommentVNode("", true),
    ($options.paginatorTop)
      ? (vue.openBlock(), vue.createBlock(_component_DTPaginator, {
          key: 2,
          rows: $data.d_rows,
          first: $data.d_first,
          totalRecords: $options.totalRecordsLength,
          pageLinkSize: $props.pageLinkSize,
          template: $props.paginatorTemplate,
          rowsPerPageOptions: $props.rowsPerPageOptions,
          currentPageReportTemplate: $props.currentPageReportTemplate,
          class: "p-paginator-top",
          onPage: _cache[0] || (_cache[0] = $event => ($options.onPage($event))),
          alwaysShow: $props.alwaysShowPaginator
        }, vue.createSlots({ _: 2 }, [
          (_ctx.$slots.paginatorstart)
            ? {
                name: "start",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "paginatorstart")
                ])
              }
            : undefined,
          (_ctx.$slots.paginatorend)
            ? {
                name: "end",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "paginatorend")
                ])
              }
            : undefined
        ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "alwaysShow"]))
      : vue.createCommentVNode("", true),
    vue.createElementVNode("div", {
      class: "p-datatable-wrapper",
      style: vue.normalizeStyle({ maxHeight: $options.virtualScrollerDisabled ? $props.scrollHeight : '' })
    }, [
      vue.createVNode(_component_DTVirtualScroller, vue.mergeProps($props.virtualScrollerOptions, {
        items: $options.processedData,
        columns: $options.columns,
        style: { height: $props.scrollHeight },
        disabled: $options.virtualScrollerDisabled,
        loaderDisabled: "",
        showSpacer: false
      }), {
        content: vue.withCtx((slotProps) => [
          vue.createElementVNode("table", {
            ref: "table",
            role: "table",
            class: vue.normalizeClass([$props.tableClass, 'p-datatable-table']),
            style: vue.normalizeStyle([$props.tableStyle, slotProps.spacerStyle])
          }, [
            vue.createVNode(_component_DTTableHeader, {
              columnGroup: $options.headerColumnGroup,
              columns: slotProps.columns,
              rowGroupMode: $props.rowGroupMode,
              groupRowsBy: $props.groupRowsBy,
              groupRowSortField: $options.groupRowSortField,
              resizableColumns: $props.resizableColumns,
              allRowsSelected: $options.allRowsSelected,
              empty: $options.empty,
              sortMode: $props.sortMode,
              sortField: $data.d_sortField,
              sortOrder: $data.d_sortOrder,
              multiSortMeta: $data.d_multiSortMeta,
              filters: $data.d_filters,
              filtersStore: $props.filters,
              filterDisplay: $props.filterDisplay,
              onColumnClick: _cache[1] || (_cache[1] = $event => ($options.onColumnHeaderClick($event))),
              onColumnMousedown: _cache[2] || (_cache[2] = $event => ($options.onColumnHeaderMouseDown($event))),
              onFilterChange: $options.onFilterChange,
              onFilterApply: $options.onFilterApply,
              onColumnDragstart: _cache[3] || (_cache[3] = $event => ($options.onColumnHeaderDragStart($event))),
              onColumnDragover: _cache[4] || (_cache[4] = $event => ($options.onColumnHeaderDragOver($event))),
              onColumnDragleave: _cache[5] || (_cache[5] = $event => ($options.onColumnHeaderDragLeave($event))),
              onColumnDrop: _cache[6] || (_cache[6] = $event => ($options.onColumnHeaderDrop($event))),
              onColumnResizestart: _cache[7] || (_cache[7] = $event => ($options.onColumnResizeStart($event))),
              onCheckboxChange: _cache[8] || (_cache[8] = $event => ($options.toggleRowsWithCheckbox($event)))
            }, null, 8, ["columnGroup", "columns", "rowGroupMode", "groupRowsBy", "groupRowSortField", "resizableColumns", "allRowsSelected", "empty", "sortMode", "sortField", "sortOrder", "multiSortMeta", "filters", "filtersStore", "filterDisplay", "onFilterChange", "onFilterApply"]),
            ($props.frozenValue)
              ? (vue.openBlock(), vue.createBlock(_component_DTTableBody, {
                  key: 0,
                  value: $props.frozenValue,
                  frozenRow: true,
                  class: "p-datatable-frozen-tbody",
                  columns: slotProps.columns,
                  dataKey: $props.dataKey,
                  selection: $props.selection,
                  selectionKeys: $data.d_selectionKeys,
                  selectionMode: $props.selectionMode,
                  contextMenu: $props.contextMenu,
                  contextMenuSelection: $props.contextMenuSelection,
                  rowGroupMode: $props.rowGroupMode,
                  groupRowsBy: $props.groupRowsBy,
                  expandableRowGroups: $props.expandableRowGroups,
                  rowClass: $props.rowClass,
                  rowStyle: $props.rowStyle,
                  editMode: $props.editMode,
                  compareSelectionBy: $props.compareSelectionBy,
                  scrollable: $props.scrollable,
                  expandedRowIcon: $props.expandedRowIcon,
                  collapsedRowIcon: $props.collapsedRowIcon,
                  expandedRows: $props.expandedRows,
                  expandedRowKeys: $data.d_expandedRowKeys,
                  expandedRowGroups: $props.expandedRowGroups,
                  editingRows: $props.editingRows,
                  editingRowKeys: $data.d_editingRowKeys,
                  templates: _ctx.$slots,
                  loading: $props.loading,
                  responsiveLayout: $props.responsiveLayout,
                  onRowgroupToggle: $options.toggleRowGroup,
                  onRowClick: _cache[9] || (_cache[9] = $event => ($options.onRowClick($event))),
                  onRowDblclick: _cache[10] || (_cache[10] = $event => ($options.onRowDblClick($event))),
                  onRowRightclick: _cache[11] || (_cache[11] = $event => ($options.onRowRightClick($event))),
                  onRowTouchend: $options.onRowTouchEnd,
                  onRowKeydown: $options.onRowKeyDown,
                  onRowMousedown: $options.onRowMouseDown,
                  onRowDragstart: _cache[12] || (_cache[12] = $event => ($options.onRowDragStart($event))),
                  onRowDragover: _cache[13] || (_cache[13] = $event => ($options.onRowDragOver($event))),
                  onRowDragleave: _cache[14] || (_cache[14] = $event => ($options.onRowDragLeave($event))),
                  onRowDragend: _cache[15] || (_cache[15] = $event => ($options.onRowDragEnd($event))),
                  onRowDrop: _cache[16] || (_cache[16] = $event => ($options.onRowDrop($event))),
                  onRowToggle: _cache[17] || (_cache[17] = $event => ($options.toggleRow($event))),
                  onRadioChange: _cache[18] || (_cache[18] = $event => ($options.toggleRowWithRadio($event))),
                  onCheckboxChange: _cache[19] || (_cache[19] = $event => ($options.toggleRowWithCheckbox($event))),
                  onCellEditInit: _cache[20] || (_cache[20] = $event => ($options.onCellEditInit($event))),
                  onCellEditComplete: _cache[21] || (_cache[21] = $event => ($options.onCellEditComplete($event))),
                  onCellEditCancel: _cache[22] || (_cache[22] = $event => ($options.onCellEditCancel($event))),
                  onRowEditInit: _cache[23] || (_cache[23] = $event => ($options.onRowEditInit($event))),
                  onRowEditSave: _cache[24] || (_cache[24] = $event => ($options.onRowEditSave($event))),
                  onRowEditCancel: _cache[25] || (_cache[25] = $event => ($options.onRowEditCancel($event))),
                  editingMeta: $data.d_editingMeta,
                  onEditingMetaChange: $options.onEditingMetaChange,
                  isVirtualScrollerDisabled: true
                }, null, 8, ["value", "columns", "dataKey", "selection", "selectionKeys", "selectionMode", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowKeys", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "loading", "responsiveLayout", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange"]))
              : vue.createCommentVNode("", true),
            vue.createVNode(_component_DTTableBody, {
              value: $options.dataToRender(slotProps.rows),
              class: vue.normalizeClass(slotProps.styleClass),
              columns: slotProps.columns,
              empty: $options.empty,
              dataKey: $props.dataKey,
              selection: $props.selection,
              selectionKeys: $data.d_selectionKeys,
              selectionMode: $props.selectionMode,
              contextMenu: $props.contextMenu,
              contextMenuSelection: $props.contextMenuSelection,
              rowGroupMode: $props.rowGroupMode,
              groupRowsBy: $props.groupRowsBy,
              expandableRowGroups: $props.expandableRowGroups,
              rowClass: $props.rowClass,
              rowStyle: $props.rowStyle,
              editMode: $props.editMode,
              compareSelectionBy: $props.compareSelectionBy,
              scrollable: $props.scrollable,
              expandedRowIcon: $props.expandedRowIcon,
              collapsedRowIcon: $props.collapsedRowIcon,
              expandedRows: $props.expandedRows,
              expandedRowKeys: $data.d_expandedRowKeys,
              expandedRowGroups: $props.expandedRowGroups,
              editingRows: $props.editingRows,
              editingRowKeys: $data.d_editingRowKeys,
              templates: _ctx.$slots,
              loading: $props.loading,
              responsiveLayout: $props.responsiveLayout,
              onRowgroupToggle: $options.toggleRowGroup,
              onRowClick: _cache[26] || (_cache[26] = $event => ($options.onRowClick($event))),
              onRowDblclick: _cache[27] || (_cache[27] = $event => ($options.onRowDblClick($event))),
              onRowRightclick: _cache[28] || (_cache[28] = $event => ($options.onRowRightClick($event))),
              onRowTouchend: $options.onRowTouchEnd,
              onRowKeydown: $options.onRowKeyDown,
              onRowMousedown: $options.onRowMouseDown,
              onRowDragstart: _cache[29] || (_cache[29] = $event => ($options.onRowDragStart($event))),
              onRowDragover: _cache[30] || (_cache[30] = $event => ($options.onRowDragOver($event))),
              onRowDragleave: _cache[31] || (_cache[31] = $event => ($options.onRowDragLeave($event))),
              onRowDragend: _cache[32] || (_cache[32] = $event => ($options.onRowDragEnd($event))),
              onRowDrop: _cache[33] || (_cache[33] = $event => ($options.onRowDrop($event))),
              onRowToggle: _cache[34] || (_cache[34] = $event => ($options.toggleRow($event))),
              onRadioChange: _cache[35] || (_cache[35] = $event => ($options.toggleRowWithRadio($event))),
              onCheckboxChange: _cache[36] || (_cache[36] = $event => ($options.toggleRowWithCheckbox($event))),
              onCellEditInit: _cache[37] || (_cache[37] = $event => ($options.onCellEditInit($event))),
              onCellEditComplete: _cache[38] || (_cache[38] = $event => ($options.onCellEditComplete($event))),
              onCellEditCancel: _cache[39] || (_cache[39] = $event => ($options.onCellEditCancel($event))),
              onRowEditInit: _cache[40] || (_cache[40] = $event => ($options.onRowEditInit($event))),
              onRowEditSave: _cache[41] || (_cache[41] = $event => ($options.onRowEditSave($event))),
              onRowEditCancel: _cache[42] || (_cache[42] = $event => ($options.onRowEditCancel($event))),
              editingMeta: $data.d_editingMeta,
              onEditingMetaChange: $options.onEditingMetaChange,
              virtualScrollerContentProps: slotProps,
              isVirtualScrollerDisabled: $options.virtualScrollerDisabled
            }, null, 8, ["value", "class", "columns", "empty", "dataKey", "selection", "selectionKeys", "selectionMode", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowKeys", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "loading", "responsiveLayout", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange", "virtualScrollerContentProps", "isVirtualScrollerDisabled"]),
            vue.createVNode(_component_DTTableFooter, {
              columnGroup: $options.footerColumnGroup,
              columns: slotProps.columns
            }, null, 8, ["columnGroup", "columns"])
          ], 6)
        ]),
        _: 1
      }, 16, ["items", "columns", "style", "disabled"])
    ], 4),
    ($options.paginatorBottom)
      ? (vue.openBlock(), vue.createBlock(_component_DTPaginator, {
          key: 3,
          rows: $data.d_rows,
          first: $data.d_first,
          totalRecords: $options.totalRecordsLength,
          pageLinkSize: $props.pageLinkSize,
          template: $props.paginatorTemplate,
          rowsPerPageOptions: $props.rowsPerPageOptions,
          currentPageReportTemplate: $props.currentPageReportTemplate,
          class: "p-paginator-bottom",
          onPage: _cache[43] || (_cache[43] = $event => ($options.onPage($event))),
          alwaysShow: $props.alwaysShowPaginator
        }, vue.createSlots({ _: 2 }, [
          (_ctx.$slots.paginatorstart)
            ? {
                name: "start",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "paginatorstart")
                ])
              }
            : undefined,
          (_ctx.$slots.paginatorend)
            ? {
                name: "end",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "paginatorend")
                ])
              }
            : undefined
        ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "alwaysShow"]))
      : vue.createCommentVNode("", true),
    (_ctx.$slots.footer)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
          vue.renderSlot(_ctx.$slots, "footer")
        ]))
      : vue.createCommentVNode("", true),
    vue.createElementVNode("div", _hoisted_4, null, 512),
    ($props.reorderableColumns)
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, null, 512))
      : vue.createCommentVNode("", true),
    ($props.reorderableColumns)
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, null, 512))
      : vue.createCommentVNode("", true)
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

var css_248z = "\n.p-datatable {\n    position: relative;\n}\n.p-datatable table {\n    border-collapse: collapse;\n    min-width: 100%;\n    table-layout: fixed;\n}\n.p-datatable .p-sortable-column {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.p-datatable .p-sortable-column .p-column-title,\n.p-datatable .p-sortable-column .p-sortable-column-icon,\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n    vertical-align: middle;\n}\n.p-datatable .p-sortable-column .p-sortable-column-badge {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-datatable-responsive-scroll > .p-datatable-wrapper {\n    overflow-x: auto;\n}\n.p-datatable-responsive-scroll > .p-datatable-wrapper > table,\n.p-datatable-auto-layout > .p-datatable-wrapper > table {\n    table-layout: auto;\n}\n.p-datatable-hoverable-rows .p-selectable-row {\n    cursor: pointer;\n}\n\n/* Scrollable */\n.p-datatable-scrollable .p-datatable-wrapper {\n    position: relative;\n    overflow: auto;\n}\n.p-datatable-scrollable .p-datatable-thead,\n.p-datatable-scrollable .p-datatable-tbody,\n.p-datatable-scrollable .p-datatable-tfoot {\n    display: block;\n}\n.p-datatable-scrollable .p-datatable-thead > tr,\n.p-datatable-scrollable .p-datatable-tbody > tr,\n.p-datatable-scrollable .p-datatable-tfoot > tr {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    width: 100%;\n}\n.p-datatable-scrollable .p-datatable-thead > tr > th,\n.p-datatable-scrollable .p-datatable-tbody > tr > td,\n.p-datatable-scrollable .p-datatable-tfoot > tr > td {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-datatable-scrollable .p-datatable-thead {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n.p-datatable-scrollable .p-datatable-frozen-tbody {\n    position: sticky;\n    z-index: 1;\n}\n.p-datatable-scrollable .p-datatable-tfoot {\n    position: sticky;\n    bottom: 0;\n    z-index: 1;\n}\n.p-datatable-scrollable .p-frozen-column {\n    position: sticky;\n    background: inherit;\n}\n.p-datatable-scrollable th.p-frozen-column {\n    z-index: 1;\n}\n.p-datatable-scrollable-both .p-datatable-thead > tr > th,\n.p-datatable-scrollable-both .p-datatable-tbody > tr > td,\n.p-datatable-scrollable-both .p-datatable-tfoot > tr > td,\n.p-datatable-scrollable-horizontal .p-datatable-thead > tr > th\n.p-datatable-scrollable-horizontal .p-datatable-tbody > tr > td,\n.p-datatable-scrollable-horizontal .p-datatable-tfoot > tr > td {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n}\n.p-datatable-flex-scrollable {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n}\n.p-datatable-flex-scrollable .p-datatable-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    height: 100%;\n}\n.p-datatable-scrollable .p-rowgroup-header {\n    position: sticky;\n    z-index: 1;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot {\n    display: table;\n    border-collapse: collapse;\n    width: 100%;\n    table-layout: fixed;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr {\n    display: table-row;\n}\n.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr > th,\n.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr > td {\n    display: table-cell;\n}\n.p-datatable-scrollable .p-virtualscroller > .p-datatable-table {\n    display: inline-block; /* For Safari */\n}\n\n/* Resizable */\n.p-datatable-resizable > .p-datatable-wrapper {\n    overflow-x: auto;\n}\n.p-datatable-resizable .p-datatable-thead > tr > th,\n.p-datatable-resizable .p-datatable-tfoot > tr > td,\n.p-datatable-resizable .p-datatable-tbody > tr > td {\n    overflow: hidden;\n    white-space: nowrap;\n}\n.p-datatable-resizable .p-resizable-column:not(.p-frozen-column) {\n    background-clip: padding-box;\n    position: relative;\n}\n.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer {\n    display: none;\n}\n.p-datatable .p-column-resizer {\n    display: block;\n    position: absolute !important;\n    top: 0;\n    right: 0;\n    margin: 0;\n    width: .5rem;\n    height: 100%;\n    padding: 0px;\n    cursor:col-resize;\n    border: 1px solid transparent;\n}\n.p-datatable .p-column-header-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-datatable .p-column-resizer-helper {\n    width: 1px;\n    position: absolute;\n    z-index: 10;\n    display: none;\n}\n.p-datatable .p-row-editor-init,\n.p-datatable .p-row-editor-save,\n.p-datatable .p-row-editor-cancel {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Expand */\n.p-datatable .p-row-toggler {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Reorder */\n.p-datatable-reorder-indicator-up,\n.p-datatable-reorder-indicator-down {\n    position: absolute;\n    display: none;\n}\n\n/* Loader */\n.p-datatable .p-datatable-loading-overlay {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    z-index: 2;\n}\n\n/* Filter */\n.p-column-filter-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n}\n.p-column-filter-menu {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin-left: auto;\n}\n.p-column-filter-row .p-column-filter-element {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n}\n.p-column-filter-menu-button,\n.p-column-filter-clear-button {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n.p-column-filter-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-column-filter-row-items {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.p-column-filter-row-item {\n    cursor: pointer;\n}\n.p-column-filter-add-button,\n.p-column-filter-remove-button {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-column-filter-add-button .p-button-label,\n.p-column-filter-remove-button .p-button-label {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n}\n.p-column-filter-buttonbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {\n    width: auto;\n}\n\n/* Responsive */\n.p-datatable .p-datatable-tbody > tr > td > .p-column-title {\n    display: none;\n}\n\n/* VirtualScroller */\n.p-datatable .p-virtualscroller-loading {\n    -webkit-transform: none !important;\n            transform: none !important;\n    min-height: 0;\n    position: sticky;\n    top: 0;\n    left: 0;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
