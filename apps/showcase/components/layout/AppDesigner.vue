<template>
    <Drawer v-model:visible="$appState.designer.active" position="right" class="designer !w-screen md:!w-[48rem]" :modal="false" :dismissable="false" @after-show="onShow" @after-hide="onHide">
        <template #container="{ closeCallback }">
            <div class="flex items-center justify-between p-5">
                <div class="flex items-center gap-2">
                    <button v-if="$appState.designer.activeView !== 'dashboard'" type="button" @click="openDashboard" class="icon-btn">
                        <i class="pi pi-chevron-left" />
                    </button>
                    <span class="font-bold text-xl">{{ viewTitle }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" @click="toggleDarkMode" class="icon-btn">
                        <i :class="['pi', { 'pi-moon': $appState.darkTheme, 'pi-sun': !$appState.darkTheme }]"></i>
                    </button>
                    <button type="button" @click="closeCallback" class="icon-btn">
                        <i class="pi pi-times" />
                    </button>
                </div>
            </div>

            <div class="flex-auto overflow-auto pb-5 px-5">
                <DesignDashboard v-if="$appState.designer.activeView === 'dashboard'" />
                <DesignCreateTheme v-else-if="$appState.designer.activeView === 'create_theme'" />
                <DesignEditor v-else-if="$appState.designer.activeView === 'editor'" :deferred="deferredTabs" />
            </div>

            <div class="p-5">
                <DesignEditorFooter v-if="$appState.designer.activeView === 'editor'" />
            </div>
        </template>
    </Drawer>
    <ConfirmDialog group="designer"></ConfirmDialog>
</template>

<script>
import EventBus from '@/app/AppEventBus';
import { $dt, usePreset } from '@primeuix/themes';

export default {
    setup() {
        const runtimeConfig = useRuntimeConfig();

        return {
            designerApiUrl: runtimeConfig.public.designerApiUrl
        };
    },
    provide() {
        return {
            designerService: {
                refreshACTokens: this.refreshACTokens,
                saveTheme: this.saveTheme,
                downloadTheme: this.downloadTheme,
                activateTheme: this.activateTheme,
                applyTheme: this.applyTheme,
                applyFont: this.applyFont,
                resolveColor: this.resolveColor,
                resolveColorPlain: this.resolveColorPlain
            }
        };
    },
    data() {
        return {
            deferredTabs: true
        };
    },
    async mounted() {
        const { data, error } = await $fetch(this.designerApiUrl + '/license/restore', {
            credentials: 'include'
        });

        if (error) {
            this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
        } else {
            this.$appState.designer.verified = data.valid;

            if (data.valid) {
                this.$appState.designer.csrfToken = data.csrfToken;
                this.$appState.designer.themeLimit = data.themeLimit;
            }
        }
    },
    methods: {
        onShow() {
            this.deferredTabs = false;
        },
        onHide() {
            this.deferredTabs = true;
        },
        async downloadTheme(theme) {
            if (!this.$appState.designer.verified) {
                this.$toast.add({ severity: 'error', summary: 'Not Available', detail: 'A license is required for download.', life: 3000 });
            } else {
                try {
                    const response = await $fetch(this.designerApiUrl + '/theme/download/' + theme.t_key, {
                        responseType: 'blob',
                        credentials: 'include',
                        headers: {
                            'X-CSRF-Token': this.$appState.designer.csrfToken
                        },
                        query: {
                            library: 'primevue'
                        }
                    });

                    if (response.error) {
                        this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: error.message, life: 3000 });
                    } else {
                        const blobUrl = window.URL.createObjectURL(response);
                        const link = document.createElement('a');

                        link.href = blobUrl;
                        link.download = theme.t_name + '.zip';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(blobUrl);
                    }
                } catch (err) {
                    this.$toast.add({ severity: 'error', summary: 'An Error Occurred', detail: 'Failed to download file', life: 3000 });
                }
            }
        },
        async saveTheme(theme) {
            if (theme.origin === 'web') {
                const { error } = await $fetch(this.designerApiUrl + '/theme/update', {
                    method: 'PATCH',
                    credentials: 'include',
                    headers: {
                        'X-CSRF-Token': this.$appState.designer.csrfToken
                    },
                    body: {
                        key: theme.key,
                        preset: theme.preset,
                        config: theme.config
                    }
                });

                if (error) {
                    this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
                }
            }
        },
        applyTheme(theme) {
            if (this.$appState.designer.verified) {
                this.saveTheme(theme);
                this.refreshACTokens();
            }

            usePreset(theme.preset);
            EventBus.emit('theme-palette-change');
        },
        camelCaseToDotCase(name) {
            return name
                .replace(/([a-z])([A-Z])/g, '$1.$2')
                .replace(/([a-zA-Z])(\d)/g, '$1.$2')
                .toLowerCase();
        },
        generateACTokens(parentPath, obj) {
            for (let key in obj) {
                if (key === 'dark' || key === 'components' || key === 'directives') {
                    continue;
                }

                if (key === 'primitive' || key === 'semantic' || key === 'colorScheme' || key === 'light' || key === 'extend') {
                    this.generateACTokens(null, obj[key]);
                } else {
                    if (typeof obj[key] === 'object') {
                        this.generateACTokens(parentPath ? parentPath + '.' + key : key, obj[key]);
                    } else {
                        const regex = /\.\d+$/;

                        const tokenName = this.camelCaseToDotCase(parentPath ? parentPath + '.' + key : key);
                        const tokenValue = obj[key];
                        const isColor =
                            tokenName.includes('color') || tokenName.includes('background') || regex.test(tokenName) || tokenValue.startsWith('#') || tokenValue.startsWith('rgb') || tokenValue.startsWith('hsl') || tokenValue.startsWith('oklch');

                        this.$appState.designer.acTokens.push({ token: tokenName, label: '{' + tokenName + '}', variable: $dt(tokenName).variable, value: tokenValue, isColor: isColor });
                    }
                }
            }
        },
        refreshACTokens() {
            this.$appState.designer.acTokens = [];
            this.generateACTokens(null, this.$appState.designer.theme.preset);
        },
        openDashboard() {
            this.$appState.designer.activeView = 'dashboard';
        },
        applyFont(fontFamily) {
            if (fontFamily !== 'Inter var') {
                this.loadFont(fontFamily, 400);
                this.loadFont(fontFamily, 500);
                this.loadFont(fontFamily, 600);
                this.loadFont(fontFamily, 700);
            } else {
                document.body.style.fontFamily = `"Inter var", sans-serif`;
            }
        },
        async loadFont(fontFamily, weight) {
            try {
                const fontFamilyPath = fontFamily.toLowerCase().replace(/\s+/g, '-');
                const fontUrl = `https://fonts.bunny.net/${fontFamilyPath}/files/${fontFamilyPath}-latin-${weight}-normal.woff2`;
                const font = new FontFace(fontFamily, `url(${fontUrl})`, {
                    weight: weight.toString(),
                    style: 'normal'
                });

                const loadedFont = await font.load();

                document.fonts.add(loadedFont);
                document.body.style.fontFamily = `"${fontFamily}", sans-serif`;

                return loadedFont;
            } catch (error) {
                // silent fail as some fonts may have not all the font weights
            }
        },
        toggleDarkMode() {
            EventBus.emit('dark-mode-toggle', { dark: !this.$appState.darkTheme });
        },
        activateTheme(data) {
            this.$appState.designer.theme = {
                key: data.t_key,
                name: data.t_name,
                preset: typeof data.t_preset === 'string' ? JSON.parse(data.t_preset) : data.t_preset,
                config: typeof data.t_config === 'string' ? JSON.parse(data.t_config) : data.t_config,
                origin: data.t_origin
            };

            usePreset(this.$appState.designer.theme.preset);
            this.applyFont(this.$appState.designer.theme.config.font_family);
            document.documentElement.style.fontSize = this.$appState.designer.theme.config.font_size;
            this.refreshACTokens();
        },
        getCookie(name) {
            var cookieArr = document.cookie.split(';');

            for (var i = 0; i < cookieArr.length; i++) {
                var cookiePair = cookieArr[i].split('=');

                if (name == cookiePair[0].trim()) {
                    return decodeURIComponent(cookiePair[1]);
                }
            }

            return null;
        },
        resolveColor(token) {
            if (token && token.startsWith('{') && token.endsWith('}')) {
                let cssVariable = $dt(token).variable.slice(4, -1);
                return getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
            } else {
                return token;
            }
        },
        resolveColorPlain(color) {
            if (color && color.startsWith('{') && color.endsWith('}')) {
                return $dt(color).variable;
            } else {
                return color;
            }
        }
    },
    computed: {
        viewTitle() {
            const view = this.$appState.designer.activeView;

            if (view === 'dashboard') {
                return 'Theme Designer';
            } else if (view === 'create_theme') {
                return 'Create Theme';
            } else if (view === 'editor') {
                return this.$appState.designer.theme.name;
            }

            return null;
        }
    }
};
</script>
