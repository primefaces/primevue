<template>
    <input ref="input" type="password" :class="['p-inputtext p-component', {'p-filled': filled}]" v-on="listeners" :value="value" />
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        value: String,
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
    resizeListener: null,
    scrollHandler: null,
    mounted() {
        this.mediumCheckRegExp = new RegExp(this.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.strongRegex);
    },
    beforeDestroy() {
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.panel = null;
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

            this.panel.style.minWidth = DomHandler.getOuterWidth(this.$refs.input) + 'px';
            this.panel.appendChild(this.meter);
            this.panel.appendChild(this.info);
            document.body.appendChild(this.panel);
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input, () => {
                    if (this.panel && this.panel.offsetParent) {
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
                    if (this.panel && this.panel.offsetParent) {
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
        hide() {
            if (this.panel) {
                DomHandler.addClass(this.panel, 'p-connected-overlay-hidden');
                DomHandler.removeClass(this.panel, 'p-connected-overlay-visible');

                setTimeout(() => {
                    if (this.panel) {
                        this.panel.style.display = 'none';
                        DomHandler.removeClass(this.panel, 'p-connected-overlay-hidden');
                    }
                }, 150);

                this.unbindScrollListener();
                this.unbindResizeListener();
            }
        }
    },
    computed: {
        listeners() {
            let vm = this;

            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value),
                focus: event => {
                    if (this.feedback) {
                        if (!this.panel) {
                            this.createPanel();
                        }

                        vm.panel.style.zIndex = String(DomHandler.generateZIndex());
                        vm.panel.style.display = 'block';
                        setTimeout(() => {
                            DomHandler.addClass(this.panel, 'p-connected-overlay-visible');
                            DomHandler.removeClass(this.panel, 'p-connected-overlay-hidden');
                        }, 1);
                        DomHandler.absolutePosition(this.panel, this.$refs.input);
                        this.bindScrollListener();
                        this.bindResizeListener();
                    }

                    this.$emit('focus', event);
                },
                blur: event => {
                    vm.hide();

                    this.$emit('blur', event);
                },
                keyup: event => {
                    if(this.panel) {
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

                        vm.meter.style.backgroundPosition = meterPos;
                        vm.info.textContent = label;
                    }

                    this.$emit('keyup', event);
                }
            };
        },
        filled() {
            return (this.value != null && this.value.toString().length > 0)
        }
    }
}
</script>