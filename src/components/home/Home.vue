<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <Icons></Icons>
    </div>
</template>
<script>
import Header from './pages/Header.vue'
import Swiper from './pages/swiper.vue';
import Icons from './pages/Icons.vue';
export default{
    components:{
        Header,Swiper,Icons
    }
}
</script>
