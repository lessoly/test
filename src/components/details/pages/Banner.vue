<template>
    <div class="banner">
        <div class="top" @click="showSwiper">
            <div class="banner-img">
                <img src="https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg">
            </div>
            <div class="banner-title">
                金海湖风景区(AAAA景区)
            </div>
        </div>
        <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="item in bannerList" :key="item.id">
                    <img :src="item.imgUrl">
                </swiper-slide>
                
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            imgSwiper:false,
            bannerList:[
                {
                    "id":"01",
                    "imgUrl":"https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg"
                },{
                    "id":"02",
                    "imgUrl":"https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg"
                },{
                    "id":"03",
                    "imgUrl":"https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg"
                }
            ],swiperOptions:{
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                    type:"fraction"
                },loop:true
            }
        }
    },
    methods:{
        showSwiper(){
            this.imgSwiper=true
        },
        hideSwiper(){
            this.imgSwiper=false
        }
    }
}
</script>
<style scoped>
.banner{
    position: relative;
}
.banner-img{
    width: 100%;
    overflow: hidden;
    padding-bottom: 55%;
    height: 0;
}
.banner-img img{
    width: 100%;
}
.banner-title{
    position: absolute;
    bottom: .4rem;
    left:.3rem;
    font-size: .36rem;
    color: #000;
}
.img-swiper{
    background-color: #000;
    position: fixed;
    top:0;
    bottom: 0;
    left:0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-swiper img{
    width: 100%;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    color: white;
    bottom: .6rem;
    font-size: .36rem;
}
</style>