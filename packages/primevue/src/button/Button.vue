<template>
    <component v-if="!asChild" :is="as" v-ripple :class="cx('root')" :data-p="dataP" v-bind="attrs">
        <slot>
            <slot v-if="loading" name="loadingicon" :class="[cx('loadingIcon'), cx('icon')]" v-bind="ptm('loadingIcon')">
                <span v-if="loadingIcon" :class="[cx('loadingIcon'), cx('icon'), loadingIcon]" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else :class="[cx('loadingIcon'), cx('icon')]" spin v-bind="ptm('loadingIcon')" />
            </slot>
            <slot v-else name="icon" :class="[cx('icon')]" v-bind="ptm('icon')">
                <span v-if="icon" :class="[cx('icon'), icon, iconClass]" :data-p="dataIconP" v-bind="ptm('icon')"></span>
            </slot>
            <span v-if="label" :class="cx('label')" v-bind="ptm('label')" :data-p="dataLabelP">{{ label }}</span>
            <Badge v-if="badge" :value="badge" :class="badgeClass" :severity="badgeSeverity" :unstyled="unstyled" :pt="ptm('pcBadge')"></Badge>
        </slot>
    </component>
    <slot v-else :class="cx('root')" :a11yAttrs="a11yAttrs"></slot>
</template>

<script>
import { cn } from '@primeuix/utils';
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
        },
        dataP() {
            return cn({
                [this.size]: this.size,
                'icon-only': this.hasIcon && !this.label && !this.badge,
                loading: this.loading,
                fluid: this.hasFluid,
                rounded: this.rounded,
                raised: this.raised,
                outlined: this.outlined || this.variant === 'outlined',
                text: this.text || this.variant === 'text',
                link: this.link || this.variant === 'link',
                vertical: (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label
            });
        },
        dataIconP() {
            return cn({
                [this.iconPos]: this.iconPos,
                [this.size]: this.size
            });
        },
        dataLabelP() {
            return cn({
                [this.size]: this.size,
                'icon-only': this.hasIcon && !this.label && !this.badge
            });
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
