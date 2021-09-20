<template>
    <span ref="container" :class="containerClass" aria-haspopup="listbox" :aria-owns="listId" :aria-expanded="overlayVisible" :style="style">
        <input ref="input" :class="inputFieldClass" :style="inputStyle" v-bind="$attrs" :value="inputValue" @click="onInputClicked" @input="onInput" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" @change="onChange"
            type="text" autoComplete="off" v-if="!multiple" role="searchbox" aria-autocomplete="list" :aria-controls="listId">
        <ul ref="multiContainer" :class="multiContainerClass" v-if="multiple" @click="onMultiContainerClick">
            <li v-for="(item, i) of modelValue" :key="i" class="p-autocomplete-token">
                <slot name="chip" :value="item">
                    <span class="p-autocomplete-token-label">{{getItemContent(item)}}</span>
                </slot>
                <span class="p-autocomplete-token-icon pi pi-times-circle" @click="removeItem($event, i)"></span>
            </li>
            <li class="p-autocomplete-input-token">
                <input ref="input" type="text" autoComplete="off" v-bind="$attrs" @input="onInput" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown"  @change="onChange"
                    role="searchbox" aria-autocomplete="list" :aria-controls="listId">
            </li>
        </ul>
        <i class="p-autocomplete-loader pi pi-spinner pi-spin" v-if="searching"></i>
        <Button ref="dropdownButton" type="button" icon="pi pi-chevron-down" class="p-autocomplete-dropdown" :disabled="$attrs.disabled" @click="onDropdownClick" v-if="dropdown"/>
        <Teleport :to="appendTarget" :disabled="appendDisabled">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div :ref="overlayRef" :class="panelStyleClass" :style="{'max-height': virtualScrollerDisabled ? scrollHeight : ''}" v-if="overlayVisible" @click="onOverlayClick">
                    <slot name="header" :value="modelValue" :suggestions="suggestions"></slot>
                    <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :style="{'height': scrollHeight}" :items="suggestions" :disabled="virtualScrollerDisabled">
                        <template v-slot:content="{ styleClass, contentRef, items, getItemOptions }">
                            <ul :id="listId" :ref="contentRef" :class="['p-autocomplete-items', styleClass]" role="listbox">
                                <template v-if="!optionGroupLabel">
                                    <li v-for="(item, i) of items" class="p-autocomplete-item" :key="i" @click="selectItem($event, item)" role="option" v-ripple>
                                        <slot name="item" :item="item" :index="getOptionIndex(i, getItemOptions)">{{getItemContent(item)}}</slot>
                                    </li>
                                </template>
                                <template v-else>
                                    <template v-for="(optionGroup, i) of items" :key="getOptionGroupRenderKey(optionGroup)">
                                        <li  class="p-autocomplete-item-group">
                                            <slot name="optiongroup" :item="optionGroup" :index="getOptionIndex(i, getItemOptions)">{{getOptionGroupLabel(optionGroup)}}</slot>
                                        </li>
                                        <li v-for="(item, j) of getOptionGroupChildren(optionGroup)" class="p-autocomplete-item" :key="j" @click="selectItem($event, item)" role="option" v-ripple :data-group="i" :data-index="j">
                                            <slot name="item" :item="item" :index="getOptionIndex(j, getItemOptions)">{{getItemContent(item)}}</slot>
                                        </li>
                                    </template>
                                </template>
                            </ul>
                        </template>
                        <template v-slot:loader="{ options }" v-if="$slots.loader">
                            <slot name="loader" :options="options"></slot>
                        </template>
                    </VirtualScroller>
                    <slot name="footer" :value="modelValue" :suggestions="suggestions"></slot>
                </div>
            </transition>
        </Teleport>
    </span>
</template>

<script>
import {ConnectedOverlayScrollHandler,UniqueComponentId,ObjectUtils,DomHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import VirtualScroller from 'primevue/virtualscroller';

export default {
    name: 'AutoComplete',
    inheritAttrs: false,
    emits: ['update:modelValue', 'item-select', 'item-unselect', 'dropdown-click', 'clear', 'complete'],
    props: {
        modelValue: null,
        suggestions: {
            type: Array,
            default: null
        },
        field: {
            type: [String,Function],
            default: null
        },
        optionGroupLabel: null,
        optionGroupChildren: null,
        scrollHeight: {
            type: String,
            default: '200px'
        },
        dropdown: {
            type: Boolean,
            default: false
        },
        dropdownMode: {
            type: String,
            default: 'blank'
        },
        autoHighlight: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        minLength: {
            type: Number,
            default: 1
        },
        delay: {
            type: Number,
            default: 300
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        forceSelection: {
            type: Boolean,
            default: false
        },
        completeOnFocus: {
            type: Boolean,
            default: false
        },
        inputClass: null,
        inputStyle: null,
        class: null,
        style: null,
        panelClass: null,
        virtualScrollerOptions: {
            type: Object,
            default: null
        }
    },
    timeout: null,
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    virtualScroller: null,
    data() {
        return {
            searching: false,
            focused: false,
            overlayVisible: false,
            inputTextValue: null,
            highlightItem: null
        };
    },
    watch: {
        suggestions() {
            if (this.searching) {
                if (this.suggestions && this.suggestions.length)
                    this.showOverlay();
                else
                    this.hideOverlay();

                this.searching = false;
            }
        }
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    },
    updated() {
        if (this.overlayVisible) {
            this.alignOverlay();
        }
    },
    methods: {
        getOptionIndex(index, fn) {
            return this.virtualScrollerDisabled ? index : (fn && fn(index)['index']);
        },
        getOptionGroupRenderKey(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
        },
        getOptionGroupLabel(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
        },
        getOptionGroupChildren(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoHighlight && this.suggestions && this.suggestions.length) {
                DomHandler.addClass(this.overlay.firstElementChild.firstElementChild, 'p-highlight')
            }
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.overlay = null;
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            let target = this.multiple ? this.$refs.multiContainer : this.$refs.input;
            if (this.appendDisabled) {
                DomHandler.relativePosition(this.overlay, target);
            }
            else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(target) + 'px';
                DomHandler.absolutePosition(this.overlay, target);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.overlay && this.isOutsideClicked(event)) {
                        this.hideOverlay();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
                    if (this.overlayVisible) {
                        this.hideOverlay();
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
                        this.hideOverlay();
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
            return !this.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
        },
        isInputClicked(event) {
            if (this.multiple)
                return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);
            else
                return event.target === this.$refs.input;
        },
        isDropdownClicked(event) {
            return this.$refs.dropdownButton ? (event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.$el.contains(event.target)) : false;
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        selectItem(event, item) {
            if (this.multiple) {
                this.$refs.input.value = '';
                this.inputTextValue = '';

                if (!this.isSelected(item)) {
                    let newValue = this.modelValue ? [...this.modelValue, item] : [item];
                    this.$emit('update:modelValue', newValue);
                }
            }
            else {
                this.$emit('update:modelValue', item);
            }

            this.$emit('item-select', {
                originalEvent: event,
                value: item
            });

            this.focus();
            this.hideOverlay();
        },
        onMultiContainerClick(event) {
            this.focus();
            if(this.completeOnFocus) {
                this.search(event, '', 'click');
            }
        },
        removeItem(event, index) {
            let removedValue = this.modelValue[index];
            let newValue = this.modelValue.filter((val, i) => (index !== i));
            this.$emit('update:modelValue', newValue);
            this.$emit('item-unselect', {
                originalEvent: event,
                value: removedValue
            });
        },
        onDropdownClick(event) {
            this.focus();
            const query = this.$refs.input.value;

            if (this.dropdownMode === 'blank')
                this.search(event, '', 'dropdown');
            else if (this.dropdownMode === 'current')
                this.search(event, query, 'dropdown');

            this.$emit('dropdown-click', {
                originalEvent: event,
                query: query
            });
        },
        getItemContent(item) {
            return this.field ? ObjectUtils.resolveFieldData(item, this.field) : item;
        },
        showOverlay() {
            this.overlayVisible = true;
        },
        hideOverlay() {
            this.overlayVisible = false;
        },
        focus() {
            this.$refs.input.focus();
        },
        search(event, query, source) {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
                return;
            }

            //do not search blank values on input change
            if (source === 'input' && query.trim().length === 0) {
                return;
            }

            this.searching = true;
            this.$emit('complete', {
                originalEvent: event,
                query: query
            });
        },
        onInputClicked(event) {
            if(this.completeOnFocus) {
                this.search(event, '', 'click');
            }
        },
        onInput(event) {
            this.inputTextValue = event.target.value;

            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            let query = event.target.value;
            if (!this.multiple) {
                this.$emit('update:modelValue', query);
            }

            if (query.length === 0) {
                this.hideOverlay();
                this.$emit('clear');
            }
            else {
                if (query.length >= this.minLength) {
                    this.timeout = setTimeout(() => {
                        this.search(event, query, 'input');
                    }, this.delay);
                }
                else {
                    this.hideOverlay();
                }
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        onKeyDown(event) {
            if (this.overlayVisible) {
                let highlightItem = DomHandler.findSingle(this.overlay, 'li.p-highlight');

                switch(event.which) {
                    //down
                    case 40:
                        if (highlightItem) {
                            let nextElement = this.findNextItem(highlightItem);
                            if (nextElement) {
                                DomHandler.addClass(nextElement, 'p-highlight');
                                DomHandler.removeClass(highlightItem, 'p-highlight');
                                DomHandler.scrollInView(this.overlay, nextElement);
                            }
                        }
                        else {
                            highlightItem = this.overlay.firstElementChild.firstElementChild;
                            if (DomHandler.hasClass(highlightItem, 'p-autocomplete-item-group')) {
                                highlightItem = this.findNextItem(highlightItem);
                            }

                            if (highlightItem) {
                                DomHandler.addClass(highlightItem, 'p-highlight');
                            }
                        }

                        event.preventDefault();
                    break;

                    //up
                    case 38:
                        if (highlightItem) {
                            let previousElement = this.findPrevItem(highlightItem);
                            if (previousElement) {
                                DomHandler.addClass(previousElement, 'p-highlight');
                                DomHandler.removeClass(highlightItem, 'p-highlight');
                                DomHandler.scrollInView(this.overlay, previousElement);
                            }
                        }

                        event.preventDefault();
                    break;

                    //enter
                    case 13:
                        if (highlightItem) {
                            this.selectHighlightItem(event, highlightItem);
                            this.hideOverlay();
                        }

                        event.preventDefault();
                    break;

                    //escape
                    case 27:
                        this.hideOverlay();
                        event.preventDefault();
                    break;

                    //tab
                    case 9:
                        if (highlightItem) {
                            this.selectHighlightItem(event, highlightItem);
                        }

                        this.hideOverlay();
                    break;

                    default:
                    break;
                }
            }

            if (this.multiple) {
                switch(event.which) {
                    //backspace
                    case 8:
                        if (this.modelValue && this.modelValue.length && !this.$refs.input.value) {
                            let removedValue = this.modelValue[this.modelValue.length - 1];
                            let newValue = this.modelValue.slice(0, -1);

                            this.$emit('update:modelValue', newValue);
                            this.$emit('item-unselect', {
                                originalEvent: event,
                                value: removedValue
                            });
                        }
                    break;

                    default:
                    break;
                }
            }
        },
        selectHighlightItem(event, item) {
            if (this.optionGroupLabel) {
                let optionGroup = this.suggestions[item.dataset.group];
                this.selectItem(event, this.getOptionGroupChildren(optionGroup)[item.dataset.index]);
            }
            else {
                this.selectItem(event, this.suggestions[DomHandler.index(item)]);
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return DomHandler.hasClass(nextItem, 'p-autocomplete-item-group') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return DomHandler.hasClass(prevItem, 'p-autocomplete-item-group') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        onChange(event) {
            if (this.forceSelection) {
                let valid = false;
                let inputValue = event.target.value.trim();

                if (this.suggestions)  {
                    for (let item of this.suggestions) {
                        let itemValue = this.field ? ObjectUtils.resolveFieldData(item, this.field) : item;
                        if (itemValue && inputValue === itemValue.trim()) {
                            valid = true;
                            this.selectItem(event, item);
                            break;
                        }
                    }
                }

                if (!valid) {
                    this.$refs.input.value = '';
                    this.inputTextValue = '';
                    this.$emit('clear');
                    if (!this.multiple) {
                        this.$emit('update:modelValue', null);
                    }
                }
            }
        },
        isSelected(val) {
            let selected = false;
            if (this.modelValue && this.modelValue.length) {
                for (let i = 0; i < this.modelValue.length; i++) {
                    if (ObjectUtils.equals(this.modelValue[i], val)) {
                        selected = true;
                        break;
                    }
                }
            }

            return selected;
        },
        overlayRef(el) {
            this.overlay = el;
        },
        virtualScrollerRef(el) {
            this.virtualScroller = el;
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.$el
            });
        }
    },
    computed: {
        containerClass() {
            return ['p-autocomplete p-component p-inputwrapper', this.class, {
                'p-autocomplete-dd': this.dropdown,
                'p-autocomplete-multiple': this.multiple,
                'p-inputwrapper-filled': ((this.modelValue) || (this.inputTextValue && this.inputTextValue.length)),
                'p-inputwrapper-focus': this.focused
            }];
        },
        inputFieldClass() {
            return ['p-autocomplete-input p-inputtext p-component', this.inputClass, {
                'p-autocomplete-dd-input': this.dropdown,
                'p-disabled': this.$attrs.disabled
            }];
        },
        multiContainerClass() {
            return ['p-autocomplete-multiple-container p-component p-inputtext', {
                'p-disabled': this.$attrs.disabled,
                'p-focus': this.focused
            }];
        },
        panelStyleClass() {
            return [
                'p-autocomplete-panel p-component', this.panelClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        inputValue() {
            if (this.modelValue) {
                if (this.field && typeof this.modelValue === 'object') {
                    const resolvedFieldData = ObjectUtils.resolveFieldData(this.modelValue, this.field);
                    return resolvedFieldData != null ? resolvedFieldData : this.modelValue;
                }
                else
                    return this.modelValue;
            }
            else {
                return '';
            }
        },
        listId() {
            return UniqueComponentId() + '_list';
        },
        appendDisabled() {
            return this.appendTo === 'self';
        },
        appendTarget() {
            return this.appendDisabled ? null : this.appendTo;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        }
    },
    components: {
        'Button': Button,
        'VirtualScroller': VirtualScroller
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-autocomplete {
    display: inline-flex;
    position: relative;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-autocomplete-dd .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
     border-top-right-radius: 0;
     border-bottom-right-radius: 0;
 }

.p-autocomplete-dd .p-autocomplete-dropdown {
     border-top-left-radius: 0;
     border-bottom-left-radius: 0px;
}

.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}

.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
}

.p-autocomplete-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-autocomplete-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-autocomplete-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-autocomplete-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-autocomplete-token-icon {
    cursor: pointer;
}

.p-autocomplete-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-autocomplete-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
</style>
