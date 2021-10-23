<template>
    <div class="header">
        <router-link to='/'>
            <div class="header-left"><span class="iconfont">&#xe8b5;</span></div>
        </router-link>
        <div class="header-title">
            城市选择
        </div>
    </div>
</template>
<script>
export default{
    name:'Header'
}
</script>
<style scoped lang='stylus'>
@import '~@/css/var.styl'
.header{
    width: 100%;
    line-height: .88rem;
    background-color: $bgColor;
    color:$textColor;
    font-size: .32rem;
    position:relative
}
.header a{
    color: #fff
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
    touch-action: none
}
.header-title{
    position: absolute;
    top:0
    left:40%
    text-align: center
}
</style>