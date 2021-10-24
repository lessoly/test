<template>
    <div class="icons">
        <swiper :options='swiperOptions'>
            <swiper-slide v-for="outitem in pages" :key="outitem.index">
                <div class="icon-items" v-for="item in outitem" :key="item.id">
                    <img :src="item.imgSrc">
                    <p>{{item.info}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default{
        props:["iconsList"],
        data(){
            return{
                swiperOptions: {
            //    pagination: {
            //         el: '.swiper-pagination',
            //     }
        }
            }
        },
        computed:{
            pages:function(){
                let page=[];
                this.iconsList.forEach((item,index) => {
                    let idx=Math.floor(index/8);
                    if(!page[idx])page[idx]=[];
                    page[idx].push(item)
                });
                // console.log(page)
                return page;
            }
        }
    }
</script>
<style scoped lang='stylus'>
@import '~css/common.styl'
.icons{
    background-color: white;
}
.icon-items{
    width:25%;
    padding-bottom: 25%;
    /* background-color: #fff; */
    height: 0rem;
    float: left;
}
.icon-items img{
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    display: block;
    padding-top: .2rem;
}
.icon-items p{
    font-size: .28rem;
    text-align: center;
    color: #212121;
    margin-top: .1rem;
    textOverFlow();
}
</style>