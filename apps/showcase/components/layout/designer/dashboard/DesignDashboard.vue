<template>
    <div class="text-lg font-semibold mb-2">License Key</div>
    <span class="block text-muted-color leading-6 mb-4"
        >A license can be purchased from PrimeStore, if you do not have a license key, you are still able to use the Designer in free tier. <NuxtLink to="/designer" class="doc-link">Learn more</NuxtLink> about the Theme Designer.</span
    >
    <form @submit.prevent class="flex gap-4">
        <input v-model="$appState.designer.licenseKey" type="password" autocomplete="off" class="px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 flex-1" />
        <button
            type="button"
            @click="activate(false)"
            icon="pi pi-download"
            :disabled="!$appState.designer.licenseKey"
            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white disabled:opacity-60"
        >
            Activate
        </button>
    </form>

    <div class="text-lg font-semibold mb-2 mt-6">My Themes</div>
    <span class="block text-muted-color leading-6 mb-4">Continue editing your existing themes or build a new one.</span>
    <div class="flex flex-wrap gap-6">
        <button type="button" class="rounded-xl h-36 w-36 bg-transparent border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-black dark:text-white" @click="openNewTheme">
            <i class="pi pi-plus !text-2xl"></i>
        </button>
        <template v-if="loading">
            <Skeleton class="!rounded-xl !h-36 !w-36">-</Skeleton>
            <Skeleton class="!rounded-xl !h-36 !w-36">-</Skeleton>
        </template>
        <template v-else>
            <div v-for="theme of $appState.designer.themes" :key="theme.t_key" class="flex flex-col gap-2 relative">
                <button
                    type="button"
                    class="rounded-xl h-36 w-36 px-4 overflow-hidden text-ellipsis bg-transparent border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-black dark:text-white"
                    @click="loadTheme(theme)"
                >
                    <span class="text-2xl uppercase">{{ abbrThemeName(theme) }}</span>
                </button>
                <div class="flex flex-col items-center gap-2">
                    <div class="group flex items-center gap-2 relative">
                        <input v-model="theme.t_name" type="text" class="w-24 text-sm px-2 py-1" maxlength="100" @blur="renameTheme(theme)" />
                        <i class="hidden group-hover:block pi pi-pencil !text-sm absolute top-50 right-0 text-muted-color"></i>
                    </div>
                    <span class="text-muted-color text-xs">{{ formatTimestamp(theme.last_updated) }}</span>
                </div>
                <button
                    type="button"
                    @click="toggleMenuOptions($event, theme)"
                    class="bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-black dark:text-white flex absolute top-2 right-2 w-8 h-8 rounded-full items-center justify-center"
                >
                    <i class="pi pi-ellipsis-v" />
                </button>
            </div>
        </template>
        <Menu ref="themeMenu" :model="themeOptions" :popup="true" />

        <ConfirmDialog group="designer"></ConfirmDialog>
    </div>
</template>

<script>
import { usePreset } from '@primevue/themes';

export default {
    setup() {
        const runtimeConfig = useRuntimeConfig();

        return {
            designerApiBase: runtimeConfig.public.designerApiBase
        };
    },
    inject: ['designerUtils'],
    data() {
        return {
            loading: false,
            currentTheme: null,
            confirmDialogVisible: false,
            themeOptions: [
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$confirm.require({
                            group: 'designer',
                            message: 'Are you sure you want to delete this theme?',
                            header: 'Confirmation',
                            icon: 'pi pi-exclamation-triangle',
                            rejectProps: {
                                severity: 'secondary'
                            },
                            accept: () => {
                                this.deleteTheme(this.currentTheme);
                            }
                        });
                    }
                },
                {
                    label: 'Duplicate',
                    icon: 'pi pi-copy',
                    command: () => {
                        this.duplicateTheme(this.currentTheme);
                    }
                },
                { label: 'Download', icon: 'pi pi-download' }
            ]
        };
    },
    created() {
        if (!this.$appState.designer.licenseKey) {
            const keyValue = localStorage.getItem(this.$appState.designer.localStoreKey);

            if (keyValue) {
                this.$appState.designer.licenseKey = keyValue;
                this.activate(true);
            }
        } else {
            this.loadThemes();
        }
    },
    methods: {
        async activate(silent) {
            this.loading = true;
            const { data, error } = await $fetch(this.designerApiBase + '/license/' + this.$appState.designer.licenseKey);

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                if (data) {
                    if (!silent) {
                        this.$toast.add({ severity: 'success', summary: 'Success', detail: 'License is activated.', life: 3000 });
                    }

                    this.loadThemes();
                    localStorage.setItem(this.$appState.designer.localStoreKey, this.$appState.designer.licenseKey);
                } else {
                    this.$toast.add({ severity: 'warn', summary: 'Unable to Activate', detail: 'Invalid key', life: 3000 });
                    this.$appState.designer.themes = [];
                }
            }

            this.loading = false;
        },
        openNewTheme() {
            this.$appState.designer.activeView = 'create_theme';
        },
        async loadThemes() {
            const { data, error } = await $fetch(this.designerApiBase + '/theme/list/' + this.$appState.designer.licenseKey);

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                this.$appState.designer.themes = data;
            }
        },
        async loadTheme(theme) {
            const { data, error } = await $fetch(this.designerApiBase + '/theme/' + theme.t_key);

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: 'Code: ' + error.code, life: 3000 });
            } else {
                this.$appState.designer.theme = {
                    name: data.t_name,
                    preset: JSON.parse(data.preset),
                    customTokens: [],
                    acTokens: []
                };

                usePreset(this.$appState.designer.theme.preset);
                this.designerUtils.refreshACTokens();
                this.$appState.designer.activeView = 'editor';
            }
        },
        async renameTheme(theme) {
            const { error } = await $fetch(this.designerApiBase + '/theme/rename/' + theme.t_key, {
                method: 'PATCH',
                body: {
                    name: theme.t_name,
                    license_key: this.$appState.designer.licenseKey
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            }
        },
        async deleteTheme(theme) {
            const { error } = await $fetch(this.designerApiBase + '/theme/delete/' + theme.t_key, {
                method: 'DELETE',
                body: {
                    license_key: this.$appState.designer.licenseKey
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                this.loadThemes();
            }
        },
        async duplicateTheme(theme) {
            const { error } = await $fetch(this.designerApiBase + '/theme/duplicate/' + theme.t_key, {
                method: 'POST',
                body: {
                    license_key: this.$appState.designer.licenseKey
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                this.loadThemes();
            }
        },
        formatTimestamp(timestamp) {
            const date = new Date(timestamp);

            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };

            return date.toLocaleString('en-US', options);
        },
        toggleMenuOptions(event, theme) {
            this.currentTheme = theme;
            this.$refs.themeMenu.toggle(event);
        },
        abbrThemeName(theme) {
            return theme.t_name ? theme.t_name.substring(0, 2) : 'U';
        }
    }
};
</script>
