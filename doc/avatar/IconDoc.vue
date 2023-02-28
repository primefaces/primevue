<template>
    <DocSectionText v-bind="$attrs">
        <p>A font icon is displayed as an Avatar with the <i>icon</i> property.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
<Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
<Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" />

<Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
<Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
<Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" shape="circle" />

<Avatar v-badge="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script>

<\/script>`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    }
};
</script>
