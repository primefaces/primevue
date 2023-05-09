<template>
    <div :class="containerClass" v-bind="getColumnPTOptions('columnFilter')">
        <div v-if="display === 'row'" class="p-fluid p-column-filter-element" v-bind="{ ...filterInputProps, ...getColumnPTOptions('filterInput') }">
            <component :is="filterElement" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
        </div>
        <button
            v-if="showMenuButton"
            ref="icon"
            type="button"
            class="p-column-filter-menu-button p-link"
            :aria-label="filterMenuButtonAriaLabel"
            aria-haspopup="true"
            :aria-expanded="overlayVisible"
            :aria-controls="overlayId"
            :class="{ 'p-column-filter-menu-button-open': overlayVisible, 'p-column-filter-menu-button-active': hasFilter() }"
            @click="toggleMenu()"
            @keydown="onToggleButtonKeyDown($event)"
            v-bind="getColumnPTOptions('filterMenuButton')"
        >
            <component :is="filterIconTemplate || 'FilterIcon'" />
        </button>
        <button v-if="showClearButton && display === 'row'" :class="{ 'p-hidden-space': !hasRowFilter() }" type="button" class="p-column-filter-clear-button p-link" @click="clearFilter()" v-bind="getColumnPTOptions('headerFilterClearButton')">
            <component :is="filterClearIconTemplate || 'FilterSlashIcon'" v-bind="getColumnPTOptions('filterClearIcon')" />
        </button>
        <Portal>
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div
                    v-if="overlayVisible"
                    :ref="overlayRef"
                    :id="overlayId"
                    v-focustrap="{ autoFocus: true }"
                    :aria-modal="overlayVisible"
                    role="dialog"
                    :class="overlayClass"
                    @keydown.escape="hide"
                    @click="onContentClick"
                    @mousedown="onContentMouseDown"
                    v-bind="getColumnPTOptions('filterOverlay')"
                >
                    <component :is="filterHeaderTemplate" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
                    <template v-if="display === 'row'">
                        <ul class="p-column-filter-row-items" v-bind="getColumnPTOptions('filterRowItems')">
                            <li
                                v-for="(matchMode, i) of matchModes"
                                :key="matchMode.label"
                                class="p-column-filter-row-item"
                                @click="onRowMatchModeChange(matchMode.value)"
                                @keydown="onRowMatchModeKeyDown($event)"
                                @keydown.enter.prevent="onRowMatchModeChange(matchMode.value)"
                                :class="{ 'p-highlight': isRowMatchModeSelected(matchMode.value) }"
                                :tabindex="i === 0 ? '0' : null"
                                v-bind="getColumnPTOptions('filterRowItem')"
                            >
                                {{ matchMode.label }}
                            </li>
                            <li class="p-column-filter-separator" v-bind="getColumnPTOptions('filterInput')"></li>
                            <li class="p-column-filter-row-item" @click="clearFilter()" @keydown="onRowMatchModeKeyDown($event)" @keydown.enter="onRowClearItemClick()" v-bind="getColumnPTOptions('filterRowItem')">
                                {{ noFilterLabel }}
                            </li>
                        </ul>
                    </template>
                    <template v-else>
                        <div v-if="isShowOperator" class="p-column-filter-operator" v-bind="getColumnPTOptions('filterOperator')">
                            <CFDropdown
                                :options="operatorOptions"
                                :modelValue="operator"
                                :aria-label="filterOperatorAriaLabel"
                                class="p-column-filter-operator-dropdown"
                                optionLabel="label"
                                optionValue="value"
                                @update:modelValue="onOperatorChange($event)"
                                :pt="getColumnPTOptions('filterOperatorDropdown')"
                            ></CFDropdown>
                        </div>
                        <div class="p-column-filter-constraints" v-bind="getColumnPTOptions('filterConstraints')">
                            <div v-for="(fieldConstraint, i) of fieldConstraints" :key="i" class="p-column-filter-constraint" v-bind="getColumnPTOptions('filterConstraint')">
                                <CFDropdown
                                    v-if="isShowMatchModes"
                                    :options="matchModes"
                                    :modelValue="fieldConstraint.matchMode"
                                    class="p-column-filter-matchmode-dropdown"
                                    optionLabel="label"
                                    optionValue="value"
                                    :aria-label="filterConstraintAriaLabel"
                                    @update:modelValue="onMenuMatchModeChange($event, i)"
                                    :pt="getColumnPTOptions('filterMatchModeDropdown')"
                                ></CFDropdown>
                                <component v-if="display === 'menu'" :is="filterElement" :field="field" :filterModel="fieldConstraint" :filterCallback="filterCallback" />
                                <div v-bind="getColumnPTOptions('filterRemove')">
                                    <CFButton
                                        v-if="showRemoveIcon"
                                        type="button"
                                        class="p-column-filter-remove-button p-button-text p-button-danger p-button-sm"
                                        @click="removeConstraint(i)"
                                        :label="removeRuleButtonLabel"
                                        :pt="getColumnPTOptions('filterRemoveButton')"
                                    >
                                        <template #icon="iconProps">
                                            <component :is="filterRemoveIconTemplate || 'TrashIcon'" :class="iconProps.class" v-bind="getColumnPTOptions('filterRemoveButton')['icon']" />
                                        </template>
                                    </CFButton>
                                </div>
                            </div>
                        </div>
                        <div v-if="isShowAddConstraint" class="p-column-filter-add-rule" v-bind="getColumnPTOptions('filterAddRule')">
                            <CFButton type="button" :label="addRuleButtonLabel" iconPos="left" class="p-column-filter-add-button p-button-text p-button-sm" @click="addConstraint()" :pt="getColumnPTOptions('filterAddRuleButton')">
                                <template #icon="iconProps">
                                    <component :is="filterAddIconTemplate || 'PlusIcon'" :class="iconProps.class" v-bind="getColumnPTOptions('filterAddRuleButton')['icon']" />
                                </template>
                            </CFButton>
                        </div>
                        <div class="p-column-filter-buttonbar" v-bind="getColumnPTOptions('filterButtonbar')">
                            <CFButton v-if="!filterClearTemplate && showClearButton" type="button" class="p-button-outlined p-button-sm" :label="clearButtonLabel" @click="clearFilter" :pt="getColumnPTOptions('filterClearButton')"></CFButton>
                            <component v-else :is="filterClearTemplate" :field="field" :filterModel="filters[field]" :filterCallback="clearFilter" />
                            <template v-if="showApplyButton">
                                <CFButton v-if="!filterApplyTemplate" type="button" class="p-button-sm" :label="applyButtonLabel" @click="applyFilter()" v-bind="getColumnPTOptions('filterApplyButton')"></CFButton>
                                <component v-else :is="filterApplyTemplate" :field="field" :filterModel="filters[field]" :filterCallback="applyFilter" />
                            </template>
                        </div>
                    </template>
                    <component :is="filterFooterTemplate" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import { FilterOperator } from 'primevue/api';
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import FocusTrap from 'primevue/focustrap';
import FilterIcon from 'primevue/icons/filter';
import FilterSlashIcon from 'primevue/icons/filterslash';
import PlusIcon from 'primevue/icons/plus';
import TrashIcon from 'primevue/icons/trash';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import { ConnectedOverlayScrollHandler, DomHandler, UniqueComponentId, ZIndexUtils } from 'primevue/utils';

export default {
    name: 'ColumnFilter',
    extends: BaseComponent,
    emits: ['filter-change', 'filter-apply', 'operator-change', 'matchmode-change', 'constraint-add', 'constraint-remove', 'filter-clear', 'apply-click'],
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
        filterElement: {
            type: Function,
            default: null
        },
        filterHeaderTemplate: {
            type: Function,
            default: null
        },
        filterFooterTemplate: {
            type: Function,
            default: null
        },
        filterClearTemplate: {
            type: Function,
            default: null
        },
        filterApplyTemplate: {
            type: Function,
            default: null
        },
        filterIconTemplate: {
            type: Function,
            default: null
        },
        filterAddIconTemplate: {
            type: Function,
            default: null
        },
        filterRemoveIconTemplate: {
            type: Function,
            default: null
        },
        filterClearIconTemplate: {
            type: Function,
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
        filterMenuClass: {
            type: String,
            default: null
        },
        filterMenuStyle: {
            type: null,
            default: null
        },
        filterInputProps: {
            type: null,
            default: null
        },
        column: null
    },
    data() {
        return {
            overlayVisible: false,
            defaultMatchMode: null,
            defaultOperator: null
        };
    },
    overlay: null,
    selfClick: false,
    overlayEventListener: null,
    beforeUnmount() {
        if (this.overlayEventListener) {
            OverlayEventBus.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        }

        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.onOverlayHide();
        }
    },
    mounted() {
        if (this.filters && this.filters[this.field]) {
            let fieldFilters = this.filters[this.field];

            if (fieldFilters.operator) {
                this.defaultMatchMode = fieldFilters.constraints[0].matchMode;
                this.defaultOperator = fieldFilters.operator;
            } else {
                this.defaultMatchMode = this.filters[this.field].matchMode;
            }
        }
    },
    methods: {
        getColumnPTOptions(key) {
            return this.ptmo(this.getColumnProp(), key, {
                props: this.column.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                }
            });
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined;
        },
        clearFilter() {
            let _filters = { ...this.filters };

            if (_filters[this.field].operator) {
                _filters[this.field].constraints.splice(1);
                _filters[this.field].operator = this.defaultOperator;
                _filters[this.field].constraints[0] = { value: null, matchMode: this.defaultMatchMode };
            } else {
                _filters[this.field].value = null;
                _filters[this.field].matchMode = this.defaultMatchMode;
            }

            this.$emit('filter-clear');
            this.$emit('filter-change', _filters);
            this.$emit('filter-apply');
            this.hide();
        },
        applyFilter() {
            this.$emit('apply-click', { field: this.field, constraints: this.filters[this.field] });
            this.$emit('filter-apply');
            this.hide();
        },
        hasFilter() {
            if (this.filtersStore) {
                let fieldFilter = this.filtersStore[this.field];

                if (fieldFilter) {
                    if (fieldFilter.operator) return !this.isFilterBlank(fieldFilter.constraints[0].value);
                    else return !this.isFilterBlank(fieldFilter.value);
                }
            }

            return false;
        },
        hasRowFilter() {
            return this.filters[this.field] && !this.isFilterBlank(this.filters[this.field].value);
        },
        isFilterBlank(filter) {
            if (filter !== null && filter !== undefined) {
                if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0)) return true;
                else return false;
            }

            return true;
        },
        toggleMenu() {
            this.overlayVisible = !this.overlayVisible;
        },
        onToggleButtonKeyDown(event) {
            switch (event.code) {
                case 'Enter':
                case 'Space':
                    this.toggleMenu();
                    event.preventDefault();
                    break;

                case 'Escape':
                    this.overlayVisible = false;
                    break;
            }
        },
        onRowMatchModeChange(matchMode) {
            let _filters = { ...this.filters };

            _filters[this.field].matchMode = matchMode;
            this.$emit('matchmode-change', { field: this.field, matchMode: matchMode });
            this.$emit('filter-change', _filters);
            this.$emit('filter-apply');
            this.hide();
        },
        onRowMatchModeKeyDown(event) {
            let item = event.target;

            switch (event.code) {
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
            return this.filters[this.field].matchMode === matchMode;
        },
        onOperatorChange(value) {
            let _filters = { ...this.filters };

            _filters[this.field].operator = value;
            this.$emit('filter-change', _filters);

            this.$emit('operator-change', { field: this.field, operator: value });

            if (!this.showApplyButton) {
                this.$emit('filter-apply');
            }
        },
        onMenuMatchModeChange(value, index) {
            let _filters = { ...this.filters };

            _filters[this.field].constraints[index].matchMode = value;
            this.$emit('matchmode-change', { field: this.field, matchMode: value, index: index });

            if (!this.showApplyButton) {
                this.$emit('filter-apply');
            }
        },
        addConstraint() {
            let _filters = { ...this.filters };
            let newConstraint = { value: null, matchMode: this.defaultMatchMode };

            _filters[this.field].constraints.push(newConstraint);
            this.$emit('constraint-add', { field: this.field, constraing: newConstraint });
            this.$emit('filter-change', _filters);

            if (!this.showApplyButton) {
                this.$emit('filter-apply');
            }
        },
        removeConstraint(index) {
            let _filters = { ...this.filters };
            let removedConstraint = _filters[this.field].constraints.splice(index, 1);

            this.$emit('constraint-remove', { field: this.field, constraing: removedConstraint });
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

            if (nextItem) return DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;
            else return item.parentElement.firstElementChild;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem) return DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;
            else return item.parentElement.lastElementChild;
        },
        hide() {
            this.overlayVisible = false;

            DomHandler.focus(this.$refs.icon);
        },
        onContentClick(event) {
            this.selfClick = true;

            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.overlay
            });
        },
        onContentMouseDown() {
            this.selfClick = true;
        },
        onOverlayEnter(el) {
            if (this.filterMenuStyle) {
                DomHandler.applyStyle(this.overlay, this.filterMenuStyle);
            }

            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            DomHandler.absolutePosition(this.overlay, this.$refs.icon);
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            this.overlayEventListener = (e) => {
                if (!this.isOutsideClicked(e.target)) {
                    this.selfClick = true;
                }
            };

            OverlayEventBus.on('overlay-click', this.overlayEventListener);
        },
        onOverlayLeave() {
            this.onOverlayHide();
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        onOverlayHide() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
            OverlayEventBus.off('overlay-click', this.overlayEventListener);
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.icon, () => {
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
                    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
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
            return [
                'p-column-filter p-fluid',
                {
                    'p-column-filter-row': this.display === 'row',
                    'p-column-filter-menu': this.display === 'menu'
                }
            ];
        },
        overlayClass() {
            return [
                this.filterMenuClass,
                {
                    'p-column-filter-overlay p-component p-fluid': true,
                    'p-column-filter-overlay-menu': this.display === 'menu',
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false
                }
            ];
        },
        showMenuButton() {
            return this.showMenu && (this.display === 'row' ? this.type !== 'boolean' : true);
        },
        overlayId() {
            return UniqueComponentId();
        },
        matchModes() {
            return (
                this.matchModeOptions ||
                this.$primevue.config.filterMatchModeOptions[this.type].map((key) => {
                    return { label: this.$primevue.config.locale[key], value: key };
                })
            );
        },
        isShowMatchModes() {
            return this.type !== 'boolean' && this.showMatchModes && this.matchModes;
        },
        operatorOptions() {
            return [
                { label: this.$primevue.config.locale.matchAll, value: FilterOperator.AND },
                { label: this.$primevue.config.locale.matchAny, value: FilterOperator.OR }
            ];
        },
        noFilterLabel() {
            return this.$primevue.config.locale ? this.$primevue.config.locale.noFilter : undefined;
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
            return this.$primevue.config.locale ? this.$primevue.config.locale.removeRule : undefined;
        },
        addRuleButtonLabel() {
            return this.$primevue.config.locale ? this.$primevue.config.locale.addRule : undefined;
        },
        isShowAddConstraint() {
            return this.showAddButton && this.filters[this.field].operator && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
        },
        clearButtonLabel() {
            return this.$primevue.config.locale ? this.$primevue.config.locale.clear : undefined;
        },
        applyButtonLabel() {
            return this.$primevue.config.locale ? this.$primevue.config.locale.apply : undefined;
        },
        filterMenuButtonAriaLabel() {
            return this.$primevue.config.locale ? (this.overlayVisible ? this.$primevue.config.locale.showFilterMenu : this.$primevue.config.locale.hideFilterMenu) : undefined;
        },
        filterOperatorAriaLabel() {
            return this.$primevue.config.locale ? this.$primevue.config.locale.filterOperator : undefined;
        },
        filterConstraintAriaLabel() {
            return this.$primevue.config.locale ? this.$primevue.config.locale.filterConstraint : undefined;
        }
    },
    components: {
        CFDropdown: Dropdown,
        CFButton: Button,
        Portal: Portal,
        FilterSlashIcon: FilterSlashIcon,
        FilterIcon: FilterIcon,
        TrashIcon: TrashIcon,
        PlusIcon: PlusIcon
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>
