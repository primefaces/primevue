<template>
    <span :class="containerClass">
        <input ref="input" :class="inputClass" v-bind="$attrs" v-on="listeners" :value="inputValue" type="text" autoComplete="off" v-if="!multiple">
        <ul ref="multiContainer" :class="multiContainerClass" v-if="multiple" @click="onMultiContainerClick">
            <li v-for="(item, i) of value" :key="i" class="p-autocomplete-token p-highlight">
                <span class="p-autocomplete-token-icon pi pi-fw pi-times" @click="removeItem($event, i)"></span>
                <span class="p-autocomplete-token-label">{{getItemContent(item)}}</span>
            </li>
            <li class="p-autocomplete-input-token">
                <input ref="input" type="text" autoComplete="off" :disabled="disabled" v-bind="$attrs" v-on="listeners">
            </li>
        </ul>
        <i class="p-autocomplete-loader pi pi-spinner pi-spin" v-show="searching"></i>
        <Button ref="dropdownButton" type="button" icon="pi pi-fw pi-chevron-down" class="p-autocomplete-dropdown" :disabled="disabled" @click="onDropdownClick" v-if="dropdown"/>
        <transition name="p-input-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" class="p-autocomplete-panel" :style="{'max-height': scrollHeight}" v-if="overlayVisible">
                <ul class="p-autocomplete-items p-autocomplete-list p-component">
                    <li v-for="(item, i) of suggestions" class="p-autocomplete-list-item" :key="i" @click="selectItem($event, item)">
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

export default {
    inheritAttrs: false,
    props: {
        value: null,
        suggestions: Array,
        dropdown: Boolean,
        dropdownMode: {
            type: String,
            default: 'blank'
        },
        multiple: Boolean,
        disabled: Boolean,
        field: String,
        scrollHeight: {
            type: String,
            default: '200px'
        },
        minLength: {
            type: Number,
            default: 1
        },
        delay: {
            type: Number,
            default: 300
        },
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
    methods: {
        onOverlayEnter() {
            this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.alignOverlay();
            this.bindOutsideClickListener();
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
        },
        alignOverlay() {
            if (this.multiple)
                DomHandler.relativePosition(this.$refs.overlay, this.$refs.multiContainer);
            else
                DomHandler.relativePosition(this.$refs.overlay, this.$refs.input);
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

            this.$emit('select', {
                originalEvent: event,
                value: item
            });

            this.focus();
            this.hideOverlay();
        },
        onMultiContainerClick(event) {
            this.focus();
        },
        removeItem(event, index) {
            let removedValue = this.value[index];
            let newValue = this.value.filter((val, i) => (index !== i));
            this.$emit('input', newValue);
            this.$emit('unselect', {
                originalEvent: event,
                value: removedValue
            });
        },
        onDropdownClick(event) {
            this.focus();
            const query = this.getInputElement().value;

            if (this.dropdownMode === 'blank')
                this.search(event, '', 'dropdown');
            else if (this.dropdownMode === 'current')
                this.search(event, query, 'dropdown');

            this.$emit('click-dropdown', {
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
        onFocus() {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur() {
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
                            this.$emit('unselect', {
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
                'p-inputwrapper-filled': this.filled, 
                'p-inputwrapper-focus': this.focused
            }];
        },
        inputClass() {
            return ['p-autocomplete-input p-inputtext p-component', {
                'p-autocomplete-dd-input': this.dropdown, 
                'p-disabled': this.disabled
            }];
        },
        multiContainerClass() {
            return ['p-autocomplete-multiple-container p-component p-inputtext', {
                'p-disabled': this.disabled,
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
        }
    },
    components: {
        'Button': Button
    }
}
</script>