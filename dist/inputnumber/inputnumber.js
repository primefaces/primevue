this.primevue = this.primevue || {};
this.primevue.inputnumber = (function (InputText, Button, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var InputText__default = /*#__PURE__*/_interopDefaultLegacy(InputText);
    var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

    var script = {
        name: 'InputNumber',
        inheritAttrs: false,
        emits: ['update:modelValue', 'input', 'focus', 'blur'],
        props: {
            modelValue: {
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
            allowEmpty: {
                type: Boolean,
                default: true
            },
            readonly: {
                type: Boolean,
                default: false
            },
            style: null,
            class: null,
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
                d_modelValue: this.modelValue,
                focused: false
            }
        },
        watch: {
            modelValue(newValue) {
                this.d_modelValue = newValue;
            },
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
                this._group = this.getGroupingExpression();
                this._minusSign = this.getMinusSignExpression();
                this._currency = this.getCurrencyExpression();
                this._decimal = this.getDecimalExpression();
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
                const formatter = new Intl.NumberFormat(this.locale, {...this.getOptions(), useGrouping: false});
                return new RegExp(`[${formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, '')}]`, 'g');
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
                    const formatter = new Intl.NumberFormat(this.locale, {style: 'currency', currency: this.currency, currencyDisplay: this.currencyDisplay,
                        minimumFractionDigits: 0, maximumFractionDigits: 0});
                    return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, '')}]`, 'g');
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
                if (this.readonly) {
                    return;
                }

                let i = interval || 500;

                this.clearTimer();
                this.timer = setTimeout(() => {
                    this.repeat(event, 40, dir);
                }, i);

                this.spin(event, dir);
            },
            spin(event, dir) {
                if (this.$refs.input) {
                    let step = this.step * dir;
                    let currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
                    let newValue = this.validateValue(currentValue + step);

                    this.updateInput(newValue, null, 'spin');
                    this.updateModel(event, newValue);

                    this.handleOnInput(event, currentValue, newValue);
                }
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
            onUserInput() {
                if (this.isSpecialChar) {
                    this.$refs.input.$el.value = this.lastValue;
                }
                this.isSpecialChar = false;
            },
            onInputKeyDown(event) {
                if (this.readonly) {
                    return;
                }

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
                            const deleteChar = inputValue.charAt(selectionStart - 1);
                            const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);

                            if (this.isNumeralChar(deleteChar)) {
                                const decimalLength = this.getDecimalLength(inputValue);

                                if (this._group.test(deleteChar)) {
                                    this._group.lastIndex = 0;
                                    newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                                }
                                else if (this._decimal.test(deleteChar)) {
                                    this._decimal.lastIndex = 0;

                                    if (decimalLength) {
                                        this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                                    }
                                    else {
                                        newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                                    }
                                }
                                else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                    const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                                    newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                                }
                                else if (decimalCharIndexWithoutPrefix === 1) {
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
                            const deleteChar = inputValue.charAt(selectionStart);
                            const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);

                            if (this.isNumeralChar(deleteChar)) {
                                const decimalLength = this.getDecimalLength(inputValue);

                                if (this._group.test(deleteChar)) {
                                    this._group.lastIndex = 0;
                                    newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                                }
                                else if (this._decimal.test(deleteChar)) {
                                    this._decimal.lastIndex = 0;

                                    if (decimalLength) {
                                        this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                                    }
                                    else {
                                        newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                                    }
                                }
                                else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                    const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                                    newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
                                }
                                else if (decimalCharIndexWithoutPrefix === 1) {
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
                }
            },
            onInputKeyPress(event) {
                if (this.readonly) {
                    return;
                }

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
                if (this._minusSign.test(char) || char === '-') {
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
            isDecimalMode() {
                return this.mode === 'decimal';
            },
            getDecimalCharIndexes(val) {
                let decimalCharIndex = val.search(this._decimal);
                this._decimal.lastIndex = 0;

                const filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
                const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
                this._decimal.lastIndex = 0;

                return { decimalCharIndex, decimalCharIndexWithoutPrefix };
            },
            getCharIndexes(val) {
                const decimalCharIndex = val.search(this._decimal);
                this._decimal.lastIndex = 0;
                const minusCharIndex = val.search(this._minusSign);
                this._minusSign.lastIndex = 0;
                const suffixCharIndex = val.search(this._suffix);
                this._suffix.lastIndex = 0;
                const currencyCharIndex = val.search(this._currency);
                this._currency.lastIndex = 0;

                return { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex };
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
                const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = this.getCharIndexes(inputValue);
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
                    else if (decimalCharIndex === -1 && this.maxFractionDigits) {
                        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                        this.updateValue(event, newValueStr, text, 'insert');
                    }
                }
                else {
                    const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
                    const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';

                    if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                        if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {
                            const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : (suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length);

                            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
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
                let textSplit = text === '.' ? text : text.split('.');

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

                // remove prefix
                let prefixLength = (this.prefixChar || '').length;
                inputValue = inputValue.replace(this._prefix, '');
                selectionStart = selectionStart - prefixLength;

                let char = inputValue.charAt(selectionStart);
                if (this.isNumeralChar(char)) {
                    return selectionStart + prefixLength;
                }

                //left
                let i = selectionStart - 1;
                while (i >= 0) {
                    char = inputValue.charAt(i);
                    if (this.isNumeralChar(char)) {
                        index = i + prefixLength;
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
                    i = selectionStart;
                    while (i < valueLength) {
                        char = inputValue.charAt(i);
                        if (this.isNumeralChar(char)) {
                            index = i + prefixLength;
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

                return index || 0;
            },
            onInputClick() {
                if (!this.readonly) {
                    this.initCursor();
                }
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
                let currentValue = this.$refs.input.$el.value;
                let newValue = null;

                if (valueStr != null) {
                    newValue = this.parseValue(valueStr);
                    newValue = !newValue && !this.allowEmpty ? 0 : newValue;
                    this.updateInput(newValue, insertedValueStr, operation, valueStr);

                    this.handleOnInput(event, currentValue, newValue);
                }
            },
            handleOnInput(event, currentValue, newValue) {
                if (this.isValueChanged(currentValue, newValue)) {
                    this.$emit('input', { originalEvent: event, value: newValue });
                }
            },
            isValueChanged(currentValue, newValue) {
                if (newValue === null && currentValue !== null) {
                    return true;
                }

                if (newValue != null) {
                    let parsedCurrentValue = (typeof currentValue === 'string') ? this.parseValue(currentValue) : currentValue;
                    return newValue !== parsedCurrentValue;
                }

                return false;
            },
            validateValue(value) {
                if (value === '-' || value == null) {
                    return null;
                }

                if (this.min != null && value < this.min) {
                    return this.min;
                }

                if (this.max != null && value > this.max) {
                    return this.max;
                }

                return value;
            },
            updateInput(value, insertedValueStr, operation, valueStr) {
                insertedValueStr = insertedValueStr || '';

                let inputValue = this.$refs.input.$el.value;
                let newValue = this.formatValue(value);
                let currentLength = inputValue.length;

                if (newValue !== valueStr) {
                    newValue = this.concatValues(newValue, valueStr);
                }

                if (currentLength === 0) {
                    this.$refs.input.$el.value = newValue;
                    this.$refs.input.$el.setSelectionRange(0, 0);
                    const index = this.initCursor();
                    const selectionEnd = index + insertedValueStr.length;
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
                    else if (inputValue === '-' && operation === 'insert') {
                        this.$refs.input.$el.setSelectionRange(0, 0);
                        const index = this.initCursor();
                        const selectionEnd = index + insertedValueStr.length + 1;
                        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
                    }
                    else {
                        selectionEnd = selectionEnd + (newLength - currentLength);
                        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
                    }
                }

                this.$refs.input.$el.setAttribute('aria-valuenow', value);
            },
            concatValues(val1, val2) {
                if (val1 && val2) {
                    let decimalCharIndex = val2.search(this._decimal);
                    this._decimal.lastIndex = 0;

                    return decimalCharIndex !== -1 ? (val1.split(this._decimal)[0] + val2.slice(decimalCharIndex)) : val1;
                }

                return val1;
            },
            getDecimalLength(value) {
                if (value) {
                    const valueSplit = value.split(this._decimal);

                    if (valueSplit.length === 2) {
                        return valueSplit[1].replace(this._suffix, '')
                                    .trim()
                                    .replace(/\s/g, '')
                                    .replace(this._currency, '').length;
                    }
                }

                return 0;
            },
            updateModel(event, value) {
                this.d_modelValue = value;
                this.$emit('update:modelValue', value);
            },
            onInputFocus(event) {
                this.focused = true;
                this.$emit('focus', event);
            },
            onInputBlur(event) {
                this.focused = false;

                let input = event.target;
                let newValue = this.validateValue(this.parseValue(input.value));

                this.$emit('blur', { originalEvent: event, value: input.value});
                
                input.value = this.formatValue(newValue);
                input.setAttribute('aria-valuenow', newValue);
                this.updateModel(event, newValue);
            },
            clearTimer() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
            },
            maxBoundry() {
                return this.d_modelValue >= this.max;
            },
            minBoundry() {
                return this.d_modelValue <= this.min;
            },
        },
        computed: {
            containerClass() {
                return ['p-inputnumber p-component p-inputwrapper', this.class, {
                    'p-inputwrapper-filled': this.filled,
                    'p-inputwrapper-focus': this.focused,
                    'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
                    'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',
                    'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'
                }];
            },
            
            upButtonClass() {
                return ['p-inputnumber-button p-inputnumber-button-up', this.incrementButtonClass, {
                    'p-disabled': this.showButtons && this.max !== null && this.maxBoundry()
                }];
            },
            downButtonClass() {
                return ['p-inputnumber-button p-inputnumber-button-down', this.decrementButtonClass, {
                    'p-disabled': this.showButtons && this.min !== null && this.minBoundry()
                }];
            },
            filled() {
                return (this.modelValue != null && this.modelValue.toString().length > 0)
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
                const val = !this.modelValue && !this.allowEmpty ? 0 : this.modelValue;
                return this.formatValue(val);
            },
            getFormatter() {
                return this.numberFormat;
            }
        },
        components: {
            'INInputText': InputText__default["default"],
            'INButton': Button__default["default"]
        }
    };

    const _hoisted_1 = {
      key: 0,
      class: "p-inputnumber-button-group"
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_INInputText = vue.resolveComponent("INInputText");
      const _component_INButton = vue.resolveComponent("INButton");

      return (vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass($options.containerClass),
        style: vue.normalizeStyle($props.style)
      }, [
        vue.createVNode(_component_INInputText, vue.mergeProps({
          ref: "input",
          class: ['p-inputnumber-input', $props.inputClass],
          style: $props.inputStyle,
          value: $options.formattedValue
        }, _ctx.$attrs, {
          "aria-valumin": $props.min,
          "aria-valuemax": $props.max,
          readonly: $props.readonly,
          onInput: $options.onUserInput,
          onKeydown: $options.onInputKeyDown,
          onKeypress: $options.onInputKeyPress,
          onPaste: $options.onPaste,
          onClick: $options.onInputClick,
          onFocus: $options.onInputFocus,
          onBlur: $options.onInputBlur
        }), null, 16, ["class", "style", "value", "aria-valumin", "aria-valuemax", "readonly", "onInput", "onKeydown", "onKeypress", "onPaste", "onClick", "onFocus", "onBlur"]),
        ($props.showButtons && $props.buttonLayout === 'stacked')
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
              vue.createVNode(_component_INButton, vue.mergeProps({
                class: $options.upButtonClass,
                icon: $props.incrementButtonIcon
              }, vue.toHandlers($options.upButtonListeners), {
                disabled: _ctx.$attrs.disabled
              }), null, 16, ["class", "icon", "disabled"]),
              vue.createVNode(_component_INButton, vue.mergeProps({
                class: $options.downButtonClass,
                icon: $props.decrementButtonIcon
              }, vue.toHandlers($options.downButtonListeners), {
                disabled: _ctx.$attrs.disabled
              }), null, 16, ["class", "icon", "disabled"])
            ]))
          : vue.createCommentVNode("", true),
        ($props.showButtons && $props.buttonLayout !== 'stacked')
          ? (vue.openBlock(), vue.createBlock(_component_INButton, vue.mergeProps({
              key: 1,
              class: $options.upButtonClass,
              icon: $props.incrementButtonIcon
            }, vue.toHandlers($options.upButtonListeners), {
              disabled: _ctx.$attrs.disabled
            }), null, 16, ["class", "icon", "disabled"]))
          : vue.createCommentVNode("", true),
        ($props.showButtons && $props.buttonLayout !== 'stacked')
          ? (vue.openBlock(), vue.createBlock(_component_INButton, vue.mergeProps({
              key: 2,
              class: $options.downButtonClass,
              icon: $props.decrementButtonIcon
            }, vue.toHandlers($options.downButtonListeners), {
              disabled: _ctx.$attrs.disabled
            }), null, 16, ["class", "icon", "disabled"]))
          : vue.createCommentVNode("", true)
      ], 6))
    }

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = "\n.p-inputnumber {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.p-inputnumber-button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n    display: none;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-input {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n    padding: 0;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-inputnumber-input {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n    border-radius: 0;\n}\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.p-inputnumber-buttons-vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    width: 100%;\n}\n.p-inputnumber-buttons-vertical .p-inputnumber-input {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n    border-radius: 0;\n    text-align: center;\n}\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    width: 100%;\n}\n.p-inputnumber-input {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.p-fluid .p-inputnumber {\n    width: 100%;\n}\n.p-fluid .p-inputnumber .p-inputnumber-input {\n    width: 1%;\n}\n.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n    width: 100%;\n}\n";
    styleInject(css_248z);

    script.render = render;

    return script;

})(primevue.inputtext, primevue.button, Vue);
