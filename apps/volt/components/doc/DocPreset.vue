<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>{{ introText }}</h1>
        </div>
        <div class="xl:pe-72 mb-6 relative">
            <DocSectionCode :code="code" :class="{ 'animate-pulse': loading }" />
        </div>
    </div>
</template>

<script lang="ts">
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
            code: '',
            loading: false
        };
    },
    async mounted() {
        if (this.presetKey) {
            this.loading = true;
            const content = await import(`../../volt/${this.presetKey}.vue?raw`);
            this.loading = false;
            this.code = '\n' + content.default;
        }
    }
};
</script>
