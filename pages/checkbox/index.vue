<template>
    <div>
        <Head>
            <Title>Vue Checkbox Component</Title>
            <Meta name="description" content="Checkbox is an extension to standard checkbox element with theming." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Checkbox</h1>
                <p>Checkbox is an extension to standard checkbox element with theming.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <div class="field-checkbox">
                    <Checkbox v-model="checked" inputId="binary" :binary="true" />
                    <label for="binary">Remember Me</label>
                </div>

                <h5>Multiple</h5>
                <div class="field-checkbox">
                    <Checkbox v-model="cities" inputId="city1" name="city" value="Chicago" />
                    <label for="city1">Chicago</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox v-model="cities" inputId="city2" name="city" value="Los Angeles" />
                    <label for="city2">Los Angeles</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox v-model="cities" inputId="city3" name="city" value="New York" />
                    <label for="city3">New York</label>
                </div>
                <div class="field-checkbox">
                    <Checkbox v-model="cities" inputId="city4" name="city" value="San Francisco" />
                    <label for="city4">San Francisco</label>
                </div>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" :disabled="category.key === 'R'" />
                    <label :for="category.key">{{ category.name }}</label>
                </div>
            </div>
        </div>

        <CheckboxDoc />
    </div>
</template>

<script>
import CheckboxDoc from './CheckboxDoc';

export default {
    data() {
        return {
            checked: false,
            cities: [],
            categories: [
                { name: 'Accounting', key: 'A' },
                { name: 'Marketing', key: 'M' },
                { name: 'Production', key: 'P' },
                { name: 'Research', key: 'R' }
            ],
            selectedCategories: []
        };
    },
    created() {
        this.selectedCategories = this.categories.slice(1, 3);
    },
    components: {
        CheckboxDoc: CheckboxDoc
    }
};
</script>
