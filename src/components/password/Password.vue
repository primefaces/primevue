<template>
    <input ref="input" type="password" :class="['p-inputtext p-component', {'p-filled': filled}]" :value="modelValue"
        @input="onInput" @focus="onFocus" @blur="onBlur" @keyup="onKeyUp" v-bind="$attrs" />
    <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
        <div :ref="overlayRef" class="p-password-panel p-component" v-if="overlayVisible">
            <div class="p-password-meter" :style="{'background-position': meterPosition}"></div>
            <div class="p-password-info">
                {{infoText}}
            </div>
        </div>
    </transition>
</template>

<script>
import {ConnectedOverlayScrollHandler} from 'primevue/utils';
import {DomHandler} from 'primevue/utils';

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
        }
    },
    data() {
        return {
            overlayVisible: false,
            meterPosition: '',
            infoText: this.promptLabel
        };
    },
    mediumCheckRegExp: null,
    strongCheckRegExp: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    mounted() {
        this.mediumCheckRegExp = new RegExp(this.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.strongRegex);
    },
    beforeUnmount() {
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    },
    methods: {
        onOverlayEnter() {
            this.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.input) + 'px';
            DomHandler.absolutePosition(this.overlay, this.$refs.input);
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayLeave() {
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.overlay = null;
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
            if (this.feedback) {
                this.overlayVisible = true;
            }
        },
        onBlur() {
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input, () => {
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
        }
    },
    computed: {
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
    }
}
</script>
