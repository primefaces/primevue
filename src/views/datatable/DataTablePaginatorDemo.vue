<template>
  <div id="app">
    <InputText v-model="filters.global" type="search" placeholder="type"></InputText>
    <p v-if="bug">pagination will NOT work</p>
    <p v-else>pagination will work</p>
    <Button type="button" @click="clear">clear filter</Button>
    <DataTable class="p-datatable-striped p-datatable-sm" :value="values" :paginator="true" :rows="8" :filters="filters">
      <Column v-for="column in ['id', 'title']" :key="column" :header="column" :field="column">
        <template #body="{ data }">{{ data[column] }}</template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
const values = [];

for (let id = 32; id--; ) {
  values.push({
    id,
    title: `Title ${id}`,
  });
}
export default {
  data() {
    return {
      filters: {},
      values,
    };
  },
  computed: {
    bug() {
        console.log(Object.keys(this.filters))
      return !!Object.keys(this.filters).length;
    },
  },
  methods: {
    clear() {
      this.filters = {};
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 4rem;
}
</style>