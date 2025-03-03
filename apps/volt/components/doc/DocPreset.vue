<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>{{ introText }}</h1>
        </div>
        <div class="xl:pe-72 -mt-4">
            <DocSectionCode :code="code" lang="script" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        presetKey: {
            type: String,
            default: null
        },
        introText: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            code: ''
        };
    },
    async mounted() {
        if (this.presetKey) {
            const content = await import(`../../volt/${this.presetKey}/index.vue?raw`);

            this.code = content.default;
        }
    }
};
</script>
