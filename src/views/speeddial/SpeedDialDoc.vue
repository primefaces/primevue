<template>
    <AppDoc name="SpeedDialDemo" :sources="sources" github="speeddial/SpeedDialDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import SpeedDial from 'primevue/speeddial';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/speeddial/speeddial.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>Getting Started</h5>
        <p>When pressed, a floating action button can display multiple primary actions that can be performed on a page. It has a collection of additional options defined by the <i>model</i> property.
        SpeedDial's position is calculated according to the container element with the position type style.</p>

<pre v-code><code>
&lt;SpeedDial :model="items" /&gt;

</code></pre>

<pre v-code.script><code>
items: [
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            this.$router.push('fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
]

</code></pre>

        <h5>MenuModel API</h5>
        <p>SpeedDial uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

        <h5>Type</h5>
        <p>SpeedDial has 4 types; <i>linear</i>, <i>circle</i>, <i>semi-circle</i> and <i>quarter-circle</i>.</p>

        <h5>Direction</h5>
        <p>Specifies the opening direction of actions. For the <strong>linear</strong> and <strong>semi-circle</strong> types; <i>up</i>, <i>down</i>, <i>left</i> and <i>right</i>. For the <strong>quarter-circle</strong> type; <i>up-left</i>, <i>up-right</i>, <i>down-left</i> and <i>down-right</i>.</p>

        <h5>Properties</h5>
        <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>model</td>
                        <td>object</td>
                        <td>null</td>
                        <td>MenuModel instance to define the action items.</td>
                    </tr>
                    <tr>
                        <td>visible</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Specifies the visibility of the overlay.</td>
                    </tr>
                    <tr>
                        <td>direction</td>
                        <td>string</td>
                        <td>up</td>
                        <td>Specifies the opening direction of actions. Valid values are 'up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left' and 'down-right'</td>
                    </tr>
                    <tr>
                        <td>transitionDelay</td>
                        <td>number</td>
                        <td>30</td>
                        <td>Transition delay step for each action item.</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>string</td>
                        <td>linear</td>
                        <td>Specifies the opening type of actions.</td>
                    </tr>
                    <tr>
                        <td>radius</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Radius for *circle types.</td>
                    </tr>
                    <tr>
                        <td>mask</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to show a mask element behind the speeddial</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the component is disabled.</td>
                    </tr>
                    <tr>
                        <td>hideOnClickOutside</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether the actions close when clicked outside.</td>
                    </tr>
                    <tr>
                        <td>buttonClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the button element.</td>
                    </tr>
                    <tr>
                        <td>maskClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the mask element.</td>
                    </tr>
                    <tr>
                        <td>maskStyle</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Inline style of the mask element.</td>
                    </tr>
                    <tr>
                        <td>showIcon</td>
                        <td>string</td>
                        <td>pi pi-plus</td>
                        <td>Show icon of the button element.</td>
                    </tr>
                    <tr>
                        <td>hideIcon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Hide icon of the button element.</td>
                    </tr>
                    <tr>
                        <td>rotateAnimation</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Defined to rotate showIcon when hideIcon is not present.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the element.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Inline style of the element.</td>
                    </tr>
                    <tr>
                        <td>tooltipOptions</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Whether to display the tooltip on items. The modifiers of <router-link to="/tooltip">Tooltip</router-link> can be used like an object in it. Valid keys are 'event' and 'position'.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>click</td>
                        <td>event: Browser event.</td>
                        <td>Fired when the button element clicked.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>-</td>
                        <td>Fired when the actions are visible.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Fired when the actions are hidden.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Slots</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>item</td>
                        <td>item: Custom template for item</td>
                    </tr>
                    <tr>
                        <td>button</td>
                        <td>toggle: toggle metadata</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Styling</h5>
        <p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-speeddial</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-speeddial-button</td>
                        <td>Button element of speeddial.</td>
                    </tr>
                    <tr>
                        <td>p-speeddial-mask</td>
                        <td>Mask element of speeddial.</td>
                    </tr>
                    <tr>
                        <td>p-speeddial-list</td>
                        <td>List of the actions.</td>
                    </tr>
                    <tr>
                        <td>p-speeddial-item</td>
                        <td>Each action item of list.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Dependencies</h5>
        <p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Toast />
        <div class="card">
            <h5>Linear</h5>
            <div class="speeddial-linear-demo" :style="{ position: 'relative', height: '500px' }">
                <SpeedDial :model="items" direction="up" />
                <SpeedDial :model="items" direction="down" />
                <SpeedDial :model="items" direction="left" />
                <SpeedDial :model="items" direction="right" />
            </div>
        </div>

        <div class="card">
            <h5>Circle, Semi-Circle and Quarter-Circle</h5>
            <div class="speeddial-circle-demo" :style="{ position: 'relative', height: '500px' }">
                <SpeedDial :model="items" :radius="80" type="circle" buttonClass="p-button-warning" />
                <SpeedDial :model="items" :radius="80" direction="up" type="semi-circle" />
                <SpeedDial :model="items" :radius="80" direction="down" type="semi-circle" />
                <SpeedDial :model="items" :radius="80" direction="left" type="semi-circle" />
                <SpeedDial :model="items" :radius="80" direction="right" type="semi-circle" />
                <SpeedDial :model="items" :radius="120" direction="up-left" type="quarter-circle" buttonClass="p-button-success" />
                <SpeedDial :model="items" :radius="120" direction="up-right" type="quarter-circle" buttonClass="p-button-success" />
                <SpeedDial :model="items" :radius="120" direction="down-left" type="quarter-circle" buttonClass="p-button-success" />
                <SpeedDial :model="items" :radius="120" direction="down-right" type="quarter-circle" buttonClass="p-button-success" />
            </div>
        </div>

        <div class="card">
            <h5>Tooltip</h5>
            <div class="speeddial-tooltip-demo" :style="{ position: 'relative', height: '350px' }">
                <SpeedDial :model="items" direction="up" class="speeddial-right" buttonClass="p-button-danger" :tooltipOptions="{position: 'left'}" />

                <SpeedDial :model="items" direction="up" class="speeddial-left" buttonClass="p-button-help" :tooltipOptions="{position: 'right'}" />
            </div>
        </div>

        <div class="card">
            <h5>Transition Duration, Icon and No Rotate Animation</h5>
            <div class="speeddial-delay-demo" :style="{ position: 'relative', height: '350px' }">
                <SpeedDial :model="items" direction="up" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" />
            </div>
        </div>

        <div class="card">
            <h5>Mask</h5>
            <div class="speeddial-mask-demo" :style="{ position: 'relative', height: '350px' }">
                <SpeedDial :model="items" direction="up" mask />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

export default {
    setup() {
        const toast = useToast();

        const items = ref([
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.$router.push('fileupload');
                }
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/'
                }
            }
        ]);

        return { items }
    }
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.speeddial-linear-demo) {
    .p-speeddial-direction-up {
        left: calc(50% - 2rem);
        bottom: 0;
    }

    .p-speeddial-direction-down {
        left: calc(50% - 2rem);
        top: 0;
    }

    .p-speeddial-direction-left {
        right: 0;
        top: calc(50% - 2rem);
    }

    .p-speeddial-direction-right {
        left: 0;
        top: calc(50% - 2rem);
    }
}

::v-deep(.speeddial-circle-demo) {
    .p-speeddial-circle {
        top: calc(50% - 2rem);
        left: calc(50% - 2rem);
    }

    .p-speeddial-semi-circle {
        &.p-speeddial-direction-up {
            left: calc(50% - 2rem);
            bottom: 0;
        }

        &.p-speeddial-direction-down {
            left: calc(50% - 2rem);
            top: 0;
        }

        &.p-speeddial-direction-left {
            right: 0;
            top: calc(50% - 2rem);
        }

        &.p-speeddial-direction-right {
            left: 0;
            top: calc(50% - 2rem);
        }
    }

    .p-speeddial-quarter-circle {
        &.p-speeddial-direction-up-left {
            right: 0;
            bottom: 0;
        }

        &.p-speeddial-direction-up-right {
            left: 0;
            bottom: 0;
        }

        &.p-speeddial-direction-down-left {
            right: 0;
            top: 0;
        }

        &.p-speeddial-direction-down-right {
            left: 0;
            top: 0;
        }
    }
}

::v-deep(.speeddial-tooltip-demo) {
    .p-speeddial-direction-up {
        &.speeddial-left {
            left: 0;
            bottom: 0;
        }

        &.speeddial-right {
            right: 0;
            bottom: 0;
        }
    }
}

::v-deep(.speeddial-delay-demo) {
    .p-speeddial-direction-up {
        left: calc(50% - 2rem);
        bottom: 0;
    }
}

::v-deep(.speeddial-mask-demo) {
    .p-speeddial-direction-up {
        right: 0;
        bottom: 0;
    }
}
</style>

`
                },
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Toast />
        <div class="card">
            <h5>Linear</h5>
            <div class="speeddial-linear-demo" :style="{ position: 'relative', height: '500px' }">
                <SpeedDial :model="items" direction="up" />
                <SpeedDial :model="items" direction="down" />
                <SpeedDial :model="items" direction="left" />
                <SpeedDial :model="items" direction="right" />
            </div>
        </div>

        <div class="card">
            <h5>Circle, Semi-Circle and Quarter-Circle</h5>
            <div class="speeddial-circle-demo" :style="{ position: 'relative', height: '500px' }">
                <SpeedDial :model="items" :radius="80" type="circle" buttonClass="p-button-warning" />
                <SpeedDial :model="items" :radius="80" direction="up" type="semi-circle" />
                <SpeedDial :model="items" :radius="80" direction="down" type="semi-circle" />
                <SpeedDial :model="items" :radius="80" direction="left" type="semi-circle" />
                <SpeedDial :model="items" :radius="80" direction="right" type="semi-circle" />
                <SpeedDial :model="items" :radius="120" direction="up-left" type="quarter-circle" buttonClass="p-button-success" />
                <SpeedDial :model="items" :radius="120" direction="up-right" type="quarter-circle" buttonClass="p-button-success" />
                <SpeedDial :model="items" :radius="120" direction="down-left" type="quarter-circle" buttonClass="p-button-success" />
                <SpeedDial :model="items" :radius="120" direction="down-right" type="quarter-circle" buttonClass="p-button-success" />
            </div>
        </div>

        <div class="card">
            <h5>Tooltip</h5>
            <div class="speeddial-tooltip-demo" :style="{ position: 'relative', height: '350px' }">
                <SpeedDial :model="items" direction="up" class="speeddial-right" buttonClass="p-button-danger" :tooltipOptions="{position: 'left'}" />

                <SpeedDial :model="items" direction="up" class="speeddial-left" buttonClass="p-button-help" :tooltipOptions="{position: 'right'}" />
            </div>
        </div>

        <div class="card">
            <h5>Transition Duration, Icon and No Rotate Animation</h5>
            <div class="speeddial-delay-demo" :style="{ position: 'relative', height: '350px' }">
                <SpeedDial :model="items" direction="up" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" />
            </div>
        </div>

        <div class="card">
            <h5>Mask</h5>
            <div class="speeddial-mask-demo" :style="{ position: 'relative', height: '350px' }">
                <SpeedDial :model="items" direction="up" mask />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/'
                    }
                }
            ]
        }
    }
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.speeddial-linear-demo) {
    .p-speeddial-direction-up {
        left: calc(50% - 2rem);
        bottom: 0;
    }

    .p-speeddial-direction-down {
        left: calc(50% - 2rem);
        top: 0;
    }

    .p-speeddial-direction-left {
        right: 0;
        top: calc(50% - 2rem);
    }

    .p-speeddial-direction-right {
        left: 0;
        top: calc(50% - 2rem);
    }
}

::v-deep(.speeddial-circle-demo) {
    .p-speeddial-circle {
        top: calc(50% - 2rem);
        left: calc(50% - 2rem);
    }

    .p-speeddial-semi-circle {
        &.p-speeddial-direction-up {
            left: calc(50% - 2rem);
            bottom: 0;
        }

        &.p-speeddial-direction-down {
            left: calc(50% - 2rem);
            top: 0;
        }

        &.p-speeddial-direction-left {
            right: 0;
            top: calc(50% - 2rem);
        }

        &.p-speeddial-direction-right {
            left: 0;
            top: calc(50% - 2rem);
        }
    }

    .p-speeddial-quarter-circle {
        &.p-speeddial-direction-up-left {
            right: 0;
            bottom: 0;
        }

        &.p-speeddial-direction-up-right {
            left: 0;
            bottom: 0;
        }

        &.p-speeddial-direction-down-left {
            right: 0;
            top: 0;
        }

        &.p-speeddial-direction-down-right {
            left: 0;
            top: 0;
        }
    }
}

::v-deep(.speeddial-tooltip-demo) {
    .p-speeddial-direction-up {
        &.speeddial-left {
            left: 0;
            bottom: 0;
        }

        &.speeddial-right {
            right: 0;
            bottom: 0;
        }
    }
}

::v-deep(.speeddial-delay-demo) {
    .p-speeddial-direction-up {
        left: calc(50% - 2rem);
        bottom: 0;
    }
}

::v-deep(.speeddial-mask-demo) {
    .p-speeddial-direction-up {
        right: 0;
        bottom: 0;
    }
}
</style>

`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/speeddial/speeddial.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>
            <div class="card">
                <h5>Linear</h5>
                <div class="speeddial-linear-demo" :style="{ position: 'relative', height: '500px' }">
                    <p-speeddial :model="items" direction="up"></p-speeddial>
                    <p-speeddial :model="items" direction="down"></p-speeddial>
                    <p-speeddial :model="items" direction="left"></p-speeddial>
                    <p-speeddial :model="items" direction="right"></p-speeddial>
                </div>
            </div>

            <div class="card">
                <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                <div class="speeddial-circle-demo" :style="{ position: 'relative', height: '500px' }">
                    <p-speeddial :model="items" :radius="80" type="circle" button-class="p-button-warning"></p-speeddial>
                    <p-speeddial :model="items" :radius="80" direction="up" type="semi-circle"></p-speeddial>
                    <p-speeddial :model="items" :radius="80" direction="down" type="semi-circle"></p-speeddial>
                    <p-speeddial :model="items" :radius="80" direction="left" type="semi-circle"></p-speeddial>
                    <p-speeddial :model="items" :radius="80" direction="right" type="semi-circle"></p-speeddial>
                    <p-speeddial :model="items" :radius="120" direction="up-left" type="quarter-circle" button-class="p-button-success"></p-speeddial>
                    <p-speeddial :model="items" :radius="120" direction="up-right" type="quarter-circle" button-class="p-button-success"></p-speeddial>
                    <p-speeddial :model="items" :radius="120" direction="down-left" type="quarter-circle" button-class="p-button-success"></p-speeddial>
                    <p-speeddial :model="items" :radius="120" direction="down-right" type="quarter-circle" button-class="p-button-success"></p-speeddial>
                </div>
            </div>

            <div class="card">
                <h5>Tooltip</h5>
                <div class="speeddial-tooltip-demo" :style="{ position: 'relative', height: '350px' }">
                    <p-speeddial :model="items" direction="up" class="speeddial-right" button-class="p-button-danger" :tooltip-options="{position: 'left'}"></p-speeddial>

                    <p-speeddial :model="items" direction="up" class="speeddial-left" button-class="p-button-help" :tooltip-options="{position: 'right'}"></p-speeddial>
                </div>
            </div>

            <div class="card">
                <h5>Transition Duration, Icon and No Rotate Animation</h5>
                <div class="speeddial-delay-demo" :style="{ position: 'relative', height: '350px' }">
                    <p-speeddial :model="items" direction="up" :transition-delay="80" show-icon="pi pi-bars" hide-icon="pi pi-times" button-class="p-button-outlined"></p-speeddial>
                </div>
            </div>

            <div class="card">
                <h5>Mask</h5>
                <div class="speeddial-mask-demo" :style="{ position: 'relative', height: '350px' }">
                    <p-speeddial :model="items" direction="up" mask></p-speeddial>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;
        const { useToast } = primevue.usetoast;
        const Tooltip = primevue.tooltip;

        const App = {
            setup() {
                const toast = useToast();

                const items = ref([
                    {
                        label: 'Add',
                        icon: 'pi pi-pencil',
                        command: () => {
                            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                        }
                    },
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-trash',
                        command: () => {
                            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                        }
                    },
                    {
                        label: 'Upload',
                        icon: 'pi pi-upload',
                        command: () => {
                            this.$router.push('fileupload');
                        }
                    },
                    {
                        label: 'Vue Website',
                        icon: 'pi pi-external-link',
                        command: () => {
                            window.location.href = 'https://vuejs.org/'
                        }
                    }
                ]);

                return { items }
            },
            components: {
                "p-speeddial": primevue.speeddial,
                "p-toast": primevue.toast
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .directive("tooltip", Tooltip)
            .mount("#app");
        <\\/script>

        <style>
            .speeddial-linear-demo .p-speeddial-direction-up {
                left: calc(50% - 2rem);
                bottom: 0;
            }

            .speeddial-linear-demo .p-speeddial-direction-down {
                left: calc(50% - 2rem);
                top: 0;
            }

            .speeddial-linear-demo .p-speeddial-direction-left {
                right: 0;
                top: calc(50% - 2rem);
            }

            .speeddial-linear-demo .p-speeddial-direction-right {
                left: 0;
                top: calc(50% - 2rem);
            }

            .speeddial-circle-demo .p-speeddial-circle {
                top: calc(50% - 2rem);
                left: calc(50% - 2rem);
            }

            .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-up {
                left: calc(50% - 2rem);
                bottom: 0;
            }

            .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-down {
                left: calc(50% - 2rem);
                top: 0;
            }

            .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-left {
                right: 0;
                top: calc(50% - 2rem);
            }

            .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-right {
                left: 0;
                top: calc(50% - 2rem);
            }

            .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-left {
                right: 0;
                bottom: 0;
            }

            .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-right {
                left: 0;
                bottom: 0;
            }

            .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-left {
                right: 0;
                top: 0;
            }

            .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-right {
                left: 0;
                top: 0;
            }

            .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-left {
                left: 0;
                bottom: 0;
            }

            .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-right {
                right: 0;
                bottom: 0;
            }

        
            .speeddial-delay-demo .p-speeddial-direction-up {
                left: calc(50% - 2rem);
                bottom: 0;
            }

            .speeddial-mask-demo .p-speeddial-direction-up {
                right: 0;
                bottom: 0;
            }
        </style>

`
                },
            }
        }
    }
}
</script>
