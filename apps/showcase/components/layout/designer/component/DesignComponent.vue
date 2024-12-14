<template>
    <section class="flex flex-col gap-3">
        <div class="text-lg font-semibold capitalize">{{ componentKey }}</div>
        <template v-for="(value, name) in tokens" :key="name">
            <DesignComponentSection v-if="name !== 'colorScheme'" :componentKey="componentKey" :path="name" />
        </template>
        <Tabs v-if="hasColorScheme" value="cs-0">
            <TabList>
                <Tab value="cs-0">Light</Tab>
                <Tab value="cs-1">Dark</Tab>
            </TabList>
            <TabPanels class="!px-0">
                <TabPanel value="cs-0">
                    <div class="flex flex-col gap-3">
                        <DesignComponentSection v-for="(value, name) in lightTokens" :key="name" :componentKey="componentKey" :path="'colorScheme.light.' + name" />
                    </div>
                </TabPanel>
                <TabPanel value="cs-1">
                    <div class="flex flex-col gap-3">
                        <DesignComponentSection v-for="(value, name) in darkTokens" :key="name" :componentKey="componentKey" :path="'colorScheme.dark.' + name" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </section>
</template>

<script>
export default {
    inject: ['$preset'],
    computed: {
        componentKey() {
            return this.$route.name;
        },
        tokens() {
            return this.$preset.components[this.componentKey];
        },
        lightTokens() {
            return this.$preset.components[this.componentKey].colorScheme.light;
        },
        darkTokens() {
            return this.$preset.components[this.componentKey].colorScheme.dark;
        },
        hasColorScheme() {
            return this.tokens.colorScheme != undefined;
        }
    }
};
</script>
