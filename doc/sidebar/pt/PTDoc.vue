<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" header="Sidebar" :pt="{ root: { class: 'w-25rem' } }">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
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
<Sidebar v-model:visible="visible"
    header="Sidebar"
    :pt="{
        root: { class: 'w-25rem' }
    }"
>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Sidebar>
<Button icon="pi pi-arrow-right" @click="visible = true" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible"
            header="Sidebar"
            :pt="{
                root: { class: 'w-25rem' }
            }"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
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
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible"
            header="Sidebar"
            :pt="{
                root: { class: 'w-25rem' }
            }"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
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
