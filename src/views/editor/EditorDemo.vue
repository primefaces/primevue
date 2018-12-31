<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Editor</h1>
                <p>Editor is rich text editor component based on Quill.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Default</h3>
            <Editor v-model="value1" editorStyle="height: 320px"/>

            <h3>Customized</h3>
            <Editor v-model="value2" editorStyle="height: 320px">
                <template slot="toolbar">
                    <span class="ql-formats">
                        <button class="ql-bold"></button>
                        <button class="ql-italic"></button>
                        <button class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>',
            value2: ''
        }
    }
}
</script>

<style>

</style>
