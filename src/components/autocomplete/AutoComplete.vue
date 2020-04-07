<template>
    <span :class="containerClass" aria-haspopup="listbox" :aria-owns="listId" :aria-expanded="overlayVisible">
        <input ref="input" :class="inputClass" v-bind="$attrs" v-on="listeners" :value="inputValue" type="text" autoComplete="off" v-if="!multiple"
            role="searchbox" aria-autocomplete="list" :aria-controls="listId" :aria-labelledby="ariaLabelledBy">
        <ul ref="multiContainer" :class="multiContainerClass" v-if="multiple" @click="onMultiContainerClick">
            <li v-for="(item, i) of value" :key="i" class="p-autocomplete-token p-highlight">
                <span class="p-autocomplete-token-icon pi pi-fw pi-times" @click="removeItem($event, i)"></span>
                <span class="p-autocomplete-token-label">{{getItemContent(item)}}</span>
            </li>
            <li class="p-autocomplete-input-token">
                <input ref="input" type="text" autoComplete="off" v-bind="$attrs" v-on="listeners" role="searchbox" aria-autocomplete="list" :aria-controls="listId" :aria-labelledby="ariaLabelledBy">
            </li>
        </ul>
        <i class="p-autocomplete-loader pi pi-spinner pi-spin" v-show="searching"></i>
        <Button ref="dropdownButton" type="button" icon="pi pi-fw pi-chevron-down" class="p-autocomplete-dropdown" :disabled="$attrs.disabled" @click="onDropdownClick" v-if="dropdown"/>
        <transition name="p-input-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" class="p-autocomplete-panel" :style="{'max-height': scrollHeight}" v-if="overlayVisible">
                <ul :id="listId" class="p-autocomplete-items p-autocomplete-list p-component" role="listbox">
                    <li v-for="(item, i) of suggestions" class="p-autocomplete-list-item" :key="i" @click="selectItem($event, item)" role="option">
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
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import Button from '../button/Button';
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
    inheritAttrs: false,
    props: {
        value: null,
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
        ariaLabelledBy: {
            type: String,
            default: null
        },
        appendTo: {
            type: String,
            default: null
        }
    },
    timeout: null,
    outsideClickListener: null,
    data() {
        return {
            searching: false,
            focused: false,
            filled: false,
            overlayVisible: false
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
    beforeDestroy() {
        this.restoreAppend();
        this.unbindOutsideClickListener();
    },
    methods: {
        onOverlayEnter() {
            this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.appendContainer();
            this.alignOverlay();
            this.bindOutsideClickListener();
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
        },
        alignOverlay() {
            let target = this.multiple ? this.$refs.multiContainer : this.$refs.input;
            if (this.appendTo)
                DomHandler.absolutePosition(this.$refs.overlay, target);
            else
                DomHandler.relativePosition(this.$refs.overlay, target);
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.$refs.overlay && this.isOutsideClicked(event)) {
                        this.hideOverlay();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        isOutsideClicked(event) {
            return !this.$refs.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
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
                if (!this.isSelected(item)) {
                    let newValue = this.value ? [...this.value, item] : [item];
                    this.$emit('input', newValue);
                }
            }
            else {
                this.$emit('input', item);
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
            let removedValue = this.value[index];
            let newValue = this.value.filter((val, i) => (index !== i));
            this.$emit('input', newValue);
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
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            let query = event.target.value;
            if (!this.multiple) {
                this.$emit('input', query);
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
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            if (this.overlayVisible) {
                let highlightItem = DomHandler.findSingle(this.$refs.overlay, 'li.p-highlight');

                switch(event.which) {
                    //down
                    case 40:
                        if (highlightItem) {
                            let nextElement = highlightItem.nextElementSibling;
                            if (nextElement) {
                                DomHandler.addClass(nextElement, 'p-highlight');
                                DomHandler.removeClass(highlightItem, 'p-highlight');
                                DomHandler.scrollInView(this.$refs.overlay, nextElement);
                            }
                        }
                        else {
                            DomHandler.addClass(this.$refs.overlay.firstChild.firstChild, 'p-highlight');
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
                                DomHandler.scrollInView(this.$refs.overlay, previousElement);
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
                        if (this.value && this.value.length && !this.$refs.input.value) {
                            let removedValue = this.value[this.value.length - 1];
                            let newValue = this.value.slice(0, -1);

                            this.$emit('input', newValue);
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
            if (this.value && this.value.length) {
                for (let i = 0; i < this.value.length; i++) {
                    if (ObjectUtils.equals(this.value[i], val)) {
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
                    document.body.appendChild(this.$refs.overlay);
                else
                    document.getElementById(this.appendTo).appendChild(this.$refs.overlay);
            }
        },
        restoreAppend() {
            if (this.$refs.overlay && this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.removeChild(this.$refs.overlay);
                else
                    document.getElementById(this.appendTo).removeChild(this.$refs.overlay);
            }
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.onInput,
                focus: this.onFocus,
                blur: this.onBlur,
                keydown: this.onKeyDown
            };
        },
        containerClass() {
            return ['p-autocomplete p-component', {
                'p-autocomplete-dd': this.dropdown,
                'p-autocomplete-multiple': this.multiple,
                'p-inputwrapper-filled': this.value,
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
            if (this.value) {
                if (this.field) {
                    const resolvedFieldData = ObjectUtils.resolveFieldData(this.value, this.field);
                    return resolvedFieldData != null ? resolvedFieldData : this.value;
                }
                else
                    return this.value;
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
    }
}
</script>

<style>
.p-autocomplete {
    width: auto;
    cursor: pointer;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    position: relative;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
}

.p-autocomplete .p-autocomplete-dropdown {
    width: 2em;
    margin-right: 0;
}

.p-autocomplete .p-autocomplete-input {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.p-autocomplete-loader {
    position: absolute;
    right: .25em;
    top: 50%;
    margin-top: -.5em;
}

.p-autocomplete-query {
    font-weight: bold;
}

.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}

.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
}

.p-autocomplete-panel .p-autocomplete-list {
    border: 0 none;
    padding: 0;
    margin: 0;
}

.p-autocomplete-panel .p-autocomplete-list-item {
    border: 0 none;
    cursor: pointer;
    font-weight: normal;
    margin: 1px 0;
    padding: 0.186em 0.313em;
    text-align: left;
}

.p-autocomplete .p-button-icon-only,
.p-autocomplete .p-button-icon-only:enabled:hover,
.p-autocomplete .p-button-icon-only:enabled:focus,
.p-autocomplete .p-button-icon-only:enabled:active {
    border-left: 0 none;
}

/* Multiple Selection */
.p-autocomplete-multiple-container {
    display: inline-block;
    vertical-align: middle;
}

.p-autocomplete-multiple-container.p-inputtext {
    clear: left;
    cursor: text;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0 1.5em 0 .25em;
}

.p-autocomplete-token {
    cursor: default;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    padding: .125em .5em;
    white-space: nowrap;
    position: relative;
    margin-right: .125em;
    border: 0 none;
    font-size: .9em;
}

.p-autocomplete-token-label {
    display: block;
    margin-right: 2em;
}

.p-autocomplete-token-icon {
    margin-top: -.5em;
    position: absolute;
    right: 0.2em;
    top: 50%;
    cursor: pointer;
}

.p-autocomplete-input-token {
    display: inline-block;
    vertical-align: middle;
    list-style-type: none;
    margin: 0 0 0 .125em;
    padding: .25em .25em .25em 0;
}

.p-autocomplete-input-token input {
    border: 0 none;
    width: 10em;
    outline: medium none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}

.p-autocomplete-dd .p-autocomplete-loader {
    right: 2.25em;
}

.p-autocomplete-dd input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
     -moz-border-radius-topright: 0px;
     -webkit-border-top-right-radius: 0px;
     border-top-right-radius: 0px;
     -moz-border-radius-bottomright: 0px;
     -webkit-border-bottom-right-radius: 0px;
     border-bottom-right-radius: 0px;
 }

.p-autocomplete-dd .p-autocomplete-dropdown {
     -moz-border-radius-topleft: 0px;
     -webkit-border-top-left-radius: 0px;
     border-top-left-radius: 0px;
     -moz-border-radius-bottomleft: 0px;
     -webkit-border-bottom-left-radius: 0px;
     border-bottom-left-radius: 0px;
}

/** AutoComplete **/
.p-fluid .p-autocomplete,
.p-fluid .p-autocomplete-input {
    width: 100%;
}

.p-fluid .p-autocomplete .p-autocomplete-dropdown.p-button {
    width: 2em;
}
</style>