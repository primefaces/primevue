<template>
    <div>
        <Head>
            <Title>Vue TriStateCheckbox Component</Title>
            <Meta name="description" content="TriStateCheckbox is used to select either true, false or null as the value." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TriStateCheckbox</h1>
                <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div class="field-checkbox m-0">
                    <TriStateCheckbox v-model="value" inputId="checkbox" />
                    <label for="checkbox">{{ value == null ? 'null' : value }}</label>
                </div>
            </div>
        </div>

        <TriStateCheckboxDoc />
    </div>
</template>

<script>
import TriStateCheckboxDoc from './TriStateCheckboxDoc';

export default {
    data() {
        return {
            value: null
        };
    },
    components: {
        TriStateCheckboxDoc: TriStateCheckboxDoc
    }
};
</script>
