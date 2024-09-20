<template>
    <DocPTViewer :docs="docs">
        <ToggleSwitch v-model="checked" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            checked: false,
            docs: [
                {
                    data: getPTOptions('ToggleSwitch'),
                    key: 'ToggleSwitch'
                }
            ]
        };
    }
};
</script>
