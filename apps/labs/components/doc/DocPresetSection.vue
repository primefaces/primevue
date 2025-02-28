<template>
    <DocSectionText v-if="false" v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
import Aura from '@/doc/common/presetdoc/index.json';
import { isArray } from '@primeuix/utils/object';

export default {
    data() {
        const preset = Aura;
        const presetKey = this.$attrs?.data?.presetKey ?? '';
        const keys = isArray(presetKey) ? presetKey : [presetKey];

        const basicCode = `\n${preset[keys]}`;

        return {
            code: {
                basic: `${basicCode}\n`
            }
        };
    }
};
</script>
