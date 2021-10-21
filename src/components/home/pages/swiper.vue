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
            swiperList:[
                {
                    id:'01',
                    imgUrl:require("@/assets/1.jpg")
                },{
                     id:'02',
                    imgUrl:require("@/assets/2.jpg")
                },{
                     id:'03',
                    imgUrl:require("@/assets/3.jpg")
                },{
                     id:'04',
                    imgUrl:require("@/assets/4.jpeg")
                },{
                     id:'05',
                    imgUrl:require("@/assets/5.jpg")
                },{
                     id:'06',
                    imgUrl:require("@/assets/6.jpg")
                }
            ],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },loop:true
        }
    }
}}
</script>
<style scoped>
.header-swiper{
    width: 100%;
    height: 2rem;
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
