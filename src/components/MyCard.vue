<template>
<section class="wrap_card">
    <div class="container">
        <div class="card_item">
            <div class="card_item_part">
                <div class="name">Maru Chen</div>
                <hr>
                <div class="title">Front-end developer</div>
                <div class="sub_title">beginner<span> | </span>aka 一隻菜雞</div>
            </div>
            <div class="skills">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968509.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968550.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/721/721790.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/4926/4926624.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/8297/8297959.png" alt="" class="icon">
                <img src="https://img.icons8.com/color/344/vue-js.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/919/919826.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968313.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="" class="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/552/552222.png" alt="" class="icon">
            </div>
            <div class="card_item_part">
                <div class="email">maruchen77@gmail.com</div>
            </div>
            <div class="card_back"></div>
        </div>
    </div>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
    <div class="circle5"></div>
    <div class="circle6"></div>
    <div class="circle7"></div>
    <div class="circle8"></div>
</section>

</template>
<script>
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

@mixin card_style{
        width: 300px;
        height: 400px;
        padding: 2rem;
        border-radius: 10px;
    }
@mixin circle($w,$h,$bg,$border,$opacity){
    width: $w;
    height: $h;
    background-color: $bg;
    border: $border;
    opacity: $opacity;
    position: absolute;
    border-radius: 100%;
}
    .wrap_card{
        background: #C9EBEA;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
        @include md(){
            width: 100%;
        }
        .container{
            display: flex;
            justify-content: center;
            // flex-direction: column;
            transform: translateY(200px);
        }
    }
    .card_item{
        @include card_style;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        z-index: 5;
        @include tb(){
            width: 300px;
        }
        &:hover .card_back{
            transform: translateX(-1.5rem) translateY(-1.5rem);
            transition: .8s .5s ease-in;
        }
    }
    .card_item_part{
        .name{
        font-size: 2rem;
    }
        > div{
            font-size: 20px;
        }
    }
    .skills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .icon{
            width: 40px;
            height: 40px;
            padding: 0.5rem;
        }
    }
    .card_back{
        @include card_style;
        background-color: rgb(255,255,255,.5);
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        z-index: -1;
    }
    .circle1 {
        @include circle(400px,400px,white,0,0.3);
        position: absolute;
        border-radius: 100%;
        bottom: 54px;
        left: -255px;
        animation: circle-ani1 10s infinite linear;
    }

    .circle2 {
        @include circle(120px,120px,white,0,0.5);
        position: absolute;
        border-radius: 100%;
        bottom: 214px;
        left: -69px;
        animation: circle-ani2 10s infinite linear;
    }

    .circle3 {
        @include circle(30px,30px,white,0,0.6);
        position: absolute;
        border-radius: 100%;
        top: 183px;
        left: 78px;
        animation: circle-ani3 10s infinite linear;
    }

    .circle4 {
        @include circle(220px,220px,transparent,solid 2px white,0.6);
        position: absolute;
        border-radius: 100%;
        bottom: 100px;
        left: -5px;
        animation: circle-ani3 10s infinite linear;
    }

    .circle5 {
        @include circle (50px,50px,white,0,0.5);
        position: absolute;
        border-radius: 100%;
        bottom: 30px;
        left: 298px;
        animation: circle-ani2 10s infinite linear;
    }

    .circle6 {
        @include circle (300px,300px,transparent,solid 2px white,0.6);
        position: absolute;
        border-radius: 100%;
        top: -150px;
        right: -80px;
        animation: circle-ani3 10s infinite linear;
    }

    .circle7 {
        @include circle(165px,165px,white,0,0.45);
        position: absolute;
        border-radius: 100%;
        top: 71px;
        right: -106px;
        animation: circle-ani1 10s infinite linear;
    }

    .circle8 {
        width: 20px;
        height: 20px;
        background-color: white;
        border: 0;
        opacity: 0.7;
        position: absolute;
        border-radius: 100%;
        top: 183px;
        right: 78px;
        animation: circle-ani2 10s infinite linear;
    }
    @keyframes circle-ani1 {
        0% {
            transform: translateX(0px) translateY(0px);
        }
        20% {
            transform: translateX(20px) translateY(-10px);
        }
        40% {
            transform: translateX(-10px) translateY(-30px);
        }
        60% {
            transform: translateX(-20px) translateY(-10px);
        }
        80% {
            transform: translateX(10px) translateY(10px);
        }
        100% {
            transform: translateX(0px) translateY(0px);
        }
    }
    @keyframes circle-ani2 {
        0% {
            transform: translateX(20px) translateY(0px);
        }
        20% {
            transform: translateX(-10px) translateY(20px);
        }
        40% {
            transform: translateX(0px) translateY(-10px);
        }
        60% {
            transform: translateX(20px) translateY(0px);
        }
        80% {
            transform: translateX(-10px) translateY(20px);
        }
        100% {
            transform: translateX(20px) translateY(0px);
        }
    }
    @keyframes circle-ani3 {
        0% {
            transform: translateX(-30px) translateY(10px);
        }
        20% {
            transform: translateX(-10px) translateY(0px);
        }
        40% {
            transform: translateX(0px) translateY(-20px);
        }
        60% {
            transform: translateX(20px) translateY(10px);
        }
        80% {
            transform: translateX(15px) translateY(-20px);
        }
        100% {
            transform: translateX(-30px) translateY(10px);
        }
    }
</style>
