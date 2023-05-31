<template>
  <h2>Free tables</h2>
  <div id="free-tables" class="d-flex flex-column h-100"></div>

  <div class="row">
    <div class="col col-6 text-end">
      From:
    </div>
    <div class="col col-6">
      <input type="text" v-model="filter.from" class="form-control"/>
    </div>
    <div class="col col-6 text-end">
      To:
    </div>
    <div class="col col-6">
      <input type="text" v-model="filter.to" class="form-control"/>
    </div>
    <div class="col col-12">
      <button type="button" v-on:click="fetchData()" class="btn btn-primary btn-sm w-100 mt-1">Filter</button>
    </div>
  </div>

  <table class="table table-dark" v-if="freeTables.length">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Capacity</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active" v-for="table in freeTables" :key="table.id">
        <td>{{ table.id }}</td>
        <td>{{ table.name }}</td>
        <td>{{ table.capacity }}</td>
      </tr>
    </tbody>
  </table>
  <div v-else class="my-2 alert alert-info" role="alert">
    <div>There is no free table</div>
  </div>
</template>

<script>
import API from "@/api/api"

export default {
  name: "FreeTables",
  data() {
    return {
      mainId: "free-tables",
      filter: {
        from: "2021-12-03T10:15:30",
        to: "2021-12-03T10:15:30"
      },
      freeTables: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await API.get("table/reservation/free?start=" + this.filter.from + "&stop=" + this.filter.to);
      this.freeTables = (data == undefined) ? [] : data;
    },
  },
};
</script>

<style scoped>
</style>