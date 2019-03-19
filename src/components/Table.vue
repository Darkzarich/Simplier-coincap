<template>
  <div class="row justify-content-md-center">
    <b-table responsive dark hover :items="items" :fields="fields" class="scroll col-md-8 my-3">
    </b-table>
  </div>
</template>

<script>
import axios from 'axios';
import numeral from 'numeral';

export default {
  name: 'Table',
  data() {
    return {
      fields: {
        name: { label: 'Name', sortable: true },
        priceUsd: { label: 'Price', sortable: true, formatter: 'formatCurrency' },
        marketCapUsd: { label: 'Market Cap', sortable: true, formatter: 'formatCurrency' },
        volumeUsd24Hr: { label: 'Volume (24h)', sortable: true, formatter: 'formatCurrency' },
      },
      items: [],
    };
  },
  async created() {
    const { data } = await axios.get('https://api.coincap.io/v2/assets?limit=15');
    this.items = data.data;
  },
  methods: {
    formatCurrency(value) {
      return numeral(value).format('($0.00a)');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.scroll {
  overflow: scroll !important;
}
</style>
