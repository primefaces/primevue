<template>
    <DocPTViewer :docs="docs">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-40" />
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
                    data: getPTOptions('ToggleButton'),
                    key: 'ToggleButton'
                }
            ]
        };
    }
};
</script>
