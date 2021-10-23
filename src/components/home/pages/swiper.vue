<template>
    <div class="header-swiper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<!--记住了一定要使用3版本
npm install vue-awesome-swiper@3 --save-dev
-->
<script>
export default{
    data(){
        return{
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },loop:true
        }
    }
},
    props:["swiperList"]}
</script>
<style scoped>
.header-swiper{
    width: 100%;
    height: 0;
    background-color: #ccc;
    padding-bottom: 26.67%;
}
img{
    width: 100%;
    height: 2rem;
}
.header-swiper>>> .swiper-pagination-bullet-active{
    background-color: #fff;
}
</style>
<!--穿透符号 >>>-->
