<template>
    <DocPTViewer :docs="docs">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Image'),
                    key: 'Image'
                }
            ]
        };
    }
};
</script>
