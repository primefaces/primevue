<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>OverlayPanel</h1>
                <p>OverlayPanel is a container component that can overlay other components on page.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Button type="button" label="Toggle" @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" />

                <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel">
                    <img src="demo/images/nature/nature1.jpg" alt="Nature Image">
                </OverlayPanel>
            </div>
        </div>

        <OverlayPanelDoc/>
    </div>
</template>

<script>
import OverlayPanelDoc from './OverlayPanelDoc';

export default {
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        }
    },
    components: {
        'OverlayPanelDoc': OverlayPanelDoc
    }
}
</script>