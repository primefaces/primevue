<template>
    <div>
        <Head>
            <Title>Vue ProgressBar Component</Title>
            <Meta name="description" content="ProgressBar is a process status indicator." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ProgressBar</h1>
                <p>ProgressBar is a process status indicator.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Dynamic</h5>
                <ProgressBar :value="value1" />

                <h5>Static</h5>
                <ProgressBar :value="value2" :showValue="false" />

                <h5>Indeterminate</h5>
                <ProgressBar mode="indeterminate" style="height: 0.5em" />
            </div>
        </div>

        <ProgressBarDoc />
    </div>
</template>

<script>
import ProgressBarDoc from './ProgressBarDoc';

export default {
    data() {
        return {
            value1: 0,
            value2: 50
        };
    },
    interval: null,
    mounted() {
        this.startProgress();
    },
    beforeUnmount() {
        this.endProgress();
    },
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
    components: {
        ProgressBarDoc: ProgressBarDoc
    }
};
</script>
