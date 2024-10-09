<template>
    <DocPTViewer :docs="docs">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" showItemNavigators :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ],
            docs: [
                {
                    data: getPTOptions('Galleria'),
                    key: 'Galleria'
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
</script>
