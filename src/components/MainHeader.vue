<template>
  <header class="container_main_hd">
    <div class="menu_bar">
      <div class="burger">
        <img
          src="../image/menu.png"
          alt=""
          class="menu_icon"
          @click="switchBuger"
        />
      </div>
      <nav class="nav" v-if="open">
        <div class="nav_link">
          <div class="close_icon">
            <img @click="switchBuger" src="../image/close.png" alt="close" />
          </div>

          <ul>
            <router-link class="menu_link" to="/"><li class="menu_list">Intro</li></router-link>
            <router-link class="menu_link" to="/WebAPI"><li class="menu_list">WebAPI</li></router-link>
            <router-link class="menu_link" to="/ShoppingCart"><li class="menu_list">ShoppingCart</li></router-link>
            <router-link class="menu_link" to="/CardPractice"><li class="menu_list">Portfolio</li></router-link>
            <router-view />
            <router-link class="menu_link" to="/PopUp"><li class="menu_list">PopUp</li></router-link>
            <router-view />
            <router-link class="menu_link" to="/Typing"><li class="menu_list">Typing</li></router-link>
            <router-view />
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.container_main_hd {
  position: relative;
}
.burger{
  padding: 24px;
}
.menu_icon {
  padding: 0.5rem;
  width: 70px;
}
.nav {
  width: 300px;
  height: 90vh;
  background-color: $menu-bg-color;
  z-index: 100;
  position: absolute;
  top: 110px;
  left: -10px;
}
.close_icon {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  img {
    width: 40px;
  }
}
.menu_list{
    color: $menu-font-color;
}

</style>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    switchBuger() {
      this.open = !this.open;
    },
  },
};
</script>
