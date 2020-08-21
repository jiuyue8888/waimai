<template>
    <div class="tabBar">
        <van-tabbar v-model="activeBar">
            <van-tabbar-item icon="wap-home-o" @click="$router.push('/')">首页</van-tabbar-item>
            <van-tabbar-item badge="3" icon="logistics">跑腿</van-tabbar-item>

            <van-tabbar-item icon="description" @click="$router.push('/orderList')">订单</van-tabbar-item>
            <van-tabbar-item icon="contact" @click="$router.push('/center')">我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template>
<script>

    export default {
        components: {},
        props:['active'],
        data() {
            return {
                activeBar:this.active
            }
        },
    }
</script>

<style lang="less">
    @import './index.less';
</style>
