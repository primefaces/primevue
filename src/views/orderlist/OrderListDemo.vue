<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Orderlist</h1>
                <p>OrderList is used to sort a collection. When the position of an item changes, the backend array is updated as well.</p>
            </div>
        </div>

        <OrderList :value="val" header="Employees" :responsive= "isResponsive" className= "marginClass" :style= "marginClass">
            <template slot-scope= "{row}">
                <img src="data:image/png;base64,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" alt="Renault" style="display: inline-block; margin: 2px 0px 2px 2px; width: 48px;">
                <div style="font-size: 14px; float: right; margin: 15px 5px 0px 0px;">{{row.name}}</div>
            </template>
        </OrderList>

        <OrderListDoc/>

    </div>
</template>

<script>
import OrderListDoc from './OrderListDoc'

export default {

    data() {
        return {
            val: [{name: "Ege"}, {name: "Nogi"}, {name: "Onur"}, {name: "John"}, {name: "David"}],
            value2: '',
            value3: 'PrimeVue',
            isResponsive: true
        }
    },
	components: {
        'OrderListDoc': OrderListDoc
	}
}
</script>

<style>

    .marginClass {
        margin-left: 100px;
    }

</style>

