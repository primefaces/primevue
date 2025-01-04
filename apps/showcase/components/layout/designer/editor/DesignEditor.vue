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
                <Accordion :value="['0', '1']" multiple>
                    <AccordionPanel value="0">
                        <AccordionHeader>Common</AccordionHeader>
                        <AccordionContent>
                            <div>
                                <form @keydown="onKeyDown" class="flex flex-col gap-3">
                                    <DesignGeneral />
                                    <DesignFormField />
                                    <DesignList />
                                    <DesignNavigation />
                                    <DesignOverlay />
                                </form>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>

                    <AccordionPanel value="1">
                        <AccordionHeader>Color Scheme</AccordionHeader>
                        <AccordionContent>
                            <Tabs value="cs-0">
                                <TabList>
                                    <Tab value="cs-0">Light</Tab>
                                    <Tab value="cs-1">Dark</Tab>
                                </TabList>
                                <TabPanels class="!px-0">
                                    <TabPanel value="cs-0">
                                        <form @keydown="onKeyDown">
                                            <DesignCS :value="$appState.designer.theme.preset.semantic.colorScheme.light" />
                                        </form>
                                    </TabPanel>
                                    <TabPanel value="cs-1">
                                        <form @keydown="onKeyDown">
                                            <DesignCS :value="$appState.designer.theme.preset.semantic.colorScheme.dark" />
                                        </form>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </TabPanel>
            <TabPanel value="2">
                <form @keydown="onKeyDown">
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
            const components = this.$appState.designer.theme.preset.components;
            const directives = this.$appState.designer.theme.preset.directives;

            return components[this.$route.name] != null || directives[this.$route.name];
        }
    }
};
</script>
