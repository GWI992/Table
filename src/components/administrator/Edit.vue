<template>
<div>
  <div class="text-center h1 mt-3">Edit table</div>
  <header class="position-absolute top-0 start-0">
    <RouterLink to="/administrator"><i class="bi bi-arrow-left"></i> Administrator main page</RouterLink>
  </header>
  <div class="row" v-if="loading">
    <div class="row">ID: <input type="text" name="id" v-model="table.id" /></div>
    <div class="row">Name: <input type="text" name="name" v-model="table.name" /></div>
    <div class="row">Capacity: <input type="numeric" name="capacity" v-model="table.capacity" /></div>
    <div class="row">&nbsp;</div>
    <button class="btn btn-success" @click="postData()">Save</button>
  </div>
  <div v-else>
    <div class="alert alert-info">Loading...</div>
  </div>
  <div v-if="error">
    <div class="alert alert-danger">Loading failed</div>
  </div>
</div>
</template>

<script>
import API from "@/api/api"

export default {
  name: "Create",
  data() {
    return {
      loading: true,
      error: false,
      table: {
        id: "",
        name: "",
        capacity: 1
      },
    };
  },
  mounted() {
    this.fetchData(this.$route.params.id)
  },
  methods: {
    async fetchData(tableName) {
      let data = await API.post("/table/getbyname/" + tableName);
      this.table = (data == undefined) ? [] : data;
      this.error = data.id == undefined;
      this.loading = false;
    },
    async postData() {
      let data = await API.post("/table/admin/modify", this.table);
      this.availableTables = (data == undefined) ? [] : data;
    },
  },
};
</script>

<style scoped>
</style>