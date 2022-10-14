<template>
  <div class="container_all">
    <div class="main_nav">
      <MainHeader></MainHeader>
    </div>
    <div class="wrapper">
      <header class="header">
        <div class="header_name_wrapper">
          <div class="header_divider"></div>
          <div class="header_name">
            <p>Maru<br /><span>Chen</span></p>
          </div>
          <div class="header_divider"></div>
        </div>
        <div class="banner">
          <div class="spining_icon"></div>
          <div class="word_line_group">
            <h1 class="word word_line_1">
              <span class="char">F</span>
              <span class="char">R</span>
              <span class="char">O</span>
              <span class="char">N</span>
              <span class="char">T</span>
              <span class="char">E</span>
              <span class="char">N</span>
              <span class="char">D</span>
            </h1>
            <br />
            <h1 class="word word_line_2">
              <span class="char">W</span>
              <span class="char">E</span>
              <span class="char">B</span>
              <span class="char">S</span>
              <span class="char">I</span>
              <span class="char">T</span>
              <span class="char">E</span>
            </h1>
            <br />
            <h1 class="word word_line_3">
              <span class="char">&</span>
              <span class="char">D</span>
              <span class="char">E</span>
              <span class="char">V</span>
              <!-- <span class="char">E</span>
            <span class="char">L</span>
            <span class="char">O</span>
            <span class="char">P</span>
            <span class="char">E</span>
            <span class="char">R</span> -->
            </h1>
          </div>
          <div class="banner_footer_wrapper">
            <a href="mailto:maru@77yen.com">
              <div class="banner_footer_contact">
                <div class="banner_plane_wrapper">
                  <img src="../image/paper-plane-regular.svg" alt="" />
                </div>
                <!-- <div class="banner_footer_divider"></div> -->
                <div class="banner_footer_text">
                  <p>contact</p>
                </div>
              </div>
            </a>
            <div class="banner_footer_scroll_wrapper">
              <div class="banner_footer_scroll_text">
                <p>scroll</p>
                <div class="arrow_icon_wrapper">
                  <img
                    class="moving_arrow"
                    src="../image/arrow-down-solid.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="section_intro">
        <div class="rotate_img_wrapper">
          <img src="../image/rotate_word.png" alt="" />
        </div>
        <div class="intro_wrapper">
          <div class="intro_pic_wrapper">
            <img src="../image/cat-1.jpg" alt="" />
          </div>
          <div class="intro_content">
            <h2 class="intro_title">
              Passion, dedication, and a lot of coffee.
            </h2>
            <div class="intro_text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              officiis dolore aut aliquid reprehenderit et modi obcaecati, iste
              beatae totam? Quibusdam aut totam provident possimus commodi earum
              nobis laborum aliquid.
            </div>
          </div>
        </div>
      </section>
      <section class="recent_work_wrapper">
        <h2>Recent Work</h2>
        <div class="work_wrapper">
          <a href="https://smilemaru.github.io/09_project/index.html" target="_blank">
            <h3>Project：<span>SmileTalk</span></h3>
          </a>
        </div>
      </section>
    </div>
    <section class="skills_wrapper">
      <h2>Skills</h2>
      <div class="marquee_container">
        <div class="marquee">
        <div class="marquee_text">
          <div>
            HTML/CSS • Figma • JavaScript • Git • UI/UX • GSAP • Three.js •
            MySQL • PHP • Vue • Ajax • Adobe Illustrator • Photoshop • HTML/CSS
            • Figma • JavaScript • Git • UI/UX • GSAP • Three.js
          </div>
        </div>
      </div>
      <div class="marquee_clone">
        <div class="marquee_text2">
          <div>
            HTML/CSS • Figma • JavaScript • Git • UI/UX • GSAP • Three.js •
            MySQL • PHP • Vue • Ajax • Adobe Illustrator • Photoshop • HTML/CSS
            • Figma • JavaScript • Git • UI/UX • GSAP • Three.js
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
  <Cursor></Cursor>
</template>
<script>
import gsap from "gsap";
import Cursor from "@/components/Cursor.vue";
import MainHeader from "@/components/MainHeader.vue";

export default {
  components: { Cursor, MainHeader },
  mounted() {
    const moving_arrow = document.querySelector(".moving_arrow");
    const animation = document.querySelector(".char");

    gsap.from(".moving_arrow", {
      autoAlpha: 0,
      y: -30,
      ease: "power4",
      duration: 2,
      stagger: 0.2,
      repeatdelay: 0.7,
      repeat: -1,
    });

    gsap.from(".char", {
      autoAlpha: 0,
      y: -30,
      ease: "bounce",
      duration: 4,
      stagger: 0.3,
      repeatdelay: 1,
      repeat: 1,
    });
  },
  beforeRouteEnter(to, from) {
    console.log("beforeRouteEnter");
    setTimeout(() => {
      document.getElementById("loading")?.classList.remove("--active");
    }, 1000);
  },
  beforeRouteLeave(to, from) {
    console.log("beforeRouteLeave");
    document.getElementById("loading")?.classList.add("--active");
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
@import "@/assets/scss/intro.scss";
</style>