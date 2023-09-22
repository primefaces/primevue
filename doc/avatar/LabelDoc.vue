<template>
    <DocSectionText v-bind="$attrs">
        <p>A letter Avatar is defined with the <i>label</i> property.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Label</h5>
                <Avatar label="P" class="mr-2" size="xlarge" />
                <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
                <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
                <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge="4" label="U" size="xlarge" style="background-color: #4caf4f; color: #ffffff" />
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
<Avatar label="P" class="mr-2" size="xlarge" />
<Avatar label="V" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
<Avatar label="U" class="mr-2" style="background-color:#9c27b0; color: #ffffff" />

<Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
<Avatar label="V" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"  />
<Avatar label="U" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" />

<Avatar label="U" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4" />`,
                options: `
<template>
    <div class="flex flex-wrap gap-5">
        <div class="flex-auto">
            <h5>Label</h5>
            <Avatar label="P" class="mr-2" size="xlarge" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <Avatar v-badge="4" label="U" size="xlarge" style="background-color: #4caf4f; color: #ffffff" />
        </div>
    </div>
</template>

<script>

<\/script>`,
                composition: `
<template>
    <div class="flex flex-wrap gap-5">
        <div class="flex-auto">
            <h5>Label</h5>
            <Avatar label="P" class="mr-2" size="xlarge" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <Avatar v-badge="4" label="U" size="xlarge" style="background-color: #4caf4f; color: #ffffff" />
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
