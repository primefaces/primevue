<template>
    <Drawer
        v-model:visible="$appState.designer.active"
        position="right"
        class="designer !w-screen md:!w-[48rem]"
        :modal="false"
        :dismissable="false"
        @after-show="onShow"
        @after-hide="onHide"
        :pt="{
            header: 'p-5',
            content: '!p-5',
            footer: '!p-5'
        }"
    >
        <template #header>
            <div class="flex items-center gap-2">
                <Button v-if="$appState.designer.activeView !== 'dashboard'" variant="text" severity="secondary" rounded type="button" icon="pi pi-chevron-left" @click="openDashboard" />
                <span class="font-bold text-xl">{{ viewTitle }}</span>
            </div>
        </template>

        <DesignDashboard v-if="$appState.designer.activeView === 'dashboard'" />
        <DesignCreateTheme v-else-if="$appState.designer.activeView === 'create_theme'" />
        <DesignEditor v-else-if="$appState.designer.activeView === 'editor'" :deferred="deferredTabs" />

        <template #footer>
            <DesignEditorFooter v-if="$appState.designer.activeView === 'editor'" />
        </template>
    </Drawer>
</template>

<script>
import EventBus from '@/app/AppEventBus';
import { $dt, updatePreset } from '@primevue/themes';

export default {
    setup() {
        const runtimeConfig = useRuntimeConfig();

        return {
            designerApiBase: runtimeConfig.public.designerApiBase
        };
    },
    provide() {
        return {
            designerService: {
                refreshACTokens: this.refreshACTokens,
                saveTheme: this.saveTheme,
                downloadTheme: this.downloadTheme,
                applyTheme: this.applyTheme
            }
        };
    },
    data() {
        return {
            deferredTabs: true
        };
    },
    methods: {
        onShow() {
            this.deferredTabs = false;
        },
        onHide() {
            this.deferredTabs = true;
        },
        async downloadTheme(theme) {
            if (!this.$appState.designer.licenseKey) {
                this.$toast.add({ severity: 'error', summary: 'Not Available', detail: 'A license is required to download', life: 3000 });
            } else {
                try {
                    const response = await $fetch(this.designerApiBase + '/theme/download/' + this.$appState.designer.licenseKey + '/' + theme.t_key, {
                        responseType: 'blob'
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
        async updateTheme(theme) {
            const { error } = await $fetch(this.designerApiBase + '/theme/update', {
                method: 'POST',
                body: {
                    key: theme.key,
                    preset: theme.preset,
                    config: theme.config,
                    license_key: this.$appState.designer.licenseKey
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
            }
        },
        applyTheme(theme) {
            if (this.$appState.designer.licenseKey) {
                this.updateTheme(theme);
            }

            updatePreset(theme.preset);
            EventBus.emit('theme-palette-change');
        },
        camelCaseToDotCase(name) {
            return name.replace(/([a-z])([A-Z])/g, '$1.$2').toLowerCase();
        },
        generateACTokens(parentPath, obj) {
            for (let key in obj) {
                if (key === 'dark' || key === 'components') {
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
                        const tokenValue = $dt(tokenName).value;
                        const isColor = tokenName.includes('color') || tokenName.includes('background') || regex.test(tokenName);

                        this.$appState.designer.theme.acTokens.push({ token: tokenName, label: '{' + tokenName + '}', variable: $dt(tokenName).variable, value: tokenValue, isColor: isColor });
                    }
                }
            }
        },
        refreshACTokens() {
            this.$appState.designer.theme.acTokens = [];
            this.generateACTokens(null, this.$appState.designer.theme.preset);
        },
        openDashboard() {
            this.$appState.designer.activeView = 'dashboard';
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
