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
            <div v-if="$appState.designer.active.view === 'editor'" class="flex justify-between gap-2">
                <button
                    type="button"
                    @click="download"
                    icon="pi pi-download"
                    class="px-3 py-2 bg-transparent border border-gray-200 dark:border-gray-700 hover:border-gray-800 dark:hover:border-gray-500 text-black dark:text-white rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
                >
                    Download
                </button>
                <button
                    type="button"
                    @click="apply"
                    icon="pi pi-download"
                    class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
                >
                    Apply
                </button>
            </div>
        </template>
    </Drawer>
</template>

<script>
import { $dt } from '@primevue/themes';

export default {
    provide() {
        return {
            designerUtils: {
                refreshACTokens: this.refreshACTokens,
                saveTheme: this.saveTheme
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
        download() {
            // TODO: Fetch from endpoint
        },
        apply() {
            saveTheme();
            updatePreset(this.$appState.designer.theme.preset);
            EventBus.emit('theme-palette-change');
        },
        saveTheme() {
            // TODO: Save to DB or Local Storage
            console.log('theme saved');
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
            console.log('refresh tokens');
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
