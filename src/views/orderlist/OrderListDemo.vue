<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>OrderList</h1>
                <p>OrderList is used to managed the order of a collection.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <OrderList v-model="cars" header="List of Cars" listStyle="height:20em">
                <template #header>
                    List of Cars
                </template>
                <template #item="slotProps">
                    <div class="p-clearfix">
                        <img :src="'demo/images/car/' + slotProps.item.brand + '.png'" style="display:inline-block;margin:2px 0 2px 2px" width="48">
                        <div style="font-size:14px;float:right;margin:15px 5px 0 0">{{slotProps.item.brand}} - {{slotProps.item.year}} - {{slotProps.item.color}}</div>
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
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    components: {
        'OrderListDoc': OrderListDoc
    }
}
</script>