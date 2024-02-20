export default {
    colorScheme: {
        light: {
            root: {
                background: '{surface.300}',
                backgroundInvalid: '{red.400}',
                backgroundHover: '{surface.400}',
                backgroundChecked: '{primary.500}',
                backgroundCheckedHover: '{primary.600}',
                borderRadius: '30px'
            },
            handle: {
                background: '{surface.0}',
                backgroundHover: '{surface.0}',
                backgroundChecked: '{surface.0}',
                backgroundCheckedHover: '{surface.0}',
                backgroundInvalid: '{surface.0}'
            }
        },
        dark: {
            root: {
                background: '{surface.700}',
                backgroundInvalid: '{red.300}',
                backgroundHover: '{surface.600}',
                backgroundChecked: '{primary.400}',
                backgroundCheckedHover: '{primary.300}',
                borderRadius: '30px'
            },
            handle: {
                background: '{surface.400}',
                backgroundHover: '{surface.300}',
                backgroundChecked: '{surface.900}',
                backgroundCheckedHover: '{surface.900}',
                backgroundInvalid: '{surface.900}'
            }
        }
    }
};
