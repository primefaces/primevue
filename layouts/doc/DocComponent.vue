<template>
    <div :class="['doc-component', className]">
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
        </Head>

        <ul class="doc-tabmenu">
            <li :class="{ 'doc-tabmenu-active': tab === 0 }">
                <button type="button" @click="tab = 0">COMPONENT</button>
            </li>
            <li v-if="apiDocs && apiDocs.length > 0" :class="{ 'doc-tabmenu-active': tab === 1 }">
                <button type="button" @click="tab = 1">API</button>
            </li>
        </ul>

        <div class="doc-tabpanels">
            <template v-if="tab === 0">
                <div class="doc-tabpanel">
                    <div class="doc-main">
                        <div class="doc-intro">
                            <h1>{{ header }}</h1>
                            <p>{{ description }}</p>
                        </div>
                        <DocSections :docs="componentDocs" />
                    </div>
                    <DocSectionNav :docs="componentDocs" />
                </div>
            </template>

            <template v-else-if="tab === 1">
                <div class="doc-tabpanel">
                    <DocApiSection :doc="apiDocs" :header="header" />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'header', 'description', 'componentDocs', 'apiDocs', 'className'],
    data() {
        return {
            tab: 0
        };
    },
    mounted() {
        this.tab = this.$route.hash.includes('api') ? 1 : 0;
    }
};
</script>
