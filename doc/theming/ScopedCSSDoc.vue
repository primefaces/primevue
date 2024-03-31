<template>
    <DocSectionText v-bind="$attrs">
        <p>Scoped CSS allows overriding the styles of a particular PrimeVue component using <i>scoped</i> SFC style and <i>:deep</i>.</p>
    </DocSectionText>
    <div class="card">
        <Panel header="Scoped Panel">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
    <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<style scoped>
:deep(.p-panel .p-panel-header) {
    background-color: var(--teal-500);
    border-color: var(--teal-500);
    color: #ffffff;
}

:deep(.p-panel .p-panel-content) {
    border-color: var(--teal-500);
}
</style>
`
            },
            code2: {
                basic: `
<template>
    <Panel header="Scoped Panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Panel>
</template>
`
            }
        };
    }
};
</script>

<style scoped>
:deep(.p-panel .p-panel-header) {
    background-color: var(--teal-500);
    border-color: var(--teal-500);
    color: #ffffff;
}

:deep(.p-panel .p-panel-content) {
    border-color: var(--teal-500);
}
</style>
