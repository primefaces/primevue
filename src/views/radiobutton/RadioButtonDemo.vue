<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>RadioButton</h1>
                <p>RadioButton is an extension to standard radio button element with theming.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <div class="field-radiobutton">
                    <RadioButton id="city1" name="city" value="Chicago" v-model="city" />
                    <label for="city1">Chicago</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton id="city2" name="city" value="Los Angeles" v-model="city" />
                    <label for="city2">Los Angeles</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton id="city3" name="city" value="New York" v-model="city" />
                    <label for="city3">New York</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton id="city4" name="city" value="San Francisco" v-model="city" />
                    <label for="city4">San Francisco</label>
                </div>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                <div v-for="category of categories" :key="category.key" class="field-radiobutton">
                    <RadioButton :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
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
            categories: [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}],
            selectedCategory: null
        }
    },
    created() {
        this.selectedCategory = this.categories[1];
    },
    components: {
        'RadioButtonDoc': RadioButtonDoc
    }
}
</script>