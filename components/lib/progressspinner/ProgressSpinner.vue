<template>
    <div class="p-progress-spinner" role="progressbar" v-bind="ptm('root')">
        <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" :style="svgStyle" v-bind="ptm('spinner')">
            <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" :fill="fill" :stroke-width="strokeWidth" strokeMiterlimit="10" v-bind="ptm('circle')" />
        </svg>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'ProgressSpinner',
    extends: BaseComponent,
    props: {
        strokeWidth: {
            type: String,
            default: '2'
        },
        fill: {
            type: String,
            default: 'none'
        },
        animationDuration: {
            type: String,
            default: '2s'
        }
    },
    computed: {
        svgStyle() {
            return {
                'animation-duration': this.animationDuration
            };
        }
    }
};
</script>

<style>
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progress-spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
}

.p-progress-spinner-svg {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
