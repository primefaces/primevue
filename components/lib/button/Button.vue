<template>
    <button v-ripple :class="cx('root')" type="button" :aria-label="defaultAriaLabel" :disabled="disabled" v-bind="getPTOptions('root')" data-pc-name="button" :data-pc-severity="severity">
        <slot>
            <slot v-if="loading" name="loadingicon" :class="[cx('loadingIcon'), cx('icon')]">
                <span v-if="loadingIcon" :class="[cx('loadingIcon'), cx('icon'), loadingIcon]" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else :class="[cx('loadingIcon'), cx('icon')]" spin v-bind="ptm('loadingIcon')" />
            </slot>
            <slot v-else name="icon" :class="cx('icon')">
                <span v-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')"></span>
            </slot>
            <span :class="cx('label')" v-bind="ptm('label')">{{ label || '&nbsp;' }}</span>
            <Badge v-if="badge" :value="badge" :class="badgeClass" :unstyled="unstyled" v-bind="ptm('badge')"></Badge>
        </slot>
    </button>
</template>

<script>
import Badge from 'primevue/badge';
import SpinnerIcon from 'primevue/icons/spinner';
import Ripple from 'primevue/ripple';
import BaseButton from './BaseButton.vue';

export default {
    name: 'Button',
    extends: BaseButton,
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
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
            return this.label ? this.label + (this.badge ? ' ' + this.badge : '') : this.$attrs['aria-label'];
        },
        hasIcon() {
            return this.icon || this.$slots.icon;
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
