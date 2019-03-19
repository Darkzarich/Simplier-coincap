<template>
  <div class="row justify-content-md-center">
    <b-table responsive dark hover :items="items" :fields="fields"
             class="scroll col-12 col-md-8 my-md-3">
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
        marketCapUsd: {
          label: 'Market Cap',
          sortable: true,
          formatter: 'formatCurrency',
          class: 'd-none d-md-table-cell',
        },
        volumeUsd24Hr: {
          label: 'Volume (24h)',
          sortable: true,
          formatter: 'formatCurrency',
          class: 'd-none d-md-table-cell',
        },
      },
      items: [],
    };
  },
  async created() {
    const { data } = await axios.get('https://api.coincap.io/v2/assets?limit=15');
    this.items = data.data;

    let coinTitles = '';
    this.items.forEach((item) => {
      coinTitles += `${item.id},`;
    });
    coinTitles = coinTitles.slice(0, -1);

    const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${coinTitles}`);
    pricesWs.onmessage = (msg) => {
      const changes = JSON.parse(msg.data);
      for (let i = 0; i < this.items.length; i += 1) {
        /* eslint-disable no-restricted-syntax */
        for (const key in changes) {
          if (this.items[i].id === key) {
            this.items[i].priceUsd = changes[key];
          }
        }
      }
    };
  },
  methods: {
    formatCurrency(value) {
      if (Math.max(Math.floor(Math.log10(Math.abs(value)), 0) + 1 === 4)) {
        return numeral(value).format('$0,0.00');
      }
      return numeral(value).format('($0.00a)');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .scroll {
    overflow-y: scroll;
  }

  @media (min-width: 768px) {
    .scroll {
      overflow: hidden;
      height: 75vh;
    }

    .scroll:hover {
      overflow-y: overlay !important;
    }
  }

::-webkit-scrollbar {
  height: 100px;
}
/* Track */
::-webkit-scrollbar-track {
  background: var(--gray-dark);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
