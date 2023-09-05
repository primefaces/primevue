<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Unstyled mode consists of two solutions. First part is removal of the component specific style classes from the DOM, when <i>unstyled</i> setting is enabled components do not include any CSS selectors while core functionality is still
            available. For example, in the default styled mode, the dropdown component adds <i>.p-dropdown</i> style class to the root element and includes CSS to corresponding style. In unstyled setting, this style class is not added to the root
            element and the CSS is not included in the page.
        </p>
        <p>
            The second part is custom styling as components are displayed as transparent without their styles. <NuxtLink to="/passthrough">Pass Through Props</NuxtLink> feature is the key of since it also supports a global configuration to create
            themes in unstyled mode. In fact, the upcoming Tailwind theme is basically a custom <i>pt</i> configuration.
        </p>
    </DocSectionText>
</template>
