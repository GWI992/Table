<template>
  <h2>Not Available tables</h2>
  <div id="available-tables" class="d-flex flex-column h-100"></div>
  <table class="table table-dark" v-if="notAvailableTables.length">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Capacity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active" v-for="table in notAvailableTables" :key="table.id">
        <td>{{ table.id }}</td>
        <td>{{ table.name }}</td>
        <td>{{ table.capacity }}</td>
        <td scope="col">
          <button type="submit" class="btn btn-sm btn-success mb-3" v-on:click="enable(table)">Enable</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else class="my-2 alert alert-info" role="alert">
    <div>All tables are available</div>
  </div>
</template>

<script>
import API from "@/api/api"

export default {
  name: "NotAvailableTables",
  data() {
    return {
      mainId: "available-tables",
      notAvailableTables: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await API.get("/table/admin/getAvailableTables");
      this.notAvailableTables = (data == undefined) ? [] : data;
    },
    async enable(table) {
      let data = await API.put('/table/admin/enable/' + table.name);
      setTimeout(() => {this.$router.go(0)}, 2000);
    }
  },
};
</script>

<style scoped>
</style>