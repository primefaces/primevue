<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Style</h1>
				<p>Certain rows or cells can easily be styled based on conditions.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<DataTable :value="cars" :rowClass="rowClass">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year" bodyStyle="padding: 0">
                     <template #body="slotProps">
                        <div :class="['year-cell', {'old-car': slotProps.data.year < 2010}]">
                            {{slotProps.data.year}}
                        </div>
                    </template>
                </Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :rowClass="rowClass"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" bodyStyle="padding: 0"&gt;
            &lt;template #body="slotProps"&gt;
            &lt;div :class="['year-cell', {'old-car': slotProps.data.year &lt; 2010}]"&gt;
                &#123;&#123;slotProps.data.year&#125;&#125;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            columns: null,
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
    methods: {
        rowClass(data) {
            return data.color === 'Orange' ? 'orange-car': null;
        }
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
.year-cell {
    padding: 0.429em 0.857em;

    &amp;.old-car {
        background-color: #41b783;
        font-weight: 700;
        color: #ffffff;
    }
}

/deep/ .orange-car {
    background-color: #344b5f !important;
    color: #ffffff !important; 
}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import CarService from '../../service/CarService';
import DataTableSubMenu from './DataTableSubMenu';

export default {
    data() {
        return {
            columns: null,
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
    methods: {
        rowClass(data) {
            return data.color === 'Orange' ? 'orange-car': null;
        }
    },
    components: {
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style scoped lang="scss">
.year-cell {
    padding: 0.429em 0.857em;

    &.old-car {
        background-color: #41b783;
        font-weight: 700;
        color: #ffffff;
    }
}

/deep/ .orange-car {
    background-color: #344b5f !important;
    color: #ffffff !important; 
}
</style>