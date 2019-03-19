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
  background: var(--dark);
}

@media (min-width: 768px) {
  .bg {
    background: url("https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2017/11/09095924/cryptocurrency-cannabis.jpg") fixed;
    background-size: cover;
  }
}
@media (min-width: 768px) {
  .vh-100 {
    height: 100vh;
  }
}

.no-scroll {
    overflow: hidden;
}
</style>
