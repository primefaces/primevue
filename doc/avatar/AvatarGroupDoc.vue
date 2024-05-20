<template>
    <DocSectionText v-bind="$attrs">
        <p>Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" />
        </AvatarGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<AvatarGroup>
    <Avatar image="/images/avatar/amyelsner.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/asiyajavayant.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/onyamalimba.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/ionibowcher.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/xuxuefeng.png" size="large" shape="circle" />
    <Avatar label="+2" shape="circle" size="large" />
</AvatarGroup>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" />
        </AvatarGroup>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" />
        </AvatarGroup>
    </div>
</template>

<script setup>

<\/script>
`
            }
        };
    }
};
</script>
