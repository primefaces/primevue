<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script>
export default {
    data() {
        return {
            code: `import Badge from '@/volt/badge';
import OverlayBadge from '@/volt/overlaybadge';
`
        };
    }
};
</script>
