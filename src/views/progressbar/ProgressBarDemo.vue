<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ProgressBar</h1>
                <p>ProgressBar is a process status indicator.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Dynamic</h3>
            <ProgressBar :value="value1" />

            <h3>Static</h3>
            <ProgressBar :value="value2" :showValue="false" />

            <h3>Indeterminate</h3>
            <ProgressBar mode="indeterminate" style="height: .5em" />
        </div>

        <ProgressBarDoc/>
    </div>
</template>

<script>
import ProgressBarDoc from './ProgressBarDoc';

export default {
    data() {
        return {
            value1: 0,
            value2: 50
        }
    },
    interval: null,
    methods: {
        startProgress() {
            this.interval = setInterval(() => {
                let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 100) {
                    newValue = 100;
                }
                this.value1 = newValue;
            }, 2000);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
        }
    },
    mounted() {
        this.startProgress();
    },
    beforeDestroy() {
        this.endProgress();
    },
    components: {
        'ProgressBarDoc': ProgressBarDoc
    }
}
</script>