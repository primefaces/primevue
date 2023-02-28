<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A named class is bound to the <i>class</i> property of a component and the CSS is included with an import. Note that, the css still is still bundled globally so prefer this approach if your application doesn't have a built-in solution to
            do CSS scoping.
        </p>
    </DocSectionText>
    <div class="card">
        <Panel header="Named ClassName" class="mypanel">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
    <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<style scoped>
.mypanel .p-panel-header {
    background-color: #07c4e8;
    color: #ffffff;
}
</style>
        `
            },

            code2: {
                basic: `
<template>
    <Panel header="Named ClassName" class="mypanel">
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
.mypanel .p-panel-header {
    background-color: #07c4e8;
    color: #ffffff;
}
</style>
