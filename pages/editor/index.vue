<template>
    <div>
        <Head>
            <Title>Vue Editor Component</Title>
            <Meta name="description" content="Editor is rich text editor component based on Quill." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Editor</h1>
                <p>Editor is rich text editor component based on Quill.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Default</h5>
                <Editor v-model="value1" editorStyle="height: 320px" />

                <h5>Customized</h5>
                <Editor v-model="value2" editorStyle="height: 320px">
                    <template v-slot:toolbar>
                        <span class="ql-formats">
                            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
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
        };
    },
    components: {
        EditorDoc: EditorDoc
    }
};
</script>
