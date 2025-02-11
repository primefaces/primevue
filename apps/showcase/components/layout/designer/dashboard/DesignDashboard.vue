<template>
    <div style="border-radius: 50px" class="overflow-hidden mb-8">
        <NuxtLink to="/designer" class="block">
            <img alt="PrimeVue Designer" :src="coverImage" class="w-full" />
        </NuxtLink>
    </div>

    <div class="text-lg font-semibold mb-2">Authenticate</div>
    <span class="block text-muted-color leading-6 mb-4"
        >A license can be purchased from PrimeStore, if you do not have a license key, you are still able to experience the Designer in trial mode. In trial mode, downloads, figma to code, migration assistand and cloud storage are not available.
        <NuxtLink to="/designer" class="doc-link">Learn more</NuxtLink> about the Theme Designer.</span
    >
    <span class="block text-muted-color leading-6 mb-4">License Key and Passkey are available at <a href="https://primefaces.org/store/designer.xhtml" class="doc-link" rel="noopener noreferrer">PrimeStore</a>.</span>
    <form v-if="!$appState.designer.verified" @submit.prevent class="flex gap-4">
        <input v-model="licenseKey" type="password" autocomplete="off" class="px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 flex-1" placeholder="License Key" />
        <input v-model="otp" autocomplete="off" class="px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700" placeholder="Passkey" />
        <button type="button" @click="activate(false)" class="btn-design">Activate</button>
    </form>
    <form v-else @submit.prevent class="flex gap-4">
        <input value="***********************************************************" type="password" autocomplete="off" class="px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 flex-1" placeholder="License Key" disabled />
        <button type="button" @click="signOut" class="btn-design">Sign Out</button>
    </form>

    <div class="flex justify-between items-center mb-2 mt-6">
        <span class="text-lg font-semibold">My Themes</span>
        <div v-if="$appState.designer.themeLimit" class="flex items-center gap-2">
            <span class="text-muted-color text-xs">{{ $appState.designer.themes.length }} / {{ $appState.designer.themeLimit }}</span>
            <div class="h-2 border rounded-md w-32 overflow-hidden">
                <div class="bg-zinc-950 dark:bg-white h-full" :style="{ width: themeUsageRatio + '%' }"></div>
            </div>
        </div>
    </div>
    <span class="block text-muted-color leading-6 mb-4">Continue editing your existing themes or build a new one.</span>
    <div class="flex flex-wrap gap-4">
        <button
            type="button"
            :class="[
                'rounded-xl h-32 w-32 bg-transparent border border-surface-200 dark:border-surface-700 text-black dark:text-white',
                { 'opacity-50 cursor-auto': themeLimitReached, 'hover:border-surface-400 dark:hover:border-surface-500': !themeLimitReached }
            ]"
            @click="openNewTheme"
        >
            <i class="pi pi-plus !text-2xl"></i>
        </button>
        <template v-if="loading">
            <Skeleton class="!rounded-xl !h-32 !w-32">-</Skeleton>
            <Skeleton class="!rounded-xl !h-32 !w-32">-</Skeleton>
        </template>
        <template v-else>
            <div v-for="theme of $appState.designer.themes" :key="theme.t_key" class="flex flex-col gap-2 relative">
                <button
                    type="button"
                    class="rounded-xl h-32 w-32 px-4 overflow-hidden text-ellipsis bg-transparent border border-surface-200 dark:border-surface-700 hover:border-surface-400 dark:hover:border-surface-500 text-black dark:text-white"
                    @click="loadTheme(theme)"
                >
                    <span class="text-2xl uppercase font-bold">{{ abbrThemeName(theme) }}</span>
                </button>
                <div class="flex flex-col items-center gap-1">
                    <div class="group flex items-center gap-2 relative">
                        <input v-model="theme.t_name" type="text" class="w-24 text-sm px-2 text-center" maxlength="100" @blur="renameTheme(theme)" />
                        <i class="hidden group-hover:block pi pi-pencil !text-sm absolute top-50 right-0 text-muted-color"></i>
                    </div>
                    <span class="text-muted-color text-xs">{{ formatTimestamp(theme.t_last_updated) }}</span>
                </div>
                <button type="button" @click="toggleMenuOptions($event, theme)" class="hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 flex absolute top-1 right-1 w-8 h-8 rounded-lg items-center justify-center">
                    <i class="pi pi-ellipsis-h !text-xs" />
                </button>
            </div>
        </template>
        <Menu ref="themeMenu" :model="themeOptions" :popup="true" />
    </div>
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
            licenseKey: null,
            otp: null,
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
                            acceptProps: {
                                severity: 'contrast'
                            },
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
                {
                    label: 'Download',
                    icon: 'pi pi-download',
                    command: () => {
                        this.designerService.downloadTheme(this.currentTheme);
                    }
                }
            ]
        };
    },
    created() {
        if (this.$appState.designer.verified) {
            this.loadThemes();
        }
    },
    methods: {
        async activate(silent) {
            const { data, error } = await $fetch(this.designerApiBase + '/license/signin/' + this.licenseKey, {
                credentials: 'include',
                query: {
                    passkey: this.otp
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                if (data.valid) {
                    this.$appState.designer.verified = true;
                    this.$appState.designer.themeLimit = data.themeLimit;

                    this.loadThemes();

                    if (!silent) {
                        this.$toast.add({ severity: 'success', summary: 'Success', detail: 'License is activated.', life: 3000 });
                    }
                } else {
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid key.', life: 3000 });
                    this.$appState.designer.themes = [];
                }
            }
        },
        async signOut() {
            const { data } = await $fetch(this.designerApiBase + '/license/signout/', {
                credentials: 'include'
            });

            if (data.signout) {
                this.$appState.designer.verified = false;
                this.$appState.designer.themeLimit = null;
                this.$appState.designer.themes = [];
                this.$appState.designer.acTokens = [];

                this.$appState.designer = {
                    verified: false,
                    ticket: null,
                    themeLimit: null,
                    active: true,
                    activeView: 'dashboard',
                    activeTab: '0',
                    theme: {
                        key: null,
                        name: null,
                        preset: null,
                        config: null
                    },
                    acTokens: [],
                    themes: []
                };

                this.licenseKey = null;
                this.otp = null;
                this.currentTheme = null;

                usePreset(Aura);
            }
        },
        openNewTheme() {
            if (!this.themeLimitReached) {
                this.$appState.designer.activeView = 'create_theme';
            }
        },
        async loadThemes() {
            this.loading = true;
            const { data, error } = await $fetch(this.designerApiBase + '/theme/list/', {
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.designerService.getCSRFToken()
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                this.$appState.designer.themes = data;
            }

            this.loading = false;
        },
        async loadTheme(theme) {
            const { data, error } = await $fetch(this.designerApiBase + '/theme/load/' + theme.t_key, {
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.designerService.getCSRFToken()
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                this.designerService.activateTheme(data);
                this.$appState.designer.activeView = 'editor';
            }
        },
        async renameTheme(theme) {
            const { error } = await $fetch(this.designerApiBase + '/theme/rename/' + theme.t_key, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.designerService.getCSRFToken()
                },
                body: {
                    name: theme.t_name
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            }
        },
        async deleteTheme(theme) {
            const { error } = await $fetch(this.designerApiBase + '/theme/delete/' + theme.t_key, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.designerService.getCSRFToken()
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
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.designerService.getCSRFToken()
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
            return theme.t_name ? theme.t_name.substring(0, 2) : 'UT';
        }
    },
    computed: {
        themeLimitReached() {
            return this.$appState.designer.themeLimit ? this.$appState.designer.themeLimit === this.$appState.designer.themes.length : false;
        },
        themeUsageRatio() {
            return this.$appState.designer.themeLimit ? 100 * (this.$appState.designer.themes.length / this.$appState.designer.themeLimit) : 0;
        },
        coverImage() {
            const image = this.$appState.darkTheme ? 'editor-intro-dark.png' : 'editor-intro.png';

            return 'https://primefaces.org/cdn/designer/' + image;
        }
    }
};
</script>
