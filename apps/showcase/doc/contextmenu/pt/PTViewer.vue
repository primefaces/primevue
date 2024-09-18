<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <img id="logo" alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature2.jpg" class="w-full md:w-[20rem] rounded shadow-lg" @contextmenu="onImageRightClick" aria-haspopup="true" />
        <ContextMenu ref="menu" appendTo="#logo" :model="items" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                { label: 'Copy', icon: 'pi pi-copy' },
                { label: 'Rename', icon: 'pi pi-file-edit' }
            ],
            ptViewerDoc: [
                {
                    data: getPTOptions('ContextMenu'),
                    key: 'ContextMenu'
                }
            ]
        };
    }
};
</script>
