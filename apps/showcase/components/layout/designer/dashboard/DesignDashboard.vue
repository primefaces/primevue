<template>
    <div style="border-radius: 50px" class="overflow-hidden mb-8">
        <NuxtLink to="/designer" class="block">
            <img alt="PrimeVue Designer" :src="coverImage" class="w-full" />
        </NuxtLink>
    </div>

    <div class="text-lg font-semibold mb-2">Authenticate</div>
    <div v-if="!$appState.designer.verified">
        <span class="block leading-6 mb-4"
            >Theme Designer is the ultimate tool to customize and design your own themes featuring a visual editor, figma to theme code, cloud storage, and migration assistant. <NuxtLink to="/designer" class="doc-link">Discover</NuxtLink> more about
            the Theme Designer by visiting the detailed <NuxtLink to="/designer/guide" class="doc-link">documentation</NuxtLink>.</span
        >
        <span class="block leading-6 mb-4"
            >A license can be purchased from <a href="https://primeui.store/designer" class="doc-link" rel="noopener noreferrer">PrimeStore</a>, if you do not have a license key, you are still able to experience the Designer in trial mode. Note that
            in trial mode, downloads, figma to theme code, migration assistant and cloud storage are not available.</span
        >
        <span class="block leading-6 mb-4">Sign-in at <a href="https://primeui.store/designer" class="doc-link" rel="noopener noreferrer">PrimeStore</a> to retrieve your license key along with the pass key.</span>
    </div>
    <form v-if="!$appState.designer.verified" @submit.prevent class="flex gap-4">
        <input v-model="licenseKey" type="password" autocomplete="off" class="px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 flex-1" placeholder="License Key" />
        <input v-model="otp" autocomplete="off" class="px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700" placeholder="Pass Key" />
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
            <i class="pi pi-plus"></i>
        </button>
        <div v-for="theme of $appState.designer.themes" :key="theme.t_key" class="flex flex-col gap-2 relative">
            <button
                type="button"
                class="relative rounded-xl h-32 w-32 px-4 overflow-hidden text-ellipsis bg-transparent border border-surface-200 dark:border-surface-700 hover:border-surface-400 dark:hover:border-surface-500 text-black dark:text-white"
                @click="loadTheme(theme)"
            >
                <span class="text-2xl uppercase font-bold">{{ abbrThemeName(theme) }}</span>

                <span class="absolute bottom-2 start-0 text-xs text-muted-color ms-start w-full" v-if="theme.t_origin !== 'web'">View Only</span>
            </button>
            <div class="flex flex-col items-center gap-1">
                <div class="group flex items-center gap-2 relative">
                    <input
                        v-model="theme.t_name"
                        type="text"
                        :class="['w-24 text-sm px-2 text-center pr-4t', { 'bg-red-50 dark:bg-red-500/30': !theme.t_name, 'bg-transparent': theme.t_name }]"
                        maxlength="100"
                        :disabled="theme.t_origin !== 'web'"
                        @blur="renameTheme(theme)"
                        @keydown.enter="onThemeNameEnterKey($event)"
                        @keydown.escape="onThemeNameEscape($event)"
                    />
                    <i class="hidden group-hover:block pi pi-pencil !text-xs absolute top-50 text-muted-color" style="right: 2px" v-if="theme.t_origin === 'web'"></i>
                </div>
                <span class="text-muted-color text-xs">{{ formatTimestamp(theme.t_last_updated) }}</span>
            </div>
            <button type="button" @click="toggleMenuOptions($event, theme)" class="hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 flex absolute top-1 right-1 w-8 h-8 rounded-lg items-center justify-center">
                <i class="pi pi-ellipsis-h !text-xs" />
            </button>
        </div>
        <Menu ref="themeMenu" :model="themeOptions" :popup="true" @show="onMenuShow" @hide="onMenuHide" />
    </div>
</template>

<script>
import { usePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export default {
    scrollListener: null,
    setup() {
        const runtimeConfig = useRuntimeConfig();

        return {
            designerApiUrl: runtimeConfig.public.designerApiUrl
        };
    },
    inject: ['designerService'],
    beforeUnmount() {
        this.unbindScrollListener();
    },
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
        async activate() {
            const { data, error } = await $fetch(this.designerApiUrl + '/license/signin/' + this.licenseKey, {
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
                    this.$appState.designer.csrfToken = data.csrfToken;
                    this.$appState.designer.themeLimit = data.themeLimit;

                    this.loadThemes();

                    this.$toast.add({ severity: 'success', summary: 'Success', detail: 'License is activated.', life: 3000 });
                } else {
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid key.', life: 3000 });
                    this.$appState.designer.themes = [];
                }
            }
        },
        async signOut() {
            const { data } = await $fetch(this.designerApiUrl + '/license/signout/', {
                credentials: 'include'
            });

            if (data.signout) {
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
            const { data, error } = await $fetch(this.designerApiUrl + '/theme/list/', {
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.$appState.designer.csrfToken
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
            const { data, error } = await $fetch(this.designerApiUrl + '/theme/load/' + theme.t_key, {
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.$appState.designer.csrfToken
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                this.designerService.activateTheme(data);
                this.$appState.designer.activeTab = '0';
                this.$appState.designer.activeView = 'editor';
            }
        },
        async renameTheme(theme) {
            if (theme.t_name && theme.t_name.trim().length && theme.t_origin === 'web') {
                const { error } = await $fetch(this.designerApiUrl + '/theme/rename/' + theme.t_key, {
                    method: 'PATCH',
                    credentials: 'include',
                    headers: {
                        'X-CSRF-Token': this.$appState.designer.csrfToken
                    },
                    body: {
                        name: theme.t_name
                    }
                });

                if (error) {
                    this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
                }
            }
        },
        onThemeNameEnterKey(event) {
            event.target.blur();
        },
        onThemeNameEscape(event) {
            event.target.blur();
            event.stopPropagation();
        },
        async deleteTheme(theme) {
            const { error } = await $fetch(this.designerApiUrl + '/theme/delete/' + theme.t_key, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.$appState.designer.csrfToken
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
            } else {
                this.loadThemes();
            }
        },
        async duplicateTheme(theme) {
            const { error } = await $fetch(this.designerApiUrl + '/theme/duplicate/' + theme.t_key, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': this.$appState.designer.csrfToken
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
        onMenuShow() {
            this.bindScrollListener();
        },
        onMenuHide() {
            this.unbindScrollListener();
        },
        bindScrollListener() {
            if (!this.scrollListener) {
                this.scrollListener = () => {
                    this.$refs.themeMenu.hide();
                };

                window.addEventListener('scroll', this.scrollListener);
            }
        },
        unbindScrollListener() {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
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
