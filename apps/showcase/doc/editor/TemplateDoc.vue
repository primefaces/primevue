<template>
    <DocSectionText v-bind="$attrs">
        <p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href="http://quilljs.com/docs/modules/toolbar/">Quill documentation</a> for available controls.</p>
    </DocSectionText>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
            </template>
        </Editor>
    </div>
    <DocSectionCode :code="code" :dependencies="{ quill: '1.3.7' }" component="Editor" />
</template>

<script>
export default {
    data() {
        return {
            value: '<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>',
            code: {
                basic: `
<Editor v-model="value" editorStyle="height: 320px">
    <template v-slot:toolbar>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
        </span>
    </template>
</Editor>
`,
                options: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>'
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>');
<\/script>
`
            }
        };
    }
};
</script>
