<template>
<div>
  <div class="text-center h1 mt-3">Reserve table</div>
  <header class="position-absolute top-0 start-0">
    <RouterLink to="/manager"><i class="bi bi-arrow-left"></i> Manager main page</RouterLink>
  </header>

  <div class="row">
    <div class="col col-3 text-end">
      From:
    </div>
    <div class="col col-3">
      <input type="text" v-model="filter.from" class="form-control"/>
    </div>
    <div class="col col-3 text-end">
      To:
    </div>
    <div class="col col-3">
      <input type="text" v-model="filter.to" class="form-control"/>
    </div>
    <div class="col col-12">
      <button type="button" v-on:click="fetchDataFreeTables()" class="btn btn-primary btn-sm w-100 mt-1">Filter free tables</button>
    </div>
  </div>
  <hr>
  <div class="row mt-3" v-if="freeTables.length > 0">
    <div class="row">ID: <input type="text" name="id" v-model="reservation.id" /></div>
    <div class="row">Name: <input type="text" name="name" v-model="reservation.name" /></div>
    <div class="row">Contact: <input type="text" name="contact" v-model="reservation.contact" /></div>
    <div class="row">Begin: <input type="text" name="begin" v-model="reservation.begin" /></div>
    <div class="row">End: <input type="text" name="end" v-model="reservation.end" /></div>
    <div class="row">Person: <input type="text" name="person" v-model="reservation.person" /></div>
    <div class="row">Table:
      <select v-model="reservation.table">
        <option v-for="table in freeTables" v-bind:key="table.id" value="table">
          {{ table.name }}
        </option>
      </select></div>
    <div class="row">&nbsp;</div>
    <button class="btn btn-success" @click="postData()">Reserve</button>
  </div>
  <div v-else>
    <div class="alert alert-warning">Free table not available</div>
  </div>
</div>
</template>

<script>
import API from "@/api/api"

export default {
  name: "Create",
  data() {
    return {
      mainId: "available-tables",
      filter: {
        from: "2021-12-03T10:15:30",
        to: "2021-12-03T10:15:30"
      },
      freeTables: [],
      reservation: {
        id: "",
        name: "",
        contact: "",
        begin: "",
        end: "",
        table: {
          id: "",
          name: "",
          capacity: "",
        },
        person: ""
      },
    };
  },
  mounted() {
    this.fetchDataFreeTables();
  },
  methods: {
    async fetchDataFreeTables() {
      let data = await API.get("table/reservation/free?start=" + this.filter.from + "&stop=" + this.filter.to);
      this.freeTables = (data == undefined) ? [] : data;
    },
    async postData() {
      let data = await API.post("/table/reservation/save", this.table);
      this.availableTables = (data == undefined) ? [] : data;
    },
  },
};
</script>

<style scoped>
</style>