<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>$dt</i> function returns the information about a token like the full path and value. This would be useful if you need to access tokens programmatically.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { $dt } from 'primevue/themes'; 

const value = $dt('primary.color', 'value');
`
            }
        };
    }
};
</script>
