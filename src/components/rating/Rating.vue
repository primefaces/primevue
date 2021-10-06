<template>
    <div :class="containerClass">
        <Icon class="p-rating-icon p-rating-cancel" :tabindex="focusIndex" v-if="cancel" @click="onCancelClick"
            :icon="{ commonIcon: 'ban', context: 'Rating' }"/>
        <Icon :key="i" v-for="i in stars" @click="onStarClick($event,i)"
            :tabindex="focusIndex" @keydown.enter.prevent="onStarClick($event,i)"
            class="p-rating-icon"
            :class="{ 'p-rating-icon-filled': i <= modelValue }"
            :icon="{ commonIcon: i > modelValue ? 'star-o' : 'star', context: 'Rating' }"/>
    </div>
</template>

<script>
import Icon from 'primevue/icon';

export default {
    name: 'Rating',
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
        }
    },
    components: {
        'Icon': Icon
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
</style>
