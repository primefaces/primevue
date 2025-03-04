<template>
    <DocSectionText v-bind="$attrs">
        <p>Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle" />
            <Avatar label="+2" shape="circle" />
        </AvatarGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Avatar from '@/volt/avatar';
import AvatarGroup from '@/volt/avatargroup';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle" />
            <Avatar label="+2" shape="circle" />
        </AvatarGroup>
    </div>
</template>

<script setup>
import Avatar from '@/volt/avatar';
import AvatarGroup from '@/volt/avatargroup';
<\/script>
`);
</script>
