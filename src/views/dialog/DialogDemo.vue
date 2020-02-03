<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dialog</h1>
                <p>Dialog is a container to display content in an overlay window.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Button label="Show" icon="pi pi-external-link" @click="open" />
            <Dialog header="Godfather I" :visible.sync="display" :style="{width: '50vw'}" :maximizable="true" :modal="true">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                <template #footer>
                    <Button label="Yes" icon="pi pi-check" @click="close" />
                    <Button label="No" icon="pi pi-times" @click="close" class="p-button-secondary"/>
                </template>
            </Dialog>
        </div>

        <DialogDoc/>
    </div>
</template>

<script>
import DialogDoc from './DialogDoc';

export default {
    data() {
        return {
            display: false
        }
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        }
    },
    components: {
        'DialogDoc': DialogDoc
    }
}
</script>
