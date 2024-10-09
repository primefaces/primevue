<template>
    <component v-if="!asChild" :is="as" v-ripple :class="cx('root')" v-bind="attrs">
        <slot>
            <slot v-if="loading" name="loadingicon" :class="[cx('loadingIcon'), cx('icon')]">
                <span v-if="loadingIcon" :class="[cx('loadingIcon'), cx('icon'), loadingIcon]" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else :class="[cx('loadingIcon'), cx('icon')]" spin v-bind="ptm('loadingIcon')" />
            </slot>
            <slot v-else name="icon" :class="[cx('icon')]">
                <span v-if="icon" :class="[cx('icon'), icon, iconClass]" v-bind="ptm('icon')"></span>
            </slot>
            <span :class="cx('label')" v-bind="ptm('label')">{{ label || '&nbsp;' }}</span>
            <Badge v-if="badge" :value="badge" :class="badgeClass" :severity="badgeSeverity" :unstyled="unstyled" :pt="ptm('pcBadge')"></Badge>
        </slot>
    </component>
    <slot v-else :class="cx('root')" :a11yAttrs="a11yAttrs"></slot>
</template>

<script>
import { isEmpty } from '@primeuix/utils/object';
import SpinnerIcon from '@primevue/icons/spinner';
import Badge from 'primevue/badge';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';
import BaseButton from './BaseButton.vue';

export default {
    name: 'Button',
    extends: BaseButton,
    inheritAttrs: false,
    inject: {
        $pcFluid: { default: null }
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    disabled: this.disabled
                }
            });
        }
    },
    computed: {
        disabled() {
            return this.$attrs.disabled || this.$attrs.disabled === '' || this.loading;
        },
        defaultAriaLabel() {
            return this.label ? this.label + (this.badge ? ' ' + this.badge : '') : this.$attrs.ariaLabel;
        },
        hasIcon() {
            return this.icon || this.$slots.icon;
        },
        attrs() {
            return mergeProps(this.asAttrs, this.a11yAttrs, this.getPTOptions('root'));
        },
        asAttrs() {
            return this.as === 'BUTTON' ? { type: 'button', disabled: this.disabled } : undefined;
        },
        a11yAttrs() {
            return {
                'aria-label': this.defaultAriaLabel,
                'data-pc-name': 'button',
                'data-p-disabled': this.disabled,
                'data-p-severity': this.severity
            };
        },
        hasFluid() {
            return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
        }
    },
    components: {
        SpinnerIcon,
        Badge
    },
    directives: {
        ripple: Ripple
    }
};
</script>
