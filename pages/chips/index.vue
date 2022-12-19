<template>
    <div>
        <Head>
            <Title>Vue Chips Component</Title>
            <Meta name="description" content="Chips is used to enter multiple values on an input field." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Chips</h1>
                <p>Chips is used to enter multiple values on an input field.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation p-fluid">
            <div class="card">
                <h5>Basic</h5>
                <Chips v-model="value1" />

                <h5>Comma Separator</h5>
                <Chips v-model="value2" separator="," />

                <h5>RegExp Separator</h5>
                <Chips v-model="value3" :separator="separatorExp" />

                <h5>Template</h5>
                <Chips v-model="value4">
                    <template #chip="slotProps">
                        <div>
                            <span>{{ slotProps.value }} - (active) </span>
                            <i class="pi pi-user-plus" style="font-size: 14px"></i>
                        </div>
                    </template>
                </Chips>
            </div>
        </div>

        <ChipsDoc />
    </div>
</template>

<script>
import ChipsDoc from './ChipsDoc';

export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            separatorExp: /,| /
        };
    },
    components: {
        ChipsDoc: ChipsDoc
    }
};
</script>
