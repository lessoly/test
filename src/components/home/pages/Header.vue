<template>
<div class="header">
    <div class="header-left">
        <span class="iconfont">&#xe8b5;</span>
    </div>
    <div class="header-search">
        <span class="iconfont">&#xeafe;</span>
        输出城市/景点/游玩主题
    </div>
    <div class="header-right">
        <router-link to='/city'>{{this.city}}<span class="iconfont">&#xe62b;</span></router-link>
    </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default{
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style scoped lang='stylus'>
@import '~@/css/var.styl'
.header{
    width: 100%;
    line-height: .88rem;
    background-color: $bgColor;
    color:$textColor;
    font-size: .36rem;
    display: flex;
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
.header-search{
    flex:1;
    background-color: #fff;
    height: .6rem;
    line-height: .6rem;
    margin: .15rem;
    border-radius: .1rem;
    color:#e4e7ea;
    font-size: .28rem;
    padding-left: .2rem;
}
.header-right{
    font-size: .28rem;
    padding: 0 .2rem;
}
.header-right a{
    color: #fff
}
</style>