<template>
  <div id="manager" class="d-flex flex-column h-100">
    <div class="text-center h1 mt-3">Manager's page</div>
    <header class="position-absolute top-0 start-0">
      <RouterLink to="/"><i class="bi bi-arrow-left"></i> Dashboard</RouterLink>
    </header>
    <div class="row">
      <div class="col col-6">
        <div>
          <ReservedTables />
        </div>
      </div>
      <div class="col col-6">
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReservedTables from './manager/ReservedTables.vue';

export default {
  name: "Manager",
  components: {
    ReservedTables,
  },
};
</script>

<style scoped>
</style>