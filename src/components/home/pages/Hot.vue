<template>
    <div class="hot">
        <div class="hot-top">
            <img src="@/assets/jingdian1.jpg">
            <span>本周热门榜单</span>
            <span class="hot-top-right">全部榜单    ></span>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in HotList" :key="item.id">
                <img :src="item.imgSrc">
                <p>{{item.location}}</p>
                <p>{{item.time}}</p>
                <p><span class="hot-mark">{{item.price}}</span>起</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    props:["HotList"],
    data(){
        return{
        }
    }
}
</script>
<style scoped lang='stylus'>
@import '~css/common.styl'
.hot{
    margin-top: .2rem;
    width: 100%;
    background-color: white;
    font-size: .28rem;
}
.hot-top{
    /* display: flex; */
    width: 100%;
    padding: 10px;
    position: relative;
}
.hot-top span{
    color: #212121;
    font-size: .32rem;
    font-weight: bolder;
}
.hot-top img{
    width: .3rem;
    height: .3rem;
}
.hot-top .hot-top-right{
    position: absolute;
    right: .2rem;
    color: #616161;
    font-weight: normal;
}
.hot-list{
    /* display: flex; */
    overflow-x: scroll;
    overflow-y:hidden;
    white-space: nowrap;
    padding-bottom: .2rem;
}
.hot-item{
    width: 2.5rem;
    height: 2.2rem;
    padding: .2rem;
    display: inline-block;
}
.hot-item img{
    width: 100%
}
.hot-item p{
    text-align: center;
    margin-top: .1rem;
    textOverFlow()
}
.hot-item .hot-mark{
    color: #ff8300;
    font-size: .32rem;
}
</style>