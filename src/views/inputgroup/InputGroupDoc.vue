<template>
	<AppDoc name="InputGroupDemo" :sources="sources" github="inputgroup/InputGroupDemo.vue" />
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
        <h5>Addons</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" />
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">$</span>
                    <InputText placeholder="Price" />
                    <span class="p-inputgroup-addon">.00</span>
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">W</span>
                    <InputText placeholder="Website" />
                </div>
            </div>
        </div>

        <h5>Multiple Addons</h5>
        <div class="grid">
            <div class="col-12">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-clock"></i>
                    </span>
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-star-fill"></i>
                    </span>
                    <InputText placeholder="Price" />
                    <span class="p-inputgroup-addon">$</span>
                    <span class="p-inputgroup-addon">.00</span>
                </div>
            </div>
        </div>

        <h5>Button Addons</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <Button label="Search"/>
                    <InputText placeholder="Keyword"/>
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <InputText placeholder="Keyword"/>
                    <Button icon="pi pi-search" class="p-button-warning"/>
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <Button icon="pi pi-check" class="p-button-success"/>
                    <InputText placeholder="Vote"/>
                    <Button icon="pi pi-times" class="p-button-danger"/>
                </div>
            </div>
        </div>

        <h5>Checkbox and RadioButton</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-12">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <Checkbox v-model="checked1" :binary="true" />
                    </span>
                    <InputText placeholder="Username"/>
                </div>
            </div>

            <div class="col-12 md:col-12">
                <div class="p-inputgroup">
                    <InputText placeholder="Price"/>
                    <span class="p-inputgroup-addon">
                        <RadioButton name="rb1" value="rb1" v-model="radioValue1" />
                    </span>
                </div>
            </div>

            <div class="col-12 md:col-12">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <Checkbox v-model="checked2" :binary="true" />
                    </span>
                    <InputText placeholder="Website"/>
                    <span class="p-inputgroup-addon">
                        <RadioButton name="rb2" value="rb2" v-model="radioValue2" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            radioValue1: '',
            radioValue2: ''
        }
    }
}
<\\/script>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Addons</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" />
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">$</span>
                    <InputText placeholder="Price" />
                    <span class="p-inputgroup-addon">.00</span>
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">W</span>
                    <InputText placeholder="Website" />
                </div>
            </div>
        </div>

        <h5>Multiple Addons</h5>
        <div class="grid">
            <div class="col-12">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-clock"></i>
                    </span>
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-star-fill"></i>
                    </span>
                    <InputText placeholder="Price" />
                    <span class="p-inputgroup-addon">$</span>
                    <span class="p-inputgroup-addon">.00</span>
                </div>
            </div>
        </div>

        <h5>Button Addons</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <Button label="Search"/>
                    <InputText placeholder="Keyword"/>
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <InputText placeholder="Keyword"/>
                    <Button icon="pi pi-search" class="p-button-warning"/>
                </div>
            </div>

            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <Button icon="pi pi-check" class="p-button-success"/>
                    <InputText placeholder="Vote"/>
                    <Button icon="pi pi-times" class="p-button-danger"/>
                </div>
            </div>
        </div>

        <h5>Checkbox and RadioButton</h5>
        <div class="grid p-fluid">
            <div class="col-12 md:col-12">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <Checkbox v-model="checked1" :binary="true" />
                    </span>
                    <InputText placeholder="Username"/>
                </div>
            </div>

            <div class="col-12 md:col-12">
                <div class="p-inputgroup">
                    <InputText placeholder="Price"/>
                    <span class="p-inputgroup-addon">
                        <RadioButton name="rb1" value="rb1" v-model="radioValue1" />
                    </span>
                </div>
            </div>

            <div class="col-12 md:col-12">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <Checkbox v-model="checked2" :binary="true" />
                    </span>
                    <InputText placeholder="Website"/>
                    <span class="p-inputgroup-addon">
                        <RadioButton name="rb2" value="rb2" v-model="radioValue2" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const checked1 = ref(false);
        const checked2 = ref(false);
        const radioValue1 = ref('');
        const radioValue2 = ref('');

        return { checked1, checked2, radioValue1, radioValue2 }
    }
}
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/checkbox/checkbox.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/radiobutton/radiobutton.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Addons</h5>
            <div class="grid p-fluid">
                <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-user"></i>
                        </span>
                        <p-inputtext placeholder="Username"></p-inputtext>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">$</span>
                        <p-inputtext placeholder="Price"></p-inputtext>
                        <span class="p-inputgroup-addon">.00</span>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">W</span>
                        <p-inputtext placeholder="Website"></p-inputtext>
                    </div>
                </div>
            </div>

            <h5>Multiple Addons</h5>
            <div class="grid">
                <div class="col-12">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-clock"></i>
                        </span>
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-star-fill"></i>
                        </span>
                        <p-inputtext placeholder="Price"></p-inputtext>
                        <span class="p-inputgroup-addon">$</span>
                        <span class="p-inputgroup-addon">.00</span>
                    </div>
                </div>
            </div>

            <h5>Button Addons</h5>
            <div class="grid p-fluid">
                <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                        <p-button label="Search"></p-button>
                        <p-inputtext placeholder="Keyword"></p-inputtext>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                        <p-inputtext placeholder="Keyword"></p-inputtext>
                        <p-button icon="pi pi-search" class="p-button-warning"></p-button>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                        <p-button icon="pi pi-check" class="p-button-success"></p-button>
                        <p-inputtext placeholder="Vote"></p-inputtext>
                        <p-button icon="pi pi-times" class="p-button-danger"></p-button>
                    </div>
                </div>
            </div>

            <h5>Checkbox and RadioButton</h5>
            <div class="grid p-fluid">
                <div class="col-12 md:col-12">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <p-checkbox v-model="checked1" :binary="true"></p-checkbox>
                        </span>
                        <p-inputtext placeholder="Username"></p-inputtext>
                    </div>
                </div>

                <div class="col-12 md:col-12">
                    <div class="p-inputgroup">
                        <p-inputtext placeholder="Price"></p-inputtext>
                        <span class="p-inputgroup-addon">
                            <p-radiobutton name="rb1" value="rb1" v-model="radioValue1"></p-radiobutton>
                        </span>
                    </div>
                </div>

                <div class="col-12 md:col-12">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <p-checkbox v-model="checked2" :binary="true"></p-checkbox>
                        </span>
                        <p-inputtext placeholder="Website"></p-inputtext>
                        <span class="p-inputgroup-addon">
                            <p-radiobutton name="rb2" value="rb2" v-model="radioValue2"></p-radiobutton>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const checked1 = ref(false);
                const checked2 = ref(false);
                const radioValue1 = ref('');
                const radioValue2 = ref('');

                return { checked1, checked2, radioValue1, radioValue2 }
            },
            components: {
                "p-inputtext": primevue.inputtext,
                "p-button": primevue.button,
                "p-checkbox": primevue.checkbox,
                "p-radiobutton": primevue.radiobutton
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>`
                }
            }
        }
    }
}
</script>