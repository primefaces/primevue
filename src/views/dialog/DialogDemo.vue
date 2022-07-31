<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dialog</h1>
                <p>Dialog is a container to display content in an overlay window.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openBasic" />
                <Dialog header="Header" v-model:visible="displayBasic" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
                    </template>
                </Dialog>

                <Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" />
                <Dialog header="Header" v-model:visible="displayBasic2" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus />
                    </template>
                </Dialog>

                <h5>Modal</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openModal" />
                <Dialog header="Header" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
                    <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
                    </template>
                </Dialog>

                <h5>Responsive</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openResponsive" />
                <Dialog header="Header" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeResponsive" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeResponsive" autofocus />
                    </template>
                </Dialog>

                <h5>Confirmation</h5>
                <Button label="Confirm" icon="pi pi-external-link" @click="openConfirmation" />
                <Dialog header="Confirmation" v-model:visible="displayConfirmation" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '350px'}" :modal="true">
                    <div class="confirmation-content">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span>Are you sure you want to proceed?</span>
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus />
                    </template>
                </Dialog>

                <h5>Maximizable</h5>
                <Button label="Show" icon="pi pi-external-link" @click="openMaximizable" />
                <Dialog header="Header" v-model:visible="displayMaximizable" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :maximizable="true" :modal="true">
                    <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"/>
                        <Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus />
                    </template>
                </Dialog>

                <h5>Position</h5>
                <div class="grid flex-column">
                    <div class="col">
                        <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
                        <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
                    </div>
                    <div class="col">
                        <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
                        <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" class="p-button-warning" />
                        <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" class="p-button-warning" />
                    </div>
                    <div class="col">
                        <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
                        <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" class="p-button-warning" />
                        <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" class="p-button-warning" />
                    </div>
                </div>

                <Dialog header="Header" v-model:visible="displayPosition" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :position="position" :modal="true">
                    <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text" />
                        <Button label="Yes" icon="pi pi-check" @click="closePosition" autofocus />
                    </template>
                </Dialog>
            </div>
        </div>

        <DialogDoc/>
    </div>
</template>

<script>
import DialogDoc from './DialogDoc';

export default {
    data() {
        return {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayResponsive: false,
            displayConfirmation: false,
            displayMaximizable: false,
            displayPosition: false,
            position: 'center'
        }
    },
    methods: {
        openBasic() {
            this.displayBasic = true;
        },
        closeBasic() {
            this.displayBasic = false;
        },
        openBasic2() {
            this.displayBasic2 = true;
        },
        closeBasic2() {
            this.displayBasic2 = false;
        },
        openResponsive() {
            this.displayResponsive = true;
        },
        closeResponsive() {
            this.displayResponsive = false;
        },
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        openConfirmation() {
            this.displayConfirmation = true;
        },
        closeConfirmation() {
            this.displayConfirmation = false;
        },
        openMaximizable() {
            this.displayMaximizable = true;
        },
        closeMaximizable() {
            this.displayMaximizable = false;
        },
        openPosition(position) {
            this.position = position;
            this.displayPosition = true;
        },
        closePosition() {
            this.displayPosition = false;
        }
    },
    components: {
        'DialogDoc': DialogDoc
    }
}
</script>

<style scoped lang="scss">
.p-button {
    margin: 0 .5rem 0 0;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>
