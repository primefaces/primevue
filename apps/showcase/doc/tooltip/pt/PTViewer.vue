<template>
    <DocPTViewer :docs="docs">
        <Button v-tooltip="{ value: 'Confirm to proceed', hideDelay: 300000 }" severity="secondary" label="Tooltip" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Tooltip'),
                    key: 'Tooltip'
                }
            ]
        };
    }
};
</script>
