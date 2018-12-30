<template>
    <div :class="containerClass" @click="onClick">
        <div class="p-hidden-accessible">
            <input ref="focusInput" type="text" role="listbox" readonly :disabled="disabled" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :tabindex="tabindex"/>
        </div>
        <div class="p-multiselect-label-container">
            <label :class="labelClass">{{label}}</label>
        </div>
        <div class="p-multiselect-trigger">
            <span class="p-multiselect-trigger-icon pi pi-chevron-down p-c"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: null,
        options: Array,
        dataKey: null,
        filter: Boolean,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        disabled: Boolean,
        tabindex: String,
        editable: Boolean,
        placeholder: String,
        scrollHeight: {
            type: String,
            default: '200px'
        },
        filterPlaceholder: String
    },
    data() {
        return {
            focused: false,
            filterValue: null,
            overlayVisible: false
        };
    },
    outsideClickListener: null,
    beforeDestroy() {
        this.unbindOutsideClickListener();
    },
    updated() {
        if (this.overlayVisible && this.filterValue) {
            this.alignOverlay();
        }
    },
    methods: {
        getOptionLabel(option) {
            return ObjectUtils.resolveFieldData(option, this.optionLabel);
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        onClick() {

        },
        onKeyDown(event) {
            switch(event.which) {
                //down
                case 40:
                    if (this.visibleOptions && this.overlayVisible && event.altKey) {
                        this.overlayVisible = true;
                    } 
                break;

                //space
                case 32:
                    if (!this.overlayVisible) {
                        this.overlayVisible = true;
                        event.preventDefault();
                    }
                break;

                //enter and escape
                case 13:
                case 27:
                    if (this.overlayVisible) {
                        this.hideOverlay();
                        event.preventDefault();
                    }
                break;

                //tab
                case 9:
                    this.hideOverlay();
                break;

                default:
                break;
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.$refs.overlay && !this.$refs.overlay.contains(event.target)) {
                        this.hideOverlay();
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
        hideOverlay() {
            this.overlayVisible = false;
            this.unbindOutsideClickListener();
        },
        getLabelByValue(val) {
            let label = null;

            if (this.options) {
                for (let option of this.options) {
                    let optionValue = this.getOptionValue(option);

                    if(ObjectUtils.equals(optionValue, val, this.dataKey)) {
                        label = this.getOptionLabel(option);
                        break;
                    }
                }
            }

            return label;
        }
    },
    computed: {
        visibleOptions() {
            if (this.filterValue)
                return this.options.filter(option => this.getOptionLabel(option).toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1);
            else
                return this.options;
        },
        containerClass() {
            return [
                'p-multiselect p-component p-unselectable-text',
                {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused
                }
            ];
        },
        labelClass() {
            return [
                'p-multiselect-label', 
                {
                    'p-placeholder': this.label == null && this.placeholder, 
                    'p-multiselect-label-empty': !this.placeholder
                }
            ];
        },
        label() {
            let label;

            if (this.value && this.value.length) {
                label = '';
                for(let i = 0; i < this.value.length; i++) {
                    if(i !== 0) {
                        label += ',';
                    }

                    label += this.findLabelByValue(this.value[i]);
                }
            }
            else {
                label = this.placeholder || 'p-multiselect';
            }

            return label;
        }
    }
}
</script>