<template>
    <DocSectionText v-bind="$attrs">
        <p>The whole page is covered when <i>position</i> property is set as <i>full</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer" position="full">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-window-maximize" @click="visible = true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            code: {
                basic: `
<div class="card flex justify-center">
    <Drawer v-model:visible="visible" header="Drawer" position="full">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Drawer>
    <Button icon="pi pi-window-maximize" @click="visible = true" />
</div>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer" position="full">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-window-maximize" @click="visible = true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer" position="full">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-window-maximize" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
