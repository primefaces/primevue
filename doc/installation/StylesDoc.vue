<template>
    <DocSectionText v-bind="$attrs">
        <p>Theme, core and icons are the necessary css files of the components, visit the <NuxtLink to="/theming/#themes">Themes</NuxtLink> section for the complete list of available themes to choose from.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";`
            }
        };
    }
};
</script>
