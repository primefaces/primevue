<template>
    <DocSectionText v-bind="$attrs">
        <h3>Component Information</h3>
        <p>Tools for exploring and understanding PrimeVue components.</p>
        <ul class="leading-loose list-disc ml-6">
            <li><i>list_components</i> : List all PrimeVue components with categories</li>
            <li><i>get_component</i> : Get detailed info about a specific component</li>
            <li><i>search_components</i> : Search components by name or description</li>
            <li><i>get_component_props</i> : Get all props for a component</li>
            <li><i>get_component_events</i> : Get all events for a component</li>
            <li><i>get_component_methods</i> : Get all methods for a component</li>
            <li><i>get_component_slots</i> : Get all slots for a component</li>
            <li><i>compare_components</i> : Compare two components side by side</li>
        </ul>

        <h3>Code Examples</h3>
        <p>Tools for retrieving code samples and generating templates.</p>
        <ul class="leading-loose list-disc ml-6">
            <li><i>get_usage_example</i> : Get code examples for a component</li>
            <li><i>list_examples</i> : List all available code examples</li>
            <li><i>get_example</i> : Get a specific example by component and section</li>
            <li><i>generate_component_template</i> : Generate a basic component template</li>
        </ul>

        <h3>Theming & Styling</h3>
        <p>Tools for customizing component appearance and styling.</p>
        <ul class="leading-loose list-disc ml-6">
            <li><i>get_component_pt</i> : Get Pass Through options for DOM customization</li>
            <li><i>get_component_tokens</i> : Get design tokens (CSS variables)</li>
            <li><i>get_component_styles</i> : Get CSS class names</li>
            <li><i>get_theming_guide</i> : Get detailed theming guide</li>
            <li><i>get_passthrough_guide</i> : Get Pass Through customization guide</li>
            <li><i>get_tailwind_guide</i> : Get Tailwind CSS integration guide</li>
        </ul>

        <h3>Documentation & Guides</h3>
        <p>Tools for accessing PrimeVue documentation and guides.</p>
        <ul class="leading-loose list-disc ml-6">
            <li><i>list_guides</i> : List all guides and documentation pages</li>
            <li><i>get_guide</i> : Get a specific guide by name</li>
            <li><i>get_configuration</i> : Get PrimeVue configuration options</li>
            <li><i>get_installation</i> : Get installation instructions</li>
            <li><i>get_accessibility_guide</i> : Get accessibility guide</li>
            <li><i>get_accessibility_info</i> : Get accessibility info for a component</li>
        </ul>

        <h3>Search & Discovery</h3>
        <p>Tools for finding components based on various criteria.</p>
        <ul class="leading-loose list-disc ml-6">
            <li><i>search_all</i> : Search across components, guides, and props</li>
            <li><i>suggest_component</i> : Suggest components based on use case</li>
            <li><i>find_by_prop</i> : Find components with a specific prop</li>
            <li><i>find_by_event</i> : Find components that emit a specific event</li>
            <li><i>find_components_with_feature</i> : Find components supporting a feature</li>
            <li><i>get_related_components</i> : Find related components</li>
        </ul>
    </DocSectionText>
</template>

<script>
export default {
    name: 'ToolsDoc'
};
</script>
