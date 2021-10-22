<template>
    <div class="activity border-top">
        <div class="item">
            <img src="@/assets/menpiaotemai.jpg">
        </div>
        <div class="item">
            <img src="@/assets/shuqitehui.jpg">
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
.activity{
    display: flex;
    font-size: .28rem;
    text-align: center;
    line-height: 1rem;
    position: relative;
    margin-top: .2rem;
}
.item{
    flex: 1;
    height: 1.4rem;
    /* background-color: chartreuse; */
}
img{
    width: 98%;
    height: 100%;
}
</style>