<template>
    <DocPTViewer :docs="docs">
        <div class="flex flex-wrap gap-8">
            <AvatarGroup>
                <Avatar label="P" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center" size="xlarge" shape="circle" />
            </AvatarGroup>
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
                    data: getPTOptions('Avatar'),
                    key: 'Avatar'
                },
                {
                    data: getPTOptions('AvatarGroup'),
                    key: 'AvatarGroup'
                }
            ]
        };
    }
};
</script>
