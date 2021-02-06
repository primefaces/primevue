<template>
    <div :class="containerClass">
        <component v-if="display === 'row'" :is="filterElement" :field="field" />
        <button ref="icon" v-if="showMenuButton" type="button" class="p-column-filter-menu-button p-link" aria-haspopup="true" :aria-expanded="overlayVisible"
            :class="{'p-column-filter-menu-button-open': overlayVisible, 'p-column-filter-menu-button-active': hasFilter()}" 
            @click="toggleMenu()" @keydown="onToggleButtonKeyDown($event)"><span class="pi pi-filter-icon pi-filter"></span></button>
        <button v-if="showMenuButton && display === 'row'" :class="{'p-hidden-space': !hasRowFilter()}" type="button" class="p-column-filter-clear-button p-link" @click="clearFilter()"><span class="pi pi-filter-slash"></span></button>
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div :ref="overlayRef" :class="overlayClass" v-if="overlayVisible" @keydown.escape="onEscape">
                <component :is="filterHeader" :field="field" />
                <template v-if="display === 'row'">
                    <ul class="p-column-filter-row-items">
                        <li class="p-column-filter-row-item" v-for="(matchMode,i) of matchModes" :key="matchMode.label" 
                            @click="onRowMatchModeChange(matchMode.value)" @keydown="onRowMatchModeKeyDown($event)" @keydown.enter.prevent="onRowMatchModeChange(matchMode.value)"
                            :class="{'p-highlight': isRowMatchModeSelected(matchMode.value)}" :tabindex="i === 0 ? '0' : null">{{matchMode.label}}</li>
                        <li class="p-column-filter-separator"></li>
                        <li class="p-column-filter-row-item" @click="onRowClearItemClick()" @keydown="onRowMatchModeKeyDown($event)" @keydown.enter="onRowClearItemClick()">{{noFilterLabel}}</li>
                    </ul>
                </template>
                <template>
                    <div>TODO - Phase 2 Menu</div>
                </template>
                <component :is="filterFooter" :field="field" />
            </div>
        </transition>
    </div>
</template>

<script>
import {DomHandler,ConnectedOverlayScrollHandler} from 'primevue/utils';

export default {
    emits: ['filtermeta-change'],
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
        operator: {
            type: String,
            default: 'and'
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
            type: Boolean,
            default: true
        },
        filterElement: null,
        filterHeader: null,
        filterFooter: null,
        filters: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            overlayVisible: false,
            defaultMatchMode: null
        }
    },
    overlay: null,
    beforeUnmount() {
        if (this.overlay) {
            this.$el.appendChild(this.overlay);
            this.onOverlayHide();
        }
    },
    mounted() {
        if (this.filters && this.filters[this.field]) {
            this.defaultMatchMode = this.filters[this.field].matchMode;
        }
    },
    methods: {
        clearFilter() {
            let _filters = {...this.filters};
            if (this.display === 'row') {
                _filters[this.field].value = null;
                _filters[this.field].matchMode = this.defaultMatchMode;
            }
            else {
                _filters[this.field] = {value: null, matchMode: this.defaultMatchMode, operator: this.operator};
            }
            
            this.$emit('filtermeta-change', _filters);
        },
        hasFilter() {
            let fieldFilter = this.filters[this.field];
            if (fieldFilter) {
                if (Array.isArray(fieldFilter))
                    return !this.isFilterBlank(fieldFilter[0].value); 
                else
                    return !this.isFilterBlank(fieldFilter.value);
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
            this.$emit('filtermeta-change', _filters);
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
        onRowClearItemClick() {
            this.clearFilter();
            this.hide();
        },
        hide() {
            this.overlayVisible = false;
        },
        onOverlayEnter() {
            document.body.appendChild(this.overlay);
            this.overlay.style.zIndex = String(DomHandler.generateZIndex());
            DomHandler.absolutePosition(this.overlay, this.$refs.icon);
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayLeave() {
            this.onOverlayHide();
        },
        onOverlayHide() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
        },
        overlayRef(el) {
            this.overlay = el;
        },
        isOutsideClicked(event) {
            return !(this.overlay.isSameNode(event.target) || this.overlay.contains(event.target) 
                || this.$refs.icon.isSameNode(event.target) || this.$refs.icon.contains(event.target)
                || DomHandler.hasClass(event.target, 'p-column-filter-add-button') || DomHandler.hasClass(event.target.parentElement, 'p-column-filter-add-button')
                || DomHandler.hasClass(event.target, 'p-column-filter-remove-button') || DomHandler.hasClass(event.target.parentElement, 'p-column-filter-remove-button'));
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.isOutsideClicked(event)) {
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
            return [
                'p-column-filter', {
                    'p-column-filter-row': this.display === 'row', 
                    'p-column-filter-menu': this.display === 'menu'
                }
            ]
        },
        overlayClass() {
            return {'p-column-filter-overlay p-component p-fluid': true, 'p-column-filter-overlay-menu': this.display === 'menu'};
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
        noFilterLabel() {
            return this.$primevue.config.locale.noFilter;
        }
    }

}
</script>