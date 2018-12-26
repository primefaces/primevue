<template>
    <div role="progressbar" :class="containerClass" :aria-valuemin="0" :aria-valuenow="value" :aria-valuemax="100">
        <div v-if="determinate" class="p-progressbar-value p-progressbar-value-animate" :style="progressStyle"></div>
        <div v-if="determinate && value" class="p-progressbar-label">{{value + '%'}}</div>
        <div v-if="indeterminate" class="p-progressbar-indeterminate-container">
            <div class="p-progressbar-value p-progressbar-value-animate"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: Number,
        mode: {
            type: String,
            default: 'determinate'
        },
        showValue: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        containerClass() {
            return [
                'p-progressbar p-component',
                {
                    'p-progressbar-determinate': this.determinate,
                    'p-progressbar-indeterminate': this.indeterminate
                }
            ];
        },
        progressStyle() {
            return {
                width: this.value + '%', 
                display: 'block'
            };
        },
        indeterminate() {
            return this.mode === 'indeterminate';
        },
        determinate() {
            return this.mode === 'determinate';
        }
    }
}
</script>
