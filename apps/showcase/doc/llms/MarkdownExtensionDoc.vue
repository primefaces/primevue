<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Add a <code>.md</code> extension to any component's documentation URL to view or retrieve a Markdown-formatted version of that page.
            This feature enables direct access to machine-readable documentation for any specific component.
        </p>
        <p class="mt-3">
            <strong>Example URLs:</strong>
        </p>
    </DocSectionText>
    <div class="card">
        <ul class="list-none p-0 m-0">
            <li class="mb-3">
                <div class="font-semibold mb-1">Button Component:</div>
                <a href="/button.md" target="_blank" class="text-primary">https://primevue.org/button.md</a>
            </li>
            <li class="mb-3">
                <div class="font-semibold mb-1">DataTable Component:</div>
                <a href="/datatable.md" target="_blank" class="text-primary">https://primevue.org/datatable.md</a>
            </li>
            <li class="mb-3">
                <div class="font-semibold mb-1">Dialog Component:</div>
                <a href="/dialog.md" target="_blank" class="text-primary">https://primevue.org/dialog.md</a>
            </li>
        </ul>
    </div>
    <DocSectionText>
        <p class="mt-4">
            Each Markdown file includes:
        </p>
        <ul>
            <li><strong>Component Overview</strong>: Description and use cases</li>
            <li><strong>Import Statement</strong>: How to import the component</li>
            <li><strong>Usage Examples</strong>: Code examples with Options API and Composition API</li>
            <li><strong>Props Table</strong>: Complete list of properties with types and defaults</li>
            <li><strong>Events/Emits</strong>: Available events and their parameters</li>
            <li><strong>Slots</strong>: Template slot definitions</li>
            <li><strong>Pass Through Options</strong>: PT configuration for unstyled mode</li>
            <li><strong>Theming</strong>: CSS classes and design tokens</li>
        </ul>
    </DocSectionText>
</template>

<script>
export default {
    name: 'MarkdownExtensionDoc'
};
</script>
