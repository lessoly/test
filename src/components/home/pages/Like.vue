<template>
    <div class="like">
        <div class="like-top">
            <img src="@/assets/jingdian1.jpg">
            猜你喜欢
        </div>
        <ul class="like-list">
            <li class="like-item border-bottom" v-for="item in LikeList" :key="item.id" @click="toDetails">
                <div class="item-left">
                    <img :src="item.imgSrc">
                </div>
                <div class="item-right">
                    <div class="item-title">{{item.site}}</div>
                    <div class="item-pinglun">{{item.introduction}}</div>
                    <div class="star">{{item.judge}}</div>
                    <div class="item-price">
                        <span><b class="item-mark">{{item.price}}</b>起</span>
                        <span class="item-price-right">{{item.location}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return{
        }
    },
    methods:{
        toDetails(){
            this.$router.push('/detail')
        }
    },
    props:["LikeList"]
}
</script>
<style scoped>
.like{
    margin-top: .2rem;
    font-size: .28rem;
    background-color: white;
    padding: 0 .2rem;
}
.like-top{
    font-size: .32rem;
    font-weight: bolder;
    color: #212121;
    padding: .2rem 0;
}
.like-top img{
    width: .3rem;
    height: .3rem;
}
.like-item{
    display: flex;
    position: relative;
    padding: .2rem 0;
}
.like-item img{
    width: 3rem;
    height: 3rem;
}
.item-right{
    flex:1;
    padding-left: .4rem;
    position: relative;
}
.item-right div{
    font-size: .36rem;
    margin-top: .5rem;
    color: #212121;
    font-weight: 600;
}
.item-right .item-title{
    /* font-size: .36rem;
    margin-top: .4rem;
    color: #212121; */
    margin-top: .3rem;
}
.item-right .item-pinglun{
    font-size: .24rem;
    color: #616161;
}
.item-right .item-mark{
    color: #ff8300;
    font-size: .50rem;
}
.item-price-right{
    position: absolute;
    right: 0;
    bottom: 0;
}
.like-list .item-right .star{
    color: #ff8300;
}
</style>