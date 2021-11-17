 <template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Toast</h1>
                <p>Toast is used to display messages in an overlay.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <Toast position="bottom-center" group="bc">
                <template #message="slotProps">
                    <div class="p-d-flex p-flex-column">
                        <div class="p-text-center">
                            <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                            <h4>{{slotProps.message.summary}}</h4>
                            <p>{{slotProps.message.detail}}</p>
                        </div>
                        <div class="p-grid p-fluid">
                            <div class="p-col-6">
                                <Button class="p-button-success" label="Yes" @click="onConfirm"></Button>
                            </div>
                            <div class="p-col-6">
                                <Button class="p-button-secondary" label="No" @click="onReject"></Button>
                            </div>
                        </div>
                    </div>
                </template>
            </Toast>

            <div class="card">
                <h5>Severities</h5>
                <Button label="Success" class="p-button-success" @click="showSuccess" />
                <Button label="Info" class="p-button-info" @click="showInfo" />
                <Button label="Warn" class="p-button-warning" @click="showWarn" />
                <Button label="Error" class="p-button-danger" @click="showError" />

                <h5>Positions</h5>
                <Button label="Top Left" class="p-mr-2" @click="showTopLeft" />
                <Button label="Bottom Left" class="p-button-warning" @click="showBottomLeft" />
                <Button label="Bottom Right" class="p-button-success" @click="showBottomRight" />

                <h5>Options</h5>
                <Button @click="showMultiple" label="Multiple" class="p-button-warning" />
                <Button @click="showSticky" label="Sticky" />

                <h5>Remove All</h5>
                <Button @click="clear" label="Clear" />

                <h5>Template</h5>
                <Button @click="showTemplate" label="Confirm" />

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
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
        },
        showInfo() {
            this.$toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
        },
        showWarn() {
            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
        },
        showError() {
            this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
        },
        showTopLeft() {
            this.$toast.add({severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000});
        },
        showBottomLeft() {
            this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Content', group: 'bl', life: 3000});
        },
        showBottomRight() {
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', group: 'br', life: 3000});
        },
        showSticky() {
            this.$toast.add({severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
        },
        showMultiple() {
            this.$toast.add({severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000});
            this.$toast.add({severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000});
            this.$toast.add({severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000});
        },
        showTemplate() {
            this.$toast.add({severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm', group: 'bc'});
        },
        onConfirm() {
            this.$toast.removeGroup('bc');
        },
        onReject() {
            this.$toast.removeGroup('bc');
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

<style lang="scss" scoped>
button {
    min-width: 10rem;
    margin-right: .5rem;
}

@media screen and (max-width: 960px) {
    button {
        width: 100%;
        margin-bottom: .5rem;
    }
}
</style>