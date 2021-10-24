<template>
    <div class="hot">
        <div class="hot-title">
            热门城市
        </div>
        <ul class="hot-list">
            <li class="hot-item border-bottom" v-for="item in hotCityList" :key="item.id">
                {{item.cityName}}
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    props:["hotCityList"]
}
</script>
<style scoped>
.hot-title{
    font-size: .24rem;
    color: #212121;
    padding: .2rem;
}
.hot-list{
    background-color: #fff;
    position: relative;
    overflow: hidden;
    color: #212121;
}
.hot-list:before{
    content: '';
    position: absolute;
    width: 33.33%;
    height: 100%;
    left: 33.33%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.hot-item{
    font-size: .36rem;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    width: 33.333%;
    float: left;
    position: relative;
}
</style>