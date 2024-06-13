<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support for
            <a href="https://github.com/quilljs/quill/issues/1031">dropdowns</a> in the toolbar that may be overcome with a custom toolbar.
        </p>
    </DocSectionText>
</template>
