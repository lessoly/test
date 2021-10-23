<template>
    <div class="home">
        <Header></Header>
        <Swiper :swiperList="swiperList"></Swiper>
        <Icons :iconsList="iconsList"></Icons>
        <Location></Location>
        <Activity></Activity>
        <Hot :HotList="HotList"></Hot>
        <like :LikeList="LikeList"></like>
        <Vacation :VacationList="VacationList"></Vacation>
    </div>
</template>
<script>
import Header from './pages/Header.vue'
import Swiper from './pages/swiper'
import Icons from './pages/Icons.vue';
import Location from './pages/Location.vue';
import Activity from './pages/Activity.vue'
import Hot from './pages/Hot.vue'
import Like from './pages/Like.vue';
import Vacation from './pages/Vacation.vue';
export default{
    components:{
        Header,Swiper,Icons,
        Location,Activity,Hot,Like,
        Vacation
    },
    mounted(){
        this.$http.get("/api/HomeData.json").then(res=>{
            console.log(res.data.data);
            const data=res.data.data[0];
            this.swiperList=data.swiperList;
            this.LikeList=data.LikeList;
            this.HotList=data.HotList;
            this.VacationList=data.VacationList
            this.iconsList=data.iconsList
        })
    },
    data(){
        return{
            swiperList:[],
            LikeList:[],
            VacationList:[],
            HotList:[],
            iconsList:[]
        }
    }
}
</script>
<style scoped>
.home{
    background-color: #f5f5f5;
    width:100%
}
</style>