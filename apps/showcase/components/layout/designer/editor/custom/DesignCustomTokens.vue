<template>
    <span class="leading-6 text-muted-color">Extend the theming system with your own design tokens e.g. <span class="font-medium">accent.color</span>. Do not use curly braces in the name field.</span>
    <ul class="flex flex-col gap-4 list-none p-0 mx-0 my-4">
        <li v-for="(token, index) of $appState.designer.customTokens" :key="index" class="first:border-t border-b border-surface-200 dark:border-surface-300 py-2">
            <div class="flex items-center gap-4">
                <label class="flex items-center gap-2 flex-auto">
                    <span class="text-sm">Name</span>
                    <input v-model="token['name']" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full" />
                </label>
                <label class="flex items-center gap-2 flex-auto">
                    <span class="text-sm">Value</span>
                    <input v-model="token['value']" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full" />
                </label>
                <button
                    type="button"
                    @click="removeToken(index)"
                    class="cursor-pointer inline-flex items-center justify-center ms-auto w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-400/10 dark:hover:bg-red-400/20 dark:text-red-400 transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-red-600 focus:dark:outline-red-400"
                >
                    <i class="pi pi-times" />
                </button>
            </div>
        </li>
    </ul>
    <div class="flex justify-between">
        <button
            type="button"
            @click="addToken"
            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
        >
            Add New
        </button>
        <button
            v-if="$appState.designer.theme.customTokens.length"
            type="button"
            @click="saveTokens"
            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
        >
            Save
        </button>
    </div>
</template>

<script>
export default {
    inject: ['designer'],
    methods: {
        addToken() {
            this.$appState.designer.theme.customTokens = [...this.$appState.designer.theme.customTokens, ...[{}]];
        },
        removeToken(index) {
            this.$appState.designer.theme.customTokens.splice(index, 1);
        },
        saveTokens() {
            this.$appState.designer.theme.preset.extend = {};
            this.$appState.designer.theme.customTokens.forEach((token) => {
                this.$appState.designer.theme.preset.extend[this.transformTokenName(token.name)] = token.value;
            });

            designer.refreshACTokens();
            designer.saveTheme();

            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Tokens saved', life: 3000 });
        },
        transformTokenName(name) {
            if (name && name.trim().length) {
                let tokenNameSections = name.split('.');
                let transformedName = '';

                tokenNameSections.forEach((section, index) => {
                    transformedName += index === 0 ? section : section.charAt(0).toUpperCase() + section.substring(1);
                });

                return transformedName;
            } else {
                return name;
            }
        }
    }
};
</script>
