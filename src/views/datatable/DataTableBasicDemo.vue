<template>
  <div class="p-grid">
    <div class="p-col-12">
      <h1 style="text-align: center">Funds</h1>
      <Button label="Add" icon="pi pi-plus" @click="addFund" />
      <DataTable :value="funds">
        <Column field="title" headerStyle="width: 30%">
          <template #header> Subject </template>
          <template #body="slotProps">
            <Textarea style="width: 100%; margin-top: 5px; margin-bottom: 5px" v-model="slotProps.data.title" :autoResize="true" rows="5"/>
          </template>
        </Column>
        <Column headerStyle="width: 10%" bodyStyle="text-align: center">
          <template #header> Period </template>
          <template #body="slotProps">
            <InputText v-model="text" placeholder="text" />
            <InputNumber v-model="num" placeholder="number" />
            <InputMask style="width: 100px" mask="9999-99-99" v-model="slotProps.data.start" placeholder="start date"/>
            <div style="text-align: center">to</div>
            <InputMask style="width: 100px" mask="9999-99-99" v-model="slotProps.data.end" placeholder="end date"/>
          </template>
        </Column>
        <Column field="amount" headerStyle="width: 10%">
          <template #header> amount </template>
          <template #body="slotProps">
            <InputText style="width: 100px" type="text" v-model.number="slotProps.data.amount"/>
          </template>
        </Column>
        <Column headerStyle="width: 5%" bodyStyle="text-align: center">
          <template #header>
            <i class="pi pi-cog" style="font-size: 1.5em"></i>
          </template>
          <template #body="slotProps">
            <i class="fa fa-minus-circle" @click="removeFund(slotProps.index)" style="font-size: 1.75em; color: red"></i>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funds: [],
      num: null,
      text: null
    };
  },
  methods: {
    addFund() {
      this.funds.push({});
    },
    removeFund(index) {
      this.funds.splice(index, 1);
    },
  },
};
</script>