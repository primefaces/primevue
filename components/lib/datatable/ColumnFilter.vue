<template>
    <div :class="cx('columnFilter')" v-bind="getColumnPT('columnFilter')">
        <div v-if="display === 'row'" :class="cx('filterInput')" v-bind="{ ...filterInputProps, ...getColumnPT('filterInput') }">
            <component :is="filterElement" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
        </div>
        <button
            v-if="showMenuButton"
            ref="icon"
            type="button"
            :aria-label="filterMenuButtonAriaLabel"
            aria-haspopup="true"
            :aria-expanded="overlayVisible"
            :aria-controls="overlayId"
            :class="cx('filterMenuButton')"
            @click="toggleMenu($event)"
            @keydown="onToggleButtonKeyDown($event)"
            v-bind="getColumnPT('filterMenuButton', ptmFilterMenuParams)"
        >
            <component :is="filterIconTemplate || 'FilterIcon'" v-bind="getColumnPT('filterMenuIcon')" />
        </button>
        <button v-if="showClearButton && display === 'row'" :class="cx('headerFilterClearButton')" type="button" @click="clearFilter()" v-bind="getColumnPT('headerFilterClearButton', ptmHeaderFilterClearParams)">
            <component :is="filterClearIconTemplate || 'FilterSlashIcon'" v-bind="getColumnPT('filterClearIcon')" />
        </button>
        <Portal>
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @after-enter="onOverlayAfterEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave" v-bind="getColumnPT('transition')">
                <div
                    v-if="overlayVisible"
                    :ref="overlayRef"
                    :id="overlayId"
                    v-focustrap
                    :aria-modal="overlayVisible"
                    role="dialog"
                    :class="[cx('filterOverlay'), filterMenuClass]"
                    @keydown.escape="hide"
                    @click="onContentClick"
                    @mousedown="onContentMouseDown"
                    v-bind="getColumnPT('filterOverlay')"
                >
                    <component :is="filterHeaderTemplate" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
                    <template v-if="display === 'row'">
                        <ul :class="cx('filterRowItems')" v-bind="getColumnPT('filterRowItems')">
                            <li
                                v-for="(matchMode, i) of matchModes"
                                :key="matchMode.label"
                                :class="cx('filterRowItem', { matchMode })"
                                @click="onRowMatchModeChange(matchMode.value)"
                                @keydown="onRowMatchModeKeyDown($event)"
                                @keydown.enter.prevent="onRowMatchModeChange(matchMode.value)"
                                :tabindex="i === 0 ? '0' : null"
                                v-bind="getColumnPT('filterRowItem', ptmFilterRowItemOptions(matchMode))"
                            >
                                {{ matchMode.label }}
                            </li>
                            <li :class="cx('filterSeparator')" v-bind="getColumnPT('filterSeparator')"></li>
                            <li :class="cx('filterRowItem')" @click="clearFilter()" @keydown="onRowMatchModeKeyDown($event)" @keydown.enter="onRowClearItemClick()" v-bind="getColumnPT('filterRowItem')">
                                {{ noFilterLabel }}
                            </li>
                        </ul>
                    </template>
                    <template v-else>
                        <div v-if="isShowOperator" :class="cx('filterOperator')" v-bind="getColumnPT('filterOperator')">
                            <CFDropdown
                                :options="operatorOptions"
                                :modelValue="operator"
                                :aria-label="filterOperatorAriaLabel"
                                :class="cx('filterOperatorDropdown')"
                                optionLabel="label"
                                optionValue="value"
                                @update:modelValue="onOperatorChange($event)"
                                :unstyled="unstyled"
                                :pt="getColumnPT('filterOperatorDropdown')"
                            ></CFDropdown>
                        </div>
                        <div :class="cx('filterConstraints')" v-bind="getColumnPT('filterConstraints')">
                            <div v-for="(fieldConstraint, i) of fieldConstraints" :key="i" :class="cx('filterConstraint')" v-bind="getColumnPT('filterConstraint')">
                                <CFDropdown
                                    v-if="isShowMatchModes"
                                    :options="matchModes"
                                    :modelValue="fieldConstraint.matchMode"
                                    :class="cx('filterMatchModeDropdown')"
                                    optionLabel="label"
                                    optionValue="value"
                                    :aria-label="filterConstraintAriaLabel"
                                    @update:modelValue="onMenuMatchModeChange($event, i)"
                                    :unstyled="unstyled"
                                    :pt="getColumnPT('filterMatchModeDropdown')"
                                ></CFDropdown>
                                <component v-if="display === 'menu'" :is="filterElement" :field="field" :filterModel="fieldConstraint" :filterCallback="filterCallback" :applyFilter="applyFilter" />
                                <div v-bind="getColumnPT('filterRemove')">
                                    <CFButton
                                        v-if="showRemoveIcon"
                                        type="button"
                                        :class="cx('filterRemoveButton')"
                                        @click="removeConstraint(i)"
                                        :label="removeRuleButtonLabel"
                                        :unstyled="unstyled"
                                        text
                                        severity="danger"
                                        size="small"
                                        :pt="getColumnPT('filterRemoveButton')"
                                    >
                                        <template #icon="iconProps">
                                            <component :is="filterRemoveIconTemplate || 'TrashIcon'" :class="iconProps.class" v-bind="getColumnPT('filterRemoveButton')['icon']" />
                                        </template>
                                    </CFButton>
                                </div>
                            </div>
                        </div>
                        <div v-if="isShowAddConstraint" :class="cx('filterAddRule')" v-bind="getColumnPT('filterAddRule')">
                            <CFButton
                                type="button"
                                :label="addRuleButtonLabel"
                                iconPos="left"
                                :class="cx('filterAddRuleButton')"
                                @click="addConstraint()"
                                :unstyled="unstyled"
                                text
                                severity="info"
                                size="small"
                                :pt="getColumnPT('filterAddRuleButton')"
                            >
                                <template #icon="iconProps">
                                    <component :is="filterAddIconTemplate || 'PlusIcon'" :class="iconProps.class" v-bind="getColumnPT('filterAddRuleButton')['icon']" />
                                </template>
                            </CFButton>
                        </div>
                        <div :class="cx('filterButtonbar')" v-bind="getColumnPT('filterButtonbar')">
                            <CFButton
                                v-if="!filterClearTemplate && showClearButton"
                                type="button"
                                :class="cx('filterClearButton')"
                                :label="clearButtonLabel"
                                @click="clearFilter"
                                :unstyled="unstyled"
                                size="small"
                                outlined
                                :pt="getColumnPT('filterClearButton')"
                            ></CFButton>
                            <component v-else :is="filterClearTemplate" :field="field" :filterModel="filters[field]" :filterCallback="clearFilter" />
                            <template v-if="showApplyButton">
                                <CFButton v-if="!filterApplyTemplate" type="button" :class="cx('filterApplyButton')" :label="applyButtonLabel" @click="applyFilter()" :unstyled="unstyled" size="small" :pt="getColumnPT('filterApplyButton')"></CFButton>
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
import { mergeProps } from 'vue';

export default {
    name: 'ColumnFilter',
    hostName: 'DataTable',
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
            id: this.$attrs.id,
            overlayVisible: false,
            defaultMatchMode: null,
            defaultOperator: null
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
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
        this.id = this.id || UniqueComponentId();

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
        getColumnPT(key, params) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                ...params
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined;
        },
        ptmFilterRowItemOptions(matchMode) {
            return {
                context: {
                    highlighted: matchMode && this.isRowMatchModeSelected(matchMode.value)
                }
            };
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
        toggleMenu(event) {
            this.overlayVisible = !this.overlayVisible;

            event.preventDefault();
        },
        onToggleButtonKeyDown(event) {
            switch (event.code) {
                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    this.toggleMenu(event);

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

            if (nextItem) return DomHandler.getAttribute(nextItem, 'data-pc-section') === 'filterseparator' ? this.findNextItem(nextItem) : nextItem;
            else return item.parentElement.firstElementChild;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem) return DomHandler.getAttribute(prevItem, 'data-pc-section') === 'filterseparator' ? this.findPrevItem(prevItem) : prevItem;
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
            DomHandler.addStyles(el, { position: 'absolute', top: '0', left: '0' });
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
        onOverlayAfterEnter() {
            this.overlay?.$focustrap?.autoFocus();
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
        showMenuButton() {
            return this.showMenu && (this.display === 'row' ? this.type !== 'boolean' : true);
        },
        overlayId() {
            return this.id + '_overlay';
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
        },
        ptmHeaderFilterClearParams() {
            return {
                context: {
                    hidden: this.hasRowFilter()
                }
            };
        },
        ptmFilterMenuParams() {
            return {
                context: {
                    overlayVisible: this.overlayVisible,
                    active: this.hasFilter()
                }
            };
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
