<template>
    <div class="home">
        <Header></Header>
        <Swiper></Swiper>
        <Icons></Icons>
        <Location></Location>
        <Activity></Activity>
        <Hot></Hot>
    </div>
</template>
<script>
import Header from './pages/Header.vue'
import Swiper from './pages/swiper'
import Icons from './pages/Icons.vue';
import Location from './pages/Location.vue';
import Activity from './pages/Activity.vue'
import Hot from './pages/Hot.vue'
export default{
    components:{
        Header,Swiper,Icons,
        Location,Activity,Hot
    }
}
</script>
<style scoped>
.home{
    background-color: #f5f5f5;
}
</style>