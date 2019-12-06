<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Steps</h1>
                <p>Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Steps :model="items" :readonly="false" />
            <router-view/>
        </div>

        <StepsDoc />
    </div>
</template>

<script>
import StepsDoc from './StepsDoc';

export default {
    data() {
        return {
            items: [{
                label: 'Personal',
                to: '/steps'
            },
            {
                label: 'Seat',
                to: '/steps/seat'
            },
            {
                label: 'Payment',
                to: '/steps/payment'
            },
            {
                label: 'Confirmation',
                to: '/steps/confirmation'
            }]
        }
    },
    components: {
        'StepsDoc': StepsDoc
	}
}
</script>

<style scoped lang="scss">
/deep/ .stepsdemo-content  {
    h1 {
        font-weight: 400;
        display: inline-block;
        vertical-align: middle;
        font-size: 24px;
        margin-top: 1em;
    }

    i {
        vertical-align: middle;
        font-size: 2em;
        margin-top: .3em;
    }
}
</style>