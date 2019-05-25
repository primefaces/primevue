<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Rating</h1>
                <p>Rating component is a star based selection input.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic {{val1}}</h3>
            <Rating v-model="val1" />

            <h3>No Cancel {{val2}}</h3> 
            <Rating v-model="val2" :cancel="false" />

            <h3>ReadOnly</h3> 
            <Rating :value="5" :readonly="true" :stars="10" :cancel="false" />

            <h3>Disabled</h3> 
            <Rating :value="8" :disabled="true" :stars="10" />
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
        }
    },
    components: {
        'RatingDoc': RatingDoc
    }
}
</script>