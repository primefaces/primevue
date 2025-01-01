<template>
    <section class="mb-6">
        <div class="text-lg font-semibold mb-4">Font</div>

        <div class="flex gap-4">
            <div class="mb-4">
                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Base</div>
                <select v-model="$appState.designer.theme.config.fontSize" @change="changeBaseFontSize" class="appearance-none px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-20">
                    <option v-for="fontSize of fontSizes" :key="fontSize" :value="fontSize">{{ fontSize }}</option>
                </select>
            </div>

            <div>
                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Family</div>
                <select v-model="$appState.designer.theme.config.fontFamily" @change="changeFont" class="appearance-none px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-48">
                    <option v-for="font of fonts" :key="font" :value="font">{{ font }}</option>
                </select>
            </div>
        </div>
    </section>
    <section class="mb-6">
        <div class="block text-lg font-semibold mb-2">Migration Assistant</div>
        <span class="block text-muted-color leading-6 mb-4"
            >Automatically update your themes to the latest version. This tool does not override the values of existing tokens, and only adds missing tokens if necessary. Still, it is recommended to duplicate your theme as a backup and run a preview
            before the migration.
        </span>
        <div class="flex justify-between">
            <button
                type="button"
                @click="preview"
                class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
            >
                Preview
            </button>
            <button
                type="button"
                :disabled="status !== 'preview'"
                @click="confirmMigration"
                class="px-3 py-2 bg-zinc-950 disabled:hover:bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:disabled:hover:bg-white dark:text-black rounded-md font-medium cursor-pointer disabled:cursor-auto transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white disabled:opacity-60"
            >
                Migrate
            </button>
        </div>
        <div v-if="status === 'preview'">
            <div v-if="missingTokens.length" class="p-3 bg-yellow-100 text-yellow-950 dark:bg-amber-600 dark:text-black font-medium mt-4 rounded-md leading-normal">
                There are missing tokens, you may add them automatically using the migrate option with placeholder values. After migration, visit the corresponding section to define the actual values for your theme.
            </div>
            <div v-else class="p-3 bg-green-100 text-green-950 dark:bg-green-500 dark:text-black font-medium mt-4 rounded-md leading-normal">Your theme is up to date.</div>
        </div>
        <div v-else-if="status === 'updated'">
            <div class="p-3 bg-green-100 text-green-950 dark:bg-green-500 dark:text-black font-medium mt-4 rounded-md leading-normal">Your theme is successfully updated.</div>
        </div>

        <div v-if="missingTokens.length" class="max-h-60 overflow-auto mt-4 px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-full">
            <ul class="flex flex-col gap-1">
                <li v-for="token of missingTokens" :key="token.value" class="flex justify-between">
                    <span class="bg-red-50 text-red-950 text-sm font-medium px-2 py-1 rounded-lg">{{ token.value }}</span>
                    <span class="bg-zinc-950 text-white dark:bg-white dark:text-black rounded-full px-2 text-xs inline-flex items-center font-medium">{{ token.type }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        const runtimeConfig = useRuntimeConfig();

        return {
            designerApiBase: runtimeConfig.public.designerApiBase
        };
    },
    inject: ['designerService'],
    data() {
        return {
            missingTokens: [],
            status: null,
            fontSizes: ['12px', '13px', '14px', '15px', '16px'],
            fonts: ['DM Sans', 'Inter var', 'Figtree', 'Lato', 'Lexend', 'Montserrat', 'Poppins', 'Public Sans', 'Raleway', 'Roboto', 'Open Sans', 'Quicksand']
        };
    },
    methods: {
        changeFont() {
            this.designerService.applyFont(this.$appState.designer.theme.config.fontFamily);
            this.designerService.saveTheme(this.$appState.designer.theme);
        },
        changeBaseFontSize() {
            document.documentElement.style.fontSize = this.$appState.designer.theme.config.fontSize;
            this.designerService.saveTheme(this.$appState.designer.theme);
        },
        async preview() {
            const { data, error } = await $fetch(this.designerApiBase + '/theme/migrate/preview/' + this.$appState.designer.theme.key, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${this.$appState.designer.ticket}`,
                    'X-License-Key': this.$appState.designer.licenseKey
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
            } else {
                this.missingTokens = data;
                this.status = 'preview';
            }
        },
        confirmMigration() {
            this.$confirm.require({
                group: 'designer',
                message: 'Are you sure you want to migrate?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                acceptProps: {
                    severity: 'contrast'
                },
                rejectProps: {
                    severity: 'secondary'
                },
                accept: () => {
                    this.migrate();
                }
            });
        },
        async migrate() {
            const { error } = await $fetch(this.designerApiBase + '/theme/migrate/execute/' + this.$appState.designer.theme.key, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${this.$appState.designer.ticket}`,
                    'X-License-Key': this.$appState.designer.licenseKey
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
            } else {
                this.status = 'updated';
                this.missingTokens = [];
            }
        }
    }
};
</script>
