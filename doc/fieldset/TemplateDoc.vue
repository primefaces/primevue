<template>
    <DocSectionText v-bind="$attrs">
        <p>Legend section can also be defined with custom content instead of primitive values.</p>
    </DocSectionText>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center text-primary">
                    <span class="pi pi-user mr-2"></span>
                    <span class="font-bold text-lg">User Details</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Fieldset>
    <template #legend>
        <div class="flex align-items-center text-primary">
            <span class="pi pi-user mr-2"></span>
            <span class="font-bold text-lg">User Details</span>
        </div>
    </template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>`,
                options: `
<template>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center text-primary">
                    <span class="pi pi-user mr-2"></span>
                    <span class="font-bold text-lg">User Details</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center text-primary">
                    <span class="pi pi-user mr-2"></span>
                    <span class="font-bold text-lg">User Details</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
