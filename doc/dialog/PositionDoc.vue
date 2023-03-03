<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>position</i> property is used to display a Dialog at all edges and corners of the screen.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
            <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
            <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
            <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
            <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
            <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            position: 'center',
            visible: false,
            code: {
                basic: `
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
    <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
</div>
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
    <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
    <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
    <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
    <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
</div>

<Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <template #footer>
        <Button label="No" icon="pi pi-times" @click="visible = false" text />
        <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
    </template>
</Dialog>`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
            <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
            <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
            <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
            <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
            <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            position: 'center',
            visible: false
        };
    },
    methods: {
        openPosition(position) {
            this.position = position;
            this.visible = true;
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
            <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
            <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
            <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
            <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
            <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const position = ref('center');
const visible = ref(false);

const openPosition = (pos) => {
    position.value = pos;
    visible.value = true;
}
<\/script>`
            }
        };
    },
    methods: {
        openPosition(position) {
            this.position = position;
            this.visible = true;
        }
    }
};
</script>
