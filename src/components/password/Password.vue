<template>
    <input ref="input" type="password" :class="['p-inputtext p-component', {'p-filled': filled}]" v-on="listeners" :value="value" />
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        value: String,
        promptLabel: {
            type: String,
            default: 'Enter a password'
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
    methods: {
        testStrength(str) {
            let grade = 0;
            let val;

            val = str.match('[0-9]');
            grade += this.normalize(val ? val.length : 1/4, 1) * 25;

            val = str.match('[a-zA-Z]');
            grade += this.normalize(val ? val.length : 1/2, 3) * 10;

            val = str.match('[!@#$%^&*?_~.,;=]');
            grade += this.normalize(val ? val.length : 1/6, 1) * 35;

            val = str.match('[A-Z]');
            grade += this.normalize(val ? val.length : 1/6, 1) * 30;

            grade *= str.length / 8;

            return grade > 100 ? 100 : grade;
        },
        normalize(x, y) {
            let diff = x - y;

            if(diff <= 0)
                return x / y;
            else
                return 1 + 0.5 * (x / (x + y/4));
        },
        createPanel() {
            this.panel = document.createElement('div');
            this.panel.className = 'p-password-panel p-component p-hidden p-password-panel-overlay p-input-overlay';
            this.meter = document.createElement('div');
            this.meter.className = 'p-password-meter';
            this.info = document.createElement('div');
            this.info.className = 'p-password-info';
            this.info.textContent = this.promptLabel;

            this.panel.style.minWidth = DomHandler.getOuterWidth(this.$refs.input) + 'px';
            this.panel.appendChild(this.meter);
            this.panel.appendChild(this.info);
            document.body.appendChild(this.panel);
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
                            DomHandler.addClass(this.panel, 'p-input-overlay-visible');
                            DomHandler.removeClass(this.panel, 'p-input-overlay-hidden');
                        }, 1);
                        DomHandler.absolutePosition(this.panel, this.$refs.input);
                    }

                    this.$emit('focus', event);
                },
                blur: event => {
                    if (this.panel) {
                        DomHandler.addClass(this.panel, 'p-input-overlay-hidden');
                        DomHandler.removeClass(this.panel, 'p-input-overlay-visible');

                        setTimeout(() => {
                            vm.panel.style.display = 'none';
                            DomHandler.removeClass(this.panel, 'p-input-overlay-hidden');
                        }, 150);
                    }

                    this.$emit('blur', event);
                },
                keyup: event => {
                    if(this.panel) {
                        let value = event.target.value;
                        let label = null;
                        let meterPos = null;

                        if (value.length === 0) {
                            label = this.promptLabel;
                            meterPos = '0px 0px';
                        }
                        else {
                            let score = this.testStrength(value);

                            if (score < 30) {
                                label = this.weakLabel;
                                meterPos = '0px -10px';
                            }
                            else if (score >= 30 && score < 80) {
                                label = this.mediumLabel;
                                meterPos = '0px -20px';
                            }
                            else if (score >= 80) {
                                label = this.strongLabel;
                                meterPos = '0px -30px';
                            }
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