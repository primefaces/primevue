<template>
    <span :class="containerClass">
        <INInputText ref="input" :class="['p-inputnumber-input', inputClass]" :style="inputStyle" :value="formattedValue" v-bind="$attrs" v-on="listeners" :aria-valumin="min" :aria-valuemax="max" />
        <span class="p-inputnumber-button-group" v-if="showButtons && buttonLayout === 'stacked'">
            <INButton :class="upButtonClass" :icon="incrementButtonIcon" v-on="upButtonListeners" :disabled="$attrs.disabled" />
            <INButton :class="downButtonClass" :icon="decrementButtonIcon" v-on="downButtonListeners" :disabled="$attrs.disabled" />
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
            default: 'pi pi-angle-up',
        },
        decrementButtonIcon: {
            type: String,
            default: 'pi pi-angle-down',
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
        },
        inputStyle: null,
        inputClass: null
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
    groupChar: '',
    isSpecialChar: null,
    prefixChar: null,
    suffixChar: null,
    timer: null,
    data() {
        return {
            focused: false
        }
    },
    watch: {
		locale(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        localeMatcher(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        mode(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        currency(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        currencyDisplay(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        useGrouping(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        minFractionDigits(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        maxFractionDigits(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        suffix(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        },
        prefix(newValue, oldValue) {
            this.updateConstructParser(newValue, oldValue);
        }
    },
    created() {
        this.constructParser();
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
        constructParser() {
            this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
            const numerals = [...new Intl.NumberFormat(this.locale, {useGrouping: false}).format(9876543210)].reverse();
            const index = new Map(numerals.map((d, i) => [d, i]));
            this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
            this._decimal = this.getDecimalExpression();
            this._group = this.getGroupingExpression();
            this._minusSign = this.getMinusSignExpression();
            this._currency = this.getCurrencyExpression();
            this._suffix = this.getSuffixExpression();
            this._prefix = this.getPrefixExpression();
            this._index = d => index.get(d);
        },
        updateConstructParser(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.constructParser();
            }
        },
        escapeRegExp(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        },
        getDecimalExpression() {
            const formatter = new Intl.NumberFormat(this.locale, {useGrouping: false});
            return new RegExp(`[${formatter.format(1.1).trim().replace(this._numeral, '')}]`, 'g');
        },
        getGroupingExpression() {
            const formatter = new Intl.NumberFormat(this.locale, {useGrouping: true});
            this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
            return new RegExp(`[${this.groupChar}]`, 'g');
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
        getPrefixExpression() {
            if (this.prefix) {
                this.prefixChar = this.prefix;
            }
            else {
                const formatter = new Intl.NumberFormat(this.locale, {style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay});
                this.prefixChar = formatter.format(1).split('1')[0];
            }

            return new RegExp(`${this.escapeRegExp(this.prefixChar||'')}`, 'g');
        },
        getSuffixExpression() {
            if (this.suffix) {
                this.suffixChar = this.suffix;
            }
            else {
                const formatter = new Intl.NumberFormat(this.locale, {style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay,
                    minimumFractionDigits: 0, maximumFractionDigits: 0});
                this.suffixChar = formatter.format(1).split('1')[1];
            }

            return new RegExp(`${this.escapeRegExp(this.suffixChar||'')}`, 'g');
        },
        formatValue(value) {
            if (value != null) {
                if (value === '-') { // Minus sign
                    return value;
                }

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

                return value.toString();
            }

            return '';
        },
        parseValue(text) {
            let filteredText = text
                                .replace(this._suffix, '')
                                .replace(this._prefix, '')
                                .trim()
                                .replace(/\s/g, '')
                                .replace(this._currency, '')
                                .replace(this._group, '')
                                .replace(this._minusSign, '-')
                                .replace(this._decimal, '.')
                                .replace(this._numeral, this._index);

            if (filteredText) {
                if (filteredText === '-') // Minus sign
                    return filteredText;

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
            let currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
            let newValue = this.validateValue(currentValue + step);

            this.updateInput(newValue, null, 'spin');
            this.updateModel(event, newValue);
        },
        onUpButtonMouseDown(event) {
            if (!this.$attrs.disabled) {
                this.$refs.input.$el.focus();
                this.repeat(event, null, 1);
                event.preventDefault();
            }
        },
        onUpButtonMouseUp() {
            if (!this.$attrs.disabled) {
                this.clearTimer();
            }
        },
        onUpButtonMouseLeave() {
            if (!this.$attrs.disabled) {
                this.clearTimer();
            }
        },
        onUpButtonKeyUp() {
            if (!this.$attrs.disabled) {
                this.clearTimer();
            }
        },
        onUpButtonKeyDown(event) {
            if (event.keyCode === 32 || event.keyCode === 13) {
                this.repeat(event, null, 1);
            }
        },
        onDownButtonMouseDown(event) {
            if (!this.$attrs.disabled) {
                this.$refs.input.$el.focus();
                this.repeat(event, null, -1);
                event.preventDefault();
            }
        },
        onDownButtonMouseUp() {
            if (!this.$attrs.disabled) {
                this.clearTimer();
            }
        },
        onDownButtonMouseLeave() {
            if (!this.$attrs.disabled) {
                this.clearTimer();
            }
        },
        onDownButtonKeyUp() {
            if (!this.$attrs.disabled) {
                this.clearTimer();
            }
        },
        onDownButtonKeyDown(event) {
            if (event.keyCode === 32 || event.keyCode === 13) {
                this.repeat(event, null, -1);
            }
        },
        onInput() {
            if (this.isSpecialChar) {
                this.$refs.input.$el.value = this.lastValue;
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
            let newValueStr = null;

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

                //enter
                case 13:
                    newValueStr = this.validateValue(this.parseValue(inputValue));
                    this.$refs.input.$el.value = this.formatValue(newValueStr);
                    this.$refs.input.$el.setAttribute('aria-valuenow', newValueStr);
                    this.updateModel(event, newValueStr);
                break;

                //backspace
                case 8: {
                    event.preventDefault();

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
                            else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                            }
                            else {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                            }
                        }

                        this.updateValue(event, newValueStr, null, 'delete-single');
                    }
                    else {
                        newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                        this.updateValue(event, newValueStr, null, 'delete-range');
                    }

                    break;
                }

                // del
                case 46:
                    event.preventDefault();

                    if (selectionStart === selectionEnd) {
                        let deleteChar = inputValue.charAt(selectionStart);
                        let decimalCharIndex = inputValue.search(this._decimal);
                        this._decimal.lastIndex = 0;

                        if (this.isNumeralChar(deleteChar)) {
                            if (this._group.test(deleteChar)) {
                                this._group.lastIndex = 0;
                                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                            }
                            else if (this._decimal.test(deleteChar)) {
                                this._decimal.lastIndex = 0;
                                this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                            }
                            else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                            }
                            else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
                                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                            }
                            else {
                                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                            }
                        }

                        this.updateValue(event, newValueStr, null, 'delete-back-single');
                    }
                    else {
                        newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                        this.updateValue(event, newValueStr, null, 'delete-range');
                    }
                break;

                default:
                break;
            }
        },
        onInputKeyPress(event) {
            event.preventDefault();
            let code = event.which || event.keyCode;
            let char = String.fromCharCode(code);
            const isDecimalSign = this.isDecimalSign(char);
            const isMinusSign = this.isMinusSign(char);

            if ((48 <= code && code <= 57) || isMinusSign || isDecimalSign) {
                this.insert(event, char, { isDecimalSign, isMinusSign });
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
        allowMinusSign() {
            return this.min === null || this.min < 0;
        },
        isMinusSign(char) {
            if (this._minusSign.test(char)) {
                this._minusSign.lastIndex = 0;
                return true;
            }

            return false;
        },
        isDecimalSign(char) {
            if (this._decimal.test(char)) {
                this._decimal.lastIndex = 0;
                return true;
            }

            return false;
        },
        insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {
            const minusCharIndexOnText = text.search(this._minusSign);
            this._minusSign.lastIndex = 0;
            if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
                return;
            }

            const selectionStart = this.$refs.input.$el.selectionStart;
            const selectionEnd = this.$refs.input.$el.selectionEnd;
            let inputValue = this.$refs.input.$el.value.trim();
            const decimalCharIndex = inputValue.search(this._decimal);
            this._decimal.lastIndex = 0;
            const minusCharIndex = inputValue.search(this._minusSign);
            this._minusSign.lastIndex = 0;
            let newValueStr;

            if (sign.isMinusSign) {
                if (selectionStart === 0) {
                    newValueStr = inputValue;
                    if (minusCharIndex === -1 || selectionEnd !== 0) {
                        newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
                    }

                    this.updateValue(event, newValueStr, text, 'insert');
                }
            }
            else if (sign.isDecimalSign) {
                if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
                    this.updateValue(event, inputValue, text, 'insert');
                }
                else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
                    newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                    this.updateValue(event, newValueStr, text, 'insert');
                }
            }
            else {
                const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
                const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';

                if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                    if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {
                        newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length);
                        this.updateValue(event, newValueStr, text, operation);
                    }
                }
                else {
                    newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                    this.updateValue(event, newValueStr, text, operation);
                }
            }
        },
        insertText(value, text, start, end) {
            let textSplit = text.split('.');

            if (textSplit.length === 2) {
                const decimalCharIndex = value.slice(start, end).search(this._decimal);
                this._decimal.lastIndex = 0;
                return (decimalCharIndex > 0) ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : (value || this.formatValue(text));
            }
            else if ((end - start) === value.length) {
                return this.formatValue(text);
            }
            else if (start === 0) {
                return text + value.slice(end);
            }
            else if (end === value.length) {
                return value.slice(0, start) + text;
            }
            else {
                return value.slice(0, start) + text + value.slice(end);
            }
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
        updateValue(event, valueStr, insertedValueStr, operation) {
            if (valueStr != null) {
                let newValue = this.parseValue(valueStr);
                this.updateInput(newValue, insertedValueStr, operation);
            }
        },
        validateValue(value) {
            if (this.min != null && value < this.min) {
                return this.min;
            }

            if (this.max != null && value > this.max) {
                return this.max;
            }

            if (value === '-') { // Minus sign
                return null;
            }

            return value;
        },
        updateInput(value, insertedValueStr, operation) {
            insertedValueStr = insertedValueStr || '';

            let inputValue = this.$refs.input.$el.value;
            let newValue = this.formatValue(value);
            let currentLength = inputValue.length;

            if (currentLength === 0) {
                this.$refs.input.$el.value = newValue;
                this.$refs.input.$el.setSelectionRange(0, 0);
                this.initCursor();
                const prefixLength = (this.prefixChar || '').length;
                const selectionEnd = prefixLength + insertedValueStr.length;
                this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
            }
            else {
                let selectionStart = this.$refs.input.$el.selectionStart;
                let selectionEnd = this.$refs.input.$el.selectionEnd;
                this.$refs.input.$el.value = newValue;
                let newLength = newValue.length;

                if (operation === 'range-insert') {
                    const startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
                    const startValueStr = startValue !== null ? startValue.toString() : '';
                    const startExpr = startValueStr.split('').join(`(${this.groupChar})?`);
                    const sRegex = new RegExp(startExpr, 'g');
                    sRegex.test(newValue);

                    const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`);
                    const tRegex = new RegExp(tExpr, 'g');
                    tRegex.test(newValue.slice(sRegex.lastIndex));

                    selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
                    this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
                }
                else if (newLength === currentLength) {
                    if (operation === 'insert' || operation === 'delete-back-single')
                        this.$refs.input.$el.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
                    else if (operation === 'delete-single')
                        this.$refs.input.$el.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
                    else if (operation === 'delete-range' || operation === 'spin')
                        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
                }
                else if (operation === 'delete-back-single') {
                    let prevChar = inputValue.charAt(selectionEnd - 1);
                    let nextChar = inputValue.charAt(selectionEnd);
                    let diff = currentLength - newLength;
                    let isGroupChar = this._group.test(nextChar);

                    if (isGroupChar && diff === 1) {
                        selectionEnd += 1;
                    }
                    else if (!isGroupChar && this.isNumeralChar(prevChar)) {
                        selectionEnd += (-1 * diff) + 1;
                    }

                    this._group.lastIndex = 0;
                    this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
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
            this.$emit('focus', event);
        },
        onInputBlur(event) {
            this.focused = false;

            let input = event.target;
            let newValue = this.validateValue(this.parseValue(input.value));
            input.value = this.formatValue(newValue);
            input.setAttribute('aria-valuenow', newValue);
            this.updateModel(event, newValue);

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
                'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
                'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',
                'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'
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
                input: val => this.onInput(val),
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

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
    display: none;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
    flex: 1 1 auto;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
    order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
    order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-vertical {
    flex-direction: column;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
    order: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
}

.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
    order: 3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
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

.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
</style>
