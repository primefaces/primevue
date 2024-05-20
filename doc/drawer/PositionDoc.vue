<template>
    <DocSectionText v-bind="$attrs">
        <p>Drawer location is configured with the <i>position</i> property that can take <i>left</i>, <i>right</i>, <i>top</i> and <i>bottom</i> as valid values.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex gap-2 justify-center">
            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
            <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
            <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
            <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
        </div>

        <Drawer v-model:visible="visibleLeft" header="Left Drawer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleRight" header="Right Drawer" position="right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleTop" header="Top Drawer" position="top" style="height: auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleBottom" header="Bottom Drawer" position="bottom" style="height: auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            code: {
                basic: `
<div class="flex gap-2 justify-center">
    <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
    <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
    <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
    <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
</div>

<Drawer v-model:visible="visibleLeft" header="Left Drawer">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Drawer>

<Drawer v-model:visible="visibleRight" header="Right Drawer" position="right">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Drawer>

<Drawer v-model:visible="visibleTop" header="Top Drawer" position="top" style="height: auto">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Drawer>

<Drawer v-model:visible="visibleBottom" header="Bottom Drawer" position="bottom" style="height: auto">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Drawer>
`,
                options: `
<template>
    <div class="card">
        <div class="flex gap-2 justify-center">
            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
            <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
            <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
            <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
        </div>

        <Drawer v-model:visible="visibleLeft" header="Left Drawer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleRight" header="Right Drawer" position="right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleTop" header="Top Drawer" position="top" style="height: auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleBottom" header="Bottom Drawer" position="bottom" style="height: auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex gap-2 justify-center">
            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
            <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
            <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
            <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
        </div>

        <Drawer v-model:visible="visibleLeft" header="Left Drawer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleRight" header="Right Drawer" position="right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleTop" header="Top Drawer" position="top" style="height: auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>

        <Drawer v-model:visible="visibleBottom" header="Bottom Drawer" position="bottom" style="height: auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visibleLeft = ref(false);
const visibleRight = ref(false);
const visibleTop = ref(false);
const visibleBottom = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
