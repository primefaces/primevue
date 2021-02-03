<template>
    <div :class="containerClass" :style="style">
        <PInputText ref="input" :type="inputType" :value="modelValue" @input="onInput" @focus="onFocus" @blur="onBlur" @keyup="onKeyUp" v-bind="$attrs" autocomplete="fff"/>
        <i v-if="toggleMask" :class="toggleIconClass" @click="onMaskToggle" />
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div :ref="overlayRef" class="p-password-panel p-component" v-if="overlayVisible">
                <slot name="header"></slot>
                <slot name="content">
                     <div class="p-password-meter" :style="{'background-position': meterPosition}"></div>
                    <div class="p-password-info">{{infoText}}</div>
                </slot>
                <slot name="footer"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import {ConnectedOverlayScrollHandler} from 'primevue/utils';
import {DomHandler} from 'primevue/utils';
import InputText from 'primevue/inputtext';

export default {
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
            default: null
        },
        toggleMask: {
            type: Boolean,
            default: false
        },
        style: null,
        class: null
    },
    data() {
        return {
            overlayVisible: false,
            meterPosition: '',
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
        this.restoreAppend();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    },
    methods: {
        onOverlayEnter() {
            this.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.appendContainer();
            this.alignOverlay();
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayLeave() {
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.overlay = null;
        },
        alignOverlay() {
            if (this.appendTo) {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.input.$el) + 'px';
                DomHandler.absolutePosition(this.overlay, this.$refs.input.$el);
            }
            else {
                DomHandler.relativePosition(this.overlay, this.$refs.input.$el);
            }  
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
                let value = event.target.value;
                let label = null;
                let meterPos = null;

                switch (this.testStrength(value)) {
                    case 1:
                        label = this.weakText;
                        meterPos = '0px -10px';
                        break;

                    case 2:
                        label = this.mediumText;
                        meterPos = '0px -20px';
                        break;

                    case 3:
                        label = this.strongText;
                        meterPos = '0px -30px';
                        break;

                    default:
                        label = this.promptText;
                        meterPos = '0px 0px';
                        break;
                }

                this.meterPosition = meterPos;
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
        inputClass() {
            return ['p-password-input', {
                'p-disabled': this.$attrs.disabled
            }];
        },
        toggleIconClass() {
            return this.unmasked ? 'pi pi-eye-slash' : 'pi pi-eye';
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
}

.p-password .p-password-panel {
    min-width: 100%;
}

.p-password-meter {
    height: 10px;
}
</style>
