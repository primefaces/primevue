<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>RadioButton</h1>
                <p>RadioButton is an extension to standard radio button element with theming.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <div class="p-field-radiobutton">
                    <RadioButton id="city1" name="city" value="Chicago" v-model="city" />
                    <label for="city1">Chicago</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="city2" name="city" value="Los Angeles" v-model="city" />
                    <label for="city2">Los Angeles</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="city3" name="city" value="New York" v-model="city" />
                    <label for="city3">New York</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="city4" name="city" value="San Francisco" v-model="city" />
                    <label for="city4">San Francisco</label>
                </div>
                <p>Selected City: <span style="font-weight: bold">{{this.city}}</span></p>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                <div v-for="theme of themes" :key="theme.key" class="p-field-radiobutton">
                    <RadioButton :id="theme.key" name="theme" :value="theme" v-model="selectedTheme" :disabled="theme.key === 'U'" />
                    <label :for="theme.key">{{theme.name}}</label>
                </div>
                <p>Selected Theme: <span style="font-weight: bold">{{this.selectedTheme}}</span></p>
            </div>
        </div>

        <RadioButtonDoc/>
    </div>
</template>

<script>
import RadioButtonDoc from './RadioButtonDoc';

export default {
    data() {
        return {
            city: null,
            themes: [{name: 'Apollo', key: 'A'}, {name: 'Babylon', key: 'B'}, {name: 'Serenity', key: 'S'}, {name: 'Ultima', key: 'U'}],
            selectedTheme: null
        }
    },
    created() {
        this.selectedTheme = this.themes[1];
    },
    components: {
        'RadioButtonDoc': RadioButtonDoc
    }
}
</script>