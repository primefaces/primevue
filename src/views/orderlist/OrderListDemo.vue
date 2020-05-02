<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>OrderList</h1>
                <p>OrderList is used to managed the order of a collection.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <OrderList v-model="cars" listStyle="height:auto" dataKey="vin">
                <template #header>
                    List of Cars
                </template>
                <template #item="slotProps">
                    <div class="p-caritem">
                        <img :src="'demo/images/car/' + slotProps.item.brand + '.png'">
                        <div>
                            <span class="p-caritem-vin">{{slotProps.item.vin}}</span>
                            <span>{{slotProps.item.year}} - {{slotProps.item.color}}</span>
                        </div>
                    </div>
                </template>
            </OrderList>
        </div>

        <OrderListDoc />
    </div>
</template>
<script>
import OrderListDoc from './OrderListDoc';
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data.slice(0,5));
    },
    components: {
        'OrderListDoc': OrderListDoc
    }
}
</script>

<style lang="scss" scoped>
.p-caritem {
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
    }

    .p-caritem-vin {
        font-weight: 600;
        display: block;
        margin-bottom: .25em;
    }

    img {
        width: 48px;
        height: 48px;
        margin-right: .5em;
    }
}
</style>