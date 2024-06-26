const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      return this.counter + num;
    },
    reduce(num) {
      return this.counter - num;
    },
  },
});

app.mount("#events");
