<template>
  <div class="home">
    hello
    <MainHeader></MainHeader>
    <MyCard></MyCard>
  </div>
</template>

<script>
import MyCard from "../components/MyCard.vue";
import MainHeader from "../components/MainHeader.vue";

import loading from "../mixins/loading.js";

export default {
  mixins: [loading],
  components: {
    MyCard,
    MainHeader,
  },
  beforeRouteEnter(to, from) {
        console.log('beforeRouteEnter')
        setTimeout(() => {
            document.getElementById('loading')?.classList.remove('--active');
        }, 1000)
    },
    beforeRouteLeave(to, from) {
        console.log('beforeRouteLeave')
        document.getElementById('loading')?.classList.add('--active');
    },
};
</script>

<style>
@import "@/assets/scss/style.scss";
</style>
