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
            <p-checkbox inputId="binary" v-model="checked" />
            <label for="binary" class="p-checkbox-label">{{checked}}</label>

            <h3>Multiple</h3>
            <div class="p-grid">
                <div class="p-col-12">
                    <p-checkbox inputId="city1" name="city" value="Chicago" v-model="cities" />
                    <label for="city1" class="p-checkbox-label">Chicago</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="city2" name="city" value="Los Angeles" v-model="cities" />
                    <label for="city2" class="p-checkbox-label">Los Angeles</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="city3" name="city" value="New York" v-model="cities" />
                    <label for="city3" class="p-checkbox-label">New York</label>
                </div>
                <div class="p-col-12">
                    <p-checkbox inputId="city4" name="city" value="San Francisco" v-model="cities" />
                    <label for="city4" class="p-checkbox-label">San Francisco</label>
                </div>
            </div>
            Selected Cities : {{cities}}

            <h3>Dynamic Values, Preselection, Value Binding and Disabled Option</h3>
            <div class="p-grid">
                <div v-for="theme of themes" :key="theme.key" class="p-col-12">
                    <p-checkbox :inputId="theme.key" name="theme" :value="theme" v-model="selectedThemes" :disabled="theme.key === 'U'"/>
                    <label :for="theme.key" class="p-checkbox-label">{{theme.name}}</label>
                </div>
            </div>
            Selected Themes : {{this.selectedThemes}}
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>
