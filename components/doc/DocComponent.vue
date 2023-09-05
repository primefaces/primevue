<template>
    <div :class="['doc-component', className]">
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
        </Head>

        <ul class="doc-tabmenu">
            <li :class="{ 'doc-tabmenu-active': tab === 0 }">
                <button type="button" @click="tab = 0">FEATURES</button>
            </li>
            <li :class="{ 'doc-tabmenu-active': tab === 1 }">
                <button type="button" @click="tab = 1">API</button>
            </li>
            <li v-if="themingDocs" :class="{ 'doc-tabmenu-active': tab === 2 }">
                <button type="button" @click="tab = 2">THEMING</button>
            </li>
            <li v-if="ptTabComponent" :class="{ 'doc-tabmenu-active': tab === 3 }">
                <button type="button" @click="tab = 3">PASS THROUGH</button>
            </li>
        </ul>

        <div class="doc-tabpanels">
            <div v-show="tab === 0" class="doc-tabpanel">
                <div class="doc-main">
                    <div class="doc-intro">
                        <h1>{{ header }}</h1>
                        <p>{{ description }}</p>
                    </div>
                    <DocSections :docs="componentDocs" />
                </div>
                <DocSectionNav :docs="componentDocs" />
            </div>

            <div v-show="tab === 1" class="doc-tabpanel">
                <DocApiSection :doc="apiDocs" :header="header" />
            </div>

            <div v-if="tab === 2" class="doc-tabpanel">
                <component :is="{ ...themingDocs }" />
            </div>

            <div v-if="tab === 3" class="doc-tabpanel">
                <component :is="{ ...ptTabComponent }" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'header', 'description', 'componentDocs', 'apiDocs', 'className', 'ptTabComponent', 'themingDocs'],
    data() {
        return {
            tab: 0
        };
    },
    mounted() {
        this.tab = this.$route.hash.includes('api') ? 1 : this.$route.hash.includes('theming') ? 2 : this.$route.hash.includes('pt') ? 3 : 0;
    }
};
</script>
