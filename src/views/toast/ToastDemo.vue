 <template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Toast</h1>
                <p>Toast is used to display messages in an overlay.</p>
            </div>
        </div>

        <div class="content-section implementation p-fluid">
            <div class="card">
                <h5>Severities</h5>
                <div class="p-grid">
                    <div class="p-col-12 p-md-3">
                        <Button label="Success" class="p-button-success" @click="showSuccess" />
                    </div>
                    <div class="p-col-12 p-md-3">
                        <Button label="Info" class="p-button-info" @click="showInfo" />
                    </div>
                    <div class="p-col-12 p-md-3">
                        <Button label="Warn" class="p-button-warning" @click="showWarn" />
                    </div>
                    <div class="p-col-12 p-md-3">
                        <Button label="Error" class="p-button-danger" @click="showError" />
                    </div>
                </div>

                <h5>Positions</h5>
                <div class="p-grid">
                    <div class="p-col-12 p-md-4">
                        <Button label="Top Left" @click="showTopLeft" />
                    </div>
                    <div class="p-col-12 p-md-4">
                        <Button label="Bottom Left" class="p-button-warning" @click="showBottomLeft" />
                    </div>
                    <div class="p-col-12 p-md-4">
                        <Button label="Bottom Right" class="p-button-success" @click="showBottomRight" />
                    </div>
                </div>

                <h5>Options</h5>
                <div class="p-grid">
                    <div class="p-col-12 p-md-6">
                        <Button @click="showMultiple" label="Multiple" class="p-button-warning" />
                    </div>
                    <div class="p-col-12 p-md-6">
                        <Button @click="showSticky" label="Sticky" />
                    </div>
                </div>

                <h5>Remove All</h5>
                <Button @click="clear" label="Clear" />
            </div>
        </div>

        <ToastDoc/>
    </div>
</template>

<script>
import ToastDoc from './ToastDoc';

export default {
    data() {
        return {
            messages: [],
        }
    },
    methods: {
        showSuccess() {
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
        },
        showInfo() {
            this.$toast.add({severity:'info', summary: 'Info Message', detail:'PrimeVue rocks', life: 3000});
        },
        showWarn() {
            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes', life: 3000});
        },
        showError() {
            this.$toast.add({severity:'error', summary: 'Error Message', detail:'Validation failed', life: 3000});
        },
        showTopLeft() {
            this.$toast.add({severity: 'info', summary: 'Info ', detail: 'You need to close Me', group: 'tl', life: 3000});
        },
        showBottomLeft() {
            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes', group: 'bl', life: 3000});
        },
        showBottomRight() {
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', group: 'br', life: 3000});
        },
        showSticky() {
            this.$toast.add({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me'});
        },
        showMultiple() {
            this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
            this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
            this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
        },
        clear() {
            this.$toast.removeAllGroups();
        }
    },
    components: {
        'ToastDoc': ToastDoc
    }
}
</script>