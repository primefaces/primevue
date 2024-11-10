<template>
    <Drawer v-model:visible="$appState.designerActive" header="Theme Designer" position="right" class="!w-screen md:!w-[60rem]" :modal="false">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Primitive</Tab>
                <Tab value="1">Semantic</Tab>
                <Tab value="2">Component</Tab>
            </TabList>
            <TabPanels class="!px-0">
                <TabPanel value="0">
                    <div class="flex flex-col gap-3">
                        <DesignBorderRadius />
                        <DesignColors />
                    </div>
                </TabPanel>
                <TabPanel value="1">
                    <Accordion :value="['0', '1']" multiple>
                        <AccordionPanel value="0">
                            <AccordionHeader>Common</AccordionHeader>
                            <AccordionContent>
                                <div class="flex flex-col gap-3">
                                    <DesignGeneral />
                                    <DesignFormField />
                                    <DesignList />
                                    <DesignNavigation />
                                    <DesignOverlay />
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
                                            <DesignCS :value="preset.semantic.colorScheme.light" />
                                        </TabPanel>
                                        <TabPanel value="cs-1">
                                            <DesignCS :value="preset.semantic.colorScheme.dark" />
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </TabPanel>
                <TabPanel value="2"> Component tokens are not supported by the Visual Editor at the moment. </TabPanel>
            </TabPanels>
        </Tabs>

        <template #footer>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Download" variant="outlined" />
                <Button type="button" @click="apply" label="Apply" />
            </div>
        </template>
    </Drawer>
</template>

<script>
import { updatePreset } from '@primevue/themes';
import AuraBase from '@primevue/themes/nora/base';

export default {
    provide() {
        return {
            $preset: this.preset
        };
    },
    data() {
        return {
            preset: AuraBase
        };
    },
    mounted() {
        this.preset.semantic.primary = this.preset.primitive.emerald;
        this.preset.semantic.colorScheme.light.surface = this.preset.primitive.slate;
        this.preset.semantic.colorScheme.dark.surface = this.preset.primitive.zinc;
    },
    methods: {
        apply() {
            updatePreset(this.preset);
        }
    }
};
</script>
