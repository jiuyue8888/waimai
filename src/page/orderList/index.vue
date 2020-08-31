<template>
    <div class="orderList">
        <van-search v-model="selectName" shape="round" placeholder="搜索我的订单" v-show="false"/>
        <van-tabs v-model="active" sticky @change="change">
            <van-tab v-for="(item,id) in list" :key="id" :title="item">
                <div class="pingjia">

                    <dl v-for="(item,id) in data">
                        <dt><img :src="item.shopLogo"></dt>
                        <dd>
                            <div @click="goDetail(item)">
                                <h3><span @click="$router.push('/storeDetail')">{{item.shopName}}</span>
                                    <van-tag plain type="danger">{{getStatus(item.orderState)}}</van-tag>
                                </h3>
                                <span class="time">{{item.orderDate}}</span>
                                <p><span>{{item.goodsName}}</span><em>¥{{item.orderPrice/100}}</em></p>
                            </div>
                            <div style="text-align: right">
                                <van-tag type="primary" size="medium" @click="dOrder(item)">删除订单</van-tag>
                                <van-tag type="primary" size="medium"
                                         @click="getL(item)">{{item.shopName=='跑腿订单'?'再来一单':'查看详情'}}
                                </van-tag>
                            </div>
                        </dd>
                    </dl>


                </div>
            </van-tab>

        </van-tabs>
        <vTabBar :active="2"/>
    </div>
</template>
<script>
    import tabBar from '@/components/tabBar';
    import {getOrderListByOrderState, deleteOrder} from '@/server/index.js';
    import {Toast} from 'vant';

    export default {
        components: {
            'vTabBar': tabBar
        },
        data() {
            return {
                isLogin: false,
                selectName: '',
                active: 0,
                list: ['全部', '待支付', '待接单', '派单中', '已完成'],
                data: [],
            }
        },
        mounted() {
            this.getList(0)

        },
        onReady() {

        },
        onShow() {


        },

        methods: {
            change(id) {
                console.log(id)
                this.getList(id)
            },
            getStatus(id) {
                let value = '';
                switch (id) {
                    case 1:
                        value = '待支付'
                        break;
                    case 3:
                        value = '待接单'
                        break;
                    case 4:
                        value = '配送中'
                        break;
                    case 5:
                        value = '已完成'
                        break;
                }
                return value;
            },
            getList(id) {
                getOrderListByOrderState({
                    userId: sessionStorage.getItem('id'),
                    orderState: id > 1 ? id + 1 : id,
                    pageNum: 1
                }).then(res => {
                    if (res.errorCode == -1) {
                        this.data = res.body.orderList
                    } else {
                        Toast(res.msg)
                    }
                })
            },
            getL(item) {
                //$router.push(item.shopName=='跑腿订单'?'/paotui':'/')
                if (item.shopName == '跑腿订单') {
                    this.$router.push('/paotui')
                } else {
                    this.$router.push({
                        path: '/storeDetail',
                        query: {
                            id: item.orderId
                        }
                    })
                }
            },
            dOrder(item) {
                deleteOrder({
                    orderId: item.orderId,
                    userId: sessionStorage.getItem('id'),
                    type: item.shopName == '跑腿订单' ? 2 : 1
                }).then(res => {
                    Toast('删除成功')
                })
            },
            goDetail(item){
                this.$router.push({
                    path:item.orderState==5?'/orderDone':'/orderDoing',
                    query:{
                        id:item.orderId,
                        type:item.shopName == '跑腿订单' ? 2 : 1
                    }
                })
            }


        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>