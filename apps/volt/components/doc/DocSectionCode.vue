<template>
    <div class="doc-section-code">
        <div class="doc-section-code-buttons">
            <button v-tooltip.bottom="{ value: 'Copy Code', class: 'doc-section-code-tooltip' }" type="button" @click="copyCode" class="h-8 w-8 p-0 inline-flex items-center justify-center">
                <i class="pi pi-copy"></i>
            </button>
        </div>

        <div dir="ltr">
            <template v-if="!lang">
                <pre v-code><code>{{ code }}
</code></pre>
            </template>

            <template v-else-if="lang === 'script'">
                <pre v-code.script><code>
{{ code }}
</code></pre>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        code: {
            type: null,
            default: null
        },
        lang: {
            type: String,
            default: null
        }
    },
    methods: {
        async copyCode() {
            await navigator.clipboard.writeText(this.code[this.codeLang]);
        }
    }
};
</script>
