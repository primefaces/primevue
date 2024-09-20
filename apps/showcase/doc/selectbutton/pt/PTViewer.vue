<template>
    <DocPTViewer :docs="docs">
        <SelectButton v-model="value" :options="options" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: 'One-Way',
            options: ['One-Way', 'Return'],
            docs: [
                {
                    data: getPTOptions('SelectButton'),
                    key: 'SelectButton'
                }
            ]
        };
    }
};
</script>
