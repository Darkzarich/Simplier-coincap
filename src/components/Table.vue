<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Table',
  data() {
    return {
      items: [],
    };
  },
  async created() {
    const { data } = await axios.get('https://api.coincap.io/v2/assets?limit=15');
    this.items = data.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
