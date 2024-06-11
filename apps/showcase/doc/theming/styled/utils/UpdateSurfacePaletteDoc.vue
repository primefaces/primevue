<template>
    <DocSectionText v-bind="$attrs">
        <p>Updates the surface colors, this is a shorthand to do the same update using <i>updatePreset</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { updateSurfacePalette } from '@primevue/themes';

const changeSurfaces() {
    //changes surfaces both in light and dark mode
    updateSurfacePalette({
        50: '{zinc.50}',
        // ...
        950: '{zinc.950}'
    });
}

const changeLightSurfaces() {
    //changes surfaces only in light
    updateSurfacePalette({
        light: {
            50: '{zinc.50}',
            // ...
            950: '{zinc.950}'
        }
    });
}

const changeDarkSurfaces() {
    //changes surfaces only in dark mode
    updateSurfacePalette({
        dark: {
            50: '{zinc.50}',
            // ...
            950: '{zinc.950}'
        }
    });
}
`
            }
        };
    }
};
</script>
