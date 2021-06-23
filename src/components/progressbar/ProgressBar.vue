<template>
    <div role="progressbar" :class="containerClass" aria-valuemin="0" :aria-valuenow="value" aria-valuemax="100">
        <div v-if="determinate" class="p-progressbar-value p-progressbar-value-animate" :style="progressStyle"></div>
        <div v-if="determinate && (value !== null) && showValue" class="p-progressbar-label">
            <slot>{{value + '%'}}</slot>
        </div>
        <div v-if="indeterminate" class="p-progressbar-indeterminate-container">
            <div class="p-progressbar-value p-progressbar-value-animate"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        value: {
            type: Number,
            default: null
        },
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

<style>
.p-progressbar {
    position: relative;
    overflow: hidden;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
}

.p-progressbar-determinate .p-progressbar-value-animate {
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
    font-weight: bold;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
              animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
            animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
            animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}
@keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}

@-webkit-keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
@keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
</style>
