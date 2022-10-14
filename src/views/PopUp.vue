<template>
  <button @click="checkOut">確認結帳</button>
  <Confirm v-if="confirmBox"></Confirm>
</template>
<script>
import Confirm from "../components/Confirm.vue";

export default {
  beforeRouteEnter(to, from) {
        console.log('beforeRouteEnter about')
        setTimeout(() => {
            document.getElementById('loading')?.classList.remove('--active');
        }, 1000)
    },
  beforeRouteLeave(to, from) {
        console.log('beforeRouteLeave about')
        document.getElementById('loading')?.classList.add('--active');
    },
  // mixins: [loading],
  data () {
    return {
      confirmBox: false,
    }
  },
  components: {
    Confirm
  },
  methods: {
    checkBox () {
      this.confirmBox = true
    }
  }
}
</script>