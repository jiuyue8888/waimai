<template>
    <div class="orderList">
        <van-nav-bar

                left-arrow
                @click-left="$router.go(-1)"
        />
        <van-cell label="预计15分后到达" title="正在为您配送">
            <template #default>
                <van-tag type="primary">催单</van-tag>
                <van-tag type="success">联系商家</van-tag>
            </template>

        </van-cell>
        <van-cell label="好评100%">

            <template #title>
                <p class="doing"><img src="../../img/bg.jpg"> 张三</p>
            </template>
            <template #default>
                <van-icon name="phone" style="font-size: 25px"/>
            </template>

        </van-cell>


    </div>
</template>
<script>

    export default {

        data() {
            return {

            }
        },
        onLoad() {


        },
        onReady() {

        },
        onShow() {


        },

        methods: {}
    }
</script>
<style lang='less'>
    @import "index.less";

</style>