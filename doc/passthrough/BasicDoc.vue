<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Each component has a special <i>pt</i> property to define an object with keys corresponding to the available DOM elements. Each value can either be an object or a function that returns an object to define the arbitrary properties to apply
            to the element such as styling, aria, data-* or custom attributes. Every component documentation has a dedicated section to document the available section names exposed via PT.
        </p>
        <p>Most common usage of <i>pt</i> is styling and customization, example below styles a Panel component with PrimeFlex CSS library.</p>
    </DocSectionText>

    <div class="card">
        <Panel
            header="Header"
            toggleable
            :pt="{
                header: (opts) => {
                    return { class: opts.state.d_collapsed ? 'bg-primary border-primary' : 'bg-primary-reverse border-primary' };
                },
                content: { class: 'border-primary text-lg text-primary-700' },
                title: { class: 'text-xl' },
                toggler: { class: 'bg-primary hover:bg-primary-reverse' }
            }"
        >
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Panel header="Header" toggleable
    :pt="{
        header: (opts: PanelPassThroughMethodOptions) => {
            return { class: opts.state.d_collapsed ? 'bg-primary border-primary' : 'bg-primary-reverse border-primary' };
        },
        content: { class: 'border-primary text-lg text-primary-700' },
        title: { class: 'text-xl' },
        toggler: { class: 'bg-primary hover:bg-primary-reverse' }
    }">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>`,
                options: `
<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: (opts: PanelPassThroughMethodOptions) => {
                    return { class: opts.state.d_collapsed ? 'bg-primary border-primary' : 'bg-primary-reverse border-primary' };
                },
                content: { class: 'border-primary text-lg text-primary-700' },
                title: { class: 'text-xl' },
                toggler: { class: 'bg-primary hover:bg-primary-reverse' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: (opts: PanelPassThroughMethodOptions) => {
                    return { class: opts.state.d_collapsed ? 'bg-primary border-primary' : 'bg-primary-reverse border-primary' };
                },
                content: { class: 'border-primary text-lg text-primary-700' },
                title: { class: 'text-xl' },
                toggler: { class: 'bg-primary hover:bg-primary-reverse' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
