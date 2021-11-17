<template>
    <div>
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
                <ProgressSpinner />

                <h5>Custom</h5>
                <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
            </div>
        </div>

        <ProgressSpinnerDoc />
    </div>
</template>

<script>
import ProgressSpinnerDoc from './ProgressSpinnerDoc';

export default {
    components: {
        'ProgressSpinnerDoc': ProgressSpinnerDoc
    }
}
</script>