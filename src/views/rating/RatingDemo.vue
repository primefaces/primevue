<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Rating</h1>
                <p>Rating component is a star based selection input.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic {{val1}}</h5>
                <Rating v-model="val1" />

                <h5>Without Cancel</h5>
                <Rating v-model="val2" :cancel="false" />

                <h5>Decimal</h5>
                <Rating v-model="val3" :cancel="false" />

                <h5>ReadOnly</h5>
                <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />

                <h5>Disabled</h5>
                <Rating :modelValue="8" :disabled="true" :stars="10" />
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
            val3: 3.5
        }
    },
    components: {
        'RatingDoc': RatingDoc
    }
}
</script>
