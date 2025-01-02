<template>
    <Tabs v-model:value="$appState.designer.activeTab" :lazy="deferred" :dt="tabsTokens">
        <TabList>
            <Tab value="0">Primitive</Tab>
            <Tab value="1">Semantic</Tab>
            <Tab value="2" :disabled="!isComponentRoute">Component</Tab>
            <Tab value="3">Custom</Tab>
            <Tab value="4" class="ml-auto">Settings</Tab>
        </TabList>
        <TabPanels class="!px-0">
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
        },
        tabsTokens() {
            return {
                root: {
                    transitionDuration: '0.2s'
                },
                tablist: {
                    borderWidth: '0 0 1px 0',
                    background: '{content.background}',
                    borderColor: '{content.border.color}'
                },
                tab: {
                    background: 'transparent',
                    hoverBackground: 'transparent',
                    activeBackground: 'transparent',
                    borderWidth: '0 0 1px 0',
                    padding: '1rem 1.125rem',
                    fontWeight: '600',
                    margin: '0 0 -1px 0',
                    gap: '0.5rem',
                    focusRing: {
                        width: '{focus.ring.width}',
                        style: '{focus.ring.style}',
                        color: '{focus.ring.color}',
                        offset: '-1px',
                        shadow: '{focus.ring.shadow}'
                    }
                },
                tabpanel: {
                    background: 'transparent',
                    color: 'inherit',
                    padding: '0.875rem 1.125rem 1.125rem 1.125rem',
                    focusRing: {
                        width: '{focus.ring.width}',
                        style: '{focus.ring.style}',
                        color: '{focus.ring.color}',
                        offset: '{focus.ring.offset}',
                        shadow: 'inset {focus.ring.shadow}'
                    }
                },
                navButton: {
                    background: '{content.background}',
                    color: '{text.muted.color}',
                    hoverColor: '{text.color}',
                    width: '2.5rem',
                    focusRing: {
                        width: '{focus.ring.width}',
                        style: '{focus.ring.style}',
                        color: '{focus.ring.color}',
                        offset: '-1px',
                        shadow: '{focus.ring.shadow}'
                    }
                },
                activeBar: {
                    height: '1px',
                    bottom: '-1px'
                },
                colorScheme: {
                    light: {
                        tablist: {
                            borderColor: '{surface.200}'
                        },
                        tab: {
                            borderColor: '{surface.200}',
                            hoverBorderColor: '{surface.200}',
                            activeBorderColor: '#09090b',
                            color: '#71717a',
                            hoverColor: '#09090b',
                            activeColor: '#09090b'
                        },
                        activeBar: {
                            background: '#09090b'
                        }
                    },
                    dark: {
                        tablist: {
                            borderColor: '{surface.700}'
                        },
                        tab: {
                            borderColor: '{surface.700}',
                            hoverBorderColor: '{surface.700}',
                            activeBorderColor: '#ffffff',
                            color: '#a1a1aa',
                            hoverColor: '#ffffff',
                            activeColor: '#ffffff'
                        },
                        activeBar: {
                            background: '#ffffff'
                        }
                    }
                }
            };
        }
    }
};
</script>
