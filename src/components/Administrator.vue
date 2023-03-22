<template>
  <div id="administrator" class="d-flex flex-column h-100">
    <div class="text-center h1 mt-3">Administrator's page</div>
    <header class="position-absolute top-0 start-0">
      <RouterLink to="/"><i class="bi bi-arrow-left"></i> Dashboard</RouterLink>
    </header>

    <AvailableTables />
    <NotAvailableTables />
  </div>
</template>

<script>
import AvailableTables from './administrator/AvailableTables.vue';
import NotAvailableTables from './administrator/NotAvailableTables.vue';

export default {
  name: "Administrator",
  components: {
    AvailableTables,
    NotAvailableTables,
  },
};
</script>

<style scoped>
</style>