Vue.createApp({
  data() {
    return {
      nyuryokugaku: 0,
      zandaka: 0,
      logs: [],
    }
  },
  computed: {
    activateSubmit() {
      if (this.zandaka == "") {
        return true
      } else if (this.zandaka >= "" && this.zandaka < this.nyuryokugaku) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    nyukin: function () {
      this.zandaka += Number(this.nyuryokugaku)

      this.logs.push({
        date: new Date(),
        type: "入金",
        money: this.nyuryokugaku,
      })
      this.nyuryokugaku = 0
    },
    syukkin: function () {
      this.zandaka -= Number(this.nyuryokugaku)

      this.logs.push({
        date: new Date(),
        type: "出金",
        money: this.nyuryokugaku,
      })
      this.nyuryokugaku = 0
    },
  },
}).mount("#app")
