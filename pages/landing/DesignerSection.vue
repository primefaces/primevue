<template>
    <section class="landing-designer py-8">
        <div class="section-header">Theme Designer</div>
        <p class="section-detail">Designer is the ultimate tool to create your own PrimeVue experience powered by a SASS based theme engine with 500+ variables and a Visual Designer.</p>
        <div class="designer-main mt-7 justify-content-center px-5 lg:px-8" :style="{ backgroundImage: `url('https://primefaces.org/cdn/primevue/images/landing/wave-${$appState.darkTheme ? 'dark' : 'light'}.svg')`, backgroundSize: 'cover' }">
            <div class="box p-4 flex flex-column md:flex-row z-1 designer-editor">
                <div class="mr-0 md:mr-4 p-4 designer-controls box border-bottom-1 border-left-none border-right-none border-top-none md:border-bottom-none md:border-right-1" style="border-radius: '10px'">
                    <div class="text-center mb-4">
                        <img :src="'https://primefaces.org/cdn/primevue/images/landing/' + `${$appState.darkTheme ? 'designer-light.svg' : 'designer-dark.svg'}`" />
                    </div>
                    <div class="p-fluid">
                        <span class="font-semibold block mb-3">Primary</span>
                        <div>
                            <button type="button" class="border-circle w-2rem h-2rem p-link mr-3" style="background-color: #4f8ff7" @click="changeTheme('#4f8ff7', '#3575dd')"></button>
                            <button type="button" class="border-circle w-2rem h-2rem p-link mr-3" style="background-color: #03e8bf" @click="changeTheme('#03E8BF', '#02ba99')"></button>
                            <button type="button" class="border-circle w-2rem h-2rem p-link mr-3" style="background-color: #916aff" @click="changeTheme('#916AFF', '#7455cc')"></button>
                            <button type="button" class="border-circle w-2rem h-2rem p-link" style="background-color: #ffbd80" @click="changeTheme('#FFBD80', '#cc9766')"></button>
                        </div>

                        <span class="font-semibold block mt-4 mb-3">Font</span>
                        <Dropdown v-model="font" :options="fonts" optionLabel="label" @change="changeFont"></Dropdown>

                        <span class="font-semibold block mt-4 mb-3">Size</span>
                        <div class="flex flex-wrap gap-4 align-items-center">
                            <div class="flex align-items-center">
                                <RadioButton id="size-small" v-model="size" value="small" name="sizevalue" />
                                <label for="size-small" class="ml-2 font-medium">Small</label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton id="size-normal" v-model="size" value="normal" name="sizevalue" />
                                <label for="size-normal" class="ml-2 font-medium">Normal</label>
                            </div>
                            <div class="flex align-items-center">
                                <RadioButton id="size-large" v-model="size" value="large" name="sizevalue" />
                                <label for="size-large" class="ml-2 font-medium">Large</label>
                            </div>
                        </div>

                        <span class="font-semibold block mt-4 mb-3">Input Style</span>
                        <div class="flex align-items-center mb-6">
                            <div class="flex align-items-center">
                                <RadioButton id="inputStyle1" value="outlined" name="inputstylevalue" :modelValue="inputstyle" @update:modelValue="onChange" />
                                <label for="inputStyle1" class="ml-2 font-medium">Outlined</label>
                            </div>
                            <div class="flex align-items-center ml-4">
                                <RadioButton id="inputStyle2" value="filled" name="inputstylevalue" :modelValue="inputstyle" @update:modelValue="onChange" />
                                <label for="inputStyle2" class="ml-2 font-medium">Filled</label>
                            </div>
                        </div>

                        <a href="https://designer.primevue.org" class="font-semibold p-3 border-round flex align-items-center linkbox active">
                            <span>View Full Version</span>
                            <i class="pi pi-arrow-right ml-auto"></i>
                        </a>
                    </div>
                </div>
                <div :ref="editorRef" :class="editorclass" style="border-radius: '10px'">
                    <div class="p-fluid formgrid grid pt-3">
                        <div class="field col-12 xl:col-6">
                            <label for="username" class="font-semibold mb-3 p-component">Username</label>
                            <InputText id="username" type="text" />
                        </div>
                        <div class="field col-12 xl:col-6">
                            <label for="email" class="font-semibold mb-3 p-component">Email</label>
                            <InputText id="email" type="text" />
                        </div>
                        <div class="field col-12 xl:col-6">
                            <label for="price" class="font-semibold mb-3 p-component">Price</label>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">$</span>
                                <InputNumber id="price" placeholder="Price" />
                                <span class="p-inputgroup-addon">.00</span>
                            </div>
                        </div>
                        <div class="field col-12 xl:col-6">
                            <label for="date" class="font-semibold mb-3 p-component">Date</label>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                    <i class="pi pi-calendar"></i>
                                </span>
                                <InputMask id="date" placeholder="mm/dd/yyyy" mask="99/99/9999" slotChar="mm/dd/yyyy" />
                            </div>
                        </div>
                        <div class="field col-12 xl:col-6">
                            <span class="font-semibold mb-2 block mb-3 mt-3 p-component">City</span>
                            <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
                        </div>
                        <div class="field col-12 xl:col-6">
                            <label for="email" class="font-semibold mb-3 mt-3 p-component">Range</label>
                            <Slider v-model="range" range />

                            <span class="font-semibold mb-2 block mb-3 mt-5 p-component">Checkboxes</span>
                            <div class="flex flex-column xl:flex-row xl:align-items-center">
                                <div class="flex align-items-center">
                                    <Checkbox id="cb1" v-model="values" :value="value1" name="cbvalue" />
                                    <label for="cb1" class="ml-2 font-medium p-component white-space-nowrap">Option 1</label>
                                </div>
                                <div class="flex align-items-center mt-3 xl:mt-0 xl:ml-4">
                                    <Checkbox id="cb2" v-model="values" :value="value2" name="cbvalue" />
                                    <label for="cb2" class="ml-2 font-medium p-component white-space-nowrap">Option 2</label>
                                </div>
                            </div>

                            <span class="font-semibold mb-2 block mb-3 mt-5 p-component">Buttons</span>
                            <div class="flex align-items-center">
                                <Button type="button" label="Save" icon="pi pi-check" class="mr-1"></Button>
                                <Button type="button" label="Clear" icon="pi pi-times" outlined class="ml-1"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            size: 'normal',
            font: { label: 'System', value: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol' },
            fonts: [
                { label: 'Arial', value: 'Arial,Helvetica Neue,Helvetica,sans-serif' },
                { label: 'System', value: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol' },
                { label: 'Trebuchet MS', value: 'Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif' },
                { label: 'Verdana', value: 'Verdana,Geneva,sans-serif' }
            ],
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Paris', code: 'PRS' }
            ],
            range: [20, 80],
            value1: 1,
            value2: 2,
            values: []
        };
    },
    editor: null,
    methods: {
        changeTheme(color, darker) {
            this.editor.style.setProperty('--dd-primary', color);
            this.editor.style.setProperty('--dd-primary-darker', darker);
        },
        changeFont(event) {
            this.editor.style.setProperty('--dd-font', event.value.value);
            this.font = event.value;
        },
        onChange(value) {
            this.$primevue.config.inputStyle = value;
        },
        editorRef(el) {
            this.editor = el;
        }
    },
    computed: {
        editorclass() {
            return [
                'designer-demo',
                {
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'demo-size-small': this.size === 'small',
                    'demo-size-large': this.size === 'large'
                }
            ];
        },
        inputstyle() {
            return this.$primevue.config.inputStyle;
        }
    }
};
</script>
