<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Rating</h1>
                <p>Rating component is a star based selection input.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic {{val1}}</h5>
                <Rating v-model="val1" name="basic" />

                <h5>Without Cancel</h5>
                <Rating v-model="val2" :cancel="false" name="cancel" />

                <h5>ReadOnly</h5>
                <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" name="readonly" />

                <h5>Disabled</h5>
                <Rating :modelValue="8" :disabled="true" :stars="10" name="disabled" />

                <h5>Custom Icons</h5>
                <Rating v-model="val3"  on-icon="pi pi-heart" off-icon="pi pi-heart-fill" :stars="5" name="primeIcons" cancel-icon="pi pi-times"/>

                <h5>Templating</h5>
                <Rating v-model="val4" name="templating">
                    <template #cancel>
                        <img src="demo/images/rating/cancel.png" class="cursor-pointer" height="24" width="24" />
                    </template>
                    <template #onIcon>
                        <img src="demo/images/rating/custom-star-2.png" height="24" width="24" class="cursor-pointer" />
                    </template>
                    <template #offIcon>
                        <img src="demo/images/rating/custom-star.png" height="24" width="24" class="cursor-pointer" />
                    </template>
                </Rating>
            </div>
        </div>

        <RatingDoc/>
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
        }
    },
    components: {
        'RatingDoc': RatingDoc
    },
}
</script>
