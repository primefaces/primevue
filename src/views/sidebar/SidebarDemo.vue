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
                <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
                <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2"  />
                <Button icon="pi pi-arrow-down" @click="visibleTop = true" class="mr-2"  />
                <Button icon="pi pi-arrow-up" @click="visibleBottom = true" class="mr-2"  />
                <Button icon="pi pi-th-large" @click="visibleFull = true"  />

                <Sidebar v-model:visible="visibleLeft" :baseZIndex="1000">
                    <h3>Left Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleRight" :baseZIndex="1000" position="right">
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleTop" :baseZIndex="1000" position="top">
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleBottom" :baseZIndex="1000" position="bottom">
                    <h3>Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar v-model:visible="visibleFull" :baseZIndex="1000" position="full">
                    <h3>Full Screen</h3>
                </Sidebar>
            </div>
        </div>

        <SidebarDoc/>
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
            visibleFull: false
        }
    },
    components: {
        'SidebarDoc': SidebarDoc
    }
}
</script>
