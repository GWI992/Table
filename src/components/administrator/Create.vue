<template>
<div>
  <div class="text-center h1 mt-3">Create table</div>
  <header class="position-absolute top-0 start-0">
    <RouterLink to="/administrator"><i class="bi bi-arrow-left"></i> Administrator main page</RouterLink>
  </header>
  <div class="row">
  <div class="row">ID: <input type="text" name="id" v-model="table.id" /></div>
  <div class="row">Name: <input type="text" name="name" v-model="table.name" /></div>
  <div class="row">Capacity: <input type="numeric" name="capacity" v-model="table.capacity" /></div>
  <div class="row">&nbsp;</div>
  <button class="btn btn-success" @click="postData()">Save</button>
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
      table: {
        id: "",
        name: "",
        capacity: 1
      },
    };
  },
  mounted() {
  },
  methods: {
    async postData() {
      let data = await API.post("/table/admin/add", this.table);
      this.availableTables = (data == undefined) ? [] : data;
    },
  },
};
</script>

<style scoped>
</style>