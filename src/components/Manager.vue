<template>
  <div id="manager" class="d-flex flex-column h-100">
    <div class="text-center h1 mt-3">Manager's page</div>
    <header class="position-absolute top-0 start-0">
      <RouterLink to="/"><i class="bi bi-arrow-left"></i> Dashboard</RouterLink>
    </header>

    <div class="row">
      <div class="col col-10">
      </div>
      <div class="col col-2">
        <a href="/manager/table/reserve" class="btn btn-info">Reserve table</a>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col col-6">
        <div>
          <ReservedTables />
        </div>
      </div>
      <div class="col col-6">
        <div>
          <FreeTables />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FreeTables from './manager/FreeTables.vue';
import ReservedTables from './manager/ReservedTables.vue';

export default {
  name: "Manager",
  components: {
    FreeTables,
    ReservedTables,
  },
};
</script>

<style scoped>
</style>