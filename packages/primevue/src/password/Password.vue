<template>
    <div :class="cx('root')" :style="sx('root')" v-bind="ptmi('root')">
        <InputText
            ref="input"
            :id="inputId"
            :type="inputType"
            :class="[cx('pcInputText'), inputClass]"
            :style="inputStyle"
            :value="d_value"
            :name="$formName"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-controls="(overlayProps && overlayProps.id) || overlayId || (panelProps && panelProps.id) || panelId || overlayUniqueId"
            :aria-expanded="overlayVisible"
            :aria-haspopup="true"
            :placeholder="placeholder"
            :required="required"
            :fluid="fluid"
            :disabled="disabled"
            :variant="variant"
            :invalid="invalid"
            :size="size"
            :autofocus="autofocus"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            @keyup="onKeyUp"
            @invalid="onInvalid"
            v-bind="inputProps"
            :pt="ptm('pcInputText')"
            :unstyled="unstyled"
        />
        <!-- TODO: hideicon and showicon slots are deprecated since v4.0-->
        <slot v-if="toggleMask && unmasked" :name="$slots.maskicon ? 'maskicon' : 'hideicon'" :toggleCallback="onMaskToggle">
            <component :is="maskIcon ? 'i' : 'EyeSlashIcon'" :class="[cx('maskIcon'), maskIcon]" @click="onMaskToggle" v-bind="ptm('maskIcon')" />
        </slot>
        <slot v-if="toggleMask && !unmasked" :name="$slots.unmaskicon ? 'unmaskicon' : 'showicon'" :toggleCallback="onMaskToggle">
            <component :is="unmaskIcon ? 'i' : 'EyeIcon'" :class="[cx('unmaskIcon'), unmaskIcon]" @click="onMaskToggle" v-bind="ptm('unmaskIcon')" />
        </slot>
        <span class="p-hidden-accessible" aria-live="polite" v-bind="ptm('hiddenAccesible')" :data-p-hidden-accessible="true">
            {{ infoText }}
        </span>
        <Portal :appendTo="appendTo">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave" v-bind="ptm('transition')">
                <div
                    v-if="overlayVisible"
                    :ref="overlayRef"
                    :id="overlayId || panelId || overlayUniqueId"
                    :class="[cx('overlay'), panelClass, overlayClass]"
                    :style="[overlayStyle, panelStyle]"
                    @click="onOverlayClick"
                    v-bind="{ ...panelProps, ...overlayProps, ...ptm('overlay') }"
                >
                    <slot name="header"></slot>
                    <slot name="content">
                        <div :class="cx('content')" v-bind="ptm('content')">
                            <div :class="cx('meter')" v-bind="ptm('meter')">
                                <div :class="cx('meterLabel')" :style="{ width: meter ? meter.width : '' }" v-bind="ptm('meterLabel')"></div>
                            </div>
                            <div :class="cx('meterText')" v-bind="ptm('meterText')">{{ infoText }}</div>
                        </div>
                    </slot>
                    <slot name="footer"></slot>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import { absolutePosition, addStyle, getOuterWidth, isTouchDevice, relativePosition } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler, UniqueComponentId } from '@primevue/core/utils';
import EyeIcon from '@primevue/icons/eye';
import EyeSlashIcon from '@primevue/icons/eyeslash';
import InputText from 'primevue/inputtext';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import BasePassword from './BasePassword.vue';

export default {
    name: 'Password',
    extends: BasePassword,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur', 'invalid'],
    inject: {
        $pcFluid: { default: null }
    },
    data() {
        return {
            id: this.$attrs.id,
            overlayVisible: false,
            meter: null,
            infoText: null,
            focused: false,
            unmasked: false
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    mediumCheckRegExp: null,
    strongCheckRegExp: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    mounted() {
        this.id = this.id || UniqueComponentId();
        this.infoText = this.promptText;
        this.mediumCheckRegExp = new RegExp(this.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.strongRegex);
    },
    beforeUnmount() {
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay) {
            ZIndex.clear(this.overlay);
            this.overlay = null;
        }
    },
    methods: {
        onOverlayEnter(el) {
            ZIndex.set('overlay', el, this.$primevue.config.zIndex.overlay);

            addStyle(el, { position: 'absolute', top: '0', left: '0' });
            this.alignOverlay();
            this.bindScrollListener();
            this.bindResizeListener();
        },
        onOverlayLeave() {
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.overlay = null;
        },
        onOverlayAfterLeave(el) {
            ZIndex.clear(el);
        },
        alignOverlay() {
            if (this.appendTo === 'self') {
                relativePosition(this.overlay, this.$refs.input.$el);
            } else {
                this.overlay.style.minWidth = getOuterWidth(this.$refs.input.$el) + 'px';
                absolutePosition(this.overlay, this.$refs.input.$el);
            }
        },
        testStrength(str) {
            let level = 0;

            if (this.strongCheckRegExp.test(str)) level = 3;
            else if (this.mediumCheckRegExp.test(str)) level = 2;
            else if (str.length) level = 1;

            return level;
        },
        onInput(event) {
            this.writeValue(event.target.value, event);
            this.$emit('change', event);
        },
        onFocus(event) {
            this.focused = true;

            if (this.feedback) {
                this.setPasswordMeter(this.d_value);
                this.overlayVisible = true;
            }

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;

            if (this.feedback) {
                this.overlayVisible = false;
            }

            this.$emit('blur', event);
        },
        onKeyUp(event) {
            if (this.feedback) {
                const value = event.target.value;
                const { meter, label } = this.checkPasswordStrength(value);

                this.meter = meter;
                this.infoText = label;

                if (event.code === 'Escape') {
                    this.overlayVisible && (this.overlayVisible = false);

                    return;
                }

                if (!this.overlayVisible) {
                    this.overlayVisible = true;
                }
            }
        },
        setPasswordMeter() {
            if (!this.d_value) {
                this.meter = null;
                this.infoText = this.promptText;

                return;
            }

            const { meter, label } = this.checkPasswordStrength(this.d_value);

            this.meter = meter;
            this.infoText = label;

            if (!this.overlayVisible) {
                this.overlayVisible = true;
            }
        },
        checkPasswordStrength(value) {
            let label = null;
            let meter = null;

            switch (this.testStrength(value)) {
                case 1:
                    label = this.weakText;
                    meter = {
                        strength: 'weak',
                        width: '33.33%'
                    };
                    break;

                case 2:
                    label = this.mediumText;
                    meter = {
                        strength: 'medium',
                        width: '66.66%'
                    };
                    break;

                case 3:
                    label = this.strongText;
                    meter = {
                        strength: 'strong',
                        width: '100%'
                    };
                    break;

                default:
                    label = this.promptText;
                    meter = null;
                    break;
            }

            return { label, meter };
        },
        onInvalid(event) {
            this.$emit('invalid', event);
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
                    if (this.overlayVisible && !isTouchDevice()) {
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
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.$el
            });
        }
    },
    computed: {
        inputType() {
            return this.unmasked ? 'text' : 'password';
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
        },
        overlayUniqueId() {
            return this.id + '_overlay';
        }
    },
    components: {
        InputText,
        Portal,
        EyeSlashIcon,
        EyeIcon
    }
};
</script>
