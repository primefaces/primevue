<template>
    <div>
        <Head>
            <Title>Vue Rating Component</Title>
            <Meta name="description" content="Rating component is a star based selection input." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Rating</h1>
                <p>Rating component is a star based selection input.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic {{ val1 }}</h5>
                <Rating v-model="val1" />

                <h5>Without Cancel</h5>
                <Rating v-model="val2" :cancel="false" />

                <h5>ReadOnly</h5>
                <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />

                <h5>Disabled</h5>
                <Rating :modelValue="8" :disabled="true" :stars="10" />

                <h5>Custom Icons</h5>
                <Rating v-model="val3" :stars="5" onIcon="pi pi-heart-fill" offIcon="pi pi-heart" cancelIcon="pi pi-times" />

                <h5>Templating</h5>
                <Rating v-model="val4">
                    <template #cancelicon>
                        <img src="/demo/images/rating/cancel.png" height="24" width="24" />
                    </template>
                    <template #onicon>
                        <img src="/demo/images/rating/custom-onicon.png" height="24" width="24" />
                    </template>
                    <template #officon>
                        <img src="/demo/images/rating/custom-officon.png" height="24" width="24" />
                    </template>
                </Rating>
            </div>
        </div>

        <RatingDoc />
    </div>
</template>

<script>
import RatingDoc from './RatingDoc';

export default {
    data() {
        return {
            val1: null,
            val2: 3,
            val3: 2,
            val4: 2
        };
    },
    components: {
        RatingDoc: RatingDoc
    }
};
</script>
