<template>
    <div :class="containerClass">
        <span class="p-rating-icon p-rating-cancel pi pi-ban" tabindex="0" v-if="cancel" @click="onCancelClick"></span>
        <span :key="i" v-for="i in stars" @click="onStarClick($event,i)" tabindex="0" @keydown.enter.prevent="onStarClick($event,i)"
            :class="['p-rating-icon', {'pi pi-star-o': (i > value), 'pi pi-star': (i <= value)}]"></span>
    </div>
</template>

<script>
export default {
    props: {
        value: Number,
        stars: {
            type: Number,
            default: 5
        },
        readonly: Boolean,
        disabled: Boolean,
        cancel: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onStarClick(event, value) {
            this.updateModel(event, value);
        },
        onCancelClick() {
            this.updateModel(event, null);
        },
        updateModel(event, value) {
            this.$emit('input', value);
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
                    'p-rating-readonly': this.readonly,
                    'p-disabled': this.disabled
                }
            ];
        }
    }
}
</script>