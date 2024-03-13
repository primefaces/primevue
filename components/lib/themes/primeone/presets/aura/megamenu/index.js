export default {
    colorScheme: {
        light: {
            root: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                color: '{surface.700}'
            },
            item: {
                focusBackground: '{surface.100}',
                color: '{surface.700}',
                focusColor: '{surface.800}',
                icon: {
                    color: '{surface.400}',
                    focusColor: '{surface.500}'
                }
            },
            submenuHeader: {
                color: '{surface.400}'
            },
            separator: {
                borderColor: '{surface.200}'
            },
            mobileToggle: {
                color: '{surface.500}',
                hoverColor: '{surface.600}',
                hoverBackground: '{surface.100}'
            }
        },
        dark: {
            root: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                color: '{surface.0}'
            },
            item: {
                focusBackground: '{surface.800}',
                color: '{surface.0}',
                focusColor: '{surface.0}',
                icon: {
                    color: '{surface.500}',
                    focusColor: '{surface.400}'
                }
            },
            submenuHeader: {
                color: '{surface.500}'
            },
            separator: {
                borderColor: '{surface.700}'
            },
            toggleIcon: {
                color: '{surface.400}',
                hoverColor: '{surface.300}',
                hoverBackground: '{surface.800}'
            }
        }
    }
};
