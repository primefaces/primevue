<template>
    <div class="app-inputstyleswitch">
        <h4>Input Style</h4>
        <div class="p-formgroup-inline">
            <div class="p-field-radiobutton">
                <RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="value" @input="onChange" />
                <label for="input_outlined">Outlined</label>
            </div>
            <div class="p-field-radiobutton">
                <RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="value" @input="onChange" />
                <label for="input_filled">Filled</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onChange(value) {
            this.$appState.inputStyle = value;
        }
    },
    computed: {
        value() {
            return this.$appState.inputStyle;
        }
    }
};
</script>