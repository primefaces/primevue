<template>
    <div :class="containerClass" :style="style">
        <PInputText ref="input" :class="inputFieldClass" :style="inputStyle" :type="inputType" :value="modelValue" @input="onInput" @focus="onFocus" @blur="onBlur" @keyup="onKeyUp" v-bind="$attrs" />
        <i v-if="toggleMask" :class="toggleIconClass" @click="onMaskToggle" />
        <Teleport :to="appendTarget" :disabled="appendDisabled">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div :ref="overlayRef" :class="panelStyleClass" v-if="overlayVisible" @click="onOverlayClick">
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
        </Teleport>
    </div>
</template>

<script>
import {ConnectedOverlayScrollHandler,DomHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import InputText from 'primevue/inputtext';

export default {
    name: 'Password',
    emits: ['update:modelValue'],
    inheritAttrs: false,
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
        inputClass: String,
        inputStyle: null,
        style: null,
        class: String,
        panelClass: String
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
            if (this.appendDisabled) {
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
        onFocus() {
            this.focused = true;
            if (this.feedback) {
                this.overlayVisible = true;
            }
        },
        onBlur() {
            this.focused = false;
            if (this.feedback) {
                this.overlayVisible = false;
            }
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
                    if (this.overlayVisible) {
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
            return ['p-password p-component p-inputwrapper', this.class, {
                'p-inputwrapper-filled': this.filled,
                'p-inputwrapper-focus': this.focused,
                'p-input-icon-right': this.toggleMask
            }];
        },
        inputFieldClass() {
            return ['p-password-input', this.inputClass, {
                'p-disabled': this.$attrs.disabled
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
        appendDisabled() {
            return this.appendTo === 'self';
        },
        appendTarget() {
            return this.appendDisabled ? null : this.appendTo;
        }
    },
    components: {
        'PInputText': InputText
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
