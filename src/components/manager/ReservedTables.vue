<template>
  <h2>Reserved tables</h2>
  <div id="reserved-tables" class="d-flex flex-column h-100"></div>

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

  <table class="table table-dark" v-if="reservedTables.length">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Begin</th>
        <th scope="col">End</th>
        <th scope="col">Person</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-reservations" v-for="reservation in reservedTables" :key="reservation.id">
        <td>{{ reservation.id }}</td>
        <td>{{ reservation.name }}</td>
        <td>{{ reservation.contact }}</td>
        <td>{{ reservation.begin }}</td>
        <td>{{ reservation.end }}</td>
        <td>{{ reservation.person }}</td>
      </tr>
      <tr>
        <td colspan="6">
          <p v-for="table in reservation.table" :key="table.id">
            ID: {{ table.id }} | Name: {{ table.name }} | Capacity: {{ table.capacity }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else class="my-2 alert alert-info" role="alert">
    <div>There is no reserved table</div>
  </div>
</template>

<script>
import API from "@/api/api"

export default {
  name: "ReservedTables",
  data() {
    return {
      mainId: "reserved-tables",
      filter: {
        from: "2021-12-03T10:15:30",
        to: "2021-12-03T10:15:30"
      },
      reservedTables: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await API.get("/table/reservation/get?start=" + this.filter.from + "&stop=" + this.filter.to);
      this.reservedTables = (data == undefined) ? [] : data;
    },
  },
};
</script>

<style scoped>
</style>