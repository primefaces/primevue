<template>
    <DocPTViewer :docs="docs">
        <Checkbox v-model="checked" :binary="true" />
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
                    data: getPTOptions('Checkbox'),
                    key: 'Checkbox'
                }
            ]
        };
    }
};
</script>
