<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>BlockUI</h1>
                <p>BlockUI can either block other components or the whole page.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Document</h5>
                <BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>

                <Button type="button" label="Block" @click="blockDocument()"></Button>

                <h5>Panel</h5>
                <Button type="button" label="Block" @click="blockPanel()"></Button>
                <Button type="button" label="Unblock" @click="unblockPanel()"></Button>

                <BlockUI :blocked="blockedPanel">
                    <Panel header="Godfather I" style="margin-top: 20px">
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Panel>
                </BlockUI>
            </div>
        </div>

        <BlockUIDoc />
    </div>
</template>

<script>
import BlockUIDoc from './BlockUIDoc';

export default {
    data() {
        return {
            blockedPanel: false,
            blockedDocument: false
        }
    },
    methods: {
        blockDocument() {
            this.blockedDocument = true;

            setTimeout(() => {
                this.blockedDocument = false;
            }, 3000);
        },
        blockPanel() {
            this.blockedPanel = true;
        },
        unblockPanel() {
            this.blockedPanel = false;
        }
    },
    components: {
        'BlockUIDoc': BlockUIDoc
	}
}
</script>

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}

button {
    margin-right: .5rem;
}
</style>