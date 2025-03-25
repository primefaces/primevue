<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Configure two aliases to simplify the import process of Volt components. The <i>@</i> alias is used to refer to a source folder in your application where Volt components are located as a subfolder. Without this alias, tedious relative
            paths like <i>../../</i> may be required. Other aliases removes to need to add <i>*.vue</i> suffix in components paths such as <i>@/volt/{component}/index.vue</i> so that the path becomes <i>@/volt/{components}</i>.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    //...,
    resolve: {
        alias: [
            { find: /^@\/volt\/(.*)\/(.*)(?<!\.vue)$/, replacement: path.resolve(__dirname, "./src/volt/$1/$2.vue") },
            { find: /^@\/volt\/(.*)(?<!\.vue)$/, replacement: path.resolve(__dirname, "./src/volt/$1/index.vue") },
            { find: "@", replacement: path.resolve(__dirname, "./src") }
        ]
    }
});
`);
</script>
