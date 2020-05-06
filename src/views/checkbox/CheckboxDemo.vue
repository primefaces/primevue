<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Checkbox</h1>
                <p>Checkbox is an extension to standard checkbox element with theming.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <Checkbox id="binary" v-model="checked" :binary="true" />
                    <label for="binary" style="font-weight: bold">{{checked}}</label>
                </div>
            </div>

            <h3>Multiple</h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <Checkbox id="city1" name="city" value="Chicago" v-model="cities" />
                    <label for="city1">Chicago</label>
                </div>
                <div class="p-col-12">
                    <Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" />
                    <label for="city2">Los Angeles</label>
                </div>
                <div class="p-col-12">
                    <Checkbox id="city3" name="city" value="New York" v-model="cities" />
                    <label for="city3">New York</label>
                </div>
                <div class="p-col-12">
                    <Checkbox id="city4" name="city" value="San Francisco" v-model="cities" />
                    <label for="city4">San Francisco</label>
                </div>
            </div>
            <p>Selected Cities : <span style="font-weight: bold">{{cities}}</span></p>

            <h3>Dynamic Values, Preselection, Value Binding and Disabled Option</h3>
            <div class="p-grid">
                <div v-for="theme of themes" :key="theme.key" class="p-col-12">
                    <Checkbox :id="theme.key" name="theme" :value="theme" v-model="selectedThemes" :disabled="theme.key === 'U'"/>
                    <label :for="theme.key">{{theme.name}}</label>
                </div>
            </div>
            <p>Selected Themes: <span style="font-weight: bold">{{this.selectedThemes}}</span></p>
        </div>

        <CheckboxDoc/>
    </div>
</template>

<script>
import CheckboxDoc from './CheckboxDoc';

export default {
    data() {
        return {
            checked: false,
            cities: [],
            themes: [{name: 'Apollo', key: 'A'}, {name: 'Babylon', key: 'B'}, {name: 'Serenity', key: 'S'}, {name: 'Ultima', key: 'U'}],
            selectedThemes: []
        }
    },
    created() {
        this.selectedThemes = this.themes.slice(1,3);
    },
    components: {
        'CheckboxDoc': CheckboxDoc
    }
}
</script>

<style scoped>
.p-col-12 {
    display: flex;
    align-items: center;
}

label {
    margin-left: .5em;
}
</style>