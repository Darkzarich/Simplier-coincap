<template>
  <div id="app" class="bg vh-100 no-scroll">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Simplier CainCap</a>
    </nav>
    <div class="container">
      <Table></Table>
    </div>
  </div>
</template>

<script>
import Table from './components/Table.vue';

export default {
  name: 'app',
  components: {
    Table,
  },
};
</script>

<style>
.bg {
  background: #272e34;
}

.no-scroll {
    overflow: hidden;
  }
</style>
