<template>
    <div class="vacation">
        <div class="vacation-title">
            周末去哪儿
        </div>
        <ul>
            <li class="vacation-item" v-for="item in VacationList" :key="item.id">
                <div class="vacation-img">
                    <img :src="item.imgUrl">
                </div>
                <div class="vacation-msg">
                    <p>{{item.msg1}}</p>
                    <p>{{item.msg2}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    props:["VacationList"],
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.vacation-title{
    font-size: .36rem;
    padding:.24rem
}
.vacation-item{
    background-color: white;
    font-size: .24rem;
}
.vacation-item .vacation-img{
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
}
.vacation-item img{
    width: 100%;
    height: 2rem
}
.vacation-msg{
    padding: .2rem 0 .2rem .2rem;
}
.vacation-msg p{
    margin: .2rem 0;
    font-weight: bold;
    font-size: .32rem;
}
/* p+p是p标签后面的第一个p */
.vacation-msg p+p{
    font-weight: normal;
    font-size: .26rem;
}

</style>