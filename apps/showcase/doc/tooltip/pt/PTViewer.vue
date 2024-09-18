<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <Button v-tooltip="{ value: 'Confirm to proceed', hideDelay: 300000 }" severity="secondary" label="Tooltip" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            ptViewerDoc: [
                {
                    data: getPTOptions('Tooltip'),
                    key: 'Tooltip'
                }
            ]
        };
    }
};
</script>
