<template>
    <DocSectionText v-bind="$attrs">
        <p>Replaces the current presets entirely, common use case is changing the preset dynamically at runtime.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { usePreset } from '@primevue/themes';

const onButtonClick() {
    usePreset(MyPreset);
}
`
            }
        };
    }
};
</script>
