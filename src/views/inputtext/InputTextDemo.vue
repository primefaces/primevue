<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputText</h1>
                <p>InputText renders and input field where the user can enter data.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <InputText type="text" v-model="value1" />
                <span :style="{marginLeft: '.5em'}">{{value1}}</span>

                <h5>Floating Label</h5>
                <span class="p-float-label">
                    <InputText id="username" type="text" v-model="value2" />
                    <label for="username">Username</label>
                </span>

                <h5>Left Icon</h5>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText type="text" v-model="value3" placeholder="Search" />
                </span>

                <h5>Right Icon</h5>
                <span class="p-input-icon-right">
                    <i class="pi pi-spin pi-spinner" />
                    <InputText type="text" v-model="value4" />
                </span>

                <h5>Disabled</h5>
                <InputText type="text" v-model="value5" disabled />

                <h5>Invalid</h5>
                <InputText type="text" class="p-invalid" />

                <h5>Sizes</h5>
                <div class="sizes">
                    <InputText type="text" class="p-inputtext-sm" placeholder="Small" />
                    <InputText type="text" placeholder="Normal" />
                    <InputText type="text" class="p-inputtext-lg"  placeholder="Large" />
                </div>
            </div>
        </div>

        <InputTextDoc />
    </div>
</template>

<script>
import InputTextDoc from './InputTextDoc';

export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: 'PrimeVue'
        }
    },
	components: {
		'InputTextDoc': InputTextDoc
	}
}
</script>

<style lang="scss" scoped>
.sizes {
    .p-inputtext {
        display: block;
        margin-bottom: .5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>