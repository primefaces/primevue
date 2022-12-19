<template>
    <div>
        <Head>
            <Title>Vue ProgressSpinner Component</Title>
            <Meta name="description" content="ProgressSpinner is a process status indicator." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ProgressSpinner</h1>
                <p>ProgressSpinner is a process status indicator.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <ProgressSpinner aria-label="Basic ProgressSpinner" />

                <h5>Custom</h5>
                <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            </div>
        </div>

        <ProgressSpinnerDoc />
    </div>
</template>

<script>
import ProgressSpinnerDoc from './ProgressSpinnerDoc';

export default {
    components: {
        ProgressSpinnerDoc: ProgressSpinnerDoc
    }
};
</script>
