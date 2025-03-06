<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Avatar from 'primevue-vaultic/avatar';
import AvatarGroup from 'primevue-vaultic/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
