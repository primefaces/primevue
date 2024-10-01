<template>
    <DocPTViewer :docs="docs">
        <div class="w-full">
            <FileUpload name="demo[]" url="/api/upload" :multiple="true" accept="image/*" :maxFileSize="1000000">
                <template #empty>
                    <span>Drag and drop files to here to upload.</span>
                </template>
            </FileUpload>
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
                    data: getPTOptions('FileUpload'),
                    key: 'FileUpload'
                }
            ]
        };
    }
};
</script>
