<template>
<!-- <MainHeader></MainHeader> -->

<div id="loading"></div>
<router-view/>

</template>

<script>
// const TL = gsap.timeline()
// TL
// .from('#loading', {autoAlpha: 0, y: -50, duration: 1})
// import MainHeader from "../components/MainHeader.vue";
// export default {
// components: {
//     MainHeader,
//   }
// }
</script>

<style lang="scss">
#loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: #C9EBEA;
    transform: translateY(100%);
    transition: transform 1s ease-in-out;
    z-index: 1000;
    &.--active {
        transform: translateY(0);
        // opacity: 0.7;
    }
}

</style>
