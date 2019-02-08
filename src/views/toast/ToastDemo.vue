 <template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Toast</h1>
                <p>Toast is used to display messages in an overlay.</p>
            </div>
        </div>

        <div class="content-section implementation p-fluid">
            <h3>Severities</h3>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            count: 0
        }
    },
    methods: {
        showSuccess() {
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
        },
        showInfo() {
            this.$toast.add({severity:'info', summary: 'Info Message', detail:'PrimeNG rocks'});
        },
        showWarn() {
            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes'});
        },
        showError() {
            this.$toast.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
        }
    }
}
</script>

<style lang="scss">
button.p-button {
    margin-right: .5em;
}

.p-toast.p-toast-topright,
.p-toast.p-toast-left {
    top: 100px;
}
</style>
