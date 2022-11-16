<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Sidebar</h1>
                <p>Sidebar is a panel component displayed as an overlay at the edges of the screen.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Button icon="pi pi-arrow-right" @click="onOpenSidebar($event, 'visibleLeft')" class="mr-2" />
                <Button icon="pi pi-arrow-left" @click="onOpenSidebar($event, 'visibleRight')" class="mr-2" />
                <Button icon="pi pi-arrow-down" @click="onOpenSidebar($event, 'visibleTop')" class="mr-2" />
                <Button icon="pi pi-arrow-up" @click="onOpenSidebar($event, 'visibleBottom')" class="mr-2" />
                <Button icon="pi pi-th-large" @click="onOpenSidebar($event, 'visibleFull')" />

                <Sidebar v-model:visible="visibleLeft" @hide="onHide" :baseZIndex="10000">
                    <h3>Left Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleRight" @hide="onHide" :baseZIndex="10000" position="right">
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleTop" @hide="onHide" :baseZIndex="10000" position="top">
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleBottom" @hide="onHide" :baseZIndex="10000" position="bottom">
                    <h3>Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleFull" @hide="onHide" :baseZIndex="10000" position="full">
                    <h3>Full Screen</h3>
                </Sidebar>
            </div>
        </div>

        <SidebarDoc />
    </div>
</template>

<script>
import SidebarDoc from './SidebarDoc';

export default {
    data() {
        return {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            targetElement: null
        };
    },
    methods: {
        onOpenSidebar(event, position) {
            this[position] = true;
            this.targetElement = this.findButton(event.target);
        },
        onHide() {
            this.targetElement.focus();
        },
        findButton(element) {
            if (element.nodeName !== 'BUTTON') {
                return this.findButton(element.parentNode);
            }

            return element;
        }
    },
    components: {
        SidebarDoc: SidebarDoc
    }
};
</script>
