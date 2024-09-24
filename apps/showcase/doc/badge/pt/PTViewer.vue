<template>
    <DocPTViewer :docs="docs">
        <div class="flex flex-wrap gap-8">
            <Badge value="2"></Badge>
            <OverlayBadge value="3">
                <i class="pi pi-bell" style="font-size: 2rem" />
            </OverlayBadge>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Badge'),
                    key: 'Badge'
                },
                {
                    data: getPTOptions('OverlayBadge'),
                    key: 'OverlayBadge'
                }
            ]
        };
    }
};
</script>
