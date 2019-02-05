<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Sidebar</h1>
                <p>Sidebar is a panel component displayed as an overlay at the edges of the screen.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Sidebar :visible.sync="visibleLeft" :baseZIndex="1000">
                <h1 style="fontWeight:normal">Left Sidebar</h1>
                <Button type="button" @click="visibleLeft = false" label="Save" class="p-button-success" style="margin-right:.25em" />
                <Button type="button" @click="visibleLeft = false" label="Cancel" class="p-button-secondary"/>
            </Sidebar>

            <Sidebar :visible.sync="visibleRight" :baseZIndex="1000" position="right">
                <h1 style="fontWeight:normal">Right Sidebar</h1>
                <Button type="button" @click="visibleRight = false" label="Save" class="p-button-success" style="margin-right:.25em" />
                <Button type="button" @click="visibleRight = false" label="Cancel" class="p-button-secondary"/>
            </Sidebar>

            <Sidebar :visible.sync="visibleTop" :baseZIndex="1000" position="top">
                <h1 style="fontWeight:normal">Top Sidebar</h1>
                <Button type="button" @click="visibleTop = false" label="Save" class="p-button-success" style="margin-right:.25em" />
                <Button type="button" @click="visibleTop = false" label="Cancel" class="p-button-secondary"/>
            </Sidebar>

            <Sidebar :visible.sync="visibleBottom" :baseZIndex="1000" position="bottom">
                <h1 style="fontWeight:normal">Bottom Sidebar</h1>
                <Button type="button" @click="visibleBottom = false" label="Save" class="p-button-success" style="margin-right:.25em" />
                <Button type="button" @click="visibleBottom = false" label="Cancel" class="p-button-secondary"/>
            </Sidebar>

            <Sidebar :visible.sync="visibleFull" :baseZIndex="1000" position="full">
                <h1 style="fontWeight:normal">Full Screen</h1>
                <Button type="button" @click="visibleFull = false" label="Save" class="p-button-success" style="margin-right:.25em" />
                <Button type="button" @click="visibleFull = false" label="Cancel" class="p-button-secondary"/>
            </Sidebar>

            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" style="margin-right:.25em" />
            <Button icon="pi pi-arrow-left" @click="visibleRight = true" style="margin-right:.25em" />
            <Button icon="pi pi-arrow-down" @click="visibleTop = true" style="margin-right:.25em" />
            <Button icon="pi pi-arrow-up" @click="visibleBottom = true" style="margin-right:.25em" />
            <Button icon="pi pi-th-large" @click="visibleFull = true"  />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false
        }
    }
}
</script>
