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
import { $dt } from '@primevue/themes';

export default {
    provide() {
        return {
            designerService: {
                refreshACTokens: this.refreshACTokens,
                saveTheme: this.saveTheme,
                downloadTheme: this.downloadTheme
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
        downloadTheme(theme) {
            // TODO: Fetch from endpoint
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
