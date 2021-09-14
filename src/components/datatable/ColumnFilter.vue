<template>
    <div :class="containerClass">
        <div class="p-fluid p-column-filter-element" v-if="display === 'row'" >
            <component :is="filterElement" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
        </div>
        <button ref="icon" v-if="showMenuButton" type="button" class="p-column-filter-menu-button p-link" aria-haspopup="true" :aria-expanded="overlayVisible"
            :class="{'p-column-filter-menu-button-open': overlayVisible, 'p-column-filter-menu-button-active': hasFilter()}"
            @click="toggleMenu()" @keydown="onToggleButtonKeyDown($event)"><span class="pi pi-filter-icon pi-filter"></span></button>
        <button v-if="showClearButton && display === 'row'" :class="{'p-hidden-space': !hasRowFilter()}" type="button" class="p-column-filter-clear-button p-link" @click="clearFilter()"><span class="pi pi-filter-slash"></span></button>
        <Teleport to="body">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div :ref="overlayRef" :class="overlayClass" v-if="overlayVisible" @keydown.escape="onEscape" @click="onContentClick">
                    <component :is="filterHeaderTemplate" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
                    <template v-if="display === 'row'">
                        <ul class="p-column-filter-row-items">
                            <li class="p-column-filter-row-item" v-for="(matchMode,i) of matchModes" :key="matchMode.label"
                                @click="onRowMatchModeChange(matchMode.value)" @keydown="onRowMatchModeKeyDown($event)" @keydown.enter.prevent="onRowMatchModeChange(matchMode.value)"
                                :class="{'p-highlight': isRowMatchModeSelected(matchMode.value)}" :tabindex="i === 0 ? '0' : null">{{matchMode.label}}</li>
                            <li class="p-column-filter-separator"></li>
                            <li class="p-column-filter-row-item" @click="clearFilter()" @keydown="onRowMatchModeKeyDown($event)" @keydown.enter="onRowClearItemClick()">{{noFilterLabel}}</li>
                        </ul>
                    </template>
                    <template v-else>
                        <div class="p-column-filter-operator" v-if="isShowOperator">
                            <CFDropdown :options="operatorOptions" :modelValue="operator" @update:modelValue="onOperatorChange($event)" class="p-column-filter-operator-dropdown" optionLabel="label" optionValue="value"></CFDropdown>
                        </div>
                        <div class="p-column-filter-constraints">
                            <div v-for="(fieldConstraint,i) of fieldConstraints" :key="i" class="p-column-filter-constraint">
                                <CFDropdown v-if="isShowMatchModes" :options="matchModes" :modelValue="fieldConstraint.matchMode" optionLabel="label" optionValue="value"
                                    @update:modelValue="onMenuMatchModeChange($event, i)" class="p-column-filter-matchmode-dropdown"></CFDropdown>
                                <component v-if="display === 'menu'" :is="filterElement" :field="field" :filterModel="fieldConstraint" :filterCallback="filterCallback" />
                                <div>
                                    <CFButton v-if="showRemoveIcon" type="button" icon="pi pi-trash" class="p-column-filter-remove-button p-button-text p-button-danger p-button-sm" @click="removeConstraint(i)" :label="removeRuleButtonLabel"></CFButton>
                                </div>
                            </div>
                        </div>
                        <div class="p-column-filter-add-rule" v-if="isShowAddConstraint">
                            <CFButton type="button" :label="addRuleButtonLabel" icon="pi pi-plus" class="p-column-filter-add-button p-button-text p-button-sm" @click="addConstraint()"></CFButton>
                        </div>
                        <div class="p-column-filter-buttonbar">
                            <CFButton v-if="!filterClearTemplate && showClearButton" type="button" class="p-button-outlined p-button-sm" @click="clearFilter()" :label="clearButtonLabel"></CFButton>
                            <component v-else :is="filterClearTemplate" :field="field" :filterModel="filters[field]" :filterCallback="clearFilter" />
                            <template v-if="showApplyButton">
                                <CFButton v-if="!filterApplyTemplate" type="button" class="p-button-sm" @click="applyFilter()" :label="applyButtonLabel"></CFButton>
                                <component v-else :is="filterApplyTemplate" :field="field" :filterModel="filters[field]" :filterCallback="applyFilter" />
                            </template>
                        </div>
                    </template>
                    <component :is="filterFooterTemplate" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script>
import {DomHandler,ConnectedOverlayScrollHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import {FilterOperator} from 'primevue/api';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

export default {
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
                        let focusable = DomHandler.getFocusableElements(this.overlay);
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
                return DomHandler.hasClass(nextItem, 'p-column-filter-separator')  ? this.findNextItem(nextItem) : nextItem;
            else
                return item.parentElement.firstElementChild;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                DomHandler.hasClass(prevItem, 'p-column-filter-separator')  ? this.findPrevItem(prevItem) : prevItem;
            else
                return item.parentElement.lastElementChild;
        },
        hide() {
            this.overlayVisible = false;
        },
        onContentClick() {
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
                if (this.overlay.contains(e.target)) {
                    this.selfClick = true;
                }
            }
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
        isTargetClicked(event) {
            return this.$refs.icon && (this.$refs.icon === event.target || this.$refs.icon.contains(event.target));
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && !this.selfClick && !this.isTargetClicked(event)) {
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
                {label: this.$primevue.config.locale.matchAll, value: FilterOperator.AND},
                {label: this.$primevue.config.locale.matchAny, value: FilterOperator.OR}
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
        'CFDropdown': Dropdown,
        'CFButton': Button
    }
}
</script>
