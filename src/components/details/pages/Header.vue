<template>
    <div class="header">
        <div class="header-return" v-show="showHeader">
            <span class="return"></span>
            <span class="iconfont" @click="returnHome">&#xe8b5;</span>
        </div>
        <div class="header-top" v-show="!showHeader" :style="styleOpacity">
             <div class="header-left">
                <span class="iconfont" @click="returnHome">&#xe8b5;</span>
            </div>
            <div class="header-search">
                北京国际鲜花港
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            showHeader:true,
            styleOpacity:{
                opacity:0
            }
        }
    },
    mounted(){
        let that=this;
        window.addEventListener("scroll",function(){
            // console.log(1)
           let top=document.documentElement.scrollTop
            if(top>45){
                let opacity=top/130
                opacity=opacity>1?1:opacity
                that.showHeader=false;
                that.styleOpacity.opacity=opacity
            }else{
                that.showHeader=true
            }
        })
    },
    methods:{
        returnHome(){
            this.$router.push('/')
        }
    }
}
</script>
<style scoped lang='stylus'>
@import '~@/css/var.styl'
.header-return{
    position: absolute;
    left: .1rem;
    top:.1rem;
    width: .72rem;
    height: .72rem;
}
.return{
    display: block;
    width: .72rem;
    height: .72rem;
    background-color: #000;
    border-radius: 50%;
    opacity: .5;
}
.iconfont{
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .24rem;
    font-weight: bold;
}
.header-top{
    position: fixed
    top:0
    width: 100%;
    line-height: .88rem;
    background-color: $bgColor;
    color:$textColor;
    font-size: .36rem;
    z-index:99
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
.header-search{
    text-align: center
}
</style>