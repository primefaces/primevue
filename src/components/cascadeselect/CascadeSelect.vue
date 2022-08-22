<template>
    <div ref="container" :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input ref="focusInput" type="text" :id="inputId" readonly :disabled="disabled" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :tabindex="tabindex"
                aria-haspopup="listbox" :aria-expanded="overlayVisible" :aria-labelledby="ariaLabelledBy" />
        </div>
        <span :class="labelClass">
            <slot name="value" :value="value" :placeholder="placeholder">
                {{label}}
            </slot>
        </span>
        <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" :aria-expanded="overlayVisible">
            <slot name="indicator">
                <span class="p-cascadeselect-trigger-icon pi pi-chevron-down"></span>
            </slot>
        </div>
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" class="p-cascadeselect-panel p-component" v-if="overlayVisible">
                <div class="p-cascadeselect-items-wrapper">
                    <CascadeSelectSub :options="options" :selectionPath="selectionPath" class="p-cascadeselect-items"
                        :optionLabel="optionLabel" :optionValue="optionValue" :level="0" :templates="$scopedSlots"
                        :optionGroupLabel="optionGroupLabel" :optionGroupChildren="optionGroupChildren"
                        @option-select="onOptionSelect" @optiongroup-select="onOptionGroupSelect" :dirty="dirty" :root="true" />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import CascadeSelectSub from './CascadeSelectSub';

export default {
    data() {
        return {
            selectionPath: null,
            focused: false,
            overlayVisible: false,
            dirty: false
        };
    },
    props: {
        value: null,
        options: Array,
        optionLabel: String,
        optionValue: String,
        optionGroupLabel: String,
        optionGroupChildren: Array,
        placeholder: String,
		disabled: Boolean,
        dataKey: null,
        inputId: String,
        tabindex: String,
        ariaLabelledBy: null,
        appendTo: {
            type: String,
            default: null
        }
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    overlay: null,
    beforeDestroy() {
        this.restoreAppend();
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.$refs.overlay = null;
    },
    mounted() {
        this.updateSelectionPath();
    },
    watch: {
        value() {
            this.updateSelectionPath();
        }
    },
    methods: {
        onOptionSelect(event) {
            this.$emit('input', event.value);
            this.$emit('change', event);
            this.hide();
            this.$refs.focusInput.focus();
        },
        onOptionGroupSelect(event) {
            this.dirty = true;
            this.$emit('group-change', event);
        },
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        getOptionGroupChildren(optionGroup, level) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
        },
        isOptionGroup(option, level) {
            return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
        },
        updateSelectionPath() {
            let path;
            if (this.value != null && this.options) {
                for (let option of this.options) {
                    path = this.findModelOptionInGroup(option, 0);
                    if (path) {
                        break;
                    }
                }
            }
            this.selectionPath = path;
        },
        findModelOptionInGroup(option, level) {
            if (this.isOptionGroup(option, level)) {
                let selectedOption;
                for (let childOption of this.getOptionGroupChildren(option, level)) {
                    selectedOption = this.findModelOptionInGroup(childOption, level + 1);
                    if (selectedOption) {
                        selectedOption.unshift(option);
                        return selectedOption;
                    }
                }
            }
            else if ((ObjectUtils.equals(this.value, this.getOptionValue(option), this.dataKey))) {
                return [option];
            }

            return null;
        },
        show() {
            this.$emit('before-show');
            this.overlayVisible = true;
        },
        hide() {
            this.$emit('before-hide');
            this.overlayVisible = false;
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        onClick(event) {
            if (this.disabled) {
                return;
            }
            if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {
                if (this.overlayVisible)
                    this.hide();
                else
                    this.show();
                this.$refs.focusInput.focus();
            }
        },
        onOverlayEnter() {
            this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.appendContainer();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
            this.$emit('show');
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.$emit('hide');
            this.$refs.overlay = null;
            this.dirty = false;
        },
        alignOverlay() {
            if (this.appendTo) {
                DomHandler.absolutePosition(this.$refs.overlay, this.$el);
                this.$refs.le.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
            } else {
                DomHandler.relativePosition(this.$refs.overlay, this.$el);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.$refs.overlay && !this.$el.contains(event.target) && !this.$refs.overlay.contains(event.target)) {
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
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
        },
        overlayRef(el) {
            this.$refs.overlay = el;
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
        },
        onKeyDown(event) {
            switch(event.key) {
                case 'Down':
                case 'ArrowDown':
                    if (this.overlayVisible) {
                        DomHandler.findSingle(this.$refs.overlay, '.p-cascadeselect-item').children[0].focus();
                    }
                    else if (event.altKey && this.options && this.options.length) {
                        this.show();
                    }
                    event.preventDefault();
                break;
                case 'Escape':
                    if (this.overlayVisible) {
                        this.hide();
                        event.preventDefault();
                    }
                break;
                case 'Tab':
                    this.hide();
                break;
            }
        }
    },
    computed: {
        containerClass() {
            return [
                'p-cascadeselect p-component p-inputwrapper',
                {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': this.value,
                    'p-inputwrapper-focus': this.focused || this.overlayVisible
                }
            ];
        },
        labelClass() {
            return [
                'p-cascadeselect-label',
                {
                    'p-placeholder': this.label === this.placeholder,
                    'p-cascadeselect-label-empty': !this.$slots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
                }
            ];
        },
        label() {
            if (this.selectionPath)
                return this.getOptionLabel(this.selectionPath[this.selectionPath.length - 1]);
            else
                return this.placeholder||'p-emptylabel';
        }
    },
    components: {
        'CascadeSelectSub': CascadeSelectSub
    }
}
</script>

<style>
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}
.p-cascadeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}
.p-cascadeselect .p-cascadeselect-panel {
    min-width: 100%;
}
.p-cascadeselect-panel {
    position: absolute;
}
.p-cascadeselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
}
.p-cascadeselect-item-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}
.p-cascadeselect-group-icon {
    margin-left: auto;
}
.p-cascadeselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-fluid .p-cascadeselect {
    display: flex;
}
.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}
.p-cascadeselect-sublist {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}
.p-cascadeselect-item-active {
    overflow: visible !important;
}
.p-cascadeselect-item-active > .p-cascadeselect-sublist {
    display: block;
    left: 100%;
    top: 0;
}
</style>