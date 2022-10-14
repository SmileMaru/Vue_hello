<template>
<MainHeader></MainHeader>
    <div class="container">
        <header class="header">
            <div class="logo"><h1>Maru <span>Shop</span></h1></div>
            <img src={{productList.id}} alt="">
            <div class="cart_banner"></div>
        </header>
        
        <section class="shop">
            <div class="item_cards">
                <div class="item">
                    <div class="item_pic">
                        <img src="../image/cat-1.jpg" alt="">
                    </div>
                    <div class="card_text">
                        <div class="title"><h3>Mario</h3></div>
                        <div class="content"><p>Smart, healthy, cute, six months, orange, female</p></div>
                    </div>
                    <hr>
                    <div class="price_info">
                        <div class="price">$ 1000</div>
                        <div class="like_icon">
                            <img src="../image/heart-regular.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_pic">
                        <img src="../image/cat-1.jpg" alt="">
                    </div>
                    <div class="card_text">
                        <div class="title"><h3>Mario</h3></div>
                        <div class="content"><p>Smart, healthy, cute, six months, orange, female</p></div>
                    </div>
                    <hr>
                    <div class="price_info">
                        <div class="price">$ 1000</div>
                        <div class="like_icon">
                            <img src="../image/heart-regular.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_pic">
                        <img src="../image/cat-1.jpg" alt="">
                    </div>
                    <div class="card_text">
                        <div class="title"><h3>Mario</h3></div>
                        <div class="content"><p>Smart, healthy, cute, six months, orange, female</p></div>
                    </div>
                    <hr>
                    <div class="price_info">
                        <div class="price">$ 1000</div>
                        <div class="like_icon">
                            <img src="../image/heart-regular.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_pic">
                        <img src="../image/cat-1.jpg" alt="">
                    </div>
                    <div class="card_text">
                        <div class="title"><h3>Mario</h3></div>
                        <div class="content"><p>Smart, healthy, cute, six months, orange, female</p></div>
                    </div>
                    <hr>
                    <div class="price_info">
                        <div class="price">$ 1000</div>
                        <div class="like_icon">
                            <img src="../image/heart-regular.svg" alt="">
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
    
</template>

<script>


export default {
    data() {
        return{
            productList: [
            {
                id: '1',
                title: '購物車',
                img: '../image/shopping-cart.png'
            }
            ],
        }
    },
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
    }
</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
@import "@/assets/scss/cart.scss";
</style>
