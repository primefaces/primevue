<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>@</i> alias is recommended to refer to a source folder in your application where Volt components are located as a subfolder. Without this alias, tedious relative paths like <i>../../</i> may be required.</p>
    </DocSectionText>
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    //...,
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "./src") }
        ]
    }
});
`);
</script>
