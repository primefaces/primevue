<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Editor</h1>
                <p>Editor is rich text editor component based on Quill.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Default</h5>
                <Editor v-model="value1" editorStyle="height: 320px"/>

                <h5>Customized</h5>
                <Editor v-model="value2" editorStyle="height: 320px">
                    <template #toolbar>
                        <span class="ql-formats">
                            <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
                            <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
                            <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
                        </span>
                    </template>
                </Editor>
            </div>
        </div>

        <EditorDoc />
    </div>
</template>

<script>
import EditorDoc from './EditorDoc';

export default {
    data() {
        return {
            value1: '<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>',
            value2: ''
        }
    },
    components: {
        'EditorDoc': EditorDoc
    }
}
</script>
