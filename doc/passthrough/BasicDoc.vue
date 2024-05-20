<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Each component has a special <i>pt</i> property to define an object with keys corresponding to the available DOM elements. Each value can either be a string, an object or a function that returns a string or an object to define the
            arbitrary properties to apply to the element such as styling, aria, data-* or custom attributes. If the value is a string or a function that returns a string, it is considered as a class definition and added to the class attribute of the
            element. Every component documentation has a dedicated section to document the available section names exposed via PT.
        </p>
        <p>
            Most common usage of <i>pt</i> is styling and customization. The <i>class</i> and <i>style</i> properties support the exact syntax of the corresponding
            <a href="https://vuejs.org/guide/essentials/class-and-style.html">Vue bindings</a> like arrays, objects and conditionals. Example below styles a Panel component with PrimeFlex CSS library.
        </p>
    </DocSectionText>

    <div class="card">
        <Panel
            header="Header"
            toggleable
            :pt="{
                header: (options) => ({
                    id: 'myPanelHeader',
                    style: {
                        'user-select': 'none'
                    },
                    class: [
                        'border-primary',
                        {
                            'bg-primary text-primary-contrast': options.state.d_collapsed,
                            'text-primary bg-primary-contrast': !options.state.d_collapsed
                        }
                    ]
                }),
                content: { class: 'border-primary text-lg text-primary-700' },
                title: 'text-xl',
                toggler: () => 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'
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
        header: (options) => ({
            id: 'myPanelHeader',
            style: {
                'user-select': 'none'
            },
            class: [
                'border-primary',
                {
                    'bg-primary text-primary-contrast': options.state.d_collapsed,
                    'text-primary bg-primary-contrast': !options.state.d_collapsed
                }
            ]
        }),
        content: { class: 'border-primary text-lg text-primary-700' },
        title: 'text-xl',                                     // OR { class: 'text-xl' }
        toggler: () => 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'  // OR { class: 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast' }
    }">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
`,
                options: `
<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: (options) => ({
                    id: 'myPanelHeader',
                    style: {
                        'user-select': 'none'
                    },
                    class: [
                        'border-primary',
                        {
                            'bg-primary text-primary-contrast': options.state.d_collapsed,
                            'text-primary bg-primary-contrast': !options.state.d_collapsed
                        }
                    ]
                }),
                content: { class: 'border-primary text-lg text-primary-700' },
                title: 'text-xl',                                     // OR { class: 'text-xl' }
                toggler: () => 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'  // OR { class: 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: (options) => ({
                    id: 'myPanelHeader',
                    style: {
                        'user-select': 'none'
                    },
                    class: [
                        'border-primary',
                        {
                            'bg-primary text-primary-contrast': options.state.d_collapsed,
                            'text-primary bg-primary-contrast': !options.state.d_collapsed
                        }
                    ]
                }),
                content: { class: 'border-primary text-lg text-primary-700' },
                title: 'text-xl',                                     // OR { class: 'text-xl' }
                toggler: () => 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'  // OR { class: 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
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
