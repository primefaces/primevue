<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The theming system can be extended by adding custom design tokens and additional styles. This feature provides a high degree of customization, allowing you to adjust styles according to your needs, as you are not limited to the default
            tokens.
        </p>
        <p>
            Use the <i>extend</i> property to add custom tokens along with the <i>css</i> property to utilize them. As an example, let's customize the disabled state of the ToggleSwitch component to add an opacity token, and use the primary color for
            the handle. By default, there is no opacity option available, and the disabled switch uses a gray handle by design.
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
        toggleswitch: {
            extend: {
                root: {
                    myDisabledOpacity: '0.7' 
                },
                handle: {
                    myCheckedDisabledBackground: '{primary.color}'
                } 
            }
        },
        css: ({ dt }) => \`
.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    opacity: \${dt('toggleswitch.my.disabled.opacity')};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: \${dt('toggleswitch.my.checked.disabled.background')};
}
\`
    }
});
`
            }
        };
    }
};
</script>
