<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="docs">
        <Password v-model="value" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: null,
            docs: [
                {
                    data: getPTOptions('Password'),
                    key: 'Password'
                }
            ]
        };
    }
};
</script>
