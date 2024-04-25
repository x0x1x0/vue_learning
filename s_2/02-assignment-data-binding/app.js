const app = Vue.createApp({
  data() {
    return {
      name: "Jan",
      age: 26,
      imageUrl:
        "https://play-lh.googleusercontent.com/phUhJzNvyZTpbUhQmN3oaj0bHL0pQ_tOeBLjlF_l9z8qK7zogZbYO0ttd3jTGTHdAQ",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },

    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
