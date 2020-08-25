<template>
    <div class="orderList">
        <van-search v-model="selectName" shape="round" placeholder="搜索我的订单"/>
        <van-tabs v-model="active" sticky>
            <van-tab title="全部">
                <div class="pingjia">

                    <dl @click="$router.push('/orderDone')">
                        <dt><img src="../../img/user-bg.jpg"></dt>
                        <dd>
                            <h3><span @click="$router.push('/storeDetail')">店铺名称</span>
                                <van-tag plain type="danger">已送达</van-tag>
                            </h3>
                            <span class="time">2020-02-02</span>
                            <p><span>大盘鸡等商品</span><em>¥33.33</em></p>
                            <div style="text-align: right">
                                <van-tag type="primary" size="medium">删除订单</van-tag>
                                <van-tag type="primary" size="medium">再来一单</van-tag>
                            </div>
                        </dd>
                    </dl>
                    <dl @click="$router.push('/orderDoing')">
                        <dt><img src="../../img/user-bg.jpg"></dt>
                        <dd>
                            <h3><span @click="$router.push('/storeDetail')">店铺名称</span>
                                <van-tag plain type="danger">已送达</van-tag>
                            </h3>
                            <span class="time">2020-02-02</span>
                            <p><span>大盘鸡等商品</span><em>¥33.33</em></p>
                            <div style="text-align: right">
                                <van-tag type="primary" size="medium">删除订单</van-tag>
                                <van-tag type="primary" size="medium">再来一单</van-tag>
                            </div>
                        </dd>
                    </dl>


                </div>
            </van-tab>
            <van-tab title="待付款"></van-tab>
            <van-tab title="待收货"></van-tab>
            <van-tab title="待评价"></van-tab>
        </van-tabs>
        <vTabBar :active="2"/>
    </div>
</template>
<script>
    import tabBar from '@/components/tabBar';

    export default {
        components: {
            'vTabBar':tabBar
        },
        data(){
            return {
                isLogin:false,

            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {



        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>