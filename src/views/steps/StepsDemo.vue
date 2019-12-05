<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Steps</h1>
                <p>Steps components is an indicator for the steps in a workflow.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Steps :model="items" />
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
                to: '/steps',
                command: (event) => {
                    this.$toast.add({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Seat',
                to: '/steps/seat',
                command: (event) => {
                    this.$toast.add({severity:'info', summary:'Second Step', detail: event.item.label});
                }
            },
            {
                label: 'Payment',
                to: '/steps/payment',
                command: (event) => {
                    this.$toast.add({severity:'info', summary:'Third Step', detail: event.item.label});
                }
            },
            {
                label: 'Confirmation',
                to: '/steps/confirmation',
                command: (event) => {
                    this.$toast.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
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
    }

    i {
        vertical-align: middle;
    }
}
</style>