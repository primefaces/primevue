<template>
    <span :class="containerClass">
        <INInputText ref="input" class="p-inputnumber-input" :value="formattedValue" v-bind="$attrs" v-on="listeners" :aria-valumin="min" :aria-valuemax="max" />
        <span class="p-inputnumber-button-group" v-if="showButtons && buttonLayout === 'stacked'">
            <Button :class="upButtonClass" :icon="incrementButtonIcon" v-on="upButtonListeners" :disabled="$attrs.disabled" />
            <Button :class="downButtonClass" :icon="decrementButtonIcon" v-on="downButtonListeners" :disabled="$attrs.disabled" />
        </span>
        <INButton :class="upButtonClass" :icon="incrementButtonIcon" v-on="upButtonListeners" v-if="showButtons && buttonLayout !== 'stacked'" :disabled="$attrs.disabled" />
        <INButton :class="downButtonClass" :icon="decrementButtonIcon" v-on="downButtonListeners" v-if="showButtons && buttonLayout !== 'stacked'" :disabled="$attrs.disabled" />
    </span>
</template>

<script>
import InputText from '../inputtext/InputText';
import Button from '../button/Button';

export default {
    inheritAttrs: false,
    props: {
        value: {
            type: Number,
            default: null
        },
        format: {
            type: Boolean,
            default: true
        },
        showButtons: {
            type: Boolean,
            default: false
        },
        buttonLayout: {
            type: String,
            default: 'stacked'
        },
        incrementButtonClass: {
            type: String,
            default: null,
        },
        decrementButtonClass: {
            type: String,
            default: null,
        },
        incrementButtonIcon: {
            type: String,
            default: 'pi pi-caret-up',
        },
        decrementButtonIcon: {
            type: String,
            default: 'pi pi-caret-down',
        },
        locale: {
            type: String,
            default: undefined
        },
        localeMatcher: {
            type: String,
            default: undefined
        },
        mode: {
            type: String,
            default: 'decimal'
        },
        prefix: {
            type: String,
            default: null
        },
        suffix: {
            type: String,
            default: null
        },
        currency: {
            type: String,
            default: undefined
        },
        currencyDisplay: {
            type: String,
            default: undefined
        },
        useGrouping: {
            type: Boolean,
            default: true
        },
        minFractionDigits: {
            type: Number,
            default: undefined
        },
        maxFractionDigits: {
            type: Number,
            default: undefined
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        step: {
            type: Number,
            default: 1
        }
    },
    numberFormat: null,
    _numeral: null,
    _decimal: null,
    _group: null,
    _minusSign: null,
    _currency: null,
    _suffix: null,
    _prefix: null,
    _index: null,
    isSpecialChar: null,
    timer: null,
    created() {
        this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
        const numerals = [...new Intl.NumberFormat(this.locale, {useGrouping: false}).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        this._decimal = this.getDecimalExpression();
        this._group = this.getGroupingExpression();
        this._minusSign = this.getMinusSignExpression();
        this._currency = this.getCurrencyExpression();
        this._suffix = new RegExp(`[${this.suffix||''}]`, 'g');
        this._prefix = new RegExp(`[${this.prefix||''}]`, 'g');
        this._index = d => index.get(d);
    },
    methods: {
        getOptions() {
            return {
                localeMatcher: this.localeMatcher,
                style: this.mode,
                currency: this.currency,
                currencyDisplay: this.currencyDisplay,
                useGrouping: this.useGrouping,
                minimumFractionDigits: this.minFractionDigits,
                maximumFractionDigits: this.maxFractionDigits
            };
        },
        getDecimalExpression() {
            const formatter = new Intl.NumberFormat(this.locale, {useGrouping: false});
            return new RegExp(`[${formatter.format(1.1).trim().replace(this._numeral, '')}]`, 'g');
        },
        getGroupingExpression() {
            const formatter = new Intl.NumberFormat(this.locale, {useGrouping: true});
            return new RegExp(`[${formatter.format(1000).trim().replace(this._numeral, '')}]`, 'g');
        },
        getMinusSignExpression() {
            const formatter = new Intl.NumberFormat(this.locale, {useGrouping: false});
            return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g');
        },
        getCurrencyExpression() {
            if (this.currency) {
                const formatter = new Intl.NumberFormat(this.locale, {style: 'currency', currency: this.currency, currencyDisplay: this.currencyDisplay});
                return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._decimal, '').replace(this._group, '')}]`, 'g');
            }

            return new RegExp(`[]`,'g');
        },
        formatValue(value) {
            if (value != null) {
                if (this.format) {
                    let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
                    let formattedValue = formatter.format(value);
                    if (this.prefix) {
                        formattedValue = this.prefix + formattedValue;
                    }

                    if (this.suffix) {
                        formattedValue = formattedValue + this.suffix;
                    }

                    return formattedValue;
                }

                return value;
            }

            return '';
        },
        parseValue(text) {
            let filteredText = text.trim()
                                .replace(/\s/g, '')
                                .replace(this._currency, '')
                                .replace(this._group, '')
                                .replace(this._suffix, '')
                                .replace(this._prefix, '')
                                .replace(this._minusSign, '-')
                                .replace(this._decimal, '.')
                                .replace(this._numeral, this._index);

            if (filteredText) {
                let parsedValue = +filteredText;
                return isNaN(parsedValue) ? null : parsedValue;
            }

            return null;
        },
        repeat(event, interval, dir) {
            let i = interval || 500;

            this.clearTimer();
            this.timer = setTimeout(() => {
                this.repeat(event, 40, dir);
            }, i);

            this.spin(event, dir);
        },
        spin(event, dir) {
            let step = this.step * dir;
            let currentValue = this.value || 0;
            let newValue = currentValue + step;

            if (this.min !== null && newValue < this.min) {
                newValue = this.min;
            }

            if (this.max !== null && newValue > this.max) {
                newValue = this.max;
            }

            this.updateInput(newValue, 'spin');
            this.updateModel(event, newValue);
        },
        onUpButtonMouseDown(event) {
            this.$refs.input.$el.focus();
            this.repeat(event, null, 1);
            event.preventDefault();
        },
        onUpButtonMouseUp() {
            this.clearTimer();
        },
        onUpButtonMouseLeave() {
            this.clearTimer();
        },
        onUpButtonKeyUp() {
            this.clearTimer();
        },
        onUpButtonKeyDown(event) {
            if (event.keyCode === 32 || event.keyCode === 13) {
                this.repeat(event, null, 1);
            }
        },
        onDownButtonMouseDown(event) {
            this.$refs.input.$el.focus();
            this.repeat(event, null, -1);
            event.preventDefault();
        },
        onDownButtonMouseUp() {
            this.clearTimer();
        },
        onDownButtonMouseLeave() {
            this.clearTimer();
        },
        onDownButtonKeyUp() {
            this.clearTimer();
        },
        onDownButtonKeyDown(event) {
            if (event.keyCode === 32 || event.keyCode === 13) {
                this.repeat(event, null, -1);
            }
        },
        onInput(event) {
            debugger;
            if (this.isSpecialChar) {
                event.target.value = this.lastValue;
            }
            this.isSpecialChar = false;
        },
        onInputKeyDown(event) {
            this.lastValue = event.target.value;
            if (event.shiftKey || event.altKey) {
                this.isSpecialChar = true;
                return;
            }

            let selectionStart = event.target.selectionStart;
            let selectionEnd = event.target.selectionEnd;
            let inputValue = event.target.value;

            if (event.altKey) {
                event.preventDefault();
            }

            switch (event.which) {
                //up
                case 38:
                    this.spin(event, 1);
                    event.preventDefault();
                break;

                //down
                case 40:
                    this.spin(event, -1);
                    event.preventDefault();
                break;

                //left
                case 37:
                    if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                        event.preventDefault();
                    }
                break;

                //right
                case 39:
                    if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
                        event.preventDefault();
                    }
                break;

                //backspace
                case 8: {
                    event.preventDefault();
                    let newValueStr = null;

                    if (selectionStart === selectionEnd) {
                        let deleteChar = inputValue.charAt(selectionStart - 1);
                        let decimalCharIndex = inputValue.search(this._decimal);
                        this._decimal.lastIndex = 0;

                        if (this.isNumeralChar(deleteChar)) {
                            if (this._group.test(deleteChar)) {
                                this._group.lastIndex = 0;
                                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                            }
                            else if (this._decimal.test(deleteChar)) {
                                this._decimal.lastIndex = 0;
                                this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                            }
                            else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                            }
                            else {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                            }
                        }

                        if (newValueStr != null) {
                            this.updateValue(event, newValueStr, 'delete-single');
                        }
                    }
                    else {
                        newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                        this.updateValue(event, newValueStr, 'delete-range');
                    }

                    break;
                }

                default:
                break;
            }
        },
        onInputKeyPress(event) {
            event.preventDefault();
            let code = event.which || event.keyCode;
            let char = String.fromCharCode(code);

            if ((48 <= code && code <= 57) || this.isMinusSign(char)) {
                this.insert(event, char);
            }
        },
        onPaste(event) {
            event.preventDefault();
            let data = (event.clipboardData || window['clipboardData']).getData('Text');
            if (data) {
                let filteredData = this.parseValue(data);
                if (filteredData != null) {
                    this.insert(event, filteredData.toString());
                }
            }
        },
        isMinusSign(char) {
            if (this._minusSign.test(char)) {
                this._minusSign.lastIndex = 0;
                return true;
            }

            return false;
        },
        insert(event, text) {
            let selectionStart = this.$refs.input.$el.selectionStart;
            let selectionEnd = this.$refs.input.$el.selectionEnd;
            let inputValue = this.$refs.input.$el.value.trim();
            let maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
            let newValueStr;
            let decimalCharIndex = inputValue.search(this._decimal);
            this._decimal.lastIndex = 0;

            if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {
                    newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length);
                    this.updateValue(event, newValueStr, 'insert');
                }
            }
            else {
                newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                this.updateValue(event, newValueStr, 'insert');
            }
        },
        insertText(value, text, start, end) {
            let newValueStr;

            if ((end - start) === value.length)
                newValueStr = text;
            else if (start === 0)
                newValueStr = text + value.slice(end);
            else if (end === value.length)
                newValueStr = value.slice(0, start) + text;
            else
                newValueStr = value.slice(0, start) + text + value.slice(end);

            return newValueStr;
        },
        deleteRange(value, start, end) {
            let newValueStr;

            if ((end - start) === value.length)
                newValueStr = '';
            else if (start === 0)
                newValueStr = value.slice(end);
            else if (end === value.length)
                newValueStr = value.slice(0, start);
            else
                newValueStr = value.slice(0, start) + value.slice(end);

            return newValueStr;
        },
        initCursor() {
            let selectionStart = this.$refs.input.$el.selectionStart;
            let inputValue = this.$refs.input.$el.value;
            let valueLength = inputValue.length;
            let index = null;

            let char = inputValue.charAt(selectionStart);
            if (this.isNumeralChar(char)) {
                return;
            }

            //left
            let i = selectionStart - 1;
            while (i >= 0) {
                char = inputValue.charAt(i);
                if (this.isNumeralChar(char)) {
                    index = i;
                    break;
                }
                else {
                    i--;
                }
            }

            if (index !== null) {
                this.$refs.input.$el.setSelectionRange(index + 1, index + 1);
            }
            else {
                i = selectionStart + 1;
                while (i < valueLength) {
                    char = inputValue.charAt(i);
                    if (this.isNumeralChar(char)) {
                        index = i;
                        break;
                    }
                    else {
                        i++;
                    }
                }

                if (index !== null) {
                    this.$refs.input.$el.setSelectionRange(index, index);
                }
            }
        },
        onInputClick() {
            this.initCursor();
        },
        isNumeralChar(char) {
            if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
                this.resetRegex();
                return true;
            }

            return false;
        },
        resetRegex() {
            this._numeral.lastIndex =  0;
            this._decimal.lastIndex =  0;
            this._group.lastIndex =  0;
            this._minusSign.lastIndex =  0;
        },
        updateValue(event, valueStr, operation) {
            if (valueStr != null) {
                let newValue = this.parseValue(valueStr);
                let valid = this.isWithinRange(newValue);

                if (valid) {
                    this.updateInput(newValue, operation);
                    this.updateModel(event, newValue);
                }
            }
        },
        isWithinRange(value) {
            return value == null || ((this.min == null || value > this.min) && (this.max == null || value < this.max));
        },
        updateInput(value, operation) {
            let currentLength = this.$refs.input.$el.value.length;

            if (currentLength === 0) {
                this.$refs.input.$el.value = this.formatValue(value);
                this.$refs.input.$el.setSelectionRange(0, 0);
                this.initCursor();
                this.$refs.input.$el.setSelectionRange(this.$refs.input.$el.selectionStart + 1, this.$refs.input.$el.selectionStart + 1);
            }
            else {
                let selectionStart = this.$refs.input.$el.selectionEnd;
                let selectionEnd = this.$refs.input.$el.selectionEnd;
                this.$refs.input.$el.value = this.formatValue(value);
                let newLength = this.$refs.input.$el.value.length;

                if (newLength === currentLength) {
                    if (operation === 'insert')
                        this.$refs.input.$el.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
                    else if (operation === 'delete-single')
                        this.$refs.input.$el.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
                    else if (operation === 'delete-range')
                        this.$refs.input.$el.setSelectionRange(selectionStart, selectionStart);
                    else if (operation === 'spin')
                        this.$refs.input.$el.setSelectionRange(selectionStart, selectionEnd);
                }
                else {
                    selectionEnd = selectionEnd + (newLength - currentLength);
                    this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
                }
            }

            this.$refs.input.$el.setAttribute('aria-valuenow', value);
        },
        updateModel(event, value) {
            this.$emit('input', value);
        },
        onInputFocus(event) {
            this.focused = true;
            this.$emit('blur', event);
        },
        onInputBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        clearTimer() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-inputnumber p-component', {
                'p-inputwrapper-filled': this.filled,
                'p-inputwrapper-focus': this.focused,
                'p-inputnumber-buttons-stacked': this.buttonLayout === 'stacked',
                'p-inputnumber-buttons-horizontal': this.buttonLayout === 'horizontal',
                'p-inputnumber-buttons-vertical': this.buttonLayout === 'vertical'
            }];
        },
        upButtonClass() {
            return ['p-inputnumber-button p-inputnumber-button-up', this.incrementButtonClass];
        },
        downButtonClass() {
            return ['p-inputnumber-button p-inputnumber-button-down', this.decrementButtonClass];
        },
        filled() {
            return (this.value != null && this.value.toString().length > 0)
        },
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.onInput(event),
                keydown: event => this.onInputKeyDown(event),
                keypress: event => this.onInputKeyPress(event),
                paste: event => this.onPaste(event),
                click: event => this.onInputClick(event),
                focus: event => this.onInputFocus(event),
                blur: event => this.onInputBlur(event)
            };
        },
        upButtonListeners() {
            return {
                mousedown: event => this.onUpButtonMouseDown(event),
                mouseup: event => this.onUpButtonMouseUp(event),
                mouseleave: event => this.onUpButtonMouseLeave(event),
                keydown: event => this.onUpButtonKeyDown(event),
                keyup: event => this.onUpButtonKeyUp(event)
            }
        },
        downButtonListeners() {
            return {
                mousedown: event => this.onDownButtonMouseDown(event),
                mouseup: event => this.onDownButtonMouseUp(event),
                mouseleave: event => this.onDownButtonMouseLeave(event),
                keydown: event => this.onDownButtonKeyDown(event),
                keyup: event => this.onDownButtonKeyUp(event)
            }
        },
        formattedValue() {
            return this.formatValue(this.value);
        }
    },
    components: {
        'INInputText': InputText,
        'INButton': Button
    }
}
</script>

<style>
.p-inputnumber {
    display: inline-flex;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button .p-button-text,
.p-inputnumber-buttons-horizontal .p-inputnumber-button .p-button-text {
    display: none;
}

.p-inputnumber .p-inputnumber-button span {
    font-size: inherit;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-inputnumber-button {
    flex: 1 1 auto;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button-up {
    order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button-down {
    order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-vertical {
    flex-direction: column;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button-up {
    order: 1;
    flex: 1 1 auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: auto;
}

.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button-down {
    order: 3;
    flex: 1 1 auto;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: auto;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input,
.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-button {
    width: 100%;
}
</style>