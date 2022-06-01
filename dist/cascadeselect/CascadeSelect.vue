<template>
    <div ref="container" :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input ref="focusInput" type="text" :id="inputId" readonly :disabled="disabled" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :tabindex="tabindex"
                aria-haspopup="listbox" :aria-expanded="overlayVisible" :aria-labelledby="ariaLabelledBy" />
        </div>
        <span :class="labelClass">
            <slot name="value" :value="modelValue" :placeholder="placeholder">
                {{label}}
            </slot>
        </span>
        <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" :aria-expanded="overlayVisible">
            <slot name="indicator">
                <span :class="dropdownIconClass"></span>
            </slot>
        </div>
        <Teleport :to="appendTarget" :disabled="appendDisabled">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div :ref="overlayRef" :class="panelStyleClass" v-if="overlayVisible" @click="onOverlayClick">
                    <div class="p-cascadeselect-items-wrapper">
                        <CascadeSelectSub :options="options" :selectionPath="selectionPath"
                            :optionLabel="optionLabel" :optionValue="optionValue" :level="0" :templates="$slots"
                            :optionGroupLabel="optionGroupLabel" :optionGroupChildren="optionGroupChildren"
                            @option-select="onOptionSelect" @optiongroup-select="onOptionGroupSelect" :dirty="dirty" :root="true" />
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script>
import {ConnectedOverlayScrollHandler,ObjectUtils,DomHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import CascadeSelectSub from './CascadeSelectSub.vue';

export default {
    name: 'CascadeSelect',
    emits: ['update:modelValue','change','group-change', 'before-show','before-hide','hide','show'],
    data() {
        return {
            selectionPath: null,
            focused: false,
            overlayVisible: false,
            dirty: false
        };
    },
    props: {
        modelValue: null,
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
            default: 'body'
        },
        panelClass: null,
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner pi-spin'
        }
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    overlay: null,
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
    mounted() {
        this.updateSelectionPath();
    },
    watch: {
        modelValue() {
            this.updateSelectionPath();
        }
    },
    methods: {
        onOptionSelect(event) {
            this.$emit('update:modelValue', event.value);
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
            if (this.modelValue != null && this.options) {
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
            else if ((ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.dataKey))) {
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
            if (this.disabled || this.loading) {
                return;
            }

            if (!this.overlay || !this.overlay.contains(event.target)) {
                if (this.overlayVisible)
                    this.hide();
                else
                    this.show();

                this.$refs.focusInput.focus();
            }
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
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
            this.overlay = null;
            this.dirty = false;
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            if (this.appendDisabled) {
                DomHandler.relativePosition(this.overlay, this.$el);
            }
            else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
                DomHandler.absolutePosition(this.overlay, this.$el);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.overlay && !this.$el.contains(event.target) && !this.overlay.contains(event.target)) {
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
            this.overlay = el;
        },
        onKeyDown(event) {
            switch(event.key) {
                case 'Down':
                case 'ArrowDown':
                    if (this.overlayVisible) {
                        DomHandler.findSingle(this.overlay, '.p-cascadeselect-item').children[0].focus();
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
            return [
                'p-cascadeselect p-component p-inputwrapper',
                {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': this.modelValue,
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
        },
        panelStyleClass() {
            return ['p-cascadeselect-panel p-component', this.panelClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        appendDisabled() {
            return this.appendTo === 'self';
        },
        appendTarget() {
            return this.appendDisabled ? null : this.appendTo;
        },
        dropdownIconClass() {
            return ['p-cascadeselect-trigger-icon', this.loading ? this.loadingIcon : 'pi pi-chevron-down'];
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
    top: 0;
    left: 0;
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
    min-width: 100%;
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
