<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The theming system can be extended by adding custom design tokens and additional styles. This feature provides a high degree of customization, allowing you to adjust styles according to your needs, as you are not limited to the default
            tokens.
        </p>
        <p>The example preset configuration adds a new <i>accent</i> button with custom <i>button.accent.color</i> and <i>button.accent.inverse.color</i> tokens. It is also possible to add tokens globally to share them within the components.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
const MyPreset = definePreset(Aura, {
    components: {
        // custom button tokens and additional style
        button: {
            extend: {
                accent: {
                    color: '#f59e0b',
                    inverseColor: '#ffffff'
                }
            }
        css: ({ dt }) => \`
.p-button-accent {
    background: \${dt('button.accent.color')};
    color: \${dt('button.accent.inverse.color')};
    transition-duration: \${dt('my.transition.fast')};
}
\`
        }
    },
    // common tokens and styles
    extend: {
        my: {
            transition: {
                slow: '0.75s'
                normal: '0.5s'
                fast: '0.25s'
            },
            imageDisplay: 'block' 
        }
    },
    css: ({ dt }) => \`
        /* Global CSS */
        img {
            display: \${dt('my.image.display')};
        }
    \`
});
`
            }
        };
    }
};
</script>
