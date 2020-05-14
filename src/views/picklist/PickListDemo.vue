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
                        <div>
                            <span class="p-caritem-vin">{{slotProps.item.vin}}</span>
                            <span>{{slotProps.item.year}} - {{slotProps.item.color}}</span>
                        </div>
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
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
    }

    .p-caritem-vin {
        font-weight: 600;
        display: block;
        margin-bottom: .25rem;
    }

    img {
        width: 48px;
        height: 48px;
        margin-right: .5rem;
    }
}
</style>