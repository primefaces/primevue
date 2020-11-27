<template>
    <input :class="inputClass" v-on="listeners" />
</template>

<script>
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        value: null,
        slotChar: {
            type: String,
            default: '_'
        },
        mask: {
            type: String,
            default: null
        },
        autoClear: {
            type: Boolean,
            default: true
        },
        unmask: {
            type: Boolean,
            default: false
        },
        ariaLabelledBy: null
    },
    methods: {
        caret(first, last) {
            let range, begin, end;

            if (!this.$el.offsetParent || this.$el !== document.activeElement) {
                return;
            }

            if (typeof first === 'number') {
                begin = first;
                end = (typeof last === 'number') ? last : begin;
                if (this.$el.setSelectionRange) {
                    this.$el.setSelectionRange(begin, end);
                }
                else if (this.$el['createTextRange']) {
                    range = this.$el['createTextRange']();
                    range.collapse(true);
                    range.moveEnd('character', end);
                    range.moveStart('character', begin);
                    range.select();
                }
            }
            else {
                if (this.$el.setSelectionRange) {
                    begin = this.$el.selectionStart;
                    end = this.$el.selectionEnd;
                }
                else if (document['selection'] && document['selection'].createRange) {
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
                while (pos.begin > 0 && !this.tests[pos.begin - 1])
                    pos.begin--;
                if (pos.begin === 0) {
                    while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin])
                        pos.begin++;
                }
                this.caret(pos.begin, pos.begin);
            } else {
                this.checkVal(true);
                while (pos.begin < this.len && !this.tests[pos.begin])
                    pos.begin++;

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
            return (this.partialPosition ? i : this.firstNonMaskPos);
        },
        handleInputChange(event) {
            if (this.$attrs.readonly) {
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
            this.$emit('input', (this.defaultBuffer !== val) ? val : '');
        },
        updateValue() {
            if (this.$el) {
                if (this.value == null) {
                    this.$el.value = '';
                    this.$emit('input', '');
                }
                else {
                    this.$el.value = this.value;
                    this.checkVal();

                    setTimeout(() => {
                        if (this.$el) {
                            this.writeBuffer();
                            this.checkVal();

                            let val = this.unmask ? this.getUnmaskedValue() : this.$el.value;
                            this.$emit('input', (this.defaultBuffer !== val) ? val : '');
                        }
                    }, 10);
                }

                this.focusText = this.$el.value;
            }
        },
        isValueUpdated() {
            return this.unmask ?
                            (this.value != this.getUnmaskedValue()) :
                            (this.defaultBuffer !== this.$el.value && this.$el.value !== this.value);
        }
    },
    mounted() {
        this.tests = [];
        this.partialPosition = this.mask.length;
        this.len = this.mask.length;
        this.firstNonMaskPos = null;
        this.defs = {
            '9': '[0-9]',
            'a': '[A-Za-z]',
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
            }
            else if (this.defs[c]) {
                this.tests.push(new RegExp(this.defs[c]));
                if (this.firstNonMaskPos === null) {
                    this.firstNonMaskPos = this.tests.length - 1;
                }
                if (i < this.partialPosition) {
                    this.lastRequiredNonMaskPos = this.tests.length - 1;
                }
            }
            else {
                this.tests.push(null);
            }
        }

        this.buffer = [];
        for (let i = 0; i < maskTokens.length; i++) {
            let c = maskTokens[i];
            if (c !== '?') {
                if (this.defs[c])
                    this.buffer.push(this.getPlaceholder(i));
                else
                    this.buffer.push(c);
            }
        }
        this.defaultBuffer = this.buffer.join('');
        this.updateValue();
    },
    updated() {
        if (this.isValueUpdated()) {
            this.updateValue();
        }
    },
    computed: {
        listeners() {
            let $vm = this;

            return {
                ...$vm.$listeners,
                input: event => {
                    if ($vm.androidChrome)
                        $vm.handleAndroidInput(event);
                    else
                        $vm.handleInputChange(event);

                    $vm.$emit('input', event.target.value);
                },
                focus: event => {
                    if ($vm.$attrs.readonly) {
                        return;
                    }

                    $vm.focus = true;

                    clearTimeout($vm.caretTimeoutId);
                    let pos;

                    $vm.focusText = $vm.$el.value;

                    pos = $vm.checkVal();

                    $vm.caretTimeoutId = setTimeout(() => {
                        if ($vm.$el !== document.activeElement) {
                            return;
                        }
                        $vm.writeBuffer();
                        if (pos === $vm.mask.replace("?", "").length) {
                            $vm.caret(0, pos);
                        } else {
                            $vm.caret(pos);
                        }
                    }, 10);

                    $vm.$emit('focus', event)
                },
                blur: event => {
					$vm.focus = false;
                    $vm.checkVal();
                    $vm.updateModel(event);

                    if ($vm.$el.value !== $vm.focusText) {
                        let e = document.createEvent('HTMLEvents');
                        e.initEvent('change', true, false);
                        $vm.$el.dispatchEvent(e);
                    }

                    $vm.$emit('blur', event);
                },
                keydown: event => {
                    if ($vm.$attrs.readonly) {
                        return;
                    }

                    let k = event.which || event.keyCode,
                        pos,
                        begin,
                        end;
                    let iPhone = /iphone/i.test(DomHandler.getUserAgent());
                    $vm.oldVal = $vm.$el.value;

                    //backspace, delete, and escape get special treatment
                    if (k === 8 || k === 46 || (iPhone && k === 127)) {
                        pos = $vm.caret();
                        begin = pos.begin;
                        end = pos.end;


                        if (end - begin === 0) {
                            begin = k !== 46 ? $vm.seekPrev(begin) : (end = $vm.seekNext(begin - 1));
                            end = k === 46 ? $vm.seekNext(end) : end;
                        }

                        $vm.clearBuffer(begin, end);
                        $vm.shiftL(begin, end - 1);
                        $vm.updateModel(event);

                        event.preventDefault();
                    } else if (k === 13) { // enter
                        $vm.$el.blur();
                        $vm.updateModel(event);
                    } else if (k === 27) { // escape
                        $vm.$el.value = $vm.focusText;
                        $vm.caret(0, $vm.checkVal());
                        $vm.updateModel(event);
                        event.preventDefault();
                    }

                    $vm.$emit('keydown', event);
                },
                keypress: event => {
                    if ($vm.$attrs.readonly) {
                        return;
                    }

                    var k = event.which || event.keyCode,
                        pos = $vm.caret(),
                        p,
                        c,
                        next,
                        completed;

                    if (event.ctrlKey || event.altKey || event.metaKey || k < 32) {//Ignore
                        return;
                    } else if (k && k !== 13) {
                        if (pos.end - pos.begin !== 0) {
                            $vm.clearBuffer(pos.begin, pos.end);
                            $vm.shiftL(pos.begin, pos.end - 1);
                        }

                        p = $vm.seekNext(pos.begin - 1);
                        if (p < $vm.len) {
                            c = String.fromCharCode(k);
                            if ($vm.tests[p].test(c)) {
                                $vm.shiftR(p);

                                $vm.buffer[p] = c;
                                $vm.writeBuffer();
                                next = $vm.seekNext(p);

                                if (/android/i.test(DomHandler.getUserAgent())) {
                                    //Path for CSP Violation on FireFox OS 1.1
                                    let proxy = () => {
                                        $vm.caret(next);
                                    };

                                    setTimeout(proxy, 0);
                                } else {
                                    $vm.caret(next);
                                }
                                if (pos.begin <= $vm.lastRequiredNonMaskPos) {
                                    completed = $vm.isCompleted();
                                }
                            }
                        }
                        event.preventDefault();
                    }

                    $vm.updateModel(event);

                    if (completed) {
                        $vm.$emit('complete', event);
                    }

                    $vm.$emit('keypress', event);
                },
                paste: event => {
                    $vm.handleInputChange(event);

                    $vm.$emit('paste', event);
                }
            };
        },
        filled() {
            return (this.value != null && this.value.toString().length > 0)
        },
        inputClass() {
            return ['p-inputmask p-inputtext p-component', {
                'p-filled': this.filled,
                'p-disabled': this.$attrs.disabled
            }];
        },
    }
}
</script>
