<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>OverlayPanel</h1>
                <p>OverlayPanel is a container component that can overlay other components on page.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Button type="button" label="Toggle" @click="toggle" />

            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">
                <img src="demo/images/nature/nature1.jpg" alt="Nature Image">
            </OverlayPanel>
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