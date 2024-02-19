export default {
    variables: {
        colorScheme: {
            light: {
                track: {
                    background: '{surface.200}'
                },
                handle: {
                    background: '{surface.200}',
                    backgroundHover: '{surface.200}',
                    contentBackground: '{surface.0}'
                },
                range: {
                    background: '{primary.color}'
                }
            },
            dark: {
                track: {
                    background: '{surface.700}'
                },
                handle: {
                    background: '{surface.700}',
                    backgroundHover: '{surface.700}',
                    contentBackground: '{surface.950}'
                },
                range: {
                    background: '{primary.color}'
                }
            }
        }
    }
};
