<template>
    <section>
        <Accordion :value="['0', '1']" multiple>
            <AccordionPanel value="0">
                <AccordionHeader>Common</AccordionHeader>
                <AccordionContent>
                    <div>
                        <form @keydown="onKeyDown" class="flex flex-col gap-3">
                            <Fieldset v-if="hasCommonPrimitives" legend="General" :toggleable="true">
                                <div class="grid grid-cols-4 gap-x-2 gap-y-3">
                                    <template v-for="(value, name) in commonPrimitives" :key="name">
                                        <DesignTokenField v-model="tokens[name]" :label="camelCaseToSpaces(name)" :type="isColor(name) ? 'color' : null" />
                                    </template>
                                </div>
                            </Fieldset>
                            <Fieldset v-for="(value, name) in commonObjects" :key="name" :legend="capitalize(camelCaseToSpaces(name))" :toggleable="true">
                                <DesignSemanticSection :path="name" root />
                            </Fieldset>
                        </form>
                    </div>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel value="1">
                <AccordionHeader>Color Scheme</AccordionHeader>
                <AccordionContent>
                    <Tabs :value="activeColorScheme" @update:value="onColorSchemeChange">
                        <TabList>
                            <Tab value="cs-0">Light</Tab>
                            <Tab value="cs-1">Dark</Tab>
                        </TabList>
                        <TabPanels class="!px-0">
                            <TabPanel value="cs-0">
                                <form @keydown="onKeyDown" class="flex flex-col gap-3">
                                    <Fieldset v-if="hasLightPrimitives" legend="General" :toggleable="true">
                                        <div class="grid grid-cols-4 gap-x-2 gap-y-3">
                                            <template v-for="(value, name) in lightPrimitives" :key="name">
                                                <DesignTokenField v-model="lightTokens[name]" :label="camelCaseToSpaces(name)" :type="isColor(name) ? 'color' : null" />
                                            </template>
                                        </div>
                                    </Fieldset>
                                    <Fieldset v-for="(value, name) in lightObjects" :key="name" :legend="capitalize(camelCaseToSpaces(name))" :toggleable="true">
                                        <DesignSemanticSection :path="'colorScheme.light.' + name" root switchable />
                                    </Fieldset>
                                </form>
                            </TabPanel>
                            <TabPanel value="cs-1">
                                <form @keydown="onKeyDown" class="flex flex-col gap-3">
                                    <Fieldset v-if="hasDarkPrimitives" legend="General" :toggleable="true">
                                        <div class="grid grid-cols-4 gap-x-2 gap-y-3">
                                            <template v-for="(value, name) in darkPrimitives" :key="name">
                                                <DesignTokenField v-model="darkTokens[name]" :label="camelCaseToSpaces(name)" :type="isColor(name) ? 'color' : null" />
                                            </template>
                                        </div>
                                    </Fieldset>
                                    <Fieldset v-for="(value, name) in darkObjects" :key="name" :legend="capitalize(camelCaseToSpaces(name))" :toggleable="true">
                                        <DesignSemanticSection :path="'colorScheme.dark.' + name" root switchable />
                                    </Fieldset>
                                </form>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </section>
</template>

<script>
import EventBus from '@/app/AppEventBus';

export default {
    inject: ['designerService'],
    methods: {
        onKeyDown(event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                this.designerService.applyTheme(this.$appState.designer.theme);
                event.preventDefault();
            }
        },
        onColorSchemeChange(value) {
            if (value === 'cs-0') EventBus.emit('dark-mode-toggle', { dark: false });
            else if (value === 'cs-1') EventBus.emit('dark-mode-toggle', { dark: true });
        },
        camelCaseToSpaces(val) {
            return val.replace(/([a-z])([A-Z])/g, '$1 $2');
        },
        capitalize(str) {
            if (typeof str !== 'string' || str.length === 0) {
                return str;
            }

            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        isObject(val) {
            return val !== null && typeof val === 'object';
        },
        isColor(val) {
            return val.toLowerCase().includes('color') || val.toLowerCase().includes('background');
        },
        getPrimitives(obj) {
            const primitives = {};

            for (const key in obj) {
                if (obj.hasOwnProperty(key) && !this.isObject(obj[key])) {
                    primitives[key] = obj[key];
                }
            }

            return primitives;
        },
        getObjects(obj) {
            const objects = {};

            for (const key in obj) {
                if (obj.hasOwnProperty(key) && this.isObject(obj[key])) {
                    objects[key] = obj[key];
                }
            }

            return objects;
        }
    },
    computed: {
        tokens() {
            return this.$appState.designer.theme.preset.semantic;
        },
        commonTokens() {
            const result = {};

            for (const key in this.tokens) {
                if (this.tokens.hasOwnProperty(key) && key !== 'colorScheme') {
                    result[key] = this.tokens[key];
                }
            }

            return result;
        },
        commonPrimitives() {
            return this.getPrimitives(this.commonTokens);
        },
        hasCommonPrimitives() {
            return Object.keys(this.commonPrimitives).length > 0;
        },
        commonObjects() {
            return this.getObjects(this.commonTokens);
        },
        lightTokens() {
            return this.tokens.colorScheme?.light;
        },
        lightPrimitives() {
            return this.getPrimitives(this.lightTokens || {});
        },
        hasLightPrimitives() {
            return Object.keys(this.lightPrimitives).length > 0;
        },
        lightObjects() {
            return this.getObjects(this.lightTokens || {});
        },
        darkTokens() {
            return this.tokens.colorScheme?.dark;
        },
        darkPrimitives() {
            return this.getPrimitives(this.darkTokens || {});
        },
        hasDarkPrimitives() {
            return Object.keys(this.darkPrimitives).length > 0;
        },
        darkObjects() {
            return this.getObjects(this.darkTokens || {});
        },
        activeColorScheme() {
            return this.$appState.darkTheme ? 'cs-1' : 'cs-0';
        }
    }
};
</script>
