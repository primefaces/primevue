<template>
    <DocSectionText v-bind="$attrs">
        <p>Configures the theme configuration path for the customizations of a theme in styled mode.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: {
    importTheme: { from: '@/themes/mytheme.js' },
}
`
            },
            code2: {
                basic: `
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    }
});

export default {
    preset: MyPreset,
    options: {
        darkModeSelector: '.p-dark'
    }
};

`
            }
        };
    }
};
</script>
