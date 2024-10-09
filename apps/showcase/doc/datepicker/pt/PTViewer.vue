<template>
    <DocPTViewer :docs="docs">
        <DatePicker v-model="date" showIcon fluid iconDisplay="input" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            date: null,
            docs: [
                {
                    data: getPTOptions('DatePicker'),
                    key: 'DatePicker'
                }
            ]
        };
    }
};
</script>
