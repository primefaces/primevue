<template>
    <DocSectionText v-bind="$attrs">
        <p>Sidebar dimension can be defined with <i>style</i> or <i>class</i> properties which can also be responsive when used with a CSS utility library like PrimeFlex.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" class="w-full md:w-20rem lg:w-30rem">
            <h2>Sidebar</h2>
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
<div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible" class="w-full md:w-20rem lg:w-30rem">
        <h2>Sidebar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" @click="visible = true" />
</div>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" class="w-full md:w-20rem lg:w-30rem">
            <h2>Sidebar</h2>
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
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" class="w-full md:w-20rem lg:w-30rem">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`
            }
        };
    }
};
</script>
