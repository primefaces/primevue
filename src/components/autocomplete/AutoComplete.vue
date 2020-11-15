<template>
    <span ref="container" :class="containerClass" aria-haspopup="listbox" :aria-owns="listId" :aria-expanded="overlayVisible" :style="style">
        <input ref="input" :class="inputClass" v-bind="$attrs" :value="inputValue" @input="onInput" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" type="text" autoComplete="off" v-if="!multiple"
            role="searchbox" aria-autocomplete="list" :aria-controls="listId">
        <ul ref="multiContainer" :class="multiContainerClass" v-if="multiple" @click="onMultiContainerClick">
            <li v-for="(item, i) of modelValue" :key="i" class="p-autocomplete-token">
                <span class="p-autocomplete-token-label">{{getItemContent(item)}}</span>
                <span class="p-autocomplete-token-icon pi pi-times-circle" @click="removeItem($event, i)"></span>
            </li>
            <li class="p-autocomplete-input-token">
                <input ref="input" type="text" autoComplete="off" v-bind="$attrs" @input="onInput" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown"
                    role="searchbox" aria-autocomplete="list" :aria-controls="listId">
            </li>
        </ul>
        <i class="p-autocomplete-loader pi pi-spinner pi-spin" v-if="searching"></i>
        <Button ref="dropdownButton" type="button" icon="pi pi-chevron-down" class="p-autocomplete-dropdown" :disabled="$attrs.disabled" @click="onDropdownClick" v-if="dropdown"/>
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div :ref="overlayRef" class="p-autocomplete-panel p-component" :style="{'max-height': scrollHeight}" v-if="overlayVisible">
                <ul :id="listId" class="p-autocomplete-items" role="listbox">
                    <li v-for="(item, i) of suggestions" class="p-autocomplete-item" :key="i" @click="selectItem($event, item)" role="option" v-ripple>
                        <slot name="item" :item="item" :index="i">
                            {{getItemContent(item)}}
                        </slot>
                    </li>
                </ul>
            </div>
        </transition>
    </span>
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import UniqueComponentId from '../utils/UniqueComponentId';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import Button from '../button/Button';
import Ripple from '../ripple/Ripple';

export default {
    inheritAttrs: false,
    emits: ['update:modelValue', 'item-select', 'item-select', 'dropdown-click', 'clear', 'complete'],
    props: {
        modelValue: null,
        suggestions: {
            type: Array,
            default: null
        },
        field: {
            type: String,
            default: null
        },
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
            default: null
        },
        class: null,
        style: null
    },
    timeout: null,
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    data() {
        return {
            searching: false,
            focused: false,
            overlayVisible: false,
            inputTextValue: null
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
        this.restoreAppend();
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.overlay = null;
    },
    methods: {
        onOverlayEnter() {
            this.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.appendContainer();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.overlay = null;
        },
        alignOverlay() {
            let target = this.multiple ? this.$refs.multiContainer : this.$refs.input;
            if (this.appendTo)
                DomHandler.absolutePosition(this.overlay, target);
            else
                DomHandler.relativePosition(this.overlay, target);
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
        onMultiContainerClick() {
            this.focus();
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
                            let nextElement = highlightItem.nextElementSibling;
                            if (nextElement) {
                                DomHandler.addClass(nextElement, 'p-highlight');
                                DomHandler.removeClass(highlightItem, 'p-highlight');
                                DomHandler.scrollInView(this.overlay, nextElement);
                            }
                        }
                        else {
                            DomHandler.addClass(this.overlay.firstChild.firstChild, 'p-highlight');
                        }

                        event.preventDefault();
                    break;

                    //up
                    case 38:
                        if (highlightItem) {
                            let previousElement = highlightItem.previousElementSibling;
                            if (previousElement) {
                                DomHandler.addClass(previousElement, 'p-highlight');
                                DomHandler.removeClass(highlightItem, 'p-highlight');
                                DomHandler.scrollInView(this.overlay, previousElement);
                            }
                        }

                        event.preventDefault();
                    break;

                    //enter,tab
                    case 13:
                        if (highlightItem) {
                            this.selectItem(event, this.suggestions[DomHandler.index(highlightItem)]);
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
                            this.selectItem(event, this.suggestions[DomHandler.index(highlightItem)]);
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
        appendContainer() {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.overlay);
                else
                    document.getElementById(this.appendTo).appendChild(this.overlay);
            }
        },
        restoreAppend() {
            if (this.overlay && this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.removeChild(this.overlay);
                else
                    document.getElementById(this.appendTo).removeChild(this.overlay);
            }
        },
        overlayRef(el) {
            this.overlay = el;
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
        inputClass() {
            return ['p-autocomplete-input p-inputtext p-component', {
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
        inputValue() {
            if (this.modelValue) {
                if (this.field) {
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
        }
    },
    components: {
        'Button': Button
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
