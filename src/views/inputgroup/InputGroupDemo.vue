<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputGroup</h1>
                <p>Text, icon, buttons and other content can be grouped next to an input.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">

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
        </div>

        <InputGroupDoc/>
    </div>
</template>

<script>
import InputGroupDoc from './InputGroupDoc';

export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            radioValue1: '',
            radioValue2: ''
        }
    },
    components: {
        'InputGroupDoc': InputGroupDoc
    }
}
</script>