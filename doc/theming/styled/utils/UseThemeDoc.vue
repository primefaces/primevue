<template>
    <DocSectionText v-bind="$attrs">
        <p>Replaces the theme including the base and the preset such as from PrimeOne to Material. Note that the built-in Material theme is under development.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { useTheme } from 'primevue/themes'; 

const changeTheme() {
    useTheme({
        base: MaterialDesign,
        preset: M3
    });
}
`
            }
        };
    }
};
</script>
