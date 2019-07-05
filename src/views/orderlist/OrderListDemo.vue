<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Inplace</h1>
                <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <Inplace disabled="false" active= false closable="true" style="margin-left: 5px">
                <template slot="inplaceDisplay">
                <span>Click to Edit</span>
                </template>

               <template slot="inplaceContent">
                    <span>  
                        <InputText type="text" placeholder="PrimeVUE"/>
                    </span>
                </template>
            </Inplace>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Image</h3>
            <OrderList style="margin-left: 5px">
                <template slot="inplaceDisplay">
                <span class="pi pi-search" style="vertical-align: middle;"></span>
                <span style="margin-left: 0.5em; vertical-align: middle;">View Picture</span>
                </template>

               <template slot="inplaceContent">
                    <span>
                        <img src="https://www.primetek.com.tr/img/primefaces.png" alt="Nature">
                    </span>
                </template>
            </OrderList>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Lazy Data</h3>
            <OrderList>
                <template slot="inplaceDisplay">
                <span >View Data</span>
                </template>

               <template slot="inplaceContent">
                    <span>
                        <Datatable/>
                    </span>
                </template>
            </OrderList>
        </div>

        <OrderListDoc/>

    </div>
</template>

<script>
import OrderListDoc from './OrderListDoc'

export default {

    data() {
        return {
            value1: '',
            value2: '',
            value3: 'PrimeVue'
        }
    },
	components: {
        'OrderListDoc': OrderListDoc
	}
}
</script>
