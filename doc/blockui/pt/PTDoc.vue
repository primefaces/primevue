<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <div class="mb-3">
            <Button label="Block" @click="blocked = true" class="mr-2"></Button>
            <Button label="Unblock" @click="blocked = false"></Button>
        </div>
        <BlockUI :blocked="blocked" :pt="{ root: { class: 'bg-red-100' } }">
            <Panel header="Basic">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </BlockUI>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            blocked: false,
            code: {
                basic: `
<Badge value="2"
    :pt="{
        root: { class: 'bg-primary border-round-sm' }
    }"
/>`,
                options: `
<template>
    <Badge value="2"
        :pt="{
            root: { class: 'bg-primary border-round-sm' }
        }"
    />
</template>`,
                composition: `
<template>
    <Badge value="2"
        :pt="{
            root: { class: 'bg-primary border-round-sm' }
        }"
    />
</template>`
            }
        };
    }
};
</script>
