<template>
  <h2>Available tables</h2>
  <div id="available-tables" class="d-flex flex-column h-100"></div>
  <table class="table table-dark" v-if="availableTables.length">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Capacity</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active" v-for="table in availableTables" :key="table.id">
        <td>{{ table.id }}</td>
        <td>{{ table.name }}</td>
        <td>{{ table.capacity }}</td>
        <td scope="col">
          <RouterLink :to="{ path: '/administrator/table/edit/' + table.name}" title="Edit" class="btn btn-sm btn-secondary mb-3 ms-1"><i class="bi bi-pencil"></i></RouterLink>
          <button type="submit" class="btn btn-sm btn-warning mb-3 ms-1" v-on:click="disable(table)" title="Disable"><i class="bi bi-slash-circle"></i></button>
          <button type="submit" class="btn btn-sm btn-danger mb-3 ms-1" v-on:click="del(table)" title="Delete"><i class="bi bi-trash3"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else class="my-2 alert alert-info" role="alert">
    <div>There is no available table</div>
  </div>
</template>

<script>
import API from "@/api/api"

export default {
  name: "AvailableTables",
  data() {
    return {
      mainId: "available-tables",
      availableTables: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await API.get("/table/admin/getAvailableTables");
      this.availableTables = (data == undefined) ? [] : data;
    },
    async disable(table) {
      let data = await API.put('/table/admin/disable/' + table.name);
      setTimeout(() => {this.$router.go(0)}, 2000);
    },
    async del(table) {
      let data = await API.put('/table/admin/delete/' + table.name);
      setTimeout(() => {this.$router.go(0)}, 2000);
    }
  },
};
</script>

<style scoped>
</style>