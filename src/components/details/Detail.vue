<template>
    <div class="detail">
        <Banner></Banner>
        <Header></Header>
        <div style="height:2000px"></div>
    </div>
</template>
<script>
import Header from './pages/Header.vue'
import Banner from './pages/Banner.vue'
export default{
    components:{
        Header,Banner
    },
    activated(){
        document.documentElement.scrollTop=0
    }
}
</script>
<style scoped>

</style>