<template>
    <input :class="cx('root')" :readonly="readonly" @input="onInput" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" @keypress="onKeyPress" @paste="onPaste" v-bind="ptm('root')" data-pc-name="inputmask" />
</template>

<script>
import { DomHandler } from 'primevue/utils';
import BaseInputMask from './BaseInputMask.vue';

export default {
    name: 'InputMask',
    extends: BaseInputMask,
    emits: ['update:modelValue', 'focus', 'blur', 'keydown', 'complete', 'keypress', 'paste'],
    watch: {
        mask(newMask, oldMask) {
            if (oldMask !== newMask) {
                this.initMask();
            }
        }
    },
    mounted() {
        this.initMask();
    },
    updated() {
        if (this.isValueUpdated()) {
            this.updateValue();
        }
    },
    methods: {
        onInput(event) {
            if (this.androidChrome) this.handleAndroidInput(event);
            else this.handleInputChange(event);

            this.$emit('update:modelValue', event.target.value);
        },
        onFocus(event) {
            if (this.readonly) {
                return;
            }

            this.focus = true;

            clearTimeout(this.caretTimeoutId);
            let pos;

            this.focusText = this.$el.value;

            pos = this.checkVal();

            this.caretTimeoutId = setTimeout(() => {
                if (this.$el !== document.activeElement) {
                    return;
                }

                this.writeBuffer();

                if (pos === this.mask.replace('?', '').length) {
                    this.caret(0, pos);
                } else {
                    this.caret(pos);
                }
            }, 10);

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focus = false;
            this.checkVal();
            this.updateModel(event);

            if (this.$el.value !== this.focusText) {
                let e = document.createEvent('HTMLEvents');

                e.initEvent('change', true, false);
                this.$el.dispatchEvent(e);
            }

            this.$emit('blur', event);
        },
        onKeyDown(event) {
            if (this.readonly) {
                return;
            }

            let k = event.which || event.keyCode,
                pos,
                begin,
                end;
            let iPhone = /iphone/i.test(DomHandler.getUserAgent());

            this.oldVal = this.$el.value;

            //backspace, delete, and escape get special treatment
            if (k === 8 || k === 46 || (iPhone && k === 127)) {
                pos = this.caret();
                begin = pos.begin;
                end = pos.end;

                if (end - begin === 0) {
                    begin = k !== 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1));
                    end = k === 46 ? this.seekNext(end) : end;
                }

                this.clearBuffer(begin, end);
                this.shiftL(begin, end - 1);
                this.updateModel(event);

                event.preventDefault();
            } else if (k === 13) {
                // enter
                this.$el.blur();
                this.updateModel(event);
            } else if (k === 27) {
                // escape
                this.$el.value = this.focusText;
                this.caret(0, this.checkVal());
                this.updateModel(event);
                event.preventDefault();
            }

            this.$emit('keydown', event);
        },
        onKeyPress(event) {
            if (this.readonly) {
                return;
            }

            var k = event.which || event.keyCode,
                pos = this.caret(),
                p,
                c,
                next,
                completed;

            if (event.ctrlKey || event.altKey || event.metaKey || k < 32) {
                //Ignore
                return;
            } else if (k && k !== 13) {
                if (pos.end - pos.begin !== 0) {
                    this.clearBuffer(pos.begin, pos.end);
                    this.shiftL(pos.begin, pos.end - 1);
                }

                p = this.seekNext(pos.begin - 1);

                if (p < this.len) {
                    c = String.fromCharCode(k);

                    if (this.tests[p].test(c)) {
                        this.shiftR(p);

                        this.buffer[p] = c;
                        this.writeBuffer();
                        next = this.seekNext(p);

                        if (/android/i.test(DomHandler.getUserAgent())) {
                            //Path for CSP Violation on FireFox OS 1.1
                            let proxy = () => {
                                this.caret(next);
                            };

                            setTimeout(proxy, 0);
                        } else {
                            this.caret(next);
                        }

                        if (pos.begin <= this.lastRequiredNonMaskPos) {
                            completed = this.isCompleted();
                        }
                    }
                }

                event.preventDefault();
            }

            this.updateModel(event);

            if (completed) {
                this.$emit('complete', event);
            }

            this.$emit('keypress', event);
        },
        onPaste(event) {
            this.handleInputChange(event);

            this.$emit('paste', event);
        },
        caret(first, last) {
            let range, begin, end;

            if (!this.$el.offsetParent || this.$el !== document.activeElement) {
                return;
            }

            if (typeof first === 'number') {
                begin = first;
                end = typeof last === 'number' ? last : begin;

                if (this.$el.setSelectionRange) {
                    this.$el.setSelectionRange(begin, end);
                } else if (this.$el['createTextRange']) {
                    range = this.$el['createTextRange']();
                    range.collapse(true);
                    range.moveEnd('character', end);
                    range.moveStart('character', begin);
                    range.select();
                }
            } else {
                if (this.$el.setSelectionRange) {
                    begin = this.$el.selectionStart;
                    end = this.$el.selectionEnd;
                } else if (document['selection'] && document['selection'].createRange) {
                    range = document['selection'].createRange();
                    begin = 0 - range.duplicate().moveStart('character', -100000);
                    end = begin + range.text.length;
                }

                return { begin: begin, end: end };
            }
        },
        isCompleted() {
            for (let i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
                if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
                    return false;
                }
            }

            return true;
        },
        getPlaceholder(i) {
            if (i < this.slotChar.length) {
                return this.slotChar.charAt(i);
            }

            return this.slotChar.charAt(0);
        },
        seekNext(pos) {
            while (++pos < this.len && !this.tests[pos]);

            return pos;
        },
        seekPrev(pos) {
            while (--pos >= 0 && !this.tests[pos]);

            return pos;
        },
        shiftL(begin, end) {
            let i, j;

            if (begin < 0) {
                return;
            }

            for (i = begin, j = this.seekNext(end); i < this.len; i++) {
                if (this.tests[i]) {
                    if (j < this.len && this.tests[i].test(this.buffer[j])) {
                        this.buffer[i] = this.buffer[j];
                        this.buffer[j] = this.getPlaceholder(j);
                    } else {
                        break;
                    }

                    j = this.seekNext(j);
                }
            }

            this.writeBuffer();
            this.caret(Math.max(this.firstNonMaskPos, begin));
        },
        shiftR(pos) {
            let i, c, j, t;

            for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
                if (this.tests[i]) {
                    j = this.seekNext(i);
                    t = this.buffer[i];
                    this.buffer[i] = c;

                    if (j < this.len && this.tests[j].test(t)) {
                        c = t;
                    } else {
                        break;
                    }
                }
            }
        },
        handleAndroidInput(event) {
            var curVal = this.$el.value;
            var pos = this.caret();

            if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
                // a deletion or backspace happened
                this.checkVal(true);
                while (pos.begin > 0 && !this.tests[pos.begin - 1]) pos.begin--;

                if (pos.begin === 0) {
                    while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) pos.begin++;
                }

                this.caret(pos.begin, pos.begin);
            } else {
                this.checkVal(true);
                while (pos.begin < this.len && !this.tests[pos.begin]) pos.begin++;

                this.caret(pos.begin, pos.begin);
            }

            if (this.isCompleted()) {
                this.$emit('complete', event);
            }
        },
        clearBuffer(start, end) {
            let i;

            for (i = start; i < end && i < this.len; i++) {
                if (this.tests[i]) {
                    this.buffer[i] = this.getPlaceholder(i);
                }
            }
        },
        writeBuffer() {
            this.$el.value = this.buffer.join('');
        },
        checkVal(allow) {
            this.isValueChecked = true;
            //try to place characters where they belong
            let test = this.$el.value,
                lastMatch = -1,
                i,
                c,
                pos;

            for (i = 0, pos = 0; i < this.len; i++) {
                if (this.tests[i]) {
                    this.buffer[i] = this.getPlaceholder(i);

                    while (pos++ < test.length) {
                        c = test.charAt(pos - 1);

                        if (this.tests[i].test(c)) {
                            this.buffer[i] = c;
                            lastMatch = i;
                            break;
                        }
                    }

                    if (pos > test.length) {
                        this.clearBuffer(i + 1, this.len);
                        break;
                    }
                } else {
                    if (this.buffer[i] === test.charAt(pos)) {
                        pos++;
                    }

                    if (i < this.partialPosition) {
                        lastMatch = i;
                    }
                }
            }

            if (allow) {
                this.writeBuffer();
            } else if (lastMatch + 1 < this.partialPosition) {
                if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
                    // Invalid value. Remove it and replace it with the
                    // mask, which is the default behavior.
                    if (this.$el.value) this.$el.value = '';
                    this.clearBuffer(0, this.len);
                } else {
                    // Invalid value, but we opt to show the value to the
                    // user and allow them to correct their mistake.
                    this.writeBuffer();
                }
            } else {
                this.writeBuffer();
                this.$el.value = this.$el.value.substring(0, lastMatch + 1);
            }

            return this.partialPosition ? i : this.firstNonMaskPos;
        },
        handleInputChange(event) {
            if (this.readonly) {
                return;
            }

            var pos = this.checkVal(true);

            this.caret(pos);
            this.updateModel(event);

            if (this.isCompleted()) {
                this.$emit('complete', event);
            }
        },
        getUnmaskedValue() {
            let unmaskedBuffer = [];

            for (let i = 0; i < this.buffer.length; i++) {
                let c = this.buffer[i];

                if (this.tests[i] && c !== this.getPlaceholder(i)) {
                    unmaskedBuffer.push(c);
                }
            }

            return unmaskedBuffer.join('');
        },
        updateModel(e) {
            let val = this.unmask ? this.getUnmaskedValue() : e.target.value;

            this.$emit('update:modelValue', this.defaultBuffer !== val ? val : '');
        },
        updateValue(updateModel = true) {
            if (this.$el) {
                if (this.modelValue == null) {
                    this.$el.value = '';
                    updateModel && this.$emit('update:modelValue', '');
                } else {
                    this.$el.value = this.modelValue;
                    this.checkVal();

                    setTimeout(() => {
                        if (this.$el) {
                            this.writeBuffer();
                            this.checkVal();

                            if (updateModel) {
                                let val = this.unmask ? this.getUnmaskedValue() : this.$el.value;

                                this.$emit('update:modelValue', this.defaultBuffer !== val ? val : '');
                            }
                        }
                    }, 10);
                }

                this.focusText = this.$el.value;
            }
        },
        initMask() {
            this.tests = [];
            this.partialPosition = this.mask.length;
            this.len = this.mask.length;
            this.firstNonMaskPos = null;
            this.defs = {
                9: '[0-9]',
                a: '[A-Za-z]',
                '*': '[A-Za-z0-9]'
            };

            let ua = DomHandler.getUserAgent();

            this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);

            let maskTokens = this.mask.split('');

            for (let i = 0; i < maskTokens.length; i++) {
                let c = maskTokens[i];

                if (c === '?') {
                    this.len--;
                    this.partialPosition = i;
                } else if (this.defs[c]) {
                    this.tests.push(new RegExp(this.defs[c]));

                    if (this.firstNonMaskPos === null) {
                        this.firstNonMaskPos = this.tests.length - 1;
                    }

                    if (i < this.partialPosition) {
                        this.lastRequiredNonMaskPos = this.tests.length - 1;
                    }
                } else {
                    this.tests.push(null);
                }
            }

            this.buffer = [];

            for (let i = 0; i < maskTokens.length; i++) {
                let c = maskTokens[i];

                if (c !== '?') {
                    if (this.defs[c]) this.buffer.push(this.getPlaceholder(i));
                    else this.buffer.push(c);
                }
            }

            this.defaultBuffer = this.buffer.join('');
            this.updateValue(false);
        },
        isValueUpdated() {
            return this.unmask ? this.modelValue != this.getUnmaskedValue() : this.defaultBuffer !== this.$el.value && this.$el.value !== this.modelValue;
        }
    },
    computed: {
        filled() {
            return this.modelValue != null && this.modelValue.toString().length > 0;
        }
    }
};
</script>
