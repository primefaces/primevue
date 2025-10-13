<template>
    <section>
        <div class="text-lg font-semibold mb-2">Font</div>

        <div class="flex gap-4">
            <div>
                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Base</div>
                <select
                    v-model="$appState.designer.theme.config.font_size"
                    @change="changeBaseFontSize"
                    class="appearance-none px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-20"
                    :disabled="$appState.designer.theme.origin !== 'web'"
                >
                    <option v-for="fontSize of fontSizes" :key="fontSize" :value="fontSize">{{ fontSize }}</option>
                </select>
            </div>

            <div>
                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Family</div>
                <select
                    v-model="$appState.designer.theme.config.font_family"
                    @change="changeFont"
                    class="appearance-none px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-48"
                    :disabled="$appState.designer.theme.origin !== 'web'"
                >
                    <option v-for="font of fonts" :key="font" :value="font">{{ font }}</option>
                </select>
            </div>
        </div>
    </section>
    <section class="mt-6">
        <div class="block text-lg font-semibold mb-2">Migration Assistant</div>
        <span class="block text-muted-color leading-6 mb-4"
            >Automatically update your themes to the latest version. This tool does not override the values of existing tokens, and only adds missing tokens if necessary. Still, it is recommended to duplicate your theme as a backup and run a preview
            before the migration.
        </span>
        <div class="flex justify-start gap-2">
            <button type="button" @click="preview" class="btn-design-outlined disabled:pointer-events-none" :disabled="!$appState.designer.verified">Check for Updates</button>
            <button v-if="status === 'preview' && missingTokens.length > 0" type="button" @click="confirmMigration" class="btn-design" :disabled="$appState.designer.theme.origin !== 'web'">Migrate</button>
        </div>
        <div v-if="status === 'preview'">
            <div v-if="missingTokens.length" class="p-3 bg-yellow-100 text-yellow-950 dark:bg-yellow-500/30 dark:text-yellow-100 font-medium mt-4 rounded-md leading-normal">
                There are missing tokens, you may add them automatically using the migrate option with placeholder values. After migration, visit the corresponding section to define the actual values for your theme.
            </div>
            <div v-else class="p-3 bg-green-100 text-green-950 dark:bg-green-500/30 dark:text-white font-medium mt-4 rounded-md leading-normal">Your theme is up to date.</div>
        </div>
        <div v-else-if="status === 'updated'">
            <div class="p-3 bg-green-100 text-green-950 dark:bg-green-500/30 dark:text-white font-medium mt-4 rounded-md leading-normal">Your theme is successfully updated.</div>
        </div>

        <div v-if="missingTokens.length" class="max-h-60 overflow-auto mt-4 px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-full">
            <ul class="flex flex-col gap-1">
                <li v-for="token of missingTokens" :key="token.value" class="flex justify-between">
                    <span class="bg-red-50 text-red-950 dark:bg-red-500/30 dark:text-red-100 text-sm font-medium px-2 py-1 rounded-lg">{{ token.value }}</span>
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
            designerApiUrl: runtimeConfig.public.designerApiUrl
        };
    },
    inject: ['designerService'],
    data() {
        return {
            missingTokens: [],
            status: null,
            fontSizes: ['12px', '13px', '14px', '15px', '16px'],
            fonts: [
                'DM Sans',
                'Dosis',
                'Figtree',
                'IBM Plex Sans',
                'Inter var',
                'Lato',
                'Lexend',
                'Merriweather Sans',
                'Montserrat',
                'Noto Sans Display',
                'Nunito',
                'Nunito Sans',
                'Onest',
                'Open Sans',
                'Outfit',
                'Poppins',
                'PT Sans',
                'Public Sans',
                'Quicksand',
                'Raleway',
                'Roboto',
                'Source Sans Pro',
                'Space Grotesk',
                'Spline Sans',
                'Titillium Web',
                'Ubuntu Sans'
            ]
        };
    },
    methods: {
        changeFont() {
            this.designerService.applyFont(this.$appState.designer.theme.config.font_family);
            if (this.$appState.designer.verified) {
                this.designerService.saveTheme(this.$appState.designer.theme);
            }
        },
        changeBaseFontSize() {
            document.documentElement.style.fontSize = this.$appState.designer.theme.config.font_size;
            if (this.$appState.designer.verified) {
                this.designerService.saveTheme(this.$appState.designer.theme);
            }
        },
        async preview() {
            const { data, error } = await $fetch(this.designerApiUrl + '/theme/migrate/preview/' + this.$appState.designer.theme.key, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.$appState.designer.csrfToken
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
            const { data, error } = await $fetch(this.designerApiUrl + '/theme/migrate/execute/' + this.$appState.designer.theme.key, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.$appState.designer.csrfToken
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
            } else {
                this.status = 'updated';
                this.missingTokens = [];

                this.designerService.activateTheme(data);
            }
        }
    }
};
</script>
