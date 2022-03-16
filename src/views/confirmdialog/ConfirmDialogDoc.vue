<template>
	<AppDoc name="ConfirmDialogDemo" :sources="sources" github="confirmdialog/ConfirmDialogDemo.vue">
        <h5>ConfirmationService</h5>
        <p>ConfirmDialog is controlled via the <i>ConfirmationService</i> that needs to be installed globally before the application
            instance is created.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);

</code></pre>

		<h5>Import via Module</h5>
<pre v-code.script><code>
import ConfirmDialog from 'primevue/confirmdialog';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/confirmdialog/confirmdialog.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>ConfirmDialog is displayed by calling the <i>require</i> method of the <i>$confirm</i> instance by passing the options to customize the Dialog. Suggested location of the Dialog is the main application component
        where it can be shared by any component within the application.</p>
<pre v-code><code>
&lt;ConfirmDialog&gt;&lt;/ConfirmDialog&gt;

&lt;Button @click="delete()" icon="pi pi-check" label="Confirm"&gt;&lt;/Button&gt;

</code></pre>

<pre v-code.script><code>
export default {
	methods: {
        delete() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    //callback to execute when user rejects the action
                }
            });
        },
    }
}

</code></pre>

        <h5>Composition API</h5>
        <p>The service can be injected with the <i>useConfirm</i> function.</p>
<pre v-code.script><code>
import { defineComponent } from "vue";
import { useConfirm } from "primevue/useconfirm";

export default defineComponent({
    setup() {
        const confirm = useConfirm();
        confirm.require({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //callback to execute when user confirms the action
            },
            reject: () => {
                //callback to execute when user rejects the action
            }
        });
    }
})

</code></pre>

        <h5>Close Confirmation</h5>
        <p>The dialog can also be hidden programmatically using the <i>close</i> method.</p>
<pre v-code.script><code>
export default {
	methods: {
        discard() {
            this.$confirm.close();
        }
    }
}

</code></pre>

        <h5>Responsive</h5>
        <p>ConfirmDialog width can be adjusted per screen size with the <i>breakpoints</i> option. In example below, default width is set to 50vw and below 961px, width would be 75vw and finally below 641px width becomes
        100%. The value of <i>breakpoints</i> should be an object literal whose keys are the maximum screen sizes and values are the widths per screen.</p>
<pre v-code><code>
&lt;ConfirmDialog :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"&gt;&lt;/ConfirmDialog&gt;

</code></pre>

        <h5>Confirmation Options</h5>
        <p>ConfirmDialog can be customized with various options listed here.</p>
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
                        <td>message</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Message of the confirmation.</td>
                    </tr>
                    <tr>
                        <td>group</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon to display next to the message.</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Header text of the dialog.</td>
                    </tr>
                    <tr>
                        <td>accept</td>
                        <td>Function</td>
                        <td>null</td>
                        <td>Callback to execute when action is confirmed.</td>
                    </tr>
                    <tr>
                        <td>reject</td>
                        <td>Function</td>
                        <td>null</td>
                        <td>Callback to execute when action is rejected.</td>
                    </tr>
                    <tr>
                        <td>acceptLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Label of the accept button. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>rejectLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Label of the reject button. Defaults to PrimeVue <router-link to="/locale">Locale</router-link> configuration.</td>
                    </tr>
                    <tr>
                        <td>acceptIcon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon of the accept button.</td>
                    </tr>
                    <tr>
                        <td>rejectIcon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon of the reject button.</td>
                    </tr>
                    <tr>
                        <td>acceptClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the accept button.</td>
                    </tr>
                    <tr>
                        <td>rejectClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the reject button.</td>
                    </tr>
                    <tr>
                        <td>blockScroll</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether background scroll should be blocked when dialog is visible.</td>
                    </tr>
                    <tr>
                        <td>defaultFocus</td>
                        <td>string</td>
                        <td>accept</td>
                        <td>Element to receive the focus when the dialog gets visible, valid values are "accept" and "reject".</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>ConfirmationService</h5>
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
                        <td>require</td>
                        <td>confirm: Confirmation Object</td>
                        <td>Displays the dialog using the confirmation object options.</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>-</td>
                        <td>Hides the dialog without invoking accept or reject callbacks.</td>
                    </tr>
                </tbody>
            </table>
        </div>

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
                        <td>group</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.</td>
                    </tr>
                    <tr>
                        <td>breakpoints</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Object literal to define widths per screen size.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Styling</h5>
		<p>ConfirmDialog inherits all the classes from the Dialog component, visit <router-link to="/dialog">dialog</router-link> for more information.</p>
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
                        <td>p-confirm-dialog</td>
                        <td>Container element.</td>
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
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <ConfirmDialog group="positionDialog"></ConfirmDialog>

        <div class="card">
            <h5>Basic</h5>
            <Button @click="confirm1()" icon="pi pi-check" label="Confirm" class="mr-2"></Button>
            <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>

            <h5>Position</h5>
            <div class="grid flex-column">
                <div class="p-col">
                    <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
                    <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
                </div>
                <div class="p-col">
                    <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
                    <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
                    <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
                </div>
                <div class="p-col">
                    <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
                    <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
                    <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        confirm1() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        confirm2() {
            this.$confirm.require({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <ConfirmDialog group="positionDialog"></ConfirmDialog>

        <div class="card">
            <h5>Basic</h5>
            <Button @click="confirm1()" icon="pi pi-check" label="Confirm" class="mr-2"></Button>
            <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>

            <h5>Position</h5>
            <div class="grid flex-column">
                <div class="p-col">
                    <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
                    <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
                </div>
                <div class="p-col">
                    <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
                    <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
                    <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
                </div>
                <div class="p-col">
                    <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
                    <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
                    <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

export default defineComponent({
    setup() {
        const confirm = useConfirm();
        const toast = useToast();

        const confirm1 = () => {
            confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        const confirm2 = () => {
            confirm.require({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        const confirmPosition = (position) => {
            confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        return { confirm1, confirm2, confirmPosition };
    }
});
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/confirmdialog/confirmdialog.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/confirmationservice/confirmationservice.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>
            <p-confirmdialog></p-confirmdialog>
            <p-confirmdialog group="positionDialog"></p-confirmdialog>

            <div class="card">
                <h5>Basic</h5>
                <p-button @click="confirm1()" icon="pi pi-check" label="Confirm" class="mr-2"></p-button>
                <p-button @click="confirm2()" icon="pi pi-times" label="Delete"></p-button>

                <h5>Position</h5>
                <div class="grid flex-column">
                    <div class="p-col">
                        <p-button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></p-button>
                        <p-button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></p-button>
                    </div>
                    <div class="p-col">
                        <p-button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></p-button>
                        <p-button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></p-button>
                        <p-button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></p-button>
                    </div>
                    <div class="p-col">
                        <p-button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></p-button>
                        <p-button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></p-button>
                        <p-button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></p-button>
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp } = Vue;
        const { useConfirm } = primevue.useconfirm;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                const confirm = useConfirm();
                const toast = useToast();

                const confirm1 = () => {
                    confirm.require({
                        message: 'Are you sure you want to proceed?',
                        header: 'Confirmation',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                }

                const confirm2 = () => {
                    confirm.require({
                        message: 'Do you want to delete this record?',
                        header: 'Delete Confirmation',
                        icon: 'pi pi-info-circle',
                        acceptClass: 'p-button-danger',
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                }

                const confirmPosition = (position) => {
                    confirm.require({
                        group: 'positionDialog',
                        message: 'Do you want to delete this record?',
                        header: 'Delete Confirmation',
                        icon: 'pi pi-info-circle',
                        position: position,
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                }

                return { confirm1, confirm2, confirmPosition };
            },
            components: {
                "p-confirmdialog": primevue.confirmdialog,
                "p-toast": primevue.toast,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.confirmationservice)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    }
}
</script>
