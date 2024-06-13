<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue is a design agnostic library so unlike some other UI libraries it does not enforce a certain styling such as material design. Styling is decoupled from the components using the themes instead. A theme consists of two parts;
            <i>base</i> and <i>preset</i>. The base is the style rules with CSS variables as placeholders whereas the preset is a set of design tokens to feed a base by mapping the tokens to CSS variables. A base may be configured with different
            presets, currently Aura is the only preset and in upcoming version more presets will be available.
        </p>
        <img alt="Architecture" src="https://primefaces.org/cdn/primevue/images/primevue-v4-styled-architecture.png" class="w-full mb-4" />
        <p>The core of the styled mode architecture is based on a concept named <i>design token</i>, a preset defines the token configuration in 3 tiers; <i>primitive</i>, <i>semantic</i> and <i>component</i>.</p>
        <h3>Primitive Tokens</h3>
        <p>
            Primitive tokens have no context, a color palette is a good example for a primitive token such as <i>blue-50</i> to <i>blue-900</i>. A token named <i>blue-500</i> may be used as the primary color, the background of a message however on
            its own, the name of the token does not indicate context. Usually they are utilized by the semantic tokens.
        </p>

        <h3>Semantic Tokens</h3>
        <p>
            Semantic tokens define content and their names indicate where they are utilized, a well known example of a semantic token is the <i>primary.color</i>. Semantic tokens map to primitive tokens or other semantic tokens. The
            <i>colorScheme</i> token group is a special variable to define tokens based on the color scheme active in the application, this allows defining different tokens based on the color scheme like implementing dark mode.
        </p>

        <h3>Component Tokens</h3>
        <p>
            Component tokens are isolated tokens per component such as <i>inputtext.background</i> or <i>button.color</i> that map to the semantic tokens. As an example, <i>button.background</i> component token maps to the
            <i>primary.color</i> semantic token which maps to the <i>green.500</i> primitive token.
        </p>

        <h3>Best Practices</h3>
        <p class="mb-0">
            Use primitive tokens when defining the core color palette and semantic tokens to specify the common design elements such as focus ring, primary colors and surfaces. Components tokens should only be used when customizing a specific
            component. By defining your own design tokens as a custom preset, you'll be able to define your own style without touching CSS. Overriding the PrimeVue components using style classes is not a best practice and should be the last resort,
            design tokens are the suggested approach.
        </p>
    </DocSectionText>
</template>
