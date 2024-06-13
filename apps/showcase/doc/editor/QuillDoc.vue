<template>
    <DocSectionText v-bind="$attrs">
        <p>Editor uses <a href="https://quilljs.com/">Quill</a> editor underneath so it needs to be installed as a dependency.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
npm install quill
`
            }
        };
    }
};
</script>
