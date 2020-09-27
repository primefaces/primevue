<template>
    <input ref="input" type="password" :class="['p-inputtext p-component', {'p-filled': filled}]" :value="modelValue"
        @input="onInput" @focus="onFocus" @blur="onBlur" @keyup="onKeyUp" />
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        modelValue: String,
        promptLabel: {
            type: String,
            default: 'Enter a password'
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
            default: 'Weak'
        },
        mediumLabel: {
            type: String,
            default: 'Medium'
        },
        strongLabel: {
            type: String,
            default: 'Strong'
        },
        feedback: {
            type: Boolean,
            default: true
        }
    },
    panel: null,
    meter: null,
    info: null,
    mediumCheckRegExp: null,
    strongCheckRegExp: null,
    scrollHandler: null,
    mounted() {
        this.mediumCheckRegExp = new RegExp(this.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.strongRegex);
    },
    beforeUnmount() {
        this.unbindScrollListener();
        this.scrollHandler = null;
    },
    methods: {
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
        createPanel() {
            this.panel = document.createElement('div');
            this.panel.className = 'p-password-panel p-component p-password-panel-overlay p-connected-overlay';
            this.meter = document.createElement('div');
            this.meter.className = 'p-password-meter';
            this.info = document.createElement('div');
            this.info.className = 'p-password-info';
            this.info.textContent = this.promptLabel;

            this.panel.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
            this.panel.appendChild(this.meter);
            this.panel.appendChild(this.info);
            document.body.appendChild(this.panel);
        },
        onInput(event)  {
            this.$emit('update:modelValue', event.target.value)
        },
        showOverlay() {
            if (this.feedback) {
                if (!this.panel) {
                    this.createPanel();
                }

                this.panel.style.zIndex = String(DomHandler.generateZIndex());
                this.panel.style.display = 'block';
                setTimeout(() => {
                    DomHandler.addClass(this.panel, 'p-connected-overlay-visible');
                    DomHandler.removeClass(this.panel, 'p-connected-overlay-hidden');
                    this.bindScrollListener();
                }, 1);
                DomHandler.absolutePosition(this.panel, this.$el);
            }
        },
        hideOverlay() {
            if (this.panel) {
                DomHandler.addClass(this.panel, 'p-connected-overlay-hidden');
                DomHandler.removeClass(this.panel, 'p-connected-overlay-visible');
                 this.unbindScrollListener();

                setTimeout(() => {
                    this.panel.style.display = 'none';
                    DomHandler.removeClass(this.panel, 'p-connected-overlay-hidden');
                }, 150);
            }
        },
        onFocus() {
            this.showOverlay();
        },
        onBlur() {
            this.hideOverlay();
        },
        onKeyUp(event) {
            if (this.panel) {
                let value = event.target.value;
                let label = null;
                let meterPos = null;

                switch (this.testStrength(value)) {
                    case 1:
                        label = this.weakLabel;
                        meterPos = '0px -10px';
                        break;

                    case 2:
                        label = this.mediumLabel;
                        meterPos = '0px -20px';
                        break;

                    case 3:
                        label = this.strongLabel;
                        meterPos = '0px -30px';
                        break;

                    default:
                        label = this.promptLabel;
                        meterPos = '0px 0px';
                        break;
                }

                this.meter.style.backgroundPosition = meterPos;
                this.info.textContent = label;

                if (!DomHandler.hasClass(this.panel, 'p-connected-overlay-visible')) {
                    this.showOverlay();
                }
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                const { id } = this.$attrs;
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input, id, () => {
                    if (DomHandler.hasClass(this.panel, 'p-connected-overlay-visible')) {
                        this.hideOverlay();
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        }
    },
    computed: {
        filled() {
            return (this.modelValue != null && this.modelValue.toString().length > 0)
        }
    }
}
</script>
