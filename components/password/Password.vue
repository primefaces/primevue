<template>
    <div :class="containerClass">
        <PInputText ref="input" :id="inputId" :type="inputType" :class="inputClass" :style="inputStyle" :value="modelValue" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel"
            :aria-controls="(panelProps&&panelProps.id)||panelId||panelUniqueId" :aria-expanded="overlayVisible" :aria-haspopup="true" :placeholder="placeholder"
            @input="onInput" @focus="onFocus" @blur="onBlur" @keyup="onKeyUp" v-bind="inputProps" />
        <i v-if="toggleMask" :class="toggleIconClass" @click="onMaskToggle" />
        <span class="p-hidden-accessible" aria-live="polite">
            {{infoText}}
        </span>
        <Portal :appendTo="appendTo">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div :ref="overlayRef" :id="panelId||panelUniqueId" :class="panelStyleClass" :style="panelStyle" v-if="overlayVisible" @click="onOverlayClick" v-bind="panelProps">
                    <slot name="header"></slot>
                    <slot name="content">
                        <div class="p-password-meter">
                            <div :class="strengthClass" :style="{'width': meter ? meter.width : ''}"></div>
                        </div>
                        <div class="p-password-info">{{infoText}}</div>
                    </slot>
                    <slot name="footer"></slot>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import {ConnectedOverlayScrollHandler,DomHandler,ZIndexUtils,UniqueComponentId} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import InputText from 'primevue/inputtext';
import Portal from 'primevue/portal';

export default {
    name: 'Password',
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    props: {
        modelValue: String,
        promptLabel: {
            type: String,
            default: null
        },
        mediumRegex: {
            type: String,
            default: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})' // eslint-disable-line
        },
        strongRegex: {
            type: String,
            default: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})' // eslint-disable-line
        },
        weakLabel: {
            type: String,
            default: null
        },
        mediumLabel: {
            type: String,
            default: null
        },
        strongLabel: {
            type: String,
            default: null
        },
        feedback: {
            type: Boolean,
            default: true
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        toggleMask: {
            type: Boolean,
            default: false
        },
        hideIcon: {
            type: String,
            default: 'pi pi-eye-slash'
        },
        showIcon: {
            type: String,
            default: 'pi pi-eye'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        inputId: null,
        inputClass: null,
        inputStyle: null,
        inputProps: null,
        panelId: null,
        panelClass: null,
        panelStyle: null,
        panelProps: null,
        'aria-labelledby': {
            type: String,
			default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    data() {
        return {
            overlayVisible: false,
            meter: null,
            infoText: null,
            focused: false,
            unmasked: false
        };
    },
    mediumCheckRegExp: null,
    strongCheckRegExp: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    mounted() {
        this.infoText = this.promptText;
        this.mediumCheckRegExp = new RegExp(this.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.strongRegex);
    },
    beforeUnmount() {
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
    methods: {
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            this.alignOverlay();
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayLeave() {
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.overlay = null;
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            if (this.appendTo === 'self') {
                DomHandler.relativePosition(this.overlay, this.$refs.input.$el);
            }
            else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.input.$el) + 'px';
                DomHandler.absolutePosition(this.overlay, this.$refs.input.$el);
            }
        },
        testStrength(str) {
            let level = 0;

            if (this.strongCheckRegExp.test(str))
                level = 3;
            else if (this.mediumCheckRegExp.test(str))
                level = 2;
            else if (str.length)
                level = 1;

            return level;
        },
        onInput(event)  {
            this.$emit('update:modelValue', event.target.value)
        },
        onFocus(event) {
            this.focused = true;
            if (this.feedback) {
                this.overlayVisible = true;
            }

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            if (this.feedback) {
                this.overlayVisible = false;
            }

            this.$emit('blur', event);
        },
        onKeyUp(event) {
            if (this.feedback) {
                const value = event.target.value;
                let label = null;
                let meter = null;

                switch (this.testStrength(value)) {
                    case 1:
                        label = this.weakText;
                        meter = {
                            strength: 'weak',
                            width: '33.33%'
                        };
                        break;

                    case 2:
                        label = this.mediumText;
                        meter = {
                            strength: 'medium',
                            width: '66.66%'
                        };
                        break;

                    case 3:
                        label = this.strongText;
                        meter = {
                            strength: 'strong',
                            width: '100%'
                        };
                        break;

                    default:
                        label = this.promptText;
                        meter = null;
                        break;
                }

                this.meter = meter;
                this.infoText = label;

                //escape
                if (event.which === 27) {
                    this.overlayVisible && (this.overlayVisible = false);
                    return;
                }

                if (!this.overlayVisible) {
                    this.overlayVisible = true;
                }
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input.$el, () => {
                    if (this.overlayVisible) {
                        this.overlayVisible = false;
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
                        this.overlayVisible = false;
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
        onMaskToggle() {
            this.unmasked = !this.unmasked;
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
            return ['p-password p-component p-inputwrapper', {
                'p-inputwrapper-filled': this.filled,
                'p-inputwrapper-focus': this.focused,
                'p-input-icon-right': this.toggleMask
            }];
        },
        inputFieldClass() {
            return ['p-password-input', {
                'p-disabled': this.disabled
            }];
        },
        panelStyleClass() {
            return ['p-password-panel p-component', this.panelClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        toggleIconClass() {
            return this.unmasked ? this.hideIcon : this.showIcon;
        },
        strengthClass() {
            return `p-password-strength ${this.meter ? this.meter.strength : ''}`;
        },
        inputType() {
            return this.unmasked ? 'text' : 'password';
        },
        filled() {
            return (this.modelValue != null && this.modelValue.toString().length > 0)
        },
        weakText() {
            return this.weakLabel || this.$primevue.config.locale.weak;
        },
        mediumText() {
            return this.mediumLabel || this.$primevue.config.locale.medium;
        },
        strongText() {
            return this.strongLabel || this.$primevue.config.locale.strong;
        },
        promptText() {
            return this.promptLabel || this.$primevue.config.locale.passwordPrompt;
        },
        panelUniqueId() {
            return UniqueComponentId() + '_panel';
        }
    },
    components: {
        'PInputText': InputText,
        'Portal': Portal
    }
}
</script>

<style>
.p-password {
    position: relative;
    display: inline-flex;
}

.p-password-panel {
    position: absolute;
    top: 0;
    left: 0;
}

.p-password .p-password-panel {
    min-width: 100%;
}

.p-password-meter {
    height: 10px;
}

.p-password-strength {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
}

.p-fluid .p-password {
    display: flex;
}
</style>
