<template>
    <div class="city">
        <Header></Header>
        <List :cityList="cityList" :hotCityList="hotCityList"></List>
    </div>
</template>
<script>
import Header from '../city/pages/Header.vue'
// import Hot from '../city/pages/Hot.vue'
// import Sort from '../city/pages/Sort.vue'
import List from '../city/pages/List.vue'
// import BScroll from '@better-scroll/core'
export default{
  data(){
    return{
      hotCityList:[],
      cityList:[],
    }
  },
  components:{
    Header,List
  },
  mounted(){
    this.$http.get('/api/AllCity.json').then(res=>{
      const d=res.data;
      this.hotCityList=d.hotCityList;
      this.cityList=d.cityList
    })
  }
}
</script>
<style scoped>
.city{
  background-color: #f5f5f5;
}
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: .88rem;
  overflow: hidden;
  /* height: 100%; */
}
</style>