<template>
    <div ref="container" class="container">
        <div>
            <div class="hot">
                <div class="hot-title">
                    热门城市
                </div>
                <ul class="hot-list">
                    <li class="hot-item border-bottom" @click="changeCityName(item.cityName)" v-for="item in hotCityList" :key="item.id">
                        {{item.cityName}}
                    </li>
                </ul>
            </div>
            <div class="sort">
        <div class="sort-title">
            字母排序
        </div>
        <ul class="sort-list">
            <li class="sort-item" @click="changeSort(item.key)" v-for="item in citys" :key="item.id">{{item.key}}</li>
        </ul>
            </div>
            <div class="list">
                <div v-for="item in cityList" :key="item.index" :ref="item.title">
                    <div class="list-title">{{item.title}}</div>
                    <ul class="list-list">
                        <li class="list-item border-bottom"  v-for="i in item.lists" :key="i.index" @click="changeCityName(i)">{{i}}</li>
                    </ul>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default{
    props:["cityList","hotCityList"],
    data(){
        return{
            scroll:'',
            citys:[
                {id:'01',key:'A'},
                {id:'02',key:'B'},
                {id:'03',key:'C'},
                {id:'04',key:'D'},
                {id:'05',key:'E'},
                {id:'06',key:'F'},
                {id:'07',key:'G'},
                {id:'08',key:'H'},
                {id:'09',key:'I'},
                {id:'10',key:'J'},
                {id:'11',key:'K'},
                {id:'12',key:'L'},
                {id:'13',key:'M'},
                {id:'14',key:'N'},
                {id:'15',key:'O'},
                {id:'16',key:'P'},
                {id:'17',key:'Q'},
                {id:'18',key:'R'},
                {id:'19',key:'S'},
                {id:'20',key:'T'},
                {id:'21',key:'U'},
                {id:'22',key:'V'},
                {id:'23',key:'W'},
                {id:'24',key:'X'},
                {id:'25',key:'Y'},
                {id:'26',key:'Z'}
                ]
        }
    },
    methods:{
        changeSort(sortName){
            // console.log(sortName)
            // console.log(this.$refs[sortName][0])
            this.scroll.scrollToElement(this.$refs[sortName][0])
        },
        changeCityName(cityName){
            this.changeCity(cityName)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted(){
        let container=this.$refs['container']
        //简直是踩了狗屎运，直接加了个observeDOM:true直接就能用了
        this.scroll=new BScroll(container,{ observeDOM: true,click: true })
    }
}
</script>
<style scoped lang='stylus'>
@import '~css/common.styl'
.container{
    overflow: hidden
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top:.8rem;
    background-color: #f5f5f5;
}
/**hot的style */
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
/**sort的style---------------------------- */
.sort-title{
    font-size: .24rem;
    color: #212121;
    padding: .2rem;
}
.sort-list{
    background-color: #fff;
    position: relative;
    overflow: hidden;
    color: #212121;
}
.sort-item{
    font-size: .36rem;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    float: left;
    width: 16.66%;
}
/**list的style */
.list-title{
    font-size: .24rem;
    color: #212121;
    padding: .2rem;
}
.list-list{
    background-color: #fff;
    position: relative;
    overflow: hidden;
    color: #212121;
}
.list-list:before{
    content: '';
    position: absolute;
    width: 25%;
    height: 100%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.list-list:after{
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    left: 75%;
    border-right: .02rem solid #ddd;
}
.list-item{
    font-size: .36rem;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    width: 25%;
    float: left;
    position: relative;
    textOverFlow()
}
</style>