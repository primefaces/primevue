<template>
    <Tabs v-model:value="$appState.designer.activeTab" :lazy="deferred">
        <TabList>
            <Tab value="0">Primitive</Tab>
            <Tab value="1">Semantic</Tab>
            <Tab value="2" :disabled="!isComponentRoute">Component</Tab>
            <Tab value="3">Custom</Tab>
            <Tab value="4" class="!ml-auto">Settings</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <div>
                    <form @keydown="onKeyDown" class="flex flex-col gap-3">
                        <DesignBorderRadius />
                        <DesignColors />
                    </form>
                </div>
            </TabPanel>
            <TabPanel value="1">
                <DesignSemantic />
            </TabPanel>
            <TabPanel value="2">
                <form v-if="isComponentRoute" @keydown="onKeyDown">
                    <DesignComponent />
                </form>
            </TabPanel>
            <TabPanel value="3">
                <DesignCustomTokens />
            </TabPanel>
            <TabPanel value="4">
                <DesignSettings />
            </TabPanel>
        </TabPanels>
    </Tabs>
</template>

<script>
export default {
    props: {
        deferred: {
            type: Boolean,
            default: true
        }
    },
    inject: ['designerService'],
    watch: {
        $route: {
            handler() {
                if (!this.isComponentRoute && this.$appState.designer.activeTab === '2') {
                    this.$appState.designer.activeTab = '0';
                }
            }
        }
    },
    methods: {
        onKeyDown(event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                this.designerService.applyTheme(this.$appState.designer.theme);
                event.preventDefault();
            }
        }
    },
    computed: {
        isComponentRoute() {
            return this.$appState.designer.theme.preset?.components[this.$route.name] != null;
        }
    }
};
</script>
