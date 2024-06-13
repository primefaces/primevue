<template>
    <div v-if="!embedded" class="doc-section-code">
        <div class="doc-section-code-buttons animate-scalein animate-duration-300">
            <template v-if="codeMode !== 'basic' && !hideToggleCode">
                <button :class="['py-0 px-2 rounded h-2rem', { 'code-active': codeLang === 'composition' }]" @click="codeLang = 'composition'">Composition API</button>
                <button :class="['py-0 px-2 rounded h-2rem', { 'code-active': codeLang === 'options' }]" @click="codeLang = 'options'">Options API</button>
            </template>

            <template v-if="!hideToggleCode">
                <button v-tooltip.bottom="{ value: 'Toggle Full Code', class: 'doc-section-code-tooltip' }" type="button" @click="toggleCodeMode('composition')" class="h-8 w-8 p-0 inline-flex items-center justify-center">
                    <i class="pi pi-code"></i>
                </button>
            </template>

            <template v-if="!hideToggleCode && code.data">
                <button v-tooltip.bottom="{ value: 'View Data', class: 'doc-section-code-tooltip' }" type="button" @click="onToggleData" class="h-8 w-8 p-0 inline-flex items-center justify-center">
                    <i class="pi pi-database"></i>
                </button>
            </template>

            <template v-if="!hideStackBlitz">
                <button v-tooltip.bottom="{ value: 'Edit in StackBlitz', class: 'doc-section-code-tooltip' }" type="button" class="h-8 w-8 p-0 inline-flex items-center justify-center" @click="showStackblitz">
                    <svg role="img" width="13" height="18" viewBox="0 0 13 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="display: 'block'">
                        <path d="M0 10.6533H5.43896L2.26866 18.1733L12.6667 7.463H7.1986L10.3399 0L0 10.6533Z" />
                    </svg>
                </button>
            </template>

            <button v-tooltip.bottom="{ value: 'Copy Code', class: 'doc-section-code-tooltip' }" type="button" @click="copyCode" class="h-8 w-8 p-0 inline-flex items-center justify-center">
                <i class="pi pi-copy"></i>
            </button>
        </div>

        <div>
            <template v-if="codeMode === 'basic' && importCode">
                <pre v-code.script><code>{{ code.basic }}
</code></pre>
            </template>

            <template v-if="codeMode === 'basic' && !importCode">
                <pre v-code><code>{{ code.basic }}
</code></pre>
            </template>

            <template v-if="codeMode !== 'basic' && codeLang === 'options'">
                <pre v-code><code>{{ code.options }}
</code></pre>
            </template>

            <template v-if="codeMode !== 'basic' && codeLang === 'composition'">
                <pre v-code><code>{{ code.composition }}
</code></pre>
            </template>

            <template v-if="codeMode !== 'basic' && codeLang === 'data'">
                <pre v-code.json><code>{{ code.data }}
</code></pre>
            </template>
        </div>
    </div>
    <div v-else id="embed"></div>
</template>

<script>
import { useStackBlitz } from './codeeditor';

export default {
    inheritAttrs: false,
    props: {
        code: {
            type: null,
            default: null
        },
        service: {
            type: Array,
            default: null
        },
        hideToggleCode: {
            type: Boolean,
            default: false
        },
        hideCodeSandbox: {
            type: Boolean,
            default: true
        },
        hideStackBlitz: {
            type: Boolean,
            default: false
        },
        dependencies: {
            type: null,
            default: null
        },
        component: {
            type: String,
            default: null
        },
        extFiles: {
            type: null,
            default: null
        },
        importCode: {
            type: Boolean,
            default: false
        },
        embedded: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            codeMode: 'basic',
            codeLang: this.code['options'] ? 'composition' : 'basic'
        };
    },
    mounted() {
        this.embedded && useStackBlitz(this.codeLang, this.code['composition'], this.service, this.code.pages, this.dependencies, this.component, this.extFiles, this.embedded);
    },
    methods: {
        toggleCodeMode(content) {
            this.codeMode = this.codeMode === 'basic' ? content : 'basic';
        },
        onToggleData() {
            this.toggleCodeMode('data');
            this.codeLang = 'data';
        },
        async copyCode() {
            await navigator.clipboard.writeText(this.code[this.codeLang]);
        },
        showStackblitz() {
            useStackBlitz(this.codeLang, this.code[this.codeLang === 'data' ? 'options' : this.codeLang], this.service, this.code.pages, this.dependencies, this.component, this.extFiles);
        }
    }
};
</script>
