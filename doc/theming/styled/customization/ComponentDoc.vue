<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The design tokens of a specific component is defined at <i>components</i> layer. Overriding components tokens is not the recommended approach if you are building our own style, building your own preset should be preferred instead. This
            configuration is global and applies to all card components, in case you need to customize a particular component on a page locally, view the Scoped CSS section for an example.
        </p>
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
        card: {
            colorScheme: {
                light: {
                    root: {
                        background: '{surface.0}',
                        color: '{surface.700}'
                    },
                    subtitle: {
                        color: '{surface.500}'
                    }
                },
                dark: {
                    root: {
                        background: '{surface.900}',
                        color: '{surface.0}'
                    },
                    subtitle: {
                        color: '{surface.400}'
                    }
                }
            }
        }
    }
});
`
            }
        };
    }
};
</script>
