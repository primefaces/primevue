<template>
    <div :class="containerClass">
        <a class="p-rating-cancel" v-if="cancel" @click="onCancelClick" tabindex="0">
            <span class="p-rating-icon pi pi-ban"></span>
        </a>
        <a :key="i" v-for="i in stars" @click="onStarClick($event,i)" tabindex="0" @keydown.enter.prevent="onStarClick($event,i)">
            <span :class="['p-rating-icon', {'pi pi-star-o': (i > value), 'pi pi-star': (i <= value)}]"></span>
        </a>
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