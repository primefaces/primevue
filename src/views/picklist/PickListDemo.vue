<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>PickList</h1>
                <p>PickList is used to reorder items between different lists.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <PickList v-model="cars" listStyle="height:342px" dataKey="vin">
                <template #sourceHeader>
                    Available
                </template>
                <template #targetHeader>
                    Selected
                </template>
                <template #item="slotProps">
                    <div class="p-caritem">
                        <img :src="'demo/images/car/' + slotProps.item.brand + '.png'">
                        <div>{{slotProps.item.brand}} - {{slotProps.item.year}} - {{slotProps.item.color}}</div>
                    </div>
                </template>
            </PickList>
        </div>

        <PickListDoc />
    </div>
</template>
<script>
import PickListDoc from './PickListDoc';
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
        this.carService.getCarsSmall().then(data => this.cars = [data.slice(0,5),[]]);
    },
    components: {
        'PickListDoc': PickListDoc
    }
}
</script>

<style lang="scss" scoped>
.p-caritem {
    &:after {
        content: "";
        display: table;
        clear: both;
    }

    img {
        display:inline-block;
        margin:2px 0 2px 2px;
        width: 48px;
        height: 48px;
    }

    div {
        font-size:14px;
        float:right;
        margin: 16px 6px 0 0;
    }
}
</style>