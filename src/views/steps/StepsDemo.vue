<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Steps</h1>
                <p>Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Steps :model="items" :readonly="true" />
            </div>

            <keep-alive>
                <router-view :formData="formObject" @prev-page="prevPage($event)" @next-page="nextPage($event)" @complete="complete" />
            </keep-alive>
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
            }],
            formObject: {}
        }
    },
    components: {
        'StepsDoc': StepsDoc
    },
    methods: {
        nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
    }
}
</script>

<style scoped lang="scss">
/deep/ b {
    display: block
}

/deep/ .p-card-body {
    padding: 2rem;
}
</style>