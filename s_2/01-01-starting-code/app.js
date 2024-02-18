const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "testgoal",
      courseGoalB: "asdasdasd",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
}).mount("#user-goal");
