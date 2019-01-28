<template>
    <span :class="containerClass">
        <input ref="input" :class="inputClass" v-bind="$attrs" v-on="listeners" :value="inputValue" type="text" autoComplete="off">
        <i className="p-autocomplete-loader pi pi-spinner pi-spin" v-show="searching"></i>
        <Button ref="dropdownButton" type="button" icon="pi pi-fw pi-chevron-down" class="p-autocomplete-dropdown" :disabled="disabled" @click="onDropdownClick" v-if="dropdown"/>
        <transition name="p-input-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" class="p-autocomplete-panel" :style="{'max-height': scrollHeight}" v-if="overlayVisible">
                <ul class="p-autocomplete-items p-autocomplete-list p-component">
                    <li v-for="(item, i) of suggestions" class="p-autocomplete-list-item" :key="i" @click="onItemClick($event, item)">
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
        suggestions() {
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
            return !this.$refs.overlay.contains(event.target) && event.target !== this.getInputElement() && !this.isDropdownClicked(event);
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
        onItemClick(event, item) {
            if (this.multiple) {
                /*this.inputEl.value = '';
                if (!this.isSelected(option)) {
                    let newValue = this.props.value ? [...this.props.value, option] : [option];
                    this.updateModel(event, newValue);
                }*/
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
            this.getInputElement().focus();
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
        getInputElement() {
            return this.multiple ? this.$refs.inputMultiple : this.$refs.input;
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => {
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
                            this.hidePanel();
                        }
                    }
                },
                focus: event => {
                    this.focused = true;
                    this.$emit('focus', event);
                },
                blur: event => {
                    this.focused = false;
                    this.$emit('blur', event);
                }
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