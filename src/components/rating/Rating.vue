<template>
    <div :class="containerClass">
        <span class="p-rating-icon p-rating-cancel pi pi-ban" :tabindex="focusIndex" v-if="cancel" @click="onCancelClick"></span>
        <span :key="i" v-for="i in stars" @click="onStarClick($event,i)" :tabindex="focusIndex" @keydown.enter.prevent="onStarClick($event,i)"
            :class="['p-rating-icon', iconClass(i)]" :style="'--full: '+full+';'"></span>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue', 'change'],
    props: {
        modelValue: {
            type: Number,
            default: null
        },
		disabled: {
            type: Boolean,
            default: false
        },
		readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        cancel: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onStarClick(event, value) {
            if (!this.readonly && !this.disabled) {
                this.updateModel(event, value);
            }
        },
        onCancelClick() {
            if (!this.readonly && !this.disabled) {
                this.updateModel(event, null);
            }
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', {
                originalEvent: event,
                value: value
            });
        },
        iconClass(i) {
            if (i <= this.modelValue) return 'pi pi-star';
            if (this.isPartial && i === this.intPart + 1) return 'pi pi-star partial';
            if (i > this.modelValue) return 'pi pi-star-o';
        }
    },
    computed: {
        containerClass() {
            return [
                'p-rating',
                {
                    'p-readonly': this.readonly,
                    'p-disabled': this.disabled
                }
            ];
        },
        focusIndex() {
            return (this.disabled || this.readonly) ? null : '0';
        },
        intPart: function () {
            return Math.floor(this.modelValue);
        },
        decimalPart: function () {
            return this.modelValue - Math.floor(this.modelValue);
        },
        isPartial: function () {
            const gradientSupported = (typeof CSS === 'object') && CSS.supports('background',
                '-webkit-gradient(linear, left top, right top, from(var(--primary-color)), to(transparent))' +
                'or -webkit-linear-gradient(left, var(--primary-color) 0 var(--full), transparent var(--full) 100%)' +
                'or linear-gradient(to right, var(--primary-color) 0 var(--full), transparent var(--full) 100%)'
            )
            return gradientSupported && this.decimalPart !== 0;
        },
        full: function () {
            return (this.decimalPart) * 100 + '%';
        }
    }
}
</script>

<style>
.p-rating-icon {
    cursor: pointer;
}

.p-rating.p-rating-readonly .p-rating-icon {
    cursor: default;
}

.p-rating .p-rating-icon.pi-star{
    -webkit-text-stroke: var(--primary-color) .78px;
}
.p-rating .p-rating-icon.pi-star.partial {
    color: transparent;
    background: -webkit-gradient(linear, left top, right top, from(var(--primary-color)), to(transparent));
    background: -webkit-linear-gradient(left, var(--primary-color) 0 var(--full), transparent var(--full) 100%);
    background: linear-gradient(to right, var(--primary-color) 0 var(--full), transparent var(--full) 100%);
    -webkit-background-clip: text;
    background-clip: text;
}
</style>
