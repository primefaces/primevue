<template>
    <div class="relative doc-section-code">
        <div class="flex surface-card align-items-center justify-content-end absolute z-2" :style="{ right: '.75rem', top: '.75rem', gap: '.75rem' }">
            <template v-if="codeMode !== 'basic' && !hideToggleCode">
                <Button
                    :class="['p-button-rounded p-button-text p-button-plain p-0 inline-flex align-items-center justify-content-center', { 'doc-section-code-active text-primary': codeLang === 'typescript' }]"
                    label="Composition API"
                    @click="codeLang = 'composition'"
                ></Button>
                <Button
                    :class="['p-button-rounded p-button-text p-button-plain p-0 inline-flex align-items-center justify-content-center', { 'doc-section-code-active text-primary': codeLang === 'javascript' }]"
                    label="Options API"
                    @click="codeLang = 'options'"
                ></Button>
            </template>

            <template v-if="!hideToggleCode">
                <Button
                    v-tooltip.bottom="{ value: 'Toggle Full Code', class: 'doc-section-code-tooltip' }"
                    type="button"
                    @click="toggleCodeMode('composition')"
                    class="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                    icon="pi pi-code"
                ></Button>
            </template>

            <template v-if="!hideToggleCode && code.data">
                <Button
                    v-tooltip.bottom="{ value: 'View Code', class: 'doc-section-code-tooltip' }"
                    type="button"
                    @click="onToggleData"
                    class="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                    icon="pi pi-database"
                >
                </Button>
            </template>

            <template v-if="!hideCodeSandbox">
                <Button
                    v-tooltip.bottom="{ value: 'Edit in CodeSandbox', class: 'doc-section-code-tooltip' }"
                    type="button"
                    class="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                    @click="showCodesandbox"
                >
                    <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="var(--text-color-secondary)" style="display: 'block'">
                        <path
                            d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"
                        />
                    </svg>
                </Button>
            </template>

            <template v-if="!hideStackBlitz">
                <Button
                    v-tooltip.bottom="{ value: 'Edit in StackBlitz', class: 'doc-section-code-tooltip' }"
                    type="button"
                    class="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                    @click="showStackblitz"
                >
                    <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="var(--text-color-secondary)" style="display: 'block'">
                        <path d="M0 15.98H8.15844L3.40299 27.26L19 11.1945H10.7979L15.5098 0L0 15.98Z" />
                    </svg>
                </Button>
            </template>

            <Button
                v-tooltip.bottom="{ value: 'Copy Code', class: 'doc-section-code-tooltip' }"
                type="button"
                @click="copyCode"
                class="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                icon="pi pi-copy"
            ></Button>
        </div>

        <template v-if="codeMode === 'basic' && importCode">
            <pre v-code.script><code>
{{ code.basic }}

</code></pre>
        </template>

        <template v-if="codeMode === 'basic' && !importCode">
            <pre v-code><code>
{{ code.basic }}

</code></pre>
        </template>

        <template v-if="codeMode !== 'basic' && codeLang === 'options'">
            <pre v-code><code>
{{ code.options }}

</code></pre>
        </template>

        <template v-if="codeMode !== 'basic' && codeLang === 'composition'">
            <pre v-code><code>
{{ code.composition }}

</code></pre>
        </template>

        <template v-if="codeMode !== 'basic' && codeLang === 'data'">
            <pre v-code.json><code>
{{ code.data }}

</code></pre>
        </template>
    </div>
</template>

<script>
import { useCodeSandbox, useStackBlitz } from './codeeditor';

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
            default: false
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
        }
    },
    data() {
        return {
            codeMode: 'basic',
            codeLang: this.code['options'] ? 'composition' : 'basic'
        };
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
        showCodesandbox() {
            useCodeSandbox(this.codeLang, this.code[this.codeLang === 'data' ? 'options' : this.codeLang], this.service, this.code.pages, this.dependencies, this.component, this.extFiles);
        },
        showStackblitz() {
            useStackBlitz(this.codeLang, this.code[this.codeLang === 'data' ? 'options' : this.codeLang], this.service, this.code.pages, this.dependencies, this.component, this.extFiles);
        }
    }
};
</script>
